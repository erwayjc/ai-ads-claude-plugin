---
name: native-linkedin-post-designer
description: Builds ads that look like a LinkedIn feed post — profile pic, name + headline, post body, reaction strip, comment count. The "professional voice" format implies authority and operator credibility. No templates; every post composed from scratch.
---

# Native LinkedIn Post Designer

**Production method:** HTML/CSS + Playwright → see [../shared/HTML-RENDER-REFERENCE.md](../shared/HTML-RENDER-REFERENCE.md)
**Default output size:** 1080×1080 (square)

You build ads that look like a LinkedIn post. The format implies an operator-voice POV — someone with a title, a track record, and a take. Persuasion through the *form* of professional commentary, not designed copy.

This is one of the `native-format-*` lanes. See [native-tweet-designer](../native-tweet-designer/SKILL.md) for lane overview.

## The cardinal rule

**It must read as a LinkedIn post written by an operator.** The voice is more serious than Twitter, more structured than a text thread. Line breaks are heavier, hooks are sharper, and the closing line earns its weight. If it reads as marketing, it dies.

No templates. Every post is composed from scratch.

## ICP callout — mandatory

The ICP appears inside the post card. **At least two of these placements:**

- **Author headline under the name** — e.g. `Managing Partner @ PI Firm Growth Network`, `Founder · Performance Agency for SaaS`
- **Post body** — quotes ICP language verbatim, names the buyer's role
- **Hashtags at the end** (sparingly — 2–3 max) — e.g. `#piattorneys #intakeops`
- **A "see who reacted" thumbnail row** below the post hinting at peer endorsement

## CTA — must feel native to the format

The CTA is one of:

- **A closing line in the post body** — *"DM me if your firm is in this boat. Walkthrough page on my profile."*
- **A reply card stacked below** with a Convert voice
- A **post-frame accent pill** below the LinkedIn card, brand color, ≤ 4 words ending in `→`, pulled from `COPY.md`

Never put a sales-banner CTA inside the post body.

## UI elements — required

- **LinkedIn card chrome:** white card with soft shadow, ~16px border radius
- **Author block at top:**
  - Profile photo (~84–96px circle, neutral illustration / monogram — no real faces)
  - Name (bold ~36px) with optional "• 1st" connection indicator
  - Headline (~28px, muted) — title + company
  - Timestamp + globe icon — `2h · 🌐`
- **Post body:**
  - First line is the **hook** — ~38px, often a single sentence with a break before the body
  - Body paragraphs separated by blank lines (LinkedIn-style line breaks)
  - Optional `🔵` / `📌` / `→` accent characters for visual rhythm
  - 80–180 words total
  - Optional hashtag row at the end
- **Engagement strip below:**
  - Reaction icons (👍 ❤️ 💡 👏) stacked left, count to the right
  - Comments count, reposts count
  - Action buttons row (Like, Comment, Repost, Send) — small, muted

## Design principles

### Principle #1: The hook line carries the post

LinkedIn's algorithm is hook-driven. The first line shows above the "...see more" fold. Treat it as a one-line ad in its own right — sharp, specific, controversial-ish.

### Principle #2: Operator voice, not marketer voice

Operators write: *"We ran intake for 14 PI firms in Q1. Here's what I noticed."* Marketers write: *"Are you a personal injury firm struggling with leads?"* Pick operator voice every time.

### Principle #3: Use the line break aggressively

LinkedIn posts use single-sentence paragraphs separated by blank lines. This makes the post read fast and scannable. Don't write dense paragraphs.

### Principle #4: One controversial-ish claim per post

A safe post gets no engagement. A spicy claim ("most agencies don't run intake — they just hand you the lead and disappear") earns the read. One sharp claim per post; don't stack three.

### Principle #5: Match LinkedIn's visual language

System font (looks like Source Sans / -apple-system on Mac), correct profile-photo geometry, correct color palette (#0a66c2 blue for links/CTAs, white card, muted body text). Pixel-faithful.

## Layout rules

- **LinkedIn card** centered on canvas, ~960px wide
- **Card padding:** ~32–40px on all sides
- **Background outside the frame:** soft LinkedIn-ish neutral (#f3f2ef) or brand color
- **Optional bottom CTA pill** in canvas margin below the frame

## Writing the post

- **Hook line:** ≤ 12 words, ICP voice — `"Most PI firms lose 60% of their leads at the intake stage."`
- **Body:** 3–6 short paragraphs (single-sentence each works), separated by blank lines
- **Specifics throughout:** numbers, sizes, named workflows. Operator detail.
- **Closing line:** the CTA or the punch — `"DM me if your firm is feeling this. I'll send the walkthrough."`
- **Reaction count:** plausible for the persona — `247 reactions · 41 comments` for a niche-operator persona, NOT `12K likes`

## Style Catalog

Starter templates in [templates/](templates/). Each is a self-contained 1080×1080 HTML file rendering a LinkedIn post card — author block with title-headline naming the ICP, hook line, single-sentence-paragraph body, reaction strip + comment count + action row — plus a `0a66c2` accent CTA pill below the card. Copy, edit author + hook + body + reactions, render.

| # | Name | Template | Layout | Key Element |
|---|---|---|---|---|
| 1 | Operator Hook | [style-01-operator-hook.html](templates/style-01-operator-hook.html) | Sharp first-line hook, 5 single-sentence paragraphs, hashtag row | Hook line does most of the work; body delivers operator detail |
| 2 | Story Confession | [style-02-story-confession.html](templates/style-02-story-confession.html) | "I fired our biggest client" narrative + blue-bar pull list + closing CTA | Vulnerability + a 3-rule frame = operator-voice authority |
| 3 | Data Callout | [style-03-data-callout.html](templates/style-03-data-callout.html) | Hook + body wrapped around a blue stat-card image with 4 metric rows | Embedded stat card is the scroll-stop; LinkedIn-native image inside the post |

**These are not the only styles.** Invent new layouts. Combine elements. The catalog grows as new concepts prove out in testing.

## QC checklist

- [ ] **LinkedIn authenticity:** looks like a real LinkedIn post
- [ ] **Card chrome:** padding, shadow, border radius, color palette accurate
- [ ] **Author block:** profile pic, name, headline, timestamp + globe — correct
- [ ] **Hook line lands:** ≤ 12 words, sharp, scannable
- [ ] **Operator voice:** specifics, numbers, named workflows — not marketer adjectives
- [ ] **Line breaks aggressive:** single-sentence paragraphs, blank lines between
- [ ] **One spicy claim:** post earns the read, doesn't stack three angles
- [ ] **ICP present:** headline AND at least one other placement
- [ ] **Plausible engagement:** counts match a niche-operator post, not a viral
- [ ] **CTA feels native:** closing line, reply card, or post-frame pill — never overlay banner
- [ ] **Thumbnail test:** at 400px, can you read the hook line AND identify the ICP?
- [ ] **No branding:** no real company names that map to actual orgs, no real personal names
- [ ] **CSS rendering:** no overflow, broken icons, missing avatar
- [ ] **Scroll-stop:** does the card-on-canvas read as a real LinkedIn screenshot at 2am?

If any check fails → fix the HTML and re-render.

## Workflow

1. **Read `campaigns/{slug}/ads/{ad-name}/COPY.md`** — hook line + body + closing line should be in there.
2. **Cast the author.** Operator name + headline that names the ICP.
3. **Write the hook line first.** It does most of the work.
4. **Write the body in single-sentence paragraphs.** Specifics, numbers, named workflows.
5. **End on the punch or CTA line.**
6. **Create the ad folder if needed.**
7. **Compose the HTML** at `images/{ad-name}.html`. LinkedIn card chrome, author block, body with proper line breaks, engagement strip.
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
