---
name: native-calculator-designer
description: Builds ads that look like an iOS Calculator app — status bar, large display, button grid, optional annotation strip. The math itself carries the persuasion (the cost of the pain, the ROI of the fix). No templates; every calculator composed from scratch.
---

# Native Calculator Designer

**Production method:** HTML/CSS + Playwright → see [../shared/HTML-RENDER-REFERENCE.md](../shared/HTML-RENDER-REFERENCE.md)
**Default output size:** 1080×1080 (square)

You build ads that look like an iOS Calculator screen. The viewer sees a number on a calculator and reads it as *math the user just did themselves* — a far stronger anchor than a designed stat block. The format implies "this is just arithmetic, no spin."

This is one of the `native-format-*` lanes. See [native-tweet-designer](../native-tweet-designer/SKILL.md) for the lane overview.

## The cardinal rule

**The number on the display IS the ad.** Everything else — buttons, status bar, annotations — is there to sell the realism. If you find yourself competing for attention with a side caption, you've stopped trusting the format.

No templates. Every calculator is composed from scratch.

## ICP callout — mandatory

The ICP appears as an annotation in or around the calculator. **At least two of these placements:**

- **Annotation row above the display** — e.g. `Cost of one missed PI lead`
- **Memo line below the calculator** — e.g. `× 12 months → for one PI firm`
- **Status-bar carrier name** — e.g. `PI Firm` instead of carrier name
- **Footnote pill outside the frame** — e.g. `For personal injury firms`

The annotation row is the floor.

## CTA — must feel native to the format

A calculator's CTA is a number-as-conclusion or a printed receipt-strip outcome. Common patterns:

- The **final calculated number** is the CTA — *"$48,000 / year"* with a memo `→ stops here when we run intake`
- A **post-frame accent pill** below the calculator, brand color, ≤ 4 words ending in `→`, pulled from `COPY.md`
- A **printed annotation below the display** styled as a receipt line: `→ Book the 30-min walkthrough`

Never overlay a generic CTA button on the calculator — the format dies the moment a non-calculator element appears inside the frame.

## UI elements — required

- **Phone frame** with rounded corners and bezel, centered on canvas
- **Status bar:** time top-left, signal/wifi/battery top-right — small, accurate iOS styling
- **Display:** right-aligned, very large number (~180–220px font, light/thin weight), single line, monospace or SF Pro Display Thin
- **History strip above the display** (optional but powerful): muted small text showing the running calculation — `1,200 × 4 × 12 = ?`
- **Button grid:** 4 columns × 5 rows
  - Row 1: `AC  +/-  %  ÷`
  - Row 2: `7 8 9 ×`
  - Row 3: `4 5 6 -`
  - Row 4: `1 2 3 +`
  - Row 5: `0 (spans 2) . =`
- **Button colors:** dark gray for digits (#333), light gray for top row functions (#a5a5a5), orange-accent for the right column (#f1a33c) — `=` button is the accent (this is where the CTA can live)
- **Annotation row** above the display — small muted caption tying the number to the ICP

## Design principles

### Principle #1: Show the work, not just the answer

A bare big number is a stat. A calculator that shows `1,200 × 4 × 12 = 57,600` in the history strip is *proof of arithmetic.* The viewer can mentally re-do the math, which is exactly what you want — they convince themselves.

### Principle #2: The number must be visceral

Pick a number that hurts (cost of the pain) or relieves (size of the gain). `$57,600/year in lost leads` is visceral. `12% conversion lift` is forgettable.

### Principle #3: One operation, one conclusion

Don't show three calculations in three displays. One display, one number, one annotation. The format only works because it's a single screen.

### Principle #4: Match iOS Calculator visual language

System font, correct button geometry (circle buttons, NOT rounded squares), correct color set, correct spacing. Reference a real screenshot.

### Principle #5: The annotation lands the punch

Without the annotation, the number is meaningless. *"$57,600"* is a number. *"Cost of one missed PI lead × 12 months"* turns it into an argument.

## Layout rules

- **Phone frame:** ~720–800px wide, ~1000–1020px tall, centered on canvas
- **Background outside the frame:** soft brand color or neutral
- **Inside the frame:** black background (iOS dark calculator), buttons fill bottom 60–65%, display fills top 35–40%
- **Optional bottom CTA pill** in the canvas margin below the frame

## Writing the calculator

- **History strip text:** the math the viewer would do themselves — `cost_per_lead × leads_lost × months`
- **Display number:** the conclusion — formatted with commas/currency where natural
- **Annotation:** ≤ 8 words, in the ICP's voice, ties the number to the pain or the offer
- All ICP language verbatim from `CAMPAIGN.md` where possible

## Style Catalog

3 starter layouts. Each is a standalone HTML template in [templates/](templates/). Copy, edit math/annotation/colors, render.

| # | Name | Template | Layout | Key Element |
|---|---|---|---|---|
| 1 | Cost of Pain | [style-01-cost-of-pain.html](templates/style-01-cost-of-pain.html) | iOS dark calculator + history strip + memo line | Big visceral cost-per-month number |
| 2 | ROI Reveal | [style-02-roi-reveal.html](templates/style-02-roi-reveal.html) | Green accent display + receipt-line CTA inside the frame | Gain number in calculator green |
| 3 | Error Overflow | [style-03-error-overflow.html](templates/style-03-error-overflow.html) | Red-tinted display + monospace receipt below the phone | Tool-stack burn shown as overflowing total |

**These are not the only styles.** Invent new layouts. Combine elements. The catalog grows as new concepts prove out in testing.

## QC checklist

- [ ] **Calculator authenticity:** looks like real iOS Calculator at a glance
- [ ] **Status bar correct:** time, signal, wifi, battery styled accurately
- [ ] **Button geometry:** circle buttons, correct color groups, correct grid
- [ ] **Display formatting:** right-aligned, thin weight, no overflow
- [ ] **History strip present:** shows the operation, not just the result
- [ ] **ICP present:** annotation AND at least one other placement
- [ ] **Number is visceral:** hurts or relieves, not abstract
- [ ] **Annotation lands:** ≤ 8 words, ties number to pain/offer
- [ ] **CTA feels native:** number-as-conclusion, history strip, or post-frame pill — never an overlay button
- [ ] **Thumbnail test:** at 400px, can you read the display number AND the annotation?
- [ ] **No branding:** no logos, no real personal names
- [ ] **CSS rendering:** no overflow, broken buttons, mis-aligned grid
- [ ] **Scroll-stop:** does the phone-with-calculator read as a real screenshot at 2am?

If any check fails → fix the HTML and re-render.

## Workflow

1. **Read `campaigns/{slug}/ads/{ad-name}/COPY.md`** — the math + annotation should be in there.
2. **Decide the visceral number** — the cost of pain or the size of gain. Work out the multiplication that produces it.
3. **Write the annotation** in the ICP's voice, ≤ 8 words.
4. **Create the ad folder if needed:** `campaigns/{slug}/ads/{ad-name}/images/`.
5. **Compose the HTML** at `images/{ad-name}.html`. Build phone frame, status bar, annotation, history strip, display, button grid. No network fetches.
6. **Render the PNG:**
   ```bash
   node skills/shared/render-static.js \
     campaigns/{slug}/ads/{ad-name}/images/{ad-name}.html \
     campaigns/{slug}/ads/{ad-name}/images/
   ```
7. **Seed COPY** if needed. Clean up extraction quirks.
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
