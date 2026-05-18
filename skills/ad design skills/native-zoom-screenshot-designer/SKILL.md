---
name: native-zoom-screenshot-designer
description: Builds ads that look like a real Zoom (or Google Meet) call screenshot — header bar, participant tiles, screen-share content, chat panel, and the familiar bottom toolbar. The scroll-stop is format recognition; the viewer reads "I'm peeking into a real client call" before realizing it's an ad. No templates; every call composed from scratch.
---

# Native Zoom Screenshot Designer

**Production method:** HTML/CSS + Playwright → see [../shared/HTML-RENDER-REFERENCE.md](../shared/HTML-RENDER-REFERENCE.md)
**Default output size:** 1080×1080 (square)

You build ads that don't look like ads. The viewer reads a Zoom call frame — meeting title, faces in tiles, a chart on screen-share, a chat message in the corner — and instinctively absorbs it as a candid moment from someone's workday before realizing the message is for them. The scroll-stop mechanism is **format recognition** — the brain registers "video call" before it registers "ad."

This is one of the `native-format-*` lanes in this repo:

| Lane | Beat | Skill |
|---|---|---|
| Pure typography | bold-text-designer |
| Name the pain → resolve | problem-solution-designer |
| Diagram IS the ad | system-visual-designer |
| Peers talking | chat-style-designer |
| **Looks like a real Zoom / Meet call screenshot** | **native-zoom-screenshot-designer** (this skill) |

Reach here when the message lands harder as a stolen glimpse of a real meeting than as a designed billboard. A Zoom screenshot implies "this is happening right now," real people in real roles, real conversation. Great for: testimonial-as-frozen-moment, demo-in-progress, "the team running an operation," or pseudo-video proof where a real video would be expensive.

## The cardinal rule

**The format is the ad. If it doesn't pass for a real Zoom screenshot at first glance, it fails.**

The illusion breaks if any element looks "off" — wrong toolbar icons, wrong meeting-title position, missing recording indicator, participant tiles that don't read as faces-in-boxes, screen-share area without the green border, etc. Reference the real Zoom UI (or Meet, if going that route) and match it. The viewer's instinct must say "video call screenshot" in 0.3 seconds.

No templates. Every call is composed from scratch.

## ICP callout — mandatory

Same rule as every lane in this repo: the ICP must be on the canvas. In native-zoom ads the ICP shows up *inside* the format, not pinned outside it.

The ICP appears in **at least two of these places**:

- **Meeting title** in the top header bar — `Q2 Pipeline Review — PI Firm Growth`, `Intake Ops Sync · Smith & Associates`, `Agency Owners Mastermind — June Cohort`
- **Participant names** in the bottom-left of each tile — `Marcus · PI Firm PM`, `Sarah · Intake Lead`, `Dani / Agency Owner`
- **Screen-share content** — the dashboard / chart / slide on the shared screen names the ICP's metric or pain
- **Chat panel** — a visible message from a named ICP-role participant

The meeting title is the floor. Never publish a native-zoom ad without an ICP-bearing meeting title.

## CTA — must feel native to the format

A Zoom call's CTA is not a button overlay. It's one of:

- A **chat-panel message** with a casual link drop: *"here's the walkthrough link from earlier: /demo"*
- **Screen-share content** that itself carries the destination — e.g. a slide whose footer URL is the offer, or a dashboard whose annotation points to the next step
- A **post-frame accent pill** sitting in the canvas margin *below* the Zoom UI (outside the meeting window), brand-accent color, ≤ 4 words ending in `→` — pulled verbatim from the ad's `COPY.md`

The cleanest format keeps the CTA inside the chat panel or on the shared screen and adds an *optional* accent pill below the Zoom frame for the explicit click. **Never overlay a generic "Click here!" button on top of the Zoom UI** — it shatters the realism instantly.

CTA copy comes from `COPY.md` — see [../shared/HTML-RENDER-REFERENCE.md § CTA is required](../shared/HTML-RENDER-REFERENCE.md).

## UI elements — required

A native Zoom screenshot ad must include all of these, positioned correctly. Pick one of three layouts before you start:

- **Speaker view** — one large active-speaker tile + a thin strip of thumbnail tiles along the right or top
- **Gallery view** — equal-size grid of tiles (2×2, 2×3, or 3×3)
- **Screen-share view (recommended for ads)** — large screen-share content occupying the left/main area + a vertical strip of 3–6 participant thumbnails on the right

### Top header bar (Zoom chrome)
- **Meeting title** anchored left — names the ICP (`Q2 Pipeline Review — PI Firm Growth`)
- **Encryption shield icon** next to the title — adds realism
- **View toggle** (Speaker / Gallery) and **Info** button on the right
- **Recording indicator** — red dot + `REC` (or `Recording…`) — adds realism and time-pressure feel
- **Meeting duration timer** top-right or near the title — e.g. `00:32:17`

### Participant tiles
- Dark background (`#1f1f1f`–`#2a2a2a`)
- **Name label** bottom-left, white text on semi-transparent black pill, e.g. `Marcus · PI Firm PM`
- **Mic icon** next to the name — muted (red slash) or active (green); the active speaker tile is typically unmuted
- Optional **video thumbnail** — neutral colored illustration, monogram, or color-blocked silhouette. **Never use real faces.** Monograms on solid backgrounds are the safest default.
- Optional **"speaking" border** — a 3–4px green or yellow glow around the active speaker's tile
- Optional **reaction emoji** floating up from a tile (👍, ❤️, 😂) — a fun realism touch; use sparingly

### Screen-share content (if using screen-share view)
- Thin **green border** (~2–3px) around the shared region — the Zoom "you are sharing / being shared with" signal
- Content options: fake dashboard, chart with an annotation arrow, document, slide deck frame, or KPI panel
- **The screen-share IS the rhetorical center.** If it's a chart, the chart is the proof. If it's a slide, the slide carries the headline. If it's a dashboard, an annotation should point to the offer's impact.

### Bottom control bar (Zoom toolbar)
- Icons left-to-right: **Mute / Stop Video / Security / Participants / Chat / Share Screen / Record / Reactions / Apps / More**
- Each icon has its label below in small white text
- **End** button (red, right side) — labeled `End` or `Leave`
- Sits on a dark `#1c1c1c` bar across the bottom

### Optional chat panel (right side)
- Slides out from the right; ~280–320px wide
- Header: `Chat`
- 1–2 visible messages, each with a sender name (ICP role) and a short line — chat is one of the cleanest places to carry the message or CTA

### Google Meet variant (alternative)
If the campaign calls for a cleaner / "corporate" feel, render Google Meet instead of Zoom: white-on-light-gray chrome, blue accent color, bottom toolbar centered with circular icons (mic, camera, captions, raise hand, present, more, red hang-up), meeting code in the bottom-left, participant tiles with white name labels on dark gradient. The same ICP and CTA rules apply.

## Design principles

### Principle #1: One moment, one message

A real Zoom screenshot captures a single second of a meeting. Don't load three competing ideas onto the shared screen and a chat panel and a reaction emoji and a speaker tile. Pick the rhetorical anchor — usually the screen-share — and let everything else play supporting roles.

### Principle #2: Faces are abstract, names do the work

Real faces are uncanny and unreliable to fake. Use monograms (initials on solid color), simple geometric illustrations, or silhouettes. The viewer's brain accepts these as "video tile" almost as quickly as it accepts a real face — and the **name label is where the ICP recognition actually lands**.

### Principle #3: Participant count should match the meeting type

A 2-person 1:1 reads as a coaching call. A 4-person tile grid reads as a team sync. A 6–8 person grid reads as a cohort / mastermind. Pick the count that matches the offer being implied. Don't show 12 tiles for what's framed as a private demo.

### Principle #4: The chrome sells the realism, the content sells the message

Spend extra time on Zoom UI accuracy — the toolbar icons, the recording dot, the encryption shield, the green screen-share border, the meeting timer. These are the elements the brain checks against memory of the real app. Get them right and the screen-share / chat content has full permission to carry the message.

### Principle #5: Pixel accuracy matters

Spacing, icon weights, the dark `#1f1f1f` palette, the red `End` button hex, the rounded-corner radius on tiles — they all need to match Zoom (or Meet). A pixel off and the brain flags "fake" without knowing why. Compare against a real screenshot before shipping.

## Layout rules

- **Zoom window frame** fills most of the 1080×1080 canvas — typically ~1000px wide, ~960px tall, leaving a soft margin for the canvas background and optional CTA pill
- **Header bar** ~56–64px tall, dark `#1c1c1c`
- **Bottom toolbar** ~84–96px tall, dark `#1c1c1c`, icon labels in 18–22px white
- **Screen-share region** dominates the main area when used; participant strip on the right ~200–240px wide
- **Gallery grid** tiles are equal-size with ~8–12px gap between them
- **Background outside the Zoom window:** soft neutral (light gray or off-white) or brand accent — sells the "screenshot" feel
- **Optional bottom CTA pill** below the frame: small, accent-colored, sits in the canvas margin outside the Zoom UI

## Writing the call

- Lead with the screen-share content — it's the rhetorical anchor. Decide what's on the shared screen first: a chart with an annotation? A slide headline? A dashboard KPI? That decision sets the rest.
- Cast the participants — 4–8 named ICP roles. Names should pattern-match real first names + role tags (`Marcus · PI Firm PM`, `Sarah · Intake Lead`, `Dani / Agency Owner`).
- Write the meeting title to verbatim-name the ICP using language from `CAMPAIGN.md`.
- If using the chat panel, write 1–2 short messages — casual lowercase, fragments ok, one of them can carry the CTA.
- Pick the active speaker (the unmuted, green-bordered tile) — usually whichever participant's quote / role best embodies the offer's outcome.
- Keep reactions and active-speaker glow minimal — they're seasoning, not entrees.

## Style Catalog

3 starter layouts. Each is a standalone HTML template in [templates/](templates/). Copy, edit meeting title + participant names + screen-share content, render.

| # | Name | Template | Layout | Key Element |
|---|---|---|---|---|
| 1 | Screen-Share View | [style-01-screen-share-view.html](templates/style-01-screen-share-view.html) | Main screen-share (slide w/ stats + chart annotation) + right strip of 5 tiles | Shared dashboard with annotation IS the proof |
| 2 | Gallery View + Chat | [style-02-gallery-view.html](templates/style-02-gallery-view.html) | 6-tile gallery + visible chat panel carrying CTA + reactions | Cohort mastermind feel; chat is the CTA |
| 3 | Google Meet 1:1 | [style-03-google-meet-1on1.html](templates/style-03-google-meet-1on1.html) | Two large Meet tiles + live caption overlay + Meet toolbar | Frozen-quote moment from a real coaching call |

**These are not the only styles.** Invent new layouts. Combine elements. The catalog grows as new concepts prove out in testing.

## QC checklist

- [ ] **Format authenticity:** at a glance, does it look like a real Zoom (or Meet) call screenshot?
- [ ] **UI accuracy:** header bar (title + timer + REC + encryption), participant tiles (name labels + mic icons), bottom toolbar (correct icons + red End button), green border on screen-share if used
- [ ] **Faces are abstract:** monograms / illustrations / silhouettes — no real faces, no real logos
- [ ] **ICP present:** in the meeting title AND at least one other place (participant names, screen-share content, chat panel)
- [ ] **Participant count fits the framing:** 2 = 1:1 coaching, 4 = team sync, 6–8 = cohort
- [ ] **Screen-share is the rhetorical center** (if used): chart annotation / slide headline / dashboard KPI carries the proof or message
- [ ] **CTA feels native:** chat-panel message / screen-share destination / accent pill outside the frame — never a generic button overlaid on the Zoom UI
- [ ] **Plausible details:** meeting duration looks like a real meeting length (not `00:00:03`), names look like real names, role tags match the ICP
- [ ] **Thumbnail test:** at 400px, can you read the meeting title AND identify the ICP?
- [ ] **No branding leakage:** no real company logos, no real personal names that map to actual people
- [ ] **CSS rendering:** no overflow, clipping, missing icons, broken tile borders, misaligned toolbar
- [ ] **Scroll-stop:** would the shape of this image (dark Zoom window on a neutral canvas) read as a candid screenshot at 2am?

If any check fails → fix the HTML and re-render.

## Workflow

**Hierarchy: Ad → Copy → Images.**

1. **Read `campaigns/{slug}/ads/{ad-name}/COPY.md` first** — the verbatim copy (meeting title, participant names, screen-share content, chat lines, CTA) should be in there.
2. **Pick the layout.** Speaker view, gallery view, or screen-share view. For most ads, screen-share view is strongest because the shared screen carries the proof.
3. **Cast the call.** Decide the meeting title, the participant list (4–8 ICP-role names), the active speaker, what's on the screen-share, and whether the chat panel is visible.
4. **Create the ad folder if it doesn't exist:** `campaigns/{slug}/ads/{ad-name}/images/`.
5. **Compose the HTML** at `campaigns/{slug}/ads/{ad-name}/images/{ad-name}.html`. Build the Zoom (or Meet) frame faithfully — header bar, tiles (inline SVG monograms / illustrations, name labels, mic icons), screen-share content with green border, bottom toolbar with correct icons and red End button, optional chat panel. No network fetches at render time.
6. **Render the PNG:**
   ```bash
   node skills/shared/render-static.js \
     campaigns/{slug}/ads/{ad-name}/images/{ad-name}.html \
     campaigns/{slug}/ads/{ad-name}/images/
   ```
7. **Seed COPY** if it doesn't already exist: `node skills/shared/tools/backfill-copy.js` (or use the editor). Open `COPY.md` and clean up any auto-extraction quirks. Just the verbatim copy — no interpretive sections.
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
