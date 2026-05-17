#!/usr/bin/env node
/**
 * backfill-copy.js
 *
 * Walks every ad folder under campaigns/{slug}/ads/{name}/ and writes a
 * COPY.md + copy.json next to the {name}.html if either is missing. Used
 * once after the layout migration; safe to re-run.
 */

const fs = require('fs');
const path = require('path');
const { writeCopyFiles } = require('../extract-ad-copy');

const REPO_ROOT = path.resolve(__dirname, '..', '..', '..');
const CAMPAIGNS_DIR = path.join(REPO_ROOT, 'campaigns');

function listCampaigns() {
  if (!fs.existsSync(CAMPAIGNS_DIR)) return [];
  return fs.readdirSync(CAMPAIGNS_DIR, { withFileTypes: true })
    .filter(d => d.isDirectory() && !d.name.startsWith('_') && !d.name.startsWith('.'))
    .map(d => d.name);
}

let total = 0;
let mdWritten = 0;
let jsonWritten = 0;

for (const campaign of listCampaigns()) {
  const adsDir = path.join(CAMPAIGNS_DIR, campaign, 'ads');
  if (!fs.existsSync(adsDir)) continue;
  for (const entry of fs.readdirSync(adsDir, { withFileTypes: true })) {
    if (!entry.isDirectory() || entry.name.startsWith('.') || entry.name.startsWith('_')) continue;
    const adName = entry.name;
    const adDir = path.join(adsDir, adName);
    const htmlPath = path.join(adDir, 'images', `${adName}.html`);
    if (!fs.existsSync(htmlPath)) continue;
    const html = fs.readFileSync(htmlPath, 'utf8');
    const { wrote } = writeCopyFiles({ adDir, adName, campaignSlug: campaign, html });
    total++;
    if (wrote.md) mdWritten++;
    if (wrote.json) jsonWritten++;
    const flag = (wrote.md || wrote.json)
      ? `[wrote ${[wrote.md && 'COPY.md', wrote.json && 'copy.json'].filter(Boolean).join(' + ')}]`
      : '[skipped — already exists]';
    console.log(`${campaign}/${adName} ${flag}`);
  }
}

console.log(`\nProcessed ${total} ad(s). Wrote ${mdWritten} COPY.md and ${jsonWritten} copy.json file(s).`);
