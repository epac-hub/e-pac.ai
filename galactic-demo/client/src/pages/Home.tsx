import { useRef, useEffect, useState, useMemo, useCallback, createContext, useContext } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useTheme } from "@/contexts/ThemeContext";
import AutoStoryScroll from "@/components/AutoStoryScroll";
import CinematicReadyGate from "@/components/CinematicReadyGate";
import ProductionStageDetails, { PRODUCTION_STAGES } from "@/components/ProductionStageDetails";
import { mediaPath } from "@/lib/media";
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// ============================================================
// FULL QUALITY — Always on; Hyper-Galactic remains an independent easter egg
// ============================================================
const PerformanceContext = createContext<{
  isLowEnd: boolean;
  isHyperGalactic: boolean;
  activateHyperGalactic: () => void;
}>({
  isLowEnd: false,
  isHyperGalactic: false,
  activateHyperGalactic: () => {},
});

function usePerformanceMode() {
  return useContext(PerformanceContext);
}

function PerformanceProvider({ children }: { children: React.ReactNode }) {
  const [isHyperGalactic, setIsHyperGalactic] = useState(false);

  useEffect(() => {
    try {
      localStorage.removeItem("galactic-perf-mode");
    } catch {
      // Storage may be unavailable in private browsing.
    }
  }, []);

  useEffect(() => {
    window.dispatchEvent(new CustomEvent("galactic-starfield-boost", { detail: isHyperGalactic }));
    return () => {
      window.dispatchEvent(new CustomEvent("galactic-starfield-boost", { detail: false }));
    };
  }, [isHyperGalactic]);

  const activateHyperGalactic = useCallback(() => {
    setIsHyperGalactic(true);
  }, []);

  return (
    <PerformanceContext.Provider value={{ isLowEnd: false, isHyperGalactic, activateHyperGalactic }}>
      {children}
    </PerformanceContext.Provider>
  );
}

// ============================================================
// UI SOUND EFFECTS (Hover + Click)
// ============================================================
const SoundContext = createContext<{
  playHover: () => void;
  playClick: () => void;
}>({ playHover: () => {}, playClick: () => {} });

function SoundProvider({ children }: { children: React.ReactNode }) {
  const hoverAudioRef = useRef<HTMLAudioElement | null>(null);
  const clickAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    hoverAudioRef.current = new Audio(mediaPath("sfx-hover_8a26f67f.mp3"));
    hoverAudioRef.current.volume = 0.15;
    clickAudioRef.current = new Audio(mediaPath("sfx-click_d6f1c566.mp3"));
    clickAudioRef.current.volume = 0.25;
  }, []);

  const playHover = useCallback(() => {
    if (hoverAudioRef.current) {
      hoverAudioRef.current.currentTime = 0;
      hoverAudioRef.current.play().catch(() => {});
    }
  }, []);

  const playClick = useCallback(() => {
    if (clickAudioRef.current) {
      clickAudioRef.current.currentTime = 0;
      clickAudioRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <SoundContext.Provider value={{ playHover, playClick }}>
      {children}
    </SoundContext.Provider>
  );
}

function useSoundEffects() {
  return useContext(SoundContext);
}

// ============================================================
// FLOATING NAVIGATION (Scroll Spy)
// ============================================================
const NAV_SECTIONS = [
  { id: "hero", label: "HOME" },
  { id: "text-reveal", label: "TYPE" },
  { id: "parallax", label: "PARALLAX" },
  { id: "horizontal", label: "SCROLL" },
  { id: "cards", label: "TECH" },
  { id: "contact", label: "CONTACT" },
];

function FloatingNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const [isVisible, setIsVisible] = useState(false);
  const { playHover, playClick } = useSoundEffects();

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight * 0.5);

      // Find which section is currently in view
      for (let i = NAV_SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_SECTIONS[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.5) {
            setActiveSection(NAV_SECTIONS[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    playClick();
    const el = document.getElementById(id);
    if (el) {
      const targetY = el.getBoundingClientRect().top + window.scrollY;
      gsap.to(window, {
        scrollTo: { y: targetY, autoKill: true },
        duration: 1.8,
        ease: "power4.inOut",
      });
    }
  };

  const isMobile = typeof window !== "undefined" && window.matchMedia("(max-width: 768px)").matches;
  if (isMobile) return null;

  return (
    <nav
      className={`floating-nav fixed right-8 top-1/2 -translate-y-1/2 z-[9980] flex flex-col items-end gap-4 transition-all duration-500 ${
        isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
      }`}
    >
      {NAV_SECTIONS.map((section) => (
        <button
          key={section.id}
          onClick={() => scrollTo(section.id)}
          onMouseEnter={playHover}
          data-hover
          className="group flex items-center gap-3"
        >
          <span
            className={`text-[10px] uppercase tracking-[0.2em] transition-all duration-300 ${
              activeSection === section.id
                ? "text-[#8b5cf6] opacity-100 translate-x-0"
                : "text-white/30 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0"
            }`}
          >
            {section.label}
          </span>
          <div
            className={`transition-all duration-300 rounded-full ${
              activeSection === section.id
                ? "w-3 h-3 bg-[#8b5cf6] shadow-[0_0_12px_rgba(139,92,246,0.6)]"
                : "w-2 h-2 bg-white/20 group-hover:bg-white/50"
            }`}
          />
        </button>
      ))}
      {/* Page navigation links */}
      <div className="mt-4 pt-4 border-t border-white/10 flex flex-col items-end gap-3">
        <button
          onClick={() => { window.dispatchEvent(new CustomEvent('portal-navigate', { detail: '/about' })); }}
          onMouseEnter={playHover}
          data-nav-link
          className="group flex items-center gap-3"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] text-white/30 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">ABOUT</span>
          <div className="w-2 h-2 bg-[#8b5cf6]/30 group-hover:bg-[#8b5cf6] rounded-sm transition-all duration-300" />
        </button>
      </div>
    </nav>
  );
}

// ============================================================
// FUTURISTIC CURSOR (Magnetic + Particle-aware + Adaptive)
// ============================================================
function FuturisticCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<HTMLDivElement[]>([]);
  const particlePoolRef = useRef<HTMLDivElement[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const prevMousePos = useRef({ x: 0, y: 0 });
  const velocity = useRef(0);
  const particleIndex = useRef(0);
  const { isLowEnd } = usePerformanceMode();

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    const glow = glowRef.current;
    if (!dot || !ring || !glow) return;

    const PARTICLE_COLORS = ["#8b5cf6", "#a78bfa", "#c4b5fd", "#7c3aed", "#6d28d9", "#ddd6fe"];

    const spawnParticle = (x: number, y: number, vel: number) => {
      const pool = particlePoolRef.current;
      if (pool.length === 0) return;
      const idx = particleIndex.current % pool.length;
      particleIndex.current++;
      const p = pool[idx];
      if (!p) return;

      const color = PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)];
      const size = 3 + Math.random() * (vel * 0.03);
      const angle = Math.random() * Math.PI * 2;
      const dist = 10 + Math.random() * 30 * (vel * 0.01);
      const targetX = x + Math.cos(angle) * dist;
      const targetY = y + Math.sin(angle) * dist;

      p.style.width = `${size}px`;
      p.style.height = `${size}px`;
      p.style.backgroundColor = color;
      p.style.boxShadow = `0 0 ${size * 2}px ${color}`;

      gsap.set(p, { x, y, scale: 1, opacity: 0.9 });
      gsap.to(p, {
        x: targetX,
        y: targetY,
        scale: 0,
        opacity: 0,
        duration: 0.6 + Math.random() * 0.4,
        ease: "power2.out",
      });
    };

    const move = (e: MouseEvent) => {
      const dx = e.clientX - prevMousePos.current.x;
      const dy = e.clientY - prevMousePos.current.y;
      velocity.current = Math.sqrt(dx * dx + dy * dy);
      prevMousePos.current = { x: e.clientX, y: e.clientY };
      mousePos.current = { x: e.clientX, y: e.clientY };

      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.08, ease: "power2.out" });
      gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.15, ease: "power2.out" });
      gsap.to(glow, { x: e.clientX, y: e.clientY, duration: 0.35, ease: "power2.out" });

      // Animate trail particles
      if (!isLowEnd) {
        trailRefs.current.forEach((trail, i) => {
          if (trail) {
            gsap.to(trail, {
              x: e.clientX,
              y: e.clientY,
              duration: 0.25 + i * 0.06,
              ease: "power2.out",
            });
          }
        });

        // Spawn color particles based on velocity
        if (velocity.current > 8) {
          const count = Math.min(Math.floor(velocity.current / 12), 4);
          for (let i = 0; i < count; i++) {
            spawnParticle(e.clientX, e.clientY, velocity.current);
          }
        }
      }
    };

    const grow = () => {
      gsap.to(ring, { scale: 2.5, opacity: 0.3, borderColor: "#8b5cf6", duration: 0.4, ease: "power3.out" });
      gsap.to(dot, { scale: 0.5, backgroundColor: "#8b5cf6", duration: 0.3 });
      gsap.to(glow, { scale: 3, opacity: 0.8, duration: 0.4 });
    };
    const shrink = () => {
      gsap.to(ring, { scale: 1, opacity: 1, borderColor: "rgba(255,255,255,0.6)", duration: 0.4, ease: "elastic.out(1, 0.5)" });
      gsap.to(dot, { scale: 1, backgroundColor: "#ffffff", duration: 0.3 });
      gsap.to(glow, { scale: 1, opacity: 0.3, duration: 0.4 });
    };

    // Card hover — cursor morphs into crosshair
    const cardGrow = () => {
      gsap.to(ring, { scale: 3, opacity: 0.2, borderColor: "#8b5cf6", borderWidth: "2px", rotation: 45, duration: 0.5, ease: "power3.out" });
      gsap.to(dot, { scale: 2, backgroundColor: "#8b5cf6", duration: 0.3 });
      gsap.to(glow, { scale: 4, opacity: 1, duration: 0.5 });
    };
    const cardShrink = () => {
      gsap.to(ring, { scale: 1, opacity: 1, borderColor: "rgba(255,255,255,0.6)", borderWidth: "1px", rotation: 0, duration: 0.5, ease: "elastic.out(1, 0.4)" });
      gsap.to(dot, { scale: 1, backgroundColor: "#ffffff", duration: 0.3 });
      gsap.to(glow, { scale: 1, opacity: 0.3, duration: 0.4 });
    };

    // Magnetic button hover — cursor pulses with spring
    const magneticGrow = () => {
      gsap.to(ring, { scale: 2, opacity: 0.5, borderColor: "#a78bfa", duration: 0.3, ease: "power2.out" });
      gsap.to(dot, { scale: 0.3, backgroundColor: "#a78bfa", duration: 0.2 });
      gsap.to(glow, { scale: 2.5, opacity: 0.9, duration: 0.3 });
      gsap.to(ring, { scale: 2.3, duration: 0.6, repeat: -1, yoyo: true, ease: "sine.inOut" });
    };
    const magneticShrink = () => {
      gsap.killTweensOf(ring);
      gsap.to(ring, { scale: 1, opacity: 1, borderColor: "rgba(255,255,255,0.6)", duration: 0.4, ease: "elastic.out(1, 0.5)" });
      gsap.to(dot, { scale: 1, backgroundColor: "#ffffff", duration: 0.3 });
      gsap.to(glow, { scale: 1, opacity: 0.3, duration: 0.4 });
    };

    // 3D Canvas hover — cursor becomes particle attractor
    const canvasGrow = () => {
      gsap.to(ring, { scale: 1.5, opacity: 0.6, borderColor: "#c4b5fd", borderStyle: "dashed", duration: 0.4, ease: "power2.out" });
      gsap.to(dot, { scale: 1.5, backgroundColor: "#c4b5fd", duration: 0.3 });
      gsap.to(glow, { scale: 5, opacity: 0.6, duration: 0.5 });
    };
    const canvasShrink = () => {
      gsap.to(ring, { scale: 1, opacity: 1, borderColor: "rgba(255,255,255,0.6)", borderStyle: "solid", duration: 0.4, ease: "elastic.out(1, 0.5)" });
      gsap.to(dot, { scale: 1, backgroundColor: "#ffffff", duration: 0.3 });
      gsap.to(glow, { scale: 1, opacity: 0.3, duration: 0.4 });
    };

    // Glitch text hover — cursor glitches
    const glitchGrow = () => {
      gsap.to(ring, { scale: 2, opacity: 0.4, borderColor: "#ff0040", skewX: 10, duration: 0.2, ease: "power4.out" });
      gsap.to(dot, { scale: 0.5, backgroundColor: "#00ffff", duration: 0.1 });
      gsap.to(glow, { scale: 3, opacity: 1, duration: 0.2 });
      // Rapid flicker
      gsap.to(ring, { skewX: -5, duration: 0.1, repeat: 3, yoyo: true, delay: 0.2 });
    };
    const glitchShrink = () => {
      gsap.killTweensOf(ring);
      gsap.to(ring, { scale: 1, opacity: 1, borderColor: "rgba(255,255,255,0.6)", skewX: 0, duration: 0.4, ease: "elastic.out(1, 0.5)" });
      gsap.to(dot, { scale: 1, backgroundColor: "#ffffff", duration: 0.3 });
      gsap.to(glow, { scale: 1, opacity: 0.3, duration: 0.4 });
    };

    // Magnetic text hover — cursor becomes gravitational field
    const magneticTextGrow = () => {
      gsap.to(ring, { scale: 4, opacity: 0.15, borderColor: "#a78bfa", borderWidth: "1px", duration: 0.6, ease: "power3.out" });
      gsap.to(dot, { scale: 0.3, backgroundColor: "#a78bfa", duration: 0.3 });
      gsap.to(glow, { scale: 6, opacity: 0.4, duration: 0.6 });
    };
    const magneticTextShrink = () => {
      gsap.to(ring, { scale: 1, opacity: 1, borderColor: "rgba(255,255,255,0.6)", borderWidth: "1px", duration: 0.5, ease: "elastic.out(1, 0.4)" });
      gsap.to(dot, { scale: 1, backgroundColor: "#ffffff", duration: 0.3 });
      gsap.to(glow, { scale: 1, opacity: 0.3, duration: 0.4 });
    };

    // Input hover — cursor becomes I-beam
    const inputGrow = () => {
      gsap.to(ring, { scaleX: 0.15, scaleY: 2, opacity: 0.6, borderColor: "#8b5cf6", borderRadius: "2px", duration: 0.3, ease: "power3.out" });
      gsap.to(dot, { scaleX: 0.3, scaleY: 2.5, backgroundColor: "#8b5cf6", borderRadius: "1px", duration: 0.3 });
      gsap.to(glow, { scale: 1.5, opacity: 0.5, duration: 0.3 });
    };
    const inputShrink = () => {
      gsap.to(ring, { scaleX: 1, scaleY: 1, opacity: 1, borderColor: "rgba(255,255,255,0.6)", borderRadius: "50%", duration: 0.4, ease: "elastic.out(1, 0.5)" });
      gsap.to(dot, { scaleX: 1, scaleY: 1, backgroundColor: "#ffffff", borderRadius: "50%", duration: 0.3 });
      gsap.to(glow, { scale: 1, opacity: 0.3, duration: 0.4 });
    };

    // Nav link hover — cursor stretches into arrow indicator
    const navGrow = () => {
      gsap.to(ring, { scaleX: 2.5, scaleY: 0.6, opacity: 0.4, borderColor: "#8b5cf6", duration: 0.3, ease: "power3.out" });
      gsap.to(dot, { scaleX: 3, scaleY: 0.5, backgroundColor: "#8b5cf6", duration: 0.2 });
      gsap.to(glow, { scaleX: 3, scaleY: 1, opacity: 0.6, duration: 0.3 });
    };
    const navShrink = () => {
      gsap.to(ring, { scaleX: 1, scaleY: 1, opacity: 1, borderColor: "rgba(255,255,255,0.6)", duration: 0.4, ease: "elastic.out(1, 0.5)" });
      gsap.to(dot, { scaleX: 1, scaleY: 1, backgroundColor: "#ffffff", duration: 0.3 });
      gsap.to(glow, { scaleX: 1, scaleY: 1, opacity: 0.3, duration: 0.4 });
    };

    window.addEventListener("mousemove", move);

    const addListeners = () => {
      // Cards get crosshair morph
      document.querySelectorAll(".hover-card, .case-card").forEach((el) => {
        el.addEventListener("mouseenter", cardGrow);
        el.addEventListener("mouseleave", cardShrink);
      });
      // Magnetic buttons get pulse
      document.querySelectorAll("[data-magnetic]").forEach((el) => {
        el.addEventListener("mouseenter", magneticGrow);
        el.addEventListener("mouseleave", magneticShrink);
      });
      // 3D canvas areas get particle attractor mode
      document.querySelectorAll("[data-cursor-canvas]").forEach((el) => {
        el.addEventListener("mouseenter", canvasGrow);
        el.addEventListener("mouseleave", canvasShrink);
      });
      // Glitch text elements
      document.querySelectorAll("[data-glitch-hover]").forEach((el) => {
        el.addEventListener("mouseenter", glitchGrow);
        el.addEventListener("mouseleave", glitchShrink);
      });
      // Magnetic text headings get gravitational field
      document.querySelectorAll("[data-magnetic-text]").forEach((el) => {
        el.addEventListener("mouseenter", magneticTextGrow);
        el.addEventListener("mouseleave", magneticTextShrink);
      });
      // Input fields get I-beam cursor
      document.querySelectorAll("input, textarea").forEach((el) => {
        el.addEventListener("mouseenter", inputGrow);
        el.addEventListener("mouseleave", inputShrink);
      });
      // Nav dots/links get stretched arrow
      document.querySelectorAll("nav button, [data-nav-link]").forEach((el) => {
        el.addEventListener("mouseenter", navGrow);
        el.addEventListener("mouseleave", navShrink);
      });
      // Default hover for links and other interactive elements
      document.querySelectorAll("a, button:not([data-magnetic]):not(nav button), [data-hover]:not(.hover-card):not(.case-card)").forEach((el) => {
        el.addEventListener("mouseenter", grow);
        el.addEventListener("mouseleave", shrink);
      });
    };
    addListeners();
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", move);
      observer.disconnect();
    };
  }, [isLowEnd]);

  const isMobile = typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;
  if (isMobile) return null;

  return (
    <>
      {/* Particle pool for velocity-based color streaks */}
      {!isLowEnd && Array.from({ length: 30 }).map((_, i) => (
        <div
          key={`particle-${i}`}
          ref={(el) => { if (el) particlePoolRef.current[i] = el; }}
          className="fixed top-0 left-0 pointer-events-none z-[9994] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0"
          style={{ width: "4px", height: "4px" }}
        />
      ))}
      {/* Trail particles (disabled in low-end mode) */}
      {!isLowEnd && [0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <div
          key={`trail-${i}`}
          ref={(el) => { if (el) trailRefs.current[i] = el; }}
          className="fixed top-0 left-0 pointer-events-none z-[9995] -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: `${4 - i * 0.4}px`,
            height: `${4 - i * 0.4}px`,
            backgroundColor: `rgba(139, 92, 246, ${0.7 - i * 0.08})`,
            boxShadow: `0 0 ${4 - i * 0.3}px rgba(139, 92, 246, ${0.4 - i * 0.05})`,
          }}
        />
      ))}
      {/* Glow */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-20 h-20 pointer-events-none z-[9996] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)",
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 border border-white/60 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{ transition: "border-color 0.3s" }}
      />
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      />
    </>
  );
}

// ============================================================
// THREE.JS — GLSL Shader Background (Animated Gradient)
// ============================================================
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  uniform float uTime;
  uniform vec2 uResolution;
  varying vec2 vUv;

  // Simplex-like noise
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i  = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m; m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 uv = vUv;
    float t = uTime * 0.15;

    // Multiple noise layers for depth
    float n1 = snoise(uv * 2.0 + t * 0.5) * 0.5 + 0.5;
    float n2 = snoise(uv * 4.0 - t * 0.3) * 0.5 + 0.5;
    float n3 = snoise(uv * 1.0 + t * 0.2) * 0.5 + 0.5;

    // Deep space colors
    vec3 color1 = vec3(0.02, 0.01, 0.05);  // Near black
    vec3 color2 = vec3(0.08, 0.02, 0.15);  // Deep purple
    vec3 color3 = vec3(0.03, 0.0, 0.08);   // Dark violet
    vec3 color4 = vec3(0.0, 0.02, 0.06);   // Dark blue

    vec3 color = mix(color1, color2, n1);
    color = mix(color, color3, n2 * 0.5);
    color = mix(color, color4, n3 * 0.3);

    // Subtle vignette
    float vignette = 1.0 - length(uv - 0.5) * 0.8;
    color *= vignette;

    gl_FragColor = vec4(color, 1.0);
  }
`;

function ShaderBackground() {
  const meshRef = useRef<THREE.Mesh>(null);
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    }),
    []
  );

  useFrame((state) => {
    if (meshRef.current) {
      const material = meshRef.current.material as THREE.ShaderMaterial;
      material.uniforms.uTime.value = state.clock.getElapsedTime();
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -1]}>
      <planeGeometry args={[20, 20]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
}

function ShaderCanvas() {
  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: false, alpha: false }}
      >
        <ShaderBackground />
      </Canvas>
    </div>
  );
}

// ============================================================
// THREE.JS — Particle System (Space Travel on Scroll)
// ============================================================
function StarField() {
  const pointsRef = useRef<THREE.Points>(null);
  const scrollProgress = useRef(0);
  const scrollVelocity = useRef(0);
  const lastScrollY = useRef(0);
  const mouseNDC = useRef({ x: 0, y: 0 });
  const { isHyperGalactic } = usePerformanceMode();

  const particleCount = isHyperGalactic ? 8000 : 2000;
  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 20;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 40 - 5;
    }
    return pos;
  }, []);

  // Store original positions for gravitational spring-back
  const originalPositions = useMemo(() => {
    return new Float32Array(positions);
  }, [positions]);

  const velocities = useMemo(() => {
    return new Float32Array(particleCount * 3); // per-particle velocity for gravitational physics
  }, []);

  const sizes = useMemo(() => {
    const s = new Float32Array(particleCount);
    for (let i = 0; i < particleCount; i++) {
      s[i] = Math.random() * 2 + 0.5;
    }
    return s;
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      scrollProgress.current = window.scrollY / maxScroll;
      scrollVelocity.current = Math.abs(window.scrollY - lastScrollY.current);
      lastScrollY.current = window.scrollY;
    };
    const handleMouse = (e: MouseEvent) => {
      // Convert to NDC (-1 to 1)
      mouseNDC.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseNDC.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mousemove", handleMouse, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  useFrame(() => {
    if (!pointsRef.current) return;
    const geo = pointsRef.current.geometry;
    const posAttr = geo.attributes.position as THREE.BufferAttribute;
    const speed = (scrollProgress.current * 0.5 + 0.01) * (isHyperGalactic ? 3 : 1);

    // Gravitational attraction strength
    const gravityStrength = isHyperGalactic ? 0.008 : 0.004;
    const repulsionFromScroll = Math.min(scrollVelocity.current * 0.0003, 0.02);
    // Mouse position in world space (approximate)
    const mx = mouseNDC.current.x * 10;
    const my = mouseNDC.current.y * 10;

    for (let i = 0; i < particleCount; i++) {
      const ix = i * 3;
      const iy = i * 3 + 1;
      const iz = i * 3 + 2;

      let x = posAttr.getX(i);
      let y = posAttr.getY(i);
      let z = posAttr.getZ(i);

      // Distance to cursor in XY plane
      const dx = mx - x;
      const dy = my - y;
      const dist = Math.sqrt(dx * dx + dy * dy) + 0.1;

      // Gravitational pull toward cursor (inverse square, capped)
      const force = Math.min(gravityStrength / (dist * dist), 0.05);
      velocities[ix] += dx / dist * force;
      velocities[iy] += dy / dist * force;

      // Scroll velocity creates radial repulsion from center
      if (repulsionFromScroll > 0) {
        const ox = x - 0;
        const oy = y - 0;
        const odist = Math.sqrt(ox * ox + oy * oy) + 0.1;
        velocities[ix] += (ox / odist) * repulsionFromScroll;
        velocities[iy] += (oy / odist) * repulsionFromScroll;
      }

      // Spring back to original position (soft)
      const origX = originalPositions[ix];
      const origY = originalPositions[iy];
      velocities[ix] += (origX - x) * 0.001;
      velocities[iy] += (origY - y) * 0.001;

      // Damping
      velocities[ix] *= 0.96;
      velocities[iy] *= 0.96;

      // Apply velocity
      x += velocities[ix];
      y += velocities[iy];

      // Z-axis forward movement (warp speed)
      z += speed;
      if (z > 15) z = -25;

      posAttr.setXYZ(i, x, y, z);
    }
    posAttr.needsUpdate = true;

    // Decay scroll velocity
    scrollVelocity.current *= 0.9;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={particleCount}
        />
        <bufferAttribute
          attach="attributes-size"
          args={[sizes, 1]}
          count={particleCount}
        />
      </bufferGeometry>
      <pointsMaterial
        color={isHyperGalactic ? "#00ffff" : "#ffffff"}
        size={isHyperGalactic ? 0.05 : 0.03}
        sizeAttenuation
        transparent
        opacity={isHyperGalactic ? 0.9 : 0.6}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function ParticleCanvas() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ antialias: false, alpha: true }}
      >
        <StarField />
      </Canvas>
    </div>
  );
}

// ============================================================
// CLIP-PATH PORTAL REVEAL — Smooth Section Transitions
// ============================================================
function SectionReveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    // Main clip-path reveal
    gsap.fromTo(
      sectionRef.current,
      {
        clipPath: "circle(0% at 50% 50%)",
        opacity: 0.8,
      },
      {
        clipPath: "circle(80% at 50% 50%)",
        opacity: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          end: "top 15%",
          scrub: 0.8,
        },
      }
    );

    // Portal glow ring effect
    if (glowRef.current) {
      gsap.fromTo(
        glowRef.current,
        { scale: 0, opacity: 0.8 },
        {
          scale: 3,
          opacity: 0,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          },
        }
      );
    }
  }, { scope: sectionRef });

  return (
    <div ref={sectionRef} className={`relative ${className}`} style={{ clipPath: "circle(0% at 50% 50%)" }}>
      {/* Portal glow ring */}
      <div
        ref={glowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full pointer-events-none z-50"
        style={{
          background: "radial-gradient(circle, rgba(139,92,246,0.4) 0%, rgba(139,92,246,0.1) 40%, transparent 70%)",
          boxShadow: "0 0 60px rgba(139,92,246,0.3), inset 0 0 30px rgba(139,92,246,0.2)",
        }}
      />
      {children}
    </div>
  );
}

// ============================================================
// KONAMI CODE EASTER EGG — ↑↑↓↓←→←→BA
// ============================================================
const KONAMI_SEQUENCE = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

function KonamiCodeListener() {
  const { activateHyperGalactic, isHyperGalactic } = usePerformanceMode();
  const sequenceRef = useRef<string[]>([]);
  const flashRef = useRef<HTMLDivElement>(null);
  const [invertActive, setInvertActive] = useState(false);
  const glitchIntervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (isHyperGalactic) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      sequenceRef.current.push(e.key);
      if (sequenceRef.current.length > 10) {
        sequenceRef.current = sequenceRef.current.slice(-10);
      }

      const matches = sequenceRef.current.length === 10 &&
        sequenceRef.current.every((key, i) => key === KONAMI_SEQUENCE[i]);

      if (matches) {
        activateHyperGalactic();
        setInvertActive(true);

        // Dramatic activation: rapid glitch flicker then settle into inverted
        let flickerCount = 0;
        glitchIntervalRef.current = setInterval(() => {
          document.documentElement.style.filter = flickerCount % 2 === 0 ? "invert(1) hue-rotate(180deg)" : "none";
          flickerCount++;
          if (flickerCount > 12) {
            if (glitchIntervalRef.current) clearInterval(glitchIntervalRef.current);
            document.documentElement.style.filter = "invert(1) hue-rotate(180deg)";
            document.documentElement.style.transition = "filter 0.5s ease";
          }
        }, 80);

        // Flash explosion
        if (flashRef.current) {
          gsap.fromTo(
            flashRef.current,
            { opacity: 1, scale: 0 },
            { opacity: 0, scale: 5, duration: 2, ease: "expo.out" }
          );
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (glitchIntervalRef.current) clearInterval(glitchIntervalRef.current);
    };
  }, [activateHyperGalactic, isHyperGalactic]);

  // Toggle invert on click of the indicator
  const toggleInvert = () => {
    if (invertActive) {
      document.documentElement.style.filter = "none";
      document.documentElement.style.transition = "filter 0.5s ease";
      setInvertActive(false);
    } else {
      document.documentElement.style.filter = "invert(1) hue-rotate(180deg)";
      document.documentElement.style.transition = "filter 0.5s ease";
      setInvertActive(true);
    }
  };

  return (
    <>
      {/* Hyper-galactic activation flash */}
      <div
        ref={flashRef}
        className="fixed inset-0 z-[99999] pointer-events-none flex items-center justify-center opacity-0"
      >
        <div
          className="w-40 h-40 rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,255,255,0.8) 0%, rgba(139,92,246,0.5) 40%, transparent 70%)",
            boxShadow: "0 0 120px rgba(0,255,255,0.6), 0 0 240px rgba(139,92,246,0.3)",
          }}
        />
      </div>
      {/* Hyper mode indicator with invert toggle */}
      {isHyperGalactic && (
        <div
          onClick={toggleInvert}
          className="fixed top-4 left-1/2 -translate-x-1/2 z-[9990] px-4 py-2 bg-black/60 border border-cyan-400/40 backdrop-blur-md cursor-pointer hover:bg-cyan-400/10 transition-colors duration-300 select-none"
        >
          <span className="text-cyan-400 text-xs uppercase tracking-[0.3em] font-bold animate-pulse">
            ⚡ HYPER-GALACTIC {invertActive ? "INVERTED" : "MODE"} ⚡
          </span>
          <div className="text-center text-[9px] text-cyan-400/50 mt-0.5 tracking-wider">CLICK TO TOGGLE INVERT</div>
        </div>
      )}
    </>
  );
}

// ============================================================
// MAGNETIC BUTTON (Enhanced with glow effect)
// ============================================================
function MagneticButton({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const { playHover, playClick } = useSoundEffects();

  const handleMove = (e: React.MouseEvent) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(btn, { x: x * 0.3, y: y * 0.3, duration: 0.3, ease: "power2.out" });

    if (glowRef.current) {
      gsap.to(glowRef.current, {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        duration: 0.3,
      });
    }
  };

  const handleLeave = () => {
    gsap.to(btnRef.current, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
  };

  return (
    <button
      ref={btnRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onMouseEnter={playHover}
      onClick={playClick}
      data-hover
      className={`relative inline-block overflow-hidden ${className}`}
    >
      <div
        ref={glowRef}
        className="absolute w-32 h-32 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.3) 0%, transparent 70%)" }}
      />
      {children}
    </button>
  );
}

// ============================================================
// MAGNETIC TEXT — Gravitational deformation following cursor
// ============================================================
function MagneticText({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { isLowEnd } = usePerformanceMode();

  useEffect(() => {
    if (isLowEnd || !containerRef.current) return;
    const el = containerRef.current;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      const distance = Math.sqrt(distX * distX + distY * distY);
      const maxDist = 400; // gravitational field radius

      if (distance < maxDist) {
        const strength = 1 - distance / maxDist;
        const moveX = distX * strength * 0.08;
        const moveY = distY * strength * 0.06;
        const rotateX = -distY * strength * 0.02;
        const rotateY = distX * strength * 0.02;
        const scale = 1 + strength * 0.02;

        gsap.to(el, {
          x: moveX,
          y: moveY,
          rotateX,
          rotateY,
          scale,
          duration: 0.4,
          ease: "power2.out",
        });
      }
    };

    const handleLeave = () => {
      gsap.to(el, {
        x: 0, y: 0, rotateX: 0, rotateY: 0, scale: 1,
        duration: 0.8,
        ease: "elastic.out(1, 0.4)",
      });
    };

    el.style.perspective = "1000px";
    el.style.transformStyle = "preserve-3d";
    el.style.willChange = "transform";

    window.addEventListener("mousemove", handleMove, { passive: true });
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [isLowEnd]);

  return (
    <div ref={containerRef} className={`inline-block ${className}`} data-magnetic-text>
      {children}
    </div>
  );
}

// ============================================================
// LIQUID DISPLACEMENT IMAGE REVEAL (Shader-like CSS effect)
// ============================================================
function LiquidRevealImage({ src, alt }: { src: string; alt: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const { isLowEnd } = usePerformanceMode();

  useGSAP(() => {
    if (!containerRef.current || !imgRef.current || isLowEnd) return;

    // Liquid displacement reveal: image starts distorted and reveals cleanly
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 75%",
        end: "top 25%",
        scrub: 1.5,
      },
    });

    // Image starts with heavy filter and scale
    tl.fromTo(
      imgRef.current,
      {
        filter: "blur(20px) saturate(0) brightness(0.3)",
        scale: 1.3,
        y: 60,
      },
      {
        filter: "blur(0px) saturate(1) brightness(1)",
        scale: 1,
        y: 0,
        ease: "power2.out",
      }
    );

    // Liquid wave overlay sweeps across
    if (overlayRef.current) {
      tl.fromTo(
        overlayRef.current,
        { x: "-100%", skewX: -10 },
        { x: "200%", skewX: 5, ease: "power2.inOut" },
        0
      );
    }
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="relative overflow-hidden aspect-video">
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        style={isLowEnd ? {} : { filter: "blur(20px) saturate(0) brightness(0.3)", transform: "scale(1.3) translateY(60px)" }}
      />
      {/* Liquid sweep overlay */}
      {!isLowEnd && (
        <div
          ref={overlayRef}
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(90deg, transparent 0%, rgba(139,92,246,0.3) 30%, rgba(139,92,246,0.5) 50%, rgba(139,92,246,0.3) 70%, transparent 100%)",
            transform: "translateX(-100%) skewX(-10deg)",
            mixBlendMode: "overlay",
          }}
        />
      )}
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
    </div>
  );
}

// ============================================================
// CASE STUDIES SECTION (Liquid displacement reveal)
// ============================================================
function CaseStudiesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { playHover, playClick } = useSoundEffects();

  const cases = [
    {
      title: "LUXE CHRONOS",
      category: "E-Commerce",
      desc: "3D product visualization with floating watch, glassmorphism UI, and cinematic lighting.",
      image: "/manus-storage/case-study-1_ed5bc524.png",
    },
    {
      title: "VOID STUDIO",
      category: "Creative Agency",
      desc: "Asymmetric grid with kinetic typography, particle effects, and abstract 3D geometry.",
      image: "/manus-storage/case-study-2_b2fbbb16.png",
    },
    {
      title: "NEBULA AUDIO",
      category: "Music Platform",
      desc: "Audio waveform visualizations, neon glow effects, and immersive dark UI design.",
      image: "/manus-storage/case-study-3_5f8c49e1.png",
    },
  ];

  useGSAP(() => {
    gsap.fromTo(
      ".case-card",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out",
        immediateRender: false,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
          toggleActions: "play none none none",
        },
      },
    );

    gsap.from(".cases-title", {
      y: 60,
      opacity: 0,
      duration: 1.2,
      ease: "expo.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none none",
      },
    });
  }, { scope: sectionRef });

  return (
    <SectionReveal>
      <section ref={sectionRef} id="case-studies" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="cases-title text-center mb-20">
            <span className="text-[#8b5cf6] text-sm uppercase tracking-[0.3em] mb-4 block">Selected Work</span>
            <MagneticText>
              <h2
                className="text-4xl md:text-7xl font-bold tracking-tighter text-white"
                style={{ fontFamily: "var(--font-display)" }}
              >
                CASE <span className="text-[#8b5cf6]">STUDIES</span>
              </h2>
            </MagneticText>
          </div>

          <div className="grid grid-cols-1 gap-16">
            {cases.map((project, i) => (
              <div
                key={i}
                className="case-card group relative overflow-hidden border border-white/[0.06] bg-white/[0.01] backdrop-blur-sm hover:border-[#8b5cf6]/30 transition-[border-color,background-color,box-shadow] duration-700"
                onMouseEnter={playHover}
                onClick={playClick}
                data-hover
              >
                {/* Liquid displacement image reveal */}
                <LiquidRevealImage src={project.image} alt={project.title} />

                {/* Content */}
                <div className="p-8 md:p-12">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="text-[#8b5cf6] text-xs uppercase tracking-[0.2em]">{project.category}</span>
                    <span className="w-8 h-px bg-white/20" />
                    <span className="text-white/30 text-xs">0{i + 1}</span>
                  </div>
                  <h3
                    className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tighter"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-white/50 text-lg max-w-2xl">{project.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}

// ============================================================
// GLITCH TEXT — Hover distortion effect for hero text
// ============================================================
function GlitchText({ children, className = "" }: { children: string; className?: string }) {
  const textRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const { isLowEnd } = usePerformanceMode();

  useEffect(() => {
    if (!isHovering || isLowEnd || !textRef.current) return;

    const el = textRef.current;
    // Create glitch layers
    const glitchInterval = setInterval(() => {
      const offsetX = (Math.random() - 0.5) * 8;
      const offsetY = (Math.random() - 0.5) * 4;
      const skew = (Math.random() - 0.5) * 3;

      el.style.textShadow = `
        ${offsetX}px ${offsetY}px 0 rgba(255, 0, 64, 0.7),
        ${-offsetX}px ${-offsetY}px 0 rgba(0, 255, 255, 0.7)
      `;
      el.style.transform = `skewX(${skew}deg) translateX(${offsetX * 0.3}px)`;
      el.style.clipPath = `inset(${Math.random() * 30}% 0 ${Math.random() * 30}% 0)`;

      // Reset briefly for flicker
      setTimeout(() => {
        el.style.textShadow = "none";
        el.style.transform = "skewX(0deg) translateX(0px)";
        el.style.clipPath = "inset(0 0 0 0)";
      }, 50 + Math.random() * 50);
    }, 100);

    return () => {
      clearInterval(glitchInterval);
      if (el) {
        el.style.textShadow = "none";
        el.style.transform = "skewX(0deg) translateX(0px)";
        el.style.clipPath = "inset(0 0 0 0)";
      }
    };
  }, [isHovering, isLowEnd]);

  return (
    <div
      ref={textRef}
      data-glitch-hover
      className={`relative inline-block transition-all duration-100 ${className}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      style={{ willChange: "transform, clip-path" }}
    >
      {children}
      {/* Static noise overlay on hover */}
      {isHovering && !isLowEnd && (
        <div
          className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-30"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
            animation: "none",
          }}
        />
      )}
    </div>
  );
}

// ============================================================
// HERO SECTION (with Glitch Text on hover)
// ============================================================
function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "expo.out", duration: 1.2 } });

    tl.from(".hero-line-1", { y: 120, opacity: 0 }, 0.3)
      .from(".hero-line-2", { y: 120, opacity: 0 }, 0.5)
      .from(".hero-subtitle", { y: 40, opacity: 0, duration: 1 }, 0.8)
      .from(".hero-scroll-indicator", { opacity: 0, y: -20 }, 1.2);
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.to(".hero-cinema", {
        yPercent: 18, scale: 1.08, ease: "none",
        scrollTrigger: { trigger: sectionRef.current, start: "top top", end: "bottom top", scrub: 1 },
      });
    }
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      <div className="hero-cinema absolute inset-0 pointer-events-none" aria-hidden="true">
        <picture>
          <source media="(max-width: 767px)" srcSet={mediaPath(theme === "light" ? "hero-light-mobile_65a949e3.jpg" : "hero-mobile-poster_061ff7a1.jpg")} />
          <img
            src={mediaPath(theme === "light" ? "hero-light-desktop_5b852539.jpg" : "hero-poster_c4087cb3.jpg")}
            alt=""
            fetchPriority="high"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
        </picture>
        <video
          aria-hidden="true"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={mediaPath("hero-poster_c4087cb3.jpg")}
          className="hidden md:dark:block absolute inset-0 w-full h-full object-cover opacity-65 motion-reduce:hidden"
        >
          <source src={mediaPath("seedance-web_15a96ec9.mp4")} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0015]/25 via-[#0a0015]/10 to-[#0a0015]/60 dark:block hidden" />
      </div>
      {/* Content */}
      <div className="hero-copy relative z-10 text-center px-4">
        <div className="overflow-hidden mb-2 px-3 -mx-3">
          <GlitchText
            className="hero-line-1 text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter text-white leading-[0.9]"
          >
            BEYOND THE
          </GlitchText>
        </div>
        <div className="overflow-hidden px-3 -mx-3">
          <GlitchText
            className="hero-line-2 text-5xl sm:text-7xl md:text-8xl lg:text-[9rem] font-bold tracking-tighter text-[#a78bfa] leading-[0.9]"
          >
            VISIBLE
          </GlitchText>
        </div>
        <p className="hero-subtitle text-lg md:text-xl text-white/75 mt-8 max-w-xl mx-auto tracking-wide">
          A showcase of award-winning web design techniques. GSAP animations, 3D WebGL, scroll-driven storytelling, and immersive interactions.
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-white/65 text-xs uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  );
}

// ============================================================
// TEXT REVEAL SECTION (Scroll-triggered)
// ============================================================
function TextRevealSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLDivElement>(null);

  // Storytelling text - each sentence is a paragraph
  const story = [
    "We don't just build websites. We craft immersive digital experiences that transcend the ordinary.",
    "Every pixel is intentional. Every animation tells a story. Every interaction creates a memory.",
    "From the first scroll to the final click, we orchestrate a symphony of motion, color, and depth.",
    "This is not web design. This is digital architecture for the future.",
  ];

  useGSAP(() => {
    if (!sectionRef.current || !paragraphRef.current) return;
    const paragraphs = Array.from(paragraphRef.current.querySelectorAll("p"));
    if (!paragraphs.length) return;

    // The opening sentence is readable immediately. The rest follow the
    // visitor's scroll in one continuous timeline, then remain fully legible.
    const laterWords = paragraphs.slice(1).flatMap((p) =>
      Array.from(p.querySelectorAll<HTMLElement>(".story-word"))
    );
    gsap.set(laterWords, { opacity: 0.58, y: 5 });

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      gsap.set(laterWords, { opacity: 1, y: 0 });
      return;
    }

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.8,
        invalidateOnRefresh: true,
      },
    });

    paragraphs.slice(1).forEach((paragraph, index) => {
      timeline.to(paragraph.querySelectorAll(".story-word"), {
        opacity: 1,
        y: 0,
        duration: 0.32,
        stagger: 0.055,
        ease: "power1.out",
      }, index * 1.25);
    });

    // Keep the finished story in view before the following section begins.
    timeline.to({ progress: 0 }, { progress: 1, duration: 1 });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      id="text-reveal"
      className="relative py-16 px-4"
      style={{ minHeight: "300vh" }}
    >
      {/* Sticky container that stays in viewport while scrolling reveals words */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center overflow-hidden">
        <video
          aria-hidden="true"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          className="story-cinema hidden md:dark:block absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none motion-reduce:hidden"
        >
          <source src={mediaPath("higgsfield-web_9f6a141d.mp4")} type="video/mp4" />
        </video>
        <div aria-hidden="true" className="absolute inset-0 pointer-events-none bg-gradient-to-r from-[#0a0015]/50 via-[#0a0015]/25 to-[#0a0015]/50 dark:block hidden" />
        <span className="relative z-10 text-[#a78bfa] text-xs uppercase tracking-[0.4em] mb-8 block">Our Philosophy</span>
        <div ref={paragraphRef} className="relative z-10 max-w-4xl text-center px-4">
          {story.map((sentence, pIdx) => (
            <p key={pIdx} className="mb-6 leading-relaxed">
              {sentence.split(" ").map((word, wIdx) => (
                <span
                  key={`${pIdx}-${wIdx}`}
                  className="story-word inline-block mr-[0.35em] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium text-white tracking-tight transition-none"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {word}
                </span>
              ))}
            </p>
          ))}
        </div>
        {/* Scroll indicator */}
        <div className="absolute z-10 bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-[10px] uppercase tracking-[0.3em] text-white/50">Scroll to read</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}

// ============================================================
// PARALLAX SECTION (with clip-path reveal)
// ============================================================
function ParallaxSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(".parallax-bg", {
      yPercent: -30,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
    });

    gsap.from(".parallax-title", {
      x: -100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".parallax-text", {
      x: 100,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
        toggleActions: "play none none none",
      },
    });
  }, { scope: sectionRef });

  return (
    <SectionReveal>
      <section ref={sectionRef} id="parallax" className="relative min-h-screen overflow-hidden flex items-center">
        <div
          className="parallax-bg absolute inset-0 scale-125 opacity-30"
          style={{
            backgroundImage: `url(${mediaPath("galactic-about-bg_a3e8817b.png")})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <MagneticText>
              <h2
                className="parallax-title text-4xl md:text-6xl font-bold tracking-tighter text-white mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                SCROLL-DRIVEN<br />
                <span className="text-[#8b5cf6]">PARALLAX</span>
              </h2>
            </MagneticText>
          </div>
          <div>
            <p className="parallax-text text-lg text-white/60 leading-relaxed">
              Elements move at different speeds as you scroll, creating a sense of depth and spatial awareness. The background drifts slowly while foreground content stays anchored — a technique used by every Awwwards winner.
            </p>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}

// ============================================================
// HORIZONTAL SCROLL SECTION
// ============================================================
function HorizontalScrollSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const panels = gsap.utils.toArray<HTMLElement>(".h-panel");
    if (!containerRef.current || panels.length === 0) return;

    gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        pin: true,
        scrub: 1,
        end: () => "+=" + (containerRef.current?.offsetWidth || 0),
        anticipatePin: 1,
      },
    });
  }, { scope: sectionRef });

  const techniques = [
    { title: "GSAP", subtitle: "ScrollTrigger", desc: "Pin, scrub, snap, and choreograph any element to the scroll position." },
    { title: "THREE.JS", subtitle: "React Three Fiber", desc: "3D scenes, particle systems, and shader backgrounds rendered in WebGL." },
    { title: "LENIS", subtitle: "Smooth Scroll", desc: "Buttery 120fps scrolling with momentum and inertia physics." },
    { title: "SHADERS", subtitle: "GLSL / TSL", desc: "Custom fragment shaders for animated gradients, distortion, and noise." },
  ];

  return (
    <section ref={sectionRef} id="horizontal" className="relative overflow-hidden">
      <div ref={containerRef} className="flex flex-nowrap w-fit">
        {techniques.map((tech, i) => (
          <div
            key={i}
            className="h-panel w-screen h-screen flex-shrink-0 flex items-center justify-center px-8"
          >
            <div className="max-w-lg text-center">
              <span className="text-[#8b5cf6] text-sm uppercase tracking-[0.3em] mb-4 block">
                {tech.subtitle}
              </span>
              <h3
                className="text-5xl md:text-7xl font-bold tracking-tighter text-white mb-6"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {tech.title}
              </h3>
              <p className="text-lg text-white/50">{tech.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ============================================================
// PINNED SECTION (Step-by-step reveal)
// ============================================================
function PinnedSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=250%",
        pin: true,
        scrub: 1,
      },
    });

    tl.from(".step-1", { opacity: 0, y: 60 })
      .to(".step-1", { opacity: 0, y: -60 }, "+=0.3")
      .from(".step-2", { opacity: 0, y: 60 })
      .to(".step-2", { opacity: 0, y: -60 }, "+=0.3")
      .from(".step-3", { opacity: 0, y: 60 });
  }, { scope: sectionRef });

  return (
    <SectionReveal>
      <section ref={sectionRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="step-1 absolute text-center px-4">
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
              01 — <span className="text-[#8b5cf6]">DESIGN</span>
            </h3>
            <p className="text-white/50 text-lg max-w-md mx-auto">Choose your visual system. Colors, typography, and layout paradigm.</p>
          </div>
          <div className="step-2 absolute text-center px-4 opacity-0">
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
              02 — <span className="text-[#8b5cf6]">ANIMATE</span>
            </h3>
            <p className="text-white/50 text-lg max-w-md mx-auto">Layer GSAP timelines, ScrollTrigger, and 3D effects for maximum impact.</p>
          </div>
          <div className="step-3 absolute text-center px-4 opacity-0">
            <h3 className="text-3xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
              03 — <span className="text-[#8b5cf6]">DEPLOY</span>
            </h3>
            <p className="text-white/50 text-lg max-w-md mx-auto">Ship to the world. Manus WebDev, Lovable.dev, or Wix — your choice.</p>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}

// ============================================================
// CARDS SECTION (Hover effects with clip-path reveal)
// ============================================================
function CardsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    ScrollTrigger.batch(".hover-card", {
      onEnter: (elements) => {
        gsap.from(elements, {
          y: 80,
          opacity: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: "power3.out",
        });
      },
      start: "top 85%",
    });

    const motion = gsap.matchMedia();
    motion.add("(prefers-reduced-motion: no-preference)", () => {
      sectionRef.current?.querySelectorAll<HTMLElement>(".media-workflow-card").forEach((card) => {
        const layers = [
          { element: card.querySelector<HTMLElement>(".media-workflow-depth--back"), from: -18, to: 18 },
          { element: card.querySelector<HTMLElement>(".media-workflow-depth--front"), from: 8, to: -8 },
        ];
        layers.forEach(({ element, from, to }) => {
          if (!element) return;
          gsap.fromTo(element, { y: from }, {
            y: to,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.45,
            },
          });
        });
      });
    });
  }, { scope: sectionRef });

  const cards = [
    { icon: "✦", title: "Futuristic Cursor", desc: "Dot + ring + glow trail with mix-blend-difference and state-aware scaling." },
    { icon: "◈", title: "Magnetic Buttons", desc: "CTAs that pull toward the cursor with elastic spring-back and internal glow." },
    { icon: "◉", title: "3D WebGL Scene", desc: "Interactive icosahedron with distortion material that follows your cursor." },
    { icon: "◬", title: "Particle System", desc: "2000 stars streaming toward you as you scroll — simulating space travel." },
    { icon: "◇", title: "GLSL Shader BG", desc: "Animated simplex noise gradient shader replacing static backgrounds." },
    { icon: "⬡", title: "Portal Transitions", desc: "Clip-path circle reveal that opens sections like cosmic portals on scroll." },
    { icon: "♫", title: "Ambient Audio", desc: "AI-generated deep space ambient loop with smooth fade-in/out toggle." },
    { icon: "⟐", title: "Horizontal Scroll", desc: "Panels slide horizontally while the user scrolls vertically." },
    { icon: "⊛", title: "Pinned Steps", desc: "Content stays fixed while internal elements animate through numbered steps." },
  ];

  return (
    <SectionReveal>
      <section ref={sectionRef} id="cards" className="relative py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <MagneticText className="text-center mb-20">
            <h2
              className="text-4xl md:text-6xl font-bold tracking-tighter text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              TECHNIQUES <span className="text-[#8b5cf6]">DEMONSTRATED</span>
            </h2>
          </MagneticText>

          <div className="media-workflow mb-16" aria-label="Cinematic production workflow">
            <p className="text-center text-[10px] uppercase tracking-[0.3em] text-[#a78bfa] mb-6">Behind the experience</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {PRODUCTION_STAGES.map((tool) => (
                <article key={tool.stage} data-media-stage={tool.stage} className="media-workflow-card relative overflow-hidden rounded-xl px-6 py-5">
                  <span aria-hidden="true" className="media-workflow-depth media-workflow-depth--back" />
                  <span aria-hidden="true" className="media-workflow-depth media-workflow-depth--front" />
                  <span className="relative z-10 block text-[10px] uppercase tracking-[0.22em] opacity-65">Creative process</span>
                  <h3 className="relative z-10 mt-2 text-lg font-semibold" style={{ fontFamily: "var(--font-display)" }}>{tool.name}</h3>
                  <p className="relative z-10 mt-1 text-sm opacity-75">{tool.role}</p>
                  <span aria-hidden="true" className="media-workflow-hint relative z-10 mt-4 block text-xs">Explore the process</span>
                  <ProductionStageDetails tool={tool} />
                </article>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, i) => (
              <div
                key={i}
                data-hover
                className="hover-card group p-8 border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm hover:border-[#8b5cf6]/30 hover:bg-[#8b5cf6]/[0.03] transition-all duration-500 relative overflow-hidden"
              >
                {/* Card hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: "radial-gradient(circle at 50% 50%, rgba(139,92,246,0.05) 0%, transparent 70%)" }}
                />
                <span className="text-3xl text-[#8b5cf6] mb-4 block relative z-10">{card.icon}</span>
                <h4 className="text-xl font-bold text-white mb-3 relative z-10" style={{ fontFamily: "var(--font-display)" }}>
                  {card.title}
                </h4>
                <p className="text-white/40 text-sm leading-relaxed relative z-10">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}

// ============================================================
// CONTACT PARTICLES — Interactive 3D particles that react to cursor
// ============================================================
function ContactParticles() {
  const pointsRef = useRef<THREE.Points>(null);
  const { pointer } = useThree();
  const particleCount = 500;

  const positions = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 6;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return pos;
  }, []);

  const originalPositions = useMemo(() => new Float32Array(positions), [positions]);

  useFrame((state) => {
    if (!pointsRef.current) return;
    const t = state.clock.getElapsedTime();
    const posAttr = pointsRef.current.geometry.attributes.position as THREE.BufferAttribute;

    for (let i = 0; i < particleCount; i++) {
      const ox = originalPositions[i * 3];
      const oy = originalPositions[i * 3 + 1];
      const oz = originalPositions[i * 3 + 2];

      // Gentle floating motion
      const floatX = Math.sin(t * 0.3 + i * 0.01) * 0.1;
      const floatY = Math.cos(t * 0.2 + i * 0.02) * 0.1;

      // Cursor repulsion
      const dx = ox - pointer.x * 5;
      const dy = oy - pointer.y * 3;
      const dist = Math.sqrt(dx * dx + dy * dy);
      const force = Math.max(0, 1.5 - dist) * 0.5;
      const pushX = dist > 0 ? (dx / dist) * force : 0;
      const pushY = dist > 0 ? (dy / dist) * force : 0;

      posAttr.setXYZ(
        i,
        ox + floatX + pushX,
        oy + floatY + pushY,
        oz + Math.sin(t * 0.5 + i * 0.005) * 0.05
      );
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} count={particleCount} />
      </bufferGeometry>
      <pointsMaterial
        color="#8b5cf6"
        size={0.04}
        sizeAttenuation
        transparent
        opacity={0.5}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function ContactParticleCanvas() {
  const isMobile = typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;
  if (isMobile) return null;

  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 5], fov: 50 }}
        gl={{ antialias: false, alpha: true }}
        style={{ pointerEvents: "auto" }}
      >
        <ContactParticles />
      </Canvas>
    </div>
  );
}

// ============================================================
// CONTACT SECTION (Animated form with typewriter + glow fields + 3D particles)
// ============================================================
function ContactSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [typedText, setTypedText] = useState("");
  const [formFocused, setFormFocused] = useState<string | null>(null);
  const { playHover, playClick } = useSoundEffects();
  const fullText = "LET'S BUILD SOMETHING EXTRAORDINARY";

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i <= fullText.length) {
        setTypedText(fullText.slice(0, i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 60);
    return () => clearInterval(interval);
  }, []);

  useGSAP(() => {
    gsap.from(".contact-form", {
      y: 80,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
        toggleActions: "play none none none",
      },
    });

    gsap.from(".contact-label", {
      x: -30,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 50%",
        toggleActions: "play none none none",
      },
    });
  }, { scope: sectionRef });

  return (
    <SectionReveal>
      <section ref={sectionRef} id="contact" className="relative py-32 px-6 overflow-hidden">
        {/* Interactive 3D particles background */}
        <ContactParticleCanvas />
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Typewriter heading */}
          <div className="text-center mb-16">
            <span className="text-[#8b5cf6] text-sm uppercase tracking-[0.3em] mb-4 block">Get In Touch</span>
            <h2
              className="text-3xl md:text-5xl font-bold text-white tracking-tighter min-h-[1.2em]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {typedText}
              <span className="inline-block w-[3px] h-[1em] bg-[#8b5cf6] ml-1 animate-pulse" />
            </h2>
          </div>

          {/* Animated form */}
          <div className="contact-form max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Name field */}
              <div className="contact-label relative group">
                <label className="text-white/40 text-xs uppercase tracking-[0.2em] mb-2 block">Name</label>
                <div className={`relative overflow-hidden transition-all duration-500 ${
                  formFocused === "name" ? "shadow-[0_0_20px_rgba(139,92,246,0.15)]" : ""
                }`}>
                  <input
                    type="text"
                    placeholder="Your name"
                    onFocus={() => { setFormFocused("name"); playHover(); }}
                    onBlur={() => setFormFocused(null)}
                    className="w-full bg-white/[0.03] border border-white/[0.08] px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#8b5cf6]/50 transition-all duration-500"
                  />
                  {/* Glow line at bottom */}
                  <div className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#8b5cf6] to-transparent transition-all duration-700 ${
                    formFocused === "name" ? "w-full opacity-100" : "w-0 opacity-0"
                  }`} />
                </div>
              </div>

              {/* Email field */}
              <div className="contact-label relative group">
                <label className="text-white/40 text-xs uppercase tracking-[0.2em] mb-2 block">Email</label>
                <div className={`relative overflow-hidden transition-all duration-500 ${
                  formFocused === "email" ? "shadow-[0_0_20px_rgba(139,92,246,0.15)]" : ""
                }`}>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    onFocus={() => { setFormFocused("email"); playHover(); }}
                    onBlur={() => setFormFocused(null)}
                    className="w-full bg-white/[0.03] border border-white/[0.08] px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#8b5cf6]/50 transition-all duration-500"
                  />
                  <div className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#8b5cf6] to-transparent transition-all duration-700 ${
                    formFocused === "email" ? "w-full opacity-100" : "w-0 opacity-0"
                  }`} />
                </div>
              </div>
            </div>

            {/* Message field */}
            <div className="contact-label relative group mb-8">
              <label className="text-white/40 text-xs uppercase tracking-[0.2em] mb-2 block">Message</label>
              <div className={`relative overflow-hidden transition-all duration-500 ${
                formFocused === "message" ? "shadow-[0_0_20px_rgba(139,92,246,0.15)]" : ""
              }`}>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project..."
                  onFocus={() => { setFormFocused("message"); playHover(); }}
                  onBlur={() => setFormFocused(null)}
                  className="w-full bg-white/[0.03] border border-white/[0.08] px-5 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-[#8b5cf6]/50 transition-all duration-500 resize-none"
                />
                <div className={`absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-[#8b5cf6] to-transparent transition-all duration-700 ${
                  formFocused === "message" ? "w-full opacity-100" : "w-0 opacity-0"
                }`} />
              </div>
            </div>

            {/* Submit button */}
            <div className="text-center">
              <MagneticButton className="group">
                <span
                  data-magnetic
                  onClick={playClick}
                  className="inline-flex items-center gap-3 px-10 py-5 border border-[#8b5cf6]/40 text-white text-sm uppercase tracking-[0.2em] hover:bg-[#8b5cf6]/10 hover:border-[#8b5cf6] transition-all duration-500 relative overflow-hidden"
                >
                  {/* Sweep effect */}
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#8b5cf6]/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  <span className="relative z-10">TRANSMIT MESSAGE</span>
                  <span className="relative z-10 text-[#8b5cf6]">→</span>
                </span>
              </MagneticButton>
            </div>
          </div>
        </div>
      </section>
    </SectionReveal>
  );
}

// ============================================================
// FOOTER — Global starfield remains visible behind this content
// ============================================================
function Footer() {
  const footerRef = useRef<HTMLDivElement>(null);
  const { isLowEnd, isHyperGalactic } = usePerformanceMode();
  const { theme } = useTheme();

  useGSAP(() => {
    gsap.from(".footer-content", {
      y: 60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top 90%",
        toggleActions: "play none none none",
      },
    });

  }, { scope: footerRef });

  return (
    <footer ref={footerRef} className="relative py-32 px-6 border-t border-white/[0.06] overflow-hidden">
      {/* Radial gradient overlay for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: theme === "light"
            ? "radial-gradient(ellipse at center, transparent 30%, rgba(235,225,247,0.65) 90%)"
            : "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.8) 70%)",
        }}
      />

      {/* Speed lines (CSS fallback for low-end) */}
      {isLowEnd && (
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-gradient-to-b from-transparent via-violet-500/20 to-transparent"
              style={{
                width: "1px",
                height: `${40 + Math.random() * 60}%`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 50}%`,
                animation: `warpLine ${0.5 + Math.random() * 1}s linear infinite`,
                animationDelay: `${Math.random() * 2}s`,
                opacity: 0.3,
              }}
            />
          ))}
        </div>
      )}

      <div className="footer-content relative z-10 max-w-6xl mx-auto text-center">
        <h3
          className="text-2xl md:text-4xl font-bold text-white mb-4"
          style={{ fontFamily: "var(--font-display)" }}
        >
          ePAC, LLC
        </h3>
        <p className="text-white/40 text-sm max-w-md mx-auto mb-6">
          Built with React, Three.js, GSAP, Lenis, GLSL Shaders, and Tailwind CSS.
        </p>
        <p className="text-white/20 text-xs uppercase tracking-[0.3em] mb-8">
          {isHyperGalactic ? "⚡ WARP DRIVE ENGAGED ⚡" : "ENTERING HYPERSPACE"}
        </p>
        {/* Page navigation with portal transitions */}
        <div className="flex items-center justify-center mb-8">
          <button
            onClick={() => { const e = new CustomEvent('portal-navigate', { detail: '/about' }); window.dispatchEvent(e); }}
            data-nav-link
            className="text-white/40 text-sm uppercase tracking-[0.2em] hover:text-[#8b5cf6] transition-colors duration-300 border-b border-transparent hover:border-[#8b5cf6]/50 pb-1"
          >
            About
          </button>
        </div>
        <div className="flex items-center justify-center gap-4 md:gap-6 text-white/30 text-xs uppercase tracking-[0.2em] flex-wrap">
          <span>GSAP</span>
          <span className="w-1 h-1 bg-[#8b5cf6] rounded-full" />
          <span>THREE.JS</span>
          <span className="w-1 h-1 bg-[#8b5cf6] rounded-full" />
          <span>GLSL</span>
          <span className="w-1 h-1 bg-[#8b5cf6] rounded-full" />
          <span>LENIS</span>
          <span className="w-1 h-1 bg-[#8b5cf6] rounded-full" />
          <span>TAILWIND</span>
          <span className="w-1 h-1 bg-[#8b5cf6] rounded-full" />
          <span>REACT</span>
        </div>
      </div>
    </footer>
  );
}

// ============================================================
// MAIN HOME PAGE
// ============================================================
export default function Home() {
  const [sceneReady, setSceneReady] = useState(false);
  const onSceneReady = useCallback(() => setSceneReady(true), []);
  // Initialize Lenis smooth scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);
    const updateLenis = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(updateLenis);
    gsap.ticker.lagSmoothing(0);

    const onModalState = (event: Event) => {
      if ((event as CustomEvent<{ open: boolean }>).detail?.open) lenis.stop();
      else lenis.start();
    };
    window.addEventListener("cinematic-modal-state", onModalState);

    return () => {
      window.removeEventListener("cinematic-modal-state", onModalState);
      gsap.ticker.remove(updateLenis);
      lenis.off("scroll", ScrollTrigger.update);
      lenis.destroy();
    };
  }, []);

  return (
    <PerformanceProvider>
      <SoundProvider>
        <HomeContent sceneReady={sceneReady} onSceneReady={onSceneReady} />
      </SoundProvider>
    </PerformanceProvider>
  );
}

// ============================================================
// SCROLL VELOCITY DISTORTION — skews headings based on scroll speed
// ============================================================
function ScrollVelocityDistortion() {
  const { isLowEnd } = usePerformanceMode();

  useEffect(() => {
    if (isLowEnd) return;

    let velocity = 0;
    let rafId: number;
    let lastScroll = window.scrollY;
    let lastTime = performance.now();

    const headings = document.querySelectorAll<HTMLElement>(
      '[class*="text-5xl"], [class*="text-6xl"], [class*="text-7xl"], [class*="text-8xl"], .parallax-title, .hero-line-1, .hero-line-2'
    );

    headings.forEach((el) => {
      el.style.transition = 'transform 0.15s cubic-bezier(0.23,1,0.32,1)';
      el.style.willChange = 'transform';
    });

    const update = () => {
      const now = performance.now();
      const dt = now - lastTime;
      if (dt > 0) {
        const currentScroll = window.scrollY;
        const rawVelocity = (currentScroll - lastScroll) / dt; // px/ms
        velocity += (rawVelocity - velocity) * 0.15; // smooth
        lastScroll = currentScroll;
        lastTime = now;

        // Clamp skew to ±4 degrees
        const skew = Math.max(-4, Math.min(4, velocity * 12));
        const scaleX = 1 + Math.abs(velocity) * 0.3;

        headings.forEach((el) => {
          el.style.transform = `skewY(${skew}deg) scaleX(${Math.min(scaleX, 1.04)})`;
        });
      }
      rafId = requestAnimationFrame(update);
    };

    rafId = requestAnimationFrame(update);

    return () => {
      cancelAnimationFrame(rafId);
      headings.forEach((el) => {
        el.style.transform = '';
        el.style.transition = '';
        el.style.willChange = '';
      });
    };
  }, [isLowEnd]);

  return null;
}

// ============================================================
// NOISE GRAIN OVERLAY — Cinematic texture
// ============================================================
function NoiseGrain() {
  return (
    <div
      className="fixed inset-0 z-[9998] pointer-events-none opacity-[0.035]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        animation: "grainShift 0.5s steps(4) infinite",
      }}
    />
  );
}

// ============================================================
// SCROLL PROGRESS BAR — Top bar with violet glow
// ============================================================
function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);
  const { isHyperGalactic } = usePerformanceMode();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;
      setProgress(Math.min(scrollPercent, 1));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const barColor = isHyperGalactic
    ? "linear-gradient(90deg, #00ffff, #00e5ff, #00ffff)"
    : "linear-gradient(90deg, #6d28d9, #8b5cf6, #a78bfa, #8b5cf6)";
  const glowColor = isHyperGalactic ? "rgba(0,255,255,0.6)" : "rgba(139,92,246,0.6)";

  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-[3px] bg-transparent">
      <div
        className="h-full transition-[width] duration-100 ease-out"
        style={{
          width: `${progress * 100}%`,
          background: barColor,
          boxShadow: `0 0 10px ${glowColor}, 0 0 20px ${glowColor}, 0 0 40px ${glowColor}`,
        }}
      />
      {/* Glow dot at the end */}
      {progress > 0.01 && (
        <div
          className="absolute top-0 h-[3px] w-3 rounded-full"
          style={{
            left: `calc(${progress * 100}% - 6px)`,
            background: isHyperGalactic ? "#00ffff" : "#a78bfa",
            boxShadow: `0 0 8px ${glowColor}, 0 0 16px ${glowColor}`,
          }}
        />
      )}
    </div>
  );
}

function HomeContent({ sceneReady, onSceneReady }: { sceneReady: boolean; onSceneReady: () => void }) {
  const { isLowEnd } = usePerformanceMode();

  return (
    <>
      <NoiseGrain />
      <ScrollProgressBar />
      <FuturisticCursor />
      <FloatingNav />
      <KonamiCodeListener />
      <ScrollVelocityDistortion />
      {/* WebGL backgrounds disabled in performance mode */}
      {!isLowEnd && <ShaderCanvas />}
      {!isLowEnd && <ParticleCanvas />}
      <main className="home-theme relative z-[1] bg-transparent">
        <HeroSection />
        <TextRevealSection />
        <ParallaxSection />
        <HorizontalScrollSection />
        <PinnedSection />
        <CardsSection />
        <ContactSection />
        <Footer />
      </main>
      {!sceneReady && <CinematicReadyGate onReady={onSceneReady} />}
      {sceneReady && <AutoStoryScroll />}
    </>
  );
}
