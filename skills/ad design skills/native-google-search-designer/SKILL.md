---
name: native-google-search-designer
description: Builds ads that look like a real search engine moment — either an autocomplete dropdown showing the buyer typing their own pain into the search bar, or a full results page where the featured snippet answers them. The scroll-stop is self-recognition; the buyer sees their own search behavior staring back at them. No templates; every search composed from scratch.
---

# Native Google Search Designer

**Production method:** HTML/CSS + Playwright → see [../shared/HTML-RENDER-REFERENCE.md](../shared/HTML-RENDER-REFERENCE.md)
**Default output size:** 1080×1080 (square)

You build ads that don't look like ads — they look like the screen the buyer was just on, or is about to land on. The pain *is* the search query. The buyer's brain processes "search results" before it processes "marketing," and by the time the framing lands, the message has already been read. The scroll-stop mechanism is **self-recognition** — the viewer sees their own 11pm Google search reflected back at them.

This is one of the `native-format-*` lanes in this repo:

| Lane | Beat | Skill |
|---|---|---|
| Pure typography | bold-text-designer |
| Name the pain → resolve | problem-solution-designer |
| Diagram IS the ad | system-visual-designer |
| Peers talking | chat-style-designer |
| Looks like a real tweet/X post | native-tweet-designer |
| **Looks like a search-engine moment (autocomplete or SERP)** | **native-google-search-designer** (this skill) |

Reach here when the ICP's pain is already a search query they've typed — when they've asked Google the question and gotten useless answers. The format does double duty: it names the pain in their own words *and* signals that this is what they already do at 2am.

## The cardinal rule

**The format is the ad. If it doesn't pass for a real search screen at first glance, it fails.**

Wrong logo placement, wrong autocomplete row spacing, missing voice/lens icons, fake-looking results URLs, the wrong "About X results" stat — any of these break the spell. Reference the real interface and match it. The viewer's instinct must say "I'm looking at a search page" in 0.3 seconds.

No templates. Every search is composed from scratch.

## Mode A vs Mode B — pick one

Every ad in this lane is exactly one of:

- **Mode A — Autocomplete dropdown:** the search bar with the buyer's pain mid-type, cursor blinking, 4–6 autocomplete suggestion rows beneath. The whole message is *what they're typing and what the engine is offering to complete*. No results page.
- **Mode B — Full SERP (Search Engine Results Page):** the same query already submitted, with `About X results (0.42 seconds)`, a featured-snippet card that answers the question (this is where the offer lives), 2–4 organic results below, and optionally a `People also ask` box.

Pick the mode in the workflow step before you compose HTML. Don't hybridize — a half-autocomplete, half-SERP screen reads as fake.

## ICP callout — mandatory

Same rule as every lane: the ICP must be on the canvas. In this lane the ICP shows up *inside the search itself*.

The ICP appears in the **search query** AND **at least one other place**:

- **Mode A placements (besides the query):** autocomplete suggestion text (`how do {icp} get {pain}`), an autocomplete row that names the ICP's tool stack, the search bar's "Search Google or type a URL" placeholder swapped for an ICP-shaped phrase
- **Mode B placements (besides the query):** featured snippet title, featured snippet source URL (`pi-firm-growth.com › intake`), organic result titles, `People also ask` questions, ad/sponsored row sender

The query is the floor. Never publish without an ICP-bearing query.

## CTA — must feel native to the format

A search page's CTA is not a button. It's one of:

- **Mode A:** the **bottom autocomplete row** is a curiosity-hook query that implies the next step (*"how to book a pi-firm growth walkthrough"*), styled identically to the other suggestion rows so it doesn't read as a planted ad
- **Mode B:** the **featured snippet's source line** — domain + path that *is* the URL the viewer is meant to remember (`pi-firm-growth.com › book-walkthrough`), or the snippet's last sentence ending with an implied action
- **Post-frame accent pill** in the canvas margin below the search screen — brand accent, ≤ 4 words ending in `→`, pulled verbatim from `COPY.md`

Never overlay a generic "Click here!" button inside the search page. That kills the realism instantly.

CTA copy comes from `COPY.md` — see [../shared/HTML-RENDER-REFERENCE.md § CTA is required](../shared/HTML-RENDER-REFERENCE.md).

## UI elements — required

### Shared (both modes)

- **Search-engine logo** at top — use a generic colored-letters mark (e.g. four playful primary-color letters spelling a stylized engine name). Do **not** reproduce the actual Google trademark; use a near-equivalent that reads as "search engine" without infringing.
- **Search bar:** rounded ends (~52px height on mobile, ~46px on desktop), soft 1px border or subtle shadow, **microphone icon** right side, **camera/lens icon** further right. On mobile, the bar sits high; on desktop, it's centered.
- **Mobile vs desktop:** both layouts valid. **Recommend mobile** for Meta feed performance — the narrower frame fits the 1080×1080 canvas better and matches how the ICP actually searches.

### Mode A — Autocomplete

- **Cursor** rendered as a static thin vertical bar (`|`) at the end of the typed query — the visual cue that the buyer is mid-keystroke
- **Autocomplete dropdown** flush against the bottom of the search bar, same width, soft top divider
- **4–6 suggestion rows**, each with:
  - **Magnifying-glass icon** (left, ~24px, light gray)
  - **Suggestion text** — partial bold where autocomplete is "completing" the typed portion. Convention: the typed prefix is regular weight, the completed remainder is **bold** (the inverse of real Google in some clients — pick one and apply consistently)
  - Optional **trending-up arrow** or small "↗" indicator on a row or two to imply velocity
  - Optional **🕓 history clock** icon for "recent search" rows
- **Row height** ~88–104px on mobile (tight) — tight enough that 5 rows feel like a real dropdown, not a designed list
- **No results below the dropdown.** The dropdown IS the canvas.

### Mode B — SERP

- **`About X results (0.42 seconds)`** stat in muted gray below the search bar — pick a number that's plausible for the query
- **Featured snippet card** at top:
  - Light card background or top-of-list emphasis
  - The **question** restated as a heading (often the query itself, or a closely-related rephrase)
  - The **answer** — 1–3 short sentences or a bullet list of 3–4 items. This is your offer in disguise.
  - **Source line:** `domain.com › path` in muted green/gray, with the page title underneath as a clickable-looking link
- **2–4 organic results** below the featured snippet, each with:
  - **Favicon + site name** on the first line (small, muted)
  - **URL breadcrumb** — `pi-firm-growth.com › intake › conversion` in muted green/gray
  - **Page title** — blue (link color), bold-ish, ~36–42px, 1–2 lines
  - **Snippet** — 2 lines of result preview text, muted, ellipsis-truncated
  - Optional **sitelinks** (2–4 small indented links) under the first result
- **Optional `People also ask` box** — 3–4 expandable-looking questions, each row with a right-side chevron
- **Optional `Sponsored` row** at the very top labeled with a small `Sponsored` tag — used when the ad's mechanic is *"this is what your competitor is paying for; here's the organic truth below"*

## Design principles

### Principle #1: The query is the message

The single most important element is what the buyer is searching for. It has to read in their voice, with their grammar, their typos if you want (`how do i get pi leads to call back faster`). If the query feels like a marketer wrote it, the ad is dead. Use lowercase, no punctuation, conversational fragments.

### Principle #2: One mode, fully committed

Mode A is built around the dropdown; Mode B is built around the results. Don't smuggle SERP elements into an autocomplete shot or vice versa. Pick the mode that fits the beat — autocomplete for "I see myself typing this," SERP for "and here's the answer that finally works."

### Principle #3: Plausibility in the surround

In Mode A, the *other* autocomplete suggestions must read as real adjacent searches for this ICP — they sell the realism of the hero suggestion. In Mode B, the *organic results below* the featured snippet must look like the noisy/irrelevant pages the buyer normally finds — they sell the relief of the snippet at top.

### Principle #4: Mobile-first, generic engine

Default to a portrait mobile search frame centered on the canvas. Default to a generic four-color-letters engine mark (not the literal Google logo). Both choices increase deliverability — narrower frame fits 1080×1080 cleanly, generic mark sidesteps trademark risk.

### Principle #5: Pixel accuracy matters

Row heights, icon weight, the gray of secondary text, the green of URL breadcrumbs, the blue of result titles — they all have to match what the brain remembers. A pixel off and the format flags as "fake" without the viewer knowing why. Compare against a real screenshot before shipping.

## Layout rules

- **Mobile frame** (recommended) centered on the 1080×1080 canvas: ~720–820px wide, content-driven height. Soft white or very light gray background.
- **Desktop frame** (optional): ~960–1000px wide, search bar centered horizontally, results left-aligned with a left margin of ~64px.
- **Padding inside the frame:** ~24–36px horizontal on mobile, ~64px on desktop
- **Background outside the frame:** soft neutral (off-white, light gray) — sells the "screenshot" feel. Optional brand accent for the canvas margin if you need brand presence.
- **Optional bottom CTA pill** below the frame: small, accent-colored, sits in the canvas margin
- **Hero focus:** Mode A → the typed query + bottom suggestion row. Mode B → the featured snippet card.

## Writing the search

### Mode A — the autocomplete

- **Typed query** (the one with the cursor): the ICP's pain phrased exactly the way they'd type it at 11pm. Lowercase. No question mark. ICP language verbatim.
  - Example: `how do pi firms get leads to call back the same day`
- **Suggestion rows above and below:** 3–5 plausible adjacent searches. At least one should also name the ICP. At least one should be a closely-related pain. One row can be the curiosity-hook CTA (e.g. `how to book a pi-firm growth walkthrough`).
- **Bold weighting:** pick a convention (typed prefix regular, completion bold — or vice versa) and apply it across every row.
- **Order:** put the hero typed query at the top (in the search bar). The suggestion rows are what the engine offers to complete to.

### Mode B — the SERP

- **Query in the search bar:** the ICP's pain, phrased as a real search. Same voice rules as Mode A.
- **Featured snippet question heading:** rephrase the query as a clean question (`How can PI firms get leads to call back the same day?`).
- **Featured snippet answer:** 1–3 sentences or a 3–4 bullet list. This is the offer, dressed as a generic answer. Last line/bullet can imply the next step (the brand's mechanism, the booking page, the diagnostic).
- **Featured snippet source:** `your-domain.com › path` — pick a domain that names the ICP (`pi-firm-growth.com`).
- **Organic results below:** 2–4 results with plausible titles + snippets. These can be:
  - Generic advice articles ("10 Tips for Faster Lead Response") that read as the noisy alternatives
  - Forum/Reddit-style threads with partial answers
  - Competitor-shaped results (don't use real competitor names)
- **People also ask** (optional): 3–4 questions, each adjacent to the hero query — they reinforce that this is a known problem.
- **Sponsored row** (optional, top): labeled `Sponsored`, can be used as a competitor-shaped distraction the buyer is meant to scroll past on the way to the organic snippet below.

## Style Catalog

3 starter layouts. Each is a standalone HTML template in [templates/](templates/). Copy, edit query/suggestions/snippet, render.

| # | Name | Template | Layout | Key Element |
|---|---|---|---|---|
| 1 | Autocomplete Mobile | [style-01-autocomplete-mobile.html](templates/style-01-autocomplete-mobile.html) | Mobile search bar mid-type + 5 suggestion rows | Bottom suggestion IS the CTA query |
| 2 | SERP Featured Snippet | [style-02-serp-featured-snippet.html](templates/style-02-serp-featured-snippet.html) | Mobile SERP with featured-snippet card + organic + PAA | Featured snippet answer is the offer in disguise |
| 3 | Sponsored vs Organic | [style-03-sponsored-vs-organic.html](templates/style-03-sponsored-vs-organic.html) | Desktop browser SERP, Sponsored row up top, organic featured below | Visceral contrast between competitor ad + organic truth |

**These are not the only styles.** Invent new layouts. Combine elements. The catalog grows as new concepts prove out in testing.

## QC checklist

### Both modes

- [ ] **Format authenticity:** at a glance, does it look like a real search screen?
- [ ] **Generic engine mark:** logo reads as "search engine" without infringing on the real Google trademark
- [ ] **Search bar:** rounded ends, mic + lens icons, correct height for mobile/desktop
- [ ] **ICP present in query AND one other place:** suggestion row / snippet title / source URL / PAA question
- [ ] **Query voice:** lowercase, conversational, no marketing language, reads like a 2am search
- [ ] **CTA feels native:** bottom suggestion row, featured snippet source line, or post-frame accent pill — never an overlay button
- [ ] **Thumbnail test:** at 400px, can you read the hero query AND identify the ICP?
- [ ] **No branding violations:** no real Google trademark; no real competitor names that would be litigious
- [ ] **CSS rendering:** no overflow, clipping, missing icons, broken favicons
- [ ] **Scroll-stop:** would this image read as a screenshot at 2am?

### Mode A — autocomplete

- [ ] **Cursor present** at end of typed query
- [ ] **4–6 suggestion rows**, magnifying-glass icon on each
- [ ] **Bold-weighting convention** applied consistently across rows
- [ ] **Surrounding suggestions plausible** for this ICP
- [ ] **No results below the dropdown** — the dropdown IS the canvas
- [ ] **Bottom row is the implied CTA** (when used in-frame)

### Mode B — SERP

- [ ] **`About X results (0.42 seconds)`** present, plausible number
- [ ] **Featured snippet card** with question + answer + source URL
- [ ] **2–4 organic results** with favicon, URL breadcrumb, blue title, muted snippet
- [ ] **URL colors correct** — blue titles, green/gray URLs, gray snippets
- [ ] **Optional People also ask** rows have chevrons
- [ ] **Optional Sponsored row** labeled and visually distinct

If any check fails → fix the HTML and re-render.

## Workflow

**Hierarchy: Ad → Copy → Images.**

1. **Read `campaigns/{slug}/ads/{ad-name}/COPY.md` first** — the hero query (and, for Mode B, the featured snippet answer) should be in there.
2. **Pick the mode — A or B.** Autocomplete if the beat is "I see myself typing this." SERP if the beat is "and here's the answer that finally works."
3. **Pick the device frame.** Mobile recommended for Meta feed. Desktop only if the campaign brief explicitly asks.
4. **Cast the surround.** For Mode A: 3–5 plausible adjacent searches. For Mode B: 2–4 plausible organic results + optional PAA + optional Sponsored row.
5. **Create the ad folder if it doesn't exist:** `campaigns/{slug}/ads/{ad-name}/images/`.
6. **Compose the HTML** at `campaigns/{slug}/ads/{ad-name}/images/{ad-name}.html`. Build the search screen faithfully — generic engine mark (inline SVG), search bar with mic + lens icons, mode-specific structure beneath. No network fetches at render time; inline all icons and favicons as SVG or base64.
7. **Render the PNG:**
   ```bash
   node skills/shared/render-static.js \
     campaigns/{slug}/ads/{ad-name}/images/{ad-name}.html \
     campaigns/{slug}/ads/{ad-name}/images/
   ```
8. **Seed COPY** if it doesn't already exist: `node skills/shared/tools/backfill-copy.js` (or use the editor). Open `COPY.md` and clean up any auto-extraction quirks. Just the verbatim search query + snippet/suggestions — no interpretive sections.
9. **QC** against the checklist above.

## Output

```
campaigns/{campaign-slug}/ads/{ad-name}/
  ├── COPY.md
  ├── copy.json
  └── images/
      ├── {ad-name}.html
      └── {ad-name}.png
```
