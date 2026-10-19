import { useEffect, useRef } from 'react';

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

type WebGLProgramInfo = {
  program: WebGLProgram;
  attributes: {
    position: number;
    phase: number;
    depth: number;
    alpha: number;
  };
  uniforms: {
    time: WebGLUniformLocation;
    perspective: WebGLUniformLocation;
    projectionDepth: WebGLUniformLocation;
    aspectScale: WebGLUniformLocation;
    camera: WebGLUniformLocation;
    pixelRatio?: WebGLUniformLocation;
  };
};

const FAR_DISTANCE = 165;
const NEAR_DISTANCE = 2.25;
const CAMERA_NEAR = 0.1;
const CAMERA_FAR = 175;
const FLIGHT_SPEED = 0.052;
const FIELD_OF_VIEW = 52;
const VERTEX_STRIDE = 5 * Float32Array.BYTES_PER_ELEMENT;

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
  // Reducimos solo el tope DPR móvil de 1.5 a 1.25 para aligerar la rasterización.
  const pixelRatio = Math.min(mobile ? 1.25 : 2, Math.max(1, window.devicePixelRatio || 1));

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

function getContextGL(canvas: HTMLCanvasElement) {
  const attributes: WebGLContextAttributes = {
    alpha: false,
    antialias: false,
    powerPreference: 'high-performance',
  };

  return (
    (canvas.getContext('webgl', attributes) as WebGLRenderingContext | null)
    ?? (canvas.getContext('experimental-webgl', attributes) as WebGLRenderingContext | null)
  );
}

function compileShader(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) throw new Error('No se pudo crear el shader WebGL.');

  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    const message = gl.getShaderInfoLog(shader) || 'Error de compilación WebGL.';
    gl.deleteShader(shader);
    throw new Error(message);
  }

  return shader;
}

function createProgram(gl: WebGLRenderingContext, vertexSource: string, fragmentSource: string) {
  let vertexShader: WebGLShader | null = null;
  let fragmentShader: WebGLShader | null = null;
  let program: WebGLProgram | null = null;

  try {
    vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexSource);
    fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentSource);
    program = gl.createProgram();
    if (!program) throw new Error('No se pudo crear el programa WebGL.');

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      throw new Error(gl.getProgramInfoLog(program) || 'Error de enlace WebGL.');
    }

    return program;
  } catch (error) {
    if (program) gl.deleteProgram(program);
    throw error;
  } finally {
    if (vertexShader) gl.deleteShader(vertexShader);
    if (fragmentShader) gl.deleteShader(fragmentShader);
  }
}

function requireAttribute(gl: WebGLRenderingContext, program: WebGLProgram, name: string) {
  const location = gl.getAttribLocation(program, name);
  if (location < 0) throw new Error(`Atributo WebGL no encontrado: ${name}`);
  return location;
}

function requireUniform(gl: WebGLRenderingContext, program: WebGLProgram, name: string) {
  const location = gl.getUniformLocation(program, name);
  if (!location) throw new Error(`Uniform WebGL no encontrado: ${name}`);
  return location;
}

function createProgramInfo(
  gl: WebGLRenderingContext,
  vertexSource: string,
  fragmentSource: string,
  points: boolean,
): WebGLProgramInfo {
  const program = createProgram(gl, vertexSource, fragmentSource);

  try {
    return {
      program,
      attributes: {
        position: requireAttribute(gl, program, 'aPosition'),
        phase: requireAttribute(gl, program, 'aPhase'),
        depth: requireAttribute(gl, program, points ? 'aSize' : 'aTail'),
        alpha: requireAttribute(gl, program, 'aAlpha'),
      },
      uniforms: {
        time: requireUniform(gl, program, 'uTime'),
        perspective: requireUniform(gl, program, 'uPerspective'),
        projectionDepth: requireUniform(gl, program, 'uProjectionDepth'),
        aspectScale: requireUniform(gl, program, 'uAspectScale'),
        camera: requireUniform(gl, program, 'uCamera'),
        ...(points ? { pixelRatio: requireUniform(gl, program, 'uPixelRatio') } : {}),
      },
    };
  } catch (error) {
    gl.deleteProgram(program);
    throw error;
  }
}

function bindAttributes(gl: WebGLRenderingContext, info: WebGLProgramInfo, buffer: WebGLBuffer) {
  gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
  gl.enableVertexAttribArray(info.attributes.position);
  gl.vertexAttribPointer(info.attributes.position, 2, gl.FLOAT, false, VERTEX_STRIDE, 0);
  gl.enableVertexAttribArray(info.attributes.phase);
  gl.vertexAttribPointer(info.attributes.phase, 1, gl.FLOAT, false, VERTEX_STRIDE, 2 * Float32Array.BYTES_PER_ELEMENT);
  gl.enableVertexAttribArray(info.attributes.depth);
  gl.vertexAttribPointer(info.attributes.depth, 1, gl.FLOAT, false, VERTEX_STRIDE, 3 * Float32Array.BYTES_PER_ELEMENT);
  gl.enableVertexAttribArray(info.attributes.alpha);
  gl.vertexAttribPointer(info.attributes.alpha, 1, gl.FLOAT, false, VERTEX_STRIDE, 4 * Float32Array.BYTES_PER_ELEMENT);
}

function createWebGLRenderer(
  canvas: HTMLCanvasElement,
  width: number,
  height: number,
  pixelRatio: number,
  mobile: boolean,
): FlightRenderer | null {
  const gl = getContextGL(canvas);
  if (!gl) return null;

  let starsBuffer: WebGLBuffer | null = null;
  let streaksBuffer: WebGLBuffer | null = null;
  let starsProgram: WebGLProgramInfo | null = null;
  let streaksProgram: WebGLProgramInfo | null = null;

  try {
    const stars = createStars(width, height, mobile);
    const starsData = new Float32Array(stars.length * 5);
    const streaks = stars.filter((star) => star.streak);
    const streaksData = new Float32Array(streaks.length * 2 * 5);

    stars.forEach((star, index) => {
      const offset = index * 5;
      starsData[offset] = star.x;
      starsData[offset + 1] = star.y;
      starsData[offset + 2] = star.phase;
      starsData[offset + 3] = star.size;
      starsData[offset + 4] = star.alpha;
    });

    streaks.forEach((star, index) => {
      const head = index * 10;
      const tail = head + 5;
      streaksData[head] = star.x;
      streaksData[head + 1] = star.y;
      streaksData[head + 2] = star.phase;
      streaksData[head + 4] = star.alpha * 0.42;
      streaksData[tail] = star.x;
      streaksData[tail + 1] = star.y;
      streaksData[tail + 2] = star.phase;
      streaksData[tail + 3] = 1;
      streaksData[tail + 4] = star.alpha * 0.42;
    });

    starsBuffer = gl.createBuffer();
    streaksBuffer = gl.createBuffer();
    if (!starsBuffer || !streaksBuffer) throw new Error('No se pudieron crear los buffers WebGL.');

    gl.bindBuffer(gl.ARRAY_BUFFER, starsBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, starsData, gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, streaksBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, streaksData, gl.STATIC_DRAW);

    const sharedVertex = `
      uniform float uTime;
      uniform vec2 uPerspective;
      uniform vec2 uProjectionDepth;
      uniform float uAspectScale;
      uniform vec2 uCamera;
      attribute vec2 aPosition;
      attribute float aPhase;
      attribute float aAlpha;
      varying float vAlpha;

      vec3 flightPosition(float distance) {
        return vec3(
          aPosition.x * uAspectScale - uCamera.x,
          aPosition.y - uCamera.y,
          -distance
        );
      }

      vec4 projectPerspective(vec3 viewPosition) {
        return vec4(
          viewPosition.x * uPerspective.x,
          viewPosition.y * uPerspective.y,
          viewPosition.z * uProjectionDepth.x + uProjectionDepth.y,
          -viewPosition.z
        );
      }
    `;

    starsProgram = createProgramInfo(
      gl,
      `${sharedVertex}
        uniform float uPixelRatio;
        attribute float aSize;

        void main() {
          float progress = fract(aPhase + uTime * ${FLIGHT_SPEED.toFixed(3)});
          float distance = mix(${FAR_DISTANCE.toFixed(1)}, ${NEAR_DISTANCE.toFixed(2)}, progress);
          vec3 viewPosition = flightPosition(distance);
          gl_Position = projectPerspective(viewPosition);
          gl_PointSize = clamp(aSize * (0.85 + progress * 1.40) * 115.0 / -viewPosition.z, 1.0, 3.30) * uPixelRatio;
          vAlpha = aAlpha * (0.70 + progress * 0.25);
        }
      `,
      `
        precision mediump float;
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
      true,
    );

    streaksProgram = createProgramInfo(
      gl,
      `${sharedVertex}
        attribute float aTail;

        void main() {
          float progress = fract(aPhase + uTime * ${FLIGHT_SPEED.toFixed(3)});
          float distance = mix(${FAR_DISTANCE.toFixed(1)}, ${NEAR_DISTANCE.toFixed(2)}, progress);
          distance += aTail * (0.55 + progress * 3.25);
          gl_Position = projectPerspective(flightPosition(distance));
          vAlpha = aAlpha * smoothstep(0.58, 0.96, progress);
        }
      `,
      `
        precision mediump float;
        varying float vAlpha;

        void main() {
          if (vAlpha < 0.01) discard;
          gl_FragColor = vec4(vec3(1.0), vAlpha);
        }
      `,
      false,
    );

    const baseAspect = width / Math.max(1, height);
    const focalScale = 1 / Math.tan((FIELD_OF_VIEW * Math.PI) / 360);
    const projectionDepthA = -(CAMERA_FAR + CAMERA_NEAR) / (CAMERA_FAR - CAMERA_NEAR);
    const projectionDepthB = (-2 * CAMERA_FAR * CAMERA_NEAR) / (CAMERA_FAR - CAMERA_NEAR);
    let drawWidth = width;
    let drawHeight = height;
    let drawPixelRatio = pixelRatio;

    const resize = (nextWidth: number, nextHeight: number, nextPixelRatio: number) => {
      drawWidth = nextWidth;
      drawHeight = nextHeight;
      drawPixelRatio = nextPixelRatio;
      canvas.width = Math.max(1, Math.round(drawWidth * drawPixelRatio));
      canvas.height = Math.max(1, Math.round(drawHeight * drawPixelRatio));
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    const setSharedUniforms = (info: WebGLProgramInfo, elapsed: number, parallaxX: number, parallaxY: number) => {
      const aspect = drawWidth / Math.max(1, drawHeight);
      gl.uniform1f(info.uniforms.time, elapsed);
      gl.uniform2f(info.uniforms.perspective, focalScale / aspect, focalScale);
      gl.uniform2f(info.uniforms.projectionDepth, projectionDepthA, projectionDepthB);
      gl.uniform1f(info.uniforms.aspectScale, aspect / baseAspect);
      gl.uniform2f(info.uniforms.camera, parallaxX * 0.38, -parallaxY * 0.28);
    };

    gl.clearColor(0, 0, 0, 1);
    gl.disable(gl.DEPTH_TEST);
    gl.depthMask(false);
    gl.enable(gl.BLEND);
    gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    resize(width, height, pixelRatio);

    return {
      kind: 'webgl',
      resize,
      render(elapsed, parallaxX, parallaxY) {
        if (!starsBuffer || !streaksBuffer || !starsProgram || !streaksProgram) return;

        gl.clear(gl.COLOR_BUFFER_BIT);
        gl.useProgram(starsProgram.program);
        setSharedUniforms(starsProgram, elapsed, parallaxX, parallaxY);
        gl.uniform1f(starsProgram.uniforms.pixelRatio!, drawPixelRatio);
        bindAttributes(gl, starsProgram, starsBuffer);
        gl.drawArrays(gl.POINTS, 0, stars.length);

        gl.useProgram(streaksProgram.program);
        setSharedUniforms(streaksProgram, elapsed, parallaxX, parallaxY);
        bindAttributes(gl, streaksProgram, streaksBuffer);
        gl.drawArrays(gl.LINES, 0, streaks.length * 2);
      },
      dispose() {
        if (starsBuffer) gl.deleteBuffer(starsBuffer);
        if (streaksBuffer) gl.deleteBuffer(streaksBuffer);
        if (starsProgram) gl.deleteProgram(starsProgram.program);
        if (streaksProgram) gl.deleteProgram(streaksProgram.program);
        starsBuffer = null;
        streaksBuffer = null;
        starsProgram = null;
        streaksProgram = null;
      },
    };
  } catch {
    if (starsBuffer) gl.deleteBuffer(starsBuffer);
    if (streaksBuffer) gl.deleteBuffer(streaksBuffer);
    if (starsProgram) gl.deleteProgram(starsProgram.program);
    if (streaksProgram) gl.deleteProgram(streaksProgram.program);
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
