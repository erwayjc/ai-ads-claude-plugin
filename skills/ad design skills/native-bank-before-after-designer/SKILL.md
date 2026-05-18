---
name: native-bank-before-after-designer
description: Builds ads with two side-by-side mobile-banking-app screenshots — left labeled "before" (dark-red balance, stacked red debits), right labeled "after" (dark-green balance, stacked green credits) — with handwritten Caveat labels and a top headline naming what changed. The arc is shown literally, not implied. Generic bank chrome only — never real institution names or logos.
---

# Native Bank Before-After Designer

**Production method:** HTML/CSS + Playwright → see [../shared/HTML-RENDER-REFERENCE.md](../shared/HTML-RENDER-REFERENCE.md)
**Default output size:** 1080×1080 (square)

You build ads that show the transformation literally — two phone screens side by side, same account name, same week label, but the balance card on the left is dark red with a tiny scared number and the one on the right is dark green with a fat healthy number. Red debits stacked on the left; green credits stacked on the right. Handwritten *"before"* and *"after"* labels above each phone. The whole story reads in one glance — no inference required.

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
| Banking screenshot + sticky-note overlay | native-bank-sticky-note-designer |
| **Banking screenshot + before/after split** | **native-bank-before-after-designer** (this skill) |

Reach here when the message is **"same firm / same spend / different system — and here's the receipt."** Great for: case-study-style ads, transformation arc reveals, attribution claims where the variable that changed is the system (not the input). The split frame is the proof. Don't reach here when you need a single hero moment (use `blur-reveal`) or pure resonance (use `sticky-note`) — this skill requires that both halves of the story are equally specific.

## The two cardinal rules

**Rule 1 — Format authenticity, twice.** Both screenshots must independently pass for real banking apps. Status bar, app header, balance card, quick-actions row, transaction list, bottom nav — on BOTH phones. Same bank name, same account label, same week header. The only differences are the balance card color, the row colors, and the transaction content. Anything else that drifts (different fonts, different bank, different account format) shatters the "same firm, different time" claim.

**Rule 2 — The split + labels + top headline is mandatory.** Two phones side by side. Handwritten `before` (red, rotated -4°) and `after` (green, rotated +4°) labels above each phone with underlines. A top headline naming what changed (and naming the *system* as the cause). Without the labels the viewer might not know which side came first. Without the headline the viewer doesn't know what to attribute the change to.

The three-question test in under a second:
1. **What am I looking at?** (two screenshots of the same bank account at two different times)
2. **Why should I care?** (red turned to green, and the headline says it was the system)
3. **What's the move?** (the CTA — see the system)

If only #1 lands, the story is missing.

## ICP callout — mandatory

The ICP must be on the canvas in **at least three of these places** (this lane carries more surface area so it can hold more ICP signal — use it):

- **Top headline** — names the ICP context or the variable held constant: *"Same firm. 60 days apart."*, *"Same PI practice. Same ad spend."*, *"Same agency. Same retainer pool."*
- **Account label** at the top of BOTH balance cards (identical) — `Operating · PI Firm`, `Agency Owner Checking`, `Business Checking — Smith & Associates`
- **Before-side merchant names** — the ICP's recognizable cost stack: `FB ADS`, `LEAD-GEN VENDOR`, `AGENCY RETAINER`, `INTAKE STAFFING`
- **After-side merchant names** — the ICP's revenue side: `SETTLEMENT · CASE #1`, `CASE FEE · CASE #2`, `RETAINER · NEW CLIENT`
- **After-side category subtitles** — name the system as the cause: `14-day intake cycle`, `Signed via new intake system`, `From cohort 3 launch`
- **Bottom handwritten line** — restates the held-constant variable: *"same ad spend. different system."*, *"same headcount. better flow."*

Top headline + identical account labels are the floor.

## CTA — pill below the phones

Banking apps don't have promotional buttons, so the CTA lives below the split, centered. ≤ 5 words ending in `→`. This lane's CTA is naturally proof-forward: `See The System →`, `Show Me The System →`, `Get The Playbook →`. Pulled verbatim from `COPY.md`.

CTA copy comes from `COPY.md` — see [../shared/HTML-RENDER-REFERENCE.md § CTA is required](../shared/HTML-RENDER-REFERENCE.md).

## UI elements — required

### Top overlay headline (above both phones)
- Kicker line in small caps (`SAME FIRM. 60 DAYS APART.`) — names what's held constant
- Main headline in bold sans-serif (~38px), one or two lines, naming what changed
- Optional emphasis: italicize the word `system` (or whatever the causal variable is) so the eye lands on attribution
- Example: kicker `SAME FIRM. 60 DAYS APART.` + main `What changed wasn't the leads. It was the system.`

### Split layout
- Two phone frames side by side, `gap: 30px`
- Each phone ~480px × ~760px (smaller than single-phone lanes to fit two in a 1080-wide canvas)
- Equal vertical alignment — `align-items: flex-start`

### Per phone — both must include:
- **Status bar** (`9:41` + signal icons)
- **App header** with the SAME bank name on both sides
- **Balance card** (color is the only difference — see palette)
- **Quick actions row** (color-tinted to match — pink-tinted on before, green-tinted on after)
- **Date header** — IDENTICAL on both sides (`This week` is canonical) so the viewer reads them as comparable
- **Transaction list** — 4 rows per side (this is the optimized count for legibility at half-canvas width)
- **Bottom nav** — same structure, active-tab color matches the phone's palette

### Before phone — content
- Account label: `Operating · PI Firm` (or ICP-equivalent)
- Balance: scary low (`$847.12` range)
- 4 rows under `This week`: 3 red debits (FB ADS, LEAD-GEN VENDOR, AGENCY RETAINER) + 1 small green credit (`CASE FEE · 1 SIGNED · +$1,200`) — the small win is the punchline of the before-state ("they tried; one signed")

### After phone — content
- Account label: SAME as before (`Operating · PI Firm`)
- Balance: healthy ($184,950 range)
- 4 rows under `This week`: 3 green credits (settlement / case fee / case fee) + 1 red debit (`FB ADS · NEW INTAKE FLOW · -$4,200` with subtitle `Same spend, 7× signed`) — the ad spend ROW IS THE PROOF that the variable held constant

The red row on the after side is THE most important content detail in this skill — it shows the ICP that "we didn't just throw more money at it." Don't skip it.

## The story device — required execution

### The handwritten labels
- **Caveat 700** via Google Fonts `@import`
- ~52px, color matches the phone's palette (`#dc2626` for before, `#16a34a` for after)
- `transform: rotate(-4deg)` for `before`, `transform: rotate(4deg)` for `after` — opposite tilts read as "scribbled in a hurry"
- **Underline:** a 4px `currentColor` bar centered under the label, ~70% width, slight opacity (`0.85`)
- Positioned `top: -52px` relative to the phone-wrap — sits above the phone bezel in the canvas margin
- Centered horizontally over each phone

### The top headline structure
- Kicker in 13px small-caps gray (`#6b7280`), letter-spacing 2px
- Main headline Inter 800 ~38px, near-black `#0a0a0a`
- One word italicized for emphasis (typically the causal variable: `system`, `process`, `playbook`)

### The bottom handwritten line
- Caveat 700, ~32px, near-black `#0a0a0a`, slight rotation (`-1deg`)
- Restates the held-constant variable in plain language
- Sits between the phones and the CTA pill
- Examples: *"same ad spend. different system."*, *"same week. different account."*, *"no extra headcount. just better flow."*

### What kills the device
- Different bank names / different account labels across the two phones — destroys "same firm" claim
- Different date headers (`This week` on left, `Last week` on right) — confuses temporal anchoring
- Skipping the red row on the after side — the ad reads as "we spent more and made more" instead of "same spend, different system"
- Caveat labels without rotation or without underlines — reads as another UI label, not as a marker scribble
- Different fonts / different status bar styles across phones — the two screenshots have to look like the same app on the same phone
- Adding a third element (sticky-note, circle, blur, arrow) — this skill is split-only. Other devices are other lanes.

## Design principles

### Principle #1: The split frame is the proof structure
The whole rhetorical move is "same X, different Y → different outcome." The frame literally shows the X holding constant (account label, week header, bank name) while Y changes (the system, named in the headline). Don't muddy this — keep everything except the Y identical.

### Principle #2: Color carries 60% of the message
Before-balance card is dark red. After-balance card is dark green. Before-row amounts are red. After-row amounts are green. Active nav tabs match. The viewer reads the color story in 200ms; the typography is for the people who lean in.

### Principle #3: Density beats prose
Each phone has 4 rows. Together that's 8 transaction rows + 2 balance cards + 1 headline + 1 bottom line + 1 CTA — 13 elements. At 1080×1080 that's already crowded. **Don't add commentary inside the phones.** No banner notifications, no annotations, no callouts. The split itself is the annotation.

### Principle #4: The held-constant variable must be visible
If the headline says "same firm, different system," the viewer has to be able to verify "same firm" themselves by reading both phones. Identical account labels, identical bank names, identical week headers, identical ad-spend row (`FB ADS -$4,200` on both sides) — these aren't redundancies, they're the proof.

### Principle #5: System attribution is mandatory
The after side's transaction subtitles must name the system as the cause (`14-day intake cycle`, `Signed via new intake system`, `New intake flow`). The headline names it. The bottom line restates it. Three reinforcements that the change is attributable, not random.

## Layout rules

- Top overlay headline, padded `38px 0 18px`, centered
- Split: `display: flex; gap: 30px;` — two phones side by side
- Each phone ~480px × ~760px, ~36px corner radius, ~8px bezel
- Caveat labels positioned `top: -52px` over each phone in the canvas margin
- Bottom handwritten line + CTA pill in a vertical stack below the split, centered, ~20px gap from phones

### Typography
- Bank UI + top headline: `'Inter', -apple-system, BlinkMacSystemFont, sans-serif`, `font-variant-numeric: tabular-nums`
- Top headline main: `Inter 800` with one italicized word
- Before/after labels: `Caveat 700` via Google Fonts `@import`
- Bottom line: `Caveat 700`

### Palette
- Canvas: `#eef1f5`
- Phone bezel: `#111`
- App background: `#ffffff`
- Before balance card: `linear-gradient(135deg, #7f1d1d 0%, #991b1b 100%)`, label `#fecaca`, text white
- After balance card: `linear-gradient(135deg, #064e3b 0%, #047857 100%)`, label `#a7f3d0`, text white
- Before quick-action circles: `#fef2f2` background, `#991b1b` glyphs
- After quick-action circles: `#ecfdf5` background, `#047857` glyphs
- Debit red: `#dc2626`
- Credit green: `#16a34a`
- Before active nav: `#991b1b`
- After active nav: `#047857`
- Before label: `#dc2626`
- After label: `#16a34a`
- Top headline: `#0a0a0a` with `#6b7280` kicker
- Bottom line: `#0a0a0a`
- CTA pill: `#0b1d3a` background, white text (deep navy — anchors the red/green tension)

### Per-phone typography sizing (calibrated for 480px width)
- Status bar: 12px
- Bank name: 17px
- Account label: 11px
- Balance: 42px
- Quick-action label: 10px
- Date header: 11px
- Merchant name: 14px
- Category subtitle: 11px
- Amount: 15px
- Nav label: 10px

These sizes are the smallest legible at half-canvas width. Don't shrink further. If you need more content, drop a row, don't shrink the type.

## Style Catalog

| # | Name | Template | Layout | Key Element |
|---|---|---|---|---|
| 1 | Before / After Split | [templates/before-after.html](templates/before-after.html) | Top headline ("Same firm. 60 days apart. What changed wasn't the leads. It was the *system*.") + two side-by-side phones (dark-red balance + red debits on left, dark-green balance + green credits on right) with handwritten Caveat labels (`before` rotated -4°, `after` rotated +4°) + bottom handwritten line ("same ad spend. different system.") + navy CTA pill | The split frame IS the proof; one held-constant red row on the after side proves the variable that changed was the system, not the spend |

Preview: [previews/before-after.png](previews/before-after.png)

**This is not the only layout.** Vary the bank, the ICP-specific account label, the held-constant variable (ad spend / headcount / hours), the merchants, the cumulative deltas. The split + Caveat labels + top headline + bottom restatement quartet is the constant.

## QC checklist

- [ ] **Format authenticity (both phones):** at a glance, do BOTH read as real banking-app screenshots?
- [ ] **No real bank name / logo on either phone:** generic/invented only
- [ ] **No real account / routing numbers:** generic style if shown
- [ ] **Same bank name on both phones** (Atlas Bank both / First Capital both / etc.)
- [ ] **Same account label on both phones** (`Operating · PI Firm` both — letter-for-letter)
- [ ] **Same date header on both phones** (`This week` both)
- [ ] **Before balance card: dark red gradient, scary-low balance in white**
- [ ] **After balance card: dark green gradient, healthy balance in white**
- [ ] **4 rows per phone** (no more, no less, calibrated for legibility)
- [ ] **Before side: 3 red debits + 1 small green credit** (the small win is the punchline)
- [ ] **After side: 3 green credits + 1 red debit** (the held-constant ad-spend row is the proof — `FB ADS · NEW INTAKE FLOW · Same spend, 7× signed`)
- [ ] **Handwritten Caveat labels above each phone:** `before` red rotated -4° with underline; `after` green rotated +4° with underline
- [ ] **Top headline:** kicker in small-caps gray + Inter 800 main line + one italicized causal-variable word
- [ ] **Bottom handwritten line:** Caveat, restates the held-constant variable
- [ ] **CTA pill below the split:** ≤ 5 words + `→`, navy, NOT overlaid on either phone
- [ ] **Active nav color matches phone palette** (red active on before, green active on after)
- [ ] **Tabular figures:** amounts align vertically down each phone's right column
- [ ] **System attribution in three places:** headline, after-row subtitles, bottom line — all name the system as the cause
- [ ] **Three-question test:** in under a second — what am I looking at / why should I care / what's the move?
- [ ] **Thumbnail test:** at 400px, can you read the two balance numbers and the before/after labels?

If any check fails → fix the HTML and re-render.

## Workflow

**Hierarchy: Ad → Copy → Images.**

1. **Read `campaigns/{slug}/ads/{ad-name}/COPY.md` first** — verbatim copy (top headline, account label, both balance numbers, both transaction sets, both labels, bottom line, CTA) should be in there.
2. **Decide the held-constant variable** — what stays the same across before/after (ad spend / headcount / hours / vendor mix). Write the headline around this variable.
3. **Decide the two balance numbers** — before is scary-low, after is healthy. Both have to be plausible for the ICP's business size.
4. **Choreograph both transaction lists** — 4 rows each. Before is 3-debits-1-small-credit. After is 3-credits-1-debit (where the debit IS the held-constant variable, making it the proof).
5. **Write the headline + bottom line** — both must name the system explicitly. Italicize the causal word in the headline.
6. **Write the before/after labels** — typically just `before` / `after`, but variants like `month 1` / `month 3` or `then` / `now` work too.
7. **Create the ad folder:** `campaigns/{slug}/ads/{ad-name}/images/`.
8. **Copy the template** to `campaigns/{slug}/ads/{ad-name}/images/{ad-name}.html`. Edit copy + balance numbers + transaction content. Keep the layout — the typography is already calibrated.
9. **Render the PNG:**
   ```bash
   node skills/shared/render-static.js \
     campaigns/{slug}/ads/{ad-name}/images/{ad-name}.html \
     campaigns/{slug}/ads/{ad-name}/images/
   ```
10. **Seed COPY** if it doesn't exist: `node skills/shared/tools/backfill-copy.js`. Open `COPY.md` and clean. Just verbatim copy.
11. **QC** against the checklist above — especially the "same bank name / same account label / same week header" identity checks.

## Output

```
campaigns/{campaign-slug}/ads/{ad-name}/
  ├── COPY.md
  ├── copy.json
  └── images/
      ├── {ad-name}.html
      └── {ad-name}.png
```
