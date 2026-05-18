---
name: native-text-screenshot-designer
description: Builds ads that look like a screenshot someone took of an app/page and marked up by hand — red circles around UI elements, curved arrows, highlight boxes, big handwritten captions in red marker pointing at "the part that matters." A META-format that wraps any screenshot (inbox, dashboard, chat, settings, pricing page) with hand-drawn viewer-guidance markings. The scroll-stop is the implicit voice: "someone screenshotted this and circled the important parts to send to me."
---

# Native Text Screenshot Designer

**Production method:** HTML/CSS + Playwright → see [../shared/HTML-RENDER-REFERENCE.md](../shared/HTML-RENDER-REFERENCE.md)
**Default output size:** 1080×1080 (square)

You build ads that don't look like ads. They look like a screenshot someone forwarded with hand-scribbled markings — red circles around the broken bit, an arrow to the fixed bit, a handwritten note in the margin. The scroll-stop mechanism is **annotation authority**: the brain registers "someone is showing me something specific" before it registers "ad." Annotated screenshots have an implicit witness — a person who took the time to mark it up — and that witness is doing the persuasion for you.

This is one of the `native-format-*` lanes in this repo:

| Lane | Beat | Skill |
|---|---|---|
| Pure typography | bold-text-designer |
| Name the pain → resolve | problem-solution-designer |
| Diagram IS the ad | system-visual-designer |
| Peers talking | chat-style-designer |
| Looks like a real tweet/X post | native-tweet-designer |
| **Screenshot + hand-drawn arrows/circles guiding the viewer** | **native-text-screenshot-designer** (this skill) |

Reach here when the message benefits from "here, look at THIS part" — when a clean screenshot alone wouldn't direct the eye, but a few hand-drawn circles and a marker-pen caption land the argument in three glances. This format is META: the base screenshot can be a fake inbox, a dashboard, a pricing page, a chat thread, a settings screen — any other native format or a generic UI shot. The annotations are what make it THIS skill.

## The cardinal rule

**The annotations must look hand-drawn, and the screenshot underneath must look real. If either side feels polished or templated, the illusion dies.**

A hand-marked screenshot is a witness's act of curation. It works because the viewer feels like a third party who was shown the thing, not a target who was sold the thing. Imperfect circles, slightly wobbly arrows, marker that doesn't quite close — the amateur quality IS the realism. A pixel-perfect circle drawn in CSS reads as designed, and designed reads as ad.

No templates. Every screenshot + annotation pair composed from scratch.

## ICP callout — mandatory

Same rule as every lane in this repo: the ICP must be on the canvas. In annotated-screenshot ads the ICP shows up *inside the screenshot* (sender names, account labels, product titles, plan tiers) AND *inside the handwritten annotation* (the margin note names them).

The ICP appears in **at least two of these places**:

- **Inside the base screenshot content** — sender names, app titles, account-holder labels, plan names, dashboard headers (`PI Firm Dashboard`, `agency owner — billing`, `Marcus, Founder Plan`)
- **Inside a handwritten annotation** — `"this is what every PI firm sees"`, `"agency owners — this is the line"`, `"founders, look here ↓"`
- **A circled UI element that names the ICP** — circle a header, account dropdown, or plan label that reads as the ICP
- **A handwritten underline beneath an ICP word** in the screenshot body

The handwritten annotation is the floor. Never publish an annotated-screenshot ad without an ICP-bearing marker-pen caption.

## CTA — must feel native to the format

The CTA is not a button. In this format the CTA is itself a handwritten annotation, because that's the most native shape:

- A **handwritten caption** as the last annotation, written in the same marker style as the rest: *"DM 'audit' to get this →"*, *"link in bio if you want the breakdown"*, *"reply 'yes' — I'll send you the doc"*
- A **red circle around a CTA element in the screenshot** (a Reply button, a "Get Started" tile, a chat input field) with a handwritten arrow + caption pointing in
- A **post-frame accent pill** below the tilted screenshot — small, brand-accent, ≤ 4 words ending in `→` — pulled verbatim from the ad's `COPY.md`

The cleanest version puts the CTA *in a handwritten note* in the bottom margin of the screenshot, with an arrow looping toward whatever circled element earns the click. Generic typed buttons inside the screenshot kill the realism instantly — the CTA has to be drawn on, not designed in.

CTA copy comes from `COPY.md` — see [../shared/HTML-RENDER-REFERENCE.md § CTA is required](../shared/HTML-RENDER-REFERENCE.md).

## UI elements — required

A native annotated-screenshot ad must include all of these, layered correctly:

- **Base screenshot layer** — a faithful rendering of ANY interface: email inbox, dashboard, chat thread, pricing page, analytics screen, settings panel, search results. Muted-looking (slightly desaturated, or just plain neutral) so the red/yellow annotations pop against it. The screenshot must look real enough to pass on its own.
- **Slight tilt on the whole screenshot** — ~1°–2° rotation for the "someone shared this with me" feel. Optionally a faint paper-shadow underneath.
- **Red hand-drawn circles** — inline SVG paths with `stroke-width: 4–6px`, `stroke-linecap: round`, slight path variation (don't use a perfect `<circle>` element; use a `<path>` with bezier curves that are slightly imperfect). Stroke color `#E03E2C` to `#D32B1F` (real-marker red, not pure red). Optionally subtle `stroke-dasharray` for hand variance. Circles often overshoot or under-close.
- **Curved arrows** — SVG paths with bezier curves connecting circles to captions or circles to circles. Arrowheads drawn as a small `<path>` with two short strokes meeting at a point — slightly wonky, not a perfect triangle.
- **Highlight boxes** — rectangles drawn around text fields or lines of UI text, often slightly tilted ~1°–2° off the underlying element. Same red-marker stroke.
- **Handwritten captions** in a script/marker font (`Caveat`, `Permanent Marker`, `Patrick Hand`, `Shadows Into Light`) imported via `@import` from Google Fonts. Color: red marker `#E03E2C` or yellow highlighter `#F5C518`. Captions sit in the margins or over empty space in the screenshot. Size ~38–58px.
- **Hand-drawn underlines** — wobbly SVG paths beneath key words in the screenshot copy. Slight wave or jitter; never a CSS `text-decoration: underline`.
- **Big X marks** through things that don't work, **checkmarks** next to things that do — two SVG strokes each, drawn imperfectly.
- **Optional yellow highlighter strokes** — wide SVG path with `opacity: 0.4`, `stroke-linecap: round`, drawn over a line of UI text. Stays behind the text via z-order so the text shows through.
- **Optional finger-pointing emoji or hand icon** (`👉`, `☝️`) sitting next to a circle for extra direction.

## Design principles

### Principle #1: The annotations build a 3-beat argument

Three is the limit. More than three circles and the eye loses the path; fewer than two and there's no story. Use the canonical structure:
- **Circle 1 (top of screenshot)** + caption — *names the pain or the broken thing*
- **Arrow to Circle 2 (middle)** + caption — *shows the effect or the contrast*
- **Circle 3 (bottom)** + caption — *lands the message, names the ICP, or carries the CTA*

If you find yourself drawing a fourth circle, you have two ads.

### Principle #2: Imperfect beats precise

Real marker is wobbly. Your SVG circles must be slightly oval, slightly unclosed, with `stroke-linecap: round` and bezier control points that don't sit on the geometric ideal. Arrows curve hand-naturally; arrowheads are two short strokes, not a clean triangle. Highlight boxes tilt 1°–2° off-axis. If anything in the annotation layer looks like it came out of Figma, redraw it less perfectly.

### Principle #3: The screenshot must be muted; the annotations are the only loud thing

Desaturate the base screenshot or design it in restrained neutrals (greys, soft whites, muted brand colors). The red marker and yellow highlighter are the only saturated colors on the canvas. If the screenshot is loud too, the annotations don't pop and the format collapses into noise.

### Principle #4: Annotations point at content, not at empty space

Every circle must enclose a real, readable UI element — a button, a line of text, a metric, a sender name, a price, a row in a table. Circling empty space is a tell that the screenshot was designed around the annotations rather than annotated after the fact. Build the screenshot first as if it were real; then circle what matters.

### Principle #5: One handwriting style, one marker color

Use a single handwriting font for all captions in a given ad. Use a single red for all marker strokes (don't mix `#FF0000` and `#E03E2C`). The viewer's brain accepts "one person marked this up with one pen" — switching fonts or red shades signals "designed."

## Layout rules

- **Screenshot frame** — centered on the 1080×1080 canvas, ~880–960px wide, height varies with content. Optional rounded corners (8–16px) and a subtle drop shadow to imply paper or a real screen.
- **Tilt** — apply `transform: rotate(1.5deg)` or `-1.5deg` to the whole screenshot wrapper.
- **Background outside the frame** — soft neutral (off-white, light grey, faint paper texture) — sells the "shared with me" feel.
- **Annotations live in their own absolutely-positioned SVG layer** stacked above the screenshot. Captions are `<div>`s with the handwriting font, absolutely positioned in the margins or over screenshot whitespace.
- **Z-order, bottom to top:** background → screenshot → yellow highlighter (under text where applicable) → red SVG strokes → handwritten captions → optional emoji/hand icon → optional post-frame CTA pill.
- **Optional bottom CTA pill** below the tilted frame: small, accent-colored, sits in the canvas margin. Use only if the handwritten CTA inside the frame isn't enough.

## Writing the annotations

- **Voice:** conversational, peer-to-peer, like someone marking up a screenshot to send to a friend. Lowercase starts are fine. Fragments are fine. Em dashes and arrows (`→`, `↓`) are encouraged.
- **Length:** each handwritten caption is 2–7 words. Marker pen is a low-bandwidth medium; it can't hold a paragraph.
- **Vocabulary:** ICP language verbatim from `CAMPAIGN.md` where you can. Pain words go in the top caption. The bottom caption usually names the ICP or carries the CTA.
- **Examples of the canonical 3-beat:**
  - top: *"this is the line every PI firm misses"* → arrow → middle: *"watch what happens to intake"* → bottom: *"DM 'audit' — i'll send the fix →"*
  - top: *"agency owners — look here"* → arrow → middle: *"this number tanks every Q3"* → bottom: *"reply 'yes' for the breakdown →"*
- **Avoid:** marketing language, exclamation marks (one is the max, and only if earned), hashtags, full sentences with periods. Marker captions don't end with periods — they end with arrows or nothing.

## Style Catalog

3 starter layouts. Each is a standalone HTML template in [templates/](templates/). Copy, swap the base screenshot content + annotation captions, render.

| # | Name | Template | Layout | Key Element |
|---|---|---|---|---|
| 1 | Inbox Annotated | [style-01-inbox-annotated.html](templates/style-01-inbox-annotated.html) | Tilted email inbox + 3 red circles + highlighter + marker captions | Vendor invoice + lead-vs-signed gap circled with handwritten note |
| 2 | Pricing Page Annotated | [style-02-pricing-page-annotated.html](templates/style-02-pricing-page-annotated.html) | Tilted SaaS pricing page + circle around tier + box around addons | Hidden costs exposé with X over advertised price |
| 3 | Dashboard Annotated | [style-03-dashboard-annotated.html](templates/style-03-dashboard-annotated.html) | Tilted KPI dashboard + circle on metric + arrow tracing downtrend | Buyer's-side metrics circled with handwritten diagnosis |

**These are not the only styles.** Invent new layouts. Combine elements. The catalog grows as new concepts prove out in testing.

## QC checklist

- [ ] **Screenshot authenticity:** at a glance, does the base screenshot look like a real app/page someone screenshotted?
- [ ] **Annotation authenticity:** do the circles, arrows, and captions look hand-drawn — slightly wobbly, slightly imperfect, marker-pen red?
- [ ] **One handwriting font, one red:** single handwriting font across all captions, single red shade across all strokes
- [ ] **3-beat structure present:** the annotations form a top → middle → bottom argument (name pain → show effect → land CTA), not a scatter
- [ ] **Each circle encloses a real UI element**, never empty space
- [ ] **Slight tilt on the screenshot** (~1°–2°) — sells the "shared with me" feel
- [ ] **Screenshot is muted; annotations are the only saturated layer**
- [ ] **ICP present:** named inside the screenshot content AND named in at least one handwritten annotation
- [ ] **CTA feels native:** a handwritten caption with an arrow, or a circle around an in-screenshot CTA element, or a post-frame accent pill — never a typed button pasted into the screenshot
- [ ] **Thumbnail test:** at 400px, can you read the bottom caption AND identify the ICP?
- [ ] **No branding:** no real logos, no real personal names, no real handles that map to actual accounts
- [ ] **No network fetches:** all imagery inline SVG or base64; only Google Fonts via `@import`
- [ ] **CSS rendering:** no overflow, clipping, missing icons, font fallbacks, broken SVG paths
- [ ] **Scroll-stop:** would the shape of this image (tilted screenshot + red marker scribbles on neutral background) read at 2am as something a friend forwarded?

If any check fails → fix the HTML and re-render.

## Workflow

**Hierarchy: Ad → Copy → Images.**

1. **Read `campaigns/{slug}/ads/{ad-name}/COPY.md` first** — the verbatim handwritten captions and any in-screenshot text should be in there.
2. **Cast the screenshot.** Decide what interface is being screenshotted (inbox, dashboard, chat, settings, pricing, analytics). Decide which 3 UI elements get circled. Sketch the 3-beat argument: top caption (pain) → middle caption (effect) → bottom caption (ICP + CTA).
3. **Create the ad folder if it doesn't exist:** `campaigns/{slug}/ads/{ad-name}/images/`.
4. **Compose the HTML** at `campaigns/{slug}/ads/{ad-name}/images/{ad-name}.html`. Build the base screenshot faithfully in muted tones, then layer the annotation SVG + handwritten captions on top. Tilt the wrapper ~1.5°. Import the handwriting font via `@import` (Caveat / Permanent Marker / Patrick Hand / Shadows Into Light). No network fetches at render time beyond Google Fonts.
5. **Render the PNG:**
   ```bash
   node skills/shared/render-static.js \
     campaigns/{slug}/ads/{ad-name}/images/{ad-name}.html \
     campaigns/{slug}/ads/{ad-name}/images/
   ```
6. **Seed COPY** if it doesn't already exist: `node skills/shared/tools/backfill-copy.js` (or use the editor). Open `COPY.md` and clean up any auto-extraction quirks. Just the verbatim copy (handwritten captions + visible screenshot text) — no interpretive sections.
7. **QC** against the checklist above.

## Output

```
campaigns/{campaign-slug}/ads/{ad-name}/
  ├── COPY.md
  ├── copy.json
  └── images/
      ├── {ad-name}.html
      └── {ad-name}.png
```
