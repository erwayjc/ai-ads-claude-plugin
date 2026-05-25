---
name: bold-text-designer
description: Creates clean text-on-color billboard-style image ads using HTML/CSS + Playwright. Bold typography, solid backgrounds, high contrast. 40+ standalone style templates included.
---

# Bold Text Designer

**Production method:** HTML/CSS + Playwright → see [../../shared/HTML-RENDER-REFERENCE.md](../../shared/HTML-RENDER-REFERENCE.md)
**Default output size:** 1080×1080 (square)

You create the classic performance marketing ad format: **bold text on high-contrast backgrounds.** These ads stop the scroll through typographic impact — large text, vivid color contrast, and a single clear message that reads in 0.5 seconds.

This is one of four design lanes in this workspace:

| Lane | Beat | Skill |
|---|---|---|
| Pure typography — one hook, one stat, one claim | scroll-stop through type | **bold-text-designer** (this skill) |
| Show the mechanism — the diagram IS the ad | comprehension through structure | [system-visual-designer](../system-visual-designer/SKILL.md) |
| Dialogue carries the message | social proof through eavesdropping | [chat-style-designer](../chat-style-designer/SKILL.md) |
| Full-ad image generation | photographic realism + designed typography | [gemini-image-designer](../../gemini-image-designer/SKILL.md) |

Every ad in a batch should use a different background color, layout style, and scroll-stop mechanism.

## Color Theory

### Rule #1: Contrast Is King

Contrast between text and background, between your ad and the feed, and between each creative in a test batch is the most important variable.

### High-Contrast Pairings

Pair a DARK background with BRIGHT/LIGHT text, or vice versa. **No default palette.** Every ad in a batch must use a different color scheme.

### Accent Color Purpose

The accent color has one job: **draw the eye to the most important element.** Use it on:
- The key number ($30,000, 88, 50+)
- The differentiating word (Free, Minutes, Automated)
- A CTA pill or banner
- A visual accent (underline, stripe, bar)

**Never** use the accent on body text — it dilutes the focal point.

## Style Catalog

20 proven layouts. Each is a standalone HTML template in [templates/](templates/). Copy, edit headlines/colors, render.

| # | Name | Template | Layout | Key Element |
|---|---|---|---|---|
| 1 | Bold Question | [style-01-bold-question.html](templates/style-01-bold-question.html) | Centered text, accent underline | Question fills width |
| 2 | Giant Stat | [style-02-giant-stat.html](templates/style-02-giant-stat.html) | Massive number, small label | Number IS the scroll-stop |
| 3 | Two-Line Contrast | [style-03-two-line-contrast.html](templates/style-03-two-line-contrast.html) | Before/After with divider | Line-to-line contrast |
| 4 | Dark Navy Gradient | [style-04-dark-navy-gradient.html](templates/style-04-dark-navy-gradient.html) | Stacked credentials | Authority through listing |
| 5 | Pink Highlight Box | [style-05-pink-highlight-box.html](templates/style-05-pink-highlight-box.html) | Key phrase in accent pill | Highlighted word draws eye |
| 6 | Split Screen | [style-06-split-screen.html](templates/style-06-split-screen.html) | Left/right problem vs solution | Accent divider |
| 7 | Checklist Card | [style-07-checklist-card.html](templates/style-07-checklist-card.html) | Checkmarks in accent | Progressive reveal |
| 8 | Quote Block | [style-08-quote-block.html](templates/style-08-quote-block.html) | Large quote mark + claim | Quote = credibility |
| 9 | Bordered Card | [style-09-bordered-card.html](templates/style-09-bordered-card.html) | Thin accent border | Clean, contained |
| 10 | Stacked Stats | [style-10-stacked-stats.html](templates/style-10-stacked-stats.html) | Horizontal bar chart feel | Data visualization |
| 11 | Muted Purple Gradient | [style-11-muted-purple-gradient.html](templates/style-11-muted-purple-gradient.html) | Single offer message | Fresh color feel |
| 12 | White on Dark | [style-12-white-on-dark.html](templates/style-12-white-on-dark.html) | Magazine editorial | Premium weight |
| 13 | Countdown/Scarcity | [style-13-countdown-scarcity.html](templates/style-13-countdown-scarcity.html) | Massive number, urgency copy | Urgency through size |
| 14 | Dark Teal Accent | [style-14-dark-teal-accent.html](templates/style-14-dark-teal-accent.html) | Minimal text, max contrast | Unexpected color |
| 15 | Pink-to-Black Gradient | [style-15-pink-to-black-gradient.html](templates/style-15-pink-to-black-gradient.html) | Full-bleed gradient | Visual depth |
| 16 | Comparison Table | [style-16-comparison-table.html](templates/style-16-comparison-table.html) | Two-column compare | Structured info |
| 17 | Bold ICP Callout | [style-17-bold-icp-callout.html](templates/style-17-bold-icp-callout.html) | Top accent bar + centered hook | Instant avatar ID |
| 18 | Testimonial Style | [style-18-testimonial-style.html](templates/style-18-testimonial-style.html) | Anonymous review + stars | Social proof format |
| 19 | Slate Gray Q&A | [style-19-slate-gray-qa.html](templates/style-19-slate-gray-qa.html) | Q & A two-tone text | Engagement driver |
| 20 | Diagonal Stripe | [style-20-diagonal-stripe.html](templates/style-20-diagonal-stripe.html) | Geometric accent stripe | Pattern interrupt |
| 21 | Honest Us vs Them | [style-21-honest-us-vs-them.html](templates/style-21-honest-us-vs-them.html) | Threat headline + 5-row comparison + solution-reveal pill | Asymmetric bridge — credit competitor, own current state, reveal the offer |
| 22 | Flywheel Diagram | [style-22-flywheel-diagram.html](templates/style-22-flywheel-diagram.html) | 5-node ring + outcome in the core | System-as-solution — the loop IS the product |
| 23 | Stack of Bricks | [style-23-stack-of-bricks.html](templates/style-23-stack-of-bricks.html) | Vertical brick stack: outcome on top, foundation on bottom | System-as-foundation — components ladder into the outcome |
| 24 | Anti-Patchwork | [style-24-anti-patchwork.html](templates/style-24-anti-patchwork.html) | Mismatched stitched panels vs. one solid cloth | Fragmentation → wholeness; pain point is the seams |
| 25 | Integrated Dashboard | [style-25-integrated-dashboard.html](templates/style-25-integrated-dashboard.html) | One pane of glass: hero outcome + 4 live channel tiles | One source of truth = proof the system is integrated |
| 26 | Org Chart Collapse | [style-26-org-chart-collapse.html](templates/style-26-org-chart-collapse.html) | Tangled vendor chart vs. single-box system → YOU | Complexity-to-simplicity; relief as the offer |
| 27 | Price Slash | [style-27-price-slash.html](templates/style-27-price-slash.html) | Struck-through anchor price + new price + savings stamp | Visceral arithmetic — the price drop IS the ad |
| 28 | Risk Reversal Stamp | [style-28-risk-reversal-stamp.html](templates/style-28-risk-reversal-stamp.html) | Wax-seal SVG with guarantee phrase rotated -8° | Objection killer — the seal IS the proof |
| 29 | Open Slots Counter | [style-29-open-slots-counter.html](templates/style-29-open-slots-counter.html) | 10-slot grid: 7 filled solid + 3 open dashed | Honest scarcity made visual |
| 30 | Before → After Receipt | [style-30-before-after-receipt.html](templates/style-30-before-after-receipt.html) | Two stacked stat cards — Month 1 vs Month 3 | Transformation proof through paired snapshots |
| 31 | Disqualifier Filter | [style-31-disqualifier-filter.html](templates/style-31-disqualifier-filter.html) | 3 ✗ rows (not for you) + 1 ✓ reveal (for you) | Premium-by-exclusion — qualifying as a feature |
| 32 | Torn Page | [style-32-torn-page.html](templates/style-32-torn-page.html) | Serif memo on paper, jagged tear, dark solution pill | Problem→solution transition felt, not narrated |
| 33 | Diagnosis → Prescription | [style-33-diagnosis-prescription.html](templates/style-33-diagnosis-prescription.html) | Medical chart format: Dx pill + Rx pill + signature | Clinical authority — credible, dry, not salesy |
| 34 | Crossed-Out Headline | [style-34-crossed-out-headline.html](templates/style-34-crossed-out-headline.html) | Strikethrough on broken phrase + corrected pill below | The ad edits itself in front of the viewer |
| 35 | The Math Doesn't Work | [style-35-math-doesnt-work.html](templates/style-35-math-doesnt-work.html) | Monospace equation flip — bad math ≠ system math | Arithmetic is harder to argue with than adjectives |
| 36 | Symptom List → Root Cause | [style-36-symptom-list-root-cause.html](templates/style-36-symptom-list-root-cause.html) | 3 quoted symptoms + dark reveal pill | Three nods of recognition, one resolution |
| 37 | Tale of the Tape | [style-37-tale-of-the-tape.html](templates/style-37-tale-of-the-tape.html) | Boxing fight-card: opponents + 5 stat rows with ★ wins | Honest asymmetric matchup — both sides credibly win some |
| 38 | Two Receipts | [style-38-two-receipts.html](templates/style-38-two-receipts.html) | Side-by-side itemized invoices: theirs vs yours | Pricing transparency — line items as proof |
| 39 | Speed Lanes | [style-39-speed-lanes.html](templates/style-39-speed-lanes.html) | Two horizontal lanes with checkpoint pins; you finish earlier | Time-to-value — spatial gap is the proof |
| 40 | Decision Tree Forks | [style-40-decision-tree-forks.html](templates/style-40-decision-tree-forks.html) | Root question + 2 three-step branches ending in outcomes | Future projection — feel which path you'll be on |
| 41 | Trojan Horse | [style-41-trojan-horse.html](templates/style-41-trojan-horse.html) | Pitch-deck view above, hidden-costs dissection below | Fine-print exposé — devastating if true, lawsuit if not |
| 44 | Linear Roadmap | [style-44-linear-roadmap.html](templates/style-44-linear-roadmap.html) | 4-stop horizontal pipeline with filled accent rail | Timeline beat — momentum from Day 1 to Day 90 |
| 45 | Conversion Funnel | [style-45-conversion-funnel.html](templates/style-45-conversion-funnel.html) | 4 tapered tiers + drop-off rail with conversion rates | Conversion beat — system throughput as visible math |
| 46 | Input → Engine → Output | [style-46-input-engine-output.html](templates/style-46-input-engine-output.html) | 3 zones with arrows; accent engine in the middle | Black-box beat — buyer inputs, system outputs |
| 47 | Numbered Steps | [style-47-numbered-steps.html](templates/style-47-numbered-steps.html) | 4 method cards with oversized 01–04 numerals + time pill | Methodology beat — named playbook, not features |
| 48 | Week Grid (Gantt) | [style-48-week-grid-gantt.html](templates/style-48-week-grid-gantt.html) | 4-week × 4-stream gantt with overlapping bars + always-on row | Plan beat — parallel work, not waterfall |

**These are not the only styles.** Invent new layouts. Combine elements. The catalog grows as new concepts prove out in testing.

## Text Hierarchy

### Size Rules
- Hook/headline: fills ≥ 60% of image width
- Subtext: fills ≥ 40% of image width
- If in doubt, go bigger. No test has ever failed because text was too large.

### Billboard Test
Imagine the ad printed on a billboard 100 feet away. If you can't read it, it's too small.

### Alignment
All text CENTER ALIGNED. Non-negotiable for feed ads.

## QC Checklist

Run through this on every image before shipping:

- [ ] **Alignment:** all text center-aligned
- [ ] **Spelling:** every word correct (read letter by letter)
- [ ] **Text size:** readable at 400px thumbnail
- [ ] **Contrast:** text POPS against background
- [ ] **Accent precision:** accent color only on the focal element
- [ ] **No branding:** no logos, names, or brand marks
- [ ] **Visual diversity:** doesn't look like other ads in the batch
- [ ] **Scroll-stop:** would this actually stop your scroll at 2am?

If any check fails → fix before shipping.

## Workflow

**Hierarchy: Ad → Copy → Images.** The copy file is the ad's identity; the HTML and PNG are images downstream of it.

1. Choose a template from `templates/`.
2. Create the ad folder: `campaigns/{slug}/ads/{ad-name}/images/` (kebab-case, descriptive).
3. Copy the template into `images/{ad-name}.html`. Edit the visible text (headline, subtext, accent words) and the three color CSS variables at the top.
4. Render the PNG into the same `images/` folder:
   ```bash
   node skills/shared/render-static.js \
     campaigns/{slug}/ads/{ad-name}/images/{ad-name}.html \
     campaigns/{slug}/ads/{ad-name}/images/
   ```
5. Seed COPY: `node skills/shared/tools/backfill-copy.js` (or use the editor). Open `campaigns/{slug}/ads/{ad-name}/COPY.md` and clean up any auto-extraction quirks. The file is just the verbatim copy — don't add interpretive sections.
6. Visual QC against the checklist.

### Designing from COPY.md

When you're producing an image for an ad (HTML render today, AI-generated imagery later), the workflow is:

1. **Read `campaigns/{slug}/ads/{ad-name}/COPY.md`** — just the verbatim words.
2. **Use the principles in this SKILL** — color theory, hierarchy, the style catalog, scroll-stop mechanics — to decide angle, accent placement, layout, and image direction yourself.

COPY.md tells you *what the ad says*. This SKILL tells you *how to design from it*. Don't expect COPY.md to spell out angle or image direction — derive them from the copy using the design rules below. The image must be congruent with the copy — same claim, same audience, same tone. Never generate an image and write copy to match.

## Output

```
campaigns/{campaign-slug}/ads/{ad-name}/
  ├── COPY.md          ← canonical copy record (top-level — the ad's identity)
  ├── copy.json        ← same, machine-readable
  └── images/
      ├── {ad-name}.html   ← rendered-design HTML
      └── {ad-name}.png    ← rendered PNG
```
