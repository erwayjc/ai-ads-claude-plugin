---
name: native-invoice-designer
description: Builds ads that look like a Stripe-style or B2B invoice — logo area, billed-to block, line items, amounts, totals, due date, payment status. The polished format implies "this is real, due, and serious." No templates; every invoice composed from scratch.
---

# Native Invoice Designer

**Production method:** HTML/CSS + Playwright → see [../shared/HTML-RENDER-REFERENCE.md](../shared/HTML-RENDER-REFERENCE.md)
**Default output size:** 1080×1080 (square)

You build ads that look like a polished B2B invoice — Stripe, QuickBooks, or modern SaaS billing aesthetic. The format reads as *due and serious* — a buyer-recognized document type they cannot dismiss as marketing.

This is one of the `native-format-*` lanes. See [native-tweet-designer](../native-tweet-designer/SKILL.md) for lane overview. For thermal-paper printed receipts (monospace, dotted dividers, more visceral), use [native-receipt-designer](../native-receipt-designer/SKILL.md) instead.

## The cardinal rule

**The invoice must look real and *due*.** Polished, structured, with a clear amount, due date, and payment status. The viewer reads it as a bill they need to handle — until they realize the message inside it is about them, not from them.

No templates. Every invoice is composed from scratch.

## ICP callout — mandatory

The ICP appears inside the invoice. **At least two of these placements:**

- **"Billed to" / "Bill to" block** — names the ICP — e.g. `Bill to: Personal Injury Firm`
- **Line item descriptions** — ICP-vocabulary services
- **Invoice memo / description field** — quotes ICP language
- **Vendor name in the header** — ICP-coded — e.g. `From: Performance Marketing Co.`

## CTA — must feel native to the format

The CTA is one of:

- **The "Pay invoice" or "Resolve" CTA button** styled as Stripe's native pay button (rounded, brand-blue or accent) — clicks read as "I'll handle this"
- **A "Due date" / "Past due" indicator** that doubles as the urgency — paired with a `→ Resolve` link
- A **post-frame accent pill** below the invoice card, brand color, ≤ 4 words ending in `→`, pulled from `COPY.md`

The Stripe-style "Pay invoice" button can live INSIDE the frame here (unlike most other native formats) — because a real invoice has a pay button. That's the format's CTA convention.

## UI elements — required

- **Invoice card chrome:** white card with soft shadow, ~12–16px border radius
- **Header block:**
  - Vendor logo placeholder (initials in a colored square, or a minimal mark — never a real brand)
  - Vendor name + address (top-left)
  - Invoice number, issue date, due date (top-right)
- **Bill-to block:** customer name + address (left), payment terms (right)
- **Line items table:**
  - Columns: `Description / Qty / Unit Price / Amount`
  - 3–6 line items
  - ICP-vocabulary services
  - Right-aligned amounts
- **Totals block (bottom-right):**
  - Subtotal
  - Tax / Discount
  - **Total** in larger bold weight
  - Currency code (USD, EUR, etc.)
- **Status badge:** `PAID` (green), `DUE` (yellow), `OVERDUE` (red), or `DRAFT` (gray) — top-right corner of the card
- **Payment CTA button:** rounded button at the bottom — `Pay $X,XXX` or `Resolve →`
- **Footer:** payment terms line, vendor contact, optional "Powered by Stripe" mark (use a generic version — don't fake Stripe's actual mark)

## Design principles

### Principle #1: The status badge sets the urgency

`PAID` reads as past — "look at what was billed." `OVERDUE` reads as present pain. Pick the badge to match the emotional beat. For "cost of pain" angles, OVERDUE is your friend. For "savings unlocked" angles, PAID with a negative total works.

### Principle #2: Itemize like a real B2B invoice

Real invoices have specific descriptions, quantities, unit prices, line totals. *"Ads Manager monthly retainer · 1 mo · $4,500.00 / Creative production · 8 ads · $200.00 ea / Account-strategy call · 2 hrs · $250.00/hr"* — buyers recognize this format from their own Stripe inbox.

### Principle #3: The totals block does the math

Subtotal, tax/discount, total. If you're showing savings, the discount line is where the gain lives — bold it.

### Principle #4: Modern SaaS aesthetic

Clean sans-serif (Inter, SF Pro, system-ui), generous whitespace, subtle shadows. This is the format that *looks expensive*. Don't make it folksy.

### Principle #5: Vendor logo as an initials block

Use a colored square with white initials (2 chars max) as the vendor logo. Never fake a real brand. ICP-coded initials reinforce the message — `PG` for "Performance Growth", `IS` for "Intake Systems".

## Layout rules

- **Invoice card** centered on canvas, ~960px wide, content-driven height
- **Padding inside card:** ~40–48px
- **Background outside the card:** soft Stripe-ish neutral (#f6f9fc) or brand color
- **Optional bottom CTA pill** in canvas margin below the card — used in addition to or instead of an in-card pay button

## Writing the invoice

- **Vendor name:** ICP-coded plausibly — `Performance Growth Co.`, `Intake Systems Inc.`
- **Bill-to:** names the ICP
- **Line items (3–6):** specific B2B services, ICP vocabulary
- **Totals:** real math, ends on a punch
- **Status:** PAID / DUE / OVERDUE / DRAFT — chosen for the emotional beat

## Style Catalog

3 starter layouts. Each is a standalone HTML template in [templates/](templates/). Copy, edit fields/totals/status, render.

| # | Name | Template | Layout | Key Element |
|---|---|---|---|---|
| 1 | Overdue · Cost of Pain | [style-01-overdue-cost-of-pain.html](templates/style-01-overdue-cost-of-pain.html) | Stripe-style card · red OVERDUE pill · 5 line items · totals block | Past-due badge weaponizes the recurring spend |
| 2 | Paid · Savings Unlocked | [style-02-paid-savings-unlocked.html](templates/style-02-paid-savings-unlocked.html) | Dark canvas · PAID stamp -12° · green discount line · negative subtotal | Discount row shows the gain subtractively |
| 3 | Draft · 12-Month Projection | [style-03-draft-cost-projection.html](templates/style-03-draft-cost-projection.html) | Dashed-border DRAFT card · recurring tags · annual callout strip | Status-quo cost projected to a single annual total |

**These are not the only styles.** Invent new layouts. Combine elements. The catalog grows as new concepts prove out in testing.

## QC checklist

- [ ] **Invoice authenticity:** looks like a Stripe / QuickBooks invoice
- [ ] **Card chrome:** white card, soft shadow, generous padding
- [ ] **Header complete:** vendor block, invoice number, issue/due dates
- [ ] **Bill-to block:** customer + payment terms
- [ ] **Line items table:** description / qty / unit / amount, right-aligned amounts
- [ ] **Items are specific:** B2B-recognized services, not vague
- [ ] **Totals block:** subtotal, tax/discount, total — total bolded
- [ ] **Status badge:** PAID/DUE/OVERDUE — matches the emotional beat
- [ ] **Pay button or pill:** rounded, brand-colored, ≤ 4 words ending in `→`
- [ ] **ICP present:** bill-to AND at least one other placement
- [ ] **Modern aesthetic:** sans-serif, generous whitespace, subtle shadows
- [ ] **Vendor "logo":** initials block, NOT a real brand
- [ ] **Thumbnail test:** at 400px, can you read the TOTAL + status badge AND identify the ICP?
- [ ] **No branding:** no real Stripe mark, no real company names, no real personal names
- [ ] **CSS rendering:** no overflow, broken table, missing pay button
- [ ] **Scroll-stop:** does the invoice-on-canvas read as a real billing email screenshot at 2am?

If any check fails → fix the HTML and re-render.

## Workflow

1. **Read `campaigns/{slug}/ads/{ad-name}/COPY.md`** — vendor, billed-to, line items, totals, status should be in there.
2. **Decide the status badge.** PAID for retrospective; OVERDUE for pain; DRAFT for what's about to land.
3. **Itemize like a B2B invoice.** ICP vocabulary, specific quantities and unit prices.
4. **Build the math** to the total that lands the message.
5. **Write the pay-button label** — `Pay $X,XXX` or `Resolve →`.
6. **Create the ad folder if needed.**
7. **Compose the HTML** at `images/{ad-name}.html`. Stripe-aesthetic card, sans-serif font, status badge, totals block, pay button.
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
