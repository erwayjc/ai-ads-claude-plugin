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
│   ├── CAMPAIGN.md
│   └── ads/
└── {campaign-slug}/
    ├── CAMPAIGN.md                ← Project, ICP, offer, messaging
    └── ads/
        └── {ad-name}/             ← One folder per ad — THIS IS THE AD
            ├── COPY.md            ← Canonical copy record (the ad's identity)
            ├── copy.json          ← Same, machine-readable
            └── images/            ← Visual artifacts derived from COPY above
                ├── {ad-name}.html ← Rendered-design markup
                └── {ad-name}.png  ← Rendered PNG
```

**Hierarchy: Ad → Copy → Images.** The ad's identity is the copy. Everything visual derives from it. The HTML and PNG are co-located in `images/` because they're both image artifacts — the HTML is just the markup behind the PNG.

## Creating a new campaign

1. Pick a slug — lowercase, kebab-case, no spaces. Example: `pi-trial-lawyers-2026q2`.
2. Copy the template:
   ```bash
   cp -r campaigns/_template campaigns/{slug}
   ```
3. Fill out `campaigns/{slug}/CAMPAIGN.md` — every section, not just the easy ones.
4. Add an entry to `campaigns/CAMPAIGNS.md` so the campaign is discoverable.
5. Start designing — for each ad, create `campaigns/{slug}/ads/{ad-name}/images/`, copy in a template as `{ad-name}.html`, write the copy in the HTML, render the PNG to the same `images/` folder, then seed `COPY.md` (`node skills/shared/tools/backfill-copy.js` or the editor) and finish filling it in.

## CAMPAIGN.md is the source of truth

Every ad under `ads/` must align with what's defined in `CAMPAIGN.md`. If an ad drifts from the ICP or offer, either fix the ad or update the campaign brief — never let them disagree silently.

## Copy comes before image — always

The flow is: **CAMPAIGN.md → COPY.md → images (HTML render, PNG, future AI imagery).** Each step is downstream of the previous one. Never create an image first and write copy to fit it. If you use a generative-image tool to make imagery for an ad, the prompt must read the ad's `COPY.md` first and incorporate its headline, offer, ICP language, and image direction so the result is congruent.

## Anti-patterns

- **Don't reuse a campaign folder for a different ICP.** Spin up a new one.
- **Don't store ads at the repo root.** Everything lives under `campaigns/{slug}/ads/{ad-name}/`.
- **Don't put image files at the ad's top level.** They go in `images/`. The top level is reserved for `COPY.md` and `copy.json`.
- **Don't create an image for an ad with no COPY.md.** No copy → no image.
- **Don't skip the offer.** If you can't write the offer in one sentence, the campaign isn't ready to design for.
