import { useEffect, useState } from "react";

interface CinematicReadyGateProps {
  onReady: () => void;
}

/** Wait for visible first-scene resources, never for external services or the whole page. */
export default function CinematicReadyGate({ onReady }: CinematicReadyGateProps) {
  const [exiting, setExiting] = useState(false);
  useEffect(() => {
    let active = true;
    const abort = new AbortController();
    const timers: ReturnType<typeof setTimeout>[] = [];
    let poll: ReturnType<typeof setInterval> | undefined;
    const later = (callback: () => void, delay: number) => {
      const timer = setTimeout(callback, delay);
      timers.push(timer);
      return timer;
    };
    const finish = () => {
      if (!active) return;
      active = false;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) onReady();
      else {
        setExiting(true);
        later(onReady, 360);
      }
    };

    // The poster is a real image: never call the scene ready before it has
    // decoded, unless it fails or the overall timeout supplies the fallback.
    const poster = new Promise<void>((resolve) => {
      const image = document.querySelector<HTMLImageElement>("#hero picture img");
      if (!image || image.complete) {
        if (image?.naturalWidth) void image.decode().catch(() => undefined).then(resolve);
        else resolve();
        return;
      }
      image.addEventListener("load", () => void image.decode().catch(() => undefined).then(resolve), { once: true, signal: abort.signal });
      image.addEventListener("error", () => resolve(), { once: true, signal: abort.signal });
    });

    const starfield = new Promise<void>((resolve) => {
      if (document.querySelector(".global-starfield canvas")) { resolve(); return; }
      poll = setInterval(() => {
        if (!document.querySelector(".global-starfield canvas")) return;
        clearInterval(poll);
        poll = undefined;
        requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
      }, 32);
    });

    const needsVideo = window.matchMedia("(min-width: 768px)").matches && document.documentElement.classList.contains("dark");
    const video = new Promise<void>((resolve) => {
      if (!needsVideo) { resolve(); return; }
      const element = document.querySelector<HTMLVideoElement>("#hero video");
      if (!element || element.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA || element.error) { resolve(); return; }
      element.addEventListener("loadeddata", () => resolve(), { once: true, signal: abort.signal });
      element.addEventListener("error", () => resolve(), { once: true, signal: abort.signal });
      // The decoded poster remains usable even if autoplay data is slow.
      later(resolve, 2300);
    });

    const fonts = document.fonts?.ready ?? Promise.resolve();
    const minimum = new Promise<void>((resolve) => later(resolve, 500));
    const deadline = later(finish, 3200);
    void Promise.all([poster, starfield, video, fonts, minimum]).then(() => {
      clearTimeout(deadline);
      finish();
    });

    return () => {
      active = false;
      abort.abort();
      timers.forEach(clearTimeout);
      if (poll) clearInterval(poll);
    };
  }, [onReady]);

  return (
    <div className={`cinematic-ready-gate fixed inset-0 z-[9995] grid place-items-center pointer-events-none${exiting ? " cinematic-ready-gate--exiting" : ""}`} role="status" aria-live="polite" aria-label="Preparing cinematic scene">
      <div className="cinematic-ready-gate__content text-center px-6">
        <span className="cinematic-ready-gate__orb mx-auto mb-8 block h-11 w-11 rounded-full border border-[#a78bfa]/45" aria-hidden="true" />
        <span className="block text-xl sm:text-2xl font-semibold tracking-[0.12em]" style={{ fontFamily: "var(--font-display)" }}>ePAC, LLC</span>
        <span className="block mt-3 text-[10px] sm:text-xs uppercase tracking-[0.32em] opacity-75">Preparing the scene</span>
      </div>
    </div>
  );
}
