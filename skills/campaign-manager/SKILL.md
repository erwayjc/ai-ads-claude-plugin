---
name: campaign-manager
description: Scaffolds and maintains campaign folders. Each campaign defines the project, ICP, and core messaging offer. All ad assets are saved under the campaign's own folder.
---

# Campaign Manager

A campaign is the unit of organization in this repo. It defines:

1. **Project** — what business / brand / product the ads are for
2. **ICP** — exactly who you're advertising to
3. **Core messaging offer** — the single promise the ads make

Everything else (ads, HTML, rendered PNGs) is downstream of those three things.

## Folder structure

```
campaigns/
├── CAMPAIGNS.md                   ← Index of all campaigns
├── _template/                     ← Blank scaffold (do not edit)
│   └── CAMPAIGN.md
└── {campaign-slug}/
    ├── CAMPAIGN.md                ← Project, ICP, offer, messaging
    └── assets/
        ├── html/                  ← HTML source files for ads
        └── images/                ← Rendered PNGs
```

## Creating a new campaign

1. Pick a slug — lowercase, kebab-case, no spaces. Example: `pi-trial-lawyers-2026q2`.
2. Copy the template:
   ```bash
   cp -r campaigns/_template campaigns/{slug}
   ```
3. Fill out `campaigns/{slug}/CAMPAIGN.md` — every section, not just the easy ones.
4. Add an entry to `campaigns/CAMPAIGNS.md` so the campaign is discoverable.
5. Start designing — copy templates from `skills/bold-text-designer/templates/` into `campaigns/{slug}/assets/html/`, edit them, render to `campaigns/{slug}/assets/images/`.

## CAMPAIGN.md is the source of truth

Every ad in `assets/` must align with what's defined in `CAMPAIGN.md`. If an ad drifts from the ICP or offer, either fix the ad or update the campaign brief — never let them disagree silently.

## Anti-patterns

- **Don't reuse a campaign folder for a different ICP.** Spin up a new one.
- **Don't store ads at the repo root.** Everything lives under `campaigns/{slug}/`.
- **Don't skip the offer.** If you can't write the offer in one sentence, the campaign isn't ready to design for.
