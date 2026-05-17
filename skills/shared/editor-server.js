#!/usr/bin/env node
/**
 * editor-server.js
 *
 * Local web app for visually editing HTML ads with live preview,
 * then saving the HTML and rendering a PNG into the chosen campaign folder.
 *
 * Start:  node editor-server.js        (or: npm run editor)
 * Open:   http://localhost:5173/
 */

const express = require('express');
const path = require('path');
const fs = require('fs');
const os = require('os');
const { renderHtmlToPng } = require('./render-static');
const { writeCopyFiles } = require('./extract-ad-copy');

const REPO_ROOT = path.resolve(__dirname, '..', '..');
const CAMPAIGNS_DIR = path.join(REPO_ROOT, 'campaigns');
const SKILLS_DIR = path.join(REPO_ROOT, 'skills');
const EDITOR_DIR = path.join(__dirname, 'editor');

const PORT = parseInt(process.env.PORT, 10) || 5173;

const app = express();
app.use(express.json({ limit: '5mb' }));
app.use(express.static(EDITOR_DIR));

function safeFilename(name) {
  return name.replace(/[^a-zA-Z0-9._-]/g, '-').replace(/^-+|-+$/g, '');
}

// Each ad lives in its own folder: campaigns/{slug}/ads/{name}/{name}.{html,png}.
// First save uses `base`; subsequent saves of a different draft under the same
// name get `base-v2`, `base-v3`, ... — a fresh folder per version.
function nextAvailableBase(adsDir, base) {
  const free = (suffix) => {
    const name = suffix ? `${base}-${suffix}` : base;
    return !fs.existsSync(path.join(adsDir, name));
  };
  if (free('')) return base;
  for (let v = 2; v < 10000; v++) {
    if (free(`v${v}`)) return `${base}-v${v}`;
  }
  throw new Error('Could not find an available filename');
}

function listCampaigns() {
  if (!fs.existsSync(CAMPAIGNS_DIR)) return [];
  return fs.readdirSync(CAMPAIGNS_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory() && !d.name.startsWith('_') && !d.name.startsWith('.'))
    .map(d => d.name)
    .sort();
}

// Discover every skill that has a templates/ folder. Returns
// [{ skill: 'bold-text-designer', name: 'style-01-bold-question.html' }, ...]
// sorted by skill name then template name.
function listTemplates() {
  if (!fs.existsSync(SKILLS_DIR)) return [];
  const skills = fs.readdirSync(SKILLS_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory() && !d.name.startsWith('_') && !d.name.startsWith('.') && d.name !== 'shared')
    .map(d => d.name)
    .sort();
  const out = [];
  for (const skill of skills) {
    const tplDir = path.join(SKILLS_DIR, skill, 'templates');
    if (!fs.existsSync(tplDir)) continue;
    const files = fs.readdirSync(tplDir).filter(f => f.endsWith('.html')).sort();
    for (const name of files) out.push({ skill, name });
  }
  return out;
}

// Resolve a "skill/name" pair to an absolute path inside the skills tree.
// Returns null if invalid or out of bounds.
function resolveTemplatePath(skill, name) {
  const safeSkill = safeFilename(skill);
  const safeName = safeFilename(name);
  if (!safeSkill || !safeName) return null;
  const tplDir = path.join(SKILLS_DIR, safeSkill, 'templates');
  const file = path.join(tplDir, safeName);
  if (!file.startsWith(tplDir) || !fs.existsSync(file)) return null;
  return file;
}

app.get('/api/campaigns', (req, res) => {
  res.json({ campaigns: listCampaigns() });
});

app.get('/api/templates', (req, res) => {
  res.json({ templates: listTemplates() });
});

// Serve a template by `skill/name`. Older URL form `/api/templates/:name`
// without a skill is still accepted and resolves against the first skill
// that owns a template with that filename.
app.get('/api/templates/:skill/:name', (req, res) => {
  const file = resolveTemplatePath(req.params.skill, req.params.name);
  if (!file) return res.status(404).json({ error: 'Template not found' });
  res.type('text/plain').send(fs.readFileSync(file, 'utf8'));
});

app.get('/api/templates/:name', (req, res) => {
  const name = safeFilename(req.params.name);
  const all = listTemplates();
  const hit = all.find(t => t.name === name);
  if (!hit) return res.status(404).json({ error: 'Template not found' });
  const file = resolveTemplatePath(hit.skill, hit.name);
  if (!file) return res.status(404).json({ error: 'Template not found' });
  res.type('text/plain').send(fs.readFileSync(file, 'utf8'));
});

// List all ads in a campaign. Layout is:
//   campaigns/{slug}/ads/{name}/
//     ├── COPY.md, copy.json          ← the ad copy (top-level, the ad's identity)
//     └── images/
//         ├── {name}.html             ← rendered-design markup
//         └── {name}.png              ← rendered PNG
// An ad shows up in the list if it has EITHER a rendered HTML or a COPY.md —
// the latter so long-form/text-only ads (no image yet) are still browsable.
// `hasHtml` tells the client whether the HTML can be loaded into the editor.
app.get('/api/campaign-assets/:campaign', (req, res) => {
  const campaign = safeFilename(req.params.campaign);
  if (!listCampaigns().includes(campaign)) {
    return res.status(404).json({ error: 'Unknown campaign' });
  }
  const adsDir = path.join(CAMPAIGNS_DIR, campaign, 'ads');
  if (!fs.existsSync(adsDir)) return res.json({ assets: [], items: [] });
  const items = fs.readdirSync(adsDir, { withFileTypes: true })
    .filter(d => d.isDirectory() && !d.name.startsWith('.') && !d.name.startsWith('_'))
    .map(d => d.name)
    .map(name => ({
      name,
      hasHtml: fs.existsSync(path.join(adsDir, name, 'images', `${name}.html`)),
      hasCopy: fs.existsSync(path.join(adsDir, name, 'COPY.md')),
    }))
    .filter(it => it.hasHtml || it.hasCopy)
    .sort((a, b) => a.name.localeCompare(b.name));
  // `assets` keeps the old shape (HTML-only) for the existing client; `items`
  // is the richer list including copy-only entries.
  const assets = items.filter(it => it.hasHtml).map(it => `${it.name}.html`);
  res.json({ assets, items });
});

app.get('/api/campaign-asset/:campaign/:name', (req, res) => {
  const campaign = safeFilename(req.params.campaign);
  const name = safeFilename(req.params.name);
  if (!listCampaigns().includes(campaign)) {
    return res.status(404).json({ error: 'Unknown campaign' });
  }
  const base = name.replace(/\.html$/i, '');
  const adsDir = path.join(CAMPAIGNS_DIR, campaign, 'ads');
  const file = path.join(adsDir, base, 'images', `${base}.html`);
  if (!file.startsWith(adsDir) || !fs.existsSync(file)) {
    return res.status(404).json({ error: 'Asset not found' });
  }
  res.type('text/plain').send(fs.readFileSync(file, 'utf8'));
});

app.post('/api/save-and-render', async (req, res) => {
  try {
    const { campaign, filename, html, scale } = req.body || {};
    if (!campaign || !filename || !html) {
      return res.status(400).json({ error: 'campaign, filename, and html are required' });
    }

    const campaigns = listCampaigns();
    if (!campaigns.includes(campaign)) {
      return res.status(400).json({ error: `Unknown campaign: ${campaign}` });
    }

    const base = safeFilename(filename.replace(/\.html$/i, ''));
    if (!base) {
      return res.status(400).json({ error: 'Invalid filename' });
    }

    const campaignDir = path.join(CAMPAIGNS_DIR, campaign);
    const adsDir = path.join(campaignDir, 'ads');
    fs.mkdirSync(adsDir, { recursive: true });

    // If we're re-saving an ad that already exists (same base name), overwrite
    // in place. Otherwise create a new folder, version-bumping if needed.
    const existingDir = path.join(adsDir, base);
    const reuseExisting = fs.existsSync(path.join(existingDir, 'images', `${base}.html`));
    const finalBase = reuseExisting ? base : nextAvailableBase(adsDir, base);
    const adDir = path.join(adsDir, finalBase);
    const imagesDir = path.join(adDir, 'images');
    fs.mkdirSync(imagesDir, { recursive: true });

    const htmlPath = path.join(imagesDir, `${finalBase}.html`);
    const pngPath = path.join(imagesDir, `${finalBase}.png`);
    fs.writeFileSync(htmlPath, html, 'utf8');

    // Seed COPY.md + copy.json at the ad root — these are the canonical copy
    // record that any image-generation step must read first. Only creates
    // files that don't already exist; never clobbers human-filled fields.
    const copyResult = writeCopyFiles({
      adDir,
      adName: finalBase,
      campaignSlug: campaign,
      html,
    });

    const result = await renderHtmlToPng({
      inputPath: htmlPath,
      outputPath: pngPath,
      scale: parseFloat(scale) || 1,
    });

    res.json({
      ok: true,
      htmlPath: path.relative(REPO_ROOT, htmlPath),
      pngPath: path.relative(REPO_ROOT, pngPath),
      copyMdPath: path.relative(REPO_ROOT, copyResult.mdPath),
      copyJsonPath: path.relative(REPO_ROOT, copyResult.jsonPath),
      copyFilesCreated: copyResult.wrote,
      pngUrl: `/api/image?path=${encodeURIComponent(path.relative(REPO_ROOT, pngPath))}&t=${Date.now()}`,
      dimensions: { width: result.width, height: result.height, scale: result.scale },
      fillRatio: result.fillRatio,
      size: result.size,
    });
  } catch (err) {
    console.error('save-and-render failed:', err);
    res.status(500).json({ error: err.message });
  }
});

// Serve PNGs from inside the repo (read-only, path-restricted).
app.get('/api/image', (req, res) => {
  const rel = req.query.path;
  if (!rel) return res.status(400).end();
  const abs = path.resolve(REPO_ROOT, rel);
  if (!abs.startsWith(REPO_ROOT) || !fs.existsSync(abs)) {
    return res.status(404).end();
  }
  res.sendFile(abs);
});

app.listen(PORT, () => {
  const url = `http://localhost:${PORT}/`;
  console.log(`HTML Ad Editor → ${url}`);
  console.log(`Repo root:       ${REPO_ROOT}`);
  console.log(`Campaigns:       ${listCampaigns().join(', ') || '(none)'}\n`);
});
