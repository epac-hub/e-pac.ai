import { useEffect, useRef } from 'react';
import * as THREE from 'three';

type StarFlightProps = {
  enabled: boolean;
};

type FlightStar = {
  x: number;
  y: number;
  phase: number;
  size: number;
  alpha: number;
  streak: boolean;
};

type FlightRenderer = {
  kind: 'webgl' | 'canvas2d';
  resize: (width: number, height: number, pixelRatio: number) => void;
  render: (elapsed: number, parallaxX: number, parallaxY: number) => void;
  dispose: () => void;
};

const FAR_DISTANCE = 165;
const NEAR_DISTANCE = 2.25;
const FLIGHT_SPEED = 0.052;
const FIELD_OF_VIEW = 52;

function clamp(value: number, minimum: number, maximum: number) {
  return Math.min(maximum, Math.max(minimum, value));
}

function isMobileViewport(width: number) {
  return width < 720;
}

function getMetrics(canvas: HTMLCanvasElement) {
  const bounds = canvas.getBoundingClientRect();
  const width = Math.max(1, Math.round(bounds.width || window.innerWidth));
  const height = Math.max(1, Math.round(bounds.height || window.innerHeight));
  const mobile = isMobileViewport(width);
  const pixelRatio = Math.min(mobile ? 1.5 : 2, Math.max(1, window.devicePixelRatio || 1));

  return { width, height, mobile, pixelRatio };
}

function createStars(width: number, height: number, mobile: boolean) {
  const areaScale = clamp((width * height) / 1_000_000, 0.62, 1.15);
  const count = Math.round((mobile ? 600 : 1400) * areaScale);
  const streakCount = Math.max(8, Math.round(count * (mobile ? 0.025 : 0.038)));
  const aspect = width / Math.max(1, height);
  const viewHeightAtFar = 2 * FAR_DISTANCE * Math.tan((FIELD_OF_VIEW * Math.PI) / 360);
  const halfWidth = (viewHeightAtFar * aspect * 1.16) / 2;
  const halfHeight = (viewHeightAtFar * 1.16) / 2;
  const stars: FlightStar[] = [];

  for (let index = 0; index < count; index += 1) {
    const angle = Math.random() * Math.PI * 2;
    const radius = 0.15 + Math.sqrt(Math.random()) * 0.96;
    stars.push({
      x: Math.cos(angle) * halfWidth * radius,
      y: Math.sin(angle) * halfHeight * radius,
      phase: Math.random(),
      size: 0.78 + Math.random() * 1.15,
      alpha: 0.55 + Math.random() * 0.4,
      streak: index < streakCount,
    });
  }

  for (let index = stars.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [stars[index], stars[swapIndex]] = [stars[swapIndex], stars[index]];
  }

  return stars;
}

function createWebGLRenderer(
  canvas: HTMLCanvasElement,
  width: number,
  height: number,
  pixelRatio: number,
  mobile: boolean,
): FlightRenderer | null {
  let renderer: THREE.WebGLRenderer | null = null;
  let starGeometry: THREE.BufferGeometry | null = null;
  let streakGeometry: THREE.BufferGeometry | null = null;
  let starMaterial: THREE.ShaderMaterial | null = null;
  let streakMaterial: THREE.ShaderMaterial | null = null;

  try {
    renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: false,
      antialias: false,
      powerPreference: 'high-performance',
    });
    renderer.setClearColor(0x000000, 1);
    renderer.setPixelRatio(pixelRatio);
    renderer.setSize(width, height, false);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(FIELD_OF_VIEW, width / height, 0.1, FAR_DISTANCE + 10);
    const stars = createStars(width, height, mobile);
    const positions = new Float32Array(stars.length * 3);
    const phases = new Float32Array(stars.length);
    const sizes = new Float32Array(stars.length);
    const alphas = new Float32Array(stars.length);

    stars.forEach((star, index) => {
      const offset = index * 3;
      positions[offset] = star.x;
      positions[offset + 1] = star.y;
      phases[index] = star.phase;
      sizes[index] = star.size;
      alphas[index] = star.alpha;
    });

    starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    starGeometry.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1));
    starGeometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
    starGeometry.setAttribute('aAlpha', new THREE.BufferAttribute(alphas, 1));

    starMaterial = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      depthTest: false,
      uniforms: { uTime: { value: 0 }, uPixelRatio: { value: pixelRatio } },
      vertexShader: `
        uniform float uTime;
        uniform float uPixelRatio;
        attribute float aPhase;
        attribute float aSize;
        attribute float aAlpha;
        varying float vAlpha;

        void main() {
          float progress = fract(aPhase + uTime * ${FLIGHT_SPEED.toFixed(3)});
          float distance = mix(${FAR_DISTANCE.toFixed(1)}, ${NEAR_DISTANCE.toFixed(2)}, progress);
          vec4 viewPosition = modelViewMatrix * vec4(position.xy, -distance, 1.0);
          gl_Position = projectionMatrix * viewPosition;
          gl_PointSize = clamp(aSize * (0.85 + progress * 1.40) * 115.0 / -viewPosition.z, 1.0, 3.30) * uPixelRatio;
          vAlpha = aAlpha * (0.70 + progress * 0.25);
        }
      `,
      fragmentShader: `
        varying float vAlpha;

        void main() {
          float radius = length(gl_PointCoord - 0.5);
          float halo = 1.0 - smoothstep(0.12, 0.50, radius);
          float core = 1.0 - smoothstep(0.14, 0.46, radius);
          float alpha = vAlpha * (halo * 0.5 + core * 0.9);
          if (alpha < 0.01) discard;
          gl_FragColor = vec4(vec3(1.0), alpha);
        }
      `,
    });

    const points = new THREE.Points(starGeometry, starMaterial);
    points.frustumCulled = false;
    scene.add(points);

    const streaks = stars.filter((star) => star.streak);
    const streakPositions = new Float32Array(streaks.length * 2 * 3);
    const streakPhases = new Float32Array(streaks.length * 2);
    const streakTails = new Float32Array(streaks.length * 2);
    const streakAlphas = new Float32Array(streaks.length * 2);

    streaks.forEach((star, index) => {
      const vertex = index * 2;
      const positionOffset = vertex * 3;
      streakPositions[positionOffset] = star.x;
      streakPositions[positionOffset + 1] = star.y;
      streakPositions[positionOffset + 3] = star.x;
      streakPositions[positionOffset + 4] = star.y;
      streakPhases[vertex] = star.phase;
      streakPhases[vertex + 1] = star.phase;
      streakTails[vertex + 1] = 1;
      streakAlphas[vertex] = star.alpha * 0.42;
      streakAlphas[vertex + 1] = star.alpha * 0.42;
    });

    streakGeometry = new THREE.BufferGeometry();
    streakGeometry.setAttribute('position', new THREE.BufferAttribute(streakPositions, 3));
    streakGeometry.setAttribute('aPhase', new THREE.BufferAttribute(streakPhases, 1));
    streakGeometry.setAttribute('aTail', new THREE.BufferAttribute(streakTails, 1));
    streakGeometry.setAttribute('aAlpha', new THREE.BufferAttribute(streakAlphas, 1));

    streakMaterial = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      depthTest: false,
      uniforms: { uTime: { value: 0 } },
      vertexShader: `
        uniform float uTime;
        attribute float aPhase;
        attribute float aTail;
        attribute float aAlpha;
        varying float vAlpha;

        void main() {
          float progress = fract(aPhase + uTime * ${FLIGHT_SPEED.toFixed(3)});
          float distance = mix(${FAR_DISTANCE.toFixed(1)}, ${NEAR_DISTANCE.toFixed(2)}, progress);
          distance += aTail * (0.55 + progress * 3.25);
          vec4 viewPosition = modelViewMatrix * vec4(position.xy, -distance, 1.0);
          gl_Position = projectionMatrix * viewPosition;
          vAlpha = aAlpha * smoothstep(0.58, 0.96, progress);
        }
      `,
      fragmentShader: `
        varying float vAlpha;

        void main() {
          if (vAlpha < 0.01) discard;
          gl_FragColor = vec4(vec3(1.0), vAlpha);
        }
      `,
    });

    const lines = new THREE.LineSegments(streakGeometry, streakMaterial);
    lines.frustumCulled = false;
    scene.add(lines);

    return {
      kind: 'webgl',
      resize(nextWidth, nextHeight, nextPixelRatio) {
        camera.aspect = nextWidth / Math.max(1, nextHeight);
        const aspectScale = camera.aspect / (width / height);
        points.scale.x = aspectScale;
        lines.scale.x = aspectScale;
        camera.updateProjectionMatrix();
        if (starMaterial) starMaterial.uniforms.uPixelRatio.value = nextPixelRatio;
        renderer?.setPixelRatio(nextPixelRatio);
        renderer?.setSize(nextWidth, nextHeight, false);
      },
      render(elapsed, parallaxX, parallaxY) {
        if (!renderer || !starMaterial || !streakMaterial) return;
        camera.position.set(parallaxX * 0.38, -parallaxY * 0.28, 0);
        camera.updateMatrixWorld();
        starMaterial.uniforms.uTime.value = elapsed;
        streakMaterial.uniforms.uTime.value = elapsed;
        renderer.render(scene, camera);
      },
      dispose() {
        scene.remove(points, lines);
        starGeometry?.dispose();
        streakGeometry?.dispose();
        starMaterial?.dispose();
        streakMaterial?.dispose();
        renderer?.dispose();
      },
    };
  } catch {
    starGeometry?.dispose();
    streakGeometry?.dispose();
    starMaterial?.dispose();
    streakMaterial?.dispose();
    renderer?.dispose();
    return null;
  }
}

function createCanvasRenderer(
  canvas: HTMLCanvasElement,
  width: number,
  height: number,
  pixelRatio: number,
  mobile: boolean,
): FlightRenderer {
  const context = canvas.getContext('2d', { alpha: false, desynchronized: true });
  const stars = createStars(width, height, mobile);
  let drawWidth = width;
  let drawHeight = height;
  let drawPixelRatio = pixelRatio;

  const resize = (nextWidth: number, nextHeight: number, nextPixelRatio: number) => {
    drawWidth = nextWidth;
    drawHeight = nextHeight;
    drawPixelRatio = nextPixelRatio;
    canvas.width = Math.max(1, Math.round(drawWidth * drawPixelRatio));
    canvas.height = Math.max(1, Math.round(drawHeight * drawPixelRatio));
  };

  resize(width, height, pixelRatio);

  return {
    kind: 'canvas2d',
    resize,
    render(elapsed, parallaxX, parallaxY) {
      if (!context) return;
      const focalLength = drawHeight / (2 * Math.tan((FIELD_OF_VIEW * Math.PI) / 360));
      context.setTransform(drawPixelRatio, 0, 0, drawPixelRatio, 0, 0);
      context.fillStyle = '#000';
      context.fillRect(0, 0, drawWidth, drawHeight);

      for (const star of stars) {
        const progress = (star.phase + elapsed * FLIGHT_SPEED) % 1;
        const distance = FAR_DISTANCE + (NEAR_DISTANCE - FAR_DISTANCE) * progress;
        const scale = focalLength / distance;
        const aspectScale = (drawWidth / drawHeight) / (width / height);
        const x = drawWidth / 2 + (star.x * aspectScale - parallaxX * 0.38) * scale;
        const y = drawHeight / 2 + (star.y + parallaxY * 0.28) * scale;

        if (x < -4 || x > drawWidth + 4 || y < -4 || y > drawHeight + 4) continue;

        const radius = clamp(star.size * (0.6 + progress * 1.7) * 115 / distance, 0.5, 2.1);
        context.globalAlpha = star.alpha * (0.7 + progress * 0.25);

        if (star.streak && progress > 0.58) {
          const tailDistance = distance + 0.55 + progress * 3.25;
          const tailScale = focalLength / tailDistance;
          context.beginPath();
          context.moveTo(drawWidth / 2 + (star.x - parallaxX * 0.38) * tailScale, drawHeight / 2 + (star.y + parallaxY * 0.28) * tailScale);
          context.lineTo(x, y);
          context.lineWidth = 0.55;
          context.strokeStyle = '#fff';
          context.globalAlpha *= (progress - 0.58) / 0.42 * 0.42;
          context.stroke();
          context.globalAlpha = star.alpha * (0.7 + progress * 0.25);
        }

        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fillStyle = '#fff';
        context.fill();
      }

      context.globalAlpha = 1;
    },
    dispose() {
      context?.clearRect(0, 0, canvas.width, canvas.height);
    },
  };
}

export default function StarFlight({ enabled }: StarFlightProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const enabledRef = useRef(enabled);
  const controlRef = useRef<(() => void) | null>(null);
  enabledRef.current = enabled;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let disposed = false;
    let frame = 0;
    let animationFrame = 0;
    let elapsed = 0;
    let previousTime = performance.now();
    let pointerX = 0;
    let pointerY = 0;
    let targetX = 0;
    let targetY = 0;
    let metrics = getMetrics(canvas);
    let renderer = createWebGLRenderer(canvas, metrics.width, metrics.height, metrics.pixelRatio, metrics.mobile);

    if (!renderer) {
      renderer = createCanvasRenderer(canvas, metrics.width, metrics.height, metrics.pixelRatio, metrics.mobile);
    }

    canvas.dataset.renderer = renderer.kind;

    const draw = () => {
      renderer?.render(elapsed, pointerX, pointerY);
      frame += 1;
      canvas.dataset.frame = String(frame);
    };

    const stop = () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
        animationFrame = 0;
      }
      canvas.dataset.motion = 'paused';
    };

    const tick = (time: number) => {
      if (disposed || document.hidden || !enabledRef.current) {
        stop();
        return;
      }

      const delta = Math.max(0, (time - previousTime) / 1000);
      previousTime = time;
      elapsed += delta;
      const smoothing = 1 - Math.exp(-delta * 3.2);
      pointerX += (targetX - pointerX) * smoothing;
      pointerY += (targetY - pointerY) * smoothing;
      draw();
      animationFrame = window.requestAnimationFrame(tick);
    };

    const start = () => {
      if (disposed || !enabledRef.current || document.hidden) {
        canvas.dataset.motion = 'paused';
        return;
      }
      if (animationFrame) return;
      previousTime = performance.now();
      canvas.dataset.motion = 'playing';
      animationFrame = window.requestAnimationFrame(tick);
    };

    const resize = () => {
      metrics = getMetrics(canvas);
      renderer?.resize(metrics.width, metrics.height, metrics.pixelRatio);
      draw();
    };

    const onVisibilityChange = () => {
      if (document.hidden) stop();
      else start();
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!enabledRef.current || event.pointerType === 'touch') return;
      const bounds = canvas.getBoundingClientRect();
      if (!bounds.width || !bounds.height) return;
      targetX = clamp((event.clientX - bounds.left) / bounds.width - 0.5, -0.5, 0.5);
      targetY = clamp((event.clientY - bounds.top) / bounds.height - 0.5, -0.5, 0.5);
    };

    const resizeObserver = typeof ResizeObserver === 'undefined' ? null : new ResizeObserver(resize);
    resizeObserver?.observe(canvas);
    window.addEventListener('resize', resize, { passive: true });
    document.addEventListener('visibilitychange', onVisibilityChange);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    controlRef.current = () => {
      if (enabledRef.current && !document.hidden) start();
      else stop();
    };

    resize();
    if (enabledRef.current && !document.hidden) start();
    else canvas.dataset.motion = 'paused';

    return () => {
      disposed = true;
      controlRef.current = null;
      stop();
      resizeObserver?.disconnect();
      window.removeEventListener('resize', resize);
      document.removeEventListener('visibilitychange', onVisibilityChange);
      window.removeEventListener('pointermove', onPointerMove);
      renderer?.dispose();
      renderer = null;
    };
  }, []);

  useEffect(() => { controlRef.current?.(); }, [enabled]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      data-renderer="webgl"
      data-frame="0"
      data-motion={enabled ? 'playing' : 'paused'}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        display: 'block',
        pointerEvents: 'none',
        background: '#000',
      }}
    />
  );
}
