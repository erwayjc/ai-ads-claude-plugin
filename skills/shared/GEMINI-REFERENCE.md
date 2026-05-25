# Gemini Image Generation — Shared Reference

Production reference for the `gemini-image-designer` skill. Each ad is generated as a single 1080×1080 PNG via the Google Gemini 2.5 Flash Image model (also marketed as "Nano Banana").

## Model

- **Model ID:** `gemini-2.5-flash-image`
- **Endpoint:** Generative Language API (https://generativelanguage.googleapis.com)
- **Auth:** API key from https://aistudio.google.com/apikey, stored in `.env` as `GEMINI_API_KEY`
- **Output:** PNG, dimensions controlled by prompt (we request 1080×1080)

## Cost

The free tier is enough to experiment with. As of the time of writing, image generation is billed per output image — check https://ai.google.dev/pricing for current rates before running large batches. The included tool `gemini-generate.js` logs the API response so you can audit usage after each call.

## Calling the API

Use the shared tool — never hand-roll fetch calls in a skill:

```bash
node skills/shared/tools/gemini-generate.js \
  --prompt-file <path-to-prompt.txt> \
  --out <path-to-output.png>
```

**Flags:**
- `--prompt-file <path>` — required. Path to a UTF-8 text file containing the full prompt. Use a file (not inline) because prompts are often 30+ lines and shell quoting breaks.
- `--prompt <inline string>` — alternative for one-line prompts. Avoid for production work.
- `--out <path>` — required. Where to write the generated PNG.
- `--model <id>` — optional. Override the default `gemini-2.5-flash-image` (or whatever `GEMINI_IMAGE_MODEL` is set to in `.env`).
- `--check` — health check. Validates the API key without generating an image.

## Prompt structure for ads

The `gemini-image-designer` skill defines the prompt structure. The short version:

```
A 1080x1080 square paid social media ad.
Vertical hierarchy:
TOP: <ICP pill>
MIDDLE: <Headline — verbatim from COPY.md>
BELOW: <Subtext — verbatim from COPY.md>
BOTTOM: <CTA pill — verbatim from COPY.md>
VISUAL DIRECTION: <aesthetic / palette / mood>
CONSTRAINTS: <edge-to-edge, sharp text, no logos, single CTA>
```

The full prompt template is in `skills/gemini-image-designer/SKILL.md`.

## Reliability notes

Gemini is good but not perfect at rendering text:

- **Text accuracy degrades past ~12 words.** Keep the headline short. If it's longer than 8 words, expect to regenerate 2-3 times.
- **Hands and small faces mangle.** Avoid prompting for close-up human anatomy. Use objects, hands holding objects, distant figures, or no figures.
- **Logos hallucinate.** If you don't prompt against them ("no logos, no brand marks") Gemini sometimes invents Meta/Google/Apple-looking marks. Always include the negative constraint.
- **Multiple CTAs.** Gemini sometimes renders two buttons. Always prompt "Single CTA only. No competing buttons." and QC every output.

## Reproducibility

Always save the exact prompt used to generate an ad as `{ad-name}.prompt.txt` in the ad's `images/` folder. This means:

1. The ad can be regenerated identically later (model permitting).
2. Variants can be produced by swapping single lines without re-deriving the whole prompt.
3. A reviewer can see exactly what was asked of the model.

## File output

```
campaigns/{slug}/ads/{ad-name}/images/
  ├── {ad-name}.prompt.txt   ← the verbatim Gemini prompt
  └── {ad-name}.png          ← the generated PNG
```

No HTML file is produced — unlike the HTML lanes, the PNG IS the ad. The `.prompt.txt` plays the same role HTML plays in the other lanes: the human-readable source the image was generated from.
