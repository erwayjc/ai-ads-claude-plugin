---
name: native-stripe-dashboard-designer
description: Builds ads that look like a real SaaS revenue dashboard — sidebar nav, hero metric, MRR/gross-volume chart, comparison delta, annotated "before/after" guide line, optional metric tiles and payout card. The chart IS the proof; the format reads as a screenshot a founder DM'd you. No templates; every dashboard composed from scratch.
---

# Native Stripe Dashboard Designer

**Production method:** HTML/CSS + Playwright → see [../shared/HTML-RENDER-REFERENCE.md](../shared/HTML-RENDER-REFERENCE.md)
**Default output size:** 1080×1080 (square)

You build ads that look like a screenshot of someone's SaaS revenue dashboard — Stripe-style chrome, MRR trending up and to the right, an annotation marking the moment the system was switched on. For SaaS founders, agency owners, and indie operators, this is the most-screenshotted format on the internet. The scroll-stop mechanism is **proof posture**: the brain registers "real revenue graph" before it registers "ad."

This is one of the `native-format-*` lanes in this repo:

| Lane | Beat | Skill |
|---|---|---|
| Pure typography | bold-text-designer |
| Name the pain → resolve | problem-solution-designer |
| Diagram IS the ad | system-visual-designer |
| Peers talking | chat-style-designer |
| Looks like a real tweet/X post | native-tweet-designer |
| **Looks like a real revenue dashboard** | **native-stripe-dashboard-designer** (this skill) |

Reach here when the beat is "look at what the system did to the line." MRR going up and to the right is one of the only images a SaaS or agency buyer will stop scrolling for. The annotation — a vertical guide marking the day the system was switched on — does the rhetorical work.

## The cardinal rule

**The dashboard must look real, and the chart must tell a story.** Stripe-grade chrome, plausible niche-scale numbers, a curve that visibly bends at a labeled moment. If the chart is flat or the numbers feel made-up, the proof posture collapses and the format becomes another billboard.

No templates. Every dashboard is composed from scratch.

## ICP callout — mandatory

Same rule as every lane in this repo: the ICP must be on the canvas. In native-dashboard ads the ICP lives *inside* the UI — not pinned outside it.

The ICP appears in **at least two of these placements**:

- **Account / workspace name** (top-right next to the avatar) — `Marcus · PI Firm PM`, `Sarah Agency Co.`, `BuilderOS · Indie SaaS`
- **Annotation label on the chart** — `Switched to PI Firm Growth · Mar 12`, `Onboarded with Intake Systems · Apr 04`
- **Hero metric label** — `MRR (PI Firm Intake)`, `Net revenue · Agency clients`
- **Sidebar workspace header** above the nav — small label like `Personal Injury Firm · Live`
- **Payout card recipient** — `Payout to: Sarah's Agency`

The account name OR annotation is the floor. Never publish a native-dashboard ad without one of those two carrying the ICP.

## CTA — must feel native to the format

A dashboard's CTA is not a generic button slapped on top. It's one of:

- **A Stripe-style notification toast** overlaid top-right of the dashboard — small banner with a brand-accent left border, a one-line message, and a `View →` link. Reads as a real in-product nudge.
- **The chart annotation itself** doubles as the CTA — `Switched to PI Firm Growth · Mar 12 →` — the arrow pointing the viewer at the next step.
- **A post-frame accent pill** below the dashboard card, brand-color, ≤ 4 words ending in `→`, pulled verbatim from `COPY.md`.

Never use a generic floating overlay button. The CTA must look like it could exist inside the product UI, or sit cleanly in the canvas margin as a pill. CTA copy comes from `COPY.md` — see [../shared/HTML-RENDER-REFERENCE.md § CTA is required](../shared/HTML-RENDER-REFERENCE.md).

## UI elements — required

A native dashboard ad must include all of these, positioned correctly:

- **Sidebar (left, ~200–240px wide)**
  - Workspace header at the top — small mark (initials block) + workspace name
  - Nav items, top to bottom: `Home`, `Payments`, `Customers`, `Reports`, `Connect`, `Apps`
  - Each item is icon (inline SVG) + label; one item highlighted (rounded background, accent text) — usually `Home` or `Reports`
  - Subtle vertical divider separating sidebar from main content
- **Top bar (across main content area)**
  - Search field (rounded, muted background, magnifying-glass icon, placeholder text like `Search payments, customers…`)
  - Test/Live mode toggle (pill segmented control, `Live` selected, small green dot)
  - Account avatar circle (top-right) with workspace/account name beside it
- **Hero metric block (top of main content)**
  - **Label:** small, muted, uppercase tracking — `GROSS VOLUME` / `MRR` / `NET REVENUE` / `NEW CUSTOMERS`
  - **Number:** huge, bold, ~120–160px — currency-formatted with commas (`$47,328` not `$47328`)
  - **Delta pill:** colored pill next to or under the number — green `↑ +47% vs previous period` for gains, red `↓ −31%` if showing pain
  - **Time-period selector:** small dropdown — `Last 30 days ▾` / `Year to date ▾` / `Last 90 days ▾`
- **Chart area (main visual)**
  - Line or area chart drawn in inline SVG — smooth curve, accent-colored stroke (~#635bff or campaign brand), light gradient fill below the line
  - X-axis: date labels (`Jan`, `Feb`, `Mar`, `Apr`, …) — muted, light type
  - Y-axis: currency labels (`$0`, `$5k`, `$10k`, `$25k`, …) — right-aligned, muted
  - Plot dots on the line at intervals; one plot dot annotated
  - **Annotation:** vertical dashed guide line through the chart at the inflection point, with a small label callout — `Switched to PI Firm Growth · Mar 12` — this is the rhetorical punch
  - Optional: a second, dashed comparison line showing `previous period` or `without system` flat / declining underneath
- **Optional metrics tile row** below the chart — 3–4 smaller cards: `Active subscriptions · 142 ↑`, `Churn rate · 1.8% ↓`, `ARPU · $329 ↑`, `Trials → paid · 38% ↑`
- **Optional payout schedule card** — Stripe-style — `Next payout · $12,480.00 · Mar 15` with a `View schedule →` link

## Design principles

### Principle #1: The annotation IS the headline

The vertical dashed guide + label is doing more than half the work. It must name the ICP-coded moment the system was switched on, dated plausibly. Without the annotation, the chart is just a graph. With it, it's a before/after story.

### Principle #2: Niche-scale numbers, not unicorn-scale

A SaaS agency hitting $47K MRR is believable and aspirational. $4.7M MRR reads as cherry-picked or stolen from a screenshot generator. Pick numbers a buyer in *this* niche could plausibly reach in 6–18 months. Aspirational, not absurd.

### Principle #3: The curve must bend at the annotation

A flat line through the inflection point kills the story. The curve should be visibly different before vs after the dashed guide — slower growth or decline before, accelerating growth after. The shape of the line, read at a glance, must say "something changed here."

### Principle #4: Stripe aesthetic, not corporate dashboard

White card on light blue-gray (#f6f9fc) background, Inter font, generous whitespace, subtle shadows, ~12–16px border radii, purple/blue accent (#635bff) by default — or campaign brand color. Avoid Excel/BI vibes (heavy gridlines, primary-color bars, dense legends). This is consumer-grade SaaS, not enterprise BI.

### Principle #5: Pixel-level dashboard authenticity

Sidebar icon weight, search bar height, avatar circle diameter, pill radii, axis label size — all need to match real-product polish. Tiny details (a small green dot next to `Live`, currency in muted gray, the comma in `$47,328`) sell the realism. Compare against a real Stripe screenshot before shipping.

## Layout rules

- **Outer canvas:** 1080×1080, soft Stripe neutral background (#f6f9fc) — sells the "screenshot" feel
- **Dashboard card** centered on canvas, ~1000–1040px wide, content-driven height (typically ~860–940px), 12–16px border radius, soft shadow
- **Sidebar width** ~200–240px; main content takes the rest
- **Padding inside main content** ~32–40px
- **Hero number** anchors the upper-left of main content; chart fills the area below; metric tiles and payout card stack underneath if used
- **Optional bottom CTA pill** below the card, accent-colored, sits in the canvas margin
- **Optional notification toast** overlaid top-right of the dashboard card, ~280–340px wide, slight shadow

## Writing the dashboard

- **Workspace / account name:** ICP-coded — `Marcus · PI Firm PM`, `Sarah Agency Co.`, `BuilderOS · Indie SaaS`
- **Hero metric label:** the metric your ICP cares about — MRR for SaaS, Gross volume for agencies, Net revenue for ecommerce, New customers for service businesses
- **Hero number:** the punch — niche-plausible, currency-formatted
- **Delta:** the gain vs prior period, in human terms — `↑ +47% vs previous period`
- **Annotation label:** ICP-coded inflection moment, dated — `Switched to PI Firm Growth · Mar 12`
- **Chart shape:** flat/slow before the annotation, accelerating after — visible at thumbnail
- **Metric tiles (optional, 3–4):** the supporting story — subscriptions up, churn down, ARPU up, trial→paid up
- **Payout card (optional):** the money the buyer would be receiving — `Next payout · $12,480 · Mar 15`
- **Notification toast (optional, CTA):** `New best month · View report →` or similar in-product nudge

## Style Catalog

4 starter layouts. Each is a standalone HTML template in [templates/](templates/). Copy, edit workspace + hero label + chart curve + annotation, render.

| # | Name | Template | Layout | Key Element |
|---|---|---|---|---|
| 1 | MRR Inflection | [style-01-mrr-inflection.html](templates/style-01-mrr-inflection.html) | Sidebar + hero MRR + curve bending at annotation + metric tiles + toast | Classic "up and to the right after we switched on" reveal |
| 2 | Gross Volume + Payout | [style-02-gross-volume-payout.html](templates/style-02-gross-volume-payout.html) | Hero + dark payout card + recent payments table | Money-arriving proof — next payout in a real dollar amount |
| 3 | Customer Detail | [style-03-customer-detail.html](templates/style-03-customer-detail.html) | Customer header + LTV tiles + per-customer MRR curve + events log | A single named customer as the case-study proof |
| 4 | Real Stripe Home | [style-04-real-stripe-home.html](templates/style-04-real-stripe-home.html) | Full Stripe Home: sectioned sidebar (Shortcuts / Products) + Today hero + dotted prior-period overlay + Recommendation card + balance/payouts row + Your overview metric grid | Closest 1:1 to a current live Stripe dashboard screenshot |

**These are not the only styles.** Invent new layouts. Combine elements. The catalog grows as new concepts prove out in testing.

### Real-Stripe chrome cheatsheet (May 2026)

Pulled from a current live Stripe dashboard. Use these specifics for maximum native-look fidelity — `style-04` is the canonical reference.

- **Sidebar is sectioned.** Top group is unlabeled (Home / Balances / Transactions / Customers / Product catalog). Then a small uppercase-muted `Shortcuts` label heads Invoices / Radar / Subscriptions / Disputes. Then a `Products` label heads Connect / Payments / Billing / Reporting / Apps / More — each with a right-side `›` chevron because they expand.
- **Active state is purple text only.** No filled green/pink pill — the active item just turns to `#635bff` and goes semibold. Icon recolors with it.
- **Workspace header has a `▾` caret** — it's a workspace switcher dropdown. The mark is a tiny dark square (~22px), not a brand gradient.
- **Search bar is center-aligned** across the top, with general-utility icons (apps grid, help, bell-with-dot, settings) and a purple `+` add button to the right.
- **Hero is a paired metric, not a single number.** "Today" headline + a current-period number AND a prior-period comparison number side-by-side, each with its own label and `▾` selector. The chart underneath shows the same comparison — solid current line plus a dotted prior-period line.
- **Right rail Recommendation card** — soft purple gradient, a small `Recommendation` tag, headline, body, purple `Try free for X days ›`, and a dismiss `✕` in the corner.
- **Balance / Payouts row** sits under the chart: two large numbers with `View` links on the right, plus an `Expected May 20` sub-line under Payouts.
- **Notice strip** — `3 payments have not been reviewed` with a `1 new` green pill and a dismiss `✕`.
- **Your overview** has its own large headline, `+ Add` and `✎ Edit` buttons on the right, and a filter row with **filter pills** (`Date range | Last 7 days ▾`, `Daily ▾`, `⊗ Compare | Previous period ▾`). The pills bake in label + value with a thin vertical divider between them.
- **Metric grid** under that — at minimum three cards. First card (`Payments`) uses a full-width purple "Succeeded" bar + a single dollar amount. Other cards (`Gross volume`, `Net volume`) use a big number + `$X previous period` sub-line + a tiny purple sparkline chart and have a small icon row (`↗` open, `⌕` search) in the top right.
- **Footer is part of the dashboard card** — `Developers` pill bottom-left (dark mark + label), plus a small utility-icon row bottom-right.
- **Accent color is `#635bff`** for everything interactive (links, active nav, add button, charts, succeeded bar). Don't substitute brand greens or pinks in this layout — Stripe purple is the realism cue.

## QC checklist

- [ ] **Dashboard authenticity:** at a glance, does it read as a real SaaS dashboard screenshot?
- [ ] **Sidebar present:** Home / Payments / Customers / Reports / Connect / Apps with icons; one highlighted
- [ ] **Top bar present:** search, Live/Test toggle, account avatar + name
- [ ] **Hero metric:** label + huge number + delta pill + time-period selector
- [ ] **Chart drawn in SVG:** smooth line, light fill below, axis labels, plot dots
- [ ] **Annotation:** vertical dashed guide + ICP-coded dated label at the inflection point
- [ ] **Curve bends:** visibly slower/flat before the annotation, accelerating after
- [ ] **Plausible numbers:** niche-scale, currency-formatted with commas, no $4.7M for a 1-person agency
- [ ] **ICP present:** in account name OR annotation AND at least one other placement
- [ ] **CTA feels native:** notification toast / annotation arrow / accent pill — never a generic overlay button
- [ ] **Stripe aesthetic:** Inter, soft #f6f9fc background, subtle shadows, purple/blue accent (or brand)
- [ ] **No real Stripe logo/wordmark:** use a generic dashboard mark or initials-based vendor block
- [ ] **Thumbnail test:** at 400px, can you read the hero number AND see the annotation AND identify the ICP?
- [ ] **No branding leakage:** no real personal names, no real company names, no actual Stripe mark
- [ ] **CSS rendering:** no SVG clipping, no overflow, axis labels not cut off, sidebar icons render
- [ ] **Scroll-stop:** would the shape of this image read as a screenshot a founder DM'd you at 2am?

If any check fails → fix the HTML and re-render.

## Workflow

**Hierarchy: Ad → Copy → Images.**

1. **Read `campaigns/{slug}/ads/{ad-name}/COPY.md` first** — workspace name, hero label, hero number, delta, annotation label, optional metric tiles and toast copy should be in there.
2. **Cast the dashboard.** Pick the workspace/account name that names the ICP. Pick the hero metric label (MRR / Gross volume / Net revenue / New customers). Decide on annotation date and ICP-coded inflection label. Decide on optional metric tiles, payout card, and notification toast.
3. **Sketch the curve.** Decide where the inflection point sits on the X-axis (typically ~30–50% across) and what the before/after shape looks like. The bend must be visible at thumbnail.
4. **Create the ad folder if it doesn't exist:** `campaigns/{slug}/ads/{ad-name}/images/`.
5. **Compose the HTML** at `campaigns/{slug}/ads/{ad-name}/images/{ad-name}.html`. Build the dashboard faithfully — sidebar with inline-SVG icons, top bar with search/toggle/avatar, hero metric block, inline-SVG chart with annotation guide, optional tiles/payout/toast. No network fetches at render time (Google Fonts via `@import` is the only allowed network resource).
6. **Render the PNG:**
   ```bash
   node skills/shared/render-static.js \
     campaigns/{slug}/ads/{ad-name}/images/{ad-name}.html \
     campaigns/{slug}/ads/{ad-name}/images/
   ```
7. **Seed COPY** if it doesn't already exist: `node skills/shared/tools/backfill-copy.js` (or use the editor). Open `COPY.md` and clean up any auto-extraction quirks. Just the verbatim copy — no interpretive sections.
8. **QC** against the checklist above.

## Output

```
campaigns/{campaign-slug}/ads/{ad-name}/
  ├── COPY.md
  ├── copy.json
  └── images/
      ├── {ad-name}.html
      └── {ad-name}.png
```
