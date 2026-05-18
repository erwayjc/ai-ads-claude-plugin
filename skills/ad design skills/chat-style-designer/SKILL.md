---
name: chat-style-designer
description: Builds ads that read as authentic messaging-app conversations — iMessage DMs, group chats, Slack threads, WhatsApp, Discord. The marketing message is delivered through multi-party dialogue, not headlines. No templates; every conversation is composed from scratch for the campaign.
---

# Chat Style Designer

**Production method:** HTML/CSS + Playwright → see [../shared/HTML-RENDER-REFERENCE.md](../shared/HTML-RENDER-REFERENCE.md)
**Default output size:** 1080×1080 (square)

You build ads that tell a story through a conversation. The format mimics a real messaging platform — iMessage, group chat, Slack thread, WhatsApp, Discord — and the viewer reads dialogue between real-feeling people and absorbs the marketing message inside the talk.

This is the fourth design lane in this repo:

| Lane | Beat | Skill |
|---|---|---|
| Pure typography — one hook, one stat, one claim | scroll-stop through type | [bold-text-designer](../bold-text-designer/SKILL.md) |
| Name the pain, then resolve it | recognition → relief | [problem-solution-designer](../problem-solution-designer/SKILL.md) |
| Show the mechanism — the diagram IS the ad | comprehension through structure | [system-visual-designer](../system-visual-designer/SKILL.md) |
| Dialogue carries the message — peers talking about the pain and the fix | social proof through eavesdropping | **chat-style-designer** (this skill) |

Reach here when the buyer needs to *hear other people like them* talking about the problem and the solution. Conversation is doing the persuasion; you are not selling at them, you are letting them listen in.

## The cardinal rule

**The conversation is the ad. The viewer is eavesdropping.**

If the ad reads like marketing copy stapled onto chat bubbles, it dies. The viewer's brain needs to spend the first 2 seconds thinking *"is this real?"* — that's the scroll-stop. Then they keep reading because they recognize the speakers and the pain. The message lands because they overhear it, not because they're told it.

No templates. **Every conversation is composed from scratch.** The platform UI conventions are templates of a sort, but the dialogue itself must be specific to the campaign's ICP, pain, and offer every single time.

## Conversation flow — the four-beat arc

Every chat ad runs the same emotional arc through dialogue:

```
Message 1–2:  PAIN       — Someone names the frustration in their own voice
Message 3–4:  AMPLIFY    — Others relate, add specifics, raise the stakes
Message 5–6:  TURN       — Someone introduces the solution naturally
Message 7:    CTA        — The next step emerges as a remark, not a pitch
```

**Pacing rules:**
- Mix short reactions ("same") with longer messages (2–3 lines). Real conversations vary.
- Use contractions, lowercase starts, fragmentary phrasing. Texts are not essays.
- Silences matter — a typing indicator or a "seen 11:42p" can carry as much as a message.

## Speaker roles

A working chat ad needs distinct speakers with clear narrative jobs. **3–4 speakers is the sweet spot.** Two feels staged; five is too many faces to track at thumbnail size.

| Role | Job in the arc | Voice example |
|---|---|---|
| **Pain Expresser** | Opens with the frustration in ICP language | "spent 6 hours on intake forms today and still got 2 garbage leads" |
| **Fellow Sufferer** | Validates, adds a specific stat or detail | "same. my CPL is up 40% since the last algorithm change" |
| **Skeptic** | Asks the question the viewer is silently asking | "wait but doesn't that just mean more spam calls?" |
| **Solution Introducer** | Drops the answer naturally — never sells | "did a demo last week — they ran it on MY firm's data, not a generic deck" |
| **Convert** (optional) | Confirms it actually worked | "booked mine yesterday, only 2 slots left this month fwiw" |

Pain Expresser, Fellow Sufferer, and Solution Introducer are the minimum. A Skeptic earns trust by raising the objection out loud. A Convert closes the loop on proof.

## ICP callout — mandatory

**Every ad must name the ICP on the canvas.** Same rule as every other lane in this repo. In a chat ad the ICP shows up through *natural* placements — never grafted into a bubble.

The ICP appears in **at least two of these places**:

- **Group chat name at the top:** "PI Firm Owners 🇺🇸", "Agency Growth · Performance Marketing", "Indie SaaS Founders"
- **Speaker handle / display name:** "Sarah — Personal Injury PM", "@meta_ads_jake", "Dani | Series A Founder"
- **Channel name (Slack/Discord):** `#pi-firm-intake-pain`, `#agency-owners`, `#saas-growth-help`
- **Dialogue mention:** "anyone else's PI firm dealing with this rn?" — only if it sounds natural

The group/channel name at the top is the floor — never skip it. It's how the scroller knows in 0.5 seconds *who* is talking before they read a single bubble.

## CTA — must emerge from dialogue

The CTA must feel like a real remark, not a banner. The Solution Introducer or Convert drops the link in the natural way someone shares one in a group chat.

**Good:**
- "link's in their bio if anyone wants to see — they only take 3 firms a month"
- "i'll dm you the page, just don't go viral with it lol"
- "they have a 30-min walkthrough page, hold on — calendly.com/[redacted]"

**Bad:**
- "Click here to learn more!"
- "Visit our website today to transform your business."
- Any sentence that would not appear in an actual text thread.

**Visual CTA layer (optional but recommended):** beneath the chat phone-frame, a small accent-colored pill or button referencing the same destination — e.g. `→ See the 30-min walkthrough`. This is the explicit hand-off after the conversation has done the persuasion. Keep it small and below the chat; the conversation is the ad, the pill is just the door.

## Supported platforms

Each platform has UI conventions that **must be faithful** — if it looks "almost like iMessage" the trust evaporates. Reference the real app.

| Platform | Required UI elements |
|---|---|
| **iMessage / DM** | Blue sent bubbles (#007AFF gradient), gray received (#E9E9EB), rounded corners with tail on last bubble in a run, "Delivered"/"Read 11:42 PM" under last sent bubble, sender name + avatar at top, typing indicator (3 dots in gray bubble) |
| **Group iMessage** | Same as iMessage + sender name above each non-self bubble + small avatar to the left of received bubbles + group title in nav bar |
| **Slack thread** | Sidebar with workspace name + channel list, channel header (#channel-name + member count), avatar + bold display name + timestamp per message, threaded replies indented, emoji reactions strip ("👀 3   🙏 2"), "Thread" pane title |
| **WhatsApp** | Light/dark green sent bubbles (#DCF8C6 light or #005C4B dark), white received with subtle shadow, double-blue checkmarks for read, timestamp inside bubble bottom-right, group name + member count in header |
| **Discord** | Dark theme (#36393F), server icon column on far left, channel sidebar (#channel-name list), large avatars on the left of messages, bold username with role color + small timestamp, reactions row, "BOT" tag if applicable |

**Pick one platform per ad.** Hybrid UIs read as fake immediately.

## Design principles

### Principle #1: Authenticity beats polish

Slight visual imperfection helps. Real chats have lowercase starts, typos that go uncorrected, abbreviations (rn, tbh, fwiw, lol). A perfectly polished thread reads as ad copy. A slightly messy thread reads as eavesdropping.

### Principle #2: Every speaker must sound different

Voice differentiation does what color differentiation does in other lanes. The Skeptic doesn't talk like the Pain Expresser. Vary sentence length, punctuation habits, emoji usage, capitalization style across speakers. If you can swap two speakers' messages and nothing changes, you have one speaker pretending to be three.

### Principle #3: The pain comes first, always

Never open with the solution. Never open with "Have you heard about…". The first 1–2 messages are pure frustration in the ICP's words. The viewer must recognize themselves in the pain before they will listen to the fix.

### Principle #4: The accent color marks the platform, not the message

In chat ads the accent system *is* the platform's native color (iMessage blue, WhatsApp green, Slack purple, Discord blurple). Don't fight that. Add one *secondary* accent for the optional CTA pill below the frame — that's where your brand color can appear. Inside the chat frame, stay platform-faithful.

### Principle #5: Frame the chat in a phone-shaped container

The conversation should live inside a rounded phone/desktop frame on the 1080×1080 canvas — bezel, status bar (signal/wifi/battery), nav bar (back arrow + group name + info icon). The frame is what makes it read as a *screenshot* at thumbnail size, not a generic UI mockup. Padding around the frame is where the ICP pill (optional in this lane) or the post-chat CTA pill lives.

## Writing the dialogue

### Voice rules

- Use natural language — contractions, casual phrasing, lowercase
- Mix message lengths: 1-line reactions next to 2–3 line statements
- Include realistic details: timestamps, "Read" receipts, "typing…" indicators, reactions
- Don't make every message grammatical — real texts aren't
- Don't have every speaker agree immediately — the Skeptic exists for a reason
- Don't use marketing language inside dialogue ("revolutionary", "game-changing", "transform your business") — these are tells
- Don't have a speaker recite features. Have them describe an experience: *"they ran it on my actual data in front of me"* not *"they offer custom analytics."*

### Avatar / ICP language

The ICP keywords from `CAMPAIGN.md` should appear in:
- The group / channel name at the top
- At least one speaker's display name or handle
- At least one bubble, in natural phrasing

If the ICP is "personal injury law firms," the chat is in a group called `PI Firm Owners` or a channel `#pi-firm-intake`, one speaker is `Marcus · PI Firm PM`, and the opening pain bubble says something like *"3rd month my intake team can't keep up — losing leads to the firm down the street."*

### Message count

**5–7 messages is the sweet spot.** Fewer and the arc doesn't land; more and the ad doesn't read at thumbnail size. The viewer should be able to scan the conversation in ~3 seconds and feel the arc, then read more carefully in the next 5 seconds.

## Layout rules

- **Phone frame:** ~720–820px wide, ~960–1020px tall, centered on the 1080×1080 canvas
- **Status bar at top of frame:** time, signal, wifi, battery — small, realistic
- **App nav bar below status:** back arrow, group/channel title, info icon
- **Conversation area:** scroll-implied (no explicit scrollbar), bubbles fill from top
- **Input bar at bottom of frame:** "iMessage" placeholder, mic icon, camera — sells the realism
- **Outside the frame:** background can be a soft brand color, a subtle gradient, or a flat neutral. Optional small ICP pill above the frame. Optional CTA pill below the frame.

## QC checklist

Run through this on every image before shipping:

- [ ] **Platform authenticity:** at a glance, does it look like the real messaging app?
- [ ] **Conversation naturalness:** does the dialogue read like real people talking, not marketing copy?
- [ ] **Speaker differentiation:** is each speaker visually distinct (name, color, alignment) and *vocally* distinct?
- [ ] **3–4 speakers:** not 2 (staged), not 5+ (cluttered)
- [ ] **Arc clarity:** is the pain → amplify → turn → CTA arc readable in one pass?
- [ ] **Pain comes first:** are the first 1–2 messages frustration, not solution?
- [ ] **ICP present:** is the ICP named in the group/channel title AND at least one other place (handle, dialogue)?
- [ ] **CTA feels natural:** does the solution emerge as a remark, not a banner inside the bubbles?
- [ ] **Optional post-chat CTA pill:** if used, is it small, accent-colored, sits below the frame?
- [ ] **Thumbnail test:** at 400px, can you tell it's a chat AND identify the ICP?
- [ ] **Readability:** are all bubbles legible at thumbnail size? (Bubbles must be sized for the canvas, not realistic phone DPI.)
- [ ] **No marketing tells:** no "revolutionary," "game-changing," "transform your business," or sentences no one would text
- [ ] **No branding:** no real logos, no real personal names, no real handles that map to actual accounts
- [ ] **CSS rendering:** no overflow, clipping, overlap, missing fonts, or broken bubble tails
- [ ] **Scroll-stop:** would the *shape* of this image (phone frame + bubbles) stop your scroll long enough to read the first bubble?

If any check fails → fix the HTML and re-render.

## Workflow

**Hierarchy: Ad → Copy → Images.** The copy file is the ad's identity; the HTML and PNG are images downstream of it.

1. **Read `campaigns/{slug}/ads/{ad-name}/COPY.md` first.** The verbatim conversation should be in there — or, if the ad is being composed for the first time, the headline / pain / offer phrasing that the dialogue must support.
2. **Pick the platform.** Match it to the ICP: B2B agency owners → Slack thread; consumer / younger ICP → iMessage; founder peer groups → group iMessage; community-driven product → Discord; international or WhatsApp-native audiences → WhatsApp.
3. **Cast the speakers.** Decide 3–4 roles from the table above. Give each a display name that pulls ICP language. Give each a voice (sentence length, punctuation, emoji habits).
4. **Write the arc.** 5–7 messages. Pain → amplify → turn → CTA. Use ICP vocabulary from `CAMPAIGN.md` verbatim where you can.
5. **Create the ad folder if it doesn't exist:** `campaigns/{slug}/ads/{ad-name}/images/`.
6. **Compose the HTML** at `campaigns/{slug}/ads/{ad-name}/images/{ad-name}.html`. Build the phone frame, status bar, nav bar, bubbles, input bar — faithful to the chosen platform. Embed any avatars as inline SVG or base64 (no network fetches at render time — see [HTML-RENDER-REFERENCE.md](../shared/HTML-RENDER-REFERENCE.md)).
7. **Render the PNG:**
   ```bash
   node skills/shared/render-static.js \
     campaigns/{slug}/ads/{ad-name}/images/{ad-name}.html \
     campaigns/{slug}/ads/{ad-name}/images/
   ```
8. **Seed COPY** if it doesn't already exist: `node skills/shared/tools/backfill-copy.js` (or use the editor's Save & Render PNG). Open `COPY.md` and clean up any auto-extraction quirks — chat ads parse messily, so this step usually needs a human pass. Just the verbatim dialogue — no interpretive sections.
9. **QC** against the checklist above.

### Designing from COPY.md

For any image work, the workflow is:

1. **Read `campaigns/{slug}/ads/{ad-name}/COPY.md`** — the verbatim words / dialogue.
2. **Use the principles in this SKILL** — platform choice, speaker roles, arc, accent rules — to translate that copy into a faithful chat screenshot.

`COPY.md` tells you *what the speakers say*. This skill tells you *which platform to mimic, who's speaking, and how to lay it out*. Never build a chat screenshot and write copy to match.

## Output

```
campaigns/{campaign-slug}/ads/{ad-name}/
  ├── COPY.md          ← canonical copy record (top-level — the ad's identity)
  ├── copy.json        ← same, machine-readable
  └── images/
      ├── {ad-name}.html   ← rendered-design HTML (the chat screenshot markup)
      └── {ad-name}.png    ← rendered PNG
```
