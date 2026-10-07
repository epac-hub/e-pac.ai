import { useEffect, useRef } from "react";

/** Keep the landing-page soundtrack alive across route changes, without a UI control. */
export default function GlobalSoundtrack() {
  const musicRef = useRef<HTMLAudioElement>(null);
  const ambienceRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const music = musicRef.current;
    const ambience = ambienceRef.current;
    if (!music || !ambience) return;

    music.volume = 0.15;
    ambience.volume = 0.3;

    const tracks = [music, ambience];
    const tryPlay = () => {
      tracks.forEach((track) => {
        if (track.paused) void track.play().catch(() => {
          // Audible autoplay is restricted by some browsers; retry on a user gesture.
        });
      });
    };

    // Try immediately; a browser that permits autoplay starts without any interaction.
    tryPlay();

    // When autoplay is denied, the first permitted interaction starts the music.
    // Keep the listeners until both tracks actually begin playing.
    const onPlaying = () => {
      if (tracks.every((track) => !track.paused)) {
        window.removeEventListener("pointerdown", tryPlay, true);
        window.removeEventListener("touchstart", tryPlay, true);
        window.removeEventListener("wheel", tryPlay, true);
        window.removeEventListener("keydown", tryPlay, true);
        window.removeEventListener("click", tryPlay, true);
      }
    };

    window.addEventListener("pointerdown", tryPlay, true);
    window.addEventListener("touchstart", tryPlay, true);
    window.addEventListener("wheel", tryPlay, true);
    window.addEventListener("keydown", tryPlay, true);
    window.addEventListener("click", tryPlay, true);
    tracks.forEach((track) => track.addEventListener("playing", onPlaying));

    return () => {
      window.removeEventListener("pointerdown", tryPlay, true);
      window.removeEventListener("touchstart", tryPlay, true);
      window.removeEventListener("wheel", tryPlay, true);
      window.removeEventListener("keydown", tryPlay, true);
      window.removeEventListener("click", tryPlay, true);
      tracks.forEach((track) => {
        track.removeEventListener("playing", onPlaying);
        track.pause();
      });
    };
  }, []);

  return (
    <>
      <audio ref={musicRef} src="/manus-storage/galactic-bg-music_6aec7333.mp3" loop autoPlay preload="auto" crossOrigin="anonymous" />
      <audio ref={ambienceRef} src="/manus-storage/ambient-space_659e307d.mp3" loop autoPlay preload="auto" crossOrigin="anonymous" />
    </>
  );
}
