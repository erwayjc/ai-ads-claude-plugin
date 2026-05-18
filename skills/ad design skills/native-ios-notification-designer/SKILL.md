---
name: native-ios-notification-designer
description: Builds ads that look like an iOS lock-screen with stacked notification cards — app icons, titles, body previews, timestamps. The marketing message lands as a "ding" the viewer feels they almost missed. No templates; every notification stack composed from scratch.
---

# Native iOS Notification Designer

**Production method:** HTML/CSS + Playwright → see [../shared/HTML-RENDER-REFERENCE.md](../shared/HTML-RENDER-REFERENCE.md)
**Default output size:** 1080×1080 (square)

You build ads that look like an iOS lock screen. The viewer's eye is trained to scan notification cards instantly — that reflex is the scroll-stop. The marketing message sits in one of the cards and is absorbed before the brain flags "ad."

This is one of the `native-format-*` lanes in this repo. See [native-tweet-designer](../native-tweet-designer/SKILL.md) for the lane overview.

## The cardinal rule

**It must pass for a real iOS lock screen at first glance.** Wrong corner radius, wrong app-icon shape, wrong time format, wrong notification grouping — any of these break the spell. Reference the real iOS UI before shipping.

No templates. Every notification stack is composed from scratch.

## ICP callout — mandatory

The ICP appears inside the notification stack itself. **At least two of these placements:**

- **App name** in a notification — e.g. *PI Firm Tracker*, *Agency Stripe*, *Founder Mode*
- **Notification title** — e.g. *New PI lead from Google Ads*
- **Body preview text** — quotes ICP language verbatim
- **Group header** — e.g. *3 new from PI Firm Tracker*

## CTA — must feel native to the format

The CTA is a notification, not a button. Common patterns:

- A **final notification card** is the CTA — *"Walkthrough · 30 min · Tap to schedule"*
- A **post-frame accent pill** below the phone outline, brand color, ≤ 4 words ending in `→`, pulled from `COPY.md`
- An **action prompt inside a card** — *"Slide to view"* / *"Tap to respond"*

Never overlay a "Click here" button on the lock screen — kills the realism.

## UI elements — required

- **Phone frame** centered, rounded corners (~64px radius), bezel
- **Top status bar:** time large (left side, ~96–112px font, SF Pro–like), date below time, signal/wifi/battery (right side, small icons)
- **Notification stack:** 2–5 cards, slightly rounded (~22px radius), translucent/blurred background suggested via solid muted color, vertical spacing ~14–18px
- **Per-card elements:** square rounded app icon (~64px), app name (small uppercase muted), timestamp ("now" / "9m ago"), title (bold), body (1–2 lines), optional unread badge
- **Stacked-group affordance** when multiple from same app: *"3 more from PI Firm Tracker"*

## Design principles

### Principle #1: Time and date set the mood

`2:47 AM` reads as 3am-doomscroll. `9:14 AM` reads as morning planning. `Friday, March 22` reads as end-of-week. Pick the time/date to amplify the emotion of the lead notification.

### Principle #2: The first notification is the hook

The top card carries the headline message. The cards below add texture, social proof, or a CTA. The viewer's eye lands on the top card first — make it count.

### Principle #3: Build a narrative through the stack

5 random notifications read as noise. Notifications that *tell a story* (lead came in → got responded to → demo booked) read as a glimpse into the buyer's future. Compose the stack as a mini arc.

### Principle #4: Plausible app names only

`PI Firm Tracker`, `Agency Stripe`, `Founder Mode` — sound real. `Marketing Genius Pro`, `Lead Generator 9000` — sound fake. Real apps have boring names.

### Principle #5: Match iOS visual language

System font (SF Pro / fallback to -apple-system), correct corner radii, correct icon shape (rounded square ~22% radius), correct status bar typography. Pixel-faithful.

## Layout rules

- **Phone frame:** ~720–800px wide, ~1000–1020px tall, centered on canvas
- **Background outside the frame:** soft brand color, gradient, or a subtle "wallpaper" suggesting the buyer's life
- **Lock-screen wallpaper inside the frame** behind notifications: muted color or gradient — never busy
- **Optional bottom CTA pill** sits in the canvas margin below the frame

## Writing the notifications

- Each title ≤ 7 words. Each body ≤ 14 words.
- Vary length card-to-card — real notifications mix short alerts with previewed messages
- Timestamps should be plausible relative to each other (`now`, `2m ago`, `8m ago`, `today 9:04 AM`)
- Use ICP vocabulary verbatim from `CAMPAIGN.md` in titles and bodies
- Number of cards: 3 minimum (story arc needs room), 5 maximum (more = noisy at thumbnail)

## Style Catalog

Starter templates in [templates/](templates/). Each is a self-contained 1080×1080 HTML file rendering an iOS lock screen — phone frame with notch, status bar, large lock-screen time/date, and a stacked notification arc. The final notification card carries the CTA; an accent pill sits below the phone. Copy, edit time/date / app names / notification copy, render.

| # | Name | Template | Layout | Key Element |
|---|---|---|---|---|
| 1 | Lead Story Stack | [style-01-lead-story-stack.html](templates/style-01-lead-story-stack.html) | 2:47 AM lock screen, 4 cards traversing lead → retainer → callback → CTA | Stack tells a 30-second buyer-success arc in 4 dings |
| 2 | Morning Revenue Wins | [style-02-morning-revenue-wins.html](templates/style-02-morning-revenue-wins.html) | 9:14 AM bright wallpaper, 4 cards: payments + Slack wins + calendar + cohort CTA | Time/date set "great Friday morning" mood; CTA card lands as the next ding |
| 3 | Late-Night SaaS Arc | [style-03-late-night-saas-arc.html](templates/style-03-late-night-saas-arc.html) | 2:14 AM doomscroll wallpaper, 4 cards: alert → churn → team DM → audit CTA | Crisis arc — alerts stack into the offer; CTA reads as relief, not pitch |

**These are not the only styles.** Invent new layouts. Combine elements. The catalog grows as new concepts prove out in testing.

## QC checklist

- [ ] **Lock-screen authenticity:** looks like real iOS at a glance
- [ ] **Status bar correct:** time/date/wifi/battery positioned and styled accurately
- [ ] **Card geometry:** corner radii, padding, app-icon shape match iOS
- [ ] **Narrative arc:** the stack tells a story top → bottom, not random noise
- [ ] **ICP present:** in app names AND at least one body preview
- [ ] **Plausible app names:** sounds real, not "MarketingGenius Pro"
- [ ] **Plausible timestamps:** internally consistent ("now" then "2m" then "today 9:04 AM")
- [ ] **CTA feels native:** final-card prompt or post-frame accent pill, never an overlay button
- [ ] **Thumbnail test:** at 400px, can you read the top notification AND identify the ICP?
- [ ] **No branding:** no real app names, no real logos, no personal names
- [ ] **CSS rendering:** no overflow, clipping, broken icons
- [ ] **Scroll-stop:** does the phone-on-background read as a real lock-screen screenshot at 2am?

If any check fails → fix the HTML and re-render.

## Workflow

1. **Read `campaigns/{slug}/ads/{ad-name}/COPY.md`** — the notification titles + bodies should be in there.
2. **Pick the time/date** to set emotional context. Pick app names that name the ICP.
3. **Compose the stack as a story** — top card is the hook, bottom card carries the CTA or proof.
4. **Create the ad folder if needed:** `campaigns/{slug}/ads/{ad-name}/images/`.
5. **Compose the HTML** at `images/{ad-name}.html`. Build the phone frame, status bar, lock-screen wallpaper, notification cards. Embed all app icons as inline SVG / base64.
6. **Render the PNG:**
   ```bash
   node skills/shared/render-static.js \
     campaigns/{slug}/ads/{ad-name}/images/{ad-name}.html \
     campaigns/{slug}/ads/{ad-name}/images/
   ```
7. **Seed COPY** if needed. Clean up extraction quirks.
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
