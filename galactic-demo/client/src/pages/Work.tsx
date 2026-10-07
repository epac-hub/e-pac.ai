import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLocation } from "wouter";

gsap.registerPlugin(ScrollTrigger);

// ============================================================
// WORK / PORTFOLIO PAGE
// Design: Dark immersive portfolio with 3D tilt cards, image reveals,
// animated category filters, and modern hover descriptions
// ============================================================

// 3D Tilt Card with Image Reveal on Hover
function ProjectCard({
  project,
  index,
}: {
  project: (typeof PROJECTS)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMove = (e: React.MouseEvent) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;

    gsap.to(card, {
      rotateX,
      rotateY,
      duration: 0.4,
      ease: "power2.out",
      transformPerspective: 1200,
    });

    if (glowRef.current) {
      gsap.to(glowRef.current, {
        x: x - centerX,
        y: y - centerY,
        opacity: 0.5,
        duration: 0.3,
      });
    }
  };

  const handleEnter = () => {
    setIsHovered(true);
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        scale: 1.05,
        duration: 0.8,
        ease: "power3.out",
      });
    }
    if (contentRef.current) {
      gsap.to(contentRef.current, {
        y: -8,
        duration: 0.4,
        ease: "power2.out",
      });
    }
  };

  const handleLeave = () => {
    setIsHovered(false);
    const card = cardRef.current;
    if (card) {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.5)",
      });
    }
    if (glowRef.current) gsap.to(glowRef.current, { opacity: 0, duration: 0.4 });
    if (imageRef.current) {
      gsap.to(imageRef.current, { scale: 1, duration: 0.6, ease: "power2.out" });
    }
    if (contentRef.current) {
      gsap.to(contentRef.current, { y: 0, duration: 0.4, ease: "power2.out" });
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      onClick={() => {
        window.dispatchEvent(
          new CustomEvent("portal-navigate", { detail: { path: `/case-study/${project.slug}` } })
        );
      }}
      className="work-card relative overflow-hidden border border-white/[0.06] bg-white/[0.02] backdrop-blur-sm group cursor-pointer"
      data-cursor="card"
      style={{
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      {/* Internal glow */}
      <div
        ref={glowRef}
        className="absolute top-1/2 left-1/2 w-80 h-80 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none opacity-0 z-10"
        style={{ background: `radial-gradient(circle, ${project.accent}40 0%, transparent 70%)` }}
      />

      {/* Image Section */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <div
          ref={imageRef}
          className="absolute inset-0 bg-cover bg-center transition-transform"
          style={{ backgroundImage: `url(${project.image})` }}
        />
        {/* Dark overlay that lightens on hover */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            background: `linear-gradient(180deg, transparent 0%, rgba(5,0,16,0.4) 50%, rgba(5,0,16,0.9) 100%)`,
            opacity: isHovered ? 0.6 : 0.85,
          }}
        />
        {/* Project number */}
        <div className="absolute top-6 left-6 z-10">
          <span
            className="text-7xl font-black text-white/[0.04] leading-none"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        {/* Category badge */}
        <div className="absolute top-6 right-6 z-10">
          <span
            className="px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] border backdrop-blur-sm transition-all duration-300"
            style={{
              borderColor: isHovered ? project.accent : "rgba(255,255,255,0.1)",
              color: isHovered ? project.accent : "rgba(255,255,255,0.5)",
              backgroundColor: isHovered ? `${project.accent}10` : "rgba(0,0,0,0.3)",
            }}
          >
            {project.category}
          </span>
        </div>
      </div>

      {/* Content Section */}
      <div ref={contentRef} className="relative p-8 md:p-10 z-10" style={{ transform: "translateZ(20px)", transformStyle: "preserve-3d" }}>
        {/* Title */}
        <h2
          className="text-2xl md:text-4xl font-bold text-white mb-3 tracking-tight transition-colors duration-500"
          style={{
            fontFamily: "'Space Grotesk', sans-serif",
            color: isHovered ? project.accent : "#ffffff",
            transform: "translateZ(30px)",
          }}
        >
          {project.title}
        </h2>

        {/* Description - reveals on hover */}
        <div
          className="overflow-hidden transition-all duration-500 ease-out"
          style={{
            maxHeight: isHovered ? "120px" : "0px",
            opacity: isHovered ? 1 : 0,
            transform: `translateY(${isHovered ? 0 : 10}px)`,
          }}
        >
          <p className="text-white/60 text-base leading-relaxed mb-4">
            {project.description}
          </p>
        </div>

        {/* Brief tagline always visible */}
        <p
          className="text-white/40 text-sm mb-5 transition-opacity duration-300"
          style={{ opacity: isHovered ? 0 : 1, height: isHovered ? 0 : "auto" }}
        >
          {project.tagline}
        </p>

        {/* Tech stack */}
        <div className="flex gap-2 flex-wrap mb-4" style={{ transform: "translateZ(15px)" }}>
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-[10px] uppercase tracking-[0.15em] px-3 py-1 border transition-all duration-300"
              style={{
                borderColor: isHovered ? `${project.accent}40` : "rgba(255,255,255,0.08)",
                color: isHovered ? `${project.accent}` : "rgba(255,255,255,0.3)",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* View project link - appears on hover */}
        <div
          className="flex items-center gap-2 transition-all duration-400 cursor-pointer"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: `translateX(${isHovered ? 0 : -10}px)`,
          }}
          onClick={(e) => {
            e.stopPropagation();
            window.dispatchEvent(
              new CustomEvent("portal-navigate", { detail: { path: `/case-study/${project.slug}` } })
            );
          }}
        >
          <span className="text-xs uppercase tracking-[0.2em]" style={{ color: project.accent }}>
            View Case Study
          </span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
            <path d="M3 8h10M9 4l4 4-4 4" stroke={project.accent} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Magnetic hover zone for cursor */}
        <div className="absolute inset-0 z-0" data-cursor="magnetic" />

        {/* Year */}
        <div className="absolute bottom-8 right-8 md:right-10">
          <span className="text-white/15 text-xs tracking-[0.3em] uppercase">{project.year}</span>
        </div>
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 h-[2px] transition-all duration-700 ease-out"
        style={{
          width: isHovered ? "100%" : "0%",
          background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)`,
        }}
      />

      {/* Depth shadow */}
      <div
        className="absolute -bottom-4 left-8 right-8 h-8 rounded-full blur-xl transition-opacity duration-500"
        style={{
          background: project.accent,
          opacity: isHovered ? 0.2 : 0.05,
          transform: "translateZ(-10px)",
        }}
      />
    </div>
  );
}

// Project Data with real images
const PROJECTS = [
  {
    title: "NEBULA COMMERCE",
    slug: "nebula-commerce",
    category: "E-Commerce",
    year: "2026",
    tagline: "Luxury fashion meets immersive 3D product visualization.",
    description:
      "A headless Shopify storefront reimagined with WebGL-powered product viewers, scroll-driven storytelling for brand narrative, and micro-interactions that make every click feel intentional. Conversion rate increased 340% over the previous static site.",
    tech: ["Three.js", "Shopify Hydrogen", "GSAP", "WebGL"],
    accent: "#8b5cf6",
    image: "/manus-storage/portfolio-ecommerce_40919fdb.png",
  },
  {
    title: "VOID PORTFOLIO",
    slug: "void-portfolio",
    category: "Creative Portfolio",
    year: "2026",
    tagline: "Where photography meets liquid displacement art.",
    description:
      "A photographer's portfolio featuring liquid displacement transitions between galleries, ambient audio that reacts to scroll position, and a custom cursor that morphs into a viewfinder on image hover. Built with WebGL shaders and the Web Audio API.",
    tech: ["WebGL Shaders", "Lenis", "Web Audio API", "GSAP"],
    accent: "#a78bfa",
    image: "/manus-storage/portfolio-agency_d1b30b12.png",
  },
  {
    title: "QUANTUM DASHBOARD",
    slug: "quantum-dashboard",
    category: "SaaS Application",
    year: "2025",
    tagline: "Real-time data visualization with cinematic motion.",
    description:
      "An AI-powered analytics platform with animated D3.js charts, particle system backgrounds that respond to data anomalies, glassmorphism cards with depth parallax, and dark mode interface designed for extended monitoring sessions.",
    tech: ["D3.js", "React", "Framer Motion", "WebSocket"],
    accent: "#06b6d4",
    image: "/manus-storage/portfolio-fintech_6b81389f.png",
  },
  {
    title: "AURORA MARKETING",
    slug: "aurora-marketing",
    category: "Marketing Site",
    year: "2025",
    tagline: "High-conversion landing with kinetic typography and 3D elements.",
    description:
      "A growth platform landing page with kinetic typography that animates key metrics in real-time, 3D floating UI elements showcasing features, and scroll-driven social proof animations. Signups increased 280% and bounce rate dropped from 72% to 34%.",
    tech: ["GSAP", "Three.js", "CSS Houdini", "Lottie"],
    accent: "#f97316",
    image: "/manus-storage/portfolio-marketing_8c564afb.png",
  },
  {
    title: "STELLAR ANALYTICS",
    slug: "stellar-analytics",
    category: "SaaS Application",
    year: "2025",
    tagline: "Ambient monitoring interface for 24/7 operations.",
    description:
      "A real-time analytics platform inspired by air traffic control. Data streams flow as animated particles, AI predictions appear as gradient shifts, and critical alerts use spatial audio. Designed for 12-hour operator sessions with circadian-adaptive UI.",
    tech: ["D3.js", "WebGL Particles", "Web Audio API", "TensorFlow.js"],
    accent: "#3b82f6",
    image: "/manus-storage/portfolio-saas_2428d713.png",
  },
  {
    title: "PRISM GALLERY",
    slug: "prism-gallery",
    category: "Creative Portfolio",
    year: "2024",
    tagline: "Immersive virtual art exhibition with spatial audio.",
    description:
      "A digital art gallery using WebGL to simulate physical exhibition space. Users navigate through rooms with parallax depth, artworks reveal with dramatic lighting transitions, and spatial audio creates the ambient atmosphere of each room.",
    tech: ["WebGL", "Three.js", "Spatial Audio", "Custom Shaders"],
    accent: "#ec4899",
    image: "/manus-storage/portfolio-gallery_ced87197.png",
  },
];

const CATEGORIES = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

export default function Work() {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [, setLocation] = useLocation();
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(PROJECTS);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { clipPath: "circle(0% at 50% 50%)", opacity: 0 },
        { clipPath: "circle(100% at 50% 50%)", opacity: 1, duration: 1, ease: "power3.out" }
      );
    }

    // Scroll-driven entrance for cards
    const cards = document.querySelectorAll(".work-card");
    cards.forEach((card, i) => {
      gsap.fromTo(
        card,
        { y: 80, opacity: 0, rotateX: -10 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: i * 0.2,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    const pageRoot = containerRef.current;
    return () => ScrollTrigger.getAll().forEach((t) => {
      if (t.trigger instanceof Element && pageRoot?.contains(t.trigger)) t.kill();
    });
  }, []);

  const handleFilterChange = (cat: string) => {
    if (cat === activeFilter) return;
    const cards = gridRef.current?.querySelectorAll(".work-card");
    if (cards && cards.length > 0) {
      gsap.to(cards, {
        opacity: 0,
        y: 30,
        scale: 0.97,
        stagger: 0.05,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setActiveFilter(cat);
          const newFiltered = cat === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === cat);
          setFilteredProjects(newFiltered);
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              const newCards = gridRef.current?.querySelectorAll(".work-card");
              if (newCards) {
                gsap.fromTo(
                  newCards,
                  { opacity: 0, y: 50, scale: 0.95, rotateX: -8 },
                  { opacity: 1, y: 0, scale: 1, rotateX: 0, stagger: 0.12, duration: 0.6, ease: "back.out(1.2)" }
                );
              }
            });
          });
        },
      });
    } else {
      setActiveFilter(cat);
      const newFiltered = cat === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === cat);
      setFilteredProjects(newFiltered);
    }
  };

  const navigateWithPortal = (path: string) => {
    if (!containerRef.current) {
      setLocation(path);
      return;
    }
    gsap.to(containerRef.current, {
      clipPath: "circle(0% at 50% 50%)",
      opacity: 0,
      duration: 0.6,
      ease: "power3.in",
      onComplete: () => setLocation(path),
    });
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-background text-foreground relative overflow-hidden"
      style={{ clipPath: "circle(0% at 50% 50%)" }}
    >
      {/* Ambient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0015] via-[#0d0020] to-[#050010]" />
      {/* Floating orbs */}
      <div className="absolute top-20 left-[10%] w-[500px] h-[500px] rounded-full opacity-[0.06] blur-[100px]" style={{ background: "radial-gradient(circle, #8b5cf6, transparent)" }} />
      <div className="absolute bottom-40 right-[15%] w-[400px] h-[400px] rounded-full opacity-[0.06] blur-[100px]" style={{ background: "radial-gradient(circle, #06b6d4, transparent)" }} />
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Video Showreel Hero */}
      <div className="relative w-full h-[70vh] overflow-hidden flex items-center justify-center">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          src="/manus-storage/work-showreel_9d57e921.mp4"
        />
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0015]/60 via-transparent to-[#0a0015]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0015]/40 via-transparent to-[#0a0015]/40" />
        {/* Scanline effect */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)",
          }}
        />
        {/* Centered content */}
        <div className="relative z-10 text-center">
          <span className="text-[#8b5cf6] text-[11px] uppercase tracking-[0.5em] mb-6 block font-medium">
            Showreel 2024–2026
          </span>
          <h1
            className="text-6xl md:text-9xl font-bold tracking-[-0.04em] text-white mb-4"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            SELECTED <span className="text-[#8b5cf6]">WORK</span>
          </h1>
          <p className="text-white/50 text-lg max-w-lg mx-auto leading-relaxed">
            Projects that push the boundaries of what's possible in the browser.
          </p>
          {/* Scroll indicator */}
          <div className="mt-12 flex flex-col items-center gap-2 animate-pulse">
            <span className="text-white/20 text-[9px] uppercase tracking-[0.3em]">Scroll to explore</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-white/20">
              <path d="M10 4v12M6 12l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0015] to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24" style={{ perspective: "1200px" }}>
        {/* Section intro */}
        <div className="text-center mb-20">
          <span className="text-[#8b5cf6] text-[11px] uppercase tracking-[0.4em] mb-6 block font-medium">
            Portfolio
          </span>
          <h2
            className="text-4xl md:text-6xl font-bold tracking-[-0.04em] text-white mb-6"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            ALL PROJECTS
          </h2>
          <p className="text-white/35 text-lg max-w-lg mx-auto leading-relaxed">
            Each one crafted with obsessive attention to detail and cutting-edge technology.
          </p>
        </div>

        {/* Category Filter Bar */}
        <div className="flex justify-center gap-1 sm:gap-2 mb-16 flex-wrap">
          {CATEGORIES.map((cat) => {
            const count = cat === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => handleFilterChange(cat)}
                className="relative px-5 py-3 text-[10px] uppercase tracking-[0.2em] transition-all duration-400 overflow-hidden group"
                style={{
                  border: `1px solid ${activeFilter === cat ? "#8b5cf6" : "rgba(255,255,255,0.08)"}`,
                  color: activeFilter === cat ? "#ffffff" : "rgba(255,255,255,0.4)",
                  background: activeFilter === cat ? "rgba(139,92,246,0.1)" : "transparent",
                }}
              >
                {/* Hover fill animation */}
                <div
                  className="absolute inset-0 transition-transform duration-500 ease-out -translate-x-full group-hover:translate-x-0"
                  style={{
                    background: "linear-gradient(90deg, rgba(139,92,246,0.08), rgba(139,92,246,0.03))",
                    display: activeFilter === cat ? "none" : "block",
                  }}
                />
                {/* Active indicator */}
                {activeFilter === cat && (
                  <span className="absolute top-1.5 right-1.5 w-1 h-1 rounded-full bg-[#8b5cf6]" />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  {cat}
                  <span
                    className="text-[9px] transition-colors duration-300"
                    style={{ color: activeFilter === cat ? "rgba(139,92,246,0.8)" : "rgba(255,255,255,0.2)" }}
                  >
                    ({count})
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Results count */}
        <div className="flex items-center justify-between mb-10 px-1">
          <span className="text-white/15 text-[10px] tracking-[0.3em] uppercase">
            Showing {filteredProjects.length} of {PROJECTS.length}
          </span>
          <div className="flex items-center gap-2">
            <div className="w-8 h-px bg-white/10" />
            <span className="text-white/15 text-[10px] tracking-[0.2em] uppercase">
              {activeFilter}
            </span>
          </div>
        </div>

        {/* Projects Grid */}
        <div ref={gridRef} className="grid grid-cols-1 gap-10 mb-24">
          {filteredProjects.map((project, i) => (
            <ProjectCard key={`${project.title}-${activeFilter}`} project={project} index={i} />
          ))}
        </div>

        {/* Navigation */}
        <div className="flex gap-4 sm:gap-6 justify-center flex-wrap">
          <button
            onClick={() => navigateWithPortal("/")}
            className="px-8 py-4 border border-white/10 text-white/60 text-xs uppercase tracking-[0.2em] hover:border-[#8b5cf6]/50 hover:text-white hover:bg-[#8b5cf6]/5 transition-all duration-300"
            data-cursor="link"
          >
            ← Back to Demo
          </button>
          <button
            onClick={() => navigateWithPortal("/about")}
            className="px-8 py-4 bg-[#8b5cf6]/10 border border-[#8b5cf6] text-white text-xs uppercase tracking-[0.2em] hover:bg-[#8b5cf6]/20 transition-all duration-300"
            data-cursor="link"
          >
            About & Contact →
          </button>
        </div>
      </div>
    </div>
  );
}
