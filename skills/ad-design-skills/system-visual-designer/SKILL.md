---
name: system-visual-designer
description: Builds image ads where the diagram IS the ad — visual mechanisms (exploded views, hub-and-spoke, pipeline cutaways, layered stacks, fake control panels, signal-flow schematics) that show *how* the system works in under 2 seconds. Text is minimal; the visual carries the cognitive load.
---

# System Visual Designer

**Production method:** HTML/CSS + Playwright → see [../../shared/HTML-RENDER-REFERENCE.md](../../shared/HTML-RENDER-REFERENCE.md)
**Default output size:** 1080×1080 (square)

You build ads that **dramatize the mechanism of the offer**. The viewer sees a diagram and understands *how* the system works without reading a paragraph. The headline is a label on the diagram, not the substance of the ad.

This is the third design lane in this repo:

| Lane | Beat | Skill |
|---|---|---|
| Pure typography — one hook, one stat, one claim | scroll-stop through type | [bold-text-designer](../bold-text-designer/SKILL.md) |
| Show the mechanism — the diagram IS the ad | comprehension through structure | **system-visual-designer** (this skill) |
| Dialogue carries the message | social proof through eavesdropping | [chat-style-designer](../chat-style-designer/SKILL.md) |
| Full-ad image generation | photographic realism + designed typography | [gemini-image-designer](../../gemini-image-designer/SKILL.md) |

Reach here when the buyer needs to *see* that you have a system — not just be told. Especially valuable when the offer is a multi-part program that competitors describe as a list of services, and you want to show it as *one machine*.

## The cardinal rule

**The diagram is the ad. The text is a label.**

If you could swap your diagram for a stock illustration and the ad would read the same, you've built a typography ad with a picture stuck to it — wrong skill. The diagram must do work the words can't: prove integration, expose mechanism, reveal causality, show simultaneity.

Corollary: headlines here are **≤ 6 words**. Subtext is one short line. Footer is optional. If you find yourself writing a paragraph, you're using the wrong skill — try [bold-text-designer](../bold-text-designer/SKILL.md).

## CTA button — mandatory

**Every ad ends with a CTA button.** Big, solid, accent-colored, ≤ 4 words, ends with `→`. It's the visual end-point of the ad — the eye should land on it last, after the diagram has done its work.

The button text comes **verbatim from the ad's `COPY.md`** — see [shared/HTML-RENDER-REFERENCE.md § CTA is required](../../shared/HTML-RENDER-REFERENCE.md#4-cta-is-required). Never invent CTA copy in the template; if `COPY.md` has no CTA, the ad isn't ready to render.

### Button design rules

- **Solid accent background**, dark text — same accent color as the rest of the ad's accent system. Maximum contrast.
- **Large** — ~56–64px tall, padding ~22px × 44px. Reads at thumbnail.
- **Rounded** — pill shape (`border-radius: 999px`) or strong-radius rectangle (~16px). Soft edges read as clickable.
- **Trailing arrow** — `→` after the label, separated by a thin space. Implies forward motion.
- **One CTA per ad.** Never two. The whole point is single decision.

### Where the button lives

The CTA button **replaces the muted footer line** as the final element below the diagram. The old qualifier line (e.g., "Performance-based · 3 firms this month") becomes a small *sub-footer below the button*, in muted text — it's the scarcity / risk-reversal qualifier supporting the click, not a competing message.

```
[ ICP pill ]
[ Headline ]
[ Diagram ]
[ CTA BUTTON → ]      ← the click target, big and bright
muted qualifier line   ← supporting line, ~16px, muted
```

### Why this matters

A system-visual ad without a button reads as "explainer infographic." Buyers stop, parse the diagram, nod, scroll on. The button converts comprehension into action. The diagram earns the click; the button captures it.

## ICP callout — mandatory

**Every ad must name the ICP on the canvas.** No exceptions. If a passerby can't tell who the ad is for in under 2 seconds, the ad is wrong — even if the diagram is beautiful.

The ICP shows up in **two places**:

### Zone 1: Top ICP pill (required on every ad)

A small accent-colored pill at the very top of the canvas, above the headline:

```
→ FOR PERSONAL INJURY FIRMS
```

- Uppercase, letter-spaced, small (~13px) — visible at thumbnail without crowding the diagram
- Starts with `→` or `FOR` so it reads as "this is who this is for"
- Uses the accent color background or accent-color text on a thin pill
- Pulled verbatim from `CAMPAIGN.md` → ICP section

### Zone 2: ICP woven into the diagram (where the template allows)

Wherever the diagram has an output, destination, or central node, that element should reference the ICP, not a generic outcome:

- Hub & Spoke → the hub names the ICP's system ("PI Firm Case Flywheel") not just "The System"
- Control Panel → the system version line names the firm context ("PI FLYWHEEL · CLIENT FIRM")
- Signal Flow → the output node says "Your PI firm" or shows the firm as the destination
- Exploded View → the outcome layer names what *the ICP* gets, not a generic noun

This means the ICP appears twice on most templates and once (via the pill) on the rest. The pill is the floor; the diagram-level mention is the ceiling. **Never skip the pill.**

### Why this matters

Cold-traffic ads die when the wrong person reads them. A great system diagram with no ICP callout reads as "marketing agency" — generic. The pill turns the same diagram into "marketing agency *for PI firms*" — specific. Specificity is what gets the click from the right person and the scroll-past from the wrong one. Both are wins.

## Design principles

### Principle #1: One mechanism per ad

Don't combine an exploded view *and* a funnel *and* a control panel. One archetype, executed cleanly. Three competing diagrams read as none.

### Principle #2: Components must be named, not lettered

Every node, layer, knob, or stage gets a real name in the buyer's vocabulary ("Intake", "AI SEO", "Reviews") — not "Module A" or generic icons. The diagram earns trust only if the parts are real.

### Principle #3: The outcome is visible somewhere on the canvas

Pure mechanism without payoff is a textbook page. There must be a single zone where the *result* appears — the engine output, the dashboard hero number, the signal endpoint, the top brick. The eye should land on it last.

### Principle #4: Accent color marks the proprietary part

In every system diagram, one element is *yours* — the engine, the central hub, the integration layer, the named system. The accent color goes there and nowhere else. Everything else is the neutral framing that makes the proprietary part pop.

### Principle #5: Looks engineered, not decorated

Thin strokes, deliberate alignment, monospace labels where appropriate, schematic feel. If it looks like a marketing infographic, it reads as marketing. If it looks like an engineering diagram, it reads as truth.

## Template catalog

Six archetypes. Each is a standalone HTML template in [templates/](templates/). Copy, edit text and the three CSS color variables, render.

| # | Name | Template | Mechanism shown | Best for |
|---|---|---|---|---|
| 1 | Exploded View | [style-01-exploded-view.html](templates/style-01-exploded-view.html) | System shown as labeled, separated layers floating apart with leader lines | "We built this on purpose — here are the parts" |
| 2 | Hub & Spoke | [style-02-hub-spoke.html](templates/style-02-hub-spoke.html) | Central proprietary hub with 6 named surfaces radiating out | "One system, many surfaces" — integration story |
| 3 | Pipeline Cutaway | [style-03-pipeline-cutaway.html](templates/style-03-pipeline-cutaway.html) | Horizontal pipe with cutaway windows revealing each stage's work | "We know what happens at every stage" — transparency |
| 4 | Layered Stack | [style-04-layered-stack.html](templates/style-04-layered-stack.html) | OSI-style vertical stack — each named layer does one job, outcome on top | Architectural depth — "this isn't a tactic, it's a stack" |
| 5 | Control Panel | [style-05-control-panel.html](templates/style-05-control-panel.html) | Fake-product surface — knobs, gauges, status lights showing the system *in operation* | Proves the system is a real, running thing (not a deck) |
| 6 | Signal Flow | [style-06-signal-flow.html](templates/style-06-signal-flow.html) | Schematic with directional arrows showing how input becomes outcome through named transformations | Proves causality — "here's how A becomes B" |

**These are not the only mechanisms.** Invent new archetypes as new system shapes prove out. The constraint is the cardinal rule, not the catalog.

### How this catalog relates to the bold-text-designer system-style entries

The bold-text-designer catalog contains some "system" styles (22 flywheel, 23 stack of bricks, 25 integrated dashboard, 44 linear roadmap, 45 conversion funnel, 46 input→engine→output, 47 numbered steps, 48 week grid). Those are valid — they're typography-first executions of a mechanism. **Reach for this skill when the diagram needs to be more elaborate than a single icon row** — when the geometry of the system itself is what stops the scroll.

| Want a … | Use |
|---|---|
| 5-node ring with one outcome in the core | bold-text style 22 (flywheel) |
| 4-stop horizontal timeline | bold-text style 44 (roadmap) |
| Tapered conversion funnel | bold-text style 45 |
| Three-zone input→engine→output | bold-text style 46 |
| Exploded mechanical view with leader-line callouts | **system-visual style 01** |
| Hub with 6 named surfaces and an outcome in the center | **system-visual style 02** |
| Cutaway pipeline you can "see inside" | **system-visual style 03** |
| Layered architecture stack | **system-visual style 04** |
| Fake live UI / control surface | **system-visual style 05** |
| Schematic with directional signal flow | **system-visual style 06** |

## Text rules

Different from bold-text-designer. Stricter.

- **Headline:** ≤ 6 words. Names the system or the transformation. Not a benefit claim.
- **Subtext:** ≤ 10 words, optional. One supporting line.
- **Footer:** ≤ 8 words, optional. The qualifier — "performance-based", "invitation-only", "3 firms this month".
- **Labels inside the diagram:** 1–3 words each, in the buyer's vocabulary. Verbatim from `CAMPAIGN.md` where possible.
- **No paragraphs anywhere.** If you need to explain the diagram, it isn't doing its job.

### Why the limits are this tight

A system diagram needs space. Every word of headline you add shrinks the diagram. The diagram is the ad; protect its real estate.

## Color rules

Same Rule #1 from bold-text-designer: **contrast is king.** No default palette — every ad in a batch uses a different scheme.

System-specific guidance:

- **Background:** dark or near-dark. Schematics read more credibly on dark surfaces (think: blueprint, oscilloscope, monitoring dashboard). Light backgrounds are allowed but require extra care to avoid the "infographic" look.
- **Neutral:** muted grays/whites for non-proprietary parts of the diagram. These are the "given" elements — channels, inputs, generic stages.
- **Accent:** marks the proprietary element only (the engine, the hub, the integration layer, the outcome). One accent color per ad. Never on body text. Never on more than ~15% of the canvas.

## QC checklist

Run through this on every image before shipping:

- [ ] **CTA button present:** solid accent button at the bottom, text pulled verbatim from `COPY.md`, ends with `→`
- [ ] **CTA is the visual end-point:** eye lands on the button last, after the diagram. Muted qualifier (if any) sits *below* the button, not above
- [ ] **ICP pill present:** top of canvas, names the target audience verbatim from `CAMPAIGN.md`
- [ ] **ICP in diagram:** wherever the template has an output/hub/destination, the ICP shows up there too
- [ ] **Mechanism legibility:** can a stranger glance at the image for 2 seconds and describe how the system works?
- [ ] **Thumbnail test:** at 400px, can you read the headline AND the ICP pill AND every label inside the diagram?
- [ ] **One archetype:** the ad uses exactly one mechanism — not a hybrid
- [ ] **Real names:** every labeled part uses ICP vocabulary, not "Step 1" / "Module A"
- [ ] **Outcome visible:** the result appears somewhere on the canvas, distinct from the mechanism
- [ ] **Accent precision:** accent color only on the proprietary element + the ICP pill
- [ ] **Text budget:** headline ≤ 6 words, subtext ≤ 10 words, footer ≤ 8 words
- [ ] **Engineered feel:** thin strokes, deliberate alignment, schematic-not-decorative
- [ ] **Contrast:** diagram pops against background; labels readable at 400px thumbnail
- [ ] **No branding:** no logos, names, or brand marks
- [ ] **Scroll-stop:** would the *shape* of this image stop your scroll at 2am, before you read a word?
- [ ] **Element count:** ≤ 6 distinct things on the canvas (nodes, layers, channels, stages). More than that = too much thinking.

If any check fails → fix before shipping. The scroll-stop check is the hardest one and the most important — system diagrams that don't have a striking silhouette die in the feed.

## Workflow

**Hierarchy: Ad → Copy → Images.** The copy file is the ad's identity; the HTML and PNG are images downstream of it.

1. **Read COPY.md first.** `campaigns/{slug}/ads/{ad-name}/COPY.md` is the verbatim copy. Don't invent a headline; the words in COPY tell you what the diagram must support.
2. **Pick the mechanism.** Read the copy and ask: *what shape is this system?* A loop? A stack? A pipeline? A control surface? Pick the archetype whose geometry matches what the copy is claiming.
3. **Create the ad folder if it doesn't exist:** `campaigns/{slug}/ads/{ad-name}/images/`.
4. **Copy the template** into `images/{ad-name}.html`. Edit the three color CSS variables at the top. Replace placeholder labels with names from `CAMPAIGN.md`. Tune the headline to ≤ 6 words.
5. **Render the PNG** into the same `images/` folder:
   ```bash
   node skills/shared/render-static.js \
     campaigns/{slug}/ads/{ad-name}/images/{ad-name}.html \
     campaigns/{slug}/ads/{ad-name}/images/
   ```
6. **Seed COPY** if it doesn't already exist: `node skills/shared/tools/backfill-copy.js` (or use the editor). Open `COPY.md` and clean up any auto-extraction quirks. Just the verbatim copy — no interpretive sections.
7. **Visual QC** against the checklist above.

### Designing from COPY.md

For any image work, the workflow is:

1. **Read `campaigns/{slug}/ads/{ad-name}/COPY.md`** — just the verbatim words.
2. **Use the principles in this SKILL** — mechanism selection, accent rules, the archetype catalog — to decide which diagram shape and which proprietary element to highlight.

COPY.md tells you *what the ad says*. This SKILL tells you *how to diagram it*. The image must be congruent with the copy — same claim, same audience, same tone. Never build a diagram and write copy to match.

## Output

```
campaigns/{campaign-slug}/ads/{ad-name}/
  ├── COPY.md          ← canonical copy record (top-level — the ad's identity)
  ├── copy.json        ← same, machine-readable
  └── images/
      ├── {ad-name}.html   ← rendered-design HTML
      └── {ad-name}.png    ← rendered PNG
```
