---
name: native-bank-circled-debits-designer
description: Builds ads that look like a real mobile-banking-app screenshot with a hand-drawn red circle wrapping the recurring debits and a handwritten annotation naming the pain. The format is a banking screenshot; the device that makes it an ad is the annotated circle. Generic bank chrome only — never real institution names or logos.
---

# Native Bank Circled-Debits Designer

**Production method:** HTML/CSS + Playwright → see [../shared/HTML-RENDER-REFERENCE.md](../shared/HTML-RENDER-REFERENCE.md)
**Default output size:** 1080×1080 (square)

You build ads that look like someone took a screenshot of their banking app and circled the rows that are bleeding them. The viewer reads a balance number, sees a column of red recurring debits, then sees a hand-drawn red circle and a marker-style note — "every. single. month." — and understands the pain in 0.5 seconds. The arithmetic does the persuading; the circle tells them where to look.

**Legal caution:** the format borrows the *generic look* of a banking app, never a specific institution. Real bank names, logos, account number formats, and routing numbers are off-limits. Use invented bank names ("Atlas Bank", "First Capital", "Northstar Checking") or strip the bank name entirely and use a neutral account label ("Business Checking", "Operating Account · ****4521"). When in doubt, go more generic.

This is one of the `native-format-*` lanes in this repo:

| Lane | Beat | Skill |
|---|---|---|
| Pure typography | bold-text-designer |
| Name the pain → resolve | problem-solution-designer |
| Diagram IS the ad | system-visual-designer |
| Peers talking | chat-style-designer |
| Looks like a real Zoom / Meet call screenshot | native-zoom-screenshot-designer |
| **Banking screenshot + circled recurring debits** | **native-bank-circled-debits-designer** (this skill) |
| Banking screenshot + blur-with-one-sharp-row | native-bank-blur-reveal-designer |
| Banking screenshot + sticky-note overlay | native-bank-sticky-note-designer |
| Banking screenshot + before/after split | native-bank-before-after-designer |

Reach here when the message is **"you're being bled by recurring costs and you've stopped noticing."** Great for: cost-of-current-state ads, recurring-spend pain (agency retainers, ad spend with no return, vendor charges), wake-up calls for buyers running on autopilot. The circle is the wake-up.

## The two cardinal rules

**Rule 1 — Format authenticity.** The screenshot has to pass for a real banking app at first glance. Status bar, app header, balance card, quick-actions row, transaction list, bottom nav — all present, all in the right grammar. The viewer's instinct must say "my bank app" in 0.3 seconds.

**Rule 2 — The annotated circle is mandatory.** A clean screenshot with no annotation is wallpaper, not an ad. Every output of this skill has a hand-drawn red circle around the recurring debit rows AND a handwritten marker-style annotation pointing at them. Both. Not optional. If only one is present, ship a different lane.

The three-question test in under a second:
1. **What am I looking at?** (a bank account)
2. **Why should I care?** (those red rows repeat, every month, and they're mine)
3. **What's the move?** (the CTA — see a system that stops the bleed)

If only #1 lands, the story is missing.

## ICP callout — mandatory

The ICP must be on the canvas. In this format the ICP shows up *inside* the screenshot, not pinned outside it. The ICP appears in **at least two of these places**:

- **Account label** at the top of the balance card — `Operating · PI Firm · ****4521`, `Agency Owner Account`, `Business Checking — Smith & Associates`
- **Merchant names** in the circled debits — `FB ADS · PI Firm Lead-Gen`, `LEAD-GEN VENDOR`, `AGENCY RETAINER LLC`
- **Category subtitles** — `Advertising · PI Lawyer Lead-Gen`, `Subscription · Agency Owner Tools`, `"Lead management" SaaS`
- **Annotation copy** — the handwritten note is the loudest text on the canvas; make it speak the ICP's interior monologue, not generic outrage. *"every. single. month."* > *"wow!"*

Account label is the floor. Never publish without an ICP-bearing account label AND ICP-bearing merchant names in the circled rows.

## CTA — pill below the phone

Banking apps don't have promotional buttons, so the CTA lives **outside the phone frame** as a small brand-accent pill in the canvas margin below the screenshot. ≤ 5 words ending in `→`. Pulled verbatim from `COPY.md`. **Never overlay a "Click here!" button on top of the banking UI** — it shatters the realism instantly.

CTA copy comes from `COPY.md` — see [../shared/HTML-RENDER-REFERENCE.md § CTA is required](../shared/HTML-RENDER-REFERENCE.md).

## UI elements — required

### Phone frame
- Rounded outer shell (~40–44px radius), thin dark bezel
- ~700–760px wide, ~880px tall, leaving canvas margin top/bottom for the headline overlay and CTA pill

### Status bar
- Time on the left (e.g. `9:41`), signal / Wi-Fi / battery on the right
- ~34px tall, monochrome icons (inline SVG or Unicode)

### App header
- Generic / fictional bank name centered (`Atlas Bank`, `First Capital`, `Northstar`, or just `Business Checking`) — **NEVER real bank names**
- Hamburger left, bell + search right
- Thin separator below

### Balance card
- Rounded card (~18–24px radius), sits below header
- Dark gradient is fine (deep navy `#0b1d3a → #15326b`) — this skill leans pain-forward so a serious palette reads truer than a friendly white card
- Account label uppercase, balance huge (~50px), bold, with `$` and two decimals
- Optional "Updated just now" timestamp on the right

### Quick actions row
- 4 round-icon buttons (Pay · Transfer · Deposit · More), ~42px circles
- Soft tinted background on the circles, monochrome glyphs

### Transaction list — this is where the story lives
- Date header at top: `This month — recurring` is the canonical phrasing for this lane (groups the debits as a single beat)
- **4–6 visible transactions.** Of these:
  - **3–5 recurring red debits** — these are what the circle wraps. Identical-feeling merchants and amounts ($2,400 / $3,100 / $4,200 / $5,000 range, ICP-appropriate)
  - **1 small green credit at the bottom** (optional but recommended) — a single signed case / one closed deal — completing the "all this spend, this little return" arithmetic
- Per row: colored merchant initial circle (~36px), merchant name in 14px medium, category subtitle in 11px gray, red `-$X,XXX.00` amount on the right with tabular numerals

### Bottom nav
- 5-tab bar (Home · Accounts · Transfers · Pay · More), active tab in brand accent

## The story device — required execution

### The hand-drawn circle
- **Inline SVG** absolutely positioned over the transaction rows, wrapping ONLY the amounts column on the right (NOT the full row width — leave merchant names readable)
- Stroke: `#dc2626`, width 5px, `stroke-linecap: round`, opacity ~0.92
- Path is a vertical oval drawn with Bézier curves; slight rotation (~−1.5°) and intentional asymmetry so it reads as hand-drawn, not as a CSS border
- **Wrap 3–5 amount cells.** Wrap exactly the rows the annotation will scold.

```svg
<svg viewBox="0 0 240 236" preserveAspectRatio="none">
  <path d="M 130 14
           C 70 18, 24 36, 18 80
           C 12 130, 14 180, 26 208
           C 44 232, 130 232, 180 228
           C 216 224, 230 196, 228 140
           C 226 70, 210 28, 160 16
           C 148 14, 138 13, 130 14 Z"
        fill="none" stroke="#dc2626" stroke-width="5"
        stroke-linecap="round" opacity="0.92"
        transform="rotate(-1.5 120 118)"/>
</svg>
```

### The handwritten annotation
- **Caveat 700** via Google Fonts `@import` (or Permanent Marker, or Kalam)
- ~36px, color `#dc2626` (matches the circle), `transform: rotate(-5deg)`
- Position outside the circle — to the **left** of it works best (annotation in clean canvas space, arrow inside the annotation text points right at the circled amounts)
- Copy is 2–4 short lines, ICP-pain in their own voice, ending in `→`
- Examples that work: *"every. single. month. →"*, *"again??? →"*, *"this is just to play. →"*, *"and not one signed case. →"*
- Avoid: *"Wow!"*, *"OMG"*, *"Crazy right?"* — too generic, no ICP signal

### The headline overlay below the phone
- Bold sans-serif (Inter 800), ~44px, centered in the canvas margin below the phone
- Names the **monthly arithmetic** in dollar terms (`$16,550/mo`), with the dollar number in `#dc2626`
- One supporting line in muted gray (~18px, weight 500) — the kicker that makes the spend land
- Example: *"$16,550/mo to keep the lights on the ad account."* — kicker: *"And one signed case to show for it."*

### What kills the device
- A CSS border-radius circle (sharp, perfect, clearly UI). It MUST be an SVG path with intentional wobble.
- Handwritten copy that doesn't name the ICP's pain. *"Yikes!"* fails the three-question test.
- Circle wrapping the full row (merchant + category + amount). Wrap only the amounts column or only the right half so the rows themselves stay readable.
- More than one story device (don't add a sticky-note + a blur — that's a different skill).

## Design principles

### Principle #1: Arithmetic is the persuasion
Dollar amounts read as facts, not claims. Three red debits in a column at $2,400 each tell a "you're bleeding money" story more efficiently than any headline. The annotation just tells the eye *where* to do the math.

### Principle #2: Generic chrome, specific copy
Spend extra time on the banking-UI accuracy — phone frame, status bar, balance card, quick-actions, bottom nav. Then make the *copy* (account label, merchant names, categories, annotation) verbatim-ICP. Generic chrome + specific copy is the formula.

### Principle #3: The circle is loud — the rest is quiet
Red circle + red annotation + red headline `$XX,XXX/mo` = three saturated red elements. Everything else should be near-monochrome (white bank-card or dark navy, near-black text, soft gray dividers). The eye lands on red, every time.

### Principle #4: One arc, top to bottom
Transaction list reads as a sequence: recurring drain rows clustered → optional small green credit at the bottom that completes the math. Don't randomize. The circle wraps the drain; the green row is the punchline.

### Principle #5: The balance is the setup, the circle is the punch
Pick the balance number deliberately. A scary low number (`$3,847.12`, `$847.12`) sets pain. A neutral mid-five-figure balance lets the circled rows carry the whole story. Don't put a placeholder there — the balance is a chosen rhetorical move.

## Layout rules

- Phone frame centered, ~720–760px × ~880px, ~36–60px margin top and ~28px bottom
- Headline overlay below phone, ~44px bold, ~18px subtext, accent CTA pill ~14px below that
- Status bar ~34px, app header ~52px, balance card ~140–170px, quick-actions ~80px, transaction list fills remaining, bottom nav ~64px
- Background: light neutral `#eef1f5` or `#f4f5f7` — sells the screenshot-on-a-canvas feel

### Typography
- Bank UI: `'Inter', -apple-system, BlinkMacSystemFont, sans-serif`, `font-variant-numeric: tabular-nums` for amounts
- Headline overlay: `Inter 800`
- Annotation: `Caveat 700` (or Permanent Marker, Kalam) via Google Fonts `@import`

### Palette
- Canvas: `#eef1f5`
- Phone bezel: `#111`
- App background: `#ffffff`
- Balance card: `linear-gradient(135deg, #0b1d3a 0%, #15326b 100%)` (dark navy — pain-forward)
- Debit red: `#dc2626`
- Headline accent: `#dc2626` for the dollar amount, `#0a0a0a` for the rest
- Annotation: `#dc2626`
- CTA pill: `#0b1d3a` background, white text

## Style Catalog

| # | Name | Template | Layout | Key Element |
|---|---|---|---|---|
| 1 | Circled Debits | [templates/circled-debits.html](templates/circled-debits.html) | Dark balance card + 4 stacked red recurring debits + vertical red circle around amounts column + handwritten "every. single. month." | Hand-drawn SVG circle wraps ONLY the amounts column, leaves merchant text readable |

Preview: [previews/circled-debits.png](previews/circled-debits.png)

**This is not the only layout.** Vary the balance color, the merchant mix, the annotation copy, and the headline dollar amount. The circle + annotation + headline triad is the constant.

## QC checklist

- [ ] **Format authenticity:** at a glance, does it look like a real banking-app screenshot?
- [ ] **No real bank name / logo:** generic/invented only — no Chase, Wells Fargo, BofA, Amex, Capital One, Chime, Mercury, etc.
- [ ] **No real account / routing numbers:** if masked, generic `****4521` style
- [ ] **UI accuracy:** phone frame + status bar + app header + balance card + quick-actions + transaction list + bottom nav all present
- [ ] **Balance card weight:** balance is one of the largest texts on the canvas, bold, `$` + two decimals
- [ ] **Debit color convention:** debits red `-$X` with leading minus, never swapped to green
- [ ] **3–5 recurring debit rows circled** — not 1, not 10
- [ ] **Hand-drawn circle (SVG, not CSS border):** stroke `#dc2626`, ~5px width, slight rotation, wraps amounts column only — merchant names readable
- [ ] **Handwritten annotation present:** Caveat / Permanent Marker / Kalam, red, rotated, ICP-specific copy, ends in `→`
- [ ] **Headline overlay below phone:** dollar arithmetic in red, kicker line in muted gray
- [ ] **CTA pill below phone:** ≤ 5 words + `→`, brand-accent background, NOT overlaid on the banking UI
- [ ] **ICP present in account label AND in circled merchant names AND in annotation**
- [ ] **Tabular figures:** amounts align vertically down the right column
- [ ] **Three-question test:** in under a second — what am I looking at / why should I care / what's the move?
- [ ] **Thumbnail test:** at 400px, can you read the balance, see the circle, and identify the ICP?

If any check fails → fix the HTML and re-render.

## Workflow

**Hierarchy: Ad → Copy → Images.**

1. **Read `campaigns/{slug}/ads/{ad-name}/COPY.md` first** — verbatim copy (account label, balance, transactions, annotation, headline, CTA) should be in there.
2. **Decide the balance number** — pain (low / negative) or neutral (mid five-figure that lets the circle do the work).
3. **Choreograph the circled rows** — pick 3–5 recurring debits that read as "obviously the same kind of spend." Identical-looking merchant types, similar amounts.
4. **Write the annotation copy** — 2–4 short handwritten lines that name the ICP's interior reaction, ending in `→`.
5. **Write the headline overlay** — `$XX,XXX/mo` in red + kicker line. Pulled from COPY.md.
6. **Create the ad folder if it doesn't exist:** `campaigns/{slug}/ads/{ad-name}/images/`.
7. **Copy the template** to `campaigns/{slug}/ads/{ad-name}/images/{ad-name}.html`. Edit account label, balance, merchants, amounts, annotation, headline, CTA. Keep the SVG circle path; reposition only if your row count differs.
8. **Render the PNG:**
   ```bash
   node skills/shared/render-static.js \
     campaigns/{slug}/ads/{ad-name}/images/{ad-name}.html \
     campaigns/{slug}/ads/{ad-name}/images/
   ```
9. **Seed COPY** if it doesn't exist: `node skills/shared/tools/backfill-copy.js`. Open `COPY.md` and clean any auto-extraction quirks. Just verbatim copy — no interpretive sections.
10. **QC** against the checklist above — especially "no real bank name" and the three-question test.

## Output

```
campaigns/{campaign-slug}/ads/{ad-name}/
  ├── COPY.md
  ├── copy.json
  └── images/
      ├── {ad-name}.html
      └── {ad-name}.png
```
