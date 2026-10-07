import { useEffect, useRef } from "react";
import { mediaPath } from "@/lib/media";

const clamp = (value: number) => Math.max(0, Math.min(1, value));

/** A persistent, low-volume score. The ambience rises under the narrative;
 * the soundtrack remains present across routes and never adds a sound toggle. */
export default function GlobalSoundtrack() {
  const musicRef = useRef<HTMLAudioElement>(null);
  const ambienceRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const music = musicRef.current;
    const ambience = ambienceRef.current;
    if (!music || !ambience) return;

    const tracks = [music, ambience];
    // Start quietly; fade only a track that is actually playing. A rejected
    // autoplay attempt must not make the soundtrack look/sound "started".
    tracks.forEach((track) => { track.volume = 0; });
    let targetMusic = 0.15;
    let targetAmbience = 0.12;
    let frame = 0;
    let lastTime = performance.now();
    let disposed = false;

    const weight = (id: string) => {
      const section = document.getElementById(id);
      if (!section) return 0;
      const rect = section.getBoundingClientRect();
      const height = window.innerHeight;
      const enter = clamp((height * 0.85 - rect.top) / (height * 0.7));
      const leave = clamp((rect.bottom - height * 0.2) / (height * 0.7));
      return Math.min(enter, leave);
    };

    const animate = (time: number) => {
      frame = 0;
      if (disposed) return;
      const delta = Math.max(0, Math.min((time - lastTime) / 1000, 0.1));
      lastTime = time;
      // Exponential fade: neither a hard volume jump nor a permanent RAF loop.
      const blend = 1 - Math.exp(-delta / 0.9);
      let unfinished = false;
      for (const [track, target] of [[music, targetMusic], [ambience, targetAmbience]] as const) {
        if (track.paused) continue;
        const next = track.volume + (target - track.volume) * blend;
        track.volume = clamp(Math.abs(next - target) < 0.001 ? target : next);
        if (track.volume !== target) unfinished = true;
      }
      if (unfinished) frame = requestAnimationFrame(animate);
    };

    const schedule = () => {
      if (!frame && !disposed) {
        frame = requestAnimationFrame(animate);
      }
    };

    const updateMix = () => {
      const narrative = weight("text-reveal");
      const parallax = weight("parallax");
      const horizontal = weight("horizontal");
      // No narration or extra effects. Let the existing texture carry the text.
      targetMusic = 0.15 - 0.05 * narrative;
      targetAmbience = 0.12 + 0.16 * narrative + 0.07 * parallax + 0.06 * horizontal;
      schedule();
    };

    const tryPlay = () => {
      tracks.forEach((track) => {
        if (track.paused) void track.play().catch(() => {
          // Browsers can prohibit audible autoplay. Retry at the first
          // permitted gesture; do not claim it played before that happens.
        });
      });
    };

    const onPlaying = () => {
      updateMix();
      if (tracks.every((track) => !track.paused)) {
        window.removeEventListener("pointerdown", tryPlay, true);
        window.removeEventListener("touchstart", tryPlay, true);
        window.removeEventListener("wheel", tryPlay, true);
        window.removeEventListener("keydown", tryPlay, true);
        window.removeEventListener("click", tryPlay, true);
      }
    };
    const onVisibility = () => {
      if (document.visibilityState === "visible") {
        lastTime = performance.now();
        tryPlay();
        updateMix();
      }
    };

    window.addEventListener("pointerdown", tryPlay, true);
    window.addEventListener("touchstart", tryPlay, true);
    window.addEventListener("wheel", tryPlay, true);
    window.addEventListener("keydown", tryPlay, true);
    window.addEventListener("click", tryPlay, true);
    window.addEventListener("scroll", updateMix, { passive: true });
    window.addEventListener("resize", updateMix, { passive: true });
    document.addEventListener("visibilitychange", onVisibility);
    tracks.forEach((track) => track.addEventListener("playing", onPlaying));
    tryPlay();
    updateMix();

    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      window.removeEventListener("pointerdown", tryPlay, true);
      window.removeEventListener("touchstart", tryPlay, true);
      window.removeEventListener("wheel", tryPlay, true);
      window.removeEventListener("keydown", tryPlay, true);
      window.removeEventListener("click", tryPlay, true);
      window.removeEventListener("scroll", updateMix);
      window.removeEventListener("resize", updateMix);
      document.removeEventListener("visibilitychange", onVisibility);
      tracks.forEach((track) => {
        track.removeEventListener("playing", onPlaying);
        track.pause();
      });
    };
  }, []);

  return (
    <>
      <audio ref={musicRef} src={mediaPath("galactic-bg-music_6aec7333.mp3")} loop autoPlay preload="auto" crossOrigin="anonymous" />
      <audio ref={ambienceRef} src={mediaPath("ambient-space_659e307d.mp3")} loop autoPlay preload="auto" crossOrigin="anonymous" />
    </>
  );
}
