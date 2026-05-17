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
│   ├── _template/
│   │   ├── CAMPAIGN.md                    ← Per-campaign brief (ICP, offer, messaging)
│   │   └── ads/                           ← Empty — one folder per ad goes here
│   └── {slug}/
│       ├── CAMPAIGN.md
│       └── ads/
│           └── {ad-name}/                 ← One folder per ad
│               ├── COPY.md                ← Canonical copy record (the ad's identity)
│               ├── copy.json              ← Same, machine-readable
│               └── images/                ← All visual artifacts derive from COPY
│                   ├── {ad-name}.html     ← Rendered-design markup
│                   └── {ad-name}.png      ← Rendered PNG
└── skills/
    ├── bold-text-designer/
    │   ├── SKILL.md                       ← The designer skill
    │   └── templates/                     ← style-01.html, style-02.html, …
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

**Hierarchy is Ad → Copy → Images.** The copy file IS the ad. Everything visual is downstream of it.

1. **Create a campaign** — copy `campaigns/_template/` to `campaigns/{slug}/`, fill in ICP and offer.
2. **Pick a template** — choose one of the styles in `skills/bold-text-designer/templates/`.
3. **Make the ad folder** — `campaigns/{slug}/ads/{ad-name}/images/`. Copy the template into `images/{ad-name}.html`. Edit headline / colors / visible text.
4. **Render the PNG** — `node skills/shared/render-static.js campaigns/{slug}/ads/{ad-name}/images/{ad-name}.html campaigns/{slug}/ads/{ad-name}/images/`. The PNG lands next to the HTML.
5. **Seed/finish the COPY record** — `node skills/shared/tools/backfill-copy.js` writes `COPY.md` + `copy.json` at the ad root (auto-fills headline/subtext from the HTML). Open `COPY.md` and fill in the angle, promise, ICP language, and image direction by hand.
6. **Ship** — upload the PNG.

If you ever generate non-HTML imagery for an ad (AI image tools, etc.), read `COPY.md` first and feed its fields into the prompt. The image must be congruent with the copy.

The editor (`cd skills/shared && npm run editor`) collapses steps 3–5 into one click and handles the layout for you.
