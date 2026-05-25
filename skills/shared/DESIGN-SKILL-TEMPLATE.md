# Design Skill Template — Standard Structure

Every ad design skill in this workspace follows the same section order. This consistency is what lets Claude Code swap between `bold-text-designer`, `system-visual-designer`, `chat-style-designer`, `gemini-image-designer`, and any new design skill — without re-learning a different format each time.

When **`ad-skill-builder`** scaffolds a new design skill, it uses the structure below. When you edit an existing design skill, preserve the section order so consistency holds.

---

## Required sections, in order

### 1. YAML frontmatter

```yaml
---
name: <skill-slug>          # kebab-case, ends in -designer
description: <one sentence> # what the skill creates, when to invoke, what makes it distinct
---
```

**The `description:` matters.** Claude Code uses it to decide when to invoke the skill autonomously. Write it concretely. Bad: "creates cool ads." Good: "Creates ads that look like fake App Store reviews — 5-star bubble headers, italic blockquotes, 'Verified Purchase' tag below."

### 2. Title + production method block

```markdown
# <Skill Title>

**Production method:** HTML/CSS + Playwright → see [../shared/HTML-RENDER-REFERENCE.md](../shared/HTML-RENDER-REFERENCE.md)
**Default output size:** 1080×1080 (square)
```

The production method line tells the reader which toolchain renders the ad — HTML/CSS+Playwright, Gemini image generation, or something else.

### 3. The opening paragraph

One paragraph. **What does this skill produce, and what is the scroll-stop mechanism?** Don't lead with rules — lead with the visual outcome and why it stops the scroll.

### 4. Position in the design-lane table

A 4-column table showing every design lane in the workspace and where this skill fits. Bold the row for the current skill.

| Lane | Beat | Skill |
|---|---|---|
| Pure typography — one hook, one stat, one claim | scroll-stop through type | [bold-text-designer](...) |
| Show the mechanism — the diagram IS the ad | comprehension through structure | [system-visual-designer](...) |
| Dialogue carries the message | social proof through eavesdropping | [chat-style-designer](...) |
| Full-ad image generation | photographic realism + designed typography | [gemini-image-designer](...) |
| **This skill's row** | **its beat** | **bolded skill name** |

Below the table, one sentence explaining when to reach for this skill instead of the others.

### 5. The cardinal rule

```markdown
## The cardinal rule

**<The one sentence that, if violated, makes this format fail.>**

<Corollary — one paragraph elaborating what this means in practice.>
```

Every design skill has exactly one cardinal rule. It's the rule that distinguishes this format from every other format. For `chat-style-designer` it's "the conversation is the ad, the viewer is eavesdropping." For `system-visual-designer` it's "the diagram is the ad, the text is a label."

### 6. Required elements

Lists what MUST appear on every ad in this format. **ICP callout and CTA button are required across the entire workspace** — every design skill includes them. Plus any format-specific required elements (e.g., chat ads require a phone frame; system-visual ads require a diagram).

```markdown
## Required elements (every ad)

1. **ICP callout** — see [ICP callout — mandatory](#icp-callout--mandatory)
2. **CTA button** — see [CTA button — mandatory](#cta-button--mandatory)
3. **<format-specific required element>** — <one line>
4. **<format-specific required element>** — <one line>
```

### 7. ICP callout — mandatory

A subsection explaining where the ICP appears on this format's ads. Every design skill enforces ICP visibility — but the *placement* differs by format. Spell out the placement here.

### 8. CTA button — mandatory

A subsection explaining where the CTA appears on this format's ads, and any format-specific CTA rules. Cross-reference the canonical CTA rules in `shared/HTML-RENDER-REFERENCE.md § CTA is required`.

### 9. Style catalog OR composition guide

**One of two patterns, depending on the production method:**

- **Catalog pattern** — for skills with a fixed set of numbered template variants. A markdown table of every template, with file links. Example: `bold-text-designer` has 40+ styles.

- **Composition pattern** — for skills where every ad is composed from scratch (no templates). A section explaining the composition rules instead — speaker roles, layout grid, visual direction presets, etc. Example: `chat-style-designer` and `gemini-image-designer`.

If the skill uses a catalog, **always end with**: "These are not the only styles. Invent new layouts. Combine elements. The catalog grows as new concepts prove out in testing."

### 10. Design principles

3-7 numbered principles that govern how every ad in this format is designed. These are the rules of taste — what makes an ad in this format *good* versus *adequate*. Examples from existing skills:

- "Contrast Is King" (bold-text)
- "Authenticity beats polish" (chat-style)
- "The diagram must do work the words can't" (system-visual)

### 11. QC checklist

A checkbox list the designer runs through before shipping every ad. Format-specific. **Always include:**

- Alignment / layout correctness
- Spelling check (read letter by letter)
- Readability at 400px thumbnail
- No real logos or branded marks
- The format-specific scroll-stop test ("would this actually stop my scroll at 2am?")

### 12. Workflow

The step-by-step recipe for producing one ad in this format. **Always begins with: "Read `campaigns/{slug}/ads/{ad-name}/COPY.md` first."** The hierarchy `Ad → Copy → Images` is non-negotiable across every skill.

End the workflow with a `### Designing from COPY.md` subsection that explains: this skill reads the copy and interprets it visually using the principles above. The copy doesn't tell you the design; the skill does.

### 13. Anti-patterns

5-8 bullets of "don't do this." Format-specific anti-patterns are the most useful — every format has its own failure modes. Examples:

- chat-style: "Don't use marketing language inside dialogue."
- system-visual: "If you could swap your diagram for a stock illustration and the ad would read the same, you've built a typography ad with a picture stuck to it — wrong skill."
- gemini-image: "Don't paraphrase the headline because Gemini 'would do better with shorter copy.'"

### 14. Output

The file structure produced by this skill, as a code block:

```
campaigns/{campaign-slug}/ads/{ad-name}/
  ├── COPY.md          ← canonical copy record (top-level — the ad's identity)
  ├── copy.json        ← same, machine-readable
  └── images/
      ├── <files produced by this skill>
      └── ...
```

---

## Tone & voice rules

- **Direct, no hedging.** "The diagram is the ad" — not "the diagram is generally the most important part of the ad."
- **Imperative mood.** "Use the accent color on one element" — not "you should consider using the accent color on one element."
- **No marketing language inside the skill.** No "revolutionary," "powerful," "elegant." Describe what the skill does, not how great it is.
- **Always reference cross-skill conventions explicitly.** Link to `HTML-RENDER-REFERENCE.md` for render rules, to other design skills for adjacent lanes.

## Length

A complete design skill SKILL.md is **typically 150-250 lines**. Bold-text-designer is longer because it documents 40+ templates; chat-style-designer is longer because it documents 5 platforms. The shortest viable skill (no catalog, single visual direction) is around 120 lines.

If your draft is under 100 lines, you've under-specified the rules. If it's over 400 lines, you've drifted into copywriting territory — trim back to design rules only.
