---
name: native-bank-blur-reveal-designer
description: Builds ads that look like a real mobile-banking-app screenshot where the top transaction rows are blurred and one green credit row is left sharp, with a marker-style arrow and handwritten note pointing at the sharp row. The blur tells the eye "the rest doesn't matter — this is what I want you to see." Generic bank chrome only — never real institution names or logos.
---

# Native Bank Blur-Reveal Designer

**Production method:** HTML/CSS + Playwright → see [../shared/HTML-RENDER-REFERENCE.md](../shared/HTML-RENDER-REFERENCE.md)
**Default output size:** 1080×1080 (square)

You build ads that direct the eye with a focal trick: the top of the transaction list is blurred — old pain, gone, irrelevant — and a single sharp green credit row sits in the middle with a marker arrow and handwritten note pointing at it: *"the day the system started paying us back."* The viewer can't help but look exactly where you want them to. The blur is the rejection of the past; the sharp row is the reveal.

**Legal caution:** the format borrows the *generic look* of a banking app, never a specific institution. Real bank names, logos, account number formats, and routing numbers are off-limits. Use invented bank names ("Atlas Bank", "First Capital", "Northstar Checking") or strip the bank name entirely and use a neutral account label ("Business Checking", "Operating Account · ****4521"). When in doubt, go more generic.

This is one of the `native-format-*` lanes in this repo:

| Lane | Beat | Skill |
|---|---|---|
| Pure typography | bold-text-designer |
| Name the pain → resolve | problem-solution-designer |
| Diagram IS the ad | system-visual-designer |
| Peers talking | chat-style-designer |
| Looks like a real Zoom / Meet call screenshot | native-zoom-screenshot-designer |
| Banking screenshot + circled recurring debits | native-bank-circled-debits-designer |
| **Banking screenshot + blur-with-one-sharp-row** | **native-bank-blur-reveal-designer** (this skill) |
| Banking screenshot + sticky-note overlay | native-bank-sticky-note-designer |
| Banking screenshot + before/after split | native-bank-before-after-designer |

Reach here when the message is **"forget what you've been doing — *this* is what working actually looks like."** Great for: solution reveals, system-paid-back moments, result-of-the-new-process ads, before/after that doesn't need both halves shown literally. The blur implies the before without dwelling on it.

## The two cardinal rules

**Rule 1 — Format authenticity.** The screenshot has to pass for a real banking app at first glance. Status bar, app header, balance card, quick-actions row, transaction list, bottom nav — all present, all in the right grammar. The viewer's instinct must say "my bank app" in 0.3 seconds.

**Rule 2 — Blur + sharp hero row + arrow annotation is mandatory.** All three. Blurred pain rows at top → one sharp green credit row in the middle with a green band around it → marker arrow + handwritten note pointing at it. A screenshot with only blur is missing the reveal. A screenshot with a highlighted row but no blur is missing the rejection of the past. Both halves are the device.

The three-question test in under a second:
1. **What am I looking at?** (a bank account)
2. **Why should I care?** (the sharp row is huge, green, and pointed at)
3. **What's the move?** (the CTA — see how this works)

If only #1 lands, the story is missing.

## ICP callout — mandatory

The ICP appears in **at least two of these places**:

- **Account label** at the top of the balance card — `Operating · PI Firm · ****4521`, `Agency Owner Account`, `Business Checking — Smith & Associates`
- **Sharp hero row merchant** — the green credit row's merchant name should name the win in the ICP's terms: `CASE SETTLEMENT · 1 OF 7`, `RETAINER · NEW CLIENT`, `LAUNCH REVENUE · COHORT 3`
- **Sharp hero row category subtitle** — the system that produced the win: `Deposit · Signed via new intake system`, `From 14-day intake cycle`, `New client from system launch`
- **Annotation copy** — handwritten line names the moment, not generic praise. *"the day the system started paying us back"* > *"big win!"*
- **Headline overlay below the phone** — the system's name or the ICP-shaped outcome

Account label + sharp-row merchant are the floor. Both must carry ICP.

## CTA — pill below the phone

Banking apps don't have promotional buttons, so the CTA lives **outside the phone frame** as a small green pill in the canvas margin below the screenshot. ≤ 5 words ending in `→`. Pulled verbatim from `COPY.md`. **Never overlay a "Click here!" button on top of the banking UI.**

CTA copy comes from `COPY.md` — see [../shared/HTML-RENDER-REFERENCE.md § CTA is required](../shared/HTML-RENDER-REFERENCE.md).

## UI elements — required

### Phone frame
- Rounded outer shell (~40–44px radius), thin dark bezel
- ~720px wide, ~900px tall

### Status bar
- Time on the left (`9:41`), signal icons on the right, ~34px tall

### App header
- Generic bank name centered (`Atlas Bank`, `First Capital`, etc.) — **NEVER real bank names**
- Hamburger left, bell + search right

### Balance card
- White card with thin border + soft shadow (NOT dark — this skill leans positive/growth)
- Account label uppercase gray, balance huge in **green** (`#16a34a`) at ~50px — the balance is part of the resolution
- Optional "Updated just now" timestamp

### Quick actions row
- 4 round-icon buttons with **green-tinted** circles (`#ecfdf5`), green glyphs — the whole app feels healthy

### Transaction list — the focal trick lives here
- Date header `Last week` above the blurred section, `Today` above the sharp hero row
- **Exactly 3 blurred pain rows** at top (red debits) — agency / vendor / SaaS merchants, ICP-specific
- **1 sharp green hero row** in the middle with a soft green background band and a 2px green border top + bottom — this is the row everything points at
- **2 additional sharp green credit rows** below the hero (less prominent, smaller amount, no band) — reinforces "this isn't a one-off, the system keeps producing"

### Bottom nav
- 5-tab bar, active tab in green `#047857`

## The story device — required execution

### The blur
- Apply `filter: blur(3.5px); opacity: 0.55;` to the top 3 pain rows
- Keep the row structure visible — the viewer should be able to tell they're transactions and that they're red, just not read them clearly
- Don't blur the date header above them — `LAST WEEK` stays sharp as a temporal anchor

### The sharp hero row
- Soft green background: `background: #ecfdf5;`
- 2px green border top and bottom: `border-top: 2px solid #16a34a; border-bottom: 2px solid #16a34a;`
- Slightly larger amount text (~22px vs 16px for surrounding rows)
- The amount is the largest single number on the row — `+$48,500.00` range works well for PI firm settlements; scale to ICP

### The marker arrow
- **Inline SVG** absolutely positioned, starting from the handwritten annotation (top-right of the phone) and sweeping down-left so the arrowhead lands cleanly on the **left half of the hero row** (over the merchant icon or name — NOT over the amount, which has to stay readable)
- Stroke `#16a34a`, width 5px, `stroke-linecap: round`, opacity ~0.92
- Arrowhead drawn as two short stroke paths off the main path's end

```svg
<svg viewBox="0 0 320 150" preserveAspectRatio="none">
  <path d="M 280 18 C 240 36, 200 62, 150 92 C 110 116, 70 130, 38 134"
        fill="none" stroke="#16a34a" stroke-width="5"
        stroke-linecap="round" opacity="0.92"/>
  <path d="M 38 134 L 62 122 M 38 134 L 52 152"
        fill="none" stroke="#16a34a" stroke-width="5"
        stroke-linecap="round" opacity="0.92"/>
</svg>
```

### The handwritten annotation
- **Permanent Marker** via Google Fonts `@import` (or Caveat 700)
- ~26px, green `#16a34a`, `transform: rotate(-3deg)`
- Positioned **above** the hero row (NOT on top of it) — anchors the top end of the arrow
- 2–3 short lines naming the moment in the ICP's voice
- Examples that work: *"the day the system started paying us back"*, *"first deal from the new intake flow"*, *"this is what month 2 looks like"*
- Avoid: *"BOOM"*, *"$$$"*, *"WIN!"* — too generic, no narrative

### The headline overlay below the phone
- Inter 800, ~38px, centered in the canvas margin below the phone
- Names the cumulative outcome — *"7 cases signed in 60 days. $184K landed."* — with the dollar / count in green
- One line, no kicker needed (the screenshot already did the kicker)

### What kills the device
- Forgetting the blur — a single highlighted green row without context just reads as "a green row," not as a reveal
- Blurring too few rows (2 isn't enough — 3 minimum reads as "a stack of pain")
- Arrow landing on the amount column (blocks the dollar number, which is the punch)
- Annotation that doesn't tie the win to a *system* — the reveal is "the system worked," not "we got lucky"
- A CSS-clean border around the hero row that reads as UI (rounded callout box, drop shadow). The band + thin green borders should feel like a banking-app "highlight pending" state, not a marketing callout

## Design principles

### Principle #1: The blur is the rejection of the past
You're not just hiding rows — you're telling the viewer "the old pain is behind you, don't dwell on it." Blur is forward motion.

### Principle #2: The sharp row is the only thing the eye is allowed to read
Everything else is structure. Don't compete with it. Don't add a second highlighted row, a second annotation, a second arrow. The whole canvas is built to direct the eye to one place.

### Principle #3: Green is health
Balance card text, quick-action circles, sharp credit rows, annotation, arrow, CTA pill — all green. Red appears only in the blurred (dismissed) rows. The color story is "the green replaced the red."

### Principle #4: The system name is the second-loudest text
After the dollar amount on the hero row, the next loudest thing should be the phrase that names the system — in the merchant subtitle (`Signed via new intake system`), in the annotation (`the day the system started paying us back`), or in the headline overlay. Three reinforcements that the win is *attributable*.

### Principle #5: The balance is the prelude, the hero row is the climax
The balance card is huge and green — `$184,950.00` — but it's stating the result, not the moment. The hero row is the moment. The viewer reads balance ("oh, healthy") → blurred rows ("oh, used to be sick") → hero row ("oh, THIS is what changed").

## Layout rules

- Phone frame centered, ~720px × ~900px, ~40px margin top, ~32px bottom
- Headline overlay below phone, ~38px bold, CTA pill below that
- Status bar ~34px, app header ~52px, balance card ~140–170px, quick-actions ~70px, transaction list fills remaining, bottom nav ~64px
- Background canvas: `#f4f5f7`

### Typography
- Bank UI: `'Inter', -apple-system, BlinkMacSystemFont, sans-serif`, `font-variant-numeric: tabular-nums`
- Headline overlay: `Inter 800`
- Annotation: `Permanent Marker` via Google Fonts `@import`

### Palette
- Canvas: `#f4f5f7`
- Phone bezel: `#111`
- App background: `#ffffff`
- Balance card: white with `border: 1px solid #e5e7eb` and subtle shadow
- Balance text: `#16a34a` (green)
- Quick-action circles: `#ecfdf5` background, `#16a34a` glyphs
- Debit red (blurred rows only): `#dc2626`
- Credit green: `#16a34a`
- Hero row band: `#ecfdf5` background, `#16a34a` borders
- Arrow + annotation: `#16a34a`
- Active nav: `#047857`
- CTA pill: `#16a34a` background, white text

## Style Catalog

| # | Name | Template | Layout | Key Element |
|---|---|---|---|---|
| 1 | Blur Reveal | [templates/blur-reveal.html](templates/blur-reveal.html) | White balance card + 3 blurred red pain rows + sharp green hero row with band + 2 supporting green rows + marker arrow + handwritten "the day the system started paying us back" | Blur tells the eye what to ignore; sharp row + arrow tell the eye where to land |

Preview: [previews/blur-reveal.png](previews/blur-reveal.png)

**This is not the only layout.** Vary the merchant mix in the blurred section, the hero row amount, the annotation copy, and the headline. The blur + sharp band + arrow + annotation quartet is the constant.

## QC checklist

- [ ] **Format authenticity:** at a glance, does it look like a real banking-app screenshot?
- [ ] **No real bank name / logo:** generic/invented only
- [ ] **No real account / routing numbers:** generic `****4521` if shown
- [ ] **UI accuracy:** phone frame + status bar + app header + balance card + quick-actions + transaction list + bottom nav all present
- [ ] **Balance is green:** the balance number itself uses `#16a34a`, not black
- [ ] **3 blurred pain rows at top:** filter blur ~3.5px + opacity ~0.55, structure still visible
- [ ] **1 sharp green hero row:** green background band + 2px top/bottom green borders + larger amount text (~22px)
- [ ] **2 supporting sharp green credit rows below hero** (smaller, no band)
- [ ] **Marker arrow (SVG):** stroke `#16a34a` 5px, sweeps down-left, arrowhead lands on the LEFT half of the hero row, never on the amount column
- [ ] **Handwritten annotation:** Permanent Marker / Caveat 700, green, rotated, ICP-specific copy naming the system or moment
- [ ] **Headline overlay below phone:** cumulative outcome with green dollar/count, Inter 800
- [ ] **CTA pill below phone:** ≤ 5 words + `→`, green background, NOT overlaid on the banking UI
- [ ] **ICP present in account label AND in hero row merchant/subtitle AND in annotation**
- [ ] **Tabular figures:** amounts align vertically down the right column
- [ ] **System attribution:** the win is named as attributable to a system (in merchant subtitle OR annotation OR headline)
- [ ] **Three-question test:** in under a second — what am I looking at / why should I care / what's the move?
- [ ] **Thumbnail test:** at 400px, can you see the blur-to-sharp transition and read the hero row amount?

If any check fails → fix the HTML and re-render.

## Workflow

**Hierarchy: Ad → Copy → Images.**

1. **Read `campaigns/{slug}/ads/{ad-name}/COPY.md` first** — verbatim copy (account label, balance, transactions, annotation, headline, CTA) should be in there.
2. **Decide the balance number** — a growth-arc balance in green that reads as resolution (`$184,950.00`, `$92,400.00`, etc.). Scale to ICP.
3. **Choreograph the rows:**
   - 3 pain merchants for the blur (will be barely readable — but pick real ones so the structure looks honest)
   - 1 hero credit row — merchant names the win, subtitle names the system
   - 2 supporting credit rows below — same pattern, less prominent
4. **Write the annotation** — 2–3 short handwritten lines naming the moment/system, ending where the arrow starts.
5. **Write the headline overlay** — cumulative outcome line, green dollar amount.
6. **Create the ad folder:** `campaigns/{slug}/ads/{ad-name}/images/`.
7. **Copy the template** to `campaigns/{slug}/ads/{ad-name}/images/{ad-name}.html`. Edit copy + amounts + colors as needed. Reposition arrow SVG only if your row count differs.
8. **Render the PNG:**
   ```bash
   node skills/shared/render-static.js \
     campaigns/{slug}/ads/{ad-name}/images/{ad-name}.html \
     campaigns/{slug}/ads/{ad-name}/images/
   ```
9. **Seed COPY** if it doesn't exist: `node skills/shared/tools/backfill-copy.js`. Open `COPY.md` and clean. Just verbatim copy.
10. **QC** against the checklist above.

## Output

```
campaigns/{campaign-slug}/ads/{ad-name}/
  ├── COPY.md
  ├── copy.json
  └── images/
      ├── {ad-name}.html
      └── {ad-name}.png
```
