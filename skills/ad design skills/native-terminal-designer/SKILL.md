---
name: native-terminal-designer
description: Builds ads that look like a terminal / CLI screenshot — dark background, monospace text, prompt prefix, command + output. The "ran-a-command" aesthetic implies technical truth: receipts, logs, diagnostics. No templates; every terminal composed from scratch.
---

# Native Terminal Designer

**Production method:** HTML/CSS + Playwright → see [../shared/HTML-RENDER-REFERENCE.md](../shared/HTML-RENDER-REFERENCE.md)
**Default output size:** 1080×1080 (square)

You build ads that look like a terminal screenshot. The viewer reads monospace text on a dark background as *system output* — receipts that feel un-spinnable. The format is the proof.

This is one of the `native-format-*` lanes. See [native-tweet-designer](../native-tweet-designer/SKILL.md) for lane overview.

## The cardinal rule

**Monospace + dark background = truth signal.** Terminal output reads as logs, receipts, diagnostics — content the system *produced*, not content marketing wrote. The moment a non-terminal element appears (a logo, a marketing pill inside the frame, a sans-serif word), the trust collapses.

No templates. Every terminal is composed from scratch.

## ICP callout — mandatory

The ICP appears inside the terminal. **At least two of these placements:**

- **Prompt prefix** — e.g. `pi-firm@growth:~$`, `agency-owner@meta:~$`
- **Command being run** — e.g. `$ ./check-pi-firm-pipeline.sh`
- **Output text** — quotes ICP language verbatim
- **Window chrome title** — e.g. `pi-firm-diagnostic.log`

## CTA — must feel native to the format

The CTA is one of:

- A **final output line** — `→ Next: book-walkthrough.com` styled as a terminal print statement
- A **success/banner block** at the end — `[ READY ] Apply: /walkthrough`
- A **post-frame accent pill** below the terminal, brand color, ≤ 4 words ending in `→`, pulled from `COPY.md`

Never overlay a button on the terminal window.

## UI elements — required

- **Window chrome:** title bar with three traffic-light buttons (red/yellow/green dots on the left), tab title in the center, optional close/minimize/maximize on the right
- **Inner background:** very dark (#0d1117, #1e1e1e, or true black) — match a real terminal theme
- **Font:** monospace — `JetBrains Mono`, `Fira Code`, `Menlo`, `SF Mono`, with appropriate fallbacks
- **Prompt prefix:** colored — e.g. green user@host, blue path, white `$` — typical zsh/bash conventions
- **Command line:** prompt + command in white/light
- **Output lines:** mix of colors for emphasis — green for success, red/yellow for warnings, cyan for highlights, muted gray for noise
- **Cursor:** blinking block or underscore at the end of the last prompt (rendered as static)
- **Optional:** progress bars, spinners (rendered static), ASCII tables, log timestamps

## Design principles

### Principle #1: Show a real-feeling command run

Don't fake `cowsay marketing message`. Run a believable command that produces believable output for this ICP — `./audit-intake-pipeline.sh`, `npm run leads:check`, `psql -c "SELECT count(*) FROM missed_leads WHERE month='2026-04';"`.

### Principle #2: Output is the persuasion

The command implies the question. The output is the answer. Make the output structured (rows, key/value pairs, ASCII tables) so the eye reads it as data, not paragraphs.

### Principle #3: Use color sparingly and semantically

Red on a warning, green on success, accent on the key number. If everything is colored, nothing is. Most lines stay muted; a few key tokens earn color.

### Principle #4: Add log timestamps for realism

`[2026-05-17 02:14:33]` prefixes turn output into something that looks like it streamed in real time. Especially powerful for "this is happening NOW" framings.

### Principle #5: Pixel-faithful monospace

Wrong font, wrong line-height, wrong character width — and it reads as fake. Use a real monospace font with reasonable letter spacing (~`letter-spacing: 0.01em`, `line-height: 1.5`).

## Layout rules

- **Window frame:** ~960px wide, content-driven height, centered on canvas
- **Padding inside window:** ~32–44px on all sides
- **Background outside the frame:** soft brand color or dark neutral
- **Optional bottom CTA pill** in the canvas margin below the frame

## Writing the terminal

- **Prompt prefix:** names the ICP — `pi-firm@growth:~$`
- **Command:** ≤ 80 chars, plausible for this ICP's stack
- **Output:** structured — key/value pairs, ASCII tables, log lines. ≤ 12 lines total readable at thumbnail.
- **Punch line:** one highlighted line near the end carries the message — colored accent, bold weight
- All ICP language verbatim from `CAMPAIGN.md` where possible

## Style Catalog

3 starter layouts. Each is a standalone HTML template in [templates/](templates/). Copy, edit prompt/command/output, render.

| # | Name | Template | Layout | Key Element |
|---|---|---|---|---|
| 1 | Diagnostic Log | [style-01-diagnostic-log.html](templates/style-01-diagnostic-log.html) | Audit script + key/value funnel + CRIT line + READY banner | Revenue-leak punch line as terminal warning |
| 2 | Test Suite Output | [style-02-test-suite-output.html](templates/style-02-test-suite-output.html) | PASS/FAIL pnpm test output + summary + activation cliff callout | Failing tests map directly to broken onboarding steps |
| 3 | ASCII Table Report | [style-03-ascii-table-report.html](templates/style-03-ascii-table-report.html) | Box-drawn table of tools + savings line below | Stack consolidation shown as structured data |

**These are not the only styles.** Invent new layouts. Combine elements. The catalog grows as new concepts prove out in testing.

## QC checklist

- [ ] **Terminal authenticity:** looks like a real CLI screenshot at a glance
- [ ] **Window chrome:** traffic lights, title bar, padding — accurate
- [ ] **Monospace font:** real monospace, not "monospace-ish"
- [ ] **Prompt structure:** colored user@host path $ — conventional
- [ ] **Believable command:** sounds like something this ICP would actually run
- [ ] **Structured output:** key/value, tables, log lines — not a paragraph
- [ ] **Semantic color use:** red/green/yellow used for status, not decoration
- [ ] **ICP present:** prompt AND at least one other placement (command, output, title)
- [ ] **Punch line stands out:** one accent-colored line carries the message
- [ ] **CTA feels native:** final output line, success banner, or post-frame pill — never an overlay button
- [ ] **Thumbnail test:** at 400px, can you read the punch line AND identify the ICP?
- [ ] **No branding:** no real corporate names, no real personal names
- [ ] **CSS rendering:** no overflow, no font fallback to sans-serif, no broken alignment
- [ ] **Scroll-stop:** does the dark terminal-on-canvas read as a real screenshot at 2am?

If any check fails → fix the HTML and re-render.

## Workflow

1. **Read `campaigns/{slug}/ads/{ad-name}/COPY.md`** — the command + output lines should be in there.
2. **Pick a believable command** that this ICP would actually run. Decide what its output would be.
3. **Write the output as structured data** — tables, key/value, log lines.
4. **Highlight the punch line** — one accent-colored line near the end.
5. **Create the ad folder if needed.**
6. **Compose the HTML** at `images/{ad-name}.html`. Window chrome, monospace font load via `@import`, faithful prompt and output. No network fetches at render except Google Font import.
7. **Render the PNG:**
   ```bash
   node skills/shared/render-static.js \
     campaigns/{slug}/ads/{ad-name}/images/{ad-name}.html \
     campaigns/{slug}/ads/{ad-name}/images/
   ```
8. **Seed COPY** if needed.
9. **QC** against the checklist.

## Output

```
campaigns/{campaign-slug}/ads/{ad-name}/
  ├── COPY.md
  ├── copy.json
  └── images/
      ├── {ad-name}.html
      └── {ad-name}.png
```
