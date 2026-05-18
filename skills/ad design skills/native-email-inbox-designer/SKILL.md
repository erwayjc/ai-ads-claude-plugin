---
name: native-email-inbox-designer
description: Builds ads that look like an email inbox view — sender, subject, preview snippet, unread dot, timestamp. The marketing message sits in one row of an otherwise-mundane inbox. No templates; every inbox composed from scratch.
---

# Native Email Inbox Designer

**Production method:** HTML/CSS + Playwright → see [../shared/HTML-RENDER-REFERENCE.md](../shared/HTML-RENDER-REFERENCE.md)
**Default output size:** 1080×1080 (square)

You build ads that look like an inbox view — Gmail, Apple Mail, Outlook. The viewer scans rows out of trained reflex; one row carries the marketing message. Format recognition is the scroll-stop.

This is one of the `native-format-*` lanes. See [native-tweet-designer](../native-tweet-designer/SKILL.md) for lane overview.

## The cardinal rule

**The inbox must look real.** Wrong row spacing, wrong sender truncation, wrong unread-dot placement, fake-looking subject lines — any of these break the spell. Reference the real app.

No templates. Every inbox is composed from scratch.

## ICP callout — mandatory

The ICP appears inside the inbox itself. **At least two of these placements:**

- **Sender name** of the highlighted row — e.g. `PI Firm Network`, `Agency Owners Slack Digest`
- **Subject line** — quotes ICP language verbatim
- **Folder header above the list** — e.g. `Inbox · PI Firm`
- **Surrounding rows** that signal context (e.g. `Stripe`, `Calendly`, `Linear` for a SaaS founder ICP)

## CTA — must feel native to the format

The CTA is one of:

- **The highlighted row IS the CTA** — subject + preview together form the next step (*"Walkthrough scheduled — 30 min · Tap to confirm"*)
- A **post-frame accent pill** below the inbox, brand color, ≤ 4 words ending in `→`, pulled from `COPY.md`
- A **read-pane preview** below the list showing the opened CTA email (advanced layout)

Never overlay a "Click here" banner on the inbox.

## UI elements — required

- **App chrome:** title bar with `Inbox` + unread count, search bar (optional), folder breadcrumb
- **Row structure per email:**
  - Unread dot (left, accent color) for unread rows
  - Sender name (bold ~32px, muted if read)
  - Timestamp (top-right, small)
  - Subject (bold)
  - Preview snippet (one line, muted, ellipsis-truncated)
  - Optional attachment paperclip icon
  - Optional star / flag
- **Rows:** 5–8 visible. One row is the **hero row** carrying the message — visually identical to siblings but with content that lands.
- **Hero row treatment:** the same styling as siblings — DO NOT highlight it with color. Recognition does the work.

## Design principles

### Principle #1: The hero row hides in plain sight

The whole point of the format is that the viewer's eye lands on the hero row *because they were scanning for the message*. If you highlight it with a colored bar, the format dies — it becomes a designed ad.

### Principle #2: Build a believable inbox around the hero

Surrounding rows must read as a real inbox for this ICP: `Stripe payment`, `Calendly invite`, `Linear notification` for a founder; `Court filing`, `Client intake`, `Westlaw alert` for a PI firm. Specific senders sell the realism.

### Principle #3: The subject line carries the headline

The subject is your headline. Treat it as such. ≤ 7 words. ICP language. Visceral if possible.

### Principle #4: The preview snippet seals the deal

The one-line preview is your subheadline. It teases the body the viewer doesn't see — *"3 firms left for May intake — your shortlist…"* The ellipsis is your friend.

### Principle #5: Match the platform

Pick Gmail OR Apple Mail OR Outlook. Each has different row geometry, fonts, and chrome. Don't hybridize.

## Layout rules

- **Inbox card / phone frame** centered on canvas, ~880–960px wide, content-driven height
- **Row height** ~96–120px depending on platform — tight enough that 6+ rows fit at thumbnail
- **Hero row position:** typically row 2 or 3 (top draws eye but feels obvious; deeper feels accidental). Middle is the sweet spot.
- **Background:** the app's native chrome color (Gmail white, Apple Mail light, Outlook varies)
- **Optional bottom CTA pill** in canvas margin below the frame

## Writing the inbox

- **Hero row sender:** named entity that names the ICP — `PI Firm Growth Network`
- **Hero row subject:** ≤ 7 words, ICP language, visceral or curiosity-piquing
- **Hero row preview:** ≤ 16 words, teases content — end with `…`
- **Sibling rows:** plausible senders + plausible subjects for this ICP's life
- **Timestamps:** mostly `9:14 AM`-style for today's rows; mix in `Yesterday`, `Mar 14`, etc. for older

## Style Catalog

3 starter layouts. Each is a standalone HTML template in [templates/](templates/). Copy, edit senders/subjects/previews, render.

| # | Name | Template | Layout | Key Element |
|---|---|---|---|---|
| 1 | Gmail List | [style-01-gmail-list.html](templates/style-01-gmail-list.html) | Gmail web inbox, 7 rows, hero row in position 2 | ICP context senders (Westlaw, Filevine) sell the realism |
| 2 | Apple Mail List | [style-02-apple-mail-list.html](templates/style-02-apple-mail-list.html) | iOS Mail mobile inbox, blue unread dots, bottom tab bar | Hero subject hides among Stripe / Linear / Vercel rows |
| 3 | Outlook Read Pane | [style-03-outlook-readpane.html](templates/style-03-outlook-readpane.html) | Outlook 2-column layout, hero email open in read pane | Reply-MAY block is the CTA inside the open message |

**These are not the only styles.** Invent new layouts. Combine elements. The catalog grows as new concepts prove out in testing.

## QC checklist

- [ ] **Inbox authenticity:** looks like the real email app at a glance
- [ ] **Platform consistency:** entirely Gmail OR Apple Mail OR Outlook — not hybridized
- [ ] **Row geometry:** spacing, fonts, unread dots match the platform
- [ ] **Hero row blends:** no colored highlight pulling the eye unnaturally
- [ ] **Surrounding rows believable:** named senders that fit the ICP's real life
- [ ] **ICP present:** hero sender AND at least one other placement
- [ ] **Subject lands:** ≤ 7 words, ICP voice
- [ ] **Preview teases:** ≤ 16 words, ends with `…`
- [ ] **Plausible timestamps:** mix of today / yesterday / older
- [ ] **CTA feels native:** hero row IS the CTA, or post-frame accent pill — never an overlay button
- [ ] **Thumbnail test:** at 400px, can you read the hero subject AND identify the ICP?
- [ ] **No branding:** no real company names that would be litigious
- [ ] **CSS rendering:** no overflow, broken row geometry, missing icons
- [ ] **Scroll-stop:** does the inbox read as a real screenshot at 2am?

If any check fails → fix the HTML and re-render.

## Workflow

1. **Read `campaigns/{slug}/ads/{ad-name}/COPY.md`** — hero row subject + preview should be in there.
2. **Pick the platform** (Gmail / Apple Mail / Outlook) — match it to the ICP's likely tooling.
3. **Build the believable inbox** — cast 5–8 senders that fit the ICP's real life. The hero row hides among them.
4. **Create the ad folder if needed.**
5. **Compose the HTML** at `images/{ad-name}.html`. Faithful chrome, faithful row geometry. No network fetches.
6. **Render the PNG:**
   ```bash
   node skills/shared/render-static.js \
     campaigns/{slug}/ads/{ad-name}/images/{ad-name}.html \
     campaigns/{slug}/ads/{ad-name}/images/
   ```
7. **Seed COPY** if needed.
8. **QC** against the checklist.

## Output

```
campaigns/{campaign-slug}/ads/{ad-name}/
  ├── COPY.md
  ├── copy.json
  └── images/
      ├── {ad-name}.html
      └── {ad-name}.png
```
