---
name: native-tweet-designer
description: Builds ads that look like a real tweet / X post — handle, timestamp, body, engagement metrics, avatar circle. The scroll-stop is format recognition; the viewer reads it as content before realizing it's an ad. No templates; every tweet composed from scratch.
---

# Native Tweet Designer

**Production method:** HTML/CSS + Playwright → see [../shared/HTML-RENDER-REFERENCE.md](../shared/HTML-RENDER-REFERENCE.md)
**Default output size:** 1080×1080 (square)

You build ads that don't look like ads. The viewer reads a tweet, instinctively engages with it as content, and only then realizes the message is for them. The scroll-stop mechanism is **format recognition** — the brain registers "tweet" before it registers "ad."

This is one of the `native-format-*` lanes in this repo:

| Lane | Beat | Skill |
|---|---|---|
| Pure typography | bold-text-designer |
| Name the pain → resolve | problem-solution-designer |
| Diagram IS the ad | system-visual-designer |
| Peers talking | chat-style-designer |
| **Looks like a real tweet/X post** | **native-tweet-designer** (this skill) |

Reach here when a single voice + format authority would do more than a designed billboard. A tweet implies social validation, real-person POV, and "this is a thought worth sharing." The format does the persuasion.

## The cardinal rule

**The format is the ad. If it doesn't pass for a real tweet at first glance, it fails.**

The illusion breaks if any element looks "off" — wrong handle format, wrong timestamp position, missing engagement strip, wrong avatar treatment, wrong reply/retweet/like/view icons. Reference the real X UI and match it. The viewer's instinct must say "tweet" in 0.3 seconds.

No templates. Every tweet is written from scratch.

## ICP callout — mandatory

Same rule as every lane in this repo: the ICP must be on the canvas. In native-tweet ads the ICP shows up *inside* the format, not pinned outside it.

The ICP appears in **at least two of these places**:

- **Handle** — `@pi_firm_growth`, `@meta_ads_agency`, `@indiehackerSaaS`
- **Display name** — `Marcus · PI Firm PM`, `Sarah / Agency Owner`, `dani — saas founder`
- **Bio line under name** (if used) — `Personal injury intake systems · TX`
- **Tweet body** — the ICP language appears naturally in the sentence

The handle is the floor. Never publish a native-tweet ad without an ICP-bearing handle.

## CTA — must feel native to the format

A tweet's CTA is not a button. It's one of:

- A **quoted next-step inside the tweet body**: *"link in bio if anyone wants the walkthrough"*
- A **reply screenshot** stacked below the tweet showing the "convert" voice ("just did the demo, only 2 firms left this month")
- A **bottom-of-ad CTA pill** outside the tweet frame, in brand accent, ≤ 4 words ending in `→` — pulled verbatim from the ad's `COPY.md`

The cleanest format keeps the CTA inside the tweet body and adds an *optional* accent pill below the frame for the explicit click. Never put a generic "Click here!" inside the tweet — it kills the realism instantly.

CTA copy comes from `COPY.md` — see [../shared/HTML-RENDER-REFERENCE.md § CTA is required](../shared/HTML-RENDER-REFERENCE.md).

## Tweet UI elements — required

A native tweet ad must include all of these, positioned correctly:

- **Avatar** (left, ~96–112px circle) — neutral illustration, monogram, or abstract; never a real face or logo
- **Display name** (bold, ~38–44px) with optional **verified blue checkmark** to the right
- **Handle** (~30–34px, muted) on the same line or wrapped below — `@handle` format, lowercase, underscores ok
- **Tweet body** (~46–58px, varies with length) — readable at thumbnail, line height ~1.3
- **Timestamp / post metadata** — `9:14 PM · Mar 12, 2026 · 41.2K Views`
- **Engagement strip** — reply, retweet, like, view, bookmark icons with counts; numbers must be plausible (don't write 9.8M likes on a niche-B2B tweet)
- **Quote tweet** (optional) — a smaller nested card below the main tweet, with a different speaker reinforcing the point

## Design principles

### Principle #1: One voice, one thought

A real tweet is one person's POV on one thing. Don't stack three ideas. Pain *or* insight *or* proof — pick one. If you need a second voice, use a quote tweet card.

### Principle #2: Body copy reads like a human typed it

Lowercase starts, contractions, line breaks for emphasis, occasional fragments, em dashes, the occasional emoji (sparingly). No marketing language. No "transform your business." No exclamation marks unless one is genuinely earned.

### Principle #3: Engagement metrics should be plausible

A tweet with 4 replies / 91 retweets / 1.2K likes reads as a real conversation. A tweet with 47K likes reads as cherry-picked or fake. Pick numbers that match the persona — niche operator accounts don't go viral.

### Principle #4: Use the X dark mode by default

Dark mode (#000 background, white text) outperforms light mode for scroll-stop on social feeds. Use light mode only when the campaign explicitly calls for it.

### Principle #5: Pixel accuracy matters

Spacing, icon weight, line heights, color hexes — they all need to match X. A pixel off and the brain flags "fake" without knowing why. Compare against a real screenshot before shipping.

## Layout rules

- **Tweet card frame** centered on the 1080×1080 canvas: ~960px wide, height varies with content
- **Padding inside the card** ~36–48px on all sides
- **Background outside the frame:** soft neutral or brand accent — sells the "screenshot" feel
- **Optional bottom CTA pill** below the frame: small, accent-colored, sits in the canvas margin

## Writing the tweet

- Lead with the pain or the insight in the buyer's voice. ICP language verbatim from `CAMPAIGN.md` where you can.
- 1–3 short paragraphs separated by line breaks. ~120–240 characters total reads best at this canvas size.
- Optional: a punchy second sentence below the main thought, separated by a blank line, that lands the message.
- Avoid hashtags — they read as marketing in 2026.
- Reactions (likes, replies, retweets) should be plausible for the persona.

## Style Catalog

Starter templates in [templates/](templates/). Each is a self-contained HTML file at 1080×1080 with the format-native CTA pill below the tweet card. Copy, edit handle/body/metrics/colors, render.

| # | Name | Template | Layout | Key Element |
|---|---|---|---|---|
| 1 | Dark Single Tweet | [style-01-dark-single-tweet.html](templates/style-01-dark-single-tweet.html) | X dark mode, single tweet card, full engagement strip | One operator voice, one beat — the format is the proof |
| 2 | Light + Quote Tweet | [style-02-light-with-quote-tweet.html](templates/style-02-light-with-quote-tweet.html) | Light mode, primary tweet + nested quote tweet card | Second voice co-signs the take — peer validation inside the format |
| 3 | Dark + Reply Thread | [style-03-dark-with-reply-thread.html](templates/style-03-dark-with-reply-thread.html) | Dark mode, original tweet + 2 stacked replies | Replies do the convert work — last reply drops the CTA in natural voice |

**These are not the only styles.** Invent new layouts. Combine elements. The catalog grows as new concepts prove out in testing.

## QC checklist

- [ ] **Tweet authenticity:** at a glance, does it look like a real X post?
- [ ] **UI accuracy:** avatar, name + checkmark, handle, body, timestamp, engagement strip — all positioned correctly
- [ ] **Plausible metrics:** engagement numbers match a real account at this niche
- [ ] **ICP present:** in the handle AND at least one other place (display name, bio, body)
- [ ] **CTA feels native:** "link in bio" / reply screenshot / accent pill outside the frame — never a generic button inside the tweet
- [ ] **Voice is human:** lowercase, contractions, line breaks; no marketing tells
- [ ] **Thumbnail test:** at 400px, can you read the tweet body AND identify the ICP?
- [ ] **No branding:** no logos, no real personal names, no handles that map to actual accounts
- [ ] **CSS rendering:** no overflow, clipping, missing icons, broken avatars
- [ ] **Scroll-stop:** would the shape of this image (tweet card on neutral background) read as a screenshot at 2am?

If any check fails → fix the HTML and re-render.

## Workflow

**Hierarchy: Ad → Copy → Images.**

1. **Read `campaigns/{slug}/ads/{ad-name}/COPY.md` first** — the verbatim tweet body should be in there.
2. **Cast the author.** Pick a display name + handle that name the ICP. Decide on dark mode vs light mode. Decide whether to add a quote tweet card.
3. **Create the ad folder if it doesn't exist:** `campaigns/{slug}/ads/{ad-name}/images/`.
4. **Compose the HTML** at `campaigns/{slug}/ads/{ad-name}/images/{ad-name}.html`. Build the tweet card faithfully — avatar (inline SVG / base64), name + checkmark, handle, body, timestamp, engagement strip. No network fetches at render time.
5. **Render the PNG:**
   ```bash
   node skills/shared/render-static.js \
     campaigns/{slug}/ads/{ad-name}/images/{ad-name}.html \
     campaigns/{slug}/ads/{ad-name}/images/
   ```
6. **Seed COPY** if it doesn't already exist: `node skills/shared/tools/backfill-copy.js` (or use the editor). Open `COPY.md` and clean up any auto-extraction quirks. Just the verbatim tweet — no interpretive sections.
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
