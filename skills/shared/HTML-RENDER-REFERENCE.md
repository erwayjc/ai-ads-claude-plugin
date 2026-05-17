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

### 1. Write the HTML

Create a single `.html` file. Set body dimensions to 1080×1080.

### 2. Render to PNG

```bash
node skills/shared/render-static.js <input.html> [output-dir] [--prefix name] [--scale N]
```

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
