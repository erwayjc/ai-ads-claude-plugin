#!/usr/bin/env node
/**
 * render-static.js
 *
 * Converts a single-image HTML ad into a production-ready PNG.
 * Screenshots the <body> element at exact ad dimensions.
 *
 * Default output: 1080x1080 (square). Override via CSS body width/height
 * or --width / --height flags.
 *
 * Usage:
 *   node render-static.js <input.html> [output-dir]
 *
 * Options:
 *   --width   Override body width in pixels (default: auto-detected from CSS, fallback 1080)
 *   --height  Override body height in pixels (default: auto-detected from CSS, fallback 1080)
 *   --prefix  Output filename (default: derived from input filename)
 *   --scale   Device scale factor (default: 1, use 2 for retina/2x)
 *
 * Examples:
 *   node render-static.js style-01.html ./images/
 *   node render-static.js style-02.html ./images/ --prefix giant-stat-v2
 *   node render-static.js style-03.html ./images/ --scale 2
 */

const { chromium } = require('playwright-core');
const path = require('path');
const fs = require('fs');
const os = require('os');

function findChromium() {
  const cacheDir = path.join(os.homedir(), 'Library', 'Caches', 'ms-playwright');
  if (!fs.existsSync(cacheDir)) {
    const linuxDir = path.join(os.homedir(), '.cache', 'ms-playwright');
    if (fs.existsSync(linuxDir)) return findChromiumIn(linuxDir);
    return null;
  }
  return findChromiumIn(cacheDir);
}

function findChromiumIn(cacheDir) {
  const entries = fs.readdirSync(cacheDir).filter(e => e.startsWith('chromium-')).sort().reverse();
  for (const entry of entries) {
    const macPath = path.join(cacheDir, entry, 'chrome-mac', 'Chromium.app', 'Contents', 'MacOS', 'Chromium');
    if (fs.existsSync(macPath)) return macPath;
    const linuxPath = path.join(cacheDir, entry, 'chrome-linux', 'chrome');
    if (fs.existsSync(linuxPath)) return linuxPath;
  }
  return null;
}

async function renderStatic() {
  const args = process.argv.slice(2);
  const flags = {};
  const positional = [];

  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith('--')) {
      flags[args[i].slice(2)] = args[i + 1];
      i++;
    } else {
      positional.push(args[i]);
    }
  }

  const inputFile = positional[0];
  if (!inputFile) {
    console.error('Usage: node render-static.js <input.html> [output-dir] [--width N] [--height N] [--prefix name] [--scale N]');
    process.exit(1);
  }

  const inputPath = path.resolve(inputFile);
  if (!fs.existsSync(inputPath)) {
    console.error(`File not found: ${inputPath}`);
    process.exit(1);
  }

  const outputDir = positional[1] ? path.resolve(positional[1]) : path.dirname(inputPath);
  const scale = parseFloat(flags.scale) || 1;
  const prefix = flags.prefix || path.basename(inputFile, '.html');

  fs.mkdirSync(outputDir, { recursive: true });

  const executablePath = findChromium();
  if (!executablePath) {
    console.error('Chromium not found. Install Playwright browsers: npx playwright install chromium');
    process.exit(1);
  }

  console.log(`Rendering: ${inputPath}`);
  console.log(`Output:    ${outputDir}`);
  console.log('');

  const browser = await chromium.launch({
    executablePath,
    headless: true,
    args: ['--font-render-hinting=none'],
  });

  const context = await browser.newContext({
    deviceScaleFactor: scale,
    viewport: { width: 1920, height: 1920 },
  });

  const page = await context.newPage();

  await page.goto(`file://${inputPath}`, {
    waitUntil: 'networkidle',
    timeout: 30000,
  });

  await page.evaluate(() => document.fonts.ready);

  const bodyInfo = await page.evaluate(() => {
    const style = getComputedStyle(document.body);
    return {
      width: parseInt(style.width),
      height: parseInt(style.height),
    };
  });

  const width = parseInt(flags.width) || (bodyInfo && bodyInfo.width ? bodyInfo.width : 1080);
  const height = parseInt(flags.height) || (bodyInfo && bodyInfo.height ? bodyInfo.height : 1080);
  console.log(`Image size: ${width}x${height} @ ${scale}x (${width * scale}x${height * scale} actual pixels)\n`);

  const contentHeight = await page.evaluate(() => {
    const body = document.body;
    const originalHeight = body.style.height;
    const originalMinHeight = body.style.minHeight;
    body.style.height = 'auto';
    body.style.minHeight = 'auto';
    const natural = body.scrollHeight;
    body.style.height = originalHeight;
    body.style.minHeight = originalMinHeight;
    return natural;
  });

  const fillRatio = contentHeight / height;
  if (fillRatio < 0.9) {
    console.warn(`\n⚠️  CANVAS FILL WARNING: Content height (${contentHeight}px) fills only ${Math.round(fillRatio * 100)}% of canvas height (${height}px).`);
    console.warn(`   Content may appear cut off or have blank space. Fix the HTML to fill the canvas.\n`);
  }

  const filename = `${prefix}.png`;
  const outputPath = path.join(outputDir, filename);

  await page.locator('body').screenshot({
    path: outputPath,
    type: 'png',
  });

  const stats = fs.statSync(outputPath);
  const sizeKB = Math.round(stats.size / 1024);
  console.log(`  ✓ ${filename} (${sizeKB} KB)`);

  await browser.close();

  console.log(`\nDone. Image saved to ${outputDir}`);

  const summary = {
    input: inputPath,
    outputDir,
    dimensions: { width, height, scale },
    file: filename,
    path: outputPath,
    size: stats.size,
  };
  console.log('\n' + JSON.stringify(summary, null, 2));
}

renderStatic().catch(err => {
  console.error('Render failed:', err.message);
  process.exit(1);
});
