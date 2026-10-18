import { useEffect, type RefObject } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function usePageMotion(
  container: RefObject<HTMLDivElement | null>,
  enabled: boolean,
  desktop: boolean,
  setActiveStep: (step: number) => void,
  setFocusProgress: (progress: number) => void,
  overlayOpen: boolean,
) {
  useEffect(() => {
    if (!enabled || !desktop) return;
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true, anchors: { offset: -100 } });
    const tick = (time: number) => lenis.raf(time * 1000);
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(tick);
    const overlay = () => document.querySelector('dialog[open]') || document.querySelector('.nav-open') ? lenis.stop() : lenis.start();
    const observer = new MutationObserver(overlay);
    observer.observe(document.body, { subtree: true, attributes: true, attributeFilter: ['open', 'class'] });
    overlay();
    return () => { observer.disconnect(); gsap.ticker.remove(tick); lenis.destroy(); };
  }, [enabled, desktop]);

  useGSAP(() => {
    setActiveStep(0);
    setFocusProgress(0);
    if (!enabled || !desktop) return;
    const mm = gsap.matchMedia();
    gsap.from('.hero-line', { y: 55, opacity: 0, duration: 1, stagger: 0.13, ease: 'power3.out', clearProps: 'transform,opacity' });
    gsap.from('.hero-description, .hero-cta, .hero-byline', { y: 22, opacity: 0, duration: 0.9, delay: 0.32, stagger: 0.1, clearProps: 'transform,opacity' });

    gsap.utils.toArray<HTMLElement>('.reveal').forEach((element) => {
      gsap.from(element, { y: 24, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 92%', once: true }, clearProps: 'transform' });
    });
    gsap.utils.toArray<HTMLElement>('.portal-section').forEach((section) => {
      gsap.fromTo(section, { clipPath: 'circle(15% at 50% 40%)' }, { clipPath: 'circle(160% at 50% 40%)', duration: 1.3, ease: 'power2.out', scrollTrigger: { trigger: section, start: 'top 96%', end: 'top 45%', scrub: 0.35 }, clearProps: 'clipPath' });
    });

    if (desktop) mm.add('(min-width: 900px) and (min-height: 650px)', () => {
      const track = container.current?.querySelector<HTMLElement>('.focus-track');
      const viewport = container.current?.querySelector<HTMLElement>('.focus-viewport');
      if (track && viewport) {
        const distance = () => Math.max(0, track.scrollWidth - viewport.clientWidth + 48);
        gsap.to(track, { x: () => -distance(), ease: 'none', scrollTrigger: { id: 'epac-horizontal', trigger: '#focus', start: 'top 85px', end: () => `+=${distance()}`, pin: true, scrub: 0.7, invalidateOnRefresh: true, onUpdate: (self) => setFocusProgress(self.progress) } });
      }
      ScrollTrigger.create({ id: 'epac-steps', trigger: '#approach', start: 'top 90px', end: '+=1200', pin: true, invalidateOnRefresh: true, onUpdate: (self) => setActiveStep(Math.min(2, Math.floor(self.progress * 3))) });
    });
    const refresh = () => ScrollTrigger.refresh();
    document.fonts.ready.then(refresh);
    const timer = window.setTimeout(refresh, 250);
    return () => { window.clearTimeout(timer); mm.revert(); };
  }, { scope: container, dependencies: [enabled, desktop], revertOnUpdate: true });

  useEffect(() => {
    if (!overlayOpen) return;
    const previous = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    return () => { document.documentElement.style.overflow = previous; };
  }, [overlayOpen]);
}
