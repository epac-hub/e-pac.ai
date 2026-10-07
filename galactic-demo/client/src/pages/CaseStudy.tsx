import { useRef, useEffect, useState } from "react";
import { useRoute, useLocation } from "wouter";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Interactive Contact Form with magnetic input animations
function ContactForm({ accent }: { accent: string }) {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (formRef.current) {
      gsap.to(formRef.current, {
        scale: 0.98,
        duration: 0.1,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
      });
    }
    setTimeout(() => {
      setSubmitted(false);
      setFormState({ name: "", email: "", message: "" });
    }, 3000);
  };

  const inputClasses = (field: string) =>
    `w-full bg-white/[0.03] border px-5 py-4 text-foreground placeholder:text-foreground/25 outline-none transition-all duration-500 text-sm tracking-wide ${
      focusedField === field
        ? "border-opacity-100 shadow-[0_0_30px_-5px]"
        : "border-white/[0.08] hover:border-white/[0.15]"
    }`;

  if (submitted) {
    return (
      <div className="text-center py-16">
        <div
          className="inline-flex items-center justify-center w-20 h-20 rounded-full mb-6"
          style={{ background: `${accent}15`, border: `1px solid ${accent}40` }}
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none">
            <path d="M5 13l4 4L19 7" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
          Message Sent
        </h3>
        <p className="text-foreground/40">We'll get back to you within 24 hours.</p>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Your Name"
            value={formState.name}
            onChange={(e) => setFormState({ ...formState, name: e.target.value })}
            onFocus={() => setFocusedField("name")}
            onBlur={() => setFocusedField(null)}
            required
            className={inputClasses("name")}
            style={{
              borderColor: focusedField === "name" ? accent : undefined,
              boxShadow: focusedField === "name" ? `0 0 30px -5px ${accent}40` : undefined,
            }}
          />
          <div
            className="absolute bottom-0 left-0 h-[2px] transition-all duration-500"
            style={{
              width: focusedField === "name" ? "100%" : "0%",
              background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
            }}
          />
        </div>
        <div className="relative">
          <input
            type="email"
            placeholder="Your Email"
            value={formState.email}
            onChange={(e) => setFormState({ ...formState, email: e.target.value })}
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField(null)}
            required
            className={inputClasses("email")}
            style={{
              borderColor: focusedField === "email" ? accent : undefined,
              boxShadow: focusedField === "email" ? `0 0 30px -5px ${accent}40` : undefined,
            }}
          />
          <div
            className="absolute bottom-0 left-0 h-[2px] transition-all duration-500"
            style={{
              width: focusedField === "email" ? "100%" : "0%",
              background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
            }}
          />
        </div>
      </div>
      <div className="relative">
        <textarea
          placeholder="Tell us about your project..."
          rows={5}
          value={formState.message}
          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
          onFocus={() => setFocusedField("message")}
          onBlur={() => setFocusedField(null)}
          required
          className={`${inputClasses("message")} resize-none`}
          style={{
            borderColor: focusedField === "message" ? accent : undefined,
            boxShadow: focusedField === "message" ? `0 0 30px -5px ${accent}40` : undefined,
          }}
        />
        <div
          className="absolute bottom-0 left-0 h-[2px] transition-all duration-500"
          style={{
            width: focusedField === "message" ? "100%" : "0%",
            background: `linear-gradient(90deg, transparent, ${accent}, transparent)`,
          }}
        />
      </div>
      <button
        type="submit"
        className="w-full py-5 text-sm uppercase tracking-[0.25em] font-medium text-white border transition-all duration-500 relative overflow-hidden group"
        style={{
          borderColor: accent,
          background: `${accent}10`,
        }}
      >
        <div
          className="absolute inset-0 transition-transform duration-700 -translate-x-full group-hover:translate-x-0"
          style={{ background: `linear-gradient(90deg, ${accent}20, ${accent}10)` }}
        />
        <span className="relative z-10">Send Message</span>
      </button>
    </form>
  );
}

// All project data for case studies
const CASE_STUDIES: Record<string, CaseStudyData> = {
  "nebula-commerce": {
    title: "NEBULA COMMERCE",
    subtitle: "Luxury Fashion E-Commerce",
    year: "2026",
    category: "E-Commerce",
    heroImage: "/manus-storage/portfolio-ecommerce_40919fdb.png",
    accent: "#8b5cf6",
    overview:
      "A headless Shopify storefront reimagined with WebGL-powered product viewers, scroll-driven storytelling for brand narrative, and micro-interactions that make every click feel intentional.",
    challenge:
      "The luxury fashion brand needed an online presence that matched the tactile experience of their physical boutiques. Traditional e-commerce templates felt generic and failed to communicate the craftsmanship behind each piece. The existing site had a 1.2% conversion rate and an average session duration of 47 seconds.",
    solution:
      "We built a fully custom headless Shopify storefront using Hydrogen, with Three.js-powered 3D product viewers that let customers rotate and zoom into fabric textures. Scroll-driven animations reveal the story behind each collection, while subtle haptic-inspired micro-interactions (button presses, cart additions) create a sense of physical touch.",
    results: [
      { metric: "340%", label: "Conversion Increase" },
      { metric: "4.2min", label: "Avg. Session Duration" },
      { metric: "89%", label: "Mobile Performance Score" },
      { metric: "12s", label: "Time to First Purchase" },
    ],
    process: [
      {
        phase: "DISCOVERY",
        title: "Understanding Luxury Digital",
        description:
          "We spent two weeks in the brand's ateliers, understanding how customers interact with physical products. Every texture, every stitch, every packaging detail informed our digital translation.",
      },
      {
        phase: "DESIGN",
        title: "Sensory-First Interface",
        description:
          "The design system was built around the concept of 'digital touch' — every interaction should feel like handling a luxury item. We developed custom easing curves that mimic the weight and resistance of premium materials.",
      },
      {
        phase: "DEVELOPMENT",
        title: "WebGL Product Theater",
        description:
          "Three.js scenes render each product with physically-based materials, environment lighting, and real-time shadow casting. The scroll-driven narrative uses GSAP ScrollTrigger to choreograph camera movements and text reveals.",
      },
      {
        phase: "LAUNCH",
        title: "Performance at Scale",
        description:
          "Despite the heavy 3D content, we achieved a 89 Lighthouse performance score through progressive loading, LOD switching, and aggressive code splitting. The site handles 50K concurrent users during flash sales.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=1200&h=800&fit=crop",
    ],
    tech: ["Three.js", "Shopify Hydrogen", "GSAP ScrollTrigger", "WebGL", "React", "Tailwind CSS"],
  },
  "void-portfolio": {
    title: "VOID PORTFOLIO",
    subtitle: "Creative Photography Portfolio",
    year: "2026",
    category: "Creative Portfolio",
    heroImage: "/manus-storage/portfolio-agency_d1b30b12.png",
    accent: "#a78bfa",
    overview:
      "A photographer's portfolio featuring liquid displacement transitions between galleries, ambient audio that reacts to scroll position, and a custom cursor that morphs into a viewfinder on image hover.",
    challenge:
      "The photographer wanted a portfolio that was itself a piece of art — not just a container for images, but an experience that enhanced the emotional impact of each photograph. Standard gallery layouts felt clinical and disconnected from the raw emotion in the work.",
    solution:
      "We created an immersive web experience where the boundary between interface and content dissolves. WebGL shaders create liquid displacement transitions between galleries. The Web Audio API generates ambient soundscapes that shift with scroll position. A custom cursor transforms into a camera viewfinder on image hover, making browsing feel like shooting.",
    results: [
      { metric: "8.7min", label: "Avg. Session Duration" },
      { metric: "94%", label: "Portfolio Completion Rate" },
      { metric: "Awwwards", label: "Site of the Day" },
      { metric: "47%", label: "Inquiry Rate Increase" },
    ],
    process: [
      {
        phase: "CONCEPT",
        title: "Art Meets Interface",
        description:
          "We studied the photographer's creative process — how they see light, compose frames, and tell stories through sequences. The website needed to mirror this intentionality in every interaction.",
      },
      {
        phase: "SHADER DESIGN",
        title: "Liquid Reality",
        description:
          "Custom GLSL fragment shaders create the signature liquid displacement effect. Each transition dissolves the current image into fluid particles before reforming into the next — a metaphor for the impermanence of captured moments.",
      },
      {
        phase: "AUDIO LAYER",
        title: "Sonic Landscapes",
        description:
          "The Web Audio API generates procedural ambient sound that responds to scroll velocity and cursor position. Low frequencies swell during dramatic images; high frequencies shimmer during lighter compositions.",
      },
      {
        phase: "REFINEMENT",
        title: "60fps Poetry",
        description:
          "Every animation was hand-tuned to maintain 60fps on mid-range devices. We implemented progressive enhancement — the full shader experience on capable hardware, graceful CSS fallbacks elsewhere.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?w=1200&h=800&fit=crop",
    ],
    tech: ["WebGL Shaders", "GLSL", "Lenis", "Web Audio API", "GSAP", "Canvas 2D"],
  },
  "quantum-dashboard": {
    title: "QUANTUM DASHBOARD",
    subtitle: "AI Analytics Platform",
    year: "2025",
    category: "SaaS Application",
    heroImage: "/manus-storage/portfolio-fintech_6b81389f.png",
    accent: "#06b6d4",
    overview:
      "An AI-powered analytics platform with animated D3.js charts, particle system backgrounds that respond to data anomalies, and glassmorphism cards with depth parallax.",
    challenge:
      "Enterprise analytics tools are notoriously ugly and overwhelming. The client needed a platform that could display complex real-time data while remaining intuitive for non-technical stakeholders. The previous tool had a 23% adoption rate among executives.",
    solution:
      "We designed a 'cinematic data' experience — where information is presented with the dramatic timing and visual clarity of a film. Animated D3.js charts reveal data progressively, particle backgrounds subtly shift color when anomalies are detected, and glassmorphism cards create depth hierarchy that guides attention naturally.",
    results: [
      { metric: "91%", label: "Executive Adoption" },
      { metric: "2.3s", label: "Avg. Insight Discovery" },
      { metric: "60fps", label: "Animation Performance" },
      { metric: "4.8/5", label: "User Satisfaction" },
    ],
    process: [
      {
        phase: "RESEARCH",
        title: "Data Storytelling",
        description:
          "We interviewed 30+ executives to understand how they consume information. The key insight: they don't want dashboards, they want stories. Every chart needed a narrative arc — setup, tension, resolution.",
      },
      {
        phase: "ARCHITECTURE",
        title: "Real-Time Pipeline",
        description:
          "WebSocket connections stream live data to the frontend, where a custom state management layer batches updates for smooth 60fps rendering. D3.js transitions are choreographed to prevent visual chaos during high-frequency updates.",
      },
      {
        phase: "VISUAL SYSTEM",
        title: "Cinematic Depth",
        description:
          "The glassmorphism design system uses multiple blur layers and subtle parallax to create a sense of physical depth. Cards float at different z-levels, and mouse movement triggers gentle perspective shifts that reinforce the spatial hierarchy.",
      },
      {
        phase: "INTELLIGENCE",
        title: "Ambient Awareness",
        description:
          "The particle background isn't decorative — it's informational. Color shifts indicate system health, particle density maps to data volume, and sudden pattern changes alert users to anomalies before they see the numbers.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&h=800&fit=crop",
    ],
    tech: ["D3.js", "React", "Framer Motion", "WebSocket", "Canvas Particles", "Glassmorphism"],
  },
  "aurora-marketing": {
    title: "AURORA MARKETING",
    subtitle: "Growth Platform Landing",
    year: "2025",
    category: "Marketing Site",
    heroImage: "/manus-storage/portfolio-marketing_8c564afb.png",
    accent: "#f97316",
    overview:
      "A high-conversion marketing landing page with kinetic typography, 3D floating elements, and scroll-driven social proof animations that increased signups by 280%.",
    challenge:
      "The growth platform was losing to competitors with flashier marketing sites despite having a superior product. Their existing landing page was a standard template that failed to communicate the energy and innovation of their tool. Bounce rate was 72% and signup conversion was 1.8%.",
    solution:
      "We built a landing page that IS the product demo. Kinetic typography animates key metrics in real-time, 3D floating UI elements showcase features without screenshots, and scroll-driven testimonial animations create social proof that feels alive rather than static.",
    results: [
      { metric: "280%", label: "Signup Increase" },
      { metric: "34%", label: "Bounce Rate (from 72%)" },
      { metric: "2.1x", label: "Time on Page" },
      { metric: "A+", label: "Core Web Vitals" },
    ],
    process: [
      {
        phase: "STRATEGY",
        title: "Conversion Architecture",
        description:
          "We mapped the ideal user journey from curiosity to conversion, identifying 7 key decision points. Each section of the page addresses a specific objection or desire, with motion design that reinforces the message.",
      },
      {
        phase: "MOTION DESIGN",
        title: "Kinetic Storytelling",
        description:
          "Typography doesn't just display information — it performs it. Numbers count up as they enter view, headlines split and reassemble, and CTAs pulse with urgency. Every animation has a conversion purpose.",
      },
      {
        phase: "3D ELEMENTS",
        title: "Floating Interface",
        description:
          "Rather than flat screenshots, we created 3D representations of the product UI that float and rotate as users scroll. This creates a sense of depth and innovation that static images cannot achieve.",
      },
      {
        phase: "OPTIMIZATION",
        title: "Speed is Conversion",
        description:
          "Despite heavy animations, the page loads in under 1.5s through aggressive code splitting, intersection observer-based lazy loading, and GPU-only animations. Every millisecond of load time was treated as lost revenue.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1200&h=800&fit=crop",
    ],
    tech: ["GSAP", "Three.js", "Intersection Observer", "CSS Houdini", "Lottie", "Tailwind CSS"],
  },
  "stellar-analytics": {
    title: "STELLAR ANALYTICS",
    subtitle: "Real-Time Data Platform",
    year: "2025",
    category: "SaaS Application",
    heroImage: "/manus-storage/portfolio-saas_2428d713.png",
    accent: "#3b82f6",
    overview:
      "A real-time analytics platform with animated data streams, predictive AI visualizations, and a dark-mode interface designed for 24/7 monitoring operations.",
    challenge:
      "The operations team needed to monitor 10,000+ data points simultaneously without information overload. Existing tools either showed too much (causing alert fatigue) or too little (missing critical events). The team needed a 'calm technology' approach to real-time monitoring.",
    solution:
      "We designed an ambient monitoring interface inspired by air traffic control systems. Data streams flow as animated particles, AI predictions appear as gentle gradient shifts, and critical alerts use spatial audio cues. The interface adapts its information density based on the operator's attention patterns.",
    results: [
      { metric: "67%", label: "Alert Response Time" },
      { metric: "0", label: "Missed Critical Events" },
      { metric: "12hr", label: "Avg. Session (from 4hr)" },
      { metric: "99.97%", label: "Uptime Achievement" },
    ],
    process: [
      {
        phase: "ETHNOGRAPHY",
        title: "Operator Shadowing",
        description:
          "We spent 3 weeks in the operations center, observing how operators scan screens, respond to alerts, and maintain awareness during 12-hour shifts. Fatigue patterns and attention cycles informed every design decision.",
      },
      {
        phase: "INFORMATION DESIGN",
        title: "Calm Technology",
        description:
          "Inspired by Mark Weiser's calm computing principles, we designed information to move between the periphery and center of attention. Normal operations are ambient and calming; anomalies smoothly escalate to demand focus.",
      },
      {
        phase: "ANIMATION SYSTEM",
        title: "Data as Motion",
        description:
          "Each data stream is visualized as flowing particles whose speed, color, and density encode multiple dimensions simultaneously. Operators develop intuitive pattern recognition — they can 'feel' when something is wrong before reading numbers.",
      },
      {
        phase: "ENDURANCE",
        title: "12-Hour Design",
        description:
          "Every color, contrast ratio, and animation speed was tested for 12-hour viewing sessions. We implemented automatic circadian adjustments, reducing blue light and contrast during night shifts to prevent eye strain.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200&h=800&fit=crop",
    ],
    tech: ["D3.js", "WebGL Particles", "Web Audio API", "React", "WebSocket", "TensorFlow.js"],
  },
  "prism-gallery": {
    title: "PRISM GALLERY",
    subtitle: "Digital Art Exhibition",
    year: "2024",
    category: "Creative Portfolio",
    heroImage: "/manus-storage/portfolio-gallery_ced87197.png",
    accent: "#ec4899",
    overview:
      "An immersive digital art gallery with WebGL transitions, spatial audio, and a virtual curator experience that makes browsing art online feel like walking through a physical exhibition.",
    challenge:
      "Digital art galleries feel like scrolling through a feed — there's no sense of space, no contemplation time, no curatorial narrative. The gallery needed to recreate the physical experience of moving through rooms, discovering works, and feeling the scale of pieces.",
    solution:
      "We built a virtual gallery using WebGL that simulates physical space. Users navigate through rooms with parallax depth, artworks reveal themselves with dramatic lighting transitions, and spatial audio creates the ambient atmosphere of each exhibition room. A virtual curator provides context through scroll-triggered text reveals.",
    results: [
      { metric: "11min", label: "Avg. Visit Duration" },
      { metric: "340%", label: "Art Inquiry Increase" },
      { metric: "FWA", label: "Site of the Month" },
      { metric: "92%", label: "Return Visitor Rate" },
    ],
    process: [
      {
        phase: "SPATIAL DESIGN",
        title: "Virtual Architecture",
        description:
          "We designed the gallery as a series of interconnected rooms, each with distinct lighting, proportions, and atmosphere. The spatial layout creates a narrative journey — from intimate chambers to grand halls.",
      },
      {
        phase: "LIGHTING ENGINE",
        title: "Digital Chiaroscuro",
        description:
          "Custom WebGL lighting simulates gallery spotlights, ambient bounce, and dramatic shadows. Each artwork has its own lighting setup that activates as the user approaches, creating the museum experience of works 'revealing' themselves.",
      },
      {
        phase: "AUDIO DESIGN",
        title: "Spatial Soundscape",
        description:
          "The Web Audio API creates 3D positioned sound sources — footsteps echo differently in each room, ambient tones shift with the exhibition theme, and approaching an artwork triggers its unique sonic signature.",
      },
      {
        phase: "CURATION",
        title: "Narrative Flow",
        description:
          "The virtual curator appears as floating text that fades in and out with scroll position. Curatorial notes are timed to appear after the viewer has had time to absorb the artwork — mimicking the pacing of a guided tour.",
      },
    ],
    gallery: [
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1482160549825-59d1b23cb208?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1561214115-f2f134cc4912?w=1200&h=800&fit=crop",
      "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=1200&h=800&fit=crop",
    ],
    tech: ["WebGL", "Three.js", "Spatial Audio", "GSAP", "Lenis", "Custom Shaders"],
  },
};

interface CaseStudyData {
  title: string;
  subtitle: string;
  year: string;
  category: string;
  heroImage: string;
  accent: string;
  overview: string;
  challenge: string;
  solution: string;
  gallery: string[]; // Horizontal carousel gallery images
  results: { metric: string; label: string }[];
  process: { phase: string; title: string; description: string }[];
  tech: string[];
}

export default function CaseStudy() {
  const [, params] = useRoute("/case-study/:slug");
  const [, setLocation] = useLocation();
  const slug = params?.slug || "";
  const data = CASE_STUDIES[slug];

  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const overviewRef = useRef<HTMLDivElement>(null);
  const challengeRef = useRef<HTMLDivElement>(null);
  const solutionRef = useRef<HTMLDivElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const resultsRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxZoomed, setLightboxZoomed] = useState(false);
  const [linkCopied, setLinkCopied] = useState(false);
  const [sectionProgress, setSectionProgress] = useState<Record<string, number>>({});

  useEffect(() => {
    if (!data || !containerRef.current) return;

    // Cinematic entrance animation after portal transition
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, scale: 1.02 },
      { opacity: 1, scale: 1, duration: 1, ease: "power3.out", delay: 0.2 }
    );

    // Hero 3D Parallax Depth — multiple layers at different speeds
    if (heroRef.current) {
      const bgLayer = heroRef.current.querySelector(".hero-layer-bg");
      const midLayer = heroRef.current.querySelector(".hero-layer-mid");
      const fgLayer = heroRef.current.querySelector(".hero-layer-fg");
      const particles = heroRef.current.querySelectorAll(".hero-particle");

      // Background layer: slow, deep movement (parallax depth)
      if (bgLayer) {
        gsap.fromTo(
          bgLayer,
          { y: 0, rotateX: 0, scale: 1.1 },
          {
            y: 120,
            rotateX: 5,
            scale: 1.2,
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1.5,
            },
          }
        );
      }

      // Mid layer: medium speed
      if (midLayer) {
        gsap.to(midLayer, {
          y: 60,
          opacity: 0.3,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      // Foreground layer: fastest, creates depth separation
      if (fgLayer) {
        gsap.to(fgLayer, {
          y: -80,
          rotateX: -3,
          scale: 0.95,
          opacity: 0,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "70% top",
            scrub: 1,
          },
        });
      }

      // Depth particles: each at different speed for parallax
      particles.forEach((p, i) => {
        const speed = 30 + (i % 5) * 40;
        const direction = i % 2 === 0 ? 1 : -1;
        gsap.to(p, {
          y: speed * direction,
          x: (i % 3 - 1) * 20,
          opacity: 0,
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 0.8 + (i % 3) * 0.3,
          },
        });
      });

      // Hero title entrance: cinematic 3D reveal
      const heroTitle = heroRef.current.querySelector(".hero-title");
      const heroCategory = heroRef.current.querySelector(".hero-category");
      const heroSubtitle = heroRef.current.querySelector(".hero-subtitle");

      if (heroTitle) {
        gsap.fromTo(
          heroTitle,
          { y: 80, rotateX: 15, opacity: 0, filter: "blur(10px)" },
          { y: 0, rotateX: 0, opacity: 1, filter: "blur(0px)", duration: 1.2, delay: 0.3, ease: "power3.out" }
        );
      }
      if (heroCategory) {
        gsap.fromTo(
          heroCategory,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, delay: 0.1, ease: "power2.out" }
        );
      }
      if (heroSubtitle) {
        gsap.fromTo(
          heroSubtitle,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, delay: 0.5, ease: "power2.out" }
        );
      }
    }

    // Overview word reveal
    if (overviewRef.current) {
      const words = overviewRef.current.querySelectorAll(".reveal-word");
      gsap.fromTo(
        words,
        { opacity: 0.15, filter: "blur(4px)" },
        {
          opacity: 1,
          filter: "blur(0px)",
          stagger: 0.03,
          scrollTrigger: {
            trigger: overviewRef.current,
            start: "top 80%",
            end: "bottom 60%",
            scrub: 1,
          },
        }
      );
    }

    // Challenge section slide in
    if (challengeRef.current) {
      gsap.fromTo(
        challengeRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: challengeRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Solution section slide in
    if (solutionRef.current) {
      gsap.fromTo(
        solutionRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: solutionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Results counter animation
    if (resultsRef.current) {
      const items = resultsRef.current.querySelectorAll(".result-item");
      gsap.fromTo(
        items,
        { y: 60, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.15,
          duration: 0.8,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: resultsRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Process timeline
    if (processRef.current) {
      const phases = processRef.current.querySelectorAll(".process-phase");
      phases.forEach((phase, i) => {
        gsap.fromTo(
          phase,
          { x: i % 2 === 0 ? -80 : 80, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            scrollTrigger: {
              trigger: phase,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }

    // Section progress indicators
    const sections = [
      { ref: overviewRef, name: "overview" },
      { ref: challengeRef, name: "challenge" },
      { ref: solutionRef, name: "solution" },
      { ref: galleryRef, name: "gallery" },
      { ref: resultsRef, name: "results" },
      { ref: processRef, name: "process" },
    ];
    sections.forEach(({ ref, name }) => {
      if (ref.current) {
        ScrollTrigger.create({
          trigger: ref.current,
          start: "top 80%",
          end: "bottom 20%",
          onUpdate: (self) => {
            setSectionProgress((prev) => ({ ...prev, [name]: self.progress }));
          },
          onLeaveBack: () => {
            setSectionProgress((prev) => ({ ...prev, [name]: 0 }));
          },
        });
      }
    });

    // Scroll progress
    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => setScrollProgress(self.progress),
    });

    const pageRoot = containerRef.current;
    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger instanceof Element && pageRoot?.contains(t.trigger)) t.kill();
      });
    };
  }, [data]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    if (!lightboxOpen || !data) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
      if (e.key === "ArrowRight") setLightboxIndex((prev) => (prev + 1) % data.gallery.length);
      if (e.key === "ArrowLeft") setLightboxIndex((prev) => (prev - 1 + data.gallery.length) % data.gallery.length);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxOpen, data]);

  if (!data) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project Not Found</h1>
          <button
            onClick={() => setLocation("/work")}
            className="text-purple-400 hover:text-purple-300 underline"
          >
            Back to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-background text-foreground">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 w-full h-1 z-50">
        <div
          className="h-full transition-all duration-100"
          style={{
            width: `${scrollProgress * 100}%`,
            background: `linear-gradient(90deg, ${data.accent}, ${data.accent}88)`,
          }}
        />
      </div>

      {/* Section Progress Indicators — Fixed right sidebar (clickable) */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-3 items-end">
        {[
          { name: "overview", label: "Overview", ref: overviewRef },
          { name: "challenge", label: "Challenge", ref: challengeRef },
          { name: "solution", label: "Solution", ref: solutionRef },
          { name: "gallery", label: "Gallery", ref: galleryRef },
          { name: "results", label: "Results", ref: resultsRef },
          { name: "process", label: "Process", ref: processRef },
        ].map((section) => {
          const progress = sectionProgress[section.name] || 0;
          const isActive = progress > 0 && progress < 1;
          const isComplete = progress >= 1;
          return (
            <button
              key={section.name}
              className="flex items-center gap-2 group cursor-pointer relative"
              onClick={() => {
                section.ref.current?.scrollIntoView({ behavior: "smooth", block: "start" });
                // Smooth background flash on the target section
                if (section.ref.current) {
                  section.ref.current.style.transition = "background-color 0.4s ease-in";
                  section.ref.current.style.backgroundColor = `${data.accent}0d`;
                  setTimeout(() => {
                    if (section.ref.current) {
                      section.ref.current.style.transition = "background-color 0.8s ease-out";
                      section.ref.current.style.backgroundColor = "transparent";
                    }
                  }, 800);
                }
              }}
            >
              {/* Tooltip on hover */}
              <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 translate-x-1 group-hover:translate-x-0">
                <div className="whitespace-nowrap px-2.5 py-1 rounded-md text-[10px] text-white/80 bg-white/[0.08] backdrop-blur-sm border border-white/[0.1] shadow-lg">
                  Ir a {section.label}
                </div>
              </div>
              <span
                className="text-[10px] uppercase tracking-[0.15em] transition-all duration-300 group-hover:opacity-100"
                style={{
                  opacity: isActive ? 1 : isComplete ? 0.6 : 0.25,
                  color: isActive ? data.accent : "currentColor",
                }}
              >
                {section.label}
              </span>
              <div className="relative w-8 h-[3px] rounded-full bg-white/[0.08] overflow-hidden group-hover:bg-white/[0.15] transition-colors">
                <div
                  className="absolute inset-y-0 left-0 rounded-full transition-all duration-200"
                  style={{
                    width: `${progress * 100}%`,
                    background: data.accent,
                    opacity: isActive ? 1 : 0.5,
                  }}
                />
              </div>
            </button>
          );
        })}
      </div>

      {/* Back button */}
      <button
        onClick={() => {
          window.dispatchEvent(
            new CustomEvent("portal-navigate", { detail: { path: "/work" } })
          );
        }}
        className="fixed top-6 left-6 z-40 flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-xl border border-white/10 text-sm text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300"
      >
        <span>←</span>
        <span className="tracking-widest uppercase text-xs">Back to Portfolio</span>
      </button>

      {/* Hero Section — Scroll-driven 3D Parallax Depth */}
      <section ref={heroRef} className="relative h-[80vh] overflow-hidden" style={{ perspective: "1200px" }}>
        {/* Background layer - moves slowest (deep) */}
        <div
          className="hero-layer-bg absolute inset-0"
          style={{ transformStyle: "preserve-3d", willChange: "transform" }}
        >
          <img
            src={data.heroImage}
            alt={data.title}
            className="w-full h-full object-cover scale-110"
          />
        </div>
        {/* Mid layer - gradient overlay with slight parallax */}
        <div
          className="hero-layer-mid absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-background"
          style={{ transformStyle: "preserve-3d", willChange: "transform" }}
        />
        {/* Foreground layer - text moves fastest */}
        <div
          className="hero-layer-fg absolute inset-0 flex flex-col items-center justify-end pb-20"
          style={{ transformStyle: "preserve-3d", willChange: "transform" }}
        >
          <span
            className="text-xs tracking-[0.4em] uppercase mb-4 hero-category"
            style={{ color: data.accent }}
          >
            {data.category} — {data.year}
          </span>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white text-center hero-title">
            {data.title}
          </h1>
          <p className="text-lg text-white/60 mt-4 tracking-wide hero-subtitle">{data.subtitle}</p>
        </div>
        {/* Depth particles floating in hero */}
        <div className="hero-particles absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full hero-particle"
              style={{
                width: `${2 + Math.random() * 4}px`,
                height: `${2 + Math.random() * 4}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: `${data.accent}${Math.floor(30 + Math.random() * 40).toString(16)}`,
                boxShadow: `0 0 ${4 + Math.random() * 8}px ${data.accent}40`,
              }}
            />
          ))}
        </div>
      </section>

      {/* Overview - Word by word reveal */}
      <section ref={overviewRef} className="py-32 px-6 max-w-4xl mx-auto">
        <span
          className="text-xs tracking-[0.3em] uppercase block mb-8"
          style={{ color: data.accent }}
        >
          Overview
        </span>
        <p className="text-3xl md:text-4xl font-light leading-relaxed">
          {data.overview.split(" ").map((word, i) => (
            <span key={i} className="reveal-word inline-block mr-[0.3em]">
              {word}
            </span>
          ))}
        </p>
      </section>

      {/* Challenge */}
      <section ref={challengeRef} className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[200px_1fr] gap-12">
          <div>
            <span
              className="text-xs tracking-[0.3em] uppercase"
              style={{ color: data.accent }}
            >
              The Challenge
            </span>
          </div>
          <div>
            <p className="text-xl text-foreground/80 leading-relaxed">{data.challenge}</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section ref={solutionRef} className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-[200px_1fr] gap-12">
          <div>
            <span
              className="text-xs tracking-[0.3em] uppercase"
              style={{ color: data.accent }}
            >
              The Solution
            </span>
          </div>
          <div>
            <p className="text-xl text-foreground/80 leading-relaxed">{data.solution}</p>
          </div>
        </div>
      </section>

      {/* Gallery Carousel — Drag to scroll, click for lightbox */}
      <section ref={galleryRef} className="py-24 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 mb-8">
          <span
            className="text-xs tracking-[0.3em] uppercase block mb-2"
            style={{ color: data.accent }}
          >
            Project Gallery
          </span>
          <p className="text-foreground/40 text-sm">Drag to scroll • Click to zoom</p>
        </div>
        <div
          className="gallery-track flex gap-4 px-6 cursor-grab active:cursor-grabbing select-none"
          onMouseDown={(e) => {
            const track = e.currentTarget;
            const startX = e.pageX - track.offsetLeft;
            const scrollLeft = track.scrollLeft;
            track.dataset.dragging = "true";
            track.dataset.startX = String(startX);
            track.dataset.scrollLeft = String(scrollLeft);
          }}
          onMouseMove={(e) => {
            const track = e.currentTarget;
            if (track.dataset.dragging !== "true") return;
            e.preventDefault();
            const x = e.pageX - track.offsetLeft;
            const walk = (x - Number(track.dataset.startX)) * 1.5;
            track.scrollLeft = Number(track.dataset.scrollLeft) - walk;
          }}
          onMouseUp={(e) => {
            e.currentTarget.dataset.dragging = "false";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.dataset.dragging = "false";
          }}
          style={{
            overflowX: "auto",
            scrollbarWidth: "none",
            scrollBehavior: "smooth",
          }}
        >
          {data.gallery.map((img, i) => (
            <div
              key={i}
              className="gallery-item flex-shrink-0 w-[400px] md:w-[500px] h-[280px] md:h-[340px] rounded-xl overflow-hidden relative group"
              onClick={(e) => {
                const track = e.currentTarget.parentElement;
                if (track?.dataset.dragging === "true") return;
                setLightboxIndex(i);
                setLightboxOpen(true);
              }}
            >
              <img
                src={img}
                alt={`${data.title} screenshot ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                draggable={false}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10 backdrop-blur-sm rounded-full p-3">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <path d="M21 21l-4.35-4.35" />
                    <path d="M11 8v6M8 11h6" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Gallery scroll indicator */}
        <div className="max-w-5xl mx-auto px-6 mt-4">
          <div className="h-[2px] bg-white/[0.06] rounded-full overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-300"
              style={{
                width: `${Math.max(20, (sectionProgress.gallery || 0) * 100)}%`,
                background: `linear-gradient(90deg, ${data.accent}, ${data.accent}66)`,
              }}
            />
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-xl flex items-center justify-center"
          onClick={() => setLightboxOpen(false)}
          onTouchStart={(e) => {
            const touch = e.touches[0];
            (e.currentTarget as HTMLElement).dataset.touchStartX = String(touch.clientX);
            (e.currentTarget as HTMLElement).dataset.touchStartY = String(touch.clientY);
          }}
          onTouchEnd={(e) => {
            const startX = Number((e.currentTarget as HTMLElement).dataset.touchStartX || 0);
            const startY = Number((e.currentTarget as HTMLElement).dataset.touchStartY || 0);
            const endX = e.changedTouches[0].clientX;
            const endY = e.changedTouches[0].clientY;
            const diffX = endX - startX;
            const diffY = endY - startY;
            if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 50) {
              e.stopPropagation();
              if (diffX < 0) {
                setLightboxIndex((prev) => (prev + 1) % data.gallery.length);
              } else {
                setLightboxIndex((prev) => (prev - 1 + data.gallery.length) % data.gallery.length);
              }
            }
          }}
        >
          {/* Top bar: share + zoom + download + close */}
          <div className="absolute top-6 right-6 flex items-center gap-2 z-10">
            {/* Share / Copy link */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                const url = data.gallery[lightboxIndex];
                if (navigator.share) {
                  navigator.share({ title: `${data.title} - Image ${lightboxIndex + 1}`, url }).catch(() => {});
                } else {
                  navigator.clipboard.writeText(url).then(() => {
                    setLinkCopied(true);
                    setTimeout(() => setLinkCopied(false), 2000);
                  });
                }
              }}
              className="text-white/50 hover:text-white transition-colors p-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08] relative"
              title="Compartir / Copiar enlace"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
              {linkCopied && (
                <span className="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[9px] text-green-400 whitespace-nowrap bg-black/80 px-2 py-0.5 rounded">
                  Enlace copiado
                </span>
              )}
            </button>
            {/* Zoom / Fullscreen */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setLightboxZoomed(!lightboxZoomed);
              }}
              className="text-white/50 hover:text-white transition-colors p-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08]"
              title={lightboxZoomed ? "Salir de zoom" : "Zoom completo"}
            >
              {lightboxZoomed ? (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="4 14 10 14 10 20" />
                  <polyline points="20 10 14 10 14 4" />
                  <line x1="14" y1="10" x2="21" y2="3" />
                  <line x1="3" y1="21" x2="10" y2="14" />
                </svg>
              ) : (
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="15 3 21 3 21 9" />
                  <polyline points="9 21 3 21 3 15" />
                  <line x1="21" y1="3" x2="14" y2="10" />
                  <line x1="3" y1="21" x2="10" y2="14" />
                </svg>
              )}
            </button>
            {/* Download */}
            <a
              href={data.gallery[lightboxIndex]}
              download={`${data.title}-${lightboxIndex + 1}.jpg`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="text-white/50 hover:text-white transition-colors p-1.5 rounded-full bg-white/[0.04] hover:bg-white/[0.1] border border-white/[0.08]"
              title="Descargar imagen"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
            {/* Close */}
            <button
              className="text-white/70 hover:text-white transition-colors p-1.5"
              onClick={() => { setLightboxOpen(false); setLightboxZoomed(false); }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 hidden md:block"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev - 1 + data.gallery.length) % data.gallery.length);
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-white transition-colors p-2 hidden md:block"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev + 1) % data.gallery.length);
            }}
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
          <img
            key={lightboxIndex}
            src={data.gallery[lightboxIndex]}
            alt={`${data.title} full view ${lightboxIndex + 1}`}
            className={`object-contain rounded-lg shadow-2xl animate-in fade-in duration-300 transition-all ease-out ${
              lightboxZoomed
                ? "max-w-none max-h-none w-[95vw] h-[95vh] cursor-zoom-out"
                : "max-w-[90vw] max-h-[85vh] cursor-zoom-in"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              setLightboxZoomed(!lightboxZoomed);
            }}
          />
          {/* Dots + Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
            <div className="flex gap-2">
              {data.gallery.map((_, i) => (
                <button
                  key={i}
                  className="w-2 h-2 rounded-full transition-all duration-300"
                  style={{
                    background: i === lightboxIndex ? data.accent : "rgba(255,255,255,0.3)",
                    transform: i === lightboxIndex ? "scale(1.5)" : "scale(1)",
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setLightboxIndex(i);
                  }}
                />
              ))}
            </div>
            <span className="text-[10px] text-white/30">
              {lightboxIndex + 1} / {data.gallery.length}
            </span>
          </div>
          {/* Keyboard shortcuts hint (desktop) + swipe hint (mobile) */}
          <div className="absolute top-6 left-1/2 -translate-x-1/2 flex items-center gap-4 text-[10px] text-white/30 bg-white/[0.03] backdrop-blur-sm border border-white/[0.06] rounded-full px-4 py-1.5">
            <span className="hidden md:flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/50 font-mono text-[9px]">←</kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/50 font-mono text-[9px]">→</kbd>
              navegar
            </span>
            <span className="hidden md:flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-white/50 font-mono text-[9px]">Esc</kbd>
              cerrar
            </span>
            <span className="flex md:hidden items-center gap-1">
              ← deslizar →
            </span>
          </div>
        </div>
      )}

      {/* Results */}
      <section ref={resultsRef} className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <span
            className="text-xs tracking-[0.3em] uppercase block mb-16 text-center"
            style={{ color: data.accent }}
          >
            Results & Impact
          </span>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {data.results.map((result, i) => (
              <div
                key={i}
                className="result-item text-center p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06]"
              >
                <div
                  className="text-4xl md:text-5xl font-black mb-2"
                  style={{ color: data.accent }}
                >
                  {result.metric}
                </div>
                <div className="text-sm text-foreground/50 tracking-wide uppercase">
                  {result.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section ref={processRef} className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <span
            className="text-xs tracking-[0.3em] uppercase block mb-16 text-center"
            style={{ color: data.accent }}
          >
            Design Process
          </span>
          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute left-1/2 top-0 bottom-0 w-px hidden md:block"
              style={{ background: `${data.accent}33` }}
            />
            {data.process.map((phase, i) => (
              <div
                key={i}
                className={`process-phase relative mb-20 md:w-[45%] ${
                  i % 2 === 0 ? "md:mr-auto md:pr-12" : "md:ml-auto md:pl-12"
                }`}
              >
                {/* Timeline dot */}
                <div
                  className="absolute top-4 hidden md:block w-3 h-3 rounded-full"
                  style={{
                    background: data.accent,
                    boxShadow: `0 0 20px ${data.accent}`,
                    ...(i % 2 === 0
                      ? { right: "-6px" }
                      : { left: "-6px" }),
                  }}
                />
                <span
                  className="text-xs tracking-[0.3em] uppercase block mb-3"
                  style={{ color: data.accent }}
                >
                  {phase.phase}
                </span>
                <h3 className="text-2xl font-bold mb-4">{phase.title}</h3>
                <p className="text-foreground/60 leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-24 px-6 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto">
          <span
            className="text-xs tracking-[0.3em] uppercase block mb-8 text-center"
            style={{ color: data.accent }}
          >
            Technology Stack
          </span>
          <div className="flex flex-wrap justify-center gap-3">
            {data.tech.map((t, i) => (
              <span
                key={i}
                className="px-5 py-2.5 rounded-full text-sm border border-white/10 bg-white/[0.03] text-foreground/70 hover:border-white/20 hover:text-foreground transition-all duration-300"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Background accent */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full blur-[150px] opacity-[0.06]"
          style={{ background: `radial-gradient(circle, ${data.accent}, transparent)` }}
        />
        <div className="max-w-2xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span
              className="text-[11px] uppercase tracking-[0.4em] mb-4 block"
              style={{ color: data.accent }}
            >
              Let's Work Together
            </span>
            <h2
              className="text-4xl md:text-5xl font-bold text-foreground tracking-tight mb-4"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              Start Your Project
            </h2>
            <p className="text-foreground/40 text-lg">
              Ready to create something extraordinary? Let's talk.
            </p>
          </div>
          <ContactForm accent={data.accent} />
        </div>
      </section>

      {/* Navigation */}
      <section className="py-24 px-6 border-t border-white/[0.06]">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <button
            onClick={() => {
              window.dispatchEvent(
                new CustomEvent("portal-navigate", { detail: { path: "/work" } })
              );
            }}
            className="group flex items-center gap-3 text-foreground/50 hover:text-foreground transition-colors"
          >
            <span className="text-2xl group-hover:-translate-x-2 transition-transform">←</span>
            <span className="text-sm tracking-widest uppercase">All Projects</span>
          </button>
          <button
            onClick={() => {
              const slugs = Object.keys(CASE_STUDIES);
              const currentIdx = slugs.indexOf(slug);
              const nextIdx = (currentIdx + 1) % slugs.length;
              window.dispatchEvent(
                new CustomEvent("portal-navigate", {
                  detail: { path: `/case-study/${slugs[nextIdx]}` },
                })
              );
            }}
            className="group flex items-center gap-3 text-foreground/50 hover:text-foreground transition-colors"
          >
            <span className="text-sm tracking-widest uppercase">Next Project</span>
            <span className="text-2xl group-hover:translate-x-2 transition-transform">→</span>
          </button>
        </div>
      </section>
    </div>
  );
}

export { CASE_STUDIES };
