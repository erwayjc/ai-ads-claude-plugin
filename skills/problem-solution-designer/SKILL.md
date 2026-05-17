---
name: problem-solution-designer
description: Builds problem→solution image ads where the canvas is split into a named problem zone and a named solution zone, joined by an explicit transition (tear, arrow, bridge, dive, escape). Different lane from bold-text-designer — narrative and diagrammatic, not pure typography.
---

# Problem-Solution Designer

**Production method:** HTML/CSS + Playwright → see [../shared/HTML-RENDER-REFERENCE.md](../shared/HTML-RENDER-REFERENCE.md)
**Default output size:** 1080×1080 (square)

You build ads that name the buyer's pain in their own voice, then resolve it. Every template here enforces the same three-part structure:

1. **Problem zone** — the ICP's literal pain, in their words
2. **Transition** — a visual mechanism that does the "but" without words (or with one bridge word)
3. **Solution zone** — the system/offer that resolves it

This is the sister skill to [bold-text-designer](../bold-text-designer/SKILL.md). Use bold-text when the beat is a single hook, stat, or claim. Use **problem-solution** when the ad needs to *carry the buyer across the gap* between the world they're in and the world you're selling.

## When to use which skill

| Need | Use |
|---|---|
| One headline, one stat, one claim — pure scroll-stop | bold-text-designer |
| Buyer needs to feel recognized before they hear the offer | problem-solution-designer |
| Comparison vs a competitor or an alternative | bold-text-designer (styles 21, 37, 38) |
| Naming a cluster of pains and resolving them as one | problem-solution-designer |
| Visual diagram of the system itself | bold-text-designer (styles 22, 25, 26, 45, 46) |

If you find yourself wanting both "name the pain" and "show the system," reach here.

## Core design rules

### Rule #1: Literal pain, not metaphor

The problem zone must use the buyer's own words. "I'm tired of paying for clicks that never call." NOT "drowning in a sea of unqualified noise." Read the campaign's `CAMPAIGN.md` — quote ICP language verbatim where you can.

### Rule #2: One pain cluster, not a laundry list

Pick the dominant pain the offer actually resolves. If you list five problems and the solution only fixes two, the ad lies. Better: three faces of the same problem → one resolution.

### Rule #3: The transition does the work

The visual mechanism (tear, fall, arrow, dive, escape, reframe) is the rhetorical "but." Do not write *"but here's the solution…"* in copy — let the visual carry it. At most, one bridge word ("Until.", "Then.", "Instead.").

### Rule #4: Solution = the system, not a sub-feature

The solution zone names the full offer or outcome, not a mechanism inside it. "Speed-to-lead under 5 minutes" is a feature. "The complete intake system — answered, qualified, booked" is the offer. See [feedback memory on solution-forward ads].

### Rule #5: One beat per ad

Headline-zone + transition + solution-zone + one CTA line. No stacking. If you need more, it's two ads.

## Color & contrast

Two-zone ads require a **strong visual break** between problem and solution. Three approaches:

- **Tonal split** — light/paper for problem, dark for solution (style ps-01, ps-04). Reads as "messy → clear."
- **Inverted accent** — same palette both zones, but accent flips sides. Reads as "same world, new framing."
- **Saturation jump** — muted/desaturated problem zone, vivid solution zone. Reads as "drained → energized."

Accent color is reserved for the bridge moment — the word, pill, or shape where problem becomes solution.

## Style catalog

6 starter templates. Each enforces the problem→transition→solution structure with a different visual mechanic.

| # | Name | Template | Transition mechanic | Best for |
|---|---|---|---|---|
| 1 | Empathy Stack | [ps-01-empathy-stack.html](templates/ps-01-empathy-stack.html) | 3 "You've tried…" rows → single reveal pill | Buyer has tried competitors/DIY |
| 2 | Domino Fall | [ps-02-domino-fall.html](templates/ps-02-domino-fall.html) | Falling dominoes cascade → solution catches the last | Cascading consequences ("if X, then Y, then Z") |
| 3 | Broken Machine | [ps-03-broken-machine.html](templates/ps-03-broken-machine.html) | Exploded mismatched gears → single integrated mechanism | Fragmented tools/vendors |
| 4 | Iceberg | [ps-04-iceberg.html](templates/ps-04-iceberg.html) | Visible symptom above waterline → hidden root cause below → solution as the dive | Buyer is solving a symptom, missing the cause |
| 5 | Cycle Trap | [ps-05-cycle-trap.html](templates/ps-05-cycle-trap.html) | Closed loop of pain → arrow exits to linear progress | Repeating monthly/quarterly cycles |
| 6 | Dialogue Bubble | [ps-06-dialogue-bubble.html](templates/ps-06-dialogue-bubble.html) | Three internal-monologue thought bubbles → reframed by solution caption | 3am self-talk pains, mindset shifts |

**These are not the only mechanics.** Invent new ones — the constraint is structural (problem zone, transition, solution zone), not visual.

## Text hierarchy

- **Problem zone label**: small uppercase tag (16–22px), muted
- **Problem statement(s)**: serif or italicized for "voice" feel, 40–80px
- **Transition word** (if any): single word, accent color, 30–48px
- **Solution headline**: sans-serif, bold, 48–80px
- **Solution sub-line**: commercial terms / proof point, 20–26px
- **CTA pill** (optional): only if the campaign brief requires a hard CTA

### Billboard test
Same as bold-text-designer — readable at 400px thumbnail, both zones distinguishable at a glance.

## QC checklist

- [ ] **Literal pain:** problem zone uses ICP's own words, no metaphor
- [ ] **One cluster:** pain shown is one the offer actually resolves
- [ ] **Visual transition:** the mechanism does the "but," not copy
- [ ] **Solution = system:** solution zone names the full offer, not a sub-feature
- [ ] **Zone break:** clear visual contrast between problem and solution halves
- [ ] **Accent precision:** accent color only at the bridge / focal element
- [ ] **One beat:** headline + transition + resolution + one CTA line. No stacking.
- [ ] **Spelling:** every word correct
- [ ] **Edge-to-edge:** no white margins, body fills 1080×1080
- [ ] **Scroll-stop:** would a tired buyer at 2am recognize themselves and want the relief?

If any check fails → fix before shipping.

## Workflow

**Copy first, render second.** Lock the copy before producing the image — the PNG is just the screenshot.

1. Read the campaign's `CAMPAIGN.md` — get ICP voice and the actual offer.
2. Pick the template whose transition mechanic fits the pain shape.

Then either CLI or editor:

**CLI**
3. Create the ad folder: `campaigns/{slug}/ads/{ad-name}/images/`. Copy the template into `images/{ad-name}.html`.
4. Edit the CSS color variables at the top + the visible text.
5. Render the PNG into the same `images/` folder:
   ```bash
   node skills/shared/render-static.js \
     campaigns/{slug}/ads/{ad-name}/images/{ad-name}.html \
     campaigns/{slug}/ads/{ad-name}/images/
   ```
6. Seed COPY: `node skills/shared/tools/backfill-copy.js`. Open `campaigns/{slug}/ads/{ad-name}/COPY.md` and clean up any auto-extraction quirks. The file is just the verbatim copy — don't add interpretive sections.

**Visual editor** (see [../shared/HTML-RENDER-REFERENCE.md](../shared/HTML-RENDER-REFERENCE.md))
3. `cd skills/shared && npm run editor`, open `http://localhost:5173/`.
4. Pick the campaign, then the template under "Templates · problem-solution-designer".
5. Edit text/colors live, hit **Save & Render PNG** — writes the HTML+PNG into `ads/{ad-name}/images/` and seeds `COPY.md` + `copy.json` at the ad root.
6. Open `COPY.md` and clean up any auto-extraction quirks. Don't add interpretive sections — it's just the copy.

7. Visual QC against the checklist above.

### Designing from COPY.md

For any image work (HTML render today, AI-generated imagery later): read `campaigns/{slug}/ads/{ad-name}/COPY.md` first — just the verbatim copy. Then use this SKILL's problem-solution principles to derive angle, accent placement, and image direction yourself. The copy file tells you *what the ad says*; this SKILL tells you *how to design from it*. **No COPY.md → no image.**

## Output

```
campaigns/{campaign-slug}/ads/{ad-name}/
  ├── COPY.md          ← canonical copy record (the ad's identity)
  ├── copy.json        ← same, machine-readable
  └── images/
      ├── {ad-name}.html   ← rendered-design HTML
      └── {ad-name}.png    ← rendered PNG
```
