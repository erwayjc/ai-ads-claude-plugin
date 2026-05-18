---
name: native-reddit-post-designer
description: Builds ads that look like a real Reddit post screenshot — subreddit header, post title, upvote count, body, and 2–4 top comments. The subreddit name itself carries the ICP, and the "found this on r/[their-sub]" frame implies organic discovery and peer wisdom. No templates; every post + thread composed from scratch.
---

# Native Reddit Post Designer

**Production method:** HTML/CSS + Playwright → see [../shared/HTML-RENDER-REFERENCE.md](../shared/HTML-RENDER-REFERENCE.md)
**Default output size:** 1080×1080 (square)

You build ads that don't look like ads. The viewer sees a Reddit post screenshot, instinctively scans the title and the top comment, and only then realizes the message is for them. The scroll-stop mechanism is **format recognition plus tribe recognition** — the brain registers "Reddit," then registers "wait, that's *my* subreddit," and stops.

This is one of the `native-format-*` lanes in this repo:

| Lane | Beat | Skill |
|---|---|---|
| Pure typography | bold-text-designer |
| Name the pain → resolve | problem-solution-designer |
| Diagram IS the ad | system-visual-designer |
| Peers talking | chat-style-designer |
| Looks like a real tweet/X post | native-tweet-designer |
| **Looks like a real Reddit post + comments** | **native-reddit-post-designer** (this skill) |

Reach here when the persuasion gain comes from *peer overhearing* — the viewer isn't being pitched, they're eavesdropping on their tribe. Reddit's voice (confessional, specific, lowercase, slightly cynical) is uniquely hard to fake in a banner ad, so when you get it right the format itself is the proof.

## The cardinal rule

**The format is the ad. If it doesn't pass for a real Reddit screenshot at first glance, it fails.**

The illusion breaks the instant something looks off — wrong subreddit prefix, missing upvote arrows, post body that sounds like marketing, a top comment that says "Check out this amazing product!" Reference real Reddit (mobile or old.reddit) and match it pixel for pixel. The viewer's instinct must say "Reddit" in 0.3 seconds and "that's my sub" in the next second.

No templates. Every post and every comment is written from scratch.

## ICP callout — mandatory

Same rule as every lane in this repo: the ICP must be on the canvas. In native-Reddit ads the ICP shows up *inside* the format — the subreddit name itself is the single most powerful ICP carrier in this entire repo.

The ICP appears in **at least two of these places**:

- **Subreddit name** — `r/PIFirmOwners`, `r/AgencyOps`, `r/SaaSFounders`, `r/medicalpractices`, `r/IntakeManagers` (the floor — never skip this)
- **OP username** — `u/marcus_intake`, `u/agency_ops_dan`, `u/burned_out_pm_42`
- **Post title** — the ICP-coded pain or question in their own words
- **Post body** — first-person specifics that only that ICP would write
- **Commenter usernames** — `u/firmowner_tx`, `u/saas_founder_eu`
- **Flair pill** next to title — `Vent`, `Question`, `Discussion`, `Help Wanted`, `Intake Ops`

The subreddit name is the floor. Pick a plausible-sounding ICP-coded sub (it doesn't need to exist on real Reddit). Never publish a native-Reddit ad with a generic sub like `r/business` or `r/marketing`.

## CTA — must feel native to the format

A Reddit post's CTA is not a button. It's one of:

- **A top comment naturally mentioning a resource** — *"DM'd OP the link. they have a walkthrough on their site, took me 20 min to set up. game changer."*
- **A "EDIT:" line at the bottom of the post body** — *"EDIT: a few people asked — the system I'm trying is [name]. their site has the full breakdown."*
- **An accent CTA pill** below the post frame, outside the screenshot, in brand accent, ≤ 4 words ending in `→` — pulled verbatim from the ad's `COPY.md`

The cleanest format lets a top comment carry the CTA inside the thread, with an *optional* accent pill below the frame for the explicit click. Never overlay a "Click here!" button on top of the post — it shatters the screenshot illusion instantly. Never write a comment that sounds like an ad ("This product changed my life!"). Reddit comments are *underclaim* by default.

CTA copy comes from `COPY.md` — see [../shared/HTML-RENDER-REFERENCE.md § CTA is required](../shared/HTML-RENDER-REFERENCE.md).

## UI elements — required

A native Reddit ad must include all of these, positioned correctly:

- **Subreddit header bar at top** — `r/[subname]` (in bolder weight, often a tiny circular icon to the left), `Posted by u/[username] · 14h ago`, optional "Join" pill on the right
- **Post title** — bold, ~38–44px, often a question or a strong confessional claim
- **Optional flair pill** next to the title — colored pill (Discussion / Question / Vent / Help Wanted / Rant)
- **Upvote column** — up-arrow + score + down-arrow. On mobile aesthetic this often sits inline in the action bar; on old.reddit aesthetic it's a left column. Either is valid.
- **Optional award icons** — small Gold / Silver / Helpful icons after the title (sparingly — 0–2 max)
- **Post body** — ~28–32px, 3–6 lines, Reddit-prose voice (lowercase starts, contractions, line breaks, parenthetical asides)
- **Action bar below post** — comment count, Share, Save, Hide / Report — small icons with thin labels, muted color
- **Comments section header** — sort dropdown (Top / Best / Controversial) and total comment count
- **Comments — 2 to 4 visible:**
  - Username + upvote count + time ago in a thin header row
  - Comment body (~24–28px)
  - Action row: Reply / Share / Award / `···`
  - **Thread indent lines** on the left for replies (single thin vertical line per nesting level)
  - The **top comment** is the supportive one that names the solution (this is where the soft CTA usually lives)
  - **One slightly contrarian or skeptical** comment adds realism ("ok but isn't this just X with extra steps?")
- **Reddit colors** — orange upvote when active (`#ff4500`-ish), muted greys for inactive icons, white-on-dark or white-on-white base depending on mode

Mobile aesthetic is recommended for Meta feed delivery (taller cards, simpler upvote inline). Old.reddit aesthetic is fine if the campaign brief calls for it.

## Design principles

### Principle #1: The subreddit name does half the work

The single most important word in the ad is the subreddit name. If it lands, the viewer's brain pre-loads "this is for me" before they read the title. Pick a sub name that an ICP member would actually subscribe to — narrow, specific, sometimes slightly self-deprecating. `r/PIFirmOwners` beats `r/lawyers`. `r/AgencyOps` beats `r/marketing`.

### Principle #2: The post is OP's vent; the top comment is the answer

Reddit's persuasion arc is: OP confesses → a more-experienced peer answers. The post should be vulnerable, specific, and a little frustrated. The top comment should be calm, slightly authoritative, and name the solution without selling it. That two-voice structure is what makes the ad feel real.

### Principle #3: Voice is confessional, lowercase, parenthetical

No marketing language. No "transform your business." Reddit voice: lowercase starts, contractions, line breaks for emphasis, occasional parenthetical asides ("(yes I tried zapier — didn't help)"), references to "the algorithm," "the sub," "OP." One earned em-dash is fine. Hashtags are an instant tell — never.

### Principle #4: Plausible upvotes for the niche

A niche B2B subreddit post with 38K upvotes reads fake. Pick numbers that match a real small-sub conversation: post at 47–340 upvotes, top comment at 28–180, lower comments dropping off. Comment counts in the action bar should be plausible too (12–60 for a niche thread).

### Principle #5: Pixel accuracy on the Reddit UI

Spacing, icon weight, the exact muted greys, the thread indent lines, the action-bar font weight — they all need to match Reddit. A pixel off and the brain flags "fake" without knowing why. Compare against a real screenshot before shipping.

## Layout rules

- **Post card frame** centered on the 1080×1080 canvas: ~960–1000px wide, height fills most of the canvas
- **Padding inside the card** ~32–48px on the post; ~24–32px on each comment
- **Thread indent** ~28–36px per nesting level, with a thin 2px vertical guide line in muted grey
- **Background outside the frame:** soft neutral (light mode) or near-black (dark mode) to sell the "screenshot" feel
- **Dark mode vs light mode:** both valid. Dark mode (`#1a1a1b` background, off-white text) tends to outperform on Meta feed scroll-stop. Light mode (`#ffffff` background, `#1c1c1c` text) reads more "screenshot taken at a desk."
- **Optional bottom CTA pill** below the post frame: small, accent-colored, sits in the canvas margin — never overlaid on the post itself

## Writing the post + comments

**The post body:**
- Lead with a confessional, specific opening line in the ICP's voice — pain or question, never a claim.
- 3–6 short lines. ~180–340 characters total reads best at this canvas size.
- Add ONE parenthetical aside or a list-of-things-already-tried — this is the realism marker.
- Optional `EDIT:` line at the bottom — strong place to slip in the resource mention.
- Avoid hashtags. Avoid corporate verbs. No exclamation marks unless one is genuinely earned.

**The top comment:**
- Calm, slightly authoritative tone. Names the solution by category, then optionally drops the resource name.
- Underclaim. *"helped a lot, not a magic bullet"* beats *"completely solved my business."*
- 2–4 short lines.
- This is usually where the soft CTA lives.

**The second comment:**
- Either reinforces the top comment ("+1, did this six months ago, time back is wild") OR adds gentle contrarian texture ("doesn't this just shift the work upstream though?"). One contrarian comment in the thread is the single biggest realism boost — fully positive threads look fake.

**Optional third/fourth comment:**
- A short OP reply ("appreciate it, will DM you"), a one-line agree, or a nested reply showing thread depth.

**Usernames:**
- Lowercase, mix of words and numbers/underscores. `u/marcus_intake`, `u/dani_ops`, `u/burned_out_pm_42`, `u/firmowner_tx`. No caps. No `_xxx_` or other obvious throwaway patterns unless the campaign brief calls for it.

## Style Catalog

Starter templates in [templates/](templates/). Each is a self-contained 1080×1080 HTML file rendering a Reddit post screenshot — subreddit header with ICP-coded sub name, flair pill, post title + body, action bar, comments header, and 2–4 indented comments (one supportive, one mild skeptic, optional OP reply) — plus the format-native CTA pill below the card. Copy, edit subreddit / OP / title / body / comments, render.

| # | Name | Template | Layout | Key Element |
|---|---|---|---|---|
| 1 | Dark Mobile Vent | [style-01-dark-mobile-vent.html](templates/style-01-dark-mobile-vent.html) | Mobile-aesthetic dark mode, Vent flair, EDIT line, supportive top comment + skeptic + answer | Vent → EDIT reveal — OP's own update plants the resource mention |
| 2 | Light Question Thread | [style-02-light-question-thread.html](templates/style-02-light-question-thread.html) | old.reddit-style left vote column, Question flair, 4 comments including OP reply | Two-column desktop chrome + OP responding sells "live discussion" |
| 3 | Dark SaaS Discussion | [style-03-dark-saas-discussion.html](templates/style-03-dark-saas-discussion.html) | Discussion + Gold flair, embedded quote block in body, deeper threaded reply chain | Awarded discussion + quote-block CMO line — the post is the proof |

**These are not the only styles.** Invent new layouts. Combine elements. The catalog grows as new concepts prove out in testing.

## QC checklist

- [ ] **Reddit authenticity:** at a glance, does it look like a real Reddit screenshot?
- [ ] **UI accuracy:** subreddit header, upvote arrows, action bar, comments header with sort, thread indent lines — all positioned correctly
- [ ] **Subreddit name carries the ICP:** narrow, plausible, ICP-coded
- [ ] **ICP present in at least two places:** subreddit name AND (title / body / username / commenter)
- [ ] **Plausible upvotes:** post and comment scores match a niche-sub thread (not viral numbers)
- [ ] **Voice is Reddit:** lowercase, contractions, parentheticals, no marketing language
- [ ] **OP vents, top comment answers:** the two-voice structure is intact
- [ ] **One contrarian or skeptical comment** present for realism
- [ ] **CTA feels native:** top-comment resource mention / EDIT line / accent pill outside the frame — never an overlaid button
- [ ] **Thumbnail test:** at 400px, can you read the subreddit name AND the post title AND identify the ICP?
- [ ] **No branding tells:** no logos overlaid, no real product names dropped except where the campaign explicitly wants the name
- [ ] **CSS rendering:** no overflow, clipping, missing icons, broken upvote arrows, broken thread lines
- [ ] **Scroll-stop:** would the shape of this image (Reddit card on neutral background) read as a screenshot at 2am?

If any check fails → fix the HTML and re-render.

## Workflow

**Hierarchy: Ad → Copy → Images.**

1. **Read `campaigns/{slug}/ads/{ad-name}/COPY.md` first** — the verbatim post title, body, and comments should be in there.
2. **Cast the thread.** Pick a subreddit name that names the ICP. Pick OP's username + the 2–4 commenter usernames. Decide dark mode vs light mode. Decide which comment carries the soft CTA.
3. **Create the ad folder if it doesn't exist:** `campaigns/{slug}/ads/{ad-name}/images/`.
4. **Compose the HTML** at `campaigns/{slug}/ads/{ad-name}/images/{ad-name}.html`. Build the post + comments thread faithfully — subreddit header, upvote column, title, flair, body, action bar, comments header, 2–4 comments with thread indent lines. Inline SVG icons or base64 — no network fetches at render time.
5. **Render the PNG:**
   ```bash
   node skills/shared/render-static.js \
     campaigns/{slug}/ads/{ad-name}/images/{ad-name}.html \
     campaigns/{slug}/ads/{ad-name}/images/
   ```
6. **Seed COPY** if it doesn't already exist: `node skills/shared/tools/backfill-copy.js` (or use the editor). Open `COPY.md` and clean up any auto-extraction quirks. Just the verbatim post + comments — no interpretive sections.
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
