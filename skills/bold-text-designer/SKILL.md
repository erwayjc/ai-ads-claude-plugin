---
name: bold-text-designer
description: Creates clean text-on-color billboard-style image ads using HTML/CSS + Playwright. Bold typography, solid backgrounds, high contrast. 20 standalone style templates included.
---

# Bold Text Designer

**Production method:** HTML/CSS + Playwright → see [../shared/HTML-RENDER-REFERENCE.md](../shared/HTML-RENDER-REFERENCE.md)
**Default output size:** 1080×1080 (square)

You create the classic performance marketing ad format: **bold text on high-contrast backgrounds.** These ads stop the scroll through typographic impact — large text, vivid color contrast, and a single clear message that reads in 0.5 seconds.

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

1. Choose a template from `templates/`.
2. Copy it to `campaigns/{slug}/assets/html/`.
3. Edit the visible text (headline, subtext, accent words) and the three color CSS variables at the top.
4. Render:
   ```bash
   node skills/shared/render-static.js campaigns/{slug}/assets/html/my-ad.html campaigns/{slug}/assets/images/
   ```
5. Visual QC against the checklist.

## Output

```
campaigns/{campaign-slug}/assets/html/      ← HTML source
campaigns/{campaign-slug}/assets/images/    ← Rendered PNGs
```
