# CLAUDE.md

Guidance for Claude Code when working in this repo.

## What this repo is

A single-purpose project: design static image ads as HTML/CSS and render them to PNG with Playwright. Square format (1080×1080) by default.

Just two skills:
- **bold-text-designer** — 20 standalone HTML templates for bold-text billboard ads
- **campaign-manager** — scaffolds per-campaign folders that define project, ICP, and offer


## Before any work

1. Read `skills/bold-text-designer/SKILL.md` — the design rules and the catalog of 20 styles.
2. Read `skills/shared/HTML-RENDER-REFERENCE.md` — HTML structure standard and the render workflow.
3. If working on a specific campaign, read `campaigns/{slug}/CAMPAIGN.md` for ICP and offer.

## Defaults

- **Image size:** 1080×1080 (square). Only override when a campaign brief explicitly asks for a different ratio.
- **Production method:** HTML/CSS in a single self-contained file, rendered via `skills/shared/render-static.js`.
- **Imagery is allowed** — inline SVG, base64-embedded images, CSS shapes, gradients, and Unicode all work. The real constraint is "no network fetches at render time" — embed everything in the HTML so Playwright can render it offline.

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
        ├── editor-server.js
        ├── editor/index.html
        └── package.json
```

## Rendering

```bash
node skills/shared/render-static.js <html> <output-dir> [--prefix name] [--scale 2]
```

If Chromium isn't installed: `cd skills/shared && npm install && npx playwright install chromium`.

## Visual editor (live preview + one-click PNG)

```bash
cd skills/shared && npm run editor
# open http://localhost:5173/
```

Two-pane editor: HTML on the left, live iframe preview on the right. Pick a template, pick a campaign, name the file, hit **Save & Render PNG**. Writes `campaigns/{slug}/assets/html/{name}.html` and `campaigns/{slug}/assets/images/{name}.png` using the same `render-static.js` pipeline as the CLI.

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
- Don't reference images by URL (`<img src="https://...">` or `background: url(https://...)`) — embed them as inline SVG or base64 data URIs instead. Same goes for fonts: only Google Fonts via `@import` are allowed as a network resource at render time.
- Don't recreate skills from the source project (`Inspired Ads And Funnel`). Scope here is intentionally narrow.
