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

/**
 * Render an HTML file to a PNG.
 *
 * @param {Object} opts
 * @param {string} opts.inputPath  Absolute path to the source .html file.
 * @param {string} opts.outputPath Absolute path to the destination .png file.
 * @param {number} [opts.scale=1]  Device scale factor.
 * @param {number} [opts.width]    Override body width.
 * @param {number} [opts.height]   Override body height.
 * @returns {Promise<{width:number,height:number,scale:number,fillRatio:number,size:number,path:string}>}
 */
async function renderHtmlToPng({ inputPath, outputPath, scale = 1, width, height }) {
  const executablePath = findChromium();
  if (!executablePath) {
    throw new Error('Chromium not found. Install with: npx playwright install chromium');
  }

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });

  const browser = await chromium.launch({
    executablePath,
    headless: true,
    args: ['--font-render-hinting=none'],
  });

  try {
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

    const finalWidth = parseInt(width) || (bodyInfo && bodyInfo.width ? bodyInfo.width : 1080);
    const finalHeight = parseInt(height) || (bodyInfo && bodyInfo.height ? bodyInfo.height : 1080);

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

    const fillRatio = contentHeight / finalHeight;

    await page.locator('body').screenshot({
      path: outputPath,
      type: 'png',
    });

    const stats = fs.statSync(outputPath);
    return {
      width: finalWidth,
      height: finalHeight,
      scale,
      fillRatio,
      size: stats.size,
      path: outputPath,
    };
  } finally {
    await browser.close();
  }
}

async function renderStaticCli() {
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
  const filename = `${prefix}.png`;
  const outputPath = path.join(outputDir, filename);

  console.log(`Rendering: ${inputPath}`);
  console.log(`Output:    ${outputDir}\n`);

  const result = await renderHtmlToPng({
    inputPath,
    outputPath,
    scale,
    width: flags.width,
    height: flags.height,
  });

  console.log(`Image size: ${result.width}x${result.height} @ ${result.scale}x (${result.width * result.scale}x${result.height * result.scale} actual pixels)\n`);

  if (result.fillRatio < 0.9) {
    console.warn(`\n⚠️  CANVAS FILL WARNING: Content fills only ${Math.round(result.fillRatio * 100)}% of canvas height.`);
    console.warn(`   Content may appear cut off or have blank space. Fix the HTML to fill the canvas.\n`);
  }

  const sizeKB = Math.round(result.size / 1024);
  console.log(`  ✓ ${filename} (${sizeKB} KB)`);
  console.log(`\nDone. Image saved to ${outputDir}`);

  console.log('\n' + JSON.stringify({
    input: inputPath,
    outputDir,
    dimensions: { width: result.width, height: result.height, scale: result.scale },
    file: filename,
    path: result.path,
    size: result.size,
  }, null, 2));
}

module.exports = { renderHtmlToPng, findChromium };

if (require.main === module) {
  renderStaticCli().catch(err => {
    console.error('Render failed:', err.message);
    process.exit(1);
  });
}
