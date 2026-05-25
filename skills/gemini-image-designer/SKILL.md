---
name: gemini-image-designer
description: Creates full 1080×1080 paid-social image ads using Google Gemini 2.5 Flash Image (Nano Banana). The entire ad — headline, subtext, CTA, imagery — is generated as a single PNG via the Gemini API. Use this when the user wants a photographic / illustrated / "designed-looking" ad rather than the HTML/CSS templates. Reads COPY.md first, then composes the prompt from the verbatim copy.
---

# Gemini Image Designer

**Production method:** Google Gemini 2.5 Flash Image (Nano Banana) → see [../shared/GEMINI-REFERENCE.md](../shared/GEMINI-REFERENCE.md)
**Default output size:** 1080×1080 (square)

You build paid-social image ads where **Gemini produces the entire ad as a single rendered image** — headline, subtext, CTA button, background, and any imagery, all generated as one PNG. No HTML, no CSS, no separate layout step.

This is the fifth design lane in this workspace:

| Lane | Beat | Skill |
|---|---|---|
| Pure typography — one hook, one stat, one claim | scroll-stop through type | [bold-text-designer](../ad-design-skills/bold-text-designer/SKILL.md) |
| Show the mechanism — the diagram IS the ad | comprehension through structure | [system-visual-designer](../ad-design-skills/system-visual-designer/SKILL.md) |
| Dialogue carries the message | social proof through eavesdropping | [chat-style-designer](../ad-design-skills/chat-style-designer/SKILL.md) |
| Full-ad image generation — Gemini composes the whole creative | photographic realism + designed typography | **gemini-image-designer** (this skill) |

Reach here when the ad needs a **photographic or illustrated feel** that pure HTML can't produce convincingly — product shots, lifestyle scenes, faces, stylized backgrounds with depth, hand-painted illustration, magazine-quality typography. The HTML lanes are still better when the ad is pure type or a structured diagram. Use Gemini when the visual is doing emotional work.

## The cardinal rule

**The copy leads. Gemini renders.**

You read `campaigns/{slug}/ads/{ad-name}/COPY.md` first. The headline, subtext, and CTA in the generated image must be **verbatim from COPY.md** — no paraphrasing, no embellishing, no inventing words. Gemini's job is to render the copy as a designed image, not to write copy.

Corollary: if `COPY.md` doesn't exist, the ad isn't ready. Stop and tell the user to write the copy first (or run `campaign-manager` to draft it).

## When to use this skill instead of the HTML lanes

| Pick Gemini when… | Pick HTML when… |
|---|---|
| You want a photographic background (a face, a product, a scene) | The ad is pure type — no imagery needed |
| You want hand-painted illustration or magazine art direction | You want pixel-precise typography and total layout control |
| The user can't articulate a layout but knows the *vibe* | The user knows the layout they want |
| You're A/B testing visual styles fast | You're iterating copy and need the layout to stay stable |
| Final-mile polish where the typography needs to feel "designed" | You're producing 20+ variants — HTML is faster per render |

You can also produce a **Gemini hero + HTML overlay hybrid** — generate a photographic background with Gemini, then use an HTML template to overlay precise headline + CTA. That's a future workflow. For now this skill produces the full ad in one shot.

## Required elements (every ad)

Every Gemini ad must visually contain — pulled verbatim from `COPY.md`:

1. **ICP callout** — a small tag/pill/label at the top that names who the ad is for (e.g., "For Personal Injury Firms")
2. **Headline** — the largest text on the ad, reads in 0.5 seconds at thumbnail size
3. **Subtext** — supporting line, smaller than headline, optional but usually present
4. **CTA button** — solid, high-contrast, ≤ 4 words, ends with `→`
5. **No real logos** — no Meta, Google, Apple, or any brand logo unless the user has explicit rights

If any of those are missing in `COPY.md`, do not generate the image — fix the copy first.

## Composing the Gemini prompt

The Gemini prompt is built from `COPY.md` + the user's chosen visual direction. The structure:

```
A 1080x1080 square paid social media ad. Vertical hierarchy:

TOP: Small uppercase pill that reads "{ICP from COPY.md}", accent-colored pill background, white text.

MIDDLE (largest element): Headline in {headline-style}, reads "{headline from COPY.md}". 
The text MUST be rendered exactly as quoted — do not paraphrase. 
{Headline must fill at least 60% of the canvas width.}

BELOW HEADLINE: Subtext in {subtext-style}, reads "{subtext from COPY.md}". 
The text MUST be rendered exactly as quoted.

BOTTOM: Solid pill-shaped CTA button, {accent-color} background, dark text, 
reads "{cta from COPY.md} →" — rendered exactly as quoted.

VISUAL DIRECTION:
- Aesthetic: {photographic / illustrated / editorial / minimalist / etc — see directions below}
- Color palette: {2-3 named colors, high contrast}
- Background: {described scene or solid / gradient / textured}
- Mood: {described in one phrase}

CONSTRAINTS:
- 1080x1080 square, edge-to-edge, no white margins or borders.
- All text must be perfectly spelled, sharp, readable at 400px thumbnail.
- No logos, brand marks, or watermarks.
- No fictional human faces — use illustration, abstract composition, 
  or hands/objects instead unless the campaign explicitly uses portraits.
- Single CTA only. No competing buttons.
```

### Visual direction presets

When the user doesn't specify a visual direction, offer them these starting points and let them pick:

| Preset | Aesthetic | Best for |
|---|---|---|
| **Editorial Minimalist** | High-contrast type on a single muted color, one illustrated accent | Premium B2B services, "we're not loud" positioning |
| **Magazine Spread** | Layered typography, color-blocked sections, mid-century feel | Lifestyle, books, courses, anything with intellectual weight |
| **Cinematic Product** | Photographic product or object in dramatic lighting, type lower-third | Physical products, supplements, gear |
| **Hand-Painted Illustration** | Loose painterly background, hand-lettered feel | Wellness, food, indie brands, anti-corporate vibes |
| **Tech Dashboard** | Gridded sci-fi panel feel with glows and chrome | SaaS, AI tools, ops/automation products |
| **Punk Type Riot** | Aggressive stacked type, distressed textures, single accent color | Bold direct-response, scarcity, urgency angles |
| **Soft Pastel** | Cream/peach/sage palette, organic shapes, generous whitespace | Female-skewing wellness, beauty, courses |

These are starting points, not a hard catalog — the user can describe any visual direction in their own words and you compose the prompt accordingly. The presets just give a vocabulary.

## CTA — same rules as the HTML lanes

The CTA in the generated image must:

- **Be the verbatim text from `COPY.md`** — never invent or change it
- **Be action-first** — starts with a verb ("Apply", "See", "Get", "Reserve")
- **Be ≤ 4 words**
- **End with `→`** — implies forward motion
- **Be a solid high-contrast pill** — accent-colored background, dark text

If the COPY.md CTA fails these rules (e.g., "Learn More"), pause and tell the user — don't render an ad that won't convert.

## ICP — same rules as the HTML lanes

The ICP callout must appear at the top of the ad, as a small uppercase pill. The text comes from `CAMPAIGN.md` → ICP section, formatted like "FOR PERSONAL INJURY FIRMS" or "→ FOR AGENCY OWNERS". If the user is unsure what to put, read `CAMPAIGN.md` and propose a 3-5 word ICP label, then confirm.

## Workflow

**Hierarchy: Ad → Copy → Images.** The copy file is the ad's identity; the Gemini-generated PNG is just an image of the copy.

1. **Read `campaigns/{slug}/ads/{ad-name}/COPY.md` first.** If it doesn't exist, stop. The copy must be written before the image.
2. **Confirm the visual direction.** If the user hasn't specified one, present the preset list above and let them pick — or invite them to describe their own direction in plain English.
3. **Compose the Gemini prompt.** Use the structure in the "Composing the Gemini prompt" section. Inline the verbatim copy from `COPY.md` — never paraphrase.
4. **Create the ad folder** if it doesn't exist: `campaigns/{slug}/ads/{ad-name}/images/`.
5. **Call Gemini** via the shared tool:
   ```bash
   node skills/shared/tools/gemini-generate.js \
     --prompt-file /tmp/gemini-prompt-{ad-name}.txt \
     --out campaigns/{slug}/ads/{ad-name}/images/{ad-name}.png
   ```
   (Write the composed prompt to `/tmp/gemini-prompt-{ad-name}.txt` first — long prompts break shell quoting.)
6. **Visual QC** against the checklist below. If text is misspelled, hands look wrong, or the CTA is missing, regenerate with a sharper prompt. Gemini sometimes drops or mangles text — be willing to call it 2-3 times.
7. **Variant generation.** Once the user likes the direction, offer to produce 2-4 variants by swapping the visual direction preset while keeping the copy identical. This is the cheapest A/B test you can run.

### Designing from COPY.md

This skill **never writes copy**. It only renders existing copy as an image. If the user asks you to "write an ad," route them to `campaign-manager` first to draft `COPY.md`, then come back here to generate the image.

## QC checklist

Run through this on every generated image before shipping:

- [ ] **Text is spelled correctly** — Gemini occasionally invents letters. Read every word.
- [ ] **Headline matches COPY.md verbatim** — no paraphrasing, no added words
- [ ] **Subtext matches COPY.md verbatim**
- [ ] **CTA matches COPY.md verbatim** and ends with `→`
- [ ] **ICP callout present** at the top
- [ ] **Single CTA** — Gemini sometimes renders two buttons; reject if so
- [ ] **No logos or brand marks** — including fictional Meta/Google/etc. logos
- [ ] **No mangled hands or faces** if humans are present — regenerate if any
- [ ] **Readable at 400px thumbnail** — the headline must pop at small size
- [ ] **Canvas fills edge-to-edge** — no white borders
- [ ] **Scroll-stop test** — would this actually stop a scroll in a feed at 2am?

Two regenerations is the budget per ad. If three calls haven't produced a usable image, the prompt is wrong — rewrite it. Don't burn API credits hoping the next call will be the one.

## Anti-patterns

- **Don't write the copy in the prompt.** The copy comes from `COPY.md` verbatim. If the user is asking you to write copy, they need `campaign-manager` first.
- **Don't include real brand logos.** Even as "inspiration." If the user wants their own logo on the ad, that's a post-generation Photoshop step, not a Gemini step.
- **Don't generate fictional human portraits.** Gemini will mangle faces at small size. Use abstract figures, hands, products, illustration, or backgrounds without faces.
- **Don't paraphrase the headline because Gemini "would do better with shorter copy."** If the copy is too long for the format, fix the copy in `COPY.md` first.
- **Don't ship an ad without a CTA.** Same rule as every other lane. No CTA → not an ad.

## Output

```
campaigns/{campaign-slug}/ads/{ad-name}/
  ├── COPY.md          ← canonical copy record (top-level — the ad's identity)
  ├── copy.json        ← same, machine-readable
  └── images/
      ├── {ad-name}.prompt.txt   ← the exact Gemini prompt used (for reproducibility)
      └── {ad-name}.png          ← the generated image
```

Note: unlike HTML ads, there is no `.html` file — the PNG IS the ad. Save the prompt as `.prompt.txt` so the ad can be regenerated or remixed later.
