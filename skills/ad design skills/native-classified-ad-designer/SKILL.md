---
name: native-classified-ad-designer
description: Builds ads that look like a newspaper classifieds page — column layout, dense small-print listings, one highlighted entry. The format reads as a found object, the message hidden inside it. No templates; every classifieds page composed from scratch.
---

# Native Classified Ad Designer

**Production method:** HTML/CSS + Playwright → see [../shared/HTML-RENDER-REFERENCE.md](../shared/HTML-RENDER-REFERENCE.md)
**Default output size:** 1080×1080 (square)

You build ads that look like a newspaper classifieds page. The viewer's eye is trained to scan columns of tiny text; one listing is highlighted (boxed, bolded, slightly enlarged) and carries the message. The scroll-stop is "wait, what's this?"

This is one of the `native-format-*` lanes. See [native-tweet-designer](../native-tweet-designer/SKILL.md) for lane overview.

## The cardinal rule

**The classified page must look found, not designed.** Like the viewer ran across an old newspaper and the highlighted listing is jumping out. If it looks like a graphic-designer's interpretation of a classifieds page, it dies.

No templates. Every classifieds page is composed from scratch.

## ICP callout — mandatory

The ICP appears inside the classifieds page. **At least two of these placements:**

- **Section header** at the top of the column — e.g. `LEGAL · PI FIRM SERVICES`, `MARKETING · AGENCIES FOR SAAS`
- **Highlighted listing's headline** — names the ICP role
- **Surrounding listings** — plausible classifieds *for this ICP's life* (HVAC for a real-estate ICP, equipment auctions for a PI firm ICP)
- **Newspaper masthead** at the top — `The Daily PI Firm Review`

## CTA — must feel native to the format

The CTA is one of:

- **The highlighted listing IS the CTA** — phone number / URL stylized as classifieds copy — *"Call: 555-WALKTHROUGH"*, *"See: walkthrough.example.com"*
- A **boxed "Apply within" pill** at the end of the highlighted listing, accent-colored
- A **post-frame accent pill** below the newspaper, brand color, ≤ 4 words ending in `→`, pulled from `COPY.md`

Never overlay a modern button on the newspaper page.

## UI elements — required

- **Newspaper masthead at top:**
  - Title (large serif, all-caps, letterspaced) — e.g. `THE PERFORMANCE TIMES`
  - Date line + edition number + "CLASSIFIEDS" tab
- **Column structure:** 2 or 3 narrow columns separated by thin rules
- **Section headers:** small all-caps headers above groups of listings — `WANTED`, `SERVICES`, `FOR SALE`
- **Listings:** small-text classified entries, ~14–18px (large enough to render at thumbnail, small enough to read as classifieds). Each listing has:
  - A bold opening word/phrase
  - Body text dense, with abbreviations (`xlnt`, `pls call`, `must sell`)
  - Optional phone number or address in a different font weight
- **Highlighted listing:**
  - Boxed with a thicker border (~2–3px), or shaded background, or both
  - Slightly larger font (~22–28px)
  - Bolder headline
  - Sits in the middle column, mid-page — found, not announced
- **Optional cut-out paper corners** for "this is a photographed clipping" effect

## Design principles

### Principle #1: Density sells the realism

Classifieds pages are *dense*. If your page has 6 listings, it reads as design. If it has 20+, it reads as found. Pack the columns — most listings can be a single line.

### Principle #2: Surrounding listings must fit the world

Listings around the highlighted one should feel like real classifieds for this ICP's environment. For a PI firm ICP: estate auctions, legal-services-needed, court reporter availability, transcription services. For a SaaS founder: equipment for sale, contract dev help, coworking space. Specifics sell the world.

### Principle #3: Highlighted listing reads as a classified, not as marketing

Use classifieds voice: terse, abbreviated, action-oriented. *"PI FIRMS — Tired of ghost leads? Intake system + booked walkthroughs. 3 firms / mo only. walkthrough.example.com"* — not *"Transform your firm with our revolutionary intake solution!"*

### Principle #4: Serif everywhere

Classifieds are newsprint. Body must be a serif (Times, Georgia, IBM Plex Serif). Masthead can be a heavier serif or a slab. No sans-serif anywhere — sans is the tell that you designed this from scratch.

### Principle #5: Paper aesthetic with slight noise

Off-white / cream background, very slight noise/grain, occasional column rule offset. Don't go too far — overdoing the "old paper" filter reads as theme, not document.

## Layout rules

- **Newspaper page** centered on canvas, ~960px wide × ~1020px tall (portrait-leaning)
- **Padding inside the page:** ~32–48px
- **Background outside the page:** dark or neutral so the paper pops
- **Optional bottom CTA pill** in canvas margin below the page

## Writing the classifieds page

- **Masthead:** ICP-coded plausibly — `The PI Firm Weekly`, `Performance Marketing Gazette`
- **Surrounding listings (15–25):** terse, one-line classifieds in this ICP's world. ~6–14 words each. Mix all-caps openings (`FOR SALE`, `WANTED`, `SERVICES`).
- **Highlighted listing (4–8 lines):** classifieds voice. Names the ICP. Names the offer. Includes CTA (phone, URL, or "Apply within").

## Style Catalog

3 starter layouts. Each is a standalone HTML template in [templates/](templates/). Copy, edit masthead/listings/highlight, render.

| # | Name | Template | Layout | Key Element |
|---|---|---|---|---|
| 1 | Three-Column · Boxed Highlight | [style-01-three-column-boxed.html](templates/style-01-three-column-boxed.html) | 3 narrow columns · 19+ surrounding listings · yellow boxed highlight w/ drop shadow | Boxed listing pops naturally inside dense column |
| 2 | Two-Column · Dark Highlight | [style-02-two-column-shaded.html](templates/style-02-two-column-shaded.html) | 2 wider columns · 18+ classifieds · dark-on-light highlight w/ amber CTA pill | Inverted-color block reads as found, not designed |
| 3 | Circled · Found-Page Discovery | [style-03-circled-discovery.html](templates/style-03-circled-discovery.html) | Tilted paper · torn corner · 19+ listings · hand-drawn red circle + "this one" caveat note | Annotation sells the "I marked this" found moment |

**These are not the only styles.** Invent new layouts. Combine elements. The catalog grows as new concepts prove out in testing.

## QC checklist

- [ ] **Classifieds authenticity:** looks like a newspaper page, not a designed grid
- [ ] **Density:** 15+ surrounding listings — page feels packed, not sparse
- [ ] **Serif typography everywhere:** body, headers, masthead
- [ ] **Masthead complete:** title, date line, edition info
- [ ] **Column structure:** 2 or 3 columns with thin rules
- [ ] **Surrounding listings believable:** terse classifieds for this ICP's world
- [ ] **Highlighted listing pops naturally:** boxed/shaded but still reads as a classified
- [ ] **Voice consistent:** classifieds-terse, even in the highlighted entry
- [ ] **ICP present:** masthead/section header AND highlighted listing
- [ ] **CTA feels native:** "Call:" / "See:" / phone-style or post-frame pill — never overlay button
- [ ] **Paper aesthetic:** cream background, slight noise/grain
- [ ] **Thumbnail test:** at 400px, can you see the page-as-newspaper AND read the highlighted listing?
- [ ] **No branding:** no real newspaper names, no real phone numbers
- [ ] **CSS rendering:** no overflow, broken columns, sans-serif fallbacks
- [ ] **Scroll-stop:** does the paper-on-canvas read as a photographed page at 2am?

If any check fails → fix the HTML and re-render.

## Workflow

1. **Read `campaigns/{slug}/ads/{ad-name}/COPY.md`** — masthead + surrounding listings + highlighted listing should be in there.
2. **Build the ICP's classified world.** List 15–25 plausible 1-line classifieds for this buyer's environment.
3. **Write the highlighted listing in classifieds voice.** Terse, abbreviated, ICP-named, CTA at the end.
4. **Pick the highlight mechanism** (border box, shaded background, slightly larger font) — usually box + bold headline.
5. **Create the ad folder if needed.**
6. **Compose the HTML** at `images/{ad-name}.html`. Newspaper page chrome, serif fonts via Google Fonts `@import`, column rules, listings.
7. **Render the PNG:**
   ```bash
   node skills/shared/render-static.js \
     campaigns/{slug}/ads/{ad-name}/images/{ad-name}.html \
     campaigns/{slug}/ads/{ad-name}/images/
   ```
8. **Seed COPY** if needed.
9. **QC** against the checklist.

## Output

```
campaigns/{campaign-slug}/ads/{ad-name}/
  ├── COPY.md
  ├── copy.json
  └── images/
      ├── {ad-name}.html
      └── {ad-name}.png
```
