# CLAUDE.md

Guidance for Claude Code when working in this repo.

## What this repo is

A single-purpose project: design static image ads as HTML/CSS and render them to PNG with Playwright. Square format (1080×1080) by default.

Just two skills:
- **bold-text-designer** — 20 standalone HTML templates for bold-text billboard ads
- **campaign-manager** — scaffolds per-campaign folders that define project, ICP, and offer

There is intentionally **no** funnel optimizer, no image reviewer, no Meta/HighLevel integration, no Gemini image generation. If a request requires any of those, say so — don't try to recreate them here.

## Before any work

1. Read `skills/bold-text-designer/SKILL.md` — the design rules and the catalog of 20 styles.
2. Read `skills/shared/HTML-RENDER-REFERENCE.md` — HTML structure standard and the render workflow.
3. If working on a specific campaign, read `campaigns/{slug}/CAMPAIGN.md` for ICP and offer.

## Defaults

- **Image size:** 1080×1080 (square). Only override when a campaign brief explicitly asks for a different ratio.
- **Production method:** HTML/CSS in a single self-contained file, rendered via `skills/shared/render-static.js`.
- **No external images** — pure CSS shapes, gradients, Unicode.

## Directory structure

```
html-ad-designer/
├── CLAUDE.md
├── README.md
├── campaigns/
│   ├── CAMPAIGNS.md
│   ├── _template/CAMPAIGN.md
│   └── {slug}/
│       ├── CAMPAIGN.md
│       └── assets/{html,images}/
└── skills/
    ├── bold-text-designer/
    │   ├── SKILL.md
    │   └── templates/style-01…style-20.html
    ├── campaign-manager/SKILL.md
    └── shared/
        ├── HTML-RENDER-REFERENCE.md
        ├── render-static.js
        └── package.json
```

## Rendering

```bash
node skills/shared/render-static.js <html> <output-dir> [--prefix name] [--scale 2]
```

If Chromium isn't installed: `cd skills/shared && npm install && npx playwright install chromium`.

## Workflow for creating new ads

1. If no campaign exists for this work, create one — see `skills/campaign-manager/SKILL.md`.
2. Pick a starting template from `skills/bold-text-designer/templates/`.
3. Copy it to `campaigns/{slug}/assets/html/{descriptive-name}.html`.
4. Edit the CSS color variables (top of the file) and the visible text.
5. Render to `campaigns/{slug}/assets/images/`.
6. QC against the checklist in `skills/bold-text-designer/SKILL.md`.

## What NOT to do

- Don't store ads at the repo root — they belong inside a `campaigns/{slug}/assets/` folder.
- Don't introduce JavaScript inside ad HTML.
- Don't pull in external images, fonts that aren't on Google Fonts, or any network resource other than Google Fonts via `@import`.
- Don't recreate skills from the source project (`Inspired Ads And Funnel`). Scope here is intentionally narrow.
