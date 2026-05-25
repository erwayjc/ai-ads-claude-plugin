# CLAUDE.md

Project guidance for Claude Code working in this workspace.

## What this workspace is

An AI-driven ad design and launch system. The user — usually a non-technical workshop student — uses Claude Code to scaffold ad campaigns, draft copy, render image creatives (HTML/CSS or Gemini Nano Banana), and push them into Meta Ads via the Meta Ads MCP connector.

This workspace is a Claude Code **plugin**: `ai-ad-designer`. The plugin's skills live under `skills/`. The user's work product (campaigns and ads) lives under `campaigns/`.

## On every session — what to do first

1. **If the user is new** (no `.env` exists, or no `node_modules` in `skills/shared/`), suggest running `/setup` — it invokes the **workshop-setup** skill to walk them through first-time install of Node, Playwright, the Gemini API key, and the Meta Ads MCP connector.

2. **Otherwise**, read whichever files are relevant for the user's request:
   - For any image work: read `skills/shared/HTML-RENDER-REFERENCE.md` (HTML lanes) or `skills/shared/GEMINI-REFERENCE.md` (Gemini lane).
   - For any campaign work: read the relevant `campaigns/{slug}/CAMPAIGN.md`.
   - For any ad work: read the ad's `COPY.md` **first** — copy leads, image follows.

## The cardinal rule

**Copy first. Image second. Always.**

Every ad's identity is its `COPY.md` file — verbatim headline, subtext, and CTA. Images are downstream renders of that copy. Never generate an image and write copy to match it. If a user asks you to "make me an ad," your first move is to confirm or draft `COPY.md`, not to render a PNG.

## Defaults

- **Image size:** 1080×1080 (square). Only override when the campaign explicitly asks otherwise.
- **HTML production:** single self-contained file → Playwright renders to PNG via `skills/shared/render-static.js`.
- **Gemini production:** prompt-to-PNG via `skills/shared/tools/gemini-generate.js` (Nano Banana, `gemini-2.5-flash-image`).
- **No network fetches at render time** for HTML ads. Embed images as inline SVG or base64. Google Fonts via `@import` is the only allowed network resource.
- **CTA is mandatory** on every ad. Action-first verb, ≤ 4 words, ends with `→`. No CTA → not an ad.
- **ICP callout is mandatory** on every ad. The viewer must know in 2 seconds who the ad is for.

## Directory structure

```
ai-ad-designer/
├── .claude-plugin/plugin.json    ← plugin manifest
├── .env / .env.example           ← Gemini API key
├── README.md                     ← student-facing docs
├── CLAUDE.md                     ← this file
│
├── commands/                     ← slash commands (/setup, /new-campaign, /new-ad, /upload-to-meta, /new-design-skill)
│
├── campaigns/
│   ├── CAMPAIGNS.md
│   ├── _template/                ← blank scaffold — never edit
│   └── {slug}/
│       ├── CAMPAIGN.md           ← project, ICP, offer, messaging
│       └── ads/
│           └── {ad-name}/
│               ├── COPY.md       ← the ad's identity
│               ├── copy.json
│               └── images/
│                   ├── {ad-name}.html        ← HTML lanes only
│                   ├── {ad-name}.prompt.txt  ← Gemini lane only
│                   └── {ad-name}.png         ← the rendered ad
│
└── skills/
    ├── workshop-setup/SKILL.md           ← first-time setup walkthrough
    ├── campaign-manager/SKILL.md         ← scaffolds campaigns
    ├── ad-skill-builder/SKILL.md         ← meta-skill: scaffold new design lanes
    ├── gemini-image-designer/SKILL.md    ← full-ad Gemini generation
    ├── ad-design-skills/
    │   ├── bold-text-designer/           ← typography on solid color
    │   ├── system-visual-designer/       ← diagram IS the ad
    │   └── chat-style-designer/          ← fake chat screenshots
    └── shared/
        ├── HTML-RENDER-REFERENCE.md      ← HTML structure standard
        ├── GEMINI-REFERENCE.md           ← Gemini API usage reference
        ├── DESIGN-SKILL-TEMPLATE.md      ← structure every design skill follows
        ├── render-static.js              ← Playwright renderer
        ├── editor-server.js / editor/    ← optional visual editor
        └── tools/
            ├── backfill-copy.js
            └── gemini-generate.js
```

The hierarchy is **Ad → Copy → Images**. The ad's identity is the copy. The HTML/prompt/PNG are downstream artifacts that live in `images/`.

## Skill selection — when to use what

| Ad format | Skill |
|---|---|
| Bold typography on solid color (the classic perf ad) | `bold-text-designer` (HTML) |
| Diagram, flowchart, exploded view — mechanism-as-message | `system-visual-designer` (HTML) |
| Fake iMessage / Slack / Discord / WhatsApp screenshot | `chat-style-designer` (HTML) |
| Photographic / illustrated / "designed" full-image ad | `gemini-image-designer` (Gemini API) |
| Brand-new ad format the existing lanes don't cover | `ad-skill-builder` to scaffold a new skill |
| Scaffolding a campaign | `campaign-manager` |
| First-time install / configuration | `workshop-setup` |

When the user describes an ad without naming a lane, propose 2-3 lanes that fit and let them pick. Don't silently default — different lanes produce wildly different ads.

## Meta Ads MCP — the upload path

The user configures the Meta Ads MCP connector in Claude Desktop UI (see `workshop-setup` step 3). Once configured, Claude can call `mcp__*__ads_*` tools to:

- List ad accounts (`ads_get_ad_accounts`)
- List pages (`ads_get_ad_account_pages`)
- Create creatives (`ads_create_creative`)
- Create ads (`ads_create_ad`)
- Create campaigns / ad sets (`ads_create_campaign`, `ads_create_ad_set`)

When uploading, **always create as paused**. The user reviews in Ads Manager before going live. Never auto-publish.

The copy fields in Meta — headline, primary text, CTA — come **verbatim from the ad's `COPY.md`**. Never paraphrase, never invent. If a field doesn't have source text in COPY.md, ask the user.

## What NOT to do

- **Don't generate an image before `COPY.md` exists.** Route the user to `campaign-manager` or just draft the copy yourself first, then render.
- **Don't paste API keys into chat.** When walking users through Gemini setup, ask them to paste the key directly into `.env` — not into the conversation.
- **Don't auto-publish Meta ads.** Always upload paused.
- **Don't invent skills that overlap existing ones.** A "bold-text-but-with-photos" request is a Gemini variant, not a new skill.
- **Don't store ads at the repo root.** Everything lives under `campaigns/{slug}/ads/{ad-name}/`.
- **Don't put image files at the ad's top level.** They go in `images/`. The top level is reserved for `COPY.md` and `copy.json`.
- **Don't add interpretive sections to `COPY.md`** (angle, promise, image direction). That's the designer's job. `COPY.md` is just the verbatim copy.
- **Don't introduce JavaScript inside ad HTML.**
- **Don't reference network images** (`<img src="https://...">` or `background: url(https://...)`) in HTML ads. Embed inline SVG or base64.

## Workshop students — tone

Most users are non-technical entrepreneurs paying for a workshop. They want results, not a CS lecture. Be plain, patient, and concrete. When a tool fails, diagnose specifically — don't dump a stack trace and ask them to figure it out.

When asking questions, ask 1-2 at a time, not 5. They will get overwhelmed.
