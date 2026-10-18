import {
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes,
  type CSSProperties,
  useRef,
  useState,
} from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const INTERACTIVE_SELECTOR = "a, button, [data-cursor]";
const AUDIO_VOLUME = 0.42;

const cursorElementStyle: CSSProperties = {
  mixBlendMode: "difference",
  pointerEvents: "none",
  position: "fixed",
  zIndex: 9999,
};

/** Produces a Vite base-aware URL without making playback start automatically. */
function getPublicAssetUrl(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/+$/, "");
  return `${base}/${path.replace(/^\/+/, "")}`;
}

function findInteractiveTarget(target: EventTarget | null): Element | null {
  return target instanceof Element ? target.closest(INTERACTIVE_SELECTOR) : null;
}

export interface CustomCursorProps {
  enabled: boolean;
}

/**
 * A fine-pointer cursor enhancement. Its root class is applied only once the
 * cursor is visibly following a pointer, so the native cursor remains the
 * fallback if this enhancement has not become active.
 */
export function CustomCursor({ enabled }: CustomCursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLSpanElement>(null);
  const ringRef = useRef<HTMLSpanElement>(null);
  const trailRefs = useRef<Array<HTMLSpanElement | null>>([]);

  useGSAP(
    (_context, contextSafe) => {
      const cursor = cursorRef.current;
      const dot = dotRef.current;
      const ring = ringRef.current;
      const trails = trailRefs.current.filter(
        (trail): trail is HTMLSpanElement => trail !== null,
      );

      if (!cursor || !dot || !ring || trails.length !== 4) {
        return;
      }

      const safe = contextSafe!;
      const allCursorParts = [dot, ring, ...trails];
      const finePointer = window.matchMedia("(pointer: fine)");
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
      let supported = false;
      let visible = false;
      let hoveringInteractive = false;

      gsap.set(cursor, { autoAlpha: 0 });
      gsap.set(allCursorParts, { xPercent: -50, yPercent: -50 });
      gsap.set(ring, { scale: 1 });

      const dotX = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power3.out" });
      const dotY = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power3.out" });
      const ringX = gsap.quickTo(ring, "x", { duration: 0.18, ease: "power3.out" });
      const ringY = gsap.quickTo(ring, "y", { duration: 0.18, ease: "power3.out" });
      const trailMotion = trails.map((trail, index) => ({
        x: gsap.quickTo(trail, "x", {
          duration: 0.22 + index * 0.07,
          ease: "power3.out",
        }),
        y: gsap.quickTo(trail, "y", {
          duration: 0.22 + index * 0.07,
          ease: "power3.out",
        }),
      }));

      const supportsCustomCursor = () =>
        enabled &&
        window.innerWidth >= 768 &&
        finePointer.matches &&
        !reducedMotion.matches;

      const positionCursor = (x: number, y: number, immediately = false) => {
        if (immediately) {
          gsap.set(allCursorParts, { x, y });
          return;
        }

        dotX(x);
        dotY(y);
        ringX(x);
        ringY(y);
        trailMotion.forEach((trail) => {
          trail.x(x);
          trail.y(y);
        });
      };

      const setInteractiveState = (nextState: boolean) => {
        if (hoveringInteractive === nextState) {
          return;
        }

        hoveringInteractive = nextState;
        gsap.to(ring, {
          duration: 0.2,
          ease: "power3.out",
          overwrite: true,
          scale: nextState ? 1.7 : 1,
        });
      };

      const hideCursor = () => {
        if (visible) {
          visible = false;
          document.documentElement.classList.remove("epac-custom-cursor");
        }

        setInteractiveState(false);
        gsap.to(cursor, {
          autoAlpha: 0,
          duration: 0.12,
          ease: "power2.out",
          overwrite: true,
        });
      };

      const showCursor = (x?: number, y?: number) => {
        if (!supported || visible) {
          return;
        }

        if (x !== undefined && y !== undefined) {
          positionCursor(x, y, true);
        }
        visible = true;
        document.documentElement.classList.add("epac-custom-cursor");
        gsap.to(cursor, {
          autoAlpha: 1,
          duration: 0.14,
          ease: "power2.out",
          overwrite: true,
        });
      };

      const onPointerMove = safe((event: PointerEvent) => {
        if (!supported) {
          return;
        }

        showCursor(event.clientX, event.clientY);
        positionCursor(event.clientX, event.clientY);
      });

      const onPointerOver = safe((event: PointerEvent) => {
        if (!supported) {
          return;
        }

        showCursor(event.clientX, event.clientY);
        if (findInteractiveTarget(event.target)) {
          setInteractiveState(true);
        }
      });

      const onPointerOut = safe((event: PointerEvent) => {
        if (!supported) {
          return;
        }

        const from = findInteractiveTarget(event.target);
        const to = findInteractiveTarget(event.relatedTarget);

        if (from && from !== to) {
          setInteractiveState(false);
        }

        if (!event.relatedTarget) {
          hideCursor();
        }
      });

      const onPointerLeave = safe(() => {
        hideCursor();
      });

      const onWindowBlur = safe(() => {
        hideCursor();
      });

      const updateSupport = safe(() => {
        supported = supportsCustomCursor();
        if (!supported) {
          hideCursor();
        }
      });

      document.addEventListener("pointerover", onPointerOver);
      document.addEventListener("pointerout", onPointerOut);
      document.documentElement.addEventListener("pointerleave", onPointerLeave);
      window.addEventListener("pointermove", onPointerMove, { passive: true });
      window.addEventListener("blur", onWindowBlur);
      window.addEventListener("resize", updateSupport);
      finePointer.addEventListener("change", updateSupport);
      reducedMotion.addEventListener("change", updateSupport);
      updateSupport();

      return () => {
        document.removeEventListener("pointerover", onPointerOver);
        document.removeEventListener("pointerout", onPointerOut);
        document.documentElement.removeEventListener("pointerleave", onPointerLeave);
        window.removeEventListener("pointermove", onPointerMove);
        window.removeEventListener("blur", onWindowBlur);
        window.removeEventListener("resize", updateSupport);
        finePointer.removeEventListener("change", updateSupport);
        reducedMotion.removeEventListener("change", updateSupport);
        document.documentElement.classList.remove("epac-custom-cursor");
        gsap.killTweensOf([cursor, ...allCursorParts]);
      };
    },
    { dependencies: [enabled], revertOnUpdate: true, scope: cursorRef },
  );

  return (
    <div ref={cursorRef} className="custom-cursor" aria-hidden="true">
      <span ref={dotRef} className="cursor-dot" style={cursorElementStyle} />
      <span ref={ringRef} className="cursor-ring" style={cursorElementStyle} />
      {[0, 1, 2, 3].map((index) => (
        <span
          key={index}
          ref={(element) => {
            trailRefs.current[index] = element;
          }}
          className={`cursor-trail cursor-trail-${index + 1}`}
          style={cursorElementStyle}
        />
      ))}
    </div>
  );
}

export interface MagneticLinkProps
  extends AnchorHTMLAttributes<HTMLAnchorElement> {
  enabled: boolean;
}

export interface MagneticButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  enabled: boolean;
}

function useMagneticMotion(
  shellRef: React.RefObject<HTMLSpanElement | null>,
  controlRef: React.RefObject<HTMLElement | null>,
  enabled: boolean,
) {
  useGSAP(
    (_context, contextSafe) => {
      const shell = shellRef.current;
      const control = controlRef.current;

      if (!shell || !control || !enabled) {
        return;
      }

      const safe = contextSafe!;
      const onPointerMove = safe((event: PointerEvent) => {
        if (event.pointerType === "touch") {
          return;
        }

        const bounds = shell.getBoundingClientRect();
        const localX = event.clientX - bounds.left;
        const localY = event.clientY - bounds.top;
        const offsetX = (localX - bounds.width / 2) * 0.18;
        const offsetY = (localY - bounds.height / 2) * 0.18;

        shell.style.setProperty("--mouse-x", `${localX}px`);
        shell.style.setProperty("--mouse-y", `${localY}px`);
        gsap.to(control, {
          duration: 0.24,
          ease: "power3.out",
          overwrite: true,
          x: offsetX,
          y: offsetY,
        });
      });

      const onPointerLeave = safe(() => {
        shell.style.setProperty("--mouse-x", "50%");
        shell.style.setProperty("--mouse-y", "50%");
        gsap.to(control, {
          duration: 0.75,
          ease: "elastic.out(1, 0.42)",
          overwrite: true,
          x: 0,
          y: 0,
        });
      });

      shell.addEventListener("pointermove", onPointerMove);
      shell.addEventListener("pointerleave", onPointerLeave);

      return () => {
        shell.removeEventListener("pointermove", onPointerMove);
        shell.removeEventListener("pointerleave", onPointerLeave);
        shell.style.removeProperty("--mouse-x");
        shell.style.removeProperty("--mouse-y");
      };
    },
    { dependencies: [enabled], revertOnUpdate: true, scope: shellRef },
  );
}

function magneticClassName(className?: string) {
  return ["magnetic-control", className].filter(Boolean).join(" ");
}

/** Keeps a full shell hit-area while moving only the semantic anchor. */
export function MagneticLink({
  children,
  className,
  enabled,
  ...anchorProps
}: MagneticLinkProps) {
  const shellRef = useRef<HTMLSpanElement>(null);
  const controlRef = useRef<HTMLAnchorElement>(null);

  useMagneticMotion(shellRef, controlRef, enabled);

  return (
    <span ref={shellRef} className="magnetic-shell">
      <a ref={controlRef} className={magneticClassName(className)} {...anchorProps}>
        {children}
      </a>
    </span>
  );
}

/** Optional button counterpart for controls that are actions rather than links. */
export function MagneticButton({
  children,
  className,
  enabled,
  ...buttonProps
}: MagneticButtonProps) {
  const shellRef = useRef<HTMLSpanElement>(null);
  const controlRef = useRef<HTMLButtonElement>(null);

  useMagneticMotion(shellRef, controlRef, enabled);

  return (
    <span ref={shellRef} className="magnetic-shell">
      <button ref={controlRef} className={magneticClassName(className)} {...buttonProps}>
        {children}
      </button>
    </span>
  );
}

/**
 * Ambient playback has no automatic start path: it can only be enabled by a
 * click, and a visibility restore is permitted only after that explicit intent.
 */
export function AudioControl() {
  const controlRef = useRef<HTMLButtonElement>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const explicitIntentRef = useRef(false);
  const pausedForVisibilityRef = useRef(false);
  const requestIdRef = useRef(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [status, setStatus] = useState("");

  useGSAP(
    (_context, contextSafe) => {
      const button = controlRef.current;
      if (!button) {
        return;
      }

      const safe = contextSafe!;
      const getAudio = () => {
        if (!audioRef.current) {
          const audio = new Audio(getPublicAssetUrl("media/ambient.mp3"));
          audio.loop = true;
          audio.preload = "auto";
          audio.volume = 0;
          audioRef.current = audio;
        }

        return audioRef.current;
      };

      const fadeIn = safe((audio: HTMLAudioElement, requestId: number) => {
        if (
          requestId !== requestIdRef.current ||
          !explicitIntentRef.current ||
          document.hidden
        ) {
          return;
        }

        gsap.killTweensOf(audio, "volume");
        gsap.to(audio, {
          duration: 0.55,
          ease: "power2.out",
          overwrite: true,
          volume: AUDIO_VOLUME,
        });
      });

      const fadeOut = safe((audio: HTMLAudioElement, requestId: number) => {
        gsap.killTweensOf(audio, "volume");
        gsap.to(audio, {
          duration: 0.35,
          ease: "power2.out",
          overwrite: true,
          volume: 0,
          onComplete: () => {
            if (
              requestId === requestIdRef.current &&
              !explicitIntentRef.current
            ) {
              audio.pause();
            }
          },
        });
      });

      const requestPlayback = () => {
        const audio = getAudio();
        const requestId = ++requestIdRef.current;
        audio.loop = true;

        void audio
          .play()
          .then(() => {
            if (
              requestId !== requestIdRef.current ||
              !explicitIntentRef.current ||
              document.hidden
            ) {
              audio.pause();
              return;
            }

            setIsPlaying(true);
            setStatus("");
            fadeIn(audio, requestId);
          })
          .catch(() => {
            if (requestId !== requestIdRef.current || !explicitIntentRef.current) {
              return;
            }

            explicitIntentRef.current = false;
            pausedForVisibilityRef.current = false;
            setIsPlaying(false);
            setStatus("Sound could not play. Check your browser audio settings.");
          });
      };

      const onClick = safe(() => {
        if (explicitIntentRef.current) {
          explicitIntentRef.current = false;
          pausedForVisibilityRef.current = false;
          setIsPlaying(false);
          setStatus("");

          const audio = audioRef.current;
          const requestId = ++requestIdRef.current;
          if (audio) {
            fadeOut(audio, requestId);
          }
          return;
        }

        explicitIntentRef.current = true;
        pausedForVisibilityRef.current = false;
        setStatus("");
        requestPlayback();
      });

      const onVisibilityChange = safe(() => {
        const audio = audioRef.current;

        if (document.hidden) {
          if (explicitIntentRef.current && audio) {
            pausedForVisibilityRef.current = true;
            requestIdRef.current += 1;
            gsap.killTweensOf(audio, "volume");
            audio.pause();
            setIsPlaying(false);
          }
          return;
        }

        if (explicitIntentRef.current && pausedForVisibilityRef.current) {
          pausedForVisibilityRef.current = false;
          requestPlayback();
        }
      });

      button.addEventListener("click", onClick);
      document.addEventListener("visibilitychange", onVisibilityChange);

      return () => {
        button.removeEventListener("click", onClick);
        document.removeEventListener("visibilitychange", onVisibilityChange);
        explicitIntentRef.current = false;
        pausedForVisibilityRef.current = false;
        requestIdRef.current += 1;

        const audio = audioRef.current;
        if (audio) {
          gsap.killTweensOf(audio, "volume");
          audio.pause();
          audio.removeAttribute("src");
          audio.load();
          audioRef.current = null;
        }
      };
    },
    { scope: controlRef },
  );

  return (
    <button
      ref={controlRef}
      type="button"
      className="audio-control"
      aria-label={isPlaying ? "Turn sound off" : "Turn sound on"}
      aria-pressed={isPlaying}
    >
      <span className="audio-bars" aria-hidden="true">
        <span className="audio-bar" />
        <span className="audio-bar" />
        <span className="audio-bar" />
      </span>
      <span className="audio-label">Sound {isPlaying ? "on" : "off"}</span>
      <span className="audio-status" role="status" aria-live="polite">
        {status}
      </span>
    </button>
  );
}
