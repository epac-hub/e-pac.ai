import { lazy, Suspense, useEffect, useRef, useState } from 'react';
import { ArrowDown, ArrowRight, ArrowUpRight, Menu, Pause, Play, X } from 'lucide-react';
import { AudioControl, CustomCursor, MagneticLink } from './components/InteractionControls';
import CinematicVideo from './components/CinematicVideo';
import { useMotion } from './hooks/useMotion';
import { usePageMotion } from './hooks/usePageMotion';
import { ProductionDialog, productionStages } from './components/ProductionDialog';

const CosmicBackground = lazy(() => import('./components/CosmicScene'));
const OrbitalObject = lazy(() => import('./components/CosmicScene').then((module) => ({ default: module.OrbitalObject })));
const media = (name: string) => `${import.meta.env.BASE_URL}media/${name}`;

const focusAreas = [
  { number: '01', title: 'Healthcare', text: 'Community pharmacy, access to care, and the realities of healthcare delivery.', detail: 'People & care' },
  { number: '02', title: 'Enterprise', text: 'Business development, operations, and the discipline behind responsible execution.', detail: 'Leadership & operations' },
  { number: '03', title: 'Public policy', text: 'Healthcare advocacy informed by providers, communities, and Puerto Rico.', detail: 'Context & advocacy' },
  { number: '04', title: 'Technology', text: 'Automation and connected tools that support oversight and everyday decisions.', detail: 'Systems & intelligence' },
];

const approach = [
  { number: '01', title: 'Understand.', text: 'Start with the people, evidence, and constraints behind the question.' },
  { number: '02', title: 'Connect.', text: 'Bring healthcare, business, policy, and technology into the same conversation.' },
  { number: '03', title: 'Build.', text: 'Turn direction into practical work, with clear responsibilities and verification.' },
];

export function Brand() {
  return <span className="brand">ePAC<span className="brand-dot">.</span></span>;
}

export default function App() {
  const container = useRef<HTMLDivElement>(null);
  const { enabled, desktop, hydrated, reduced, toggle } = useMotion();
  const [menuOpen, setMenuOpen] = useState(false);
  const [lightHeader, setLightHeader] = useState(false);
  const [selectedStage, setSelectedStage] = useState<number | null>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [focusProgress, setFocusProgress] = useState(0);
  usePageMotion(container, enabled, desktop, setActiveStep, setFocusProgress, menuOpen || selectedStage !== null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const light = Array.from(document.querySelectorAll<HTMLElement>('[data-surface="light"]'))
        .some((section) => {
          const bounds = section.getBoundingClientRect();
          return bounds.top <= 45 && bounds.bottom > 45;
        });
      setLightHeader(light);
    };
    const schedule = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    const escape = (event: KeyboardEvent) => { if (event.key === 'Escape') setMenuOpen(false); };
    update();
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    window.addEventListener('keydown', escape);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      window.removeEventListener('keydown', escape);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div ref={container} className={`site ${enabled ? 'motion-enabled' : 'motion-disabled'}`}>
      <a className="skip-link" href="#main">Skip to content</a>
      <CustomCursor enabled={enabled && desktop} />

      <header className={`site-header ${lightHeader ? 'header-light' : 'header-dark'}`}>
        <a href="#top" className="brand-link" aria-label="ePAC — back to top" onClick={closeMenu}><Brand /></a>
        <span className="header-location">Puerto Rico</span>
        <nav className={`main-nav ${menuOpen ? 'nav-open' : ''}`} id="main-nav" aria-label="Main navigation">
          <a href="#perspective" onClick={closeMenu}>About</a>
          <a href="#focus" onClick={closeMenu}>Focus</a>
          <MagneticLink href="#connect" className="nav-contact" enabled={enabled && desktop} onClick={closeMenu}>Contact <ArrowUpRight size={14} aria-hidden="true" /></MagneticLink>
        </nav>
        <button type="button" className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="main-nav" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}>
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </header>

      <main id="main">
        <section id="top" className="hero" aria-label="ePAC introduction">
          <CinematicVideo src={media('epac-cinematic.mp4')} webm={media('epac-cinematic.webm')} poster={media('epac-cinematic-poster.webp')} enabled={enabled} priority className="hero-film" />
          <div className="hero-shade" aria-hidden="true" />
          <div className="hero-content">
            <p className="hero-name">Elliot Pacheco Beauchamp</p>
            <h1 className="hero-title">ePAC<span>.</span></h1>
            <p className="hero-copy">Healthcare. Enterprise. Public policy.</p>
            <div className="hero-actions">
              <MagneticLink href="#perspective" className="hero-explore" enabled={enabled && desktop}>Explore the perspective <ArrowDown size={17} aria-hidden="true" /></MagneticLink>
            </div>
          </div>
          <div className="hero-bottom"><span>Intelligence. With purpose.</span><span className="hero-bottom-right">Scroll to explore <ArrowDown size={13} aria-hidden="true" /></span></div>
        </section>

        <section id="perspective" className="perspective light-section" data-surface="light">
          <div className="section-shell profile-grid">
            <div className="profile-heading"><p className="section-label">The perspective</p><h2 className="section-title reveal">An operator’s<br />perspective.</h2></div>
            <div className="profile-copy reveal">
              <p className="profile-lead">Elliot Pacheco Beauchamp</p>
              <p>A Puerto Rico-based healthcare entrepreneur, community-pharmacy owner, and public-policy advocate.</p>
              <p>His work brings together business operations, healthcare policy, compliance, and technology.</p>
              <a href="#focus" className="inline-link">Four connected areas <ArrowRight size={17} aria-hidden="true" /></a>
              <p className="source-note">Professional background provided by Elliot Pacheco Beauchamp.</p>
            </div>
          </div>
        </section>

        <section id="focus" className="focus-section dark-section portal-scene" aria-label="Professional areas of focus">
          <div className="portal-layer focus-portal" aria-hidden="true" />
          {hydrated && enabled && desktop && <Suspense fallback={null}><CosmicBackground enabled /></Suspense>}
          <div className="section-shell focus-heading"><p className="section-label">Areas of focus</p><h2 className="section-title">Different disciplines.<br /><span>One perspective.</span></h2></div>
          <div className="focus-viewport"><div className="focus-track">
            {focusAreas.map((area) => (
              <article className="focus-panel" key={area.number}>
                <div className="focus-panel-top"><span>{area.number}</span><span>{area.detail}</span></div>
                <h3>{area.title}<span>.</span></h3>
                <p>{area.text}</p>
                <ArrowUpRight className="area-arrow" size={25} strokeWidth={1} aria-hidden="true" />
              </article>
            ))}
          </div></div>
          <div className="section-shell focus-bottom"><span>Healthcare · Enterprise · Policy · Technology</span><div className="focus-progress" aria-hidden="true"><span style={{ transform: `scaleX(${Math.max(0.12, focusProgress)})` }} /></div><span className="focus-count">{String(Math.min(4, Math.floor(focusProgress * 3) + 1)).padStart(2, '0')} / 04</span></div>
        </section>

        <section id="approach" className="approach dark-section portal-scene">
          <div className="portal-layer approach-portal" aria-hidden="true" />
          <div className="section-shell approach-grid">
            <div className="approach-title"><p className="section-label">The approach</p><h2 className="section-title">Context first.<br /><span>Action next.</span></h2>
              <div className="approach-visual">
                <CinematicVideo src={media('higgsfield.mp4')} webm={media('higgsfield.webm')} poster={media('higgsfield-poster.webp')} enabled={enabled} className="narrative-film" />
                <div className="orbital-fallback"><div className="fallback-orbit" /><div className="fallback-core" /></div>
                {hydrated && enabled && desktop && <Suspense fallback={null}><OrbitalObject enabled /></Suspense>}
              </div>
            </div>
            <div className="approach-list">
              <p className="current-step" aria-live="off">{approach[activeStep].number} / 03</p>
              {approach.map((step, index) => (
                <article key={step.number} className={`approach-step ${activeStep === index ? 'step-active' : ''}`}>
                  <span className="step-number">{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="connect" className="connect light-section portal-scene" data-surface="light">
          <div className="portal-layer contact-portal" aria-hidden="true" />
          <div className="section-shell"><p className="section-label">The next conversation</p><h2>Let’s connect<span>.</span></h2>
            <MagneticLink href="mailto:elliotpac@gmail.com?subject=ePAC%20%E2%80%94%20Let%E2%80%99s%20connect" className="contact-link" enabled={enabled && desktop}>elliotpac@gmail.com <ArrowUpRight size={28} strokeWidth={1.3} aria-hidden="true" /></MagneticLink>
          </div>
        </section>
      </main>

      <footer className="site-footer light-section" data-surface="light">
        <div className="section-shell footer-top"><a href="#top" className="brand-link" aria-label="ePAC — back to top"><Brand /></a><p>Elliot Pacheco Beauchamp · Puerto Rico</p><a href="#top" className="back-to-top">Back to top <ArrowUpRight size={15} aria-hidden="true" /></a></div>
        <div className="section-shell footer-bottom"><span>© 2026 ePAC</span><div className="production-links"><span>Behind the experience</span>{productionStages.map((stage, index) => <button key={stage.name} type="button" aria-haspopup="dialog" onClick={() => setSelectedStage(index)}>{stage.name}</button>)}</div></div>
      </footer>

      <div className="experience-controls"><AudioControl /><span className="control-divider" aria-hidden="true" /><button type="button" className="motion-control" aria-label={enabled ? 'Pause film and visual motion' : 'Enable film and visual motion'} aria-pressed={enabled} onClick={toggle}>{enabled ? <Pause size={13} aria-hidden="true" /> : <Play size={13} aria-hidden="true" />}<span>{enabled ? 'Pause motion' : reduced ? 'Reduced motion' : 'Play motion'}</span></button></div>
      <ProductionDialog stage={selectedStage === null ? null : productionStages[selectedStage]} onClose={() => setSelectedStage(null)} />
    </div>
  );
}
