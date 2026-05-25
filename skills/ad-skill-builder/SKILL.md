---
name: ad-skill-builder
description: Scaffolds a brand-new ad design skill in this workspace. Use when the user describes an ad format that isn't covered by the existing design skills — e.g. "I want a skill for fake email-screenshot ads" or "build me a new design skill for animated GIF storyboards". Produces a SKILL.md that follows the standard structure used by bold-text-designer, system-visual-designer, and chat-style-designer.
---

# Ad Skill Builder

You scaffold new ad design skills. The user describes a format they want to create ads in, and you produce a fully-formed `skills/ad-design-skills/{new-skill-name}/SKILL.md` that follows the **standard design-skill structure** used by every other design skill in this workspace.

The reference document for the structure is [../shared/DESIGN-SKILL-TEMPLATE.md](../shared/DESIGN-SKILL-TEMPLATE.md). Read it before scaffolding anything.

## When to use this skill

Use it when the user asks for any of:

- "Create a new ad design skill"
- "I want a skill for [some format]"
- "Make me a skill that designs [some kind of ad]"
- "Add a new design lane"
- Any request that implies a new ad *format* with consistent rules — not a one-off ad

Do **not** use it for individual ad iteration — that's the job of the existing design skills.

## What "an ad design skill" is

Every design skill in this workspace is a recipe for producing one *category* of ad over and over with consistent rules. The category is defined by:

1. **A scroll-stop mechanism** — why this format makes the viewer pause. ("Bold type is loud." "The diagram is unfamiliar." "It looks like a real screenshot.")
2. **A production method** — HTML/CSS+Playwright today; Gemini image generation today; possibly more in the future.
3. **A set of structural rules** — required elements (ICP callout, CTA), layout conventions, anti-patterns.
4. **A style catalog or composition guide** — concrete variations the designer can pick from.

If the user's request doesn't have all four, ask clarifying questions until it does.

## Required interview before scaffolding

Before you write a single line of the new SKILL.md, ask the user:

1. **Name & slug.** What's the skill called? (3-5 words, kebab-case slug, ends in `-designer`.) Example: `quiz-results-designer`.
2. **One-sentence description.** What kind of ad does this format produce? (This becomes the `description:` field in YAML frontmatter — it's what Claude Code uses to decide when to invoke the skill, so it must be precise.)
3. **The scroll-stop mechanism.** In one sentence, why does this ad format stop the scroll? What's the *cardinal rule* — the thing that, if broken, makes the format fail?
4. **Production method.** HTML/CSS rendered by Playwright (templates), or Gemini image generation (full-ad), or both?
5. **Style catalog.** Are there going to be a fixed number of variant templates (like `bold-text-designer` has 40+ numbered styles), or is every ad composed from scratch (like `chat-style-designer`)?
6. **Required elements.** What MUST appear on every ad in this format? (ICP callout and CTA are always required across the workspace — but this format may require more.)
7. **Anti-patterns.** What kills this format? (E.g., chat ads die when the language sounds like marketing copy.)

Ask these as a numbered checklist, wait for answers, then confirm the answers back before generating.

## What you produce

A single file: `skills/ad-design-skills/{new-skill-slug}/SKILL.md` following the structure in [../shared/DESIGN-SKILL-TEMPLATE.md](../shared/DESIGN-SKILL-TEMPLATE.md).

If the user picked HTML/CSS as the production method AND wants a style catalog, also scaffold an empty `templates/` directory under the new skill folder with a `README.md` explaining where to drop new template files.

You do **not** generate the templates themselves — those are produced by Claude during normal design work, not by this meta-skill.

## After scaffolding

Once the file is written:

1. Tell the user what you created (path, sections, what's complete vs what they still need to fill in).
2. Suggest they invoke the new skill in a test scenario — e.g., "now say 'build me a quiz-results ad for my pi-lawyers campaign' and the new skill should pick up the request."
3. If the new skill needs templates, scaffold the first 1-2 templates in the test scenario so the catalog has something to point at.

## Anti-patterns

- **Don't scaffold without the interview.** A skill written from a one-line description ends up generic. The interview is what makes the skill specific enough to be useful.
- **Don't deviate from the standard structure.** Every design skill in this workspace has the same section order (cardinal rule → required elements → catalog → principles → QC → workflow → anti-patterns → output). Consistency makes them swappable.
- **Don't invent skills that overlap with existing ones.** If the user says "I want a bold-text skill but with photos," that's a Gemini variant of `bold-text-designer`, not a new skill. Tell them and route them.
- **Don't make the skill description vague.** Claude Code uses the `description:` field to decide when to invoke a skill. "Creates cool ads" is useless. "Creates ads that look like fake App Store reviews — 5-star bubbles, italic blockquotes, 'Verified Purchase' tag" is useful.
