# ePAC — Intelligence. With purpose.

Responsive cinematic landing page for Elliot Pacheco Beauchamp, using the user-provided professional context. React / TypeScript / Vite with GSAP, Lenis, React Three Fiber, Three.js, and custom GLSL.

## Development and build

`corepack pnpm install --frozen-lockfile`

`pnpm dev` starts the configured preview at port 3000. `pnpm check` runs TypeScript. `pnpm build` creates `dist/` and statically renders meaningful page content into its initial HTML. Browser hydration adds controls and motion.

No database, server credential or live generation API is required. Sound is opt-in. Heavy effects are desktop-only; user-disabled and reduced-motion views retain naturally stacked content.

## Media and production review

Seedance and Higgsfield clips and ambient audio are reused from epac-hub/e-pac.ai. Read SOURCES.md for the exact provenance and official references. `tools/visual-qa-gemini.py` is a production-only tool, requires the official google-genai SDK and a private GEMINI_API_KEY, and does not ship credentials to the browser. QA.md records actual execution and checks, not assumed conformance.

## Existing custom-domain deployment

The live repository is epac-hub/e-pac.ai. GitHub Pages serves main at repository root with CNAME `e-pac.ai`.

Source for this new landing page is stored under `epac-landing/` in that repository. Its `dist/` output is copied into the repository root **without deleting historical files or directories**. Preserve CNAME, `landing/`, `experience/`, `galactic-demo/`, historical hashed assets, and existing Git history. Do not use a destructive root directory mirror. The root `index.html` becomes the new landing page. Its previous root `404.html` stays in place for legacy deep links. A normal verified commit/push triggers the existing Pages build; no DNS change is needed.
