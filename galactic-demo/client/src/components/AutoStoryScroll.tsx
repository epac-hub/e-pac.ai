import { useEffect } from "react";

/** Follow the landing narrative from the first frame, without a play button. */
export default function AutoStoryScroll() {
  useEffect(() => {
    // Motion preferences and restored scroll positions take precedence.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.scrollY > 20) return;

    let frame = 0;
    let active = true;
    let lastTime = performance.now();
    let speed = 0;
    let pausedUntil = 0;

    const stop = () => {
      active = false;
      cancelAnimationFrame(frame);
    };

    const pauseForInteraction = () => {
      pausedUntil = performance.now() + 3000;
      speed = 0;
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (["ArrowDown", "ArrowUp", "PageDown", "PageUp", " ", "Home", "End", "Tab"].includes(event.key)) pauseForInteraction();
    };

    window.addEventListener("wheel", pauseForInteraction, { passive: true });
    window.addEventListener("touchstart", pauseForInteraction, { passive: true });
    window.addEventListener("pointerdown", pauseForInteraction, { passive: true });
    window.addEventListener("keydown", onKeyDown);

    const tick = (now: number) => {
      if (!active) return;
      const elapsed = Math.min((now - lastTime) / 1000, 0.1);
      lastTime = now;

      if (now < pausedUntil) {
        frame = requestAnimationFrame(tick);
        return;
      }

      if (document.visibilityState === "visible") {
        const section = document.getElementById("text-reveal");
        const storyTop = section ? window.scrollY + section.getBoundingClientRect().top : Infinity;
        const storyBottom = storyTop + (section?.offsetHeight ?? 0);
        const parallax = document.getElementById("parallax");
        const parallaxBottom = parallax
          ? window.scrollY + parallax.getBoundingClientRect().bottom
          : storyBottom;
        const horizontal = document.getElementById("horizontal");
        const horizontalBottom = horizontal
          ? window.scrollY + (horizontal.parentElement ?? horizontal).getBoundingClientRect().bottom
          : parallaxBottom;
        const position = window.scrollY;

        // Keep the story slow, but traverse the long pinned horizontal track
        // continuously so it does not appear to freeze or skip its panels.
        const targetSpeed = position < storyTop ? 175 : position < storyBottom ? 75 : position < parallaxBottom ? 105 : position < horizontalBottom ? 320 : 145;
        speed += (targetSpeed - speed) * Math.min(1, elapsed * 2);

        const end = document.documentElement.scrollHeight - window.innerHeight;
        if (position >= end - 1) {
          stop();
          return;
        }
        window.scrollTo({ top: Math.min(end, position + speed * elapsed), behavior: "instant" });
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => {
      stop();
      window.removeEventListener("wheel", pauseForInteraction);
      window.removeEventListener("touchstart", pauseForInteraction);
      window.removeEventListener("pointerdown", pauseForInteraction);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return null;
}
