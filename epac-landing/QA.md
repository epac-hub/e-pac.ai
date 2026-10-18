# ePAC landing page QA — 10-18-2026

## Verification evidence
Strict TypeScript check and production client + server-side static-render build succeeded. The initial HTML contains the professional name, page narrative, all three creative-process names and all nine feature cards without executing JavaScript. All initial-HTML local asset references exist; the exact existing CNAME is included in the build. The single Home route manifest returns HTTP 200 JSON, and the Seedance MP4 returns HTTP 200 video/mp4 on preview.

A read-only implementation review identified and resolved: mobile GSAP motion instead of the static fallback; desktop no-motion panels remaining horizontal rather than stacked; hidden-tab playback for user-controlled dialog videos; missing initial Lenis overlay synchronization; and a WebP poster mislabeled PNG. The deployment procedure protects historical content and does not delete the target root.

Actual preview browser measurements found two mounted WebGL canvases, no WebGL fallback, no page-width overflow, and the Seedance video loaded with readyState 4, advancing currentTime, and paused=false. Clicking Perspective revealed its content. Clicking Experience revealed all nine cards with clip-path none. The pinned sequence and focus indicator progressed to the final step/panel during navigation. These are observed checks, not a claim of full accessibility or performance conformance.

## Google AI Studio / Gemini production review
The reused private tools/visual-qa-gemini.py ran successfully against rendered desktop and mobile screenshots using Gemini. Observations concerned orbital overlap with metadata, low emphasis of microcopy, subtle starfield visibility, and viewport-edge cropping. The orbital framing and material were corrected, and coordinate text now has a translucent backing. The viewport-edge screenshot cut is not document clipping: the page continues below the captured viewport. No screen-reader or WCAG certification is claimed, and a static screenshot cannot prove motion or audio behavior.

## QA checklist
- [x] Strict TypeScript check.
- [x] Production build and meaningful statically rendered page body.
- [x] All nine required feature cards, three actual production-tool workflows, local media and manifest.
- [x] Desktop and mobile opening layouts reviewed; corrected orbital framing reviewed.
- [x] No fabricated client logos, testimonials, metrics, credentials, policy or legal claims.
- [x] Mobile/touch lighter fallback; reduced-motion and user-disabled natural content flow.
- [x] Native dialog, visible focus styles, skip link, semantic controls and opt-in audio implemented.
- [x] Actual Gemini screenshot review performed; provider key absent from browser code.
- [x] Process dialog opened natively, focused its close control, fit the viewport, locked background scrolling and closed with Escape. Motion-off removed both WebGL canvases, retained clip-path none and stacked focus content as a grid.
- [x] Soundtrack asset returns HTTP 200 audio/mpeg and decodes as MP3, 44.1 kHz stereo. Opt-in and fade logic inspected. The automated browser was document.visibilityState=hidden during the playback test, so the deliberate hidden-tab pause prevented a verified audible-playback result; no playback-success claim is made.
- [ ] GitHub Pages replacement build and public custom-domain delivery confirmed.

## Visualizations and their meaning
There are no statistical graphs, dashboards or performance KPIs. The visual elements are decorative or navigational, not data representations.

| Visual | Description | Accuracy boundary |
|---|---|---|
| Orbital hero | Cursor-responsive distorted icosahedron with tilted orbital rings and a satellite. | Decorative brand imagery; not a model of a real planet or person. |
| Cosmic starfield | Exactly 2,000 generated GPU points with scroll-responsive travel. | Particle count is an implementation parameter, not a business metric. |
| GLSL background | Animated three-dimensional simplex-noise plum/violet color field. | Decorative atmosphere, no numeric interpretation. |
| Four focus-area graphics | Stylized orbital/network geometry illustrates healthcare, enterprise, policy and technology. | Conceptual categories, not measured results or case studies. |
| Focus progress line | Tracks the desktop horizontal-scroll narrative. | Calculated from ScrollTrigger progress; not a KPI. |
| Numbered approach orbit | Shows the active step in a three-step positioning narrative. | Navigation state; the text describes an approach, not a performance claim. |
| Sound bars | Indicate whether opt-in audio is playing. | Decorative state animation, not a spectrum analyzer. |

## Known limitations
The heavy Three.js/R3F chunk is lazy-loaded only for fine-pointer desktop motion views and is approximately 245 KB gzip. No Core Web Vitals, low-end hardware frame rate, screen-reader coverage or formal WCAG conformance has been measured. The native email CTA opens the visitor's email application; it does not submit data to a server.
