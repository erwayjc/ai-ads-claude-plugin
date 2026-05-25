---
name: competitive-research
description: Pull ad creatives from a competitor's Meta Ad Library, analyze each one, and generate an HTML strategy report with inline media. Use when the user wants to research what a competitor is running on Facebook/Instagram.
---

# Competitive Research

Download a competitor's Meta ads, analyze them, and produce a single self-contained HTML report.

## Output location

```
campaigns/competitive-research/{advertiser-slug}/
├── {slug}-image-01.jpg
├── {slug}-video-01.mp4
├── ...
└── {slug}-report.html     ← open this in a browser
```

## Phase 1: Get the Page ID

The Ad Library uses a **delegate_page ID**, not the profile ID. Wrong ID = no ads found.

```
Navigate to: https://www.facebook.com/{page-username}/
Extract via JS:
  document.documentElement.innerHTML.match(/"delegate_page":\{[^}]*"id":"(\d+)"/)
Fallback (if delegate_page missing):
  document.querySelector('meta[property="al:android:url"]').content
  // looks like fb://profile/123456789 — use the number
```

## Phase 2: Open the Ad Library

```
https://www.facebook.com/ads/library/?active_status=all&ad_type=all&country=ALL&is_targeted_country=false&media_type=image_and_meme&search_type=page&view_all_page_id={PAGE_ID}
```

Scroll down 2–3 times (lazy-loads ~20 ads per batch) to capture the full library.

## Phase 3: Extract URLs via JS

Run via browser evaluate — returns image URLs, video URLs, and CTA links:

```javascript
(() => {
  const images = [...document.querySelectorAll('img[src*="fbcdn.net"][src*="s600x600"]')]
    .map(img => img.src);
  const videos = [...document.querySelectorAll('video[src*="fbcdn.net"]')]
    .map(v => ({ src: v.src, poster: v.poster || null }));
  const ctas = [...document.querySelectorAll('a')]
    .filter(a => a.textContent.trim().match(/^(Learn More|Shop Now|Sign Up|Download|Get Offer|Book Now|Apply Now|Contact Us|Subscribe|Watch More|See More)$/i))
    .map(a => ({ text: a.textContent.trim(), url: a.href }))
    .filter(c => c.url && !c.url.includes('facebook.com/ads/library'));
  return JSON.stringify({ images, videos, ctas });
})()
```

DOM order = impression order, so `images[0]` is the highest-impression ad.

## Phase 4: Download assets

No auth needed — fbcdn.net URLs are public. Download promptly; tokens expire.

```bash
curl -sL -o "campaigns/competitive-research/{slug}/{slug}-image-01.jpg" "{url}"
curl -sL -o "campaigns/competitive-research/{slug}/{slug}-video-01.mp4" "{url}"
```

Naming: `{slug}-image-01.jpg`, `{slug}-video-02.mp4`, etc. in DOM order.

## Phase 5: Analyze each creative

**Images:** Use vision model — identify hook, copy, emotion, CTA, strengths, gaps.

**Videos:** Use Gemini video understanding — full frame-by-frame breakdown: hook, script transcript, visual flow, emotion, CTA, what works, what's missing.

**For each asset, capture:**
- Aspect ratio (use `sips -g pixelWidth -g pixelHeight` for images, `ffprobe` for video)
- Hook (first line / first frame)
- Copy / script
- Emotion being triggered
- CTA text and friction level
- 1–2 strengths
- 1–2 gaps

## Phase 6: Generate the HTML report

Write `{slug}-report.html` into the output folder. It must be self-contained — embed images as base64, video as `<video src="relative-path">` (relative paths work when opened locally from the same folder).

### Report structure

```
1. Header — advertiser name, date, ad count
2. Strategy summary — high-level pattern (what angle are they running? what funnel type?)
3. Ad cards (one per creative, in impression order):
   - Media (image or inline video player)
   - Badges: type | aspect ratio | duration (video)
   - Fields: Hook, Copy, Emotion, CTA, Strengths, Gaps
4. Key takeaways — 3–5 bullets: what to steal, what to avoid, what gap exists
```

### Styling

Clean, doc-like. White background, dark text, simple card grid. No dark gradients. Badges for quick scanning. Readable at 100% zoom on a laptop.

## Done

Tell the user the report is at `campaigns/competitive-research/{slug}/{slug}-report.html` and they can open it in any browser.
