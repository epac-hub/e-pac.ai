import { useEffect } from "react";

/** Slowly narrate the landing page without a start button or abrupt anchor jumps. */
export default function AutoStoryScroll() {
  useEffect(() => {
    // Never override the visitor's motion preference or a restored position.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || window.scrollY > 20) return;

    let frame = 0;
    let active = true;
    let pointerHeld = false;
    let lastTime = performance.now();
    let speed = 0;
    let pausedUntil = 0;

    const stop = () => {
      active = false;
      cancelAnimationFrame(frame);
    };

    const pauseFor = (milliseconds: number) => {
      pausedUntil = Math.max(pausedUntil, performance.now() + milliseconds);
      speed = 0;
    };

    // A reader who takes control gets time to read; repeated gestures extend
    // the pause. Focus and text selection hold the pause until released.
    const onWheel = () => pauseFor(8000);
    const onTouch = () => pauseFor(8000);
    const onPointerDown = (event: PointerEvent) => {
      pointerHeld = true;
      pauseFor(event.target instanceof Element && event.target.closest(".theme-switch") ? 1800 : 8000);
    };
    const onPointerUp = (event: PointerEvent) => {
      pointerHeld = false;
      pauseFor(event.target instanceof Element && event.target.closest(".theme-switch") ? 1800 : 8000);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (["ArrowDown", "ArrowUp", "PageDown", "PageUp", " ", "Home", "End", "Tab"].includes(event.key)) pauseFor(8000);
    };
    const onVisibilityChange = () => {
      lastTime = performance.now();
      if (document.visibilityState === "visible") pauseFor(1500);
    };

    window.addEventListener("wheel", onWheel, { passive: true });
    window.addEventListener("touchstart", onTouch, { passive: true });
    window.addEventListener("pointerdown", onPointerDown, { passive: true });
    window.addEventListener("pointerup", onPointerUp, { passive: true });
    window.addEventListener("pointercancel", onPointerUp, { passive: true });
    window.addEventListener("keydown", onKeyDown);
    document.addEventListener("visibilitychange", onVisibilityChange);

    const tick = (now: number) => {
      if (!active) return;
      const elapsed = Math.min((now - lastTime) / 1000, 0.12);
      lastTime = now;

      const focused = document.activeElement;
      const editingOrNavigating = focused instanceof HTMLElement && (
        focused.matches("input, textarea, select, [contenteditable='true']") ||
        (focused.matches("button, a") && focused.matches(":focus-visible"))
      );
      const selecting = Boolean(window.getSelection()?.toString().trim());
      if (document.visibilityState !== "visible" || pointerHeld || editingOrNavigating || selecting || now < pausedUntil) {
        frame = requestAnimationFrame(tick);
        return;
      }

      const section = document.getElementById("text-reveal");
      const storyTop = section ? window.scrollY + section.getBoundingClientRect().top : Infinity;
      const storyBottom = storyTop + (section?.offsetHeight ?? 0);
      const parallax = document.getElementById("parallax");
      const parallaxBottom = parallax ? window.scrollY + parallax.getBoundingClientRect().bottom : storyBottom;
      const horizontal = document.getElementById("horizontal");
      const horizontalBottom = horizontal
        ? window.scrollY + (horizontal.parentElement ?? horizontal).getBoundingClientRect().bottom
        : parallaxBottom;
      const position = window.scrollY;

      // Maintain a continuous pace: more reading time in the narrative,
      // a faster but still visible pass through the unusually long pinned track.
      const targetSpeed = position < storyTop ? 75 : position < storyBottom ? 55 : position < parallaxBottom ? 95 : position < horizontalBottom ? 320 : 120;
      speed += (targetSpeed - speed) * Math.min(1, elapsed * 2);

      const end = document.documentElement.scrollHeight - window.innerHeight;
      if (position >= end - 1) {
        stop();
        return;
      }
      window.scrollTo({ top: Math.min(end, position + speed * elapsed), behavior: "instant" });
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => {
      stop();
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouch);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("pointerup", onPointerUp);
      window.removeEventListener("pointercancel", onPointerUp);
      window.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return null;
}
