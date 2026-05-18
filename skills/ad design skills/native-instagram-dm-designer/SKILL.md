---
name: native-instagram-dm-designer
description: Builds ads that look like a real Instagram DM screenshot — IG-specific header chrome, gradient sent bubbles, light-gray received bubbles, story-reply context, double-tap heart reactions, "Seen" timestamp, and the IG message input bar. Particularly potent on Meta feeds, where the viewer's brain reads it as in-platform conversation before flagging it as an ad. No templates; every DM composed from scratch.
---

# Native Instagram DM Designer

**Production method:** HTML/CSS + Playwright → see [../shared/HTML-RENDER-REFERENCE.md](../shared/HTML-RENDER-REFERENCE.md)
**Default output size:** 1080×1080 (square)

You build ads that don't look like ads — they look like an Instagram DM the viewer is glancing at over someone's shoulder. The scroll-stop mechanism is **format recognition**, and on Meta feeds (Instagram, Facebook) it's *recursive*: the viewer is already inside the platform, and the ad shows them another instance of that same platform. The brain registers "DM screenshot" before it registers "ad," and the message lands in the half-second of recognition.

This is one of the `native-format-*` lanes in this repo:

| Lane | Beat | Skill |
|---|---|---|
| Pure typography | bold-text-designer |
| Name the pain → resolve | problem-solution-designer |
| Diagram IS the ad | system-visual-designer |
| Peers talking | chat-style-designer |
| Looks like a real tweet/X post | native-tweet-designer |
| **Looks like a real Instagram DM** | **native-instagram-dm-designer** (this skill) |

Reach here when the beat is a one-to-one DM moment — a customer reply, a cold inbound, a "hey saw your story" follow-up, a quiet testimonial in slide-in form. Instagram DM ads play especially well for creator-economy, agency, consumer-services, and B2C SaaS ICPs whose buyers live in IG. They are the *most native* possible placement on Meta — recursion is the trick.

## The cardinal rule

**The format is the ad. If it doesn't pass for a real IG DM at first glance, it fails.**

The illusion breaks if anything looks "off" — bubble shape too rounded (that's iMessage), missing IG gradient on sent bubbles, no "Active now" status, no camera/mic/GIF/sticker icons in the input bar, no story-reply card when context demands one. Reference the real IG UI and match it pixel-for-pixel. The viewer's instinct must say "DM" in 0.3 seconds.

No templates. Every DM is composed from scratch.

## ICP callout — mandatory

Same rule as every lane in this repo: the ICP must be on the canvas. In native IG DM ads the ICP shows up *inside* the format, not pinned outside it.

The ICP appears in **at least two of these places**:

- **Display name at top of thread** — `Marcus | PI Firm Owner`, `dani.builds.saas`, `sarah · agency owner`
- **Handle below the display name** — `@pi_firm_marcus`, `@meta_ads_dani`, `@agency.sarah` (lowercase; dots and underscores common)
- **Story-reply card** (if a bubble is replying to the recipient's story) — the story thumbnail caption can name the ICP context: *"how my PI firm books 40 intakes a week"*
- **Bubble content** — the ICP language appears naturally in the dialogue (e.g. *"saw your post about intake systems — how do you handle after-hours leads?"*)

The display name + handle pair is the floor. Never publish an IG DM ad without an ICP-bearing handle.

## CTA — must feel native to the format

An IG DM's CTA is not a button overlaid on the chat. It's one of:

- A **link drop inside a bubble** in the casual way someone shares one in a DM: *"link's in my bio if you wanna see how — only taking 3 firms this month"*
- A **voice-note thumbnail** at the end of the thread, captioned with the next step: *"0:47 — walkthrough"* (visual only; no audio)
- A **reply preview** at the bottom showing the recipient typing the next step
- A **post-frame accent pill** below the phone frame, in brand accent, ≤ 4 words ending in `→` — pulled verbatim from the ad's `COPY.md`

Never overlay a "Click here!" button inside the conversation — it kills the realism instantly. The cleanest format keeps the CTA inside a bubble as natural dialogue and adds an *optional* accent pill below the frame for the explicit click.

CTA copy comes from `COPY.md` — see [../shared/HTML-RENDER-REFERENCE.md § CTA is required](../shared/HTML-RENDER-REFERENCE.md).

## UI elements — required

A native IG DM ad must include all of these, positioned correctly:

- **Header bar at top of thread** — back arrow (left), small circular profile pic (~64–80px), display name + handle stacked below (display name bold ~36–40px, handle muted ~28–30px), phone-call icon and video-call icon (right), info icon (far right)
- **"Active now" / "Active 2m ago" status** — tiny text directly below the display name/handle pair, muted color, sells the realism
- **Sent bubbles (the viewer-as-sender side, right-aligned)** — IG's signature gradient `linear-gradient(135deg, #833ab4 0%, #fd1d1d 50%, #fcb045 100%)` (purple → pink → orange) OR a flat blue-purple (#3797F0 → #5851DB) for simpler threads. Gradient is the IG signature — use it when you want maximum format recognition.
- **Received bubbles (left-aligned)** — dark mode: `#262626` background, white text; light mode: `#EFEFEF` background, near-black text. Default to dark mode.
- **Bubble shape** — more rectangular than iMessage. Border-radius ~22–26px, no visible tail/pointer. Consecutive bubbles from the same sender stack with tighter spacing.
- **Story-reply card** (when applicable) — above a bubble, show the story thumbnail (small rounded rectangle ~100–120px tall) with a "Replied to your story" muted label and optionally a snippet of the story caption. This is one of IG DM's most recognizable patterns.
- **Double-tap heart reaction** — small heart icon (filled, accent color or white) tucked at the bottom-corner of a bubble that's been "liked." Subtle, ~20–24px.
- **"Seen" timestamp** — below the last sent bubble, right-aligned, muted text — `Seen 2m ago` or `Seen 11:42 PM`
- **Voice-note thumbnail** (optional) — a horizontal pill with a play triangle, a faux waveform (use a flat SVG path), and a duration label `0:47`. Same gradient as sent bubbles when sent by the viewer.
- **Input bar at bottom** — rounded pill input with: camera icon (circular, gradient-filled, left), placeholder text "Message...", microphone icon, image/GIF icon, sticker icon (right side, in that order). The bar sells the realism — never skip it.
- **Status bar at top of the phone frame** — time on the left, signal/wifi/battery on the right. Small but present.

## Design principles

### Principle #1: Dark mode by default

Most IG users on Meta are in dark mode, and dark mode dominates scroll-stop on social feeds. Default the thread to dark mode (`#000` or `#0A0A0A` background, `#262626` received bubbles, white text). Use light mode only when the campaign explicitly calls for it.

### Principle #2: One voice, one moment

A real DM is a snapshot of a conversation, not a full arc. Don't try to play the four-beat pain → amplify → turn → CTA arc here — that's `chat-style-designer`'s job. A DM ad captures one short exchange: a question and the reply, a story-reply landing, an inbound testimonial, a "saw your story — here's what worked for me" moment. 4–6 bubbles maximum.

### Principle #3: Bubbles read like a human typed them

Lowercase starts, contractions, line breaks, occasional emoji (sparingly), occasional typos left uncorrected. No marketing language. No "transform your business." Real DMs have rhythm — short, short, longer, short.

### Principle #4: Use IG-specific signature elements

The gradient sent bubble, the story-reply card, the double-tap heart, the "Active now" status, the camera-in-the-input-bar — these are the elements that make a viewer's brain say *"IG specifically,"* not just "messaging app." At least two of these should appear in every ad.

### Principle #5: Pixel accuracy matters

Spacing, icon weight, line heights, color hexes — they all need to match IG. A pixel off and the brain flags "fake" without knowing why. The bubble radius difference between iMessage and IG is small but readable; respect it. Compare against a real IG DM screenshot before shipping.

## Layout rules

- **Phone frame:** ~720–820px wide, ~960–1020px tall, centered on the 1080×1080 canvas
- **Status bar at top of frame:** time (left), signal/wifi/battery (right) — small, realistic, white on dark
- **IG DM header below status bar:** back arrow, profile pic, display name + handle stack, "Active now" status, call/video/info icons. ~140–160px tall total.
- **Conversation area:** scroll-implied (no explicit scrollbar), bubbles flow top to bottom. Padding ~20–28px horizontal.
- **Input bar at bottom of frame:** ~80–100px tall, rounded pill input, all four icons present
- **Outside the frame:** background can be a soft brand color, a subtle gradient, or a flat dark neutral. Optional small accent pill below the frame for the explicit CTA.

## Writing the DM

- Lead with the moment that justifies the screenshot existing. A DM screenshot answers the silent question *"why would someone screenshot this?"* — usually because the reply is too good, the question lands too well, or the testimonial is unexpected.
- 4–6 bubbles total. Mix short reactions ("yes exactly") with longer messages (2–3 lines). Vary which side is talking.
- Use ICP language from `CAMPAIGN.md` verbatim where you can. The opening bubble often references something that sounds like a real DM cold-reach: *"saw your story about intake — quick q?"*
- Story-reply context (when used) creates instant authenticity. If the campaign has a "look behind the scenes" angle, frame the whole thread as a reply to a story.
- Emoji are part of IG voice — used sparingly (1–2 per thread max), naturally placed. Heart-eyes, fire, 100, salute. Never use ad-feeling emojis (rocket, money bag).
- Don't have every speaker agree immediately. A skeptical bubble followed by an answer reads more real than three "wow yes!"s in a row.

## Style Catalog

Starter templates in [templates/](templates/). Each is a self-contained 1080×1080 HTML file with the full IG DM chrome — phone status bar, header with profile pic + handle + "Active" status, bubbles with IG-signature gradient or flat purple, "Seen" timestamp, input bar with camera/mic/GIF/sticker — plus the format-native CTA pill below the phone. Copy, edit handle / bubble copy, render.

| # | Name | Template | Layout | Key Element |
|---|---|---|---|---|
| 1 | Dark Story Reply | [style-01-dark-story-reply.html](templates/style-01-dark-story-reply.html) | Dark mode, story-reply card above sent bubble, heart reaction, gradient bubbles | Story-reply card = instant IG recognition; the most IG-specific element |
| 2 | Dark Voice Note | [style-02-dark-voice-note.html](templates/style-02-dark-voice-note.html) | Dark mode, 4 text bubbles + gradient voice-note thumbnail with waveform | Voice note as soft CTA — "the walkthrough" without leaving the chat |
| 3 | Light Cold Inbound | [style-03-light-cold-inbound.html](templates/style-03-light-cold-inbound.html) | Light mode, multi-day timestamps, flat blue-purple gradient, heart reaction | Cross-day thread + email handoff — the moment a cold DM converts |

**These are not the only styles.** Invent new layouts. Combine elements. The catalog grows as new concepts prove out in testing.

## QC checklist

- [ ] **DM authenticity:** at a glance, does it look like a real Instagram DM?
- [ ] **IG-specific signature:** at least two of [gradient sent bubble, story-reply card, double-tap heart, "Active now" status, IG camera icon in input bar] are present
- [ ] **Header chrome correct:** back arrow, profile pic, display name + handle stacked, "Active" status, call/video/info icons
- [ ] **Bubble shape:** rectangular-ish, ~22–26px radius, no iMessage-style tail
- [ ] **Bubble colors:** sent uses IG gradient or flat blue-purple; received uses `#262626` dark or `#EFEFEF` light
- [ ] **Input bar correct:** camera (left), "Message..." placeholder, mic, GIF, sticker (right)
- [ ] **Seen timestamp:** below last sent bubble, right-aligned, muted
- [ ] **ICP present:** in display name/handle AND at least one other place (story-reply caption, bubble content)
- [ ] **CTA feels native:** link inside a bubble / voice-note thumbnail / accent pill outside the frame — never a generic button inside the chat
- [ ] **Voice is human:** lowercase, contractions, emoji used sparingly; no marketing tells
- [ ] **Bubble count:** 4–6 bubbles total (not a full chat-style arc)
- [ ] **Dark mode default:** unless campaign explicitly calls for light mode
- [ ] **Thumbnail test:** at 400px, can you read the bubbles AND identify the ICP?
- [ ] **No branding:** no real logos, no real personal names, no handles that map to actual accounts
- [ ] **CSS rendering:** no overflow, clipping, missing icons, broken gradients, or misaligned avatars
- [ ] **Scroll-stop:** would the shape of this image (IG header + bubbles + input bar in a phone frame) read as a screenshot at 2am on a Meta feed?

If any check fails → fix the HTML and re-render.

## Workflow

**Hierarchy: Ad → Copy → Images.**

1. **Read `campaigns/{slug}/ads/{ad-name}/COPY.md` first** — the verbatim DM bubbles should be in there.
2. **Cast the thread.** Pick a display name + handle that name the ICP. Decide dark vs light mode (default dark). Decide whether the thread is replying to a story (if yes, design the story-reply card). Decide whether to include a voice-note thumbnail. Decide the "Seen" / "Active" timing.
3. **Create the ad folder if it doesn't exist:** `campaigns/{slug}/ads/{ad-name}/images/`.
4. **Compose the HTML** at `campaigns/{slug}/ads/{ad-name}/images/{ad-name}.html`. Build the phone frame, status bar, IG header (back arrow, profile pic as inline SVG, name + handle, "Active" status, icons), bubbles with correct gradients/colors/radii, optional story-reply card, optional heart reaction, "Seen" timestamp, and the input bar with all four icons. Embed all icons and avatars as inline SVG or base64 — no network fetches at render time.
5. **Render the PNG:**
   ```bash
   node skills/shared/render-static.js \
     campaigns/{slug}/ads/{ad-name}/images/{ad-name}.html \
     campaigns/{slug}/ads/{ad-name}/images/
   ```
6. **Seed COPY** if it doesn't already exist: `node skills/shared/tools/backfill-copy.js` (or use the editor). Open `COPY.md` and clean up any auto-extraction quirks — DM threads parse messily, so this step usually needs a human pass. Just the verbatim bubbles — no interpretive sections.
7. **QC** against the checklist above.

## Output

```
campaigns/{campaign-slug}/ads/{ad-name}/
  ├── COPY.md
  ├── copy.json
  └── images/
      ├── {ad-name}.html
      └── {ad-name}.png
```
