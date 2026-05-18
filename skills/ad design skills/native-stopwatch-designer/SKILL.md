---
name: native-stopwatch-designer
description: Builds ads that look like an iOS Stopwatch / Timer screen — large digits, circular ring or lap list, big control buttons. The time-elapsed reading IS the message (how long the pain lasts, how fast the system runs). No templates; every stopwatch composed from scratch.
---

# Native Stopwatch Designer

**Production method:** HTML/CSS + Playwright → see [../shared/HTML-RENDER-REFERENCE.md](../shared/HTML-RENDER-REFERENCE.md)
**Default output size:** 1080×1080 (square)

You build ads that look like an iOS Stopwatch / Timer screen. The large digits read as *elapsed reality* — time the viewer's brain accepts as factual. The format is the proof.

This is one of the `native-format-*` lanes. See [native-tweet-designer](../native-tweet-designer/SKILL.md) for lane overview.

## The cardinal rule

**The displayed time IS the ad.** Whether the message is "15 hours wasted" or "47 seconds to qualify a lead," the digits carry the entire claim. Everything else (ring, laps, buttons) sells realism.

No templates. Every stopwatch is composed from scratch.

## ICP callout — mandatory

The ICP appears as an annotation in or around the stopwatch. **At least two of these placements:**

- **Subtitle above the digits** — e.g. `Avg PI firm lead response time`
- **Lap row label** — e.g. `Lap 1 · PI Firm intake`
- **Mode tab label at the top** — e.g. `Stopwatch · PI Firm`
- **Footnote pill outside the frame** — e.g. `For personal injury firms`

## CTA — must feel native to the format

The CTA is one of:

- A **final lap row** — `Lap 4 · Booked walkthrough · 00:30:00 →`
- A **mode-tab pill below the digits** styled as a Timer chip — `→ Set: 30-min walkthrough`
- A **post-frame accent pill** below the phone, brand color, ≤ 4 words ending in `→`, pulled from `COPY.md`

Never overlay a generic button on the stopwatch screen.

## UI elements — required

- **Phone frame** with rounded corners and bezel, centered on canvas
- **Status bar:** time, signal, wifi, battery — iOS-accurate
- **Mode tabs at top:** `World Clock · Alarm · Stopwatch · Timer` with the relevant one highlighted (orange or accent)
- **Two view modes — pick one:**
  - **Digital view:** giant centered digits (~220–260px, light weight, monospace digits via `tabular-nums`)
  - **Analog view:** large circular ring with sweeping hand (rendered as a static arc), plus smaller digital readout
- **Control buttons:** two large circles bottom — `Lap` (white outline) left, `Stop` (red fill) right; or `Start` (green fill) right when paused
- **Lap list below digits** (optional but powerful): scrollable rows with lap number + lap time, monospace, most recent on top

## Design principles

### Principle #1: Pick a time that *means something*

`15:23:08` (hours wasted) hits harder than `01:32` (vague duration). Pick a time the ICP would recognize as real and painful — or real and impressive.

### Principle #2: Use lap rows to tell a story

A single big number is a stat. A lap list that reads `Lap 1 — lead arrives · 00:00:08 / Lap 2 — agency emails back · 04:33:12 / Lap 3 — competitor already called · 04:33:21` is a *narrative*. Same screen, exponentially more persuasion.

### Principle #3: Format must match iOS Stopwatch exactly

iOS uses very thin, large digit weight with `SF Pro Display` ultralight. The contrast between thin digits and bold buttons is part of the visual signature. Mimic it.

### Principle #4: One mode per ad

Don't show stopwatch and timer at the same time. Pick one. The mode tabs at the top can be visible, but only one is active.

### Principle #5: The annotation lands the punch

`15:23:08` is just digits. *"Time it took the agency to email back · single PI lead"* turns it into a punch.

## Layout rules

- **Phone frame:** ~720–800px wide, ~1000–1020px tall, centered on canvas
- **Background outside the frame:** soft brand color or neutral
- **Inside the frame:** black background (iOS dark Clock app)
- **Digits:** centered vertically in the top 50–60% of the screen area
- **Control buttons:** bottom 18–22%, two circles ~140–160px diameter
- **Lap list:** between digits and buttons, fades out at the bottom edge
- **Optional bottom CTA pill** in the canvas margin below the frame

## Writing the stopwatch

- **Title / mode tab label:** ICP language verbatim from `CAMPAIGN.md`
- **Digit display:** the visceral number — hours/minutes/seconds in `HH:MM:SS` or `MM:SS.ms` form
- **Lap rows (3–5):** each row 6–10 words, narrative across rows
- **Annotation above or below digits:** ≤ 8 words

## Style Catalog

3 starter layouts. Each is a standalone HTML template in [templates/](templates/). Copy, edit digits/labels/colors, render.

| # | Name | Template | Layout | Key Element |
|---|---|---|---|---|
| 1 | Lap Narrative | [style-01-lap-narrative.html](templates/style-01-lap-narrative.html) | Digital readout + 4-row lap list ending in CTA lap | Lap rows tell the story; final lap IS the CTA |
| 2 | Analog Ring | [style-02-analog-ring.html](templates/style-02-analog-ring.html) | Circular SVG ring + centered digits + Timer chip | Round-face stopwatch carries the big number |
| 3 | Timer Countdown | [style-03-timer-countdown.html](templates/style-03-timer-countdown.html) | Timer mode + countdown ring + preset grid with CTA preset | 30-min walkthrough sits in a real preset slot |

**These are not the only styles.** Invent new layouts. Combine elements. The catalog grows as new concepts prove out in testing.

## QC checklist

- [ ] **Stopwatch authenticity:** looks like real iOS Clock app
- [ ] **Status bar correct:** time, signal, wifi, battery
- [ ] **Mode tabs visible:** only one active, accurate ordering
- [ ] **Digit weight:** ultralight monospace, `tabular-nums` for steady width
- [ ] **Control buttons correct:** Lap/Stop, Start/Stop colors and geometry
- [ ] **Visceral number:** time that hurts or impresses, not abstract
- [ ] **Lap list (if used):** narrative across rows, not random ticks
- [ ] **ICP present:** title/annotation AND at least one other placement
- [ ] **CTA feels native:** lap row, mode pill, or post-frame pill — never overlay button
- [ ] **Thumbnail test:** at 400px, can you read the big digits AND the annotation?
- [ ] **No branding:** no logos, no personal names
- [ ] **CSS rendering:** no overflow, broken digits, missing buttons
- [ ] **Scroll-stop:** does the phone-on-canvas read as a real screenshot at 2am?

If any check fails → fix the HTML and re-render.

## Workflow

1. **Read `campaigns/{slug}/ads/{ad-name}/COPY.md`** — the digits + lap rows should be in there.
2. **Decide the visceral time.** Write the annotation that turns digits into a claim.
3. **Decide single-digit display OR digits + lap list.** Lap list almost always lands harder.
4. **Create the ad folder if needed.**
5. **Compose the HTML** at `images/{ad-name}.html`. Phone frame, status bar, mode tabs, digits, lap list, control buttons. Use `font-variant-numeric: tabular-nums` for digit stability.
6. **Render the PNG:**
   ```bash
   node skills/shared/render-static.js \
     campaigns/{slug}/ads/{ad-name}/images/{ad-name}.html \
     campaigns/{slug}/ads/{ad-name}/images/
   ```
7. **Seed COPY** if needed.
8. **QC** against the checklist.

## Output

```
campaigns/{campaign-slug}/ads/{ad-name}/
  ├── COPY.md
  ├── copy.json
  └── images/
      ├── {ad-name}.html
      └── {ad-name}.png
```
