---
name: native-bank-sticky-note-designer
description: Builds ads that look like a real mobile-banking-app screenshot with a rotated yellow Post-it pinned to the screen carrying a handwritten one-liner like "sound familiar?" The note implies a real person flagged the screenshot for you. Pure resonance plays — no pitch, just mirror. Generic bank chrome only — never real institution names or logos.
---

# Native Bank Sticky-Note Designer

**Production method:** HTML/CSS + Playwright → see [../shared/HTML-RENDER-REFERENCE.md](../shared/HTML-RENDER-REFERENCE.md)
**Default output size:** 1080×1080 (square)

You build ads that feel like someone forwarded their own bank app screenshot to a friend with a yellow Post-it stuck on it. Scary low balance, one fat retainer debit, sticky-note saying *"sound familiar?"* — that's the ad. No pitch yet. The persuasion is pure mirror: "this is what your account looks like, and we both know it." The CTA at the bottom is the only forward motion.

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
| Banking screenshot + blur-with-one-sharp-row | native-bank-blur-reveal-designer |
| **Banking screenshot + sticky-note overlay** | **native-bank-sticky-note-designer** (this skill) |
| Banking screenshot + before/after split | native-bank-before-after-designer |

Reach here when the message is **pure resonance — the ad's job is to make the viewer think "that's me" before any pitch lands.** Great for: honest-mirror ads at the top of the funnel, awareness plays, "you're not alone in this" creative, and any ad where naming the pain *is* the move (and the CTA is just an invitation to keep talking). Don't reach here when you need to teach a system or show a result — this skill is for resonance, not proof.

## The two cardinal rules

**Rule 1 — Format authenticity.** The screenshot has to pass for a real banking app at first glance. Status bar, app header, balance card, quick-actions row, transaction list, bottom nav — all present, all in the right grammar. The viewer's instinct must say "my bank app" in 0.3 seconds.

**Rule 2 — The sticky-note is mandatory and it must look stuck on.** A real Post-it: yellow, rotated 5–8°, drop-shadow, masking-tape detail at the top, handwritten font, ≤ 4 short words. It sits *on top of the phone screen* (not on the bezel, not floating in the canvas) — implying a human grabbed a pen and slapped a note on their own screenshot. If the note looks like a CSS callout box, the device fails.

The three-question test in under a second:
1. **What am I looking at?** (a bank account)
2. **Why should I care?** (the balance is scary, the merchant is exactly the kind of vendor I pay too, the note is calling me out)
3. **What's the move?** (the CTA — short, inviting, not pushy)

If only #1 lands, the story is missing.

## ICP callout — mandatory

The ICP must be on the canvas in **at least two of these places**:

- **Top overlay headline** above the phone — `"If you run a PI firm in 2026:"` / `"Every agency owner I know has this account."` — names the ICP explicitly
- **Account label** at the top of the balance card — `Operating · Smith & Associates · ****8841`, `Agency Owner Checking`, `Business Checking · PI Firm`
- **Hero transaction merchant** (the largest debit, usually highlighted with a soft pink/red background) — `LEAD-GEN VENDOR · MONTHLY`, `AGENCY RETAINER LLC`, `INTAKE STAFFING CO`
- **Hero transaction category subtitle** — `Subscription · "Qualified PI leads"`, `SaaS · "Lead management"` (the quoted scare-tags are how the ICP would actually describe these vendors)

Top overlay + account label are the floor. Both must name the ICP.

## CTA — pill below the phone, short and inviting

This skill leans top-of-funnel — the CTA is an invitation, not a sales pitch. ≤ 4 words ending in `→`. Tonally soft: `Stop The Bleed →`, `Show Me Why →`, `See The Fix →`. Pulled verbatim from `COPY.md`.

**Never overlay a "Click here!" button on top of the banking UI** — it shatters the realism and the resonance. Pill goes below the phone in the canvas margin.

CTA copy comes from `COPY.md` — see [../shared/HTML-RENDER-REFERENCE.md § CTA is required](../shared/HTML-RENDER-REFERENCE.md).

## UI elements — required

### Top overlay headline (above the phone)
- Kicker line in small caps (`IF YOU RUN A PI FIRM IN 2026:`) — sets the ICP
- Main line in bold sans-serif (~38–42px), two lines max, ending with a colored emphasis word (`looks like this.` with `this.` in red)
- This is the *creator commentary* — what the person posting the screenshot would caption it as

### Phone frame
- Rounded outer shell (~40–44px radius), thin dark bezel
- ~700px × ~760px (slightly shorter than other lanes — the top overlay takes vertical space)

### Status bar
- Time on the left (`9:41`), signal icons on the right, ~32px tall

### App header
- Generic bank name centered (`Atlas Bank`, `First Capital`, `Northstar`) — **NEVER real bank names**
- Hamburger left, bell + search right

### Balance card — DARK RED GRADIENT (pain palette)
- Rounded card with `background: linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%);` — the balance card itself is the wound
- Account label uppercase, light pink color (`#fecaca`)
- Balance large (~48px), bold, white text — scary-low number (`$847.12`, `-$2,300.00`, `$3,847.12`)
- "Updated just now" timestamp in light pink

### Quick actions row
- 4 round-icon buttons with **pink-tinted** circles (`#fef2f2`), dark red glyphs (`#991b1b`) — the whole app feels under stress

### Transaction list — short and pointed
- Date header `Pending — today` at top, then the hero row
- **1 hero pending row** with soft pink background (`#fef2f2`) — the largest debit, ICP-specific merchant
- 3 supporting red debit rows below under a `Yesterday` header
- That's it. No green credit row. The whole point is "no relief in sight."

### Bottom nav
- 5-tab bar, active tab in dark red `#991b1b`

## The story device — required execution

### The sticky-note
- **Yellow background:** `#fef9c3` (a hair warmer than pure yellow — Post-it color)
- **Rotation:** `transform: rotate(6deg)` (or -5° to 8° range) — slight asymmetry, not perfectly straight
- **Size:** ~200px × ~180px (squarish, ~4 inches at print scale)
- **Drop shadow:** `box-shadow: 4px 10px 22px rgba(0,0,0,0.22)` — visible offset (not centered), as if light is coming from above-left
- **Masking-tape strip:** a small (~80px × ~22px) translucent gray rectangle pinned at the top of the note, rotated ~-3°, with subtle border — sells the "actually stuck on" feel
- **Position:** absolutely positioned **over the phone screen** (NOT the bezel, NOT outside the phone) — should overlap the transaction list area, ideally over the right side of a non-hero row so the hero amount stays readable
- **Padding inside the note:** 24px top, 16px sides, 16px bottom — gives the text breathing room

### The handwriting on the note
- **Kalam 700** via Google Fonts `@import` (or Caveat 700, or Permanent Marker — Kalam reads most like an actual ballpoint)
- ~30px, dark gray (`#1f2937` — NOT pure black, looks more like ink)
- **≤ 4 short words**, hand-broken across 2 lines, centered
- Punctuation does heavy lifting (`?`, `!`, `→`)
- Examples that work: `sound familiar?`, `still you?`, `same problem.`, `month 14 →`, `still no relief?`, `your turn?`, `we did this too`
- Avoid: anything that pitches, sells, or explains. The note's job is to flag, not to teach.

### What kills the device
- A perfectly-aligned non-rotated note — reads as UI callout, not as a real Post-it
- Skipping the masking tape — the tape is what makes it look stuck *on* something
- A note over the bezel or outside the phone — breaks the "screenshot with a real note on it" illusion
- A note covering the hero amount — the largest red number is your second-loudest story element after the note itself; never block it
- More than 4 words on the note — it stops reading as handwritten
- Adding a second story device (circle, arrow, blur) — this skill is one device only. Want more? Pick a different lane.

## Design principles

### Principle #1: This is a top-of-funnel mirror, not a pitch
The ad's job is to make the viewer say "that's me." The CTA is permission to keep the conversation going, not a closing question. Tone everything down: short note, soft CTA, no big proof claims.

### Principle #2: The balance is the wound
Dark red balance card. Scary low number. The card itself is the pain. Don't soften it with a friendly gradient or a hopeful timestamp — let it feel uncomfortable.

### Principle #3: One hero debit, not a list
The transaction list isn't a wall of pain (that's the `circled-debits` lane). Here, ONE hero pending row carries the ICP signal (`LEAD-GEN VENDOR · MONTHLY · -$4,800`) and a few supporting rows fill out the page. The note + hero row are the conversation; the rest is texture.

### Principle #4: The note has to feel real
Real Post-its are rotated. Real handwriting wobbles. Real notes are stuck on with tape that doesn't line up perfectly. Real notes use 2–4 words because that's all that fits. Every imperfection sells the device.

### Principle #5: Read order is overlay → balance → note → hero row → CTA
The top headline names the ICP and sets up "you." The dark-red balance is the punch in the gut. The note is the voice in the viewer's head saying it out loud. The hero row supplies the receipt. The CTA invites the next move. Five beats, one image.

## Layout rules

- Top overlay headline at the top of the canvas, padded `36px 60px 18px`, centered
- Phone frame centered below, ~700px × ~760px
- Sticky note absolutely positioned over the phone screen, ~230px from top of the phone-wrap, ~28px from the right
- CTA pill below the phone, centered, ~14px below the bottom of the phone

### Typography
- Bank UI + top overlay: `'Inter', -apple-system, BlinkMacSystemFont, sans-serif`, `font-variant-numeric: tabular-nums`
- Top overlay headline: `Inter 800`
- Sticky-note handwriting: `Kalam 700` via Google Fonts `@import`

### Palette
- Canvas: `#eef1f5`
- Phone bezel: `#111`
- App background: `#ffffff`
- Balance card: `linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%)` (dark red — pain palette)
- Balance label / sub: `#fecaca`
- Balance text: `#ffffff`
- Quick-action circles: `#fef2f2` background, `#991b1b` glyphs
- Debit red: `#dc2626`
- Hero row background: `#fef2f2` (soft pink)
- Active nav: `#991b1b`
- Sticky note: `#fef9c3` background, `#1f2937` text
- Masking tape: `rgba(200, 200, 200, 0.5)` with `border: 1px solid rgba(0,0,0,0.05)`
- Top overlay headline: `#0a0a0a` with one emphasis word in `#dc2626`
- CTA pill: `#0b1d3a` background, white text (deep navy — anchors the otherwise hot palette)

## Style Catalog

| # | Name | Template | Layout | Key Element |
|---|---|---|---|---|
| 1 | Sticky-Note Mirror | [templates/sticky-note.html](templates/sticky-note.html) | Top overlay headline + dark-red balance card + 1 hero pending debit + supporting debits + yellow Post-it with masking tape pinned to the screen | Rotated Kalam-handwritten Post-it ("sound familiar?") absolutely positioned over the transaction list — implies a human flagged the screenshot |

Preview: [previews/sticky-note.png](previews/sticky-note.png)

**This is not the only layout.** Vary the top overlay headline, the bank name, the hero merchant, the note copy, and the balance. The note + dark balance + hero pending row + top overlay quartet is the constant.

## QC checklist

- [ ] **Format authenticity:** at a glance, does it look like a real banking-app screenshot with a Post-it on it?
- [ ] **No real bank name / logo:** generic/invented only
- [ ] **No real account / routing numbers:** generic `****8841` if shown
- [ ] **UI accuracy:** phone frame + status bar + app header + balance card + quick-actions + transaction list + bottom nav all present
- [ ] **Top overlay headline present:** ICP-named in small caps kicker + bold two-line main headline + one emphasis word in red
- [ ] **Dark-red balance card:** gradient `#7f1d1d → #991b1b`, scary-low number in white
- [ ] **1 hero pending row with pink background** carrying the ICP-specific vendor
- [ ] **3 supporting red debit rows** under a Yesterday header
- [ ] **No green credit rows** — pain has no relief in this lane
- [ ] **Sticky-note pinned over the screen** (not over the bezel, not in the canvas margin)
- [ ] **Sticky-note is yellow `#fef9c3`, rotated 5–8°, has drop-shadow with offset, has a masking-tape strip at the top**
- [ ] **Note copy is ≤ 4 words in Kalam 700 (or Caveat / Permanent Marker)**, dark gray, broken across 2 lines
- [ ] **Note does NOT cover the hero row amount** — readable
- [ ] **CTA pill below phone:** ≤ 4 words + `→`, soft tonally, NOT overlaid on the banking UI
- [ ] **ICP present in top overlay AND in account label AND in hero merchant**
- [ ] **Tabular figures:** amounts align vertically down the right column
- [ ] **Three-question test:** in under a second — what am I looking at / why should I care / what's the move?
- [ ] **Thumbnail test:** at 400px, can you read the headline, see the note, and tell the balance is scary?
- [ ] **Resonance check:** does the ad feel like *flagging* the problem or *selling* the solution? It should feel like the former. If it's pitching, you've drifted into the wrong lane.

If any check fails → fix the HTML and re-render.

## Workflow

**Hierarchy: Ad → Copy → Images.**

1. **Read `campaigns/{slug}/ads/{ad-name}/COPY.md` first** — verbatim copy (top overlay headline, account label, balance, hero merchant, supporting rows, note copy, CTA) should be in there.
2. **Decide the balance number** — scary-low (`$847.12`, `$3,847.12`, `-$2,300.00`) anchors the wound.
3. **Pick the hero pending merchant** — the single ICP-specific vendor whose monthly debit will read as "yep, I pay one of those."
4. **Write the note copy** — ≤ 4 words, conversational, accusatory but warm. Test by reading it aloud — does it sound like something a friend would write?
5. **Write the top overlay headline** — kicker (`IF YOU RUN A PI FIRM IN 2026:`) + main line ending with a colored emphasis word.
6. **Create the ad folder:** `campaigns/{slug}/ads/{ad-name}/images/`.
7. **Copy the template** to `campaigns/{slug}/ads/{ad-name}/images/{ad-name}.html`. Edit copy + colors. Reposition the sticky-note only if your balance/transaction layout changes its safe landing zone.
8. **Render the PNG:**
   ```bash
   node skills/shared/render-static.js \
     campaigns/{slug}/ads/{ad-name}/images/{ad-name}.html \
     campaigns/{slug}/ads/{ad-name}/images/
   ```
9. **Seed COPY** if it doesn't exist: `node skills/shared/tools/backfill-copy.js`. Open `COPY.md` and clean. Just verbatim copy.
10. **QC** against the checklist above — especially the resonance check.

## Output

```
campaigns/{campaign-slug}/ads/{ad-name}/
  ├── COPY.md
  ├── copy.json
  └── images/
      ├── {ad-name}.html
      └── {ad-name}.png
```
