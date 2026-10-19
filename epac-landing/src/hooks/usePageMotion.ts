import { useEffect, useRef, type RefObject } from 'react';
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
  const lenisRef = useRef<Lenis | null>(null);
  const overlayOpenRef = useRef(overlayOpen);

  useEffect(() => {
    overlayOpenRef.current = overlayOpen;

    const lenis = lenisRef.current;
    if (!lenis) return;

    const domOverlayOpen = Boolean(document.querySelector('dialog[open], .nav-open'));
    if (overlayOpen || domOverlayOpen) lenis.stop();
    else lenis.start();
  }, [overlayOpen]);

  useEffect(() => {
    if (!enabled || !desktop) return;

    const lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      anchors: { offset: 0 },
    });
    lenisRef.current = lenis;

    const tick = (time: number) => lenis.raf(time * 1000);
    lenis.on('scroll', ScrollTrigger.update);
    gsap.ticker.add(tick);

    const syncOverlayState = () => {
      const domOverlayOpen = Boolean(document.querySelector('dialog[open], .nav-open'));
      if (overlayOpenRef.current || domOverlayOpen) lenis.stop();
      else lenis.start();
    };
    const observer = new MutationObserver(syncOverlayState);
    observer.observe(document.body, { subtree: true, attributes: true, attributeFilter: ['open', 'class'] });
    syncOverlayState();

    return () => {
      observer.disconnect();
      lenis.off('scroll', ScrollTrigger.update);
      gsap.ticker.remove(tick);
      lenis.destroy();
      if (lenisRef.current === lenis) lenisRef.current = null;
    };
  }, [enabled, desktop]);

  useGSAP(() => {
    setActiveStep(0);
    setFocusProgress(0);
    if (!enabled || !desktop) return;

    const root = container.current;
    if (!root) return;

    const mm = gsap.matchMedia();

    const intro = root.querySelectorAll<HTMLElement>('.hero-title, .hero-name, .hero-copy, .hero-actions');
    gsap.from(intro, {
      y: 28,
      opacity: 0,
      duration: 0.85,
      stagger: 0.1,
      ease: 'power3.out',
      clearProps: 'transform,opacity',
    });

    root.querySelectorAll<HTMLElement>('.reveal').forEach((element) => {
      gsap.from(element, { y: 24, duration: 0.8, ease: 'power3.out', scrollTrigger: { trigger: element, start: 'top 92%', once: true }, clearProps: 'transform' });
    });

    root.querySelectorAll<HTMLElement>('.portal-scene .portal-layer').forEach((layer) => {
      const scene = layer.closest<HTMLElement>('.portal-scene');
      if (!scene) return;

      gsap.set(layer, { pointerEvents: 'none' });
      gsap.fromTo(
        layer,
        { clipPath: 'circle(20% at 50% 50%)' },
        {
          clipPath: 'circle(150% at 50% 50%)',
          ease: 'none',
          scrollTrigger: {
            trigger: scene,
            start: 'top 95%',
            end: 'top 35%',
            scrub: 0.35,
          },
        },
      );
    });

    mm.add('(min-width: 900px) and (min-height: 650px)', () => {
      const focus = root.querySelector<HTMLElement>('#focus');
      const track = root.querySelector<HTMLElement>('.focus-track');
      const viewport = root.querySelector<HTMLElement>('.focus-viewport');
      const distance = () => track && viewport ? Math.max(0, track.scrollWidth - viewport.clientWidth) : 0;

      if (focus && track && viewport && distance() > 0) {
        gsap.to(track, {
          x: () => -distance(),
          ease: 'none',
          scrollTrigger: {
            id: 'epac-horizontal',
            trigger: focus,
            start: 'top 84px',
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.7,
            invalidateOnRefresh: true,
            onUpdate: (self) => setFocusProgress(self.progress),
          },
        });
      }

      const approach = root.querySelector<HTMLElement>('#approach');
      const steps = Array.from(root.querySelectorAll<HTMLElement>('#approach .approach-step')).slice(0, 3);
      if (!approach || steps.length !== 3) return;

      let activeStep = 0;
      const updateActiveStep = (progress: number, animate = false) => {
        const nextStep = Math.min(2, Math.floor(progress * 3));
        const changed = nextStep !== activeStep;
        activeStep = nextStep;

        if (changed) setActiveStep(nextStep);
        if (animate && changed && steps[nextStep]) {
          gsap.fromTo(
            steps[nextStep],
            { y: 8, scale: 0.985 },
            { y: 0, scale: 1, duration: 0.42, ease: 'power2.out', overwrite: 'auto', clearProps: 'transform' },
          );
        }
      };

      ScrollTrigger.create({
        id: 'epac-steps',
        trigger: approach,
        start: 'top 84px',
        end: '+=600',
        pin: true,
        invalidateOnRefresh: true,
        onEnter: (self) => updateActiveStep(self.progress, true),
        onUpdate: (self) => updateActiveStep(self.progress, true),
      });
    });

    let active = true;
    const refresh = () => {
      if (active) ScrollTrigger.refresh();
    };
    void document.fonts.ready.then(refresh).catch(() => undefined);
    const timer = window.setTimeout(refresh, 250);

    return () => {
      active = false;
      window.clearTimeout(timer);
      mm.revert();
    };
  }, { scope: container, dependencies: [enabled, desktop], revertOnUpdate: true });

  useEffect(() => {
    if (!overlayOpen) return;
    const previous = document.documentElement.style.overflow;
    document.documentElement.style.overflow = 'hidden';
    return () => { document.documentElement.style.overflow = previous; };
  }, [overlayOpen]);
}
