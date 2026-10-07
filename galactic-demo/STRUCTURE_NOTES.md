# Home.tsx Structure Notes (for editing reference)

## Key Line Ranges
- Line 1: imports (useRef, useEffect, useState, useMemo, useCallback, Suspense, createContext, useContext)
- Lines 12-71: PerformanceProvider (auto-detect, manualOverride state, togglePerformance)
- Lines 73-115: SoundProvider + useSoundEffects
- Lines 117-201: FloatingNav (scroll spy)
- Lines 203-383: FuturisticCursor (dot, ring, glow, trail, card/magnetic/canvas/glitch states)
- Lines 385-614: Preloader (BlackHoleVortex + loading steps)
- Lines 616-674: AudioController (bgMusic + sfxAudio, toggle button)
- Lines 676-790: GLSL Shader (vertexShader, fragmentShader, ShaderBackground, ShaderCanvas)
- Lines 792-844: FloatingGeometry + HeroCanvas (Three.js icosahedron)
- Lines 846-938: StarField + ParticleCanvas (2000 particles, scroll-driven)
- Lines 940-1004: SectionReveal (clip-path circle portal + glow ring)
- Lines 1006-1052: MagneticButton (with internal glow)
- Lines 1054-1130: LiquidRevealImage (blur/saturate/scale + sweep overlay)
- Lines 1132-1233: CaseStudiesSection
- Lines 1236-1301: GlitchText (hover distortion)
- Lines 1303-1371: HeroSection
- Lines 1374-1446: TextRevealSection
- Lines 1448-1540: ParallaxSection
- Lines 1542-1580: HorizontalScrollSection
- Lines 1582-1631: PinnedSection
- Lines 1634-1701: CardsSection (9 cards)
- Lines 1703-1789: ContactParticles + ContactParticleCanvas
- Lines 1791-1941: ContactSection (typewriter + form)
- Lines 1943-1996: Footer
- Lines 1998-2028: Home (main export with Lenis, PerformanceProvider, SoundProvider)
- Lines 2030-2057: PerformanceToggle button (bottom-left)
- Lines 2059-2087: HomeContent (assembles all sections)

## What needs to change for the 3 new features:

### 1. SVG Morphing Section Dividers
- Add an SVGMorphDivider component that renders between sections
- Uses GSAP MorphSVG or manual path interpolation with ScrollTrigger
- Place between major sections in HomeContent

### 2. Konami Code Easter Egg
- Add a useKonamiCode hook that listens for ↑↑↓↓←→←→BA
- When activated, sets a "hyperGalactic" state in PerformanceContext
- Hyper mode: particle count x10, colors invert to neon, speed x3
- Visual flash/explosion on activation

### 3. Improved Performance Toggle
- Add localStorage persistence (key: "galactic-perf-mode")
- Initialize manualOverride from localStorage
- Add flip animation on toggle (3D rotate transition)
- Show toast/notification on toggle
