---
name: native-google-maps-review-designer
description: Builds ads that look like a Google Maps / Google Business Profile listing — business header with category and location, star rating with review count, Call/Directions/Website action pills, and one or more featured reviews from locals. The format implies a real place that real neighbors have already vetted. No templates; every listing and review composed from scratch.
---

# Native Google Maps Review Designer

**Production method:** HTML/CSS + Playwright → see [../shared/HTML-RENDER-REFERENCE.md](../shared/HTML-RENDER-REFERENCE.md)
**Default output size:** 1080×1080 (square)

You build ads that look like a Google Maps business listing. The scroll-stop is **place recognition** — the brain registers "this is a local business someone already checked out" before it registers "ad." It works hardest for local-service ICPs (PI firms, medical practices, real-estate brokerages, home-services contractors) because Maps is literally where their buyers go to compare providers. A 4.8-star listing with a local-guide review reads as the same artifact the buyer was about to look up anyway.

This is one of the `native-format-*` lanes in this repo:

| Lane | Beat | Skill |
|---|---|---|
| Pure typography | bold-text-designer |
| Name the pain → resolve | problem-solution-designer |
| Diagram IS the ad | system-visual-designer |
| Peers talking | chat-style-designer |
| Looks like a real tweet/X post | native-tweet-designer |
| Looks like an App Store review | native-app-store-review-designer |
| **Looks like a Google Maps listing + review** | **native-google-maps-review-designer** (this skill) |

Reach here when the buyer is a local-service buyer and the strongest persuasion is "this place exists in my neighborhood and people like me have already said it works." Maps chrome carries that implication for free; the App Store version cannot, because App Store reviews are about software, not a physical place.

## The cardinal rule

**The listing must read as a real Google Maps card at first glance.** If the chrome is off — wrong action-pill row, wrong star geometry, no review-count link, no "Open · Closes 6 PM" indicator, no Local Guide badge — the illusion dies and the ad reverts to looking like marketing. Reference the real Maps UI and match it.

No templates. Every listing and every review is composed from scratch.

## ICP callout — mandatory

The ICP must appear inside the listing. **At least two of these placements:**

- **Business name** — names the ICP role directly (`Reyes & Patel Personal Injury Attorneys`, `Hill Country Family Dentistry`, `Bayou State Roofing Co.`)
- **Category line** — `Personal injury attorney · Houston, TX`, `General dentist · Austin, TX`, `Roofing contractor · Baton Rouge, LA`
- **Review body** — a local quotes ICP-shaped language verbatim (*"my husband's truck got hit on 290 and…"*, *"we'd been putting off our kids' cleanings for two years…"*)
- **Owner response** — the business owner answers in the voice the ICP would recognize from a real local operator

The business name and category line are the floor — Maps listings always carry both, and both are free real estate for ICP language.

## CTA — must feel native to the format

A Maps listing does not have a "Click here" button. Its CTAs are baked into the chrome. Use one of:

- **Header action pills** — `Call · Directions · Save · Share · Website` are already CTAs. Make `Call` or `Website` visually prominent (filled brand color rather than the standard outline) to point the eye, but never replace the icon row with a marketing button.
- **Owner response housing the CTA** — the business owner replies under a review in their normal voice: *"Thanks Maria — if any other neighbors saw the wreck, our intake line is open until 8 tonight."* This is the cleanest native CTA in this format.
- **Post-frame accent pill** outside the listing card — brand color, ≤ 4 words ending in `→`, pulled verbatim from `COPY.md`. Sits in the canvas margin, never overlaid on the card.

Never overlay a generic banner on the listing — the format breaks the moment marketing voice intrudes. CTA copy comes from `COPY.md` — see [../shared/HTML-RENDER-REFERENCE.md § CTA is required](../shared/HTML-RENDER-REFERENCE.md).

## UI elements — required

A native Maps listing ad must include the following, in this rough vertical order:

- **Top media strip (optional)** — a tiny map snippet (clean inline-SVG roads/blocks with a red Maps pin) OR a neutral hero illustration of the business exterior. Sets "this is a place."
- **Business header block:**
  - **Business name** — bold, ~44px
  - **Category line** — `Personal injury attorney · Houston, TX` (small, muted, sometimes with the · separator and a city)
  - **Star rating row** — 5 stars with partial-fill geometry (e.g. 4.8 = 4 full + one ~80% fill), accent gold/orange, followed by the numeric rating and a blue-link `(247)` review-count link
  - **Open / Closed indicator** — green `Open` or red `Closed`, followed by hours fragment: `Open · Closes 6 PM` or `Closed · Opens 8 AM Mon`
  - **Address line** — small location-pin icon + street address fragment: `1421 W Gray St, Houston`
- **Action button row** — pill buttons with simple inline-SVG icons stacked over labels: `Call · Directions · Save · Share · Website`. The icons sit above their labels; pills are outlined except for the one promoted CTA, which is filled.
- **Tabs row (optional)** — `Overview · Reviews · About · Photos` with the active tab underlined in Maps blue
- **Reviews section:**
  - Header `Reviews` with a sort/filter dropdown chip: `Most relevant ▾` (or `Newest`, `Highest`)
  - **One to three review cards.** Per card:
    - Reviewer avatar (circle, ~80px) — neutral monogram or abstract; never a real face
    - Reviewer name + small `Local Guide · Level 6 · 142 reviews` line (use plausible numbers)
    - Reviewer star rating (5 small stars, accent gold; usually 5 but a 4-star with mild critique reads more honest)
    - Time ago: `2 weeks ago`, `last month`
    - Review body, ~28–32px, 3–6 lines
    - Optional row of 2–4 small thumbnail photos attached to the review (inline-SVG placeholders, neutral)
    - `Helpful` button with a thumbs icon and count (`Helpful · 12`)
    - Optional **owner response** below, italic, indented, prefixed `Response from the owner · 1 week ago`

## Design principles

### Principle #1: The chrome carries the credibility

The buyer doesn't believe the review because of the review — they believe it because Maps showed it to them. Spend the design budget on getting the header, action pills, star geometry, and review-card chrome right. A mediocre review inside perfect chrome out-performs a polished review inside off chrome.

### Principle #2: Local specifics sell the review

A real local review name-drops the neighborhood, the intersection, the receptionist, the dog at the office, the weather on the day. Vague praise (*"great service, highly recommend!"*) reads as fake. *"Got rear-ended on the Gulf Freeway right before Thanksgiving — Reyes had us in his office Friday morning and the rental was sorted by Monday"* reads as a real Houstonian.

### Principle #3: A 4-star review with one honest gripe beats five 5-stars

A Local Guide who docks one star for *"the parking lot is tight and the website's intake form is a little clunky, but the actual representation was excellent"* reads as more trustworthy than perfection. Use this when the campaign can afford the nuance.

### Principle #4: The owner response is the ad's voice

Maps listings have a unique affordance: the business can reply under any review, in the business's own voice, dated. That reply is the natural home for the CTA — it reads as a local operator being attentive, not as marketing. Use it whenever a CTA needs to land inside the frame.

### Principle #5: Match Google's visual language

Maps blue (#1A73E8) for links and the active tab. Star gold/orange (~#E8A800 / Google's review color). Google's `Google Sans` or its Roboto fallback. Correct pill shapes for action buttons. Correct partial-fill star geometry. A pixel off and the brain flags "off-brand" without knowing why.

## Layout rules

- **Listing card** centered on the 1080×1080 canvas, ~960px wide, height varies with content
- **Inside-card padding** ~36–48px
- **Top media strip** (if used) ~200–260px tall, full card width
- **Background outside the frame** soft neutral or brand accent — sells the "screenshot" feel
- **Reviews section** sits below the header; review cards separated by hairline dividers
- **Optional bottom CTA pill** below the listing frame, in the canvas margin — never overlaid

If the card runs tall (three reviews + owner response), consider dropping the tabs row or the photos thumbnails before squeezing line heights.

## Writing the listing + reviews

- **Business name:** plausible local-firm naming patterns — partner-surname style (`Reyes & Patel`), location-named (`Bayou State`), specialty-named (`Hill Country Family Dentistry`). Avoid names that map to real firms.
- **Category line:** verbatim Maps category + city, ICP-bearing
- **Rating:** 4.6–4.9 reads as believable for a small local business. 5.0 with high review count reads as cherry-picked.
- **Review count:** plausible for the niche — small-firm PI office at 200–400, larger practice at 600–1200. Not 12,000.
- **Reviewer names:** first-name + last-initial (`Maria G.`, `Devon R.`) — Maps shows full names but the convention reads as local
- **Local Guide line:** `Local Guide · Level 5 · 87 reviews` — plausible numbers
- **Review body:** lead with a specific local detail, name the situation in the buyer's voice, land on the outcome. 3–6 lines.
- **Owner response:** short, warm, first-name signed by a partner: *"Thank you Maria — glad we could get that wrapped before the holidays. — Diego Reyes"*. Optional CTA tucked into the last sentence.

## Style Catalog

3 starter layouts. Each is a standalone HTML template in [templates/](templates/). Copy, edit business + reviews + owner response, render.

| # | Name | Template | Layout | Key Element |
|---|---|---|---|---|
| 1 | Listing With Reviews | [style-01-listing-with-reviews.html](templates/style-01-listing-with-reviews.html) | Map strip + header + action pills + 2 reviews with owner response | Owner reply hides the CTA in the operator's voice |
| 2 | Single Hero Review | [style-02-single-hero-review.html](templates/style-02-single-hero-review.html) | Mobile listing + one full-bleed Local Guide review with photos | Local specifics + owner response carry the whole ad |
| 3 | Three Review Stack | [style-03-three-review-stack.html](templates/style-03-three-review-stack.html) | Compact header with monogram + 3 stacked reviews (incl. a 4-star) | Honest 4-star review increases the credibility of the 5-stars |

**These are not the only styles.** Invent new layouts. Combine elements. The catalog grows as new concepts prove out in testing.

## QC checklist

- [ ] **Maps authenticity:** at a glance, does this read as a real Google Business Profile card?
- [ ] **Header complete:** business name, category, star row with rating + `(count)` link, Open/Closed + hours, address
- [ ] **Action pills correct:** Call · Directions · Save · Share · Website, icons over labels, one promoted as filled
- [ ] **Star geometry correct:** partial-fill stars, accent gold/orange, not just five identical stars
- [ ] **Local Guide badge** present on at least one reviewer when stacking reviews
- [ ] **ICP present:** in the business name AND at least one other place (category, location, review body, owner response)
- [ ] **Review specifics:** neighborhood, intersection, situation in the buyer's voice — not vague praise
- [ ] **Voice is human:** slightly imperfect prose, parentheticals, real conversational rhythm
- [ ] **Plausible rating + counts:** 4.6–4.9 average, niche-plausible review count, plausible "Helpful" counts
- [ ] **CTA feels native:** action pill, owner-response close, OR post-frame accent pill — never overlaid banner
- [ ] **Thumbnail test:** at 400px, can you read the business name + star rating AND identify the ICP?
- [ ] **No branding:** no real firm names, no real personal names, no real addresses that resolve to a real business
- [ ] **No network fetches:** map snippet, avatars, icons, photo thumbnails — all inline SVG or base64; only Google Fonts via `@import` allowed
- [ ] **CSS rendering:** no overflow, missing icons, broken stars, clipping at 1080×1080
- [ ] **Scroll-stop:** does the card-on-canvas read as a real Maps screenshot at 2am?

If any check fails → fix the HTML and re-render.

## Workflow

**Hierarchy: Ad → Copy → Images.**

1. **Read `campaigns/{slug}/ads/{ad-name}/COPY.md` first** — the business name, category, review body, and owner response should be in there as verbatim copy.
2. **Cast the listing.** Decide on business name, category + city, star rating, review count, Open/Closed status. Choose 1, 2, or 3 reviews. Decide if one is a Local Guide. Decide if an owner response is needed and which review it sits under.
3. **Cast the CTA placement.** Promoted action pill (Call or Website filled)? Owner-response close? Post-frame accent pill? Pick one primary.
4. **Create the ad folder if it doesn't exist:** `campaigns/{slug}/ads/{ad-name}/images/`.
5. **Compose the HTML** at `campaigns/{slug}/ads/{ad-name}/images/{ad-name}.html`. Build the listing card faithfully — header block, action-pill row, optional tabs, review cards with stars and Helpful controls, optional owner response. All icons, stars, avatars, photo thumbnails, and map snippets as inline SVG or base64. No network fetches at render time.
6. **Render the PNG:**
   ```bash
   node skills/shared/render-static.js \
     campaigns/{slug}/ads/{ad-name}/images/{ad-name}.html \
     campaigns/{slug}/ads/{ad-name}/images/
   ```
7. **Seed COPY** if it doesn't already exist: `node skills/shared/tools/backfill-copy.js` (or use the editor). Open `COPY.md` and clean up any auto-extraction quirks. Just the verbatim listing + review copy — no interpretive sections.
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
