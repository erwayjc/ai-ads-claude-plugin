---
name: workshop-setup
description: Walks a new user through first-time setup of the AI Ad Designer workspace — installs the HTML rendering toolchain, configures the Google Gemini API key, and guides them through connecting the Meta Facebook Ads MCP connector. Use this skill the first time a user opens the workspace, or whenever they say "setup", "get started", "install", or "I'm new here".
---

# Workshop Setup

You are guiding a non-technical user through the first-time setup of this workspace. They paid for a workshop and just installed the AI Ad Designer template. They are probably not a developer. Be patient, explicit, and concrete. Confirm each step worked before moving to the next.

## What you're setting up

Three things must work before the user can build their first ad:

1. **The HTML rendering toolchain** — Node.js + Playwright. Used by the HTML design skills (`bold-text-designer`, `system-visual-designer`, `chat-style-designer`).
2. **The Google Gemini API key** — for full-ad image generation via Nano Banana. Used by the `gemini-image-designer` skill.
3. **The Meta Facebook Ads MCP connector** — so Claude Code can push the finished ads into the user's actual Facebook ad account. Configured in Claude Desktop UI, not via code.

Walk through them **in this order**. Do not skip ahead even if the user is impatient — each step depends on the previous one being verified.

## Step 0 — Greet and confirm

Start with a short greeting that explains what you're about to do. Example:

> Welcome — I'll get you set up to start building AI-generated ads in about 5 minutes. We'll do three things:
> 1. Install the HTML rendering tools
> 2. Plug in your Google Gemini API key (free tier is fine to start)
> 3. Connect your Facebook Ads account
>
> I'll confirm each step worked before moving on. Ready?

Wait for confirmation before continuing. If the user says they've already done any of these steps, **still verify** before skipping — never trust unverified "already done."

## Step 1 — Install the HTML rendering toolchain

The user needs Node.js (v18+) and the Playwright Chromium binary.

### 1a. Check Node.js

Run `node --version` and report the result.

- If it returns `v18.x.x` or higher → continue.
- If lower or "command not found" → tell the user to install Node.js LTS from https://nodejs.org and re-run this skill once installed. Stop here until they do.

### 1b. Install Node dependencies

From the workspace root, run:

```bash
cd skills/shared && npm install
```

Report any errors. Network failures are common — retry once before flagging.

### 1c. Install Playwright Chromium

```bash
cd skills/shared && npx playwright install chromium
```

This downloads a ~150MB browser binary. It may take a minute or two on slow connections. Show the user a "this can take a minute" message before running it.

### 1d. Verify

Render a test ad to confirm the pipeline works end-to-end:

```bash
node skills/shared/render-static.js skills/ad-design-skills/bold-text-designer/templates/style-01-bold-question.html /tmp/setup-test/
```

If a PNG appears at `/tmp/setup-test/style-01-bold-question.png`, the HTML toolchain is working. Tell the user "✓ HTML rendering is live."

If it failed, diagnose: usually missing system libraries on Linux, or a Chromium download that got interrupted. Re-run the install step rather than working around the failure.

## Step 2 — Configure the Gemini API key

The user needs a Google AI Studio API key. The free tier is enough to start.

### 2a. Get the key

Tell the user:

> Open https://aistudio.google.com/apikey in your browser. Sign in with any Google account. Click "Create API key" → copy the key to your clipboard. Tell me when you have it.

Wait for them to confirm. Do **not** ask them to paste the key into chat — paste-into-chat keys end up in conversation logs.

### 2b. Save the key to `.env`

Once they have the key, copy `.env.example` to `.env` if it doesn't already exist:

```bash
cp -n .env.example .env
```

Then tell the user:

> Open the `.env` file in this workspace and replace the empty `GEMINI_API_KEY=` line with `GEMINI_API_KEY=<paste-your-key>`. Save the file and tell me when you're done.

If they're not comfortable editing files, offer to do it for them — but ask them to paste the key into the file themselves, not into chat. You can use the Edit tool to write a placeholder, then ask them to swap it in.

### 2c. Verify

Run:

```bash
node skills/shared/tools/gemini-generate.js --check
```

This is a key-only validator — it makes a 1-token call and reports whether the key works. If it returns "✓ Gemini API key works" tell the user "✓ Gemini is connected."

If it fails:
- **401 / invalid key** → key wasn't pasted correctly. Have them re-copy and re-paste.
- **403 / billing** → free tier sometimes needs billing enabled for image models. Direct them to https://aistudio.google.com/billing.
- **Network error** → retry once.

## Step 3 — Connect the Meta Facebook Ads MCP

This is configured in **Claude Desktop UI**, not in code. You cannot install it for the user — they have to click through it themselves. Walk them through it patiently.

### 3a. Open the connector settings

Tell the user, **literally word for word**:

> 1. In Claude Desktop, click your name in the bottom-left → **Settings**.
> 2. Click **Connectors** in the sidebar.
> 3. Click the **+** button → **Add custom connector**.

Wait for them to confirm they see the "Add custom connector" dialog.

### 3b. Add the Meta Ads MCP

Tell them:

> 1. **Name:** `Facebook Ads` (or anything you like)
> 2. **URL:** `https://mcp.facebook.com/ads`
> 3. Click **Add**.
> 4. Claude will open a Meta login window — sign in with the account that owns your ad accounts.
> 5. When prompted, select the **Business Portfolio(s)** you want Claude to manage.
> 6. Click **Authorize**.

Wait for them to confirm the connector shows as connected. Common gotchas:
- They need to be an admin on the Business Portfolio, not just a contributor.
- If the auth popup is blocked, retry with browser popups enabled.

### 3c. Verify

Once they say the connector is connected, ask Claude Desktop to list their ad accounts using the Meta MCP. The exact tool name varies, but it will be something like `ads_get_ad_accounts`. If a list of accounts comes back, tell them "✓ Meta Ads is connected." If nothing comes back, the Business Portfolio selection step was probably skipped — have them revisit Connector settings and re-authorize.

## Step 4 — First-run summary

When all three steps verify, tell the user something like:

> You're set up. Here's what you can do next:
>
> - Say **"create a new campaign"** to scaffold your first campaign brief (ICP, offer, messaging).
> - Once a campaign exists, say **"build a bold-text ad"** or **"build a Gemini ad"** to design your first creative.
> - Once an ad is rendered, say **"upload this ad to Facebook"** to push it into your ad account via the Meta MCP.
>
> The full skills available to you:
> - `campaign-manager` — scaffolds campaigns
> - `bold-text-designer` — typography ads (40+ HTML templates)
> - `system-visual-designer` — diagrammatic ads
> - `chat-style-designer` — fake chat-screenshot ads
> - `gemini-image-designer` — full-ad image generation via Nano Banana
> - `ad-skill-builder` — when you have a new ad format in mind, this scaffolds a brand-new design skill from your description

## Anti-patterns

- **Don't skip verification.** Each step has a verify substep — run it. Half-installed states are how students get stuck.
- **Don't ask the user to paste API keys into chat.** Keys go directly into `.env`. Conversation transcripts can be reviewed by Anthropic and stored on disk.
- **Don't try to install the Meta MCP via code.** It's a Claude Desktop UI thing. You can only walk them through the clicks.
- **Don't move on if a step "kind of" works.** If the render-test fails, fix it before doing Gemini. If Gemini fails, fix it before doing the MCP.
- **Don't be cute.** This is technical setup for a non-technical buyer. Be plain, be patient, be explicit.
