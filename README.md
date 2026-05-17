# HTML Ad Designer

A focused, single-skill repo for designing bold-text static image ads via HTML/CSS rendered to PNG with Playwright.

## What This Is

One skill, twenty templates, square-format by default. Every ad is a self-contained HTML file rendered by a headless Chromium shot of the `<body>` element. The output is a production-ready PNG you can ship to Meta, Google, LinkedIn, or anywhere else 1080×1080 is acceptable.

## Defaults

- **Image size:** 1080×1080 (square)
- **Production method:** HTML/CSS + Playwright
- **Imagery is allowed** — inline SVG, base64-embedded images, CSS shapes, gradients, and Unicode glyphs. Embed everything in the HTML; no network fetches at render time.

## Layout

```
html-ad-designer/
├── CLAUDE.md                              ← Project guidance for AI
├── README.md
├── campaigns/
│   ├── CAMPAIGNS.md                       ← Index of campaigns
│   └── _template/CAMPAIGN.md              ← Per-campaign brief (ICP, offer, messaging)
└── skills/
    ├── bold-text-designer/
    │   ├── SKILL.md                       ← The designer skill
    │   └── templates/
    │       ├── style-01-bold-question.html
    │       ├── style-02-giant-stat.html
    │       └── … (20 total)
    ├── campaign-manager/SKILL.md          ← Scaffolds new campaign folders
    └── shared/
        ├── HTML-RENDER-REFERENCE.md
        ├── render-static.js               ← Playwright renderer
        └── package.json
```

## Quick Start

```bash
cd skills/shared
npm install
npx playwright install chromium      # one-time browser download

# Render any template
node render-static.js ../bold-text-designer/templates/style-01-bold-question.html ./out/
```

## Workflow

1. **Create a campaign** — copy `campaigns/_template/` to `campaigns/{slug}/`, fill in ICP and offer.
2. **Pick a template** — choose one of the 20 styles in `skills/bold-text-designer/templates/`.
3. **Copy and customize** — drop it into `campaigns/{slug}/assets/html/`, edit the headline/colors.
4. **Render** — `node skills/shared/render-static.js <html-file> campaigns/{slug}/assets/images/`.
5. **Ship** — upload the PNG.
