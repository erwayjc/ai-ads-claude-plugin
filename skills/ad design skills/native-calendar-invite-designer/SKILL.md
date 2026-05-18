---
name: native-calendar-invite-designer
description: Builds ads that look like a real calendar event detail view — Google Calendar or iOS Calendar — with title, date/time, location, guests, description, and Yes/Maybe/No RSVP buttons. The viewer reads it as a meeting already on their calendar; the RSVP buttons are literally the CTA. No templates; every event card composed from scratch.
---

# Native Calendar Invite Designer

**Production method:** HTML/CSS + Playwright → see [../shared/HTML-RENDER-REFERENCE.md](../shared/HTML-RENDER-REFERENCE.md)
**Default output size:** 1080×1080 (square)

You build ads that look like an event detail card pulled straight out of Google Calendar or the iOS Calendar app. The scroll-stop is **calendar reflex** — the viewer's brain registers "I have a meeting" before it registers "ad," and the eye is already hunting for date, time, and the green Yes button. The marketing message lands inside the description block as if a colleague just invited you.

This is one of the `native-format-*` lanes in this repo:

| Lane | Beat | Skill |
|---|---|---|
| Pure typography | bold-text-designer |
| Name the pain → resolve | problem-solution-designer |
| Diagram IS the ad | system-visual-designer |
| Peers talking | chat-style-designer |
| Looks like a real tweet/X post | native-tweet-designer |
| **Looks like a calendar event already on your schedule** | **native-calendar-invite-designer** (this skill) |

Reach here when the offer is a call, walkthrough, demo, audit, or live event — anything where "putting it on the calendar" is the conversion. The format collapses the funnel: the ad *is* the invite, and tapping Yes *is* the click. Calendar events also carry implicit social authority (someone scheduled this with me) and urgency (it has a specific time).

## The cardinal rule

**It must pass for a real calendar event at first glance.** Wrong header chrome, wrong RSVP pill colors, wrong date row format, wrong avatar treatment in the guests list — any of these break the spell. Reference the real Google Calendar / iOS Calendar UI and match it. The viewer's instinct must say "meeting invite" in 0.3 seconds.

No templates. Every event card is composed from scratch.

## ICP callout — mandatory

The ICP must appear inside the event card itself. **At least two of these placements:**

- **Event title** — e.g. *PI Firm Intake Walkthrough*, *Agency Owner: 30-min audit*, *Founder ↔ Joel — pricing review*
- **Organizer name / email** — e.g. *Joel · The Webinar Agency · joel@…* with calendar labeled *PI Firm Growth*
- **Description block** — the ICP's pain or outcome in their own words (this is where the longer message sits)
- **Guests list** — invitee names/emails that read as people in the ICP's world (*marcus@ptinjurytx.com*, *sarah · Agency Ops*)
- **Calendar / color-stripe label** — the calendar this event is on, e.g. *"PI Firm Growth"*, *"Agency Owner Sprint"*

The event title is the floor. Never publish a calendar-invite ad without an ICP-bearing title.

## CTA — must feel native to the format

The format hands you the CTA for free: **RSVP buttons.** The green Yes pill is the click — that's the magic of this skill. Common patterns:

- **Yes / Maybe / No RSVP pills** at the bottom of the card — green / yellow / red — Yes is visually emphasized (slightly larger, brighter, or pre-hover state)
- **A description-block closing line** that names the destination: *"Reply Yes to confirm — I'll send the Meet link."*
- **A post-frame accent pill** below the event card, brand color, ≤ 4 words ending in `→`, pulled verbatim from `COPY.md` — this is the explicit fallback click

Never overlay a generic "Click here" button on the event card — it kills the realism instantly. The Yes button does that job natively.

CTA copy comes from `COPY.md` — see [../shared/HTML-RENDER-REFERENCE.md § CTA is required](../shared/HTML-RENDER-REFERENCE.md).

## UI elements — required

Pick **Mode A (Google Calendar)** or **Mode B (iOS Calendar)** at the start. Don't mix.

### Mode A — Google Calendar event view

- **Top header bar:** back arrow (left), edit pencil + more-menu 3-dots (right), white/light background, ~88px tall
- **Color stripe** down the left edge of the card (or a thick left border on the title block) matching the calendar color — this is also the accent color anchor
- **Event title** — bold, ~44–56px, top of the body
- **Date / time row** — calendar emoji or icon + `Thursday, March 14 · 2:00 – 2:30 PM` — ~30–34px
- **Repeat / time-zone subline** — small, muted, e.g. *Does not repeat · America/Chicago*
- **Location row** — map-pin icon + Google Meet link / Zoom link / address — styled to look clickable (link-blue underline or chip)
- **Description block** — ~28–32px, 3–6 lines, the main message body where ICP pain/offer lives
- **Guests list:**
  - Organizer row first: avatar circle + name + email + *Organizer* label
  - 2–4 other guests: avatar + name + RSVP status icon (green ✓ accepted, yellow ? maybe, red ✕ declined, gray for no response)
  - Optional *+X others* row
- **RSVP buttons** at the bottom: **Yes · Maybe · No** as colored pills (green / yellow / red), Yes visually emphasized
- **Optional reminder line:** 🔔 30 min before

### Mode B — iOS Calendar event view

- **iOS status bar** at top — time (left, SF Pro–like), signal/wifi/battery (right)
- **Top nav row** — `< Inbox` or `< Day` back link (left, blue), `Edit` (right, blue)
- **Event title** — huge, bold, top of card, ~52–64px
- **Calendar color dot** next to title or in a labeled row — small filled circle + calendar name
- **Date / time card** — iOS-style grouped row block with rounded corners (~14px radius), light gray separators, *Starts* / *Ends* rows or a single `Thu Mar 14, 2:00 PM – 2:30 PM` row
- **Location row** with map preview thumbnail (rounded rectangle, muted gradient or inline-SVG map stub)
- **Notes / description section** — labeled *Notes*, body text below
- **Invitees rows** — name + RSVP status, iOS chevron disclosure
- **Alert / repeat / show-as rows** — grouped iOS list with chevrons
- **Accept / Maybe / Decline segmented control** at the bottom (or as a sticky footer), iOS-style — green Accept emphasized

Either mode: **the RSVP buttons are the in-format CTA.** That's the format's gift — design around it.

## Design principles

### Principle #1: The Yes button is the ad's center of gravity

Everything else — title, date, description, guests — exists to make the viewer want to tap Yes. Compose the whole card so the eye finishes on that green pill. Give it a touch more weight than Maybe / No (slightly larger, more saturated, or a soft glow / shadow). Don't be subtle about it.

### Principle #2: Time and date set the urgency

`Thu 2:00 PM` reads as "this week, soon." `Tomorrow · 9:00 AM` reads as imminent. `Friday Mar 22 · 4:30 PM` reads as a structured end-of-week slot. Pick the date/time to match the offer's urgency. Walkthrough next week beats walkthrough in three months — calendars compress.

### Principle #3: The description is where the message lives

The title hooks attention; the description carries the pitch. 3–6 lines of ICP language, ending with a closing line that points to Yes. Write it like a real organizer would — first person, plain language, no marketing voice. *"I'll walk you through the intake system I built for PI firms doing 30–80 cases/mo. Bring one bottleneck. 30 minutes."* — sells more than any headline could.

### Principle #4: The guests list is silent social proof

Show 2–4 invitees whose names/emails place them inside the ICP's world. Mix RSVP statuses — at least one green ✓ accepted (someone else already said Yes) and one yellow ? maybe. A guest list of all-accepted reads as scripted; a list with realistic variation reads as a real meeting.

### Principle #5: Match the platform exactly

Google Calendar and iOS Calendar look very different — pick one and commit. Wrong chrome, wrong font, wrong button shape, wrong icon weights all break the illusion. Google = Roboto / Google Sans, white surfaces, Material-ish chips. iOS = SF Pro, grouped rounded rows, light/dark mode, blue link color (#007AFF). Pixel-faithful.

## Layout rules

- **Event card** centered on the 1080×1080 canvas: ~960px wide for Google mode (with header chrome above it), or full-bleed phone-frame for iOS mode (~720–800px wide phone, ~1000px tall)
- **Padding inside the card** ~36–48px (Google) / iOS standard insets (16–20px logical, scaled up)
- **Background outside the card / frame:** soft neutral or brand accent — sells the "screenshot" feel
- **RSVP pills** sit at the bottom with comfortable padding — minimum ~80px tall for legibility at thumbnail
- **Optional post-frame accent CTA pill** sits in the canvas margin below the frame

## Writing the event

- **Title:** 3–7 words. Names the ICP and what the meeting is. *PI Firm Intake Walkthrough · Joel*. No marketing language.
- **Date / time:** specific day + window, not "TBD." Half-hour windows read most plausibly for a walkthrough/audit.
- **Location:** Google Meet link styled as a chip *(meet.google.com/abc-defg-hij)*, Zoom link, or a physical address. Never blank.
- **Description:** 3–6 lines, first person, plain. Lead with the ICP outcome, end with a line that points at Yes / Accept. ICP vocabulary verbatim from `CAMPAIGN.md`.
- **Guests:** 2–4 plausible names + emails that sit inside the ICP's world. Vary RSVP status.
- **Organizer:** name + email + calendar label. The organizer name + calendar name are prime ICP placements.
- **No emoji storms** in the title — one calendar emoji in the date row is enough.

## Style Catalog

3 starter layouts. Each is a standalone HTML template in [templates/](templates/). Copy, edit title / time / description / guests / RSVP colors, render.

| # | Name | Template | Layout | Key Element |
|---|---|---|---|---|
| 1 | Google Calendar | [style-01-google-calendar.html](templates/style-01-google-calendar.html) | Material event card + Meet chip + guests + Yes/Maybe/No pills | Classic Google invite — green Yes button is the click |
| 2 | iOS Calendar | [style-02-ios-calendar.html](templates/style-02-ios-calendar.html) | iPhone frame + grouped rounded rows + map + Accept segmented control | iOS-native invite — Accept emphasized at footer |
| 3 | Week View Spotlight | [style-03-week-view-spotlight.html](templates/style-03-week-view-spotlight.html) | Week grid + popup over a single event card | Event highlighted inside a real weekly schedule |

**These are not the only styles.** Invent new layouts. Combine elements. The catalog grows as new concepts prove out in testing.

## QC checklist

- [ ] **Calendar authenticity:** at a glance, does it look like a real Google Calendar or iOS Calendar event?
- [ ] **Single mode:** Google OR iOS — not a hybrid
- [ ] **UI accuracy:** header chrome, date row, location row, guests list, RSVP buttons all positioned and styled to match the chosen platform
- [ ] **RSVP buttons present and Yes is emphasized:** the green pill is visually the strongest action on the card
- [ ] **ICP present:** in the event title AND at least one other place (organizer, description, guests, calendar label)
- [ ] **Description carries the pitch:** 3–6 lines of ICP language, first-person, ending with a line that points at Yes
- [ ] **Guests list realistic:** 2–4 invitees, mixed RSVP statuses, names/emails fit the ICP world
- [ ] **Plausible date/time:** specific day + window, urgency matches the offer
- [ ] **CTA feels native:** RSVP buttons do the work; optional post-frame accent pill outside the frame is fine; no overlay button on the card
- [ ] **No real brands or people:** no real Meet/Zoom IDs that resolve, no real personal names, no real company logos
- [ ] **Thumbnail test:** at 400px, can you read the event title AND identify the ICP AND see the green Yes pill?
- [ ] **CSS rendering:** no overflow, clipping, missing icons, broken avatars
- [ ] **Scroll-stop:** would the shape of this image (event card on neutral background) read as a screenshot of an invite the viewer just received?

If any check fails → fix the HTML and re-render.

## Workflow

**Hierarchy: Ad → Copy → Images.**

1. **Read `campaigns/{slug}/ads/{ad-name}/COPY.md` first** — the event title + description + closing CTA line should be in there.
2. **Pick Google Calendar OR iOS Calendar mode.** Decide based on the campaign's audience (Google = workplace / general SaaS; iOS = consumer / mobile-first / founder-personal). Don't mix.
3. **Cast the organizer and guests.** Pick an organizer name + email + calendar label that name the ICP. Pick 2–4 guest names/emails that live inside the ICP's world. Decide their RSVP statuses (at least one accepted, one maybe).
4. **Pick the date/time** to match the offer's urgency. Pick a plausible location (Meet/Zoom/address).
5. **Create the ad folder if it doesn't exist:** `campaigns/{slug}/ads/{ad-name}/images/`.
6. **Compose the HTML** at `campaigns/{slug}/ads/{ad-name}/images/{ad-name}.html`. Build the chosen platform's chrome faithfully — header bar (Google) or status bar + nav row (iOS), title, date/time, location, description, guests with avatars, RSVP buttons. Embed all avatars and icons as inline SVG / base64. No network fetches at render time; only Google Fonts via `@import` is allowed.
7. **Render the PNG:**
   ```bash
   node skills/shared/render-static.js \
     campaigns/{slug}/ads/{ad-name}/images/{ad-name}.html \
     campaigns/{slug}/ads/{ad-name}/images/
   ```
8. **Seed COPY** if it doesn't already exist: `node skills/shared/tools/backfill-copy.js` (or use the editor). Open `COPY.md` and clean up any auto-extraction quirks. Just the verbatim event title + description + RSVP/closing line — no interpretive sections.
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
