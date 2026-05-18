---
name: native-youtube-comment-designer
description: Builds ads that look like an expanded YouTube comment section — a pinned top comment under a video, supportive replies, a mild skeptic, and a creator-hearted response. The scroll-stop is format recognition; the persuasion is anonymous strangers debating something in the buyer's own niche. No templates; every comment thread composed from scratch.
---

# Native YouTube Comment Designer

**Production method:** HTML/CSS + Playwright → see [../shared/HTML-RENDER-REFERENCE.md](../shared/HTML-RENDER-REFERENCE.md)
**Default output size:** 1080×1080 (square)

You build ads that look like a YouTube comments section someone scrolled to under a video. The persuasion mechanism is **unfiltered third-party opinion** — comments read as anonymous strangers reacting in real time, not as marketing. A pinned top comment carries the message; replies amplify it; one mild skeptic gets answered. The brain registers "comment thread" before it registers "ad."

This is one of the `native-format-*` lanes in this repo:

| Lane | Beat | Skill |
|---|---|---|
| Pure typography | bold-text-designer |
| Name the pain → resolve | problem-solution-designer |
| Diagram IS the ad | system-visual-designer |
| Peers talking | chat-style-designer |
| Looks like a real tweet/X post | native-tweet-designer |
| **Looks like an expanded YouTube comments section** | **native-youtube-comment-designer** (this skill) |

Reach here when the message benefits from being said by *several voices at once* — a pinned comment plus replies plus a creator-heart plus a mild skeptic getting calmly answered. That polyphony is harder to fake in a single quote or tweet.

## The cardinal rule

**The format is the ad. If it doesn't pass for a real YouTube comment thread at first glance, it fails.**

The illusion breaks if any element looks "off" — wrong avatar shape, missing thumbs-up/down icons, wrong "Pinned by" treatment, replies that aren't indented, polished prose where messy lowercase belongs. Reference real YouTube UI and match it. The viewer's instinct must say "comments" in 0.3 seconds.

No templates. Every thread is composed from scratch.

## ICP callout — mandatory

The ICP must appear on the canvas. In a comments ad the ICP lives *inside the format*, never pinned outside it.

The ICP appears in **at least two of these places**:

- **Channel name** above the comments — `PI Firm Operators`, `Agency Margins`, `Indie SaaS Builders`
- **Pinned commenter handle** — `@pi_intake_lead`, `@agency_jake_tx`, `@dani_solo_saas`
- **Video title** (when included) — `Why PI Firms Lose 40% of Intakes Before the Callback`
- **Comment body** — ICP language verbatim ("we're a 3-attorney firm in Houston…")
- **Reply handles** — the supporters and skeptic also code-named for the niche

The pinned commenter handle is the floor. Never publish a YouTube comment ad without an ICP-bearing handle on the hero comment.

## CTA — must feel native to the format

YouTube CTAs are not buttons overlaid on the thread — that kills the realism instantly. Use one of:

- **A reply that names the next step in commenter voice** — *"their site has the form, calendly's right on it, took me like 3 min"*
- **A creator response in the thread** that points to the next step — *"📌 Pinned by Agency Margins — if anyone wants the breakdown we did it on the channel page, link's in the description"*
- **A post-frame accent pill** below the comment-section frame, in brand accent, ≤ 4 words ending in `→` — pulled verbatim from `COPY.md`

The cleanest approach: let the CTA emerge from the dialogue (a reply saying "link's in the description, took me 2 min") and add an *optional* accent pill below the frame for the explicit click. Never overlay a "Click here!" button on the thread.

CTA copy comes from `COPY.md` — see [../shared/HTML-RENDER-REFERENCE.md § CTA is required](../shared/HTML-RENDER-REFERENCE.md).

## UI elements — required

A native YouTube comment ad must include all of these, positioned correctly:

- **Optional video card** at the top (recommended, sets context):
  - Thumbnail on the left, 16:9, ~280–340px wide — can be a CSS gradient + title overlay if no image
  - Video title (right of thumbnail, bold, 2 lines max, ~32–38px)
  - Channel name + verified checkmark (small grey row beneath title)
  - View count + time ago — `41K views · 2 days ago`
- **Comments header row** — `247 Comments` on the left + `Sort by ▾  Top comments` on the right
- **Pinned / hero comment** — the message-carrier:
  - Avatar circle, ~42–48px, left aligned, neutral illustration or monogram
  - `📌 Pinned by [Channel Name]` indicator (small, muted, sits above the handle row)
  - `@handle` (bold) + posted time `· 2 days ago` (muted)
  - Comment body, ~30–36px, 2–5 lines, paragraph breaks allowed, line height ~1.4
  - `❤️ by [Channel]` small pill below the body (creator-hearted)
  - Thumbs up icon + count, thumbs down icon (no count, as YouTube hides it), `Reply` button
  - `▸ View N replies` link
- **2–3 indented replies** below the pinned comment:
  - Smaller avatars (~32–36px), indented ~64px from the left
  - Same metadata structure (handle, time, body, like count, Reply)
  - One supportive, one mild skeptic, optionally one creator/OP response that calmly answers the skeptic
- **Optional 1–2 sibling top-level comments** below the pinned thread for fullness — short, reactive, not the main message

## Design principles

### Principle #1: The pinned comment carries the message; replies do the convincing

The hero comment plants the claim in ICP voice. The replies are where credibility is earned — one supportive "yeah this matched our experience," one mild skeptic ("doesn't this only work for X?"), and a calm honest answer. A thread that only agrees with itself reads as astroturf; a thread that engages with one objection reads as real.

### Principle #2: Comment voice is messy, lowercase, internet-typed

Real YouTube comments use lowercase starts, missing apostrophes, run-on sentences, the occasional emoji, "tbh" / "ngl" / "fwiw" abbreviations, em dashes typed as `--`, ellipses used incorrectly. No marketing tells. No "transform your business." A pristine, on-message comment reads as fake.

### Principle #3: Engagement counts should be niche-channel scale

A pinned comment with 312 likes on a B2B operator channel is plausible. The same comment with 47K likes reads as either viral consumer content or cherry-picked. Reply likes should drop off — pinned 312, top reply 41, skeptic 8, response 64. The shape of the numbers is part of the realism.

### Principle #4: Use YouTube dark mode by default

YouTube dark mode is the default for most users in 2026. Background `#0F0F0F`, secondary surfaces `#272727`, primary text near-white, secondary text `#AAAAAA`. Use light mode only when the campaign explicitly calls for it.

### Principle #5: Pixel accuracy matters

Avatar sizing, indent depth for replies, the exact gap between body and engagement row, the muted weight of the timestamp — they all need to match YouTube. A pixel off and the brain flags "fake" without knowing why. Compare against a real YouTube screenshot before shipping.

## Layout rules

- **Comment-section frame** centered on the 1080×1080 canvas, ~980px wide, height varies with content
- **Optional video card** sits at the top inside the frame; comments stack below it
- **Padding inside the frame** ~32–44px on all sides
- **Reply indent** ~64px from the comment column's left edge
- **Background outside the frame** soft neutral or brand accent — sells the "screenshot of a YouTube page" feel
- **Optional bottom CTA pill** below the frame, in canvas margin

## Writing the comments

**The pinned comment**
- Lead with a specific in the buyer's voice — *"we're a 3-attorney PI firm in Houston, was losing leads on the callback gap…"*
- 2–4 short sentences. Paragraph break is okay. ~140–260 characters total reads cleanest at this canvas size.
- End on the outcome or the moment that turned it — *"...switched to the system from this video, callback gap closed in like 2 weeks."*
- Avoid hashtags. Avoid all-caps. Avoid more than one emoji.

**The supportive reply**
- Short. *"yeah we had the same thing, the intake script alone fixed half of it"*
- Specific reference to one detail from the pinned comment

**The mild skeptic**
- One honest pushback — *"sure but doesn't this only work if you've already got volume? we're at like 8 leads a month"*
- Tone is questioning, not hostile

**The honest answer** (creator or another commenter)
- Calm. Names the skeptic's concern directly. Doesn't oversell.
- *"fair q — they actually have a smaller-firm version, the form on their site sorts you to it"*

**Sibling top-level comments** (optional)
- 1 line each, reactive — *"this whole video should be a checklist"*, *"the part about callback gaps hit hard lol"*

## Style Catalog

Starter templates in [templates/](templates/). Each is a self-contained 1080×1080 HTML file rendering an expanded YouTube comments view — optional video card, comments header with count + sort, pinned hero comment with `📌 Pinned by` + `❤️ by` indicators, 2–3 indented replies (supportive + mild skeptic + creator answer), thumbs-up/down + Reply + View replies — plus the format-native CTA pill below the frame. Copy, edit channel / handle / pinned body / replies, render.

| # | Name | Template | Layout | Key Element |
|---|---|---|---|---|
| 1 | Dark Pinned + Video | [style-01-dark-pinned-with-video.html](templates/style-01-dark-pinned-with-video.html) | Dark mode, full video card on top + pinned comment + supporter + skeptic + creator answer | Video card gives context; creator-answer reply seeds the CTA naturally |
| 2 | Dark Comments Only | [style-02-dark-comments-only.html](templates/style-02-dark-comments-only.html) | Dark mode, channel-bar + Subscribe button, pinned thread + sibling reactive comment | Channel bar sells "I'm on the page right now"; sibling comment adds fullness |
| 3 | Light Thread Debate | [style-03-light-thread-debate.html](templates/style-03-light-thread-debate.html) | Light mode, video card + pinned + supportive + skeptic + creator-answer with worksheet drop | Light mode for "I screenshot this at my desk"; skeptic-then-creator pattern earns trust |

**These are not the only styles.** Invent new layouts. Combine elements. The catalog grows as new concepts prove out in testing.

## QC checklist

- [ ] **Comment-section authenticity:** at a glance, does it look like a real expanded YouTube comments view?
- [ ] **UI accuracy:** comments header with count + sort, pinned-by indicator, avatar circles, indented replies, thumbs up/down + Reply, `View N replies` link
- [ ] **Video card (if used):** 16:9 thumbnail, title, channel + checkmark, views + time ago
- [ ] **Plausible metrics:** like counts fall off realistically across the thread; view count matches a niche channel, not a viral one
- [ ] **ICP present:** pinned commenter handle AND at least one other place (channel name, video title, comment body, reply handle)
- [ ] **Hero comment carries the message; replies amplify:** the pinned comment is the claim; the replies do the convincing
- [ ] **One mild skeptic answered honestly:** thread engages with at least one real objection
- [ ] **CTA feels native:** emerges from a reply or accent pill outside the frame — never a button overlaid on a comment
- [ ] **Voice is messy:** lowercase, contractions, missing punctuation, "tbh"/"ngl" allowed, no marketing tells
- [ ] **Dark mode applied** (unless campaign explicitly calls for light mode)
- [ ] **Thumbnail test:** at 400px, can you read the pinned comment body AND identify the ICP?
- [ ] **No real branding:** no real channel names, no real personal names, no real handles
- [ ] **CSS rendering:** no overflow, clipping, missing icons, broken avatars, replies actually indented
- [ ] **Scroll-stop:** would the shape of this image (comments column on neutral background) read as a screenshot at 2am?

If any check fails → fix the HTML and re-render.

## Workflow

**Hierarchy: Ad → Copy → Images.**

1. **Read `campaigns/{slug}/ads/{ad-name}/COPY.md` first** — the verbatim pinned comment body, replies, and any video title context should be in there.
2. **Cast the thread.** Pick a channel name + pinned commenter handle that name the ICP. Decide whether to include the video card above the comments. Cast the supportive reply, skeptic, and answerer.
3. **Create the ad folder if it doesn't exist:** `campaigns/{slug}/ads/{ad-name}/images/`.
4. **Compose the HTML** at `campaigns/{slug}/ads/{ad-name}/images/{ad-name}.html`. Build the comments section faithfully — optional video card, comments header with count + sort, pinned hero comment with `📌 Pinned by` + `❤️ by` indicators, indented replies, thumbs-up/down icons (inline SVG), `Reply` and `View N replies` links. Avatars are inline SVG or base64 — no network fetches at render time.
5. **Render the PNG:**
   ```bash
   node skills/shared/render-static.js \
     campaigns/{slug}/ads/{ad-name}/images/{ad-name}.html \
     campaigns/{slug}/ads/{ad-name}/images/
   ```
6. **Seed COPY** if it doesn't already exist: `node skills/shared/tools/backfill-copy.js` (or use the editor). Open `COPY.md` and clean up any auto-extraction quirks. Just the verbatim comments — no interpretive sections.
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
