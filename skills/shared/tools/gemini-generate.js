#!/usr/bin/env node
/**
 * gemini-generate.js — call Google Gemini 2.5 Flash Image (Nano Banana) to
 * produce a 1080x1080 ad PNG from a text prompt.
 *
 * Usage:
 *   node gemini-generate.js --prompt-file path/to/prompt.txt --out path/to/out.png
 *   node gemini-generate.js --prompt "inline prompt string"  --out path/to/out.png
 *   node gemini-generate.js --check     # validate API key only, no image generated
 *
 * Env:
 *   GEMINI_API_KEY        required — get one at https://aistudio.google.com/apikey
 *   GEMINI_IMAGE_MODEL    optional — defaults to gemini-2.5-flash-image
 *
 * Loads .env from the workspace root if present.
 */

const fs = require('fs');
const path = require('path');

// ── Load .env from workspace root if it exists ──
function loadEnv() {
  // Walk up from this file looking for a .env at the workspace root.
  let dir = __dirname;
  for (let i = 0; i < 6; i++) {
    const envPath = path.join(dir, '.env');
    if (fs.existsSync(envPath)) {
      const lines = fs.readFileSync(envPath, 'utf8').split('\n');
      for (const line of lines) {
        const m = line.match(/^\s*([A-Z_][A-Z0-9_]*)\s*=\s*(.*)\s*$/);
        if (!m) continue;
        const [, key, rawVal] = m;
        if (process.env[key]) continue; // don't override real env
        const val = rawVal.replace(/^["'](.*)["']$/, '$1');
        process.env[key] = val;
      }
      return envPath;
    }
    const parent = path.dirname(dir);
    if (parent === dir) break;
    dir = parent;
  }
  return null;
}

// ── Tiny arg parser ──
function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--check') args.check = true;
    else if (a === '--prompt') args.prompt = argv[++i];
    else if (a === '--prompt-file') args.promptFile = argv[++i];
    else if (a === '--out') args.out = argv[++i];
    else if (a === '--model') args.model = argv[++i];
    else if (a === '--help' || a === '-h') args.help = true;
  }
  return args;
}

function usage() {
  console.log(`Usage:
  node gemini-generate.js --prompt-file <path> --out <path.png>
  node gemini-generate.js --prompt "<text>"    --out <path.png>
  node gemini-generate.js --check

Env vars:
  GEMINI_API_KEY        (required)
  GEMINI_IMAGE_MODEL    (optional, default: gemini-2.5-flash-image)
`);
}

async function callGemini({ apiKey, model, prompt }) {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;
  const body = {
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: {
      responseModalities: ['IMAGE'],
    },
  };
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const text = await res.text();
  let json;
  try { json = JSON.parse(text); } catch { json = null; }
  if (!res.ok) {
    const msg = json?.error?.message || text;
    const err = new Error(`Gemini API error (${res.status}): ${msg}`);
    err.status = res.status;
    err.body = json;
    throw err;
  }
  return json;
}

function extractImageBase64(response) {
  const parts = response?.candidates?.[0]?.content?.parts || [];
  for (const part of parts) {
    if (part.inlineData?.data) {
      return {
        base64: part.inlineData.data,
        mimeType: part.inlineData.mimeType || 'image/png',
      };
    }
  }
  return null;
}

async function main() {
  const envPath = loadEnv();
  const args = parseArgs(process.argv.slice(2));

  if (args.help) {
    usage();
    process.exit(0);
  }

  const apiKey = process.env.GEMINI_API_KEY;
  const model = args.model || process.env.GEMINI_IMAGE_MODEL || 'gemini-2.5-flash-image';

  if (!apiKey) {
    console.error('✗ GEMINI_API_KEY is not set.');
    console.error('  Set it in your .env file (workspace root) or as an environment variable.');
    console.error('  Get a key at https://aistudio.google.com/apikey');
    if (envPath) console.error(`  (loaded .env from ${envPath} but no GEMINI_API_KEY in it)`);
    process.exit(1);
  }

  // ── Key-only health check ──
  if (args.check) {
    try {
      // Use a tiny text-only generation to validate the key without spending
      // an image-generation credit.
      const probeUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${apiKey}`;
      const res = await fetch(probeUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents: [{ parts: [{ text: 'ping' }] }] }),
      });
      if (!res.ok) {
        const body = await res.text();
        console.error(`✗ API key check failed (${res.status}): ${body.slice(0, 300)}`);
        process.exit(1);
      }
      console.log('✓ Gemini API key works');
      process.exit(0);
    } catch (err) {
      console.error('✗ Network or auth error:', err.message);
      process.exit(1);
    }
  }

  // ── Image generation ──
  if (!args.out) {
    console.error('✗ --out is required.');
    usage();
    process.exit(1);
  }

  let prompt = args.prompt;
  if (args.promptFile) {
    if (!fs.existsSync(args.promptFile)) {
      console.error(`✗ prompt file not found: ${args.promptFile}`);
      process.exit(1);
    }
    prompt = fs.readFileSync(args.promptFile, 'utf8');
  }
  if (!prompt) {
    console.error('✗ provide --prompt "<text>" or --prompt-file <path>');
    usage();
    process.exit(1);
  }

  // Ensure output directory exists.
  const outDir = path.dirname(path.resolve(args.out));
  fs.mkdirSync(outDir, { recursive: true });

  console.log(`→ calling ${model}…`);
  const t0 = Date.now();
  let response;
  try {
    response = await callGemini({ apiKey, model, prompt });
  } catch (err) {
    console.error(err.message);
    if (err.status === 401 || err.status === 403) {
      console.error('  Check your GEMINI_API_KEY in .env.');
    }
    process.exit(1);
  }
  const elapsed = ((Date.now() - t0) / 1000).toFixed(1);

  const image = extractImageBase64(response);
  if (!image) {
    console.error('✗ Gemini returned no image. Full response:');
    console.error(JSON.stringify(response, null, 2).slice(0, 2000));
    process.exit(1);
  }

  fs.writeFileSync(args.out, Buffer.from(image.base64, 'base64'));
  console.log(`✓ wrote ${args.out} (${elapsed}s)`);

  // Save the prompt next to the image for reproducibility, if the
  // caller didn't pass --prompt-file pointing at the same name.
  const promptOut = args.out.replace(/\.png$/i, '.prompt.txt');
  if (promptOut !== args.promptFile) {
    fs.writeFileSync(promptOut, prompt);
    console.log(`✓ wrote ${promptOut}`);
  }
}

main().catch((err) => {
  console.error('✗ Unexpected error:', err.stack || err.message);
  process.exit(1);
});
