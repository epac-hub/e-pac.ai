# Cinematic production workflow

The public site is a **static React/Vite experience**, not a live media-generation application. Generated media is produced during design, optimized, and committed/deployed as static assets. **No provider key belongs in the browser bundle.**

| Stage | Tool actually used | Site asset / role | Verification |
| --- | --- | --- | --- |
| Hero motion | Manus Seedance generation | `seedance-web_15a96ec9.mp4`, muted desktop background in dark mode | Chromium media `currentTime > 0`, no request errors |
| Narrative motion | Higgsfield Kling v3.0 | `higgsfield-web_9f6a141d.mp4`, muted desktop storytelling backdrop in dark mode | Chromium media loaded and played during story scroll |
| Art direction | Nano Banana | Hero stills for dark and light desktop/mobile variants | Images loaded and title remained legible |
| Visual review | **Google AI Studio / Gemini API** | `tools/visual-qa-gemini.py` accepts local rendered screenshots; no runtime generation | Run the script with a private `GEMINI_API_KEY`; confirm its observations with browser tests |

## Reproduce the review

```bash
python3 -m pip install google-genai
python3 tools/visual-qa-gemini.py /path/to/dark-hero.png /path/to/light-hero.png
pnpm run check
pnpm run build
```

Google AI Studio's Playground was accessible via the user's existing session. A direct URL-only review there could **not** inspect the interactive page; the server-side Gemini API successfully inspected a local screenshot instead. This is a **production workflow integration**, not a live AI feature for visitors. Google documents why API keys must not be shipped in client code: <https://ai.google.dev/gemini-api/docs/api-key>.

The theme toggle persists dark/light preferences. Dark mode uses the muted Seedance and Higgsfield footage; light mode uses separately designed bright stills so dark footage cannot defeat contrast. A static starfield remains visible in both modes. With `prefers-reduced-motion: reduce`, automatic scroll and star motion are disabled.

**QA caveat:** A model's opinion on a screenshot cannot verify actual scrolling or WCAG contrast. Playwright/browser measurements and visual inspection remain the final gate; verify Home, About, mobile, dark/light, scrolling, and reduced motion before deploying. The local source and deployed `experience/` build must be synchronized together for GitHub Pages.
