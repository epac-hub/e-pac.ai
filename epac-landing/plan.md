# ePAC landing page — implementation and design

## Scope
Approved on 10-18-2026 with the explicit direction to replace the existing e-pac.ai site. Build and verify the landing page in the managed project, then save source and static output to epac-hub/e-pac.ai and deploy through its existing GitHub Pages configuration. Preserve CNAME, existing historical pages and Git history; do not change DNS. Use every requested effect from the supplied reference. Reuse the existing Seedance hero MP4, Higgsfield narrative MP4, ambient soundtrack, and stills from the selected repository. Provider usage is a production workflow, not a visitor-facing live generation feature. Reuse the repository's Gemini screenshot review script and execute a private screenshot review during production; no API keys enter the browser.

## Page and content
A cinematic opening with the ePAC wordmark and an editorial headline introduces Elliot Pacheco Beauchamp's work at the intersection of healthcare, business, public policy, and technology. Below it: a brief profile, horizontally scrolling focus-area panels, a pinned numbered approach section, three interactive creative-process cards (Seedance, Higgsfield, Google AI Studio), a legible feature showcase containing all nine requested techniques, and a centered contact/footer. Professional biography comes only from user-provided context and is identified as such. The known email elliotpac@gmail.com can be used for a native email CTA; no invented contact details, testimonials, project results, or statistics.

## Implementation
React + TypeScript + Vite, GSAP with @gsap/react and ScrollTrigger, Lenis smooth scrolling, lazy React Three Fiber / Three.js scene with an interactive distorted icosahedron, and a custom GLSL simplex-noise background. A single GPU points draw call renders 2000 scroll-responsive stars. Cursor dot, ring, glow trail and state-aware scaling use mix-blend-mode:difference; magnetic buttons pull toward the cursor and spring back. Portal section reveals use clip-path circles. Desktop focus panels move horizontally in a vertically pinned section. Approach content stays pinned while numbered steps change. Ambient audio is opt-in, starts only on a gesture, and fades in/out. The motion control pauses video, particles, cursor effects and animated shaders. Reduced-motion and mobile use static readable fallbacks, no scroll traps, a native cursor and naturally stacked panels.

Static rendering supplies meaningful initial HTML and metadata. A build-time React server render produces the page body, hydrated by the browser. No server, database, credentials, forms with fake submissions or unnecessary accounts. The site uses relative asset paths. Preview listens on the configured port 3000. Commit a verified version to the Manus-managed repository; this does not change the existing user repository or custom domain. Publication and domain replacement are separate actions.

## Project structure
- src/App.tsx: semantic landing page and content.
- src/components/: WebGL scene, cursor, audio, magnetic links and creative-process dialog.
- src/hooks/: motion preferences and GSAP/Lenis lifecycle.
- src/styles.css: responsive editorial visual system and reduced-motion rules.
- public/media/: existing video, still and soundtrack assets.
- public/manus-routes.json: the single Home route.
- tools/: build-time HTML render and reused private Gemini screenshot review.
- plan.md, TODO.md, QA.md: scope, outcomes, checks and evidence.

## Design
**Design movement:** cinematic editorial futurism, guided by the reference's midnight-purple glass and starfield.

**Principles:** strong text contrast; generous intentional space; one commanding visual per section; restrained motion with clear user control.

**Color philosophy:** near-black aubergine provides a serious institutional base, warm ivory keeps text readable, and electric lavender signals technical precision without overwhelming the content.

**Layout:** asymmetric opening with large left-aligned type and a right-side orbital object. Broad editorial sections alternate with an edge-to-edge horizontal narrative and a pinned approach. Avoid a generic card grid as the entire page.

**Signature elements:** thin orbital rings, tiny coordinate-style section labels, and hairline lavender boundaries. Glass cards remain substantially opaque enough for readable text.

**Interaction:** calm physical magnetism, a light cursor halo, and depth responding to intent. Navigation is keyboard-operable and anchors remain functional without motion.

**Animation:** introductory opacity/transform reveals; GSAP horizontal travel and pinned steps; clip-path portal reveals; slow WebGL distortion; scroll-driven stars; native motion opt-out. All GSAP effects clean up with useGSAP contexts. Heavy 3D is disabled under 768px; page visibility pauses rendering and media.

**Typography:** Space Grotesk display and wordmark, Manrope body, and a system monospace for compact labels. Large tightly tracked typography and moderate paragraph widths.

**Brand essence:** ePAC introduces Elliot Pacheco Beauchamp's healthcare, enterprise and policy work through an intelligently directed digital experience. Precise, purposeful, forward-looking.

**Voice:** serious, concise, institutional. Examples: “Intelligence. With purpose.” and “Healthcare. Enterprise. Public policy.” These are positioning lines, not claims of measured outcomes.

**Wordmark:** custom tracked ePAC lettering with an orbital four-point symbol and a small lavender terminal dot; no fabricated corporate certification mark.

**Signature color:** electric lavender #b79aff.
