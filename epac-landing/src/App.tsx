import { useRef, useState, type PointerEvent } from 'react';
import { Pause, Play } from 'lucide-react';
import StarFlight from './components/StarFlight';
import SpaceAudioControl from './components/SpaceAudioControl';
import { useMotion } from './hooks/useMotion';
import { useSpaceAudio } from './hooks/useSpaceAudio';

const brand = `${import.meta.env.BASE_URL}brand/`;

export function Brand() {
  return <img src={`${brand}epac-logo-640.webp`} srcSet={`${brand}epac-logo-640.webp 640w, ${brand}epac-logo-960.webp 960w, ${brand}epac-logo-restored.webp 1920w`} sizes="min(420px, 76vw, 68svh)" width="640" height="640" alt="ePAC" />;
}

export default function App() {
  const tilt = useRef<HTMLDivElement>(null);
  const [entered, setEntered] = useState(false);
  const { enabled, desktop, reduced, toggle } = useMotion();
  const sound = useSpaceAudio();

  const followPointer = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'touch') return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    sound.move(x, y);
    if (enabled && desktop && tilt.current) tilt.current.style.transform = `rotateX(${-y * 5}deg) rotateY(${x * 5}deg)`;
  };

  const settle = () => {
    if (tilt.current) tilt.current.style.transform = 'rotateX(0deg) rotateY(0deg)';
    sound.leave();
  };

  return (
    <div className={`space-home ${enabled ? 'motion-enabled' : 'motion-disabled'} ${entered ? 'entry-finished' : ''}`} data-sound-active={sound.playing} data-sound-effect-count={sound.effectCount} data-audio-context={sound.contextState}>
      <a className="skip-link" href="#main">Skip to content</a>
      <StarFlight enabled={enabled} />
      <div className="space-shade" aria-hidden="true" />
      <div className="film-gate gate-top" aria-hidden="true" />
      <div className="film-gate gate-bottom" aria-hidden="true" />
      <main id="main" className="center-mark" aria-label="ePAC">
        <div className="mark-perspective" onPointerMove={followPointer} onPointerLeave={settle}>
          <div className="mark-tilt" ref={tilt}>
            <h1 className="mark-arrival" onAnimationEnd={() => setEntered(true)}>
              <button className="logo-sound-surface" type="button" aria-label="ePAC — interactive spatial sound" onPointerEnter={(event) => { if (event.pointerType !== 'touch') sound.trigger(); }} onFocus={sound.trigger} onClick={sound.trigger}>
                <img className="logo" src={`${brand}epac-logo-640.webp`} srcSet={`${brand}epac-logo-640.webp 640w, ${brand}epac-logo-960.webp 960w, ${brand}epac-logo-restored.webp 1920w`} sizes="min(420px, 76vw, 68svh)" width="640" height="640" alt="ePAC" fetchPriority="high" decoding="async" />
              </button>
            </h1>
          </div>
        </div>
      </main>
      <footer className="space-footer"><span>© ePAC, LLC</span></footer>
      <div className="space-controls" aria-label="Experience controls">
        <SpaceAudioControl playing={sound.playing} status={sound.status} onToggle={sound.toggle} />
        <button className="motion-toggle" type="button" disabled={reduced} title={reduced ? 'Reduced motion is enabled in device settings' : enabled ? 'Pause motion' : 'Resume motion'} aria-label={reduced ? 'Motion reduced by device settings' : enabled ? 'Pause space flight' : 'Resume space flight'} aria-pressed={!enabled} onClick={() => { settle(); toggle(); }}>
          {enabled ? <Pause size={14} aria-hidden="true" /> : <Play size={14} aria-hidden="true" />}
        </button>
      </div>
    </div>
  );
}
