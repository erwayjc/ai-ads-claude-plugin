# CLAUDE.md

Guidance for Claude Code when working in this repo.

## What this repo is

A single-purpose project: design static image ads as HTML/CSS and render them to PNG with Playwright. Square format (1080×1080) by default.

All design skills live under `skills/ad design skills/`. 

## Before any work

1. Read `skills/shared/HTML-RENDER-REFERENCE.md` — HTML structure standard and the render workflow.
2. If working on a specific campaign, read `campaigns/{slug}/CAMPAIGN.md` for ICP and offer.

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
│   ├── _template/
│   │   ├── CAMPAIGN.md
│   │   └── ads/
│   └── {slug}/
│       ├── CAMPAIGN.md
│       └── ads/
│           └── {ad-name}/            ← the ad
│               ├── COPY.md           ← canonical copy record (the ad's identity, created FIRST)
│               ├── copy.json         ← same fields, machine-readable
│               └── images/           ← everything visual — derives from COPY above
│                   ├── {ad-name}.html ← rendered-design markup
│                   └── {ad-name}.png  ← rendered PNG
└── skills/
    ├── ad design skills/        ← all 31 designer skills live here
    │   ├── bold-text-designer/       (templates + SKILL.md)
    │   ├── problem-solution-designer/ (templates + SKILL.md)
    │   ├── system-visual-designer/    (templates + SKILL.md)
    │   ├── chat-style-designer/       (SKILL.md only — no templates)
    │   └── native-*-designer/         (27 single-format native skills; each SKILL.md only, composes from scratch)
    ├── campaign-manager/SKILL.md
    └── shared/
        ├── HTML-RENDER-REFERENCE.md
        ├── render-static.js
        ├── editor-server.js
        ├── editor/index.html
        └── package.json
```

**The hierarchy is Ad → Copy → Images.** The ad is the folder. The copy (`COPY.md` and `copy.json`) sits at the top level — it IS the ad's identity. Images (the rendered-design HTML and the PNG output) live in a nested `images/` folder because they are *downstream artifacts* derived from the copy above. Anything visual is generated from what the copy says.

### COPY.md and copy.json — JUST the ad copy

`COPY.md` is the verbatim ad copy — nothing else. No angle, no promise breakdown, no image direction, no editorial scaffolding. Just the text the ad actually shows.

The designer's job is to **read COPY.md and infer everything else** — the angle being struck, the ICP language being used, the image direction implied — using the design skills in `skills/`. The skill carries the interpretive layer; the copy file carries the words. Keeping the two separate means a copywriter can iterate on COPY.md without touching design, and a designer can re-derive a fresh image direction from the same copy whenever the skills evolve.

`copy.json` is the same thing in machine-readable form: `{ ad, campaign, full_copy[] }`. Use it when scripting; use `COPY.md` when reading by hand.

For now, the only image type produced is the rendered HTML/PNG in `images/`. The HTML in `images/{ad-name}.html` is derived from COPY — its headlines and subtext come straight from the COPY file. Future image types (AI-generated imagery, etc.) will go alongside it in `images/` and follow the same rule: read COPY first, then design.

Both COPY files are auto-seeded by the editor's `Save & Render PNG` button and by `node skills/shared/tools/backfill-copy.js`. The seeder fills in the verbatim copy by parsing the rendered HTML. The editor never overwrites a `COPY.md` that already exists — once you've hand-edited it (cleaning up auto-extraction quirks on dense designs), your edits are safe across re-renders.

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

Two-pane editor: HTML on the left, live iframe preview on the right. Pick a template, pick a campaign, name the ad, hit **Save & Render PNG**. Creates `campaigns/{slug}/ads/{name}/images/{name}.html` and `.../images/{name}.png`, and auto-seeds `COPY.md` + `copy.json` at the ad root.

## Workflow for creating new ads

**The cardinal rule: copy first, image second.** An ad without copy is not an ad. The image is just a render of the copy — it can never lead.

1. If no campaign exists for this work, create one — see `skills/campaign-manager/SKILL.md`.
2. Pick a starting template from `skills/ad design skills/bold-text-designer/templates/` (or another design lane's templates).
3. Create the ad folder: `campaigns/{slug}/ads/{descriptive-name}/`.
4. Inside it, create `images/`. Copy the template into `images/{descriptive-name}.html`. Edit the CSS color variables and the visible text — headline, subtext, CTA, accent words.
5. Render the PNG to the same place: `campaigns/{slug}/ads/{descriptive-name}/images/{descriptive-name}.png`.
6. `COPY.md` and `copy.json` are auto-seeded at the ad root (via the editor or `backfill-copy.js`). Open `COPY.md` and clean up any auto-extraction quirks so the verbatim copy is right. Don't add interpretive sections — the file is just the copy.
7. QC against the checklist in the relevant design lane's SKILL.md.

If you'd rather use the editor, steps 3–6 collapse into: pick template, name ad, hit **Save & Render PNG**, then open the generated `COPY.md` and clean it up if needed.

### Image work reads COPY.md first

For any image work — rendering the HTML to PNG, generating AI imagery later, designing manually — the designer (human or AI) reads `campaigns/{slug}/ads/{ad-name}/COPY.md` first and uses the design skills in `skills/` to infer angle, ICP language, image direction, and visual approach from the copy. The copy file doesn't tell you how to design; the skill does. Never generate an image and write copy to match it.

## What NOT to do

- Don't store ads at the repo root — they belong inside `campaigns/{slug}/ads/{ad-name}/`.
- Don't put image files (`.html`, `.png`, anything visual) at the ad's top level. They go in `images/`. The top level is reserved for the copy record.
- Don't create an image for an ad that has no `COPY.md`. No copy → no image.
- Don't add interpretive sections to `COPY.md` (angle, promise, image direction, etc.). That's the designer's work, derived from the copy using the design skills. The file is just the copy.
- Don't introduce JavaScript inside ad HTML.
- Don't reference images by URL (`<img src="https://...">` or `background: url(https://...)`) — embed them as inline SVG or base64 data URIs instead. Same goes for fonts: only Google Fonts via `@import` are allowed as a network resource at render time.
- Don't recreate skills from the source project (`Inspired Ads And Funnel`). Scope here is intentionally narrow.
