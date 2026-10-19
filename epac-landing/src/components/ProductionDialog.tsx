import { useEffect, useRef } from 'react';
import { ArrowUpRight, X } from 'lucide-react';

export const productionStages = [
  { name: 'Seedance', role: 'The opening film', number: '01', summary: 'An original Seedance 2.5 film opens this page: a fictional circular sculpture, moving lavender light, reflective surfaces, and an edited slow push and lateral reframing. The film fills the opening rather than being replaced by a 3D sphere.', contribution: 'Original generated footage, edited for the web, with a genuine film frame as the static fallback.', steps: ['Generate the sculpture scene and its rotating lavender light.', 'Add a continuous digital push and lateral reframing, encode the film, and extract a real poster frame.', 'Use muted inline playback on desktop and mobile, with a manual play fallback.'], video: 'epac-cinematic.mp4', source: 'https://seed.bytedance.com/en/seedance' },
  { name: 'Higgsfield', role: 'The narrative atmosphere', number: '02', summary: 'The approach scene reuses a Higgsfield clip from the existing ePAC media library. It is a secondary atmospheric layer behind the small interactive object, not the main opening film.', contribution: 'Repository-reported Higgsfield narrative footage, reused without claiming a new generation.', steps: ['Retain the existing narrative clip and its documented source.', 'Place it in the approach visual rather than underneath all page text.', 'Pause playback off-screen, in a hidden tab, or when visual motion is disabled.'], video: 'higgsfield.mp4', source: 'https://higgsfield.ai/' },
  { name: 'Google AI Studio', role: 'Visual review in production', number: '03', summary: 'Gemini supports production-side review of rendered screenshots. The private review tool considers text legibility and layout; it does not run inside this public website.', contribution: 'Screenshot-based visual observations, checked against implementation evidence.', steps: ['Capture rendered views of the actual page.', 'Review screenshots through a private Gemini production tool.', 'Check concrete issues against the page. A screenshot cannot prove playback, scrolling, or accessibility conformance.'], video: null, source: 'https://ai.google.dev/gemini-api/docs/image-understanding' },
] as const;
type Stage = typeof productionStages[number];

export function ProductionDialog({ stage, onClose }: { stage: Stage | null; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const returnFocus = useRef<HTMLElement | null>(null);
  useEffect(() => {
    const element = dialog.current;
    if (!element) return;
    if (stage) {
      returnFocus.current = document.activeElement as HTMLElement;
      if (!element.open) element.showModal();
    } else if (element.open) {
      element.close();
      returnFocus.current?.focus();
    }
    const pauseVideos = () => element.querySelectorAll('video').forEach((video) => video.pause());
    const visibility = () => { if (document.hidden) pauseVideos(); };
    document.addEventListener('visibilitychange', visibility);
    return () => { document.removeEventListener('visibilitychange', visibility); pauseVideos(); };
  }, [stage]);

  return <dialog ref={dialog} className="production-dialog" aria-labelledby="dialog-title" aria-describedby="dialog-summary" onCancel={(event) => { event.preventDefault(); onClose(); }} onClick={(event) => { if (event.target === dialog.current) { const bounds = dialog.current.getBoundingClientRect(); if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose(); } }} data-lenis-prevent>
    {stage && <><header className="dialog-header"><p className="eyebrow">CREATIVE PROCESS / {stage.number}</p><button type="button" className="dialog-close" onClick={onClose} aria-label="Close process details" autoFocus><X size={22} aria-hidden="true" /></button><h2 id="dialog-title">{stage.name}</h2><p className="dialog-role">{stage.role}</p></header><p id="dialog-summary" className="dialog-summary">{stage.summary}</p><div className="dialog-contribution"><span className="eyebrow">WHAT IT CONTRIBUTES</span><p>{stage.contribution}</p></div>{stage.video && <video key={stage.video} controls muted playsInline preload="metadata" className="dialog-video" src={`${import.meta.env.BASE_URL}media/${stage.video}`} aria-label={`${stage.name} decorative cinematic clip. No speech or information is conveyed.`} />}<ol className="dialog-steps">{stage.steps.map((step) => <li key={step}>{step}</li>)}</ol><p className="dialog-note">Media provenance is recorded in the existing ePAC repository. No provider API key is exposed, and there is no live generation on this page.</p><div className="dialog-actions"><button type="button" className="button button-secondary" onClick={onClose}>Back to the experience</button><a href={stage.source} target="_blank" rel="noopener noreferrer" className="text-link">Official source <ArrowUpRight size={15} aria-hidden="true" /></a></div></>}
  </dialog>;
}
