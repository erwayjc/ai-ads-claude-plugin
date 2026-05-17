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

const REPO_ROOT = path.resolve(__dirname, '..', '..');
const CAMPAIGNS_DIR = path.join(REPO_ROOT, 'campaigns');
const TEMPLATES_DIR = path.join(REPO_ROOT, 'skills', 'bold-text-designer', 'templates');
const EDITOR_DIR = path.join(__dirname, 'editor');

const PORT = parseInt(process.env.PORT, 10) || 5173;

const app = express();
app.use(express.json({ limit: '5mb' }));
app.use(express.static(EDITOR_DIR));

function safeFilename(name) {
  return name.replace(/[^a-zA-Z0-9._-]/g, '-').replace(/^-+|-+$/g, '');
}

// Pick the first version suffix where neither the .html nor the .png
// exists. First render: `base`. Subsequent: `base-v2`, `base-v3`, ...
function nextAvailableBase(htmlDir, imgDir, base) {
  const free = (suffix) => {
    const name = suffix ? `${base}-${suffix}` : base;
    const htmlPath = path.join(htmlDir, `${name}.html`);
    const pngPath = path.join(imgDir, `${name}.png`);
    return !fs.existsSync(htmlPath) && !fs.existsSync(pngPath);
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

function listTemplates() {
  if (!fs.existsSync(TEMPLATES_DIR)) return [];
  return fs.readdirSync(TEMPLATES_DIR)
    .filter(f => f.endsWith('.html'))
    .sort();
}

app.get('/api/campaigns', (req, res) => {
  res.json({ campaigns: listCampaigns() });
});

app.get('/api/templates', (req, res) => {
  res.json({ templates: listTemplates() });
});

app.get('/api/templates/:name', (req, res) => {
  const name = safeFilename(req.params.name);
  const file = path.join(TEMPLATES_DIR, name);
  if (!file.startsWith(TEMPLATES_DIR) || !fs.existsSync(file)) {
    return res.status(404).json({ error: 'Template not found' });
  }
  res.type('text/plain').send(fs.readFileSync(file, 'utf8'));
});

app.get('/api/campaign-assets/:campaign', (req, res) => {
  const campaign = safeFilename(req.params.campaign);
  if (!listCampaigns().includes(campaign)) {
    return res.status(404).json({ error: 'Unknown campaign' });
  }
  const htmlDir = path.join(CAMPAIGNS_DIR, campaign, 'assets', 'html');
  if (!fs.existsSync(htmlDir)) return res.json({ assets: [] });
  const assets = fs.readdirSync(htmlDir)
    .filter(f => f.endsWith('.html'))
    .sort();
  res.json({ assets });
});

app.get('/api/campaign-asset/:campaign/:name', (req, res) => {
  const campaign = safeFilename(req.params.campaign);
  const name = safeFilename(req.params.name);
  if (!listCampaigns().includes(campaign)) {
    return res.status(404).json({ error: 'Unknown campaign' });
  }
  const htmlDir = path.join(CAMPAIGNS_DIR, campaign, 'assets', 'html');
  const file = path.join(htmlDir, name);
  if (!file.startsWith(htmlDir) || !fs.existsSync(file)) {
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
    const htmlDir = path.join(campaignDir, 'assets', 'html');
    const imgDir = path.join(campaignDir, 'assets', 'images');
    fs.mkdirSync(htmlDir, { recursive: true });
    fs.mkdirSync(imgDir, { recursive: true });

    const finalBase = nextAvailableBase(htmlDir, imgDir, base);
    const htmlPath = path.join(htmlDir, `${finalBase}.html`);
    const pngPath = path.join(imgDir, `${finalBase}.png`);
    fs.writeFileSync(htmlPath, html, 'utf8');

    const result = await renderHtmlToPng({
      inputPath: htmlPath,
      outputPath: pngPath,
      scale: parseFloat(scale) || 1,
    });

    res.json({
      ok: true,
      htmlPath: path.relative(REPO_ROOT, htmlPath),
      pngPath: path.relative(REPO_ROOT, pngPath),
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
