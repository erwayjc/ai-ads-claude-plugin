---
name: native-job-listing-designer
description: Builds ads that look like a job listing — company line, role title, location/comp, "About the role" + "Requirements" + "What you'll do" sections, Apply CTA. The format reads as a third-party posting; the role description IS the offer. No templates; every listing composed from scratch.
---

# Native Job Listing Designer

**Production method:** HTML/CSS + Playwright → see [../shared/HTML-RENDER-REFERENCE.md](../shared/HTML-RENDER-REFERENCE.md)
**Default output size:** 1080×1080 (square)

You build ads that look like a job listing. The format reads as *a role being hired* — a third-party POV describing what someone needs, what's required, and what the comp looks like. Especially powerful when the offer can be reframed as "we're hiring this position so you don't have to" — your service IS the role.

This is one of the `native-format-*` lanes. See [native-tweet-designer](../native-tweet-designer/SKILL.md) for lane overview.

## The cardinal rule

**The listing must read as a job, not as marketing.** Use the recruiter / job-board voice: "We're looking for…", "You will…", "Requirements:". The moment the voice slips into sales mode, the format dies.

No templates. Every listing is composed from scratch.

## ICP callout — mandatory

The ICP appears inside the listing. **At least two of these placements:**

- **Company name at the top** — ICP-coded — e.g. `PI Firm Growth · Hiring`
- **Role title** — names the ICP-relevant function — `Head of Intake — PI Firm`
- **Location field** — `Remote · Servicing US PI Firms`
- **"You will" or "About the role" section** — quotes ICP language verbatim

## CTA — must feel native to the format

The CTA is one of:

- **An "Apply" button** inside the listing card — rounded, accent-colored, ≤ 4 words (`Apply →`, `Apply Now →`)
- **An "Application link" inline** — *"Apply at: walkthrough.example.com"*
- A **post-frame accent pill** below the listing card, brand color, ≤ 4 words ending in `→`, pulled from `COPY.md`

Apply buttons live INSIDE job listings naturally — this is one format where an in-card CTA button reinforces realism instead of breaking it. Match the visual style of LinkedIn Jobs / Lever / Greenhouse.

## UI elements — required

- **Listing card chrome:** white card with soft shadow, ~16px border radius
- **Header block:**
  - Company logo placeholder (initials in a colored square — never a real brand)
  - Company name (bold)
  - Industry / size line (small, muted)
- **Role title block:**
  - Role title (large, bold ~44–52px)
  - Subtitle / level (e.g. `Senior · Full-time`)
- **Meta row:**
  - Location pill (📍 + text)
  - Comp pill (💵 + range)
  - Remote / hybrid / onsite pill
  - Posted date (`Posted 2 days ago`)
- **Body sections (3–4):**
  - `About the role` — 2–4 lines describing the position (= the offer's outcome)
  - `What you'll do` — bulleted list of 4–6 responsibilities (= what the offer delivers)
  - `Requirements` — bulleted list (= the buyer's current pain points listed as job requirements)
  - `Compensation` — explicit salary range or revenue range (= the cost equation)
- **Apply button** at the bottom — rounded, accent-colored, `Apply →`
- **Optional "Save" / "Share" icons** to the right of Apply — sells the realism

## Design principles

### Principle #1: The role title IS the headline

`Head of Intake — Personal Injury Firm` is the headline. `Director of Lead Operations — for SaaS Founders` is the headline. The viewer reads the role title and knows in 2 seconds if it's for them.

### Principle #2: Recast the offer as a role

Your service can be described as a job description. *"Director of Outbound — drives 30+ booked walkthroughs per month, runs intake scripts, handles disposition logging."* That's the offer — written as a job. The reader thinks "we'd need to hire someone for that" → "wait, this IS that hire."

### Principle #3: "Requirements" = the buyer's pain

The Requirements section is where you can name the pain in HR voice. *"5+ years frustrated with generic agencies. Familiarity with ghost leads. Comfortable with a $48K/yr ad spend that isn't producing."* Reframing pain as a job requirement is funny, true, and devastating.

### Principle #4: Show comp explicitly

Real listings show comp. Your "comp" is the cost equation — *"$0/mo + performance fee · Equity in your firm's growth"* or *"Saves you $48,000/yr in missed leads"*. Match the comp field's visual treatment to a real listing's salary range.

### Principle #5: Match job-board visual language

Pick one: LinkedIn Jobs (rounded card, blue accent), Lever (clean serif headlines, lots of whitespace), Greenhouse (minimal sans, list-heavy). Stay faithful to whichever you pick.

## Layout rules

- **Listing card** centered on canvas, ~960px wide, content-driven height (often portrait)
- **Padding inside card:** ~40–48px
- **Background outside the card:** soft neutral (LinkedIn-ish #f3f2ef) or brand color
- **Optional bottom CTA pill** in canvas margin below the card

## Writing the listing

- **Company name:** ICP-coded plausibly — `PI Firm Growth`, `Intake Systems Co.`
- **Role title:** the offer recast as a job — `Head of Intake — PI Firm`
- **About the role (2–4 lines):** describes the outcome the buyer wants, in HR voice
- **What you'll do (4–6 bullets):** features of the offer, written as responsibilities
- **Requirements (4–6 bullets):** the buyer's pain points, written as requirements
- **Compensation:** the cost equation, written as a salary range or rev share

## Style Catalog

3 starter layouts. Each is a standalone HTML template in [templates/](templates/). Copy, edit role/sections/comp, render.

| # | Name | Template | Layout | Key Element |
|---|---|---|---|---|
| 1 | LinkedIn · Head of Intake | [style-01-linkedin-head-of-intake.html](templates/style-01-linkedin-head-of-intake.html) | LinkedIn Jobs card · blue accent · meta pills · Easy Apply button | Pain points listed as job requirements |
| 2 | Lever · Director of Outbound | [style-02-lever-director-outbound.html](templates/style-02-lever-director-outbound.html) | Serif Lever-style headline · 4-cell meta strip · two-column body | Premium editorial recasting offer as a role |
| 3 | Greenhouse · Fractional CMO | [style-03-greenhouse-fractional.html](templates/style-03-greenhouse-fractional.html) | Teal Greenhouse header · 4-card meta grid · cost-vs-FT comp block | Comp framed as "fractional vs full hire" math |

**These are not the only styles.** Invent new layouts. Combine elements. The catalog grows as new concepts prove out in testing.

## QC checklist

- [ ] **Listing authenticity:** looks like a real job posting
- [ ] **Platform consistency:** matches LinkedIn Jobs OR Lever OR Greenhouse — not hybridized
- [ ] **Header block:** company logo (initials), company name, industry/size
- [ ] **Role title is the headline:** large, bold, ICP-coded
- [ ] **Meta row:** location, comp, remote/hybrid, posted-date pills
- [ ] **Sections complete:** About, What you'll do, Requirements, Compensation
- [ ] **Recruiter voice:** HR/job-board phrasing throughout — no sales voice
- [ ] **Requirements name the pain:** ICP pain points framed as job requirements
- [ ] **Comp shown explicitly:** matches a real listing's treatment
- [ ] **Apply button or pill:** rounded, accent-colored, ≤ 4 words ending in `→`
- [ ] **ICP present:** company name AND at least one other placement
- [ ] **Thumbnail test:** at 400px, can you read the role title + Apply button AND identify the ICP?
- [ ] **No branding:** no real companies, no real personal names, no real logos
- [ ] **CSS rendering:** no overflow, broken bullet lists, missing button
- [ ] **Scroll-stop:** does the card-on-canvas read as a real job listing at 2am?

If any check fails → fix the HTML and re-render.

## Workflow

1. **Read `campaigns/{slug}/ads/{ad-name}/COPY.md`** — role title, About, What you'll do, Requirements, Comp should be in there.
2. **Recast the offer as a role.** What would a real hire of this function look like?
3. **Frame the pain as Requirements.** ICP pain points become bullet-list requirements.
4. **Set the comp.** Real number or range — your offer's pricing or savings.
5. **Pick the platform aesthetic** (LinkedIn Jobs / Lever / Greenhouse).
6. **Create the ad folder if needed.**
7. **Compose the HTML** at `images/{ad-name}.html`. Listing card chrome, sans-serif font, sections, Apply button.
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
