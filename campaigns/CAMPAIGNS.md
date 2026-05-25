# Campaigns Index

Active and archived campaigns in this workspace. Add a row when you create a new campaign folder.

| Slug | Project | Status | Created | Notes |
|---|---|---|---|---|
| _template | _(scaffold — do not use directly)_ | — | — | Copy this to start a new campaign |

## How to add a campaign

Just say "create a new campaign" in Claude Code — the **campaign-manager** skill will scaffold it for you and ask the questions it needs to fill in `CAMPAIGN.md`.

Or do it by hand:

1. Copy `_template/` to a new folder with a kebab-case slug.
2. Fill out `CAMPAIGN.md`.
3. Add a row above with: slug, what the project is, status (`active` / `paused` / `archived`), the date you created it, and a one-line note.
