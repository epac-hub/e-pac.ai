import { Component, useCallback, useEffect, useMemo, useRef, useState, type CSSProperties, type MutableRefObject, type ReactNode } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const STAR_COUNT = 2000;
const BACKGROUND_CAMERA = { position: [0, 0, 7] as [number, number, number], fov: 50 };
const ORBITAL_CAMERA = { position: [0, 0, 9] as [number, number, number], fov: 35 };

const FIXED_BACKGROUND_STYLE: CSSProperties = {
  position: 'fixed',
  inset: 0,
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
};

const ORBITAL_WRAPPER_STYLE: CSSProperties = {
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
};

const CANVAS_STYLE: CSSProperties = {
  display: 'block',
  width: '100%',
  height: '100%',
  pointerEvents: 'none',
};

const simplexNoise = /* glsl */ `
vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
  return mod289(((x * 34.0) + 1.0) * x);
}

vec4 taylorInvSqrt(vec4 r) {
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);

  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);

  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;

  i = mod289(i);
  vec4 p = permute(
    permute(
      permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)
    ) + i.x + vec4(0.0, i1.x, i2.x, 1.0)
  );

  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);

  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}

float fbm(vec3 p) {
  float value = 0.0;
  value += 0.55 * snoise(p);
  p = p * 2.02 + vec3(11.7, 2.5, 4.1);
  value += 0.28 * snoise(p);
  p = p * 2.03 + vec3(1.7, 9.2, 5.3);
  value += 0.12 * snoise(p);
  return value;
}
`;

const gradientVertexShader = /* glsl */ `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

const gradientFragmentShader = /* glsl */ `
uniform float uTime;
uniform float uAspect;
varying vec2 vUv;

${simplexNoise}

void main() {
  vec2 uv = vUv - 0.5;
  uv.x *= uAspect;

  float slowTime = uTime * 0.035;
  float field = fbm(vec3(uv * 1.2, slowTime));
  float detail = snoise(vec3(uv * 2.6 + field * 0.18, slowTime * 1.35));

  float verticalWash = smoothstep(-0.72, 0.78, uv.y + field * 0.13);
  float violetBloom = smoothstep(0.78, -0.30, length(uv - vec2(-0.24, 0.17) + field * 0.045));
  float farBloom = smoothstep(1.12, 0.05, length(uv - vec2(0.58, -0.38)));
  float vignette = smoothstep(1.38, 0.18, length(uv));

  vec3 midnight = vec3(0.008, 0.004, 0.022);
  vec3 plum = vec3(0.055, 0.018, 0.115);
  vec3 violet = vec3(0.205, 0.070, 0.395);
  vec3 color = mix(midnight, plum, verticalWash * 0.72 + field * 0.08 + 0.18);
  color += violet * (violetBloom * 0.34 + farBloom * 0.08 + max(detail, 0.0) * 0.025);
  color *= 0.57 + vignette * 0.43;

  gl_FragColor = vec4(color, 0.82);
}
`;

const starVertexShader = /* glsl */ `
uniform float uTime;
attribute float aSize;
attribute float aPhase;
varying float vTwinkle;

void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  vTwinkle = 0.52 + 0.48 * sin(uTime * (0.72 + aPhase * 0.16) + aPhase * 6.2831853);
  gl_PointSize = min(4.0, aSize * (1.25 + vTwinkle * 1.15) * (13.0 / max(1.0, -mvPosition.z)));
  gl_Position = projectionMatrix * mvPosition;
}
`;

const starFragmentShader = /* glsl */ `
varying float vTwinkle;

void main() {
  float distanceToCenter = length(gl_PointCoord - vec2(0.5));
  float star = 1.0 - smoothstep(0.12, 0.5, distanceToCenter);
  vec3 color = mix(vec3(0.56, 0.48, 1.0), vec3(0.94, 0.91, 1.0), vTwinkle);
  gl_FragColor = vec4(color, star * (0.20 + vTwinkle * 0.30));
}
`;

type SceneProps = {
  enabled: boolean;
};

type BoundaryProps = {
  children: ReactNode;
  fallback: ReactNode;
};

type BoundaryState = {
  failed: boolean;
};

class WebGLErrorBoundary extends Component<BoundaryProps, BoundaryState> {
  public state: BoundaryState = { failed: false };

  public static getDerivedStateFromError(): BoundaryState {
    return { failed: true };
  }

  public render(): ReactNode {
    return this.state.failed ? this.props.fallback : this.props.children;
  }
}

function isWebGLProbablyAvailable(): boolean {
  if (typeof window === 'undefined') return false;

  // This deliberately avoids getContext(): Canvas creates the sole rendering context only when mounted.
  return typeof window.WebGLRenderingContext !== 'undefined' || typeof window.WebGL2RenderingContext !== 'undefined';
}

function useClientMount(): boolean {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}

function RenderVisibilityGate({ enabled }: SceneProps): null {
  const setFrameloop = useThree((state) => state.setFrameloop);
  const invalidate = useThree((state) => state.invalidate);

  useEffect(() => {
    const syncFrameLoop = () => {
      const shouldRender = enabled && !document.hidden;
      setFrameloop(shouldRender ? 'always' : 'never');
      if (shouldRender) invalidate();
    };

    syncFrameLoop();
    document.addEventListener('visibilitychange', syncFrameLoop);
    return () => document.removeEventListener('visibilitychange', syncFrameLoop);
  }, [enabled, invalidate, setFrameloop]);

  return null;
}

function ContextLossGuard({ onLost }: { onLost: () => void }): null {
  const canvas = useThree((state) => state.gl.domElement);

  useEffect(() => {
    const handleContextLost = (event: Event) => {
      event.preventDefault();
      onLost();
    };

    canvas.addEventListener('webglcontextlost', handleContextLost, { passive: false });
    return () => canvas.removeEventListener('webglcontextlost', handleContextLost);
  }, [canvas, onLost]);

  return null;
}

function VioletGradientPlane(): ReactNode {
  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uAspect: { value: 1 },
    }),
    [],
  );

  useFrame((state) => {
    if (document.hidden) return;
    uniforms.uTime.value = state.clock.elapsedTime;
    uniforms.uAspect.value = state.size.width / Math.max(1, state.size.height);
  });

  return (
    <mesh position={[0, 0, -82]} scale={[240, 140, 1]} frustumCulled={false} renderOrder={-10}>
      <planeGeometry args={[1, 1]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={gradientVertexShader}
        fragmentShader={gradientFragmentShader}
        transparent
        depthTest={false}
        depthWrite={false}
      />
    </mesh>
  );
}

type ScrollMotion = {
  previousY: number;
  impulse: number;
};

type StarResources = {
  geometry: THREE.BufferGeometry;
  material: THREE.ShaderMaterial;
  positions: Float32Array;
  speeds: Float32Array;
};

type RandomSource = () => number;

function createSeededRandom(seed: number): RandomSource {
  let state = seed >>> 0;

  return () => {
    state += 0x6d2b79f5;
    let value = state;
    value = Math.imul(value ^ (value >>> 15), value | 1);
    value ^= value + Math.imul(value ^ (value >>> 7), value | 61);
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function resetStar(positions: Float32Array, speeds: Float32Array, index: number, z: number, random: RandomSource): void {
  const offset = index * 3;
  const distance = 7 - z;
  positions[offset] = (random() * 2 - 1) * (5.5 + distance * 0.76);
  positions[offset + 1] = (random() * 2 - 1) * (3.2 + distance * 0.43);
  positions[offset + 2] = z;
  speeds[index] = 0.72 + random() * 1.25;
}

function createStarResources(random: RandomSource, uniforms: { uTime: { value: number } }): StarResources {
  const positions = new Float32Array(STAR_COUNT * 3);
  const speeds = new Float32Array(STAR_COUNT);
  const sizes = new Float32Array(STAR_COUNT);
  const phases = new Float32Array(STAR_COUNT);

  for (let index = 0; index < STAR_COUNT; index += 1) {
    resetStar(positions, speeds, index, -2 - random() * 82, random);
    sizes[index] = 0.55 + random() * 0.92;
    phases[index] = random();
  }

  const geometry = new THREE.BufferGeometry();
  const positionAttribute = new THREE.BufferAttribute(positions, 3);
  positionAttribute.setUsage(THREE.DynamicDrawUsage);
  geometry.setAttribute('position', positionAttribute);
  geometry.setAttribute('aSize', new THREE.BufferAttribute(sizes, 1));
  geometry.setAttribute('aPhase', new THREE.BufferAttribute(phases, 1));
  geometry.computeBoundingSphere();

  const material = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: starVertexShader,
    fragmentShader: starFragmentShader,
    transparent: true,
    depthWrite: false,
    depthTest: true,
    blending: THREE.NormalBlending,
  });

  return { geometry, material, positions, speeds };
}

function StreamingStars(): ReactNode {
  const random = useMemo(() => createSeededRandom(0xe9ac042), []);
  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), []);
  const resources = useMemo(() => createStarResources(random, uniforms), [random, uniforms]);
  const scrollMotion = useRef<ScrollMotion>({ previousY: 0, impulse: 0 });

  useEffect(() => {
    scrollMotion.current.previousY = window.scrollY;

    const handleScroll = () => {
      const nextY = window.scrollY;
      const deltaY = Math.abs(nextY - scrollMotion.current.previousY);
      scrollMotion.current.previousY = nextY;
      scrollMotion.current.impulse = Math.min(1.25, scrollMotion.current.impulse + deltaY / 260);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // These resources are allocated manually to keep the 2,000-star field in one draw call.
    return () => {
      resources.geometry.dispose();
      resources.material.dispose();
    };
  }, [resources]);

  useFrame((state, delta) => {
    if (document.hidden) return;

    uniforms.uTime.value = state.clock.elapsedTime;
    scrollMotion.current.impulse = THREE.MathUtils.damp(scrollMotion.current.impulse, 0, 3.4, delta);
    const travel = 2.7 + scrollMotion.current.impulse * 20;

    for (let index = 0; index < STAR_COUNT; index += 1) {
      const offset = index * 3;
      resources.positions[offset + 2] += resources.speeds[index] * travel * delta;

      if (resources.positions[offset + 2] > 2.2) {
        resetStar(resources.positions, resources.speeds, index, -84, random);
      }
    }

    resources.geometry.attributes.position.needsUpdate = true;
  });

  return <points geometry={resources.geometry} material={resources.material} frustumCulled={false} dispose={null} />;
}

function CosmicScene({ enabled, onContextLost }: SceneProps & { onContextLost: () => void }): ReactNode {
  return (
    <>
      <RenderVisibilityGate enabled={enabled} />
      <ContextLossGuard onLost={onContextLost} />
      <VioletGradientPlane />
      <StreamingStars />
    </>
  );
}

function BackgroundFallback({ unavailable }: { unavailable: boolean }): ReactNode {
  return (
    <div
      className={unavailable ? 'cosmic-background webgl-unavailable' : 'cosmic-background'}
      style={FIXED_BACKGROUND_STYLE}
      aria-hidden="true"
    />
  );
}

/**
 * Fixed, transparent WebGL background. It waits for a client mount so it is safe to import
 * from a server-rendered route; scrolling only mutates refs and GPU buffers, never React state.
 */
export default function CosmicBackground({ enabled }: SceneProps): ReactNode {
  const mounted = useClientMount();
  const [failed, setFailed] = useState(false);
  const handleContextLost = useCallback(() => setFailed(true), []);

  if (!enabled || !mounted) return <BackgroundFallback unavailable={false} />;
  if (failed || !isWebGLProbablyAvailable()) return <BackgroundFallback unavailable />;

  return (
    <WebGLErrorBoundary fallback={<BackgroundFallback unavailable />}>
      <div className="cosmic-background" style={FIXED_BACKGROUND_STYLE} aria-hidden="true">
        <Canvas
          dpr={[1, 1.5]}
          camera={BACKGROUND_CAMERA}
          frameloop="always"
          gl={{ alpha: true, antialias: false, depth: true, stencil: false, powerPreference: 'high-performance' }}
          style={CANVAS_STYLE}
          aria-hidden="true"
        >
          <CosmicScene enabled={enabled} onContextLost={handleContextLost} />
        </Canvas>
      </div>
    </WebGLErrorBoundary>
  );
}

function useGlobalPointer(enabled: boolean): MutableRefObject<THREE.Vector2> {
  const pointer = useRef(new THREE.Vector2());

  useEffect(() => {
    if (!enabled) return undefined;

    const updatePointer = (event: PointerEvent) => {
      pointer.current.set(
        (event.clientX / Math.max(1, window.innerWidth)) * 2 - 1,
        -((event.clientY / Math.max(1, window.innerHeight)) * 2 - 1),
      );
    };

    window.addEventListener('pointermove', updatePointer, { passive: true });
    return () => window.removeEventListener('pointermove', updatePointer);
  }, [enabled]);

  return pointer;
}

function OrbitalAssembly({ enabled, pointer }: SceneProps & { pointer: MutableRefObject<THREE.Vector2> }): ReactNode {
  const assembly = useRef<THREE.Group>(null);
  const orbit = useRef<THREE.Group>(null);
  const satellite = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (!enabled || document.hidden) return;

    if (assembly.current) {
      const easedPointerX = pointer.current.x * 0.28;
      const easedPointerY = pointer.current.y * 0.20;
      assembly.current.rotation.y = THREE.MathUtils.damp(assembly.current.rotation.y, easedPointerX, 4.8, delta);
      assembly.current.rotation.x = THREE.MathUtils.damp(assembly.current.rotation.x, -0.1 + easedPointerY, 4.8, delta);
      assembly.current.rotation.z = THREE.MathUtils.damp(assembly.current.rotation.z, -0.08 - pointer.current.x * 0.055, 4.8, delta);
      assembly.current.position.y = Math.sin(state.clock.elapsedTime * 0.62) * 0.08;
    }

    if (orbit.current) {
      orbit.current.rotation.y = state.clock.elapsedTime * 0.34;
      orbit.current.rotation.z = -0.28 + Math.sin(state.clock.elapsedTime * 0.2) * 0.045;
    }

    if (satellite.current) {
      satellite.current.rotation.x = state.clock.elapsedTime * 1.1;
      satellite.current.rotation.y = state.clock.elapsedTime * 1.45;
    }
  });

  return (
    <group ref={assembly} rotation={[-0.1, 0.08, -0.08]}>
      <mesh castShadow receiveShadow>
        <icosahedronGeometry args={[1.42, 3]} />
        <MeshDistortMaterial
          color="#513174"
          metalness={0.32}
          roughness={0.42}
          clearcoat={0.78}
          clearcoatRoughness={0.15}
          distort={0.16}
          speed={0.36}
        />
      </mesh>

      <group ref={orbit} rotation={[1.07, 0.36, -0.48]}>
        <mesh rotation={[0.2, 0.08, 0.12]}>
          <torusGeometry args={[2.2, 0.015, 8, 180]} />
          <meshStandardMaterial
            color="#d1b8ff"
            emissive="#7037d5"
            emissiveIntensity={2.1}
            metalness={0.42}
            roughness={0.2}
            transparent
            opacity={0.8}
          />
        </mesh>
        <mesh rotation={[1.28, -0.33, 0.4]}>
          <torusGeometry args={[2.04, 0.01, 8, 180]} />
          <meshStandardMaterial
            color="#9b72ff"
            emissive="#4d1fa6"
            emissiveIntensity={1.75}
            metalness={0.32}
            roughness={0.28}
            transparent
            opacity={0.54}
          />
        </mesh>
        <group rotation={[0.48, 0.15, 0.72]}>
          <mesh ref={satellite} position={[2.2, 0, 0]}>
            <icosahedronGeometry args={[0.11, 2]} />
            <meshStandardMaterial
              color="#dfd4ff"
              emissive="#9d65ff"
              emissiveIntensity={1.9}
              metalness={0.7}
              roughness={0.24}
            />
          </mesh>
          <pointLight position={[2.2, 0, 0]} color="#9f6bff" intensity={1.1} distance={2.5} decay={2} />
        </group>
      </group>
    </group>
  );
}

function OrbitalScene({ enabled, onContextLost, pointer }: SceneProps & { onContextLost: () => void; pointer: MutableRefObject<THREE.Vector2> }): ReactNode {
  return (
    <>
      <RenderVisibilityGate enabled={enabled} />
      <ContextLossGuard onLost={onContextLost} />
      <ambientLight color="#bda8ff" intensity={0.34} />
      <hemisphereLight color="#dbcaff" groundColor="#0a0318" intensity={0.5} />
      <directionalLight position={[4.8, 4.2, 5.8]} color="#fff4eb" intensity={3.1} />
      <directionalLight position={[-4.5, 1.4, 1.2]} color="#9b6dff" intensity={2.1} />
      <pointLight position={[0, -3.2, 2.2]} color="#3d1a77" intensity={9} distance={8} decay={2} />
      <OrbitalAssembly enabled={enabled} pointer={pointer} />
    </>
  );
}

function OrbitalFallback({ unavailable }: { unavailable: boolean }): ReactNode {
  return (
    <div
      className={unavailable ? 'orbital-object webgl-unavailable' : 'orbital-object'}
      style={ORBITAL_WRAPPER_STYLE}
      aria-hidden="true"
    />
  );
}

/**
 * Transparent hero-object canvas. Pointer input is sourced from window rather than the canvas,
 * so links and text layered over it remain completely interactive.
 */
export function OrbitalObject({ enabled }: SceneProps): ReactNode {
  const mounted = useClientMount();
  const pointer = useGlobalPointer(enabled);
  const [failed, setFailed] = useState(false);
  const handleContextLost = useCallback(() => setFailed(true), []);

  if (!enabled || !mounted) return <OrbitalFallback unavailable={false} />;
  if (failed || !isWebGLProbablyAvailable()) return <OrbitalFallback unavailable />;

  return (
    <WebGLErrorBoundary fallback={<OrbitalFallback unavailable />}>
      <div className="orbital-object" style={ORBITAL_WRAPPER_STYLE} aria-hidden="true">
        <Canvas
          dpr={[1, 1.5]}
          camera={ORBITAL_CAMERA}
          frameloop="always"
          shadows={false}
          gl={{ alpha: true, antialias: true, depth: true, stencil: false, powerPreference: 'high-performance' }}
          style={CANVAS_STYLE}
          aria-hidden="true"
        >
          <OrbitalScene enabled={enabled} onContextLost={handleContextLost} pointer={pointer} />
        </Canvas>
      </div>
    </WebGLErrorBoundary>
  );
}
