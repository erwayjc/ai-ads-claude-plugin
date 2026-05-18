---
name: native-app-store-review-designer
description: Builds ads that look like an App Store review card — star rating, review title, body text, reviewer name, "helpful" controls. The format implies independent peer validation. No templates; every review composed from scratch.
---

# Native App Store Review Designer

**Production method:** HTML/CSS + Playwright → see [../shared/HTML-RENDER-REFERENCE.md](../shared/HTML-RENDER-REFERENCE.md)
**Default output size:** 1080×1080 (square)

You build ads that look like an App Store review. The format implies *another user already vetted this and felt strongly enough to write about it.* That's social proof without needing a real customer quote.

This is one of the `native-format-*` lanes. See [native-tweet-designer](../native-tweet-designer/SKILL.md) for lane overview.

## The cardinal rule

**Reviews persuade because they look written, not designed.** The moment the format reads as marketing — too polished, too perfectly-on-message, no specifics — it dies. The review must read as someone's actual, slightly idiosyncratic POV.

No templates. Every review is composed from scratch.

## ICP callout — mandatory

The ICP appears inside the review card. **At least two of these placements:**

- **Reviewer display name** — e.g. `MarcusPI_TX`, `agency_jake`, `dani_indiehacker`
- **Review title** — names the ICP role or pain
- **Body text** — quotes ICP language verbatim ("we run a 3-attorney PI firm…")
- **App name at the top** of the card — `PI Firm Growth · Business`

## CTA — must feel native to the format

The CTA is one of:

- A **closing line in the review body** — *"booked the walkthrough, they only take 3 firms a month, link in the app description"*
- A **second review card stacked below** that names the CTA — `"Just did the walkthrough — worth it. Their site has the form: …"`
- A **post-frame accent pill** below the review, brand color, ≤ 4 words ending in `→`, pulled from `COPY.md`

Never overlay a generic CTA banner — the review tone breaks the moment marketing voice intrudes.

## UI elements — required

- **App header (optional):** app icon, app name, category, rating average, ratings count — sits above the review card
- **Review card structure:**
  - Star rating (5 stars, accent-orange filled — match App Store)
  - Review title (bold, ~38–44px)
  - Reviewer display name + date (small, muted)
  - Optional "Verified Purchase" / "Subscriber" pill
  - Body text (~32–40px, ~3–6 lines)
  - "Helpful?" controls at the bottom — thumbs up/down with counts
  - Optional developer response below — italic, indented, dated

## Design principles

### Principle #1: Specifics sell the review

A vague review (*"This changed my business!"*) reads as fake. A specific review (*"We're a 4-attorney PI firm in Houston. Was paying $11K/mo to a marketing co and getting 6 leads. Switched and now we're at 22 leads / mo. The intake script is the part I didn't know I needed."*) reads as real.

### Principle #2: Imperfect prose reads as authentic

Real reviews have run-on sentences, parenthetical asides, capitalization drift, the occasional typo (not fixed). Don't polish too hard.

### Principle #3: 5 stars is fine — but a 4-star review is *more* persuasive

A 4-star review with one mild critique (*"the dashboard could use better filters, but the leads themselves are fantastic"*) reads as more honest than 5-star perfection. Honest weakness sells the rest.

### Principle #4: Stack two reviews when you can

A single review is one voice. Two reviews — one detailed, one short-and-emphatic — feels like a *pattern*. The second card costs almost nothing visually and doubles the credibility.

### Principle #5: Match Apple's App Store visual language

System font, correct star geometry, correct spacing. The card chrome must read as App Store, not as a generic review widget.

## Layout rules

- **Review card(s)** centered on canvas, ~880–960px wide
- **Single review:** centered vertically, ~28% margin top/bottom
- **Two reviews stacked:** primary on top (~55% of card height), secondary below (~35%)
- **Background outside the frame:** soft brand color or App-Store-ish neutral
- **Optional bottom CTA pill** in canvas margin below the frame

## Writing the review

- **Title:** ≤ 7 words, ICP voice — `"Finally — a system, not a pitch deck"`, `"Saved our firm this quarter"`
- **Body:** 3–6 lines, ~40–90 words. Lead with a specific. Include ICP language verbatim. Land on the outcome.
- **Reviewer name:** ICP-coded handle, lowercase ok
- **Date:** within last 30 days for freshness
- **Helpful counts:** plausible — `247 · 12` not `1.2M · 0`

## Style Catalog

3 starter layouts. Each is a standalone HTML template in [templates/](templates/). Copy, edit reviewer/title/body, render.

| # | Name | Template | Layout | Key Element |
|---|---|---|---|---|
| 1 | Single Detailed · 5-Star | [style-01-single-detailed-5-star.html](templates/style-01-single-detailed-5-star.html) | App-header card + single long review · verified pill · dev response · post-frame pill | Specific-numbers body sells the realism |
| 2 | Stacked Pair · Honest 4+5 | [style-02-stacked-pair-honest.html](templates/style-02-stacked-pair-honest.html) | Two stacked reviews · 4★ honest + 5★ emphatic · subscriber pills | Pattern of two voices > single voice |
| 3 | Rating Distribution View | [style-03-rating-distribution.html](templates/style-03-rating-distribution.html) | iOS Ratings page · 4.8 hero + 5-bar histogram · 3 short reviews | Distribution view sells volume + breadth of opinion |

**These are not the only styles.** Invent new layouts. Combine elements. The catalog grows as new concepts prove out in testing.

## QC checklist

- [ ] **App Store authenticity:** looks like a real review card
- [ ] **Star rating accurate:** geometry, color, count
- [ ] **Body is specific:** numbers, locations, sizes, named workflows — not vague praise
- [ ] **Voice is human:** slightly imperfect prose, run-ons, parentheticals
- [ ] **ICP present:** reviewer name AND at least one other placement
- [ ] **Plausible helpful counts:** matches a niche-app review, not a viral consumer app
- [ ] **CTA feels native:** closing-line link, stacked second review, or post-frame pill — never overlay
- [ ] **Thumbnail test:** at 400px, can you read the title + star rating AND identify the ICP?
- [ ] **No branding:** no real app names that exist, no real personal names
- [ ] **CSS rendering:** no overflow, broken stars, missing icons
- [ ] **Scroll-stop:** does the card-on-canvas read as a real App Store screenshot at 2am?

If any check fails → fix the HTML and re-render.

## Workflow

1. **Read `campaigns/{slug}/ads/{ad-name}/COPY.md`** — the review title + body should be in there.
2. **Cast the reviewer.** ICP-coded display name. Plausible date.
3. **Write the body with specifics** — numbers, sizes, named workflows. ICP language verbatim.
4. **Decide single review or stacked pair.** Stacked usually wins.
5. **Create the ad folder if needed.**
6. **Compose the HTML** at `images/{ad-name}.html`. Star geometry inline-SVG, card chrome faithful to App Store, helpful-controls row at bottom.
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
