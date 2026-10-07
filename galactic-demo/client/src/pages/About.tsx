import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { useLocation } from "wouter";
import { useTheme } from "@/contexts/ThemeContext";

// Magnetic Input Component
function MagneticInput({ label, type = "text", placeholder = "", isTextarea = false }: { label: string; type?: string; placeholder?: string; isTextarea?: boolean }) {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  const labelRef = useRef<HTMLLabelElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const [focused, setFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Subtle magnetic pull on the container
    const moveX = ((x - centerX) / centerX) * 3;
    const moveY = ((y - centerY) / centerY) * 2;
    gsap.to(container, { x: moveX, y: moveY, duration: 0.3, ease: "power2.out" });

    // Move glow to cursor position
    if (glowRef.current) {
      gsap.to(glowRef.current, { x: x - centerX, y: y - centerY, opacity: 0.6, duration: 0.2 });
    }
  };

  const handleMouseLeave = () => {
    if (containerRef.current) {
      gsap.to(containerRef.current, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.4)" });
    }
    if (glowRef.current) {
      gsap.to(glowRef.current, { opacity: 0, duration: 0.3 });
    }
  };

  const handleFocus = () => {
    setFocused(true);
    if (containerRef.current) {
      gsap.to(containerRef.current, { scale: 1.02, duration: 0.3, ease: "power2.out" });
    }
    if (labelRef.current) {
      gsap.to(labelRef.current, { y: -24, scale: 0.85, color: "#8b5cf6", duration: 0.3, ease: "power2.out" });
    }
  };

  const handleBlur = () => {
    setFocused(false);
    if (containerRef.current) {
      gsap.to(containerRef.current, { scale: 1, duration: 0.3, ease: "power2.out" });
    }
    if (!hasValue && labelRef.current) {
      gsap.to(labelRef.current, { y: 0, scale: 1, color: theme === "light" ? "#554b68" : "rgba(255,255,255,0.4)", duration: 0.3, ease: "power2.out" });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setHasValue(e.target.value.length > 0);
  };

  const InputTag = isTextarea ? "textarea" : "input";

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative overflow-hidden border transition-all duration-500 ${
        focused ? "border-[#8b5cf6] bg-white/[0.04]" : "border-white/[0.08] bg-white/[0.02]"
      }`}
      style={{ willChange: "transform" }}
    >
      {/* Internal glow */}
      <div
        ref={glowRef}
        className="absolute top-1/2 left-1/2 w-40 h-40 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none opacity-0"
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.2) 0%, transparent 70%)" }}
      />
      {/* Animated border glow */}
      {focused && (
        <div className="absolute inset-0 pointer-events-none" style={{
          background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.1), transparent)",
          animation: "shimmer 2s infinite",
        }} />
      )}
      <label
        ref={labelRef}
        className="absolute left-4 top-4 text-white/40 text-sm uppercase tracking-[0.15em] pointer-events-none origin-left transition-all"
        style={{ color: (focused || hasValue) ? "#8b5cf6" : theme === "light" ? "#554b68" : "rgba(255,255,255,0.4)" }}
      >
        {label}
      </label>
      {isTextarea ? (
        <textarea
          ref={inputRef as React.RefObject<HTMLTextAreaElement>}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder={focused ? placeholder : ""}
          className="w-full bg-transparent text-white pt-8 pb-4 px-4 text-sm outline-none resize-none min-h-[120px] relative z-10"
        />
      ) : (
        <input
          ref={inputRef as React.RefObject<HTMLInputElement>}
          type={type}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          placeholder={focused ? placeholder : ""}
          className="w-full bg-transparent text-white pt-8 pb-4 px-4 text-sm outline-none relative z-10"
        />
      )}
    </div>
  );
}

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [, setLocation] = useLocation();
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { clipPath: "circle(0% at 50% 50%)", opacity: 0 },
        { clipPath: "circle(100% at 50% 50%)", opacity: 1, duration: 1, ease: "power3.out" }
      );
    }

    // Stagger entrance for form fields
    gsap.from(".form-field", {
      y: 40,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      ease: "power3.out",
      delay: 0.5,
    });
  }, []);

  const navigateWithPortal = (path: string) => {
    if (!containerRef.current) { setLocation(path); return; }
    gsap.to(containerRef.current, {
      clipPath: "circle(0% at 50% 50%)",
      opacity: 0,
      duration: 0.6,
      ease: "power3.in",
      onComplete: () => setLocation(path),
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    // Animate success
    gsap.from(".success-msg", { scale: 0.8, opacity: 0, duration: 0.5, ease: "back.out(1.7)" });
  };

  return (
    <div
      ref={containerRef}
      className="about-theme min-h-screen bg-background text-foreground px-6 py-24 relative overflow-hidden"
      style={{ clipPath: "circle(0% at 50% 50%)" }}
    >
      {/* Ambient background */}
      <div className="about-background absolute inset-0 bg-gradient-to-br from-[#0a0015] via-[#0d0020] to-[#050010]" />
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 30% 40%, rgba(139,92,246,0.15) 0%, transparent 50%),
                           radial-gradient(circle at 70% 60%, rgba(139,92,246,0.1) 0%, transparent 50%)`,
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[#8b5cf6] text-sm uppercase tracking-[0.3em] mb-6 block">About This Project</span>
          <h1
            className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-8"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            THE <span className="text-[#8b5cf6]">PHILOSOPHY</span>
          </h1>
          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto leading-relaxed">
            Award-winning websites are not just coded — they are <em>directed</em>. Every animation guides the eye, 
            every interaction delights the user, and every pixel tells a story.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {[
            { num: "01", title: "GSAP Mastery", desc: "ScrollTrigger, SplitText, Flip — the animation engine powering 90%+ of Awwwards winners." },
            { num: "02", title: "3D & WebGL", desc: "Three.js, React Three Fiber, GLSL shaders — immersive 3D experiences in the browser." },
            { num: "03", title: "Multi-Sensory", desc: "Ambient audio, UI sound effects, haptic feedback — engaging all senses." },
          ].map((item) => (
            <div key={item.num} className="text-left border border-white/[0.06] p-6 bg-white/[0.02] backdrop-blur-sm hover:border-[#8b5cf6]/20 transition-all duration-500">
              <span className="text-[#8b5cf6] text-xs tracking-[0.3em] mb-3 block">{item.num}</span>
              <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                {item.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Interactive Contact Form */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="text-center mb-12">
            <span className="text-[#8b5cf6] text-sm uppercase tracking-[0.3em] mb-4 block">Get In Touch</span>
            <h2
              className="text-3xl md:text-5xl font-bold text-white tracking-tighter"
              style={{ fontFamily: "'Space Grotesk', sans-serif" }}
            >
              LET'S <span className="text-[#8b5cf6]">CONNECT</span>
            </h2>
          </div>

          {!formSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-field">
                  <MagneticInput label="Name" placeholder="Your name..." />
                </div>
                <div className="form-field">
                  <MagneticInput label="Email" type="email" placeholder="your@email.com" />
                </div>
              </div>
              <div className="form-field">
                <MagneticInput label="Subject" placeholder="What's this about?" />
              </div>
              <div className="form-field">
                <MagneticInput label="Message" placeholder="Tell me about your project..." isTextarea />
              </div>
              <div className="form-field text-center pt-4">
                <button
                  type="submit"
                  className="group relative px-12 py-5 border border-[#8b5cf6] text-white text-sm uppercase tracking-[0.2em] overflow-hidden hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all duration-500"
                >
                  <span className="relative z-10">Send Message →</span>
                  <div className="absolute inset-0 bg-[#8b5cf6]/0 group-hover:bg-[#8b5cf6]/20 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#8b5cf6] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                </button>
              </div>
            </form>
          ) : (
            <div className="success-msg text-center py-16 border border-[#8b5cf6]/20 bg-[#8b5cf6]/5">
              <div className="text-4xl mb-4">✦</div>
              <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Message Sent
              </h3>
              <p className="text-white/50">This is a demo form — no data was transmitted.</p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex gap-4 sm:gap-6 justify-center flex-wrap">
          <button
            onClick={() => navigateWithPortal("/")}
            className="px-8 py-4 border border-[#8b5cf6]/50 text-white text-sm uppercase tracking-[0.2em] hover:bg-[#8b5cf6]/10 hover:border-[#8b5cf6] transition-all duration-300"
          >
            ← Back to Demo
          </button>
        </div>
      </div>

      {/* Shimmer keyframe */}
      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
