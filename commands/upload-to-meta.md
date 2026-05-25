---
description: Upload a finished ad to your Meta (Facebook/Instagram) ad account using the Meta Ads MCP connector. Requires the connector to be configured — run /setup first if it isn't.
---

You are uploading a finished ad to Meta Ads via the Meta Ads MCP connector.

**Pre-flight checks:**

1. Confirm the Meta Ads MCP is connected. If `ads_get_ad_accounts` returns nothing, route the user to `/setup` step 3.
2. Confirm the ad exists — it should have:
   - `campaigns/{slug}/ads/{ad-name}/COPY.md` with a CTA filled in
   - `campaigns/{slug}/ads/{ad-name}/images/{ad-name}.png`
3. Read `COPY.md` for the headline, subtext, and CTA. Read `CAMPAIGN.md` for the ICP and offer.

**Upload flow:**

1. Ask the user which ad account (use `ads_get_ad_accounts`).
2. Ask: new campaign, new ad set under an existing campaign, or just upload the creative? Default to "just upload the creative" — most users want to attach the image to an existing campaign in Meta Ads Manager themselves.
3. Use the appropriate `mcp__*__ads_*` tools — `ads_get_ad_account_pages` to pick a page, then `ads_create_creative` and `ads_create_ad` as needed.
4. Pull the CTA text from `COPY.md` verbatim — never paraphrase. Pull the headline and primary text from `COPY.md` too.
5. After upload, report the ad ID and a link to the ad in Meta Ads Manager.

**Anti-patterns:**

- Don't auto-publish. Always upload as paused / draft so the user can review before going live.
- Don't invent copy. Everything in the Meta ad fields comes from `COPY.md`. If a field doesn't have source text, ask the user.
- Don't change the targeting unless the user explicitly asks. Most workshop students will set targeting in Ads Manager UI, not via MCP.
