import { useCallback, useEffect, useRef, useState } from 'react';
import { Play } from 'lucide-react';

export interface CinematicVideoProps {
  src: string;
  webm?: string;
  poster: string;
  enabled: boolean;
  className?: string;
  priority?: boolean;
}

type PlaybackState = 'poster' | 'loading' | 'playing' | 'paused' | 'blocked';

/**
 * Decorative video that only asks the browser to play while it is both visible
 * and allowed by the page's motion preference.
 */
export default function CinematicVideo({
  src,
  webm,
  poster,
  enabled,
  className,
  priority = false,
}: CinematicVideoProps) {
  const mediaRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const mountedRef = useRef(false);
  const enabledRef = useRef(enabled);
  const shouldPlayRef = useRef(false);
  const blockedRef = useRef(false);
  const intersectingRef = useRef(false);
  const playRequestRef = useRef(0);
  const playPendingRef = useRef(false);
  const [playback, setPlayback] = useState<PlaybackState>('poster');
  const [isVisible, setIsVisible] = useState(false);

  const requestPlayback = useCallback((fromUserGesture = false) => {
    const video = videoRef.current;

    if (!mountedRef.current || !video || !enabledRef.current || !shouldPlayRef.current) {
      return;
    }

    if ((blockedRef.current && !fromUserGesture) || playPendingRef.current || !video.paused) {
      return;
    }

    if (fromUserGesture) {
      blockedRef.current = false;
    }

    const request = ++playRequestRef.current;
    playPendingRef.current = true;
    setPlayback((current) => (current === 'playing' ? current : 'loading'));

    const blockPlayback = () => {
      if (request !== playRequestRef.current || !mountedRef.current || !shouldPlayRef.current) {
        return;
      }

      playPendingRef.current = false;
      blockedRef.current = true;
      setPlayback('blocked');
    };

    try {
      const playPromise = video.play();
      if (playPromise) {
        void playPromise.catch(blockPlayback);
      } else {
        playPendingRef.current = false;
      }
    } catch {
      blockPlayback();
    }
  }, []);

  useEffect(() => {
    mountedRef.current = true;

    return () => {
      mountedRef.current = false;
      playPendingRef.current = false;
      playRequestRef.current += 1;
      videoRef.current?.pause();
    };
  }, []);

  useEffect(() => {
    const media = mediaRef.current;
    const video = videoRef.current;

    if (!media || !video) {
      return;
    }

    video.muted = true;
    video.defaultMuted = true;
    enabledRef.current = enabled;
    blockedRef.current = false;
    intersectingRef.current = false;
    shouldPlayRef.current = false;
    playPendingRef.current = false;
    playRequestRef.current += 1;
    setIsVisible(false);
    setPlayback('poster');
    video.pause();

    const pausePlayback = () => {
      playPendingRef.current = false;
      playRequestRef.current += 1;
      video.pause();
      setPlayback((current) => {
        if (!enabledRef.current || current === 'poster') {
          return 'poster';
        }
        return current === 'blocked' ? 'blocked' : 'paused';
      });
    };

    const updatePlayback = () => {
      const visible = intersectingRef.current && !document.hidden;
      const shouldPlay = enabledRef.current && visible;

      setIsVisible(visible);
      shouldPlayRef.current = shouldPlay;

      if (shouldPlay) {
        requestPlayback();
      } else {
        pausePlayback();
      }
    };

    const observer = typeof IntersectionObserver === 'undefined'
      ? null
      : new IntersectionObserver(
        ([entry]) => {
          intersectingRef.current = entry.isIntersecting && entry.intersectionRatio > 0;
          updatePlayback();
        },
        { threshold: 0.1 },
      );

    const updateFallbackVisibility = () => {
      const bounds = media.getBoundingClientRect();
      intersectingRef.current = bounds.bottom > 0 && bounds.top < window.innerHeight && bounds.right > 0 && bounds.left < window.innerWidth;
      updatePlayback();
    };
    if (observer) {
      observer.observe(media);
    } else {
      updateFallbackVisibility();
      window.addEventListener('scroll', updateFallbackVisibility, { passive: true });
      window.addEventListener('resize', updateFallbackVisibility);
    }

    document.addEventListener('visibilitychange', updatePlayback);
    updatePlayback();

    return () => {
      observer?.disconnect();
      document.removeEventListener('visibilitychange', updatePlayback);
      window.removeEventListener('scroll', updateFallbackVisibility);
      window.removeEventListener('resize', updateFallbackVisibility);
      shouldPlayRef.current = false;
      playPendingRef.current = false;
      playRequestRef.current += 1;
      video.pause();
    };
  }, [enabled, poster, requestPlayback, src, webm]);

  const handlePlaying = useCallback(() => {
    playPendingRef.current = false;

    if (!enabledRef.current || !shouldPlayRef.current) {
      videoRef.current?.pause();
      return;
    }

    blockedRef.current = false;
    setPlayback('playing');
  }, []);

  const handlePause = useCallback(() => {
    playPendingRef.current = false;
    setPlayback((current) => {
      if (!enabledRef.current || current === 'poster') {
        return 'poster';
      }
      return current === 'blocked' ? 'blocked' : 'paused';
    });
  }, []);

  const handleError = useCallback(() => {
    playPendingRef.current = false;

    if (!enabledRef.current) {
      setPlayback('poster');
      return;
    }

    blockedRef.current = true;
    setPlayback('blocked');
  }, []);

  const replay = useCallback(() => {
    if (!isVisible || !enabledRef.current || !shouldPlayRef.current) {
      return;
    }

    requestPlayback(true);
  }, [isVisible, requestPlayback]);

  return (
    <div
      ref={mediaRef}
      className={`cinematic-media ${className || ''}`.trim()}
      data-playback={playback}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
    >
      <img
        className="cinematic-poster"
        src={poster}
        alt=""
        aria-hidden="true"
        loading={priority ? 'eager' : 'lazy'}
        fetchPriority={priority ? 'high' : 'auto'}
      />
      <video
        key={`${src}-${webm || ''}`}
        ref={videoRef}
        className="cinematic-film"
        poster={poster}
        muted
        loop
        playsInline
        preload={priority ? 'auto' : enabled ? 'metadata' : 'none'}
        aria-hidden="true"
        onPlaying={handlePlaying}
        onPause={handlePause}
        onError={handleError}
      >
        {webm && <source src={webm} type="video/webm" />}
        <source src={src} type="video/mp4" />
      </video>
      {isVisible && playback === 'blocked' && (
        <button className="film-replay" type="button" onClick={replay}>
          <Play size={15} aria-hidden="true" />
          <span>Play film</span>
        </button>
      )}
    </div>
  );
}
