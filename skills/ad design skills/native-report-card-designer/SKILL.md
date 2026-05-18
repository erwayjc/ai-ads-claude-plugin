---
name: native-report-card-designer
description: Builds ads that look like a school report card — school header, student name, grade table, teacher comment, signature. The grades read as third-party assessment of the buyer's current state or the competitor's failings. No templates; every report card composed from scratch.
---

# Native Report Card Designer

**Production method:** HTML/CSS + Playwright → see [../shared/HTML-RENDER-REFERENCE.md](../shared/HTML-RENDER-REFERENCE.md)
**Default output size:** 1080×1080 (square)

You build ads that look like a school report card. The format reads as *external, dispassionate evaluation* — letter grades on rows the buyer recognizes. Especially powerful for comparison ads (grading the buyer's current setup, or grading what a competitor delivers) because the grading rubric does the argument.

This is one of the `native-format-*` lanes. See [native-tweet-designer](../native-tweet-designer/SKILL.md) for lane overview.

## The cardinal rule

**The grades are the argument.** A row that says `Speed to Lead .................. F` is more devastating than a paragraph explaining the same point. Once the format is recognized, the grades land without further explanation.

No templates. Every report card is composed from scratch.

## ICP callout — mandatory

The ICP appears inside the report card. **At least two of these placements:**

- **"Student" name field** — names the ICP — e.g. `Student: Personal Injury Firms — General Marketing Agencies`
- **School / institution header** — e.g. `PI Firm Performance Review Board`
- **Course rows** — graded subjects use ICP vocabulary verbatim (`Speed to Lead`, `Intake Script Adherence`, `Lead Disposition Tracking`)
- **Teacher / examiner comment** — quotes ICP language

## CTA — must feel native to the format

The CTA is one of:

- **A final "Recommended next step" row** styled like a teacher's note — *"Recommended: re-test under new intake system. Schedule: walkthrough.example.com"*
- **An office-stamp pill** in the corner — `→ Re-evaluate`
- A **post-frame accent pill** below the card, brand color, ≤ 4 words ending in `→`, pulled from `COPY.md`

Never overlay a "Click here" banner on the card.

## UI elements — required

- **Paper card** with subtle texture or soft cream background — looks printed
- **Header block:**
  - Institution name (top, all-caps, letterspaced, serif feels right) — e.g. `PI FIRM PERFORMANCE REVIEW BOARD`
  - Subtitle: `Quarterly Evaluation · Q2 2026`
  - Optional crest/seal SVG in a corner
- **Student details row:** Name, ID, Class, Term — bordered or underlined fields
- **Grade table:**
  - Columns: `Subject / Performance / Grade / Comment`
  - 5–7 rows of graded subjects
  - Grades: `A`, `B`, `B+`, `C-`, `D`, `F` — letter grades land harder than percentages
  - One column shows the proprietary alternative passing (`Subject: Speed to Lead — Their system: F — Our system: A`)
- **Teacher's comment block:** 2–4 lines of italic prose at the bottom — *"The student demonstrates persistent gaps in intake fundamentals…"*
- **Signature line:** stylized signature SVG + printed name + title
- **Optional stamp:** "FAIL" / "RE-EXAMINE" / "PASS" red rubber-stamp graphic rotated -8°

## Design principles

### Principle #1: Letter grades over percentages

`F` lands. `47%` does not. Use letters for the gut punch and reserve percentages for the small print.

### Principle #2: The subjects must be ICP vocabulary

`Intake Response Time`, `Lead-to-Meeting Ratio`, `Disposition Logging` for a PI firm. `Cohort Retention`, `Activation Rate`, `Time-to-Value` for SaaS. Generic subjects (`Communication`, `Reliability`) waste the format.

### Principle #3: Use the comparison column

A single graded row is a complaint. A row with two grades side-by-side (`Their setup: F · Our setup: A`) is an *argument*. Stack 5–7 of those and the report card becomes a comparison ad in disguise.

### Principle #4: Stamp + signature land the authority

A signed-and-stamped report card reads as *institutionally judged*. Don't skip the signature line or the stamp — they're where the format earns its trust.

### Principle #5: Paper aesthetic, not screen aesthetic

Soft cream background, slight noise/grain, serif headlines, monospace or serif body. If the card looks like a web design, the format dies.

## Layout rules

- **Card** centered on canvas, ~960px wide, content-driven height (often portrait)
- **Padding inside card:** ~48–60px on all sides
- **Background outside the card:** dark or neutral, so the paper pops
- **Optional torn/folded edge** for extra realism
- **Optional bottom CTA pill** in canvas margin below the card

## Writing the report card

- **Institution name:** ICP-coded, sounds plausible — `PI Firm Performance Review Board`, `Agency Operations Audit Council`
- **Subject rows (5–7):** each row uses ICP vocabulary, has a grade, has a one-line comment
- **Teacher comment:** 2–4 lines, italic, named author at the end
- **Recommended next step:** functions as the CTA — names the offer or the destination

## Style Catalog

3 starter layouts. Each is a standalone HTML template in [templates/](templates/). Copy, edit institution/subjects/grades, render.

| # | Name | Template | Layout | Key Element |
|---|---|---|---|---|
| 1 | Failing Grades · Current Setup | [style-01-failing-grades-current.html](templates/style-01-failing-grades-current.html) | Cream paper card · serif crest · 7-row grade table · two signatures · RE-EXAMINE stamp | Letter grades on ICP-vocab subjects with one-line comments |
| 2 | Side-by-Side Comparison | [style-02-side-by-side-comparison.html](templates/style-02-side-by-side-comparison.html) | Tri-column grid · Their Stack vs Our System grades · term GPA row · SWITCH RECOMMENDED stamp | Comparison column converts grading into an argument |
| 3 | Failing · Stamp Bold | [style-03-failing-stamp-bold.html](templates/style-03-failing-stamp-bold.html) | Tilted card · oversized FAIL stamp at 8° · cumulative GPA strip · red examiner note | Single dominant grade-stamp moment |

**These are not the only styles.** Invent new layouts. Combine elements. The catalog grows as new concepts prove out in testing.

## QC checklist

- [ ] **Report card authenticity:** looks like a printed report card, not a web component
- [ ] **Paper aesthetic:** cream/textured background, serif headlines, subtle noise/grain
- [ ] **Header complete:** institution name, term, optional crest
- [ ] **Student row:** name field names the ICP
- [ ] **Subjects are ICP vocabulary:** specific to this buyer's world
- [ ] **Letter grades:** A/B/C/D/F, not percentages
- [ ] **Comparison column:** if used, side-by-side grades land the argument
- [ ] **Teacher's comment present:** italic, named, ~2–4 lines
- [ ] **Signature + stamp:** authority signals at the bottom
- [ ] **ICP present:** student field AND at least one other placement
- [ ] **CTA feels native:** "Recommended next step" row, stamp, or post-frame pill — never overlay button
- [ ] **Thumbnail test:** at 400px, can you read the institution + at least 2 graded subjects?
- [ ] **No branding:** no real school names, no real personal names
- [ ] **CSS rendering:** no overflow, broken table, missing signature
- [ ] **Scroll-stop:** does the paper card read as a photographed document at 2am?

If any check fails → fix the HTML and re-render.

## Workflow

1. **Read `campaigns/{slug}/ads/{ad-name}/COPY.md`** — institution name, subject rows, grades, teacher comment should be in there.
2. **Pick the angle.** Grading the buyer's current setup? Grading the competitor? Decide before writing subjects.
3. **Write subject rows using ICP vocabulary verbatim** from `CAMPAIGN.md`.
4. **Assign grades.** Be specific (`F`, `D-`, `C`) — vague is forgettable.
5. **Write the teacher comment.** 2–4 italic lines. Name the examiner.
6. **Create the ad folder if needed.**
7. **Compose the HTML** at `images/{ad-name}.html`. Paper-card chrome, table, signature SVG, stamp SVG.
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
