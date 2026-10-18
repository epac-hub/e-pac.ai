import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, AudioLines, BriefcaseBusiness, Check, Circle, Cpu, Crosshair, Diamond, Expand, Hospital, Landmark, Layers3, Menu, MousePointer2, MoveHorizontal, Orbit, Pause, Play, Sparkles, X } from 'lucide-react';
import { AudioControl, CustomCursor, MagneticLink } from './components/InteractionControls';
import { useMotion } from './hooks/useMotion';
import { usePageMotion } from './hooks/usePageMotion';
import { ProductionDialog, productionStages } from './components/ProductionDialog';

const CosmicBackground = lazy(() => import('./components/CosmicScene'));
const OrbitalObject = lazy(() => import('./components/CosmicScene').then((module) => ({ default: module.OrbitalObject })));
const media = (name: string) => `${import.meta.env.BASE_URL}media/${name}`;

const focusAreas = [
  { number: '01', title: 'Healthcare.', subtitle: 'Keep people at the center.', icon: Hospital, theme: 'health', body: 'Community pharmacy, access to care, and the practical realities of healthcare delivery.', tags: ['Community pharmacy', 'Access', 'Operations'] },
  { number: '02', title: 'Enterprise.', subtitle: 'Turn direction into discipline.', icon: BriefcaseBusiness, theme: 'enterprise', body: 'Business development, operating systems, internal controls, and responsible execution.', tags: ['Leadership', 'Internal controls', 'Business development'] },
  { number: '03', title: 'Public policy.', subtitle: 'Bring the operator’s perspective.', icon: Landmark, theme: 'policy', body: 'Healthcare policy and advocacy informed by the realities of providers and communities in Puerto Rico.', tags: ['Healthcare policy', 'Advocacy', 'Puerto Rico'] },
  { number: '04', title: 'Technology.', subtitle: 'Make intelligence useful.', icon: Cpu, theme: 'technology', body: 'Automation, connected workflows, and tools that support better oversight and everyday decisions.', tags: ['Automation', 'Connected systems', 'Oversight'] },
];

const approach = [
  { number: '01', title: 'Understand the system.', text: 'Start with context. Look at the people, processes, evidence, and constraints behind the question.' },
  { number: '02', title: 'Connect the right ideas.', text: 'Bring healthcare, business, policy, and technology into the same conversation.' },
  { number: '03', title: 'Build with accountability.', text: 'Translate direction into practical work. Keep verification, clear responsibilities, and people in view.' },
];

const features = [
  { icon: MousePointer2, title: 'Futuristic Cursor', text: 'A precise dot, an orbital ring, and a glow trail that respond to what you explore.', tech: 'DIFFERENCE BLEND · STATE-AWARE' },
  { icon: Diamond, title: 'Magnetic Buttons', text: 'Move toward a button. It follows your intent, then springs gently back into place.', tech: 'GSAP · ELASTIC MOTION' },
  { icon: Orbit, title: '3D WebGL Scene', text: 'A distorted icosahedron, cinematic light, and orbital geometry that follow your cursor.', tech: 'THREE.JS · REACT THREE FIBER' },
  { icon: Sparkles, title: 'Particle System', text: '2,000 stars stream toward you as you scroll, creating a quiet sense of depth.', tech: 'GPU POINTS · SCROLL-RESPONSIVE' },
  { icon: Layers3, title: 'GLSL Shader BG', text: 'An evolving simplex-noise gradient gives the darkness a subtle, living texture.', tech: 'CUSTOM GLSL · SIMPLEX NOISE' },
  { icon: Expand, title: 'Portal Transitions', text: 'Circular reveals open the next section, like passing through a new perspective.', tech: 'CLIP-PATH · SCROLLTRIGGER' },
  { icon: AudioLines, title: 'Ambient Audio', text: 'An opt-in deep-space soundtrack. Fade in, settle into the experience, and fade out.', tech: 'AI-GENERATED LOOP · SOUND CONTROL' },
  { icon: MoveHorizontal, title: 'Horizontal Scroll', text: 'A vertical gesture moves you horizontally through the four areas of focus.', tech: 'PINNED PANELS · LENIS' },
  { icon: Crosshair, title: 'Pinned Steps', text: 'The perspective stays in place while a numbered sequence unfolds with your scroll.', tech: 'GSAP TIMELINE · SCROLL STORY' },
];

export function Brand({ large = false }: { large?: boolean }) {
  return <span className={`brand ${large ? 'brand-large' : ''}`}><svg className="brand-mark" viewBox="0 0 40 40" aria-hidden="true"><ellipse cx="20" cy="20" rx="18" ry="8" transform="rotate(-35 20 20)" fill="none" stroke="currentColor" strokeWidth="1" /><path d="M20 6 24 16 34 20 24 24 20 34 16 24 6 20 16 16Z" fill="currentColor" /></svg><span className="brand-word">ePAC<span className="brand-dot">.</span></span></span>;
}

function FocusGraphic({ theme }: { theme: string }) {
  return <div className={`focus-graphic ${theme}`} aria-hidden="true">
    <div className="graphic-grid" />
    <div className="graphic-orbit orbit-one" /><div className="graphic-orbit orbit-two" /><div className="graphic-orbit orbit-three" />
    <div className="graphic-core"><span /><span /><span /></div>
    <i className="node node-one" /><i className="node node-two" /><i className="node node-three" />
    <span className="graphic-caption">ePAC / {theme.toUpperCase()}</span>
  </div>;
}

function AmbientVideo({ name, poster, className, enabled }: { name: string; poster: string; className: string; enabled: boolean }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (enabled && entry.isIntersecting && !document.hidden) video.play().catch(() => {});
      else video.pause();
    }, { threshold: 0.05 });
    const visibility = () => {
      if (document.hidden || !enabled) video.pause();
      else if (video.getBoundingClientRect().bottom > 0 && video.getBoundingClientRect().top < window.innerHeight) video.play().catch(() => {});
    };
    observer.observe(video);
    document.addEventListener('visibilitychange', visibility);
    visibility();
    return () => { observer.disconnect(); document.removeEventListener('visibilitychange', visibility); video.pause(); };
  }, [enabled]);
  return <video ref={ref} className={className} muted loop playsInline preload="none" poster={media(poster)} aria-hidden="true" tabIndex={-1} {...(enabled ? { src: media(name) } : {})} />;
}

export default function App() {
  const container = useRef<HTMLDivElement>(null);
  const { enabled, desktop, hydrated, toggle, reduced } = useMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedStage, setSelectedStage] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [focusProgress, setFocusProgress] = useState(0);
  usePageMotion(container, enabled, desktop, setActiveStep, setFocusProgress, selectedStage !== null || menuOpen);

  useEffect(() => {
    const close = (event: KeyboardEvent) => { if (event.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', close);
    return () => window.removeEventListener('keydown', close);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return <div ref={container} className={`site ${enabled ? 'motion-enabled' : 'motion-disabled'}`}>
    <a className="skip-link" href="#main">Skip to content</a>
    {hydrated && enabled && desktop && <Suspense fallback={null}><CosmicBackground enabled={enabled} /></Suspense>}
    <div className="static-stars" aria-hidden="true" />
    <CustomCursor enabled={enabled && desktop} />

    <header className="site-header">
      <a href="#top" className="brand-link" aria-label="ePAC — back to top" onClick={closeMenu}><Brand /></a>
      <nav className={`main-nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation" id="main-nav">
        <a href="#perspective" onClick={closeMenu}>Perspective</a>
        <a href="#focus" onClick={closeMenu}>Focus</a>
        <a href="#approach" onClick={closeMenu}>Approach</a>
        <a href="#experience" onClick={closeMenu}>Experience</a>
      </nav>
      <div className="header-actions"><MagneticLink href="#connect" className="nav-connect" enabled={enabled && desktop}>Let’s connect <ArrowUpRight size={15} aria-hidden="true" /></MagneticLink>
        <button type="button" className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={menuOpen} aria-controls="main-nav" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
      </div>
    </header>

    <main id="main">
      <section id="top" className="hero">
        <div className="hero-atmosphere" aria-hidden="true"><AmbientVideo name="seedance.mp4" poster="hero-poster.jpg" className="hero-video" enabled={enabled && desktop} /></div>
        <div className="hero-orbit-wrap" aria-hidden="true">
          <div className="orbital-fallback"><div className="fallback-sphere" /><div className="fallback-ring" /><div className="fallback-ring second" /></div>
          {hydrated && enabled && desktop && <Suspense fallback={null}><OrbitalObject enabled={enabled} /></Suspense>}
          <span className="orbital-coordinate coordinate-top"><span className="small-cross">+</span> INDEPENDENT PERSPECTIVE</span>
          <span className="orbital-coordinate coordinate-bottom">HEALTHCARE × ENTERPRISE × POLICY</span>
        </div>
        <div className="hero-content">
          <p className="eyebrow hero-intro"><span className="status-dot" /> GROUNDED IN PUERTO RICO. LOOKING AHEAD.</p>
          <h1 className="hero-title"><span className="hero-line">Intelligence.</span><span className="hero-line hero-line-accent">With purpose<span className="title-dot">.</span></span></h1>
          <p className="hero-description">Connecting healthcare, enterprise, public policy, and technology with a practical, people-centered perspective.</p>
          <div className="hero-cta"><MagneticLink href="#focus" className="button button-primary" enabled={enabled && desktop}>Explore the perspective <ArrowUpRight size={19} aria-hidden="true" /></MagneticLink><a href="#perspective" className="text-link">Meet Elliot <ArrowRight size={17} aria-hidden="true" /></a></div>
          <div className="hero-byline"><span className="byline-line" /><span>ELLIOT PACHECO BEAUCHAMP</span></div>
        </div>
        <div className="hero-bottom"><a href="#perspective" className="scroll-hint"><span className="scroll-icon"><ArrowDown size={14} aria-hidden="true" /></span>SCROLL TO DISCOVER</a><p>Not just what’s next.<br /><span>What matters.</span></p><div className="hero-index"><span>01</span> / 06</div></div>
      </section>

      <div className="discipline-strip" aria-label="Professional focus"><span>HEALTHCARE</span><i /><span>ENTERPRISE</span><i /><span>PUBLIC POLICY</span><i /><span>TECHNOLOGY</span><i /><span className="strip-location">PUERTO RICO, CONNECTED.</span></div>

      <section id="perspective" className="perspective section-shell portal-section">
        <div className="section-kicker"><span className="eyebrow">01 / THE PERSPECTIVE</span><span className="small-cross" aria-hidden="true">+</span></div>
        <div className="perspective-grid"><h2 className="section-title reveal">At the intersection<br />of ideas <span className="muted-word">and action.</span></h2><div className="perspective-copy reveal"><p className="lead">A professional perspective shaped by the realities of healthcare and business.</p><p>Elliot Pacheco Beauchamp is a Puerto Rico-based healthcare entrepreneur, community-pharmacy owner, and public-policy advocate. His work connects operating experience with business development, compliance, automation, and institutional leadership.</p><a className="text-link" href="#approach">A clear approach <ArrowUpRight size={17} aria-hidden="true" /></a><p className="source-note">Professional background provided by Elliot Pacheco Beauchamp.</p></div></div>
        <div className="perspective-foot"><span className="eyebrow">THE THROUGH-LINE</span><p>Practical context. Clear direction. Responsible execution.</p><Orbit size={31} strokeWidth={1} aria-hidden="true" /></div>
      </section>

      <section id="focus" className="focus-section portal-section">
        <div className="section-shell focus-heading"><div><p className="eyebrow">02 / AREAS OF FOCUS</p><h2 className="section-title">Different disciplines.<br /><span className="muted-word">A connected perspective.</span></h2></div><div className="focus-indicator"><span>EXPLORE THE INTERSECTIONS</span><MoveHorizontal size={24} strokeWidth={1} aria-hidden="true" /></div></div>
        <div className="focus-viewport"><div className="focus-track">{focusAreas.map((area) => <article key={area.number} className={`focus-panel ${area.theme}`}><FocusGraphic theme={area.theme} /><div className="focus-panel-content"><div className="focus-panel-top"><span className="eyebrow">{area.number} / FOCUS</span><area.icon size={22} strokeWidth={1} aria-hidden="true" /></div><h3>{area.title}</h3><p className="focus-subtitle">{area.subtitle}</p><p className="focus-body">{area.body}</p><div className="focus-tags">{area.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div></div>
        <div className="section-shell focus-bottom"><span className="eyebrow">FOUR LENSES. ONE POINT OF VIEW.</span><div className="focus-progress" aria-hidden="true"><span style={{ transform: `scaleX(${Math.max(0.08, focusProgress)})` }} /></div><span className="eyebrow focus-count">{String(Math.min(4, Math.floor(focusProgress * 3) + 1)).padStart(2, '0')} / 04</span></div>
      </section>

      <section id="approach" className="approach section-shell portal-section">
        <div className="approach-scene"><AmbientVideo name="higgsfield.mp4" poster="narrative-poster.webp" className="narrative-video" enabled={enabled && desktop} /></div>
        <div className="approach-left"><p className="eyebrow">03 / THE APPROACH</p><h2 className="section-title">A clear view.<br /><span className="accent-word">A considered<br />next step.</span></h2><p className="approach-intro">Complex questions deserve more than a quick answer. They deserve context and care.</p><div className="step-orbit" aria-hidden="true"><div /><span>{approach[activeStep].number}</span><i /></div></div>
        <div className="approach-list">{approach.map((step, index) => <article key={step.number} className={`approach-step ${activeStep === index ? 'step-active' : ''}`}><div className="step-label"><span>{step.number}</span><span className="step-dot" /></div><div><h3>{step.title}</h3><p>{step.text}</p></div></article>)}</div>
      </section>

      <section id="production" className="production section-shell portal-section">
        <div className="section-kicker"><span className="eyebrow">04 / BEHIND THE EXPERIENCE</span><span className="eyebrow production-note">CRAFTED, NOT JUST ASSEMBLED.</span></div>
        <div className="production-heading"><h2 className="section-title">Technology with<br /><span className="muted-word">creative direction.</span></h2><p>The making of this page brings cinematic media and interactive design together. Here’s what each tool contributes.</p></div>
        <div className="production-grid">{productionStages.map((stage, index) => <button key={stage.name} type="button" className="production-card" onClick={() => setSelectedStage(index)} aria-haspopup="dialog" aria-label={`Explore ${stage.name}: ${stage.role}`}><div className="production-card-top"><span className="eyebrow">CREATIVE PROCESS</span><span className="production-number">0{index + 1}</span></div><span className="production-name">{stage.name}</span><span className="production-role">{stage.role}</span><span className="production-cta">Explore the process <ArrowUpRight size={19} aria-hidden="true" /></span></button>)}</div>
        <p className="production-disclosure">Production tools, not live generators. This site displays prepared media; provider credentials remain outside the public page.</p>
      </section>

      <section id="experience" className="experience section-shell portal-section">
        <div className="experience-heading"><div><p className="eyebrow">05 / THE INTERACTIVE LAYER</p><h2 className="section-title">Every detail.<br /><span className="accent-word">Part of the experience.</span></h2></div><div className="experience-note"><span className="status-dot" /><p>Explore with your cursor.<br />Move through the page.<br />Sound is your choice.</p></div></div>
        <div className="feature-grid">{features.map((feature, index) => <article className="feature-card reveal" key={feature.title}><div className="feature-top"><feature.icon size={25} strokeWidth={1.2} aria-hidden="true" /><span>0{index + 1}</span></div><h3>{feature.title}</h3><p>{feature.text}</p><span className="feature-tech">{feature.tech}</span></article>)}</div>
        <div className="experience-access"><Check size={17} aria-hidden="true" /><p>Designed to adapt. Touch screens and reduced-motion preferences receive a lighter, readable experience.</p></div>
      </section>

      <section id="connect" className="connect section-shell portal-section">
        <div className="connect-orbit" aria-hidden="true"><Circle /><Circle /></div><p className="eyebrow">06 / THE NEXT CONVERSATION</p><h2>Ideas start<br />with a <span>conversation.</span></h2><p className="connect-description">Healthcare. Enterprise. Public policy. Technology.<br />Let’s find the connections that matter.</p><MagneticLink href="mailto:elliotpac@gmail.com?subject=ePAC%20%E2%80%94%20Let%E2%80%99s%20connect" className="button button-primary connect-button" enabled={enabled && desktop}>Let’s connect <ArrowUpRight size={21} aria-hidden="true" /></MagneticLink><a className="contact-email" href="mailto:elliotpac@gmail.com">elliotpac@gmail.com</a>
      </section>
    </main>

    <footer className="site-footer"><div className="footer-main"><a href="#top" className="brand-link" aria-label="ePAC — back to top"><Brand /></a><p>INTELLIGENCE. WITH PURPOSE.</p><a href="#top" className="footer-top">Back to top <ArrowUpRight size={16} aria-hidden="true" /></a></div><div className="footer-bottom"><span>© 2026 ePAC. All rights reserved.</span><span>ELLIOT PACHECO BEAUCHAMP · PUERTO RICO</span><button className="motion-inline" type="button" onClick={toggle} aria-pressed={enabled}>{enabled ? 'Reduce motion' : 'Enable motion'}</button></div></footer>

    <div className="experience-controls"><AudioControl /><span className="control-divider" /><button type="button" className="motion-control" aria-label={enabled ? 'Pause visual motion' : 'Enable visual motion'} aria-pressed={enabled} onClick={toggle}>{enabled ? <Pause size={13} aria-hidden="true" /> : <Play size={13} aria-hidden="true" />}<span>{enabled ? 'Motion on' : reduced ? 'Reduced motion' : 'Motion off'}</span></button></div>
    <ProductionDialog stage={selectedStage === null ? null : productionStages[selectedStage]} onClose={() => setSelectedStage(null)} />
  </div>;
}
