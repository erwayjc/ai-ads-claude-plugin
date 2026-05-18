---
name: native-spotify-podcast-designer
description: Builds ads that look like a Spotify or Apple Podcasts "Now Playing" episode screen — huge episode artwork, episode title as headline, show name as ICP, progress bar, play controls, optional description. The scroll-stop is format recognition; the viewer reads "podcast I might subscribe to" before realizing it's an ad. No templates; every Now Playing screen composed from scratch.
---

# Native Spotify / Apple Podcasts Designer

**Production method:** HTML/CSS + Playwright → see [../shared/HTML-RENDER-REFERENCE.md](../shared/HTML-RENDER-REFERENCE.md)
**Default output size:** 1080×1080 (square)

You build ads that look like a podcast player's "Now Playing" screen. The episode title carries the headline, the show name carries the ICP, and the artwork is a designed cover. The viewer's brain reads "podcast" first and "ad" second — that delay is the scroll-stop. The format implies authority, niche audience, and ongoing conversation, all of which a billboard ad has to work to earn.

This is one of the `native-format-*` lanes in this repo:

| Lane | Beat | Skill |
|---|---|---|
| Pure typography | bold-text-designer |
| Name the pain → resolve | problem-solution-designer |
| Diagram IS the ad | system-visual-designer |
| Peers talking | chat-style-designer |
| Looks like a real tweet/X post | native-tweet-designer |
| **Looks like a podcast Now Playing screen** | **native-spotify-podcast-designer** (this skill) |

Reach here when the message can be reframed as an episode of a show the ICP would actually listen to. The format works hardest when the title is a strong claim or a contrarian take, and the show name says exactly who the listener is.

## The cardinal rule

**The format is the ad. If it doesn't pass for a real Now Playing screen at first glance, it fails.**

Wrong control geometry, wrong progress bar position, a logo where there shouldn't be one, an off-brand accent color — any of these break the illusion. Reference the real Spotify or Apple Podcasts UI and match it pixel-for-pixel. The viewer's instinct must say "podcast" in 0.3 seconds.

No templates. Every Now Playing screen is composed from scratch.

## ICP callout — mandatory

Same rule as every lane in this repo: the ICP must be on the canvas. In native podcast ads the ICP shows up *inside* the format, not pinned outside it.

The ICP appears in **at least two of these places**:

- **Show name** (always) — `The PI Firm Operator`, `Agency Math`, `SaaS Founder Brief`, `Roofing Ops Weekly`. Should sound like a real podcast someone in this niche would already follow.
- **Episode title** — ICP language verbatim inside the title (`Why most PI firms lose 60% of their leads at intake`).
- **Episode description / show notes block** — opening line names the audience (`For PI firm owners running paid intake...`).
- **Host name byline** (optional, under show name) — `with Marcus Vale · ex-PI ops`.

The show name is the floor. Never publish a native podcast ad without an ICP-bearing show name.

## CTA — must feel native to the format

A Now Playing screen has no "buy" button. The CTA is one of:

- A **next-step line inside the episode description** — *"Full breakdown + the 5-step intake script at the link in show notes."*
- A **"Show notes" peek** at the bottom of the description with a styled link/timestamp — `→ pifirmoperator.example/intake`
- A **post-frame accent pill** below the phone, brand color, ≤ 4 words ending in `→`, pulled verbatim from `COPY.md`

Never overlay a generic "Click here" button on the player. Never fake a giant brand banner across the artwork. The CTA either lives where a real podcast would put it (description, show notes) or sits outside the phone frame as a clearly-separate accent.

CTA copy comes from `COPY.md` — see [../shared/HTML-RENDER-REFERENCE.md § CTA is required](../shared/HTML-RENDER-REFERENCE.md).

## UI elements — required

Pick one mode per ad. Don't mix Spotify and Apple Podcasts chrome in the same screen.

### Mode A — Spotify Now Playing

- **Phone frame** with rounded corners, centered on canvas
- **iOS status bar** at the top — time (left), signal · wifi · battery (right)
- **Top control row:** down-chevron (collapse) left · centered label (`LISTENING ON IPHONE` in tracked caps, or queue title) · three-dot menu right
- **Episode artwork** — HUGE square block (~620–720px wide) dominating the upper half. Either a gradient cover with the episode title laid into it, or a neutral illustration / shape composition. Never use a real podcast's artwork or a real logo.
- **Title row** below artwork: episode title (bold, ~38–44px, can wrap to 2 lines) on the left, **heart icon** on the right
- **Show name** under the title (smaller, muted, ~26–30px) — optional verified checkmark to the right
- **Progress bar** — full-width thin track with filled portion, dot handle, elapsed time on the left (`23:14`), remaining/total on the right (`-45:32`)
- **Playback controls row** — Shuffle · Previous · large center **Play/Pause circle** (~88px, Spotify green `#1DB954` fill) · Next · Repeat
- **Bottom row** — Devices icon left (with `Connect to a device` label optional) · Share icon right
- **Aesthetic:** black or deep-gradient background (often gradient from artwork's dominant color into black), white text, green accent. Inter / system-ui as the font (don't claim to be Spotify Circular).

### Mode B — Apple Podcasts Now Playing

- **Phone frame** with rounded corners, centered on canvas
- **iOS status bar** at the top
- **Top control row:** down-chevron (collapse) left · `Now Playing` or show title center · share / queue right
- **Episode artwork** — same HUGE square block, slightly elevated with subtle drop shadow
- **Title row** under artwork: episode title (bold), with a smaller **show name** byline below; on the right, a chevron `›` or `•••` menu
- **Progress bar** with elapsed (left) and remaining (right) timestamps, often with `1×` speed and `Sleep Timer` chips above or below
- **Playback controls row** — Skip-back-15 · large center **Play/Pause** (~88px, dark or accent fill) · Skip-forward-30. Apple uses skip arrows, not previous/next, in the podcasts app.
- **Secondary row** — AirPlay icon left · `1×` speed pill center · Sleep timer / queue right
- **"Up Next" peek** at the very bottom of the screen (small, ~80px tall) — partial card of the next episode visible above the home indicator
- **Aesthetic:** light background pulled from artwork color, or dark mode with purple/orange podcast accent. SF Pro / system-ui font.

## Design principles

### Principle #1: The episode title IS the headline

Write the title like a podcast episode that a niche operator would actually click. Strong claim, contrarian take, or named pain — never a tagline. `"Why most PI firms lose 60% of their leads at intake — and the fix"` works. `"Grow your law firm with our system"` does not.

### Principle #2: The show name names the audience

The show name should answer "who is this for?" in under five words and feel like an existing podcast — `The PI Firm Operator`, `Agency Math`, `Roofing Ops Weekly`. If the viewer doesn't immediately self-identify with the show name, the ad fails before the title is read.

### Principle #3: The artwork is real design real estate

A flat color square is wasted space. Treat the artwork as its own mini-poster: gradient background, a single bold word or stat, a simple shape — the kind of cover the viewer would actually see in a Spotify recommendation row. The artwork can echo the episode title or carry the ICP visually.

### Principle #4: One mode, pixel-accurate

Spotify and Apple Podcasts look different — control glyphs, layouts, accent colors, font weights. Pick one and match it. A Spotify screen with Apple skip-15 arrows reads as fake immediately, even if the viewer can't articulate why.

### Principle #5: Plausible runtime and progress

`23:14 / -45:32` (a ~68-min episode, partway through) reads real. `00:04 / -90:00` reads like a fresh placeholder. Choose times that match a podcast a busy operator would actually have running.

## Layout rules

- **Phone frame:** ~720–800px wide, ~1000–1040px tall, centered on canvas
- **Background outside the frame:** soft brand color, neutral grey, or a dimmed echo of the artwork's dominant color — sells the "screenshot in a feed" feel
- **Inside the frame:** Spotify dark (gradient → black) or Apple light/dark depending on mode
- **Artwork block:** ~620–720px wide, square, top ~38–50% of the screen area below the status bar
- **Title + show:** ~80–110px of vertical space, immediately below the artwork
- **Progress bar:** thin (4–6px track), full content width, ~30px below title
- **Playback control row:** ~140–170px tall, controls vertically centered, big play button ~88px diameter
- **Bottom utility row / Up Next:** lives in the bottom ~80–110px of the screen
- **Optional bottom CTA pill:** small, accent-colored, in the canvas margin below the phone frame

## Writing the episode

- **Show name** (≤ 4 words, ICP-bearing) — set this first. It defines what the title can be.
- **Episode title** — the headline. 6–14 words. Specific claim, named pain, or contrarian take. Title case or sentence case — match the platform: Spotify often sentence case, Apple often title case.
- **Host byline** (optional) — `with [first last] · [credential]`
- **Episode description** (optional, 2–4 lines, ~40–70 words) — opens by naming the listener, teases the content, ends with the next-step line that functions as the CTA.
- **Show notes peek** (optional) — 1–3 lines that look like timestamped chapter rows or a single link the CTA URL can naturally live in.
- **Progress + runtime** — pick a plausible elapsed / remaining pair.

## Style Catalog

3 starter layouts. Each is a standalone HTML template in [templates/](templates/). Copy, edit show name + episode title + artwork color, render.

| # | Name | Template | Layout | Key Element |
|---|---|---|---|---|
| 1 | Spotify Now Playing | [style-01-spotify-now-playing.html](templates/style-01-spotify-now-playing.html) | Dark gradient + designed artwork + prev/next + green play | Spotify dark chrome — episode title in cover art |
| 2 | Apple Podcasts | [style-02-apple-podcasts.html](templates/style-02-apple-podcasts.html) | Light gradient + skip-15/30 + Up Next peek | Apple chrome with platform-native skip arrows |
| 3 | Spotify Show Notes | [style-03-spotify-show-notes.html](templates/style-03-spotify-show-notes.html) | Header + description + chapter list with timestamps | Episode page view — chapters carry the pitch |

**These are not the only styles.** Invent new layouts. Combine elements. The catalog grows as new concepts prove out in testing.

## QC checklist

- [ ] **Format authenticity:** at a glance, does it look like a real Now Playing screen?
- [ ] **Mode is consistent:** all elements match either Spotify OR Apple Podcasts — no mixing
- [ ] **Status bar correct:** time, signal, wifi, battery
- [ ] **Artwork dominates:** big square, designed (not a flat color block)
- [ ] **Title reads as a podcast title:** specific, claim-driven, no marketing-speak
- [ ] **Show name names the ICP:** sounds like a real podcast someone in this niche would follow
- [ ] **Controls correct:** Spotify uses prev/next + shuffle/repeat; Apple uses skip-15 / skip-30 + AirPlay / speed / sleep
- [ ] **Progress bar plausible:** elapsed + remaining match a real episode length
- [ ] **Heart / share / menu icons present** where the real UI places them
- [ ] **ICP present:** in show name AND at least one other place (title, description, host byline)
- [ ] **CTA feels native:** description line, show notes link, or post-frame accent pill — never overlay a generic button
- [ ] **No real brand marks:** no Spotify wordmark, no Apple Podcasts wordmark, no real show names, no real host names
- [ ] **Thumbnail test:** at 400px, can you read the episode title AND identify the show name?
- [ ] **CSS rendering:** no overflow, clipped icons, broken artwork, missing controls
- [ ] **Scroll-stop:** does the phone-on-canvas read as a real screenshot at 2am?

If any check fails → fix the HTML and re-render.

## Workflow

**Hierarchy: Ad → Copy → Images.**

1. **Read `campaigns/{slug}/ads/{ad-name}/COPY.md` first** — the show name, episode title, and any description / show notes should be in there.
2. **Pick Spotify OR Apple Podcasts.** Decide on aesthetic (Spotify dark + green is the workhorse; Apple light or dark with podcast accent is the alternative). Commit fully — no mixing.
3. **Cast the show.** Lock the show name first (it carries the ICP), then sharpen the episode title (it carries the headline), then write the optional description / host byline / show notes.
4. **Design the artwork.** Decide whether it's a gradient cover with the title laid in, or an abstract / illustrative cover. Sketch it as a self-contained mini-poster.
5. **Create the ad folder if it doesn't exist:** `campaigns/{slug}/ads/{ad-name}/images/`.
6. **Compose the HTML** at `campaigns/{slug}/ads/{ad-name}/images/{ad-name}.html`. Build the phone frame, status bar, top control row, artwork, title + show row, progress bar, playback controls, and bottom row faithfully for the chosen mode. All icons inline SVG, all artwork inline (SVG / CSS gradients / base64). No network fetches at render time. Google Fonts via `@import` only.
7. **Render the PNG:**
   ```bash
   node skills/shared/render-static.js \
     campaigns/{slug}/ads/{ad-name}/images/{ad-name}.html \
     campaigns/{slug}/ads/{ad-name}/images/
   ```
8. **Seed COPY** if it doesn't already exist: `node skills/shared/tools/backfill-copy.js` (or use the editor). Open `COPY.md` and clean up any auto-extraction quirks. Just the verbatim show name, episode title, and description — no interpretive sections.
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
