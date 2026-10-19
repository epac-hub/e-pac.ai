import { useRef, useState, type PointerEvent } from 'react';
import { Pause, Play } from 'lucide-react';
import gsap from 'gsap';
import StarFlight from './components/StarFlight';
import { AudioControl } from './components/InteractionControls';
import { useMotion } from './hooks/useMotion';

const logo = `${import.meta.env.BASE_URL}brand/epac-logo-restored.webp`;

export function Brand() {
  return <img src={logo} width="1200" height="1200" alt="ePAC" />;
}

export default function App() {
  const tilt = useRef<HTMLDivElement>(null);
  const [entered, setEntered] = useState(false);
  const { enabled, desktop, toggle } = useMotion();

  const followPointer = (event: PointerEvent<HTMLDivElement>) => {
    if (!enabled || !desktop || event.pointerType === 'touch' || !tilt.current) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    gsap.to(tilt.current, { rotationX: -y * 5, rotationY: x * 5, duration: 0.6, ease: 'power2.out', overwrite: true });
  };

  const settle = () => {
    if (tilt.current) gsap.to(tilt.current, { rotationX: 0, rotationY: 0, duration: 0.8, ease: 'power3.out', overwrite: true });
  };

  return (
    <div className={`space-home ${enabled ? 'motion-enabled' : 'motion-disabled'} ${entered ? 'entry-finished' : ''}`}>
      <a className="skip-link" href="#main">Skip to content</a>
      <StarFlight enabled={enabled} />
      <div className="space-shade" aria-hidden="true" />
      <div className="film-gate gate-top" aria-hidden="true" />
      <div className="film-gate gate-bottom" aria-hidden="true" />
      <main id="main" className="center-mark" aria-label="ePAC">
        <div className="mark-perspective" onPointerMove={followPointer} onPointerLeave={settle}>
          <div className="mark-tilt" ref={tilt}>
            <h1 className="mark-arrival" onAnimationEnd={() => setEntered(true)}><img className="logo" src={logo} width="1200" height="1200" alt="ePAC" fetchPriority="high" /></h1>
          </div>
        </div>
      </main>
      <footer className="space-footer"><span>© ePAC, LLC</span></footer>
      <div className="space-controls" aria-label="Experience controls">
        <AudioControl src="media/space-ambient.mp3" />
        <button className="motion-toggle" type="button" title={enabled ? 'Pause motion' : 'Resume motion'} aria-label={enabled ? 'Pause space flight' : 'Resume space flight'} aria-pressed={!enabled} onClick={() => { settle(); toggle(); }}>
          {enabled ? <Pause size={14} aria-hidden="true" /> : <Play size={14} aria-hidden="true" />}
        </button>
      </div>
    </div>
  );
}
