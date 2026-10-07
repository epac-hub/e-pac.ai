import { useRef, useEffect } from "react";
import gsap from "gsap";

/**
 * Global Futuristic Cursor — renders on ALL pages.
 * Includes: dot, ring, glow, 8 trail particles, 30-particle velocity burst pool.
 * Morphs shape based on hovered element type.
 * AUDIO-REACTIVE: ring size and glow intensity pulse with real-time audio frequency.
 */
export default function GlobalCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const audioRingRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<HTMLDivElement[]>([]);
  const particlePoolRef = useRef<HTMLDivElement[]>([]);
  const prevMousePos = useRef({ x: 0, y: 0 });
  const velocity = useRef(0);
  const particleIndex = useRef(0);

  useEffect(() => {
    const dot = dotRef.current;
    const ring = ringRef.current;
    const glow = glowRef.current;
    const audioRing = audioRingRef.current;
    if (!dot || !ring || !glow || !audioRing) return;

    const PARTICLE_COLORS = ["#8b5cf6", "#a78bfa", "#c4b5fd", "#7c3aed", "#6d28d9", "#ddd6fe"];

    // Audio reactive setup
    let analyser: AnalyserNode | null = null;
    let audioCtx: AudioContext | null = null;
    let audioConnected = false;
    let audioAnimFrame = 0;
    const audioData = new Uint8Array(16);

    const connectAudio = () => {
      // A suspended AudioContext would mute the soundtrack if it were rerouted.
      if (audioConnected || !navigator.userActivation?.hasBeenActive) return;
      const audioElements = document.querySelectorAll("audio");
      audioElements.forEach((audioEl) => {
        if (audioConnected) return;
        if (audioEl.src && !audioEl.paused) {
          try {
            if (!audioCtx) audioCtx = new AudioContext();
            if (audioCtx.state !== "running") {
              void audioCtx.resume().catch(() => {});
              return;
            }
            const source = audioCtx.createMediaElementSource(audioEl);
            analyser = audioCtx.createAnalyser();
            analyser.fftSize = 32;
            source.connect(analyser);
            analyser.connect(audioCtx.destination);
            audioConnected = true;
          } catch (e) {
            // Already connected or CORS issue - use fallback
          }
        }
      });
    };

    // Try to connect to audio periodically
    const audioCheckInterval = setInterval(() => {
      if (!audioConnected) connectAudio();
    }, 2000);
    const onAudioGesture = () => {
      if (audioCtx?.state === "suspended") void audioCtx.resume().catch(() => {});
      connectAudio();
    };
    window.addEventListener("pointerdown", onAudioGesture, true);
    window.addEventListener("keydown", onAudioGesture, true);

    // Audio-reactive animation loop
    const animateAudioReactive = () => {
      if (analyser && audioConnected) {
        analyser.getByteFrequencyData(audioData);
        // Bass (0-3), Mid (4-8), High (9-15)
        const bass = (audioData[0] + audioData[1] + audioData[2]) / 3 / 255;
        const mid = (audioData[4] + audioData[5] + audioData[6]) / 3 / 255;
        const high = (audioData[9] + audioData[10] + audioData[11]) / 3 / 255;

        // Audio ring pulses with bass
        const audioScale = 1 + bass * 2.5;
        const audioOpacity = 0.1 + bass * 0.5;
        audioRing.style.transform = `translate(-50%, -50%) scale(${audioScale})`;
        audioRing.style.opacity = `${audioOpacity}`;

        // Ring border color shifts with frequency
        const hue = 270 + mid * 60; // Shift from purple to blue/pink
        ring.style.borderColor = `hsla(${hue}, 70%, 65%, ${0.6 + high * 0.4})`;

        // Glow intensity with bass
        const glowScale = 1 + bass * 1.5;
        glow.style.transform = `translate(-50%, -50%) scale(${glowScale})`;
        glow.style.opacity = `${0.3 + bass * 0.5}`;

        // Dot pulses slightly
        const dotScale = 1 + bass * 0.3;
        dot.style.transform = `translate(-50%, -50%) scale(${dotScale})`;
      }
      audioAnimFrame = requestAnimationFrame(animateAudioReactive);
    };
    audioAnimFrame = requestAnimationFrame(animateAudioReactive);

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

      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.08, ease: "power2.out" });
      gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.15, ease: "power2.out" });
      gsap.to(glow, { x: e.clientX, y: e.clientY, duration: 0.35, ease: "power2.out" });
      gsap.to(audioRing, { x: e.clientX, y: e.clientY, duration: 0.2, ease: "power2.out" });

      // Trail
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

      // Velocity particles
      if (velocity.current > 8) {
        const count = Math.min(Math.floor(velocity.current / 12), 4);
        for (let i = 0; i < count; i++) {
          spawnParticle(e.clientX, e.clientY, velocity.current);
        }
      }
    };

    // Cursor states
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

    window.addEventListener("mousemove", move);

    // Card-specific cursor state (portfolio cards)
    const cardGrow = () => {
      gsap.to(ring, { scale: 3, opacity: 0.2, borderColor: "#8b5cf6", borderWidth: "2px", duration: 0.5, ease: "power3.out" });
      gsap.to(dot, { scale: 0.3, backgroundColor: "#8b5cf6", duration: 0.3 });
      gsap.to(glow, { scale: 5, opacity: 0.6, duration: 0.5 });
      // Add crosshair rotation
      gsap.to(ring, { rotation: 45, duration: 0.6, ease: "power2.out" });
    };
    const cardShrink = () => {
      gsap.to(ring, { scale: 1, opacity: 1, borderColor: "rgba(255,255,255,0.6)", borderWidth: "1px", rotation: 0, duration: 0.5, ease: "elastic.out(1, 0.4)" });
      gsap.to(dot, { scale: 1, backgroundColor: "#ffffff", duration: 0.3 });
      gsap.to(glow, { scale: 1, opacity: 0.3, duration: 0.4 });
    };

    // Link-specific cursor (arrows)
    const linkGrow = () => {
      gsap.to(ring, { scaleX: 2.2, scaleY: 0.7, opacity: 0.5, borderColor: "#8b5cf6", duration: 0.3, ease: "power3.out" });
      gsap.to(dot, { scaleX: 2.5, scaleY: 0.6, backgroundColor: "#8b5cf6", duration: 0.2 });
      gsap.to(glow, { scaleX: 2.5, scaleY: 1, opacity: 0.5, duration: 0.3 });
    };
    const linkShrink = () => {
      gsap.to(ring, { scaleX: 1, scaleY: 1, opacity: 1, borderColor: "rgba(255,255,255,0.6)", duration: 0.4, ease: "elastic.out(1, 0.5)" });
      gsap.to(dot, { scaleX: 1, scaleY: 1, backgroundColor: "#ffffff", duration: 0.3 });
      gsap.to(glow, { scaleX: 1, scaleY: 1, opacity: 0.3, duration: 0.4 });
    };

    const addListeners = () => {
      // Data-cursor attribute based states
      document.querySelectorAll('[data-cursor="card"]').forEach((el) => {
        el.addEventListener("mouseenter", cardGrow);
        el.addEventListener("mouseleave", cardShrink);
      });
      document.querySelectorAll('[data-cursor="link"]').forEach((el) => {
        el.addEventListener("mouseenter", linkGrow);
        el.addEventListener("mouseleave", linkShrink);
      });
      document.querySelectorAll('[data-cursor="magnetic"]').forEach((el) => {
        el.addEventListener("mouseenter", magneticTextGrow);
        el.addEventListener("mouseleave", magneticTextShrink);
      });
      document.querySelectorAll("[data-magnetic-text]").forEach((el) => {
        el.addEventListener("mouseenter", magneticTextGrow);
        el.addEventListener("mouseleave", magneticTextShrink);
      });
      document.querySelectorAll("input, textarea").forEach((el) => {
        el.addEventListener("mouseenter", inputGrow);
        el.addEventListener("mouseleave", inputShrink);
      });
      document.querySelectorAll("nav button, [data-nav-link]").forEach((el) => {
        el.addEventListener("mouseenter", navGrow);
        el.addEventListener("mouseleave", navShrink);
      });
      document.querySelectorAll('a, button:not(nav button):not([data-cursor]), [data-hover]').forEach((el) => {
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
      clearInterval(audioCheckInterval);
      cancelAnimationFrame(audioAnimFrame);
      window.removeEventListener("pointerdown", onAudioGesture, true);
      window.removeEventListener("keydown", onAudioGesture, true);
    };
  }, []);

  // Only render on devices with hover capability
  const isMobile = typeof window !== "undefined" && window.matchMedia("(hover: none)").matches;
  if (isMobile) return null;

  return (
    <>
      {/* Particle pool for velocity-based color streaks */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={`gp-${i}`}
          ref={(el) => { if (el) particlePoolRef.current[i] = el; }}
          className="fixed top-0 left-0 pointer-events-none z-[9994] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0"
          style={{ width: "4px", height: "4px" }}
        />
      ))}
      {/* Trail particles */}
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <div
          key={`gt-${i}`}
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
      {/* Audio-reactive outer ring */}
      <div
        ref={audioRingRef}
        className="fixed top-0 left-0 w-16 h-16 pointer-events-none z-[9995] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-0"
        style={{
          border: "1px solid rgba(139, 92, 246, 0.3)",
          background: "radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)",
          transition: "transform 0.1s ease-out, opacity 0.1s ease-out",
        }}
      />
      {/* Glow */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-20 h-20 pointer-events-none z-[9996] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)" }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-10 h-10 border border-white/60 rounded-full pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
        style={{ transition: "border-color 0.1s" }}
      />
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 mix-blend-difference"
      />
    </>
  );
}
