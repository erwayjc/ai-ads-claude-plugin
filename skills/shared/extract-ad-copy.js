/**
 * extract-ad-copy.js
 *
 * Pulls the visible copy out of an ad's HTML so we can write a sibling
 * COPY.md + copy.json that the image-generation step reads.
 *
 * The HTML is the design surface — copy is mixed in with styling, structure,
 * and SVG. The COPY files are the canonical, human/machine-readable record of
 * what the ad actually says, so any image prompt can be grounded in literal
 * headlines / promises / ICP language.
 *
 * Two consumers:
 *   - editor-server.js calls buildCopyFiles() on every save-and-render.
 *   - tools/backfill-copy.js calls it once per existing ad to seed the files.
 */

const fs = require('fs');
const path = require('path');

// Pull `selector { ... font-size: Npx ... }` rules out of a <style> block.
// Returns a map from a normalized selector key to its font size in px so we
// can rank text nodes by the largest size they inherit.
function parseFontSizes(styleText) {
  const sizes = new Map();
  // Match selector { ... } blocks. Selectors may be comma-separated.
  const ruleRe = /([^{}]+)\{([^}]*)\}/g;
  let m;
  while ((m = ruleRe.exec(styleText)) !== null) {
    const selectors = m[1].split(',').map(s => s.trim()).filter(Boolean);
    const body = m[2];
    const fs = body.match(/font-size\s*:\s*(\d+(?:\.\d+)?)\s*px/i);
    if (!fs) continue;
    const size = parseFloat(fs[1]);
    for (const sel of selectors) {
      // Normalize: drop pseudo-elements, take last class/tag token.
      const clean = sel.replace(/::?[a-z-]+$/i, '').trim();
      sizes.set(clean, Math.max(sizes.get(clean) || 0, size));
    }
  }
  return sizes;
}

// Walk body element by element, tagging each text fragment with the largest
// font-size from any selector its parent's class/tag matches. Returns an
// array of { text, size } in document order.
function extractRankedFragments(html) {
  const styleMatch = html.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
  const sizes = styleMatch ? parseFontSizes(styleMatch[1]) : new Map();
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  if (!bodyMatch) return [];
  // <br> is a soft line-break inside a text element, not a structural boundary.
  // Replace it with a space so multi-line headlines stay one fragment.
  // Also drop SVG content entirely — it's decoration, not copy.
  let body = bodyMatch[1]
    .replace(/<svg[\s\S]*?<\/svg>/gi, ' ')
    .replace(/<br\s*\/?>/gi, ' ');

  // Quick & dirty: split on tag boundaries, track an open-tag stack, and
  // attribute each text run to the most-specific currently-open element.
  const out = [];
  const tokenRe = /<\/?([a-zA-Z][a-zA-Z0-9]*)([^>]*)>|([^<]+)/g;
  const stack = []; // each: { tag, classes: [] }
  let t;
  while ((t = tokenRe.exec(body)) !== null) {
    const tag = t[1];
    const attrs = t[2] || '';
    const text = t[3];
    if (text != null) {
      const cleaned = text
        .replace(/&nbsp;/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/\s+/g, ' ')
        .trim();
      if (!cleaned) continue;
      // Find max font-size by looking at every open element's tag + classes.
      let maxSize = 0;
      for (const el of stack) {
        if (sizes.has(el.tag)) maxSize = Math.max(maxSize, sizes.get(el.tag));
        for (const c of el.classes) {
          if (sizes.has('.' + c)) maxSize = Math.max(maxSize, sizes.get('.' + c));
        }
      }
      out.push({ text: cleaned, size: maxSize });
      continue;
    }
    // Tag token.
    const isClose = t[0].startsWith('</');
    const isSelfClose = t[0].endsWith('/>') || /^(br|hr|img|input|meta|link)$/i.test(tag);
    if (isClose) {
      // Pop until we find a matching tag (forgiving for malformed HTML).
      for (let i = stack.length - 1; i >= 0; i--) {
        if (stack[i].tag === tag.toLowerCase()) {
          stack.splice(i, 1);
          break;
        }
      }
    } else if (!isSelfClose) {
      const classMatch = attrs.match(/class\s*=\s*"([^"]*)"/i);
      const classes = classMatch ? classMatch[1].split(/\s+/).filter(Boolean) : [];
      stack.push({ tag: tag.toLowerCase(), classes });
    }
  }
  return out;
}

// Merge consecutive fragments that share the same font-size — handles
// `<span class="em">` mid-headline that would otherwise split a single
// sentence into multiple fragments. Document order is preserved.
function mergeAdjacentSameSize(fragments) {
  const out = [];
  for (const f of fragments) {
    const prev = out[out.length - 1];
    if (prev && prev.size === f.size) {
      prev.text = `${prev.text} ${f.text}`
        .replace(/\s+/g, ' ')
        .replace(/\s+([?!.,;:])/g, '$1')
        .trim();
    } else {
      out.push({ ...f });
    }
  }
  return out;
}

// Pick a headline candidate: the largest text fragment that's at least 3 chars.
// Pick a subtext candidate: next-largest distinct fragment.
function pickHeadlineAndSubtext(fragments) {
  const ranked = fragments
    .filter(f => f.text.length >= 3 && f.size > 0)
    .sort((a, b) => b.size - a.size);
  const headline = ranked[0] ? ranked[0].text : '';
  // Subtext = next fragment with a smaller size than the headline.
  const sub = ranked.find(f => f.text !== headline && f.size < (ranked[0]?.size || Infinity));
  return { headline, subtext: sub ? sub.text : '' };
}

// Main entry: HTML in → { headline, subtext, allCopy } out.
// `allCopy` is every visible text fragment in document order, useful as a
// dump for the COPY.md "Full visible copy" section.
function extractAdCopy(html) {
  const raw = extractRankedFragments(html);
  const merged = mergeAdjacentSameSize(raw);
  const { headline, subtext } = pickHeadlineAndSubtext(merged);
  const allCopy = merged.map(f => f.text);
  return { headline, subtext, allCopy };
}

// COPY.md is JUST the ad copy — verbatim text, nothing interpretive.
// The designer reads this file and infers angle / promise / image direction
// themselves using the design skills. No "fill in" placeholders, no
// editorial scaffolding.
function buildCopyMarkdown({ adName, allCopy }) {
  const fullCopy = allCopy.join('\n\n');
  return `# Ad copy: ${adName}

## Full ad copy (long-form, verbatim)

\`\`\`
${fullCopy}
\`\`\`
`;
}

// copy.json mirrors COPY.md — just the verbatim text in machine-readable form.
function buildCopyJson({ adName, allCopy, campaignSlug }) {
  return {
    ad: adName,
    campaign: campaignSlug,
    full_copy: allCopy,
  };
}

// Write COPY.md + copy.json into adDir. Never overwrites existing files —
// if a human has filled in angle/promise/etc, we don't want to clobber it.
// Returns { mdPath, jsonPath, wrote: { md, json } }.
function writeCopyFiles({ adDir, adName, campaignSlug, html }) {
  const extracted = extractAdCopy(html);
  const mdPath = path.join(adDir, 'COPY.md');
  const jsonPath = path.join(adDir, 'copy.json');
  const wrote = { md: false, json: false };
  if (!fs.existsSync(mdPath)) {
    const md = buildCopyMarkdown({ adName, campaignSlug, ...extracted });
    fs.writeFileSync(mdPath, md, 'utf8');
    wrote.md = true;
  }
  if (!fs.existsSync(jsonPath)) {
    const json = buildCopyJson({ adName, campaignSlug, ...extracted });
    fs.writeFileSync(jsonPath, JSON.stringify(json, null, 2) + '\n', 'utf8');
    wrote.json = true;
  }
  return { mdPath, jsonPath, wrote };
}

module.exports = {
  extractAdCopy,
  buildCopyMarkdown,
  buildCopyJson,
  writeCopyFiles,
};
