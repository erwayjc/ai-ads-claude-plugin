---
name: native-parking-ticket-designer
description: Builds ads that look like a parking ticket / civic violation notice — violation header, infraction details, fine amount, remedy section. The format reads as an institutional warning the buyer can't ignore. No templates; every ticket composed from scratch.
---

# Native Parking Ticket Designer

**Production method:** HTML/CSS + Playwright → see [../shared/HTML-RENDER-REFERENCE.md](../shared/HTML-RENDER-REFERENCE.md)
**Default output size:** 1080×1080 (square)

You build ads that look like a parking ticket or civic-violation notice. The format implies *you've already been caught* — there's no opt-out, only a remedy. Especially powerful for naming a pattern the buyer is currently committing (overpaying for ads, missing leads, breaking their own SLAs) and offering the fix as the "remedy" line.

This is one of the `native-format-*` lanes. See [native-tweet-designer](../native-tweet-designer/SKILL.md) for lane overview.

## The cardinal rule

**The ticket must feel issued, not designed.** Pre-printed form fields, hand-stamped check-marks, an officer's signature, a fine amount in bold — all the elements that signal *this is a document, not a marketing piece.*

No templates. Every ticket is composed from scratch.

## ICP callout — mandatory

The ICP appears inside the ticket. **At least two of these placements:**

- **"Issued to" / Cited party** field — names the ICP — e.g. `Issued to: PI Firm Owners`
- **Issuing authority** at the top — e.g. `Performance Marketing Compliance Bureau`
- **Violation description** — uses ICP vocabulary verbatim
- **Officer's printed name** at the bottom — ICP-coded title

## CTA — must feel native to the format

The CTA is one of:

- **The "Remedy" or "How to resolve" section** at the bottom of the ticket — *"To clear this citation, schedule a 30-min walkthrough at: walkthrough.example.com. Compliance: 14-day window."*
- A **"Hearing date" or "Appearance required" line** styled as institutional language
- A **post-frame accent pill** below the ticket, brand color, ≤ 4 words ending in `→`, pulled from `COPY.md`

Never overlay a modern button on the ticket.

## UI elements — required

- **Carbon-paper aesthetic:** pale yellow / cream / pink background — looks like a triplicate form
- **Header block:**
  - Issuing authority name (all-caps, letterspaced, sans-serif or condensed serif)
  - Logo/seal SVG (corner)
  - Ticket / Citation number (top-right, monospace)
  - Date / time of issue
- **Pre-printed form fields:**
  - "Issued to:" field with the ICP filled in (printed or handwritten-style)
  - "Location:" field — plausible context (`Your firm's intake pipeline`)
  - "Vehicle / Subject:" field — domain-mapped (`Marketing operations · 2026 Q2`)
- **Violation section:**
  - "Violation Code" with a plausible-looking alphanumeric (`§ 4.27-B`)
  - "Description of Violation" — 1–3 lines in ICP vocabulary
  - "Witnesses / Evidence" — small print
- **Fine amount:** stamped, large, accent color (red or red-orange) — e.g. `FINE: $47,800/YR`
- **Remedy / Resolution section** at the bottom: "To resolve this citation…" — this is where the CTA lives
- **Officer signature + printed name + badge number** at the bottom
- **Optional rubber stamps:** "CITED", "UNPAID", "PRIORITY" — rotated -6° to -8°

## Design principles

### Principle #1: The fine amount is the visceral hook

A ticket without a dollar amount is a warning. A ticket with `FINE: $47,800/YR` stamped in red is a *bill*. The fine should equal the cost of the pain the offer resolves.

### Principle #2: Use civic / institutional language

"Citation issued for", "Violation Code", "Subject is hereby notified that…", "Required appearance", "Compliance deadline." Avoid marketing voice entirely inside the ticket. Even the remedy section uses bureaucratic phrasing — *"To resolve this citation, schedule a walkthrough at…"*

### Principle #3: Pre-printed + filled-in is the format

Real tickets have pre-printed labels (in a different font, often serif/all-caps) and filled-in values (in a different font, often handwritten-style or typewriter). Mimicking that contrast sells the realism — use a handwriting font (Caveat, Patrick Hand) or a typewriter font (Courier Prime, Special Elite) for filled-in values.

### Principle #4: Stamp + signature land the authority

A signed-and-stamped ticket reads as *issued*. The stamp (CITED, UNPAID) is your accent moment. The signature is hand-drawn SVG.

### Principle #5: Carbon-paper aesthetic, not screen aesthetic

Pale colored background with slight grain, pre-perforated edge (optional), serial number monospace at top-right, faint grid lines on form fields. If it looks like a modern web form, the format dies.

## Layout rules

- **Ticket** centered on canvas, ~880–960px wide, content-driven height (portrait-leaning)
- **Padding inside ticket:** ~36–48px
- **Background outside the ticket:** dark or neutral so the paper pops
- **Optional torn/perforated edge** on the left or top
- **Optional bottom CTA pill** in canvas margin below the ticket

## Writing the ticket

- **Issuing authority:** ICP-coded plausibly — `Performance Marketing Compliance Bureau`, `Personal Injury Firm Audit Office`
- **Violation description:** 1–3 lines in civic voice, ICP language verbatim — *"Subject is hereby cited for operating an outbound-lead pipeline without a corresponding intake response system, in violation of the implied standard of care."*
- **Fine:** dollar amount that equals the cost of the pain
- **Remedy:** the CTA in civic voice
- **Officer name + badge:** ICP-coded title

## Style Catalog

3 starter layouts. Each is a standalone HTML template in [templates/](templates/). Copy, edit authority/violation/fine/remedy, render.

| # | Name | Template | Layout | Key Element |
|---|---|---|---|---|
| 1 | Pink Carbon Citation | [style-01-pink-carbon-citation.html](templates/style-01-pink-carbon-citation.html) | Pale-pink carbon paper · perforated edge · serial top-right · CITED stamp -8° | Fine strip in red/yellow on black — "$47,800/YR" anchor |
| 2 | Yellow Triplicate · Checkbox Violations | [style-02-yellow-triplicate.html](templates/style-02-yellow-triplicate.html) | Yellow carbon · circular badge · checkbox violation grid · UNPAID stamp | Hand-checked violation boxes read as officer-filled |
| 3 | Windshield Shot · Photographed | [style-03-windshield-shot.html](templates/style-03-windshield-shot.html) | Tilted ticket under metal wiper · dark windshield gradient · CITED stamp +8° · caveat note + pill below | Format becomes a found photo, not a document |

**These are not the only styles.** Invent new layouts. Combine elements. The catalog grows as new concepts prove out in testing.

## QC checklist

- [ ] **Ticket authenticity:** looks like a real citation form
- [ ] **Carbon-paper aesthetic:** pale color, slight grain, serial number top-right
- [ ] **Header complete:** authority, seal/logo, ticket number, date
- [ ] **Form fields:** pre-printed labels + filled-in values in contrasting fonts
- [ ] **Violation code:** plausible alphanumeric (`§ 4.27-B`)
- [ ] **Violation description:** civic voice, ICP language verbatim
- [ ] **Fine amount visible:** large, stamped, accent color — equals the pain
- [ ] **Remedy section:** at the bottom, civic voice, contains the CTA
- [ ] **Signature + stamp:** authority signals at the bottom
- [ ] **ICP present:** issued-to field AND at least one other placement
- [ ] **CTA feels native:** "To resolve this citation…" or post-frame pill — never overlay button
- [ ] **Thumbnail test:** at 400px, can you read the violation description AND the fine?
- [ ] **No branding:** no real government agencies, no real personal names, no real badge numbers
- [ ] **CSS rendering:** no overflow, broken form fields, missing stamp
- [ ] **Scroll-stop:** does the ticket-on-canvas read as a photographed document at 2am?

If any check fails → fix the HTML and re-render.

## Workflow

1. **Read `campaigns/{slug}/ads/{ad-name}/COPY.md`** — authority, violation description, fine, remedy should be in there.
2. **Decide the violation.** What is the buyer "guilty" of? Use ICP language to name the pattern.
3. **Set the fine.** Equals the cost of the pain.
4. **Write the remedy in civic voice.** This is your CTA.
5. **Create the ad folder if needed.**
6. **Compose the HTML** at `images/{ad-name}.html`. Carbon-paper aesthetic, pre-printed labels in serif/sans + filled-in values in a typewriter or handwriting font, signature SVG, stamp SVG.
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
