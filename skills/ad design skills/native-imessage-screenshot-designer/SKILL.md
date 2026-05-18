---
name: native-imessage-screenshot-designer
description: Builds ads that look like a single iMessage screenshot from a one-on-one DM — blue/gray bubbles, contact header with avatar, status bar, input bar, often a Tapback reaction and a punchline reveal. The scroll-stop is the "someone just sent this to me" instinct. Different from chat-style-designer — this is ONE conversation frozen at ONE moment, not a composed multi-party arc. No templates; every screenshot composed from scratch.
---

# Native iMessage Screenshot Designer

**Production method:** HTML/CSS + Playwright → see [../shared/HTML-RENDER-REFERENCE.md](../shared/HTML-RENDER-REFERENCE.md)
**Default output size:** 1080×1080 (square)

You build ads that look like a single iMessage screenshot — the kind a friend would actually take and text to another friend. One-on-one DM, two speakers, 3–5 bubbles, often ending on a punchline or a Tapback reaction. The viewer's brain reads it as a real screenshot in 0.3 seconds; the message lands because they feel they're seeing something private and forwarded, not advertised. The most-screenshotted format on Meta.

This is one of the `native-format-*` lanes in this repo:

| Lane | Beat | Skill |
|---|---|---|
| Pure typography | bold-text-designer |
| Name the pain → resolve | problem-solution-designer |
| Diagram IS the ad | system-visual-designer |
| Composed multi-party conversation arc (3–4 speakers, full pain→amplify→turn→CTA) | [chat-style-designer](../chat-style-designer/SKILL.md) |
| Looks like a real tweet/X post | [native-tweet-designer](../native-tweet-designer/SKILL.md) |
| **Single iMessage screenshot — one-on-one DM, one moment, often a punchline reveal** | **native-imessage-screenshot-designer** (this skill) |

### vs. chat-style-designer — read this before you build

These two lanes look related and are not.

- **chat-style-designer** = a *composed conversation arc*. 3–4 speakers, full pain → amplify → turn → CTA arc, 5–7 messages, designed to walk the viewer through an emotional journey. The ad is the arc.
- **native-imessage-screenshot-designer** (this skill) = a *single screenshot moment*. Two people. 3–5 bubbles. Frozen at one beat — usually a punchline, a reveal, a brutal one-liner, or a Tapback reaction that lands the joke. The viewer thinks: *"someone took this and sent it to me."* The ad is the moment.

If the message lands harder as overheard ensemble dialogue → use chat-style-designer. If it lands harder as a forwarded one-on-one screenshot → use this skill.

## The cardinal rule

**It must pass for a screenshot a real person took and forwarded.** Not a designed conversation. A captured one.

If anything looks "off" — wrong bubble radius, tail on every bubble instead of just the last in a run, missing Delivered/Read receipt, wrong contact-header layout, fake-looking time — the illusion breaks and the ad dies. Reference real iMessage before shipping.

No templates. Every screenshot is composed from scratch.

## ICP callout — mandatory

Every ad must name the ICP on the canvas. In single-screenshot iMessage ads the ICP shows up *inside the screenshot itself*, never pinned outside.

The ICP appears in **at least two of these places**:

- **Contact name in the header** — `Mom`, `The Agency`, `PI Firm Boss`, `My Intake Manager`, `Jake — CMO`. Roles are stronger than real names here; "Mom" beats "Sarah Williams" because everyone reads "Mom" the same way.
- **Bubble content** — the ICP pain language appears verbatim inside a sent or received bubble
- **Contact subtitle / status** under the name — `Active now`, or a small handle line if shown
- **Tapback reaction phrasing** — when "Liked" or "Emphasized" sits above a bubble, what's being reacted to should be ICP-shaped

The contact name in the header is the floor. Never publish a single-iMessage ad without an ICP-bearing contact name.

## CTA — must feel native to the format

A real iMessage screenshot doesn't have a button. The CTA must respect that.

- **CTA emerges from the dialogue** — the last bubble drops the next step in natural texting voice: *"ok send me the link"*, *"it's in the bio i'll dm it"*, *"30 min walkthrough, only 2 spots left this week"*
- **Tapback-as-CTA** — a "Liked" or "Emphasized" reaction on the message containing the offer can carry weight: the receiver implicitly co-signs the next step
- **Post-frame accent pill below the phone** — brand-color pill, ≤ 4 words ending in `→`, pulled verbatim from `COPY.md`. Sits in the canvas margin, never overlaid on the chat

Never overlay a "Click here" button inside the chat. It kills the realism instantly. The chat is the screenshot; the pill is the door beneath it.

CTA copy comes from `COPY.md` — see [../shared/HTML-RENDER-REFERENCE.md § CTA is required](../shared/HTML-RENDER-REFERENCE.md).

## UI elements — required

A native iMessage screenshot must include all of these, positioned correctly:

- **Status bar at the top of the frame** — time top-left (e.g. `11:42`), signal dots + wifi + battery icon top-right. Small, SF Pro–like.
- **Contact header** — back chevron + unread count on the far left (e.g. `‹ 7`), centered column with a **large avatar circle** (~96–120px, monogram or single emoji or abstract — never a real face), the **contact name** below the avatar (bold, ~38–44px), and a small **subtitle** like `Active now` or a `>` info chevron. Optional FaceTime camera + info `i` icons on the right.
- **Conversation area** — soft white/system background, bubbles fill upward from the input bar
- **Sent bubbles** (you / the buyer-surrogate) — iOS Messages blue `#007AFF` with the subtle vertical gradient real iMessage uses, white text, right-aligned, ~28px corner radius
- **Received bubbles** (the contact) — light gray `#E9E9EB`, black text, left-aligned, same radius
- **Bubble tails** — only on the **last bubble in a same-sender run**, not every bubble. Blue tail bottom-right for sent runs; gray tail bottom-left for received runs.
- **Read receipts** — small gray text below the last sent bubble: `Delivered` or `Read 11:42 PM`. Pick one to set the emotional beat (Read = they saw it; Delivered = they haven't, ghosting tension).
- **Tapback reaction** (highly recommended) — small floating reaction badge attached to a bubble's top corner: heart, thumbs up, thumbs down, "!!", "?", or "Ha". Carries enormous weight in this format and is often the punchline. Reactions appear in a small pill-shaped container with a stem connecting to the bubble.
- **Typing indicator** (optional) — three small dark-gray dots in a light-gray bubble on the left side, signaling the contact is mid-reply. Strong tension tool when used as the last "bubble."
- **Input bar at the bottom of the frame** — circular `+` app-drawer icon on the left, rounded text input field with placeholder text (`iMessage` or `Text Message`) and a small **mic icon** inside the field on the right, **camera icon** to the left of the field. Subtle hairline divider above.
- **Optional Inline Date Stamp** — small centered gray text mid-thread: `iMessage` / `Today 11:38 PM` / `Yesterday`. Sells the "I scrolled up to find this" feel.

## Design principles

### Principle #1: The screenshot is one moment, not an arc

3–5 bubbles total is the sweet spot. Two people. Don't compose a journey — capture a beat. If you're writing 7 bubbles across 4 speakers, you're in chat-style-designer's lane, not this one.

### Principle #2: The last bubble carries the message

This format almost always ends on a punchline, a reveal, a brutal one-liner, or a Tapback reaction that lands the joke. Work backwards from the line you want screenshot-forwarded. Everything above it exists to set it up.

Strong last-bubble patterns:
- **Reveal** — the contact says the thing the buyer already knows is true
- **Punchline** — a one-line burn or "wait, what?" twist on the message above
- **Reaction beat** — last bubble is short and a Tapback above it (a "Liked" on a brutal stat) does the heavy lifting
- **Implied silence** — last "bubble" is a typing indicator that never finishes; the absence is the punch

### Principle #3: Contact name is the persona switch

Whoever the contact is, that's who the viewer feels they're texting. `Mom` makes it feel like an obligation. `The Agency` makes it feel like a vendor relationship. `My Intake Manager` puts the viewer in the boss's seat. `PI Firm Boss` puts them in the employee's seat. Pick the role that frames the viewer correctly *before* they read the first bubble.

### Principle #4: Tapbacks are a superpower — use one

A "Liked" heart above a pain bubble lands harder than another bubble repeating the pain. A "Ha" on a brutal one-liner shows the receiver agrees it's funny-because-it's-true. A "?" on a confident sales claim sells the viewer's exact skepticism. Reach for a Tapback before you reach for an extra bubble.

### Principle #5: Pixel accuracy is non-negotiable

Bubble radius (~28px), tail geometry, header layout, status-bar typography, the muted gray of the `Delivered` text, the exact iMessage blue gradient, the corner-rounding on the avatar circle, the input bar's hairline divider — they all need to match iOS. A pixel off and the brain flags "fake" without knowing why. Compare against a real screenshot before shipping.

## Layout rules

- **Phone frame** centered on the 1080×1080 canvas: ~760–820px wide, ~960–1020px tall, rounded bezel (~64px outer radius), optional small notch or Dynamic Island silhouette at top
- **Status bar height** ~44px, **contact header height** ~180px (the avatar + name take real estate — this is the iMessage look, don't shrink it)
- **Conversation area padding** ~28px horizontal, bubbles ~75% max width of the conversation area
- **Background outside the frame** — soft brand neutral or muted accent that suggests "phone in hand" — never busy
- **Optional post-frame CTA pill** sits in the canvas margin below the phone, small, accent-colored, ≤ 4 words + `→`

## Writing the screenshot

- **3–5 bubbles total.** Vary length: short reaction next to a longer line. Don't make every bubble grammatical. Real texts aren't.
- Mix sent and received — pure-sent or pure-received reads as monologue, not conversation
- Use contractions, lowercase starts, fragmentary phrasing, occasional `lol`/`fwiw`/`rn`. No marketing language. No exclamation marks unless one is genuinely earned.
- ICP vocabulary from `CAMPAIGN.md` should appear in at least one bubble verbatim
- If you use a Tapback, place it on the bubble it's reacting to (not the most recent bubble)
- If you use a typing indicator, it goes at the bottom of the thread, after all completed bubbles, before the input bar
- Pick `Delivered` vs `Read 11:42 PM` deliberately — they carry different emotions

## Style Catalog

Starter templates in [templates/](templates/). Each is a self-contained 1080×1080 HTML file rendering a single iMessage screenshot — status bar, contact header, bubbles with correct tails, read receipt, input bar — plus the format-native CTA pill below the phone. Copy, edit contact name / bubble copy / Tapback / receipt, render.

| # | Name | Template | Layout | Key Element |
|---|---|---|---|---|
| 1 | Tapback Punchline | [style-01-tapback-punchline.html](templates/style-01-tapback-punchline.html) | 5 bubbles, Read receipt, `!!` Tapback on the brutal stat bubble | Tapback IS the punchline — reaction carries the burn |
| 2 | Delivered Tension | [style-02-delivered-tension.html](templates/style-02-delivered-tension.html) | Two sent bubbles, `Delivered`, contact mid-typing indicator | Absence is the punch — the silence speaks for the buyer |
| 3 | Reveal From Mom | [style-03-reveal-from-mom.html](templates/style-03-reveal-from-mom.html) | Contact = "Mom", `Read` receipt, heart Tapback on the surrender bubble | Role-cast contact frames the viewer before bubble one — Mom calls them out |

**These are not the only styles.** Invent new layouts. Combine elements. The catalog grows as new concepts prove out in testing.

## QC checklist

- [ ] **Screenshot authenticity:** at a glance, does it look like a screenshot someone forwarded to you?
- [ ] **Single-moment shape:** 3–5 bubbles, two speakers, one beat — not a multi-party arc
- [ ] **Status bar correct:** time, signal/wifi/battery — positioned and styled accurately
- [ ] **Contact header correct:** back chevron + unread count, large avatar circle, contact name, optional subtitle / FaceTime / info icons
- [ ] **Bubble colors and shapes:** sent = iMessage blue `#007AFF` gradient, received = `#E9E9EB`, ~28px radius, tail only on last bubble in a same-sender run
- [ ] **Read receipt present:** `Delivered` or `Read 11:42 PM` under the last sent bubble (and the choice is deliberate)
- [ ] **ICP present:** in the contact name AND at least one other place (bubble content, subtitle, Tapback target)
- [ ] **Last bubble lands:** the bottom-most bubble is the punchline, reveal, or reaction the screenshot exists to deliver
- [ ] **Tapback used when it helps:** if a "Liked" or "Ha" or "?" reaction would carry the beat better than another bubble, you used it
- [ ] **Input bar present:** `+`, camera, text field with `iMessage` placeholder, mic icon — sells the realism
- [ ] **CTA feels native:** emerges from dialogue, or sits as a post-frame accent pill below the phone — never an overlay button inside the chat
- [ ] **Voice is human:** lowercase, contractions, fragments — no "transform your business," no marketing tells
- [ ] **Thumbnail test:** at 400px, can you read the last bubble AND identify the ICP via the contact name?
- [ ] **No branding:** no real personal names mapped to real people, no real logos, no real handles
- [ ] **CSS rendering:** no overflow, clipping, missing icons, misaligned tails, broken Tapback stems
- [ ] **Scroll-stop:** would the shape of this image (phone frame + 3–5 bubbles + neutral background) read as a forwarded screenshot at 2am?

If any check fails → fix the HTML and re-render.

## Workflow

**Hierarchy: Ad → Copy → Images.**

1. **Read `campaigns/{slug}/ads/{ad-name}/COPY.md` first** — the verbatim bubble text should be in there, in order.
2. **Cast the contact.** Pick a contact name that names the ICP (often a role: `Mom`, `The Agency`, `PI Firm Boss`, `My Intake Manager`). Decide who the viewer is — sender or receiver of the punchline.
3. **Pick the last bubble.** Identify the line the screenshot exists to deliver. Work backwards: what 2–4 bubbles set it up? Decide if a Tapback or typing indicator carries more weight than an extra bubble.
4. **Pick the receipt.** `Delivered` (tension, no answer) or `Read 11:42 PM` (they saw it). The choice shapes the emotion.
5. **Create the ad folder if it doesn't exist:** `campaigns/{slug}/ads/{ad-name}/images/`.
6. **Compose the HTML** at `campaigns/{slug}/ads/{ad-name}/images/{ad-name}.html`. Build the phone frame, status bar, contact header (avatar as inline SVG / base64 — monogram or single emoji, never a real face), bubbles with correct tail placement, Tapback if used, typing indicator if used, read receipt, input bar. No network fetches at render time — see [HTML-RENDER-REFERENCE.md](../shared/HTML-RENDER-REFERENCE.md).
7. **Render the PNG:**
   ```bash
   node skills/shared/render-static.js \
     campaigns/{slug}/ads/{ad-name}/images/{ad-name}.html \
     campaigns/{slug}/ads/{ad-name}/images/
   ```
8. **Seed COPY** if it doesn't already exist: `node skills/shared/tools/backfill-copy.js` (or use the editor). Open `COPY.md` and clean up auto-extraction quirks — short-bubble threads parse messily, so this step usually needs a human pass. Just the verbatim bubble text — no interpretive sections.
9. **QC** against the checklist above.

### Designing from COPY.md

`COPY.md` tells you *what the bubbles say*. This skill tells you *who the contact is, which bubble is the punchline, whether a Tapback carries it, and how to lay it out faithfully*. Never build a screenshot and write copy to match.

## Output

```
campaigns/{campaign-slug}/ads/{ad-name}/
  ├── COPY.md          ← canonical copy record (top-level — the ad's identity)
  ├── copy.json        ← same, machine-readable
  └── images/
      ├── {ad-name}.html   ← rendered-design HTML (the iMessage screenshot markup)
      └── {ad-name}.png    ← rendered PNG
```
