---
name: native-boarding-pass-designer
description: Builds ads that look like an airline boarding pass — either a paper boarding pass with perforation, flight codes, gate/seat/zone, and barcode, or a mobile-wallet boarding pass card with QR code and label-above-value chrome. The FROM/TO airport codes carry the rhetoric ("OLD SYSTEM → NEW SYSTEM"), making the ad legible as a journey from the buyer's current pain to the post-offer state. No templates; every pass composed from scratch.
---

# Native Boarding Pass Designer

**Production method:** HTML/CSS + Playwright → see [../shared/HTML-RENDER-REFERENCE.md](../shared/HTML-RENDER-REFERENCE.md)
**Default output size:** 1080×1080 (square)

You build ads that look like a boarding pass — either a printed paper pass with a perforated stub, or a mobile-wallet card on a phone. The format works because a boarding pass is the visual shorthand for *leaving one place and arriving at another*. The FROM and TO fields are the entire pitch: the buyer's current state on the left, the post-offer state on the right. The viewer reads it as a document, then realizes it's pointed at them.

This is one of the `native-format-*` lanes in this repo:

| Lane | Beat | Skill |
|---|---|---|
| Pure typography | bold-text-designer |
| Name the pain → resolve | problem-solution-designer |
| Diagram IS the ad | system-visual-designer |
| Peers talking | chat-style-designer |
| Looks like a real tweet/X post | native-tweet-designer |
| **Looks like a boarding pass — journey-as-message** | **native-boarding-pass-designer** (this skill) |

Reach here when the message maps cleanly to a journey: a transition, a "you're leaving the old way behind" moment, a "boarding now for [outcome]" reveal. Niche, but devastating when the message fits.

## The cardinal rule

**The journey IS the message. FROM and TO carry the rhetoric — pick them with the same care you'd pick a headline.**

If the FROM/TO codes don't tell the story by themselves, the ad has failed before any of the chrome lands. The pass must read as an issued travel document at first glance, then resolve as ICP-coded the moment the codes are decoded.

No templates. Every pass is composed from scratch in one of two modes.

## Mode A vs Mode B — pick one

| Mode | Aesthetic | Use when |
|---|---|---|
| **A — Paper boarding pass** | Cream/off-white card with perforation, barcode, pre-printed labels + filled-in values, airline brand stripe | The message is nostalgic, ceremonial, "you've earned a seat", or has a hand-stamped feel |
| **B — Mobile wallet card** | Rounded dark/light card, QR code, status-bar chrome, "Boarding starts in 22 minutes" reminder bar | The message is immediate, urgent, "boarding now", or the ICP lives on their phone |

Decide before you compose. The HTML structure is different for each.

## ICP callout — mandatory

The ICP must appear inside the pass. **At least two of these placements:**

- **Passenger name field** — `PASSENGER: PI FIRM OWNER`, `NAME: AGENCY FOUNDER / MARCUS`
- **Airline name** — `AURORA AIRWAYS · INTAKE OPERATIONS`, `PINNACLE AIR · PI FIRM ROUTES`
- **FROM / TO codes or city names** — ICP-coded transition (`MISSED LEADS → BOOKED CALLS`, `THE OLD AGENCY → YOUR FIRM SCALING`)
- **Class / fare line** — `CLASS: FOUNDER` · `FARE: GROWTH STAGE`
- **Gate / zone** — `GATE: Q2 2026` · `ZONE: HIGH-INTENT`
- **Footer / fine print** — ICP-coded notice line

The FROM/TO field is the floor — it must always be ICP-coded. Never publish a boarding pass ad with generic city names that don't carry the message.

## CTA — must feel native to the format

A boarding pass's CTA is not a button. It's one of:

- **Boarding-time line** styled as flight info: `BOARDING: walkthrough.example.com` or `DEPARTS: Thu 2:00 PM · book your seat`
- **A stamped "CONFIRMED →"** or **"BOARDING NOW"** rubber stamp rotated -6° to -8°
- **A reminder bar** (Mode B only) above the card: `Boarding starts in 22 minutes — tap to walk through`
- **A post-frame accent pill** below the pass, brand color, ≤ 4 words ending in `→`, pulled verbatim from `COPY.md`

The cleanest pattern keeps the CTA inside the pass as a boarding-time line and adds an *optional* accent pill below the frame for the explicit click. **Never overlay a modern web button on the pass itself** — it breaks the format instantly.

CTA copy comes from `COPY.md` — see [../shared/HTML-RENDER-REFERENCE.md § CTA is required](../shared/HTML-RENDER-REFERENCE.md).

## UI elements — required

### Mode A — Paper boarding pass

- **Two-section card layout** with a perforation between (vertical dashed line with circular notches at top/bottom, or a horizontal perforation for landscape composition)
- **Color stripe** along the top in airline brand color (the accent)
- **Airline name + logo** top-left of the main section — fictional only (`AURORA AIRWAYS`, `PINNACLE AIR`, `MERIDIAN`, `NORTHWIND`) with a stylized wing/star/diamond/chevron SVG mark; never a real airline
- **Passenger name** — pre-printed label (`PASSENGER` / `NAME OF PASSENGER`) in condensed sans/serif, filled-in value in a typewriter or handwriting font (Courier Prime, Special Elite, Caveat) for the contrast that sells "issued"
- **FROM / TO airport codes** — 3 letters, ~80–100px, bold, with an arrow or aircraft glyph between. These are the metaphor carrier
- **City/state names** under each code in smaller type (`MISSED LEADS, OLD-OPS` / `BOOKED CALLS, GROWTH ST.`)
- **Flight number** (e.g. `FLT AA-2026`), **date**, **departure time**, **boarding time** (earlier than departure), **gate**, **seat**, **group/zone**, **class/fare**
- **Stub section** (right of perforation) — repeats key fields in compressed form: PASSENGER, FROM, TO, FLT, SEAT, GATE
- **Barcode** at the bottom of the main section — stylized SVG vertical bar pattern (not a real scannable code), with a serial number below in monospace
- **Optional priority/class indicators** — small rounded badges: `PRIORITY`, `TSA PRE`, `EXIT ROW`, `GROUP A`
- **Cream / off-white background** with slight grain (subtle noise SVG filter or repeating dotted gradient)
- **Footer fine print** — boarding policy / disclaimer line in tiny type

### Mode B — Mobile wallet boarding pass

- **Rounded rectangle card** (~24–32px border radius) centered on a dark or light wallet background; the card should occupy ~85% of canvas width
- **Card header strip** with airline name + logo SVG, often on a colored band
- **FROM → TO row** — large airport codes with an arrow or plane icon between, city names below in smaller type
- **Departure / boarding time stacked block** — `BOARDING 2:00 PM` over `DEPARTS 2:32 PM`
- **Grid of label-above-value pairs** — `PASSENGER` / value, `CLASS` / value, `GROUP` / value, `SEAT` / value, `GATE` / value; labels uppercase ~22px, values bold ~36–42px
- **QR code centered at bottom** — stylized SVG grid pattern (not a real scannable code); standard QR finder squares in three corners
- **Optional reminder bar above the card** — `Boarding starts in 22 minutes` in pill style
- **Optional iOS / Android wallet chrome** — status bar at top (time, signal, battery), back arrow, "Wallet" header — only if it sharpens the realism
- **Subtle gradient or solid airline color** on the card header section

## Design principles

### Principle #1: FROM and TO are the headline

If you could only keep two pieces of text on the entire pass, it's the FROM and TO codes. They carry the entire message. Spend more time on them than on anything else. Avoid generic city codes (JFK, LAX) unless the campaign literally maps to geography — pick codes that *decode into the message* (`OLD → NEW`, `LOSS → WIN`, `M.LD → B.CL` for "missed leads / booked calls").

### Principle #2: Pre-printed + filled-in is the format (Mode A)

Real paper boarding passes have pre-printed labels (condensed sans-serif, often grey or muted) and filled-in values (typewriter or dot-matrix, dark and crisp). Mimicking that contrast sells "issued" — use a monospace/typewriter font (Courier Prime, Special Elite, IBM Plex Mono) or a handwriting font (Caveat, Patrick Hand) for filled-in values. The contrast does the work.

### Principle #3: The journey is asymmetric

FROM is the pain (small, muted, almost an afterthought). TO is the relief (slightly larger, brand-accent color, or bolded). The asymmetry itself signals which direction the buyer is meant to want to go. Don't render them as equal-weight peers.

### Principle #4: Boarding time as urgency, not as fake countdown

If the CTA is `BOARDING: 2:00 PM Thu` or `BOARDING STARTS IN 22 MINUTES`, it should reinforce the airline voice — *not* mimic an e-commerce flash-sale timer. The urgency is implicit in the format, not stacked on top of it. One time field is enough.

### Principle #5: Match the chosen mode pixel-for-pixel

Mode A is paper — cream/grain background, perforation, barcode, monospace serial number, airline brand color stripe. Mode B is a phone — rounded corners, QR code, label-above-value grid, optional status bar. Don't mix the two. If the pass has a perforation AND a QR code AND a status bar, the format dies.

## Layout rules

- **Pass card** centered on the 1080×1080 canvas
  - Mode A: ~960px wide × ~700–820px tall, landscape orientation; perforation is vertical at ~70/30 split (main section / stub)
  - Mode B: ~880px wide × ~960px tall, portrait orientation; rounded corners ~28px
- **Padding inside the pass:** ~36–56px on all sides
- **Background outside the pass:** neutral or branded — sells the "screenshot of a document" feel (light grey, soft navy, or dark wallet-style for Mode B)
- **FROM/TO row:** dominant block, ~100–140px tall, codes ~80–100px bold
- **Perforation (Mode A):** dashed line (4px dash, 4px gap) with two circular cutouts (~24px) at top and bottom of the line for the tear notches
- **Barcode (Mode A):** ~60–80px tall, ~70% of main section width, centered horizontally near the bottom
- **QR code (Mode B):** ~200–240px square, centered, ~40px from bottom of card
- **Optional post-frame CTA pill** below the pass in the canvas margin

## Writing the pass

- **Airline name:** invented, ICP-coded (`AURORA AIRWAYS · INTAKE OPS`, `MERIDIAN · GROWTH STAGE CARRIER`)
- **Passenger name:** ICP role + optional first name (`MARCUS / PI FIRM OWNER`)
- **FROM code / city:** the buyer's current pain in 3 letters + a name (`MLD · MISSED LEADS`)
- **TO code / city:** the post-offer state in 3 letters + a name (`BKD · BOOKED CALLS`)
- **Flight number:** plausible alphanumeric (`FLT AA-2026`, `MA-417`)
- **Date / departure:** near-future, plausible (`THU 17 MAY 2026 · 14:32`)
- **Boarding time:** earlier than departure by ~25–30 min — this is often the CTA hook
- **Gate / seat / zone / class:** ICP-coded (`GATE: Q2-26`, `SEAT: 1A`, `ZONE: FOUNDER`, `CLASS: GROWTH`)
- **Footer fine print:** civic-ish airline disclaimer that carries the message — *"Boarding closes 10 min prior. Seats available to qualifying firms only."*

## Style Catalog

3 starter layouts. Each is a standalone HTML template in [templates/](templates/). Copy, edit FROM/TO codes + airline + passenger + boarding line, render.

| # | Name | Template | Layout | Key Element |
|---|---|---|---|---|
| 1 | Landscape Paper Pass | [style-01-paper-pass.html](templates/style-01-paper-pass.html) | Wide cream pass + perforated stub + barcode + CONFIRMED stamp | Classic issued-ticket feel with typewriter values |
| 2 | Mobile Wallet | [style-02-mobile-wallet.html](templates/style-02-mobile-wallet.html) | Dark wallet card + QR + label-above-value grid + reminder bar | "Boarding now" phone-native urgency |
| 3 | Vertical Paper | [style-03-vertical-paper.html](templates/style-03-vertical-paper.html) | Portrait paper + brand stripe + barcode + BOARDING NOW stamp | Ceremonial print pass — felt as souvenir/ticket |

**These are not the only styles.** Invent new layouts. Combine elements. The catalog grows as new concepts prove out in testing.

## QC checklist

- [ ] **Mode is committed:** the pass is unambiguously Mode A (paper) OR Mode B (mobile wallet) — no hybrid chrome
- [ ] **Pass authenticity:** at a glance, reads as an issued travel document
- [ ] **FROM/TO carry the message:** the codes and city names alone tell the buyer the story
- [ ] **Asymmetry honored:** TO field is slightly favored (brand color, weight, position) over FROM
- [ ] **Airline name and logo:** fictional, ICP-coded, no real carrier
- [ ] **Mode A chrome present:** perforation with tear notches, barcode, serial number, brand color stripe, pre-printed + filled-in contrast
- [ ] **Mode B chrome present:** rounded card, QR code, label-above-value grid, optional reminder bar
- [ ] **Boarding time CTA:** `BOARDING: [url]` / `BOARDING STARTS…` / boarding-time field — or stamp / post-frame pill
- [ ] **ICP present:** passenger name OR airline AND at least one other placement (FROM/TO, class, gate, footer)
- [ ] **Typography contrast (Mode A):** pre-printed labels + typewriter/handwriting filled-in values
- [ ] **No real airlines:** no Delta, United, AA, BA, Lufthansa, JetBlue, etc.
- [ ] **No real scannable codes:** barcode and QR are stylized SVG patterns
- [ ] **Thumbnail test:** at 400px, can you read FROM, TO, and the boarding-time CTA?
- [ ] **CSS rendering:** no overflow, perforation aligned, barcode/QR not clipped, no missing icons
- [ ] **Scroll-stop:** does the pass-on-canvas read as a photographed ticket or a wallet screenshot at 2am?

If any check fails → fix the HTML and re-render.

## Workflow

**Hierarchy: Ad → Copy → Images.**

1. **Read `campaigns/{slug}/ads/{ad-name}/COPY.md` first** — FROM/TO framing, airline name, passenger, boarding-time CTA should be in there.
2. **Pick the mode.** Mode A (paper) for ceremonial / nostalgic / "you've earned a seat" beats. Mode B (mobile wallet) for immediate / "boarding now" / phone-native beats.
3. **Cast the journey.** Lock the FROM and TO codes + city names. They are the headline; spend time here.
4. **Cast the chrome.** Airline name, passenger name, flight number, date, boarding time, gate, seat, class — all ICP-coded.
5. **Create the ad folder if it doesn't exist:** `campaigns/{slug}/ads/{ad-name}/images/`.
6. **Compose the HTML** at `campaigns/{slug}/ads/{ad-name}/images/{ad-name}.html`. Build the pass faithfully per the chosen mode — inline SVG for logo, perforation/QR/barcode; base64 for any imagery; Google Fonts via `@import` is the only allowed network resource at render time.
7. **Render the PNG:**
   ```bash
   node skills/shared/render-static.js \
     campaigns/{slug}/ads/{ad-name}/images/{ad-name}.html \
     campaigns/{slug}/ads/{ad-name}/images/
   ```
8. **Seed COPY** if it doesn't already exist: `node skills/shared/tools/backfill-copy.js` (or use the editor). Open `COPY.md` and clean up any auto-extraction quirks. Just the verbatim copy — no interpretive sections.
9. **QC** against the checklist above.

## Output

```
campaigns/{campaign-slug}/ads/{ad-name}/
  ├── COPY.md
  ├── copy.json
  └── images/
      ├── {ad-name}.html
      └── {ad-name}.png
```
