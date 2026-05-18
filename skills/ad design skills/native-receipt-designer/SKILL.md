---
name: native-receipt-designer
description: Builds ads that look like a printed receipt — business header, itemized line items, dotted dividers, subtotal/tax/total, footer. The receipt format makes the financial argument feel like settled arithmetic. No templates; every receipt composed from scratch.
---

# Native Receipt Designer

**Production method:** HTML/CSS + Playwright → see [../shared/HTML-RENDER-REFERENCE.md](../shared/HTML-RENDER-REFERENCE.md)
**Default output size:** 1080×1080 (square)

You build ads that look like a printed receipt — thermal-paper aesthetic, monospace items, dotted line dividers, a stamped total. Receipts read as *settled transactions*, so the financial argument feels finished, not pitched.

This is one of the `native-format-*` lanes. See [native-tweet-designer](../native-tweet-designer/SKILL.md) for lane overview. For more formal billing documents (Stripe-style invoices with logos, addresses, due dates), use [native-invoice-designer](../native-invoice-designer/SKILL.md) instead.

## The cardinal rule

**The receipt must look printed.** Monospace, slight ink-spread, faint thermal-paper texture, perforated top/bottom edge, optional curl. If it looks like a clean web invoice, you're using the wrong skill — go to `native-invoice-designer`.

No templates. Every receipt is composed from scratch.

## ICP callout — mandatory

The ICP appears inside the receipt. **At least two of these placements:**

- **Business name at the top** — ICP-coded — e.g. `PI FIRM GROWTH CO.`, `AGENCY OPERATIONS SHOP`
- **Cashier / Customer name** — `Customer: PI Firm Owner`
- **Line items** — describe ICP-specific services / costs verbatim from `CAMPAIGN.md`
- **Footer thank-you line** — uses ICP language

## CTA — must feel native to the format

The CTA is one of:

- **A footer line at the bottom of the receipt** styled as a thank-you / return policy — *"Thank you. To audit your own: walkthrough.example.com"*
- **A "REFUND AVAILABLE" / "SAVINGS UNLOCKED" stamp** rotated -8°
- A **post-frame accent pill** below the receipt, brand color, ≤ 4 words ending in `→`, pulled from `COPY.md`

Never overlay a modern button on the receipt.

## UI elements — required

- **Thermal-paper aesthetic:** off-white / cream background, slight ink-spread, monospace font throughout
- **Header block:**
  - Business name (top, all-caps, larger weight)
  - Address line / store number (small)
  - Date + time + transaction ID (small, monospace)
- **Item rows:**
  - Item description on the left
  - Quantity / amount on the right
  - Aligned via tabular monospace
  - 6–12 items typically
- **Dotted dividers** between sections (`. . . . . . . . . . . . . . .`)
- **Subtotal / Tax / Total block** with the **TOTAL bolded and emphasized**
- **Optional discount line** showing the savings as a negative value
- **Footer:**
  - Thank-you line
  - Optional return policy in small print
  - Optional barcode SVG at the bottom
  - Cashier signature or printed name
- **Optional curl / fold** on the bottom edge for "this is a photographed receipt" effect

## Design principles

### Principle #1: The total is the punch

The TOTAL line is the punch. Whether it's `$48,000/YR — COST OF MISSED LEADS` or `−$11,200 SAVED VS THEIR PRICE`, the total is what the eye lands on. Bold, slightly larger, often boxed.

### Principle #2: Itemize specifically

Vague items kill the format. *"Marketing services — $11,000"* is a stat. *"Generic Google Ads mgmt - 1 mo .... $4,200 / Lead-list rental - 1k recs ... $1,800 / Landing-page revisions x3 ........ $2,400 / Intake handoff (none) .......... $0"* is an itemization the buyer recognizes.

### Principle #3: Monospace everywhere

Receipts are monospace. Period. Use `Courier Prime`, `IBM Plex Mono`, `JetBrains Mono`. No sans-serif. No serif. The format only works because every column aligns.

### Principle #4: Show the math, not just the total

`Subtotal / Tax / Total` rows let the viewer follow the arithmetic. Especially powerful when one row is a *discount* — `Discount (system applied) ... -$8,400` — because subtracting in front of the viewer is more persuasive than declaring the result.

### Principle #5: Thermal-paper texture sells the realism

Slight noise/grain, faint ink-bleed on edges, a touch of paper curl. Don't go too far — a Halloween-filter receipt reads as design.

## Layout rules

- **Receipt** centered on canvas, ~640–760px wide (narrower than other formats — receipts are tall), content-driven height
- **Padding inside the receipt:** ~24–36px
- **Background outside the receipt:** dark or wood-tone neutral so the paper pops
- **Optional perforated edge** on top and bottom (zig-zag SVG)
- **Optional bottom CTA pill** in canvas margin below the receipt

## Writing the receipt

- **Business name:** ICP-coded plausibly — `PI FIRM GROWTH CO.`, `LEAD INTAKE SUPPLY`
- **Item rows (6–12):** specific to this ICP's spend. Match `CAMPAIGN.md` language verbatim. Each row ≤ 30 chars on the left, dollar amount on the right.
- **Subtotal / Tax / Total:** the math leads to a punch
- **Footer:** thank-you line + CTA pointer

## Style Catalog

3 starter layouts. Each is a standalone HTML template in [templates/](templates/). Copy, edit business/items/totals, render.

| # | Name | Template | Layout | Key Element |
|---|---|---|---|---|
| 1 | Cost of Overspend | [style-01-cost-of-overspend.html](templates/style-01-cost-of-overspend.html) | Single thermal receipt · perforated edges · barcode · OVERSPEND stamp | Itemized monthly spend totals to a recurring punch |
| 2 | Savings Unlocked | [style-02-savings-unlocked.html](templates/style-02-savings-unlocked.html) | Tilted receipt · prior-stack vs new system · green discount · REFUND UNLOCKED stamp | Subtractive math — discount line does the arguing |
| 3 | Cost-per-Lead Receipt Pair | [style-03-cost-per-lead-receipt.html](templates/style-03-cost-per-lead-receipt.html) | Two side-by-side receipts (theirs vs yours) · VS medallion · post-frame pill | Same month, same firm — different CPL footers |

**These are not the only styles.** Invent new layouts. Combine elements. The catalog grows as new concepts prove out in testing.

## QC checklist

- [ ] **Receipt authenticity:** looks like a printed thermal receipt
- [ ] **Monospace everywhere:** body, header, items, total — no font drift
- [ ] **Thermal-paper aesthetic:** cream/off-white, slight grain
- [ ] **Header complete:** business name, date/time, transaction ID
- [ ] **Items are specific:** ICP-recognized line items, not vague
- [ ] **Math shown:** Subtotal, Tax/Discount, Total — not just a final number
- [ ] **TOTAL bolded:** the punch lands
- [ ] **Dotted dividers** between sections
- [ ] **ICP present:** business name AND at least one other placement
- [ ] **CTA feels native:** footer line, stamp, or post-frame pill — never overlay button
- [ ] **Thumbnail test:** at 400px, can you read the TOTAL AND identify the ICP?
- [ ] **No branding:** no real business names, no real personal names
- [ ] **CSS rendering:** no overflow, broken monospace alignment, missing dividers
- [ ] **Scroll-stop:** does the receipt-on-canvas read as a photographed receipt at 2am?

If any check fails → fix the HTML and re-render.

## Workflow

1. **Read `campaigns/{slug}/ads/{ad-name}/COPY.md`** — business name, items, total, footer should be in there.
2. **Decide the angle.** Receipt of the buyer's current overspend? Receipt of savings the offer produces? Decide before itemizing.
3. **Itemize specifically.** ICP-vocab line items, ≤ 30 chars each, plausible dollar amounts.
4. **Build the math** — subtotal, discount/tax, total — that lands the punch.
5. **Write the footer line** — thank-you + CTA pointer.
6. **Create the ad folder if needed.**
7. **Compose the HTML** at `images/{ad-name}.html`. Thermal-paper aesthetic, monospace font (`@import` from Google Fonts), tabular alignment, perforated edge SVG.
8. **Render the PNG:**
   ```bash
   node skills/shared/render-static.js \
     campaigns/{slug}/ads/{ad-name}/images/{ad-name}.html \
     campaigns/{slug}/ads/{ad-name}/images/
   ```
9. **Seed COPY** if needed.
10. **QC** against the checklist.

## Output

```
campaigns/{campaign-slug}/ads/{ad-name}/
  ├── COPY.md
  ├── copy.json
  └── images/
      ├── {ad-name}.html
      └── {ad-name}.png
```
