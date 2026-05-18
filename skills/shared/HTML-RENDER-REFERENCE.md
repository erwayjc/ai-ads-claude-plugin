# HTML/CSS Rendering — Shared Reference

Production reference for the bold-text-designer skill. Each ad is a single self-contained HTML file rendered to PNG via Playwright (headless Chromium).

## HTML Structure Standard

The `<body>` element defines the output dimensions. Default is **1080×1080 (square)**.

```html
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  body {
    width: 1080px;
    height: 1080px;   /* square — the default */
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  }
</style>
</head>
<body>
  <!-- ad content -->
</body>
</html>
```

### Rules

- **Body dimensions = output image dimensions.** Set explicit `width` and `height` on `body`.
- **Fill the canvas edge-to-edge.** No white borders, no empty space. The body background color must reach all four edges.
- **Self-contained.** All CSS embedded in `<style>`. No external stylesheets.
- **Google Fonts allowed** via `@import` inside `<style>`.
- **No JavaScript.**
- **No network fetches at render time.** Imagery is allowed — inline SVG, base64-embedded raster images (`data:image/...`), CSS shapes, gradients, and Unicode glyphs are all fine. Anything that requires a network round-trip when Playwright loads the page is not.

### Aspect Ratios

| Ratio | Body Dimensions | Notes |
|---|---|---|
| **1:1** | `width: 1080px; height: 1080px` | **Default.** Universal compatibility — feed, stories, retargeting. |
| 4:5 | `width: 1080px; height: 1350px` | Use only when explicitly requested for portrait feed. |

**Always default to 1:1 square.** Override only when a campaign brief asks for it.

## Render Workflow

**Order matters: copy → image. Always.** Hierarchy is Ad → Copy → Images. The HTML and PNG are both *images* of the copy.

### 1. Write the HTML

Create the ad folder: `campaigns/{slug}/ads/{ad-name}/images/`. Inside `images/`, create `{ad-name}.html` and set body dimensions to 1080×1080.

### 2. Render to PNG

The PNG goes alongside the HTML inside `images/`.

```bash
node skills/shared/render-static.js \
  campaigns/{slug}/ads/{ad-name}/images/{ad-name}.html \
  campaigns/{slug}/ads/{ad-name}/images/
```

### 3. Seed COPY.md

```bash
node skills/shared/tools/backfill-copy.js
```

This writes `campaigns/{slug}/ads/{ad-name}/COPY.md` and `copy.json` — the verbatim ad copy auto-extracted from the rendered HTML. Open `COPY.md` and clean up any auto-extraction quirks (dense designs sometimes flatten table cells into one line). The file is just the copy — no angle, no promise, no image direction. The designer infers those from the copy using the skills in `skills/`.

### 4. CTA is required

**Every COPY.md and copy.json must include a CTA.** The CTA is the button text rendered on the ad — the explicit next action for the buyer. No CTA → not a finished ad.

`COPY.md` adds a dedicated section:

```markdown
## CTA

Apply For An Invite
```

`copy.json` adds a `cta` field:

```json
{
  "ad": "16-soccer-team-sponsorship",
  "campaign": "pi-lawyers-2026q2",
  "full_copy": [ "..." ],
  "cta": "Apply For An Invite"
}
```

The CTA text must be:
- **Action-first** — starts with a verb ("Apply", "See", "Get", "Reserve")
- **Specific to the offer** — not generic ("Learn More" is forbidden — say what they'll actually do)
- **Short** — ≤ 4 words; fits inside a button at thumbnail size
- **Derived from the ad's angle** — disqualifier ads → "See If You Qualify"; offer ads → "Apply Now"; scarcity ads → "Reserve Your Spot"

The designer renders the CTA as a high-contrast button at the visual end-point of the ad (see each design skill's CTA zone rules). The button text comes verbatim from `COPY.md` — never invented in the template.

The renderer:
- Launches headless Chromium via `playwright-core`
- Loads the HTML file
- Waits for fonts to load
- Auto-detects body dimensions (falls back to 1080×1080 if missing)
- Warns if content fills less than 90% of canvas height
- Screenshots `<body>` and saves PNG

**Options**
- `--prefix` — output filename (default: input filename without `.html`)
- `--scale` — device scale factor (use `2` for retina)
- `--width` / `--height` — override CSS body dimensions

### 3. Visual QC

Open the PNG and check it against the QC checklist in [bold-text-designer/SKILL.md](../bold-text-designer/SKILL.md).

## CSS QC Checks

- [ ] No overflow or clipping
- [ ] No unintended element overlap
- [ ] Borders, shadows, and spacing render correctly
- [ ] Fonts loaded (not falling back to serif)
- [ ] Colors render as intended
- [ ] Canvas fills edge-to-edge — no blank margins
