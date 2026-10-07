import { useRef, useEffect, useState, createContext, useContext, useCallback, useMemo } from "react";
import gsap from "gsap";
import { useLocation } from "wouter";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

interface TransitionContextType {
  navigateWithPortal: (path: string) => void;
  isTransitioning: boolean;
}

const TransitionContext = createContext<TransitionContextType>({
  navigateWithPortal: () => {},
  isTransitioning: false,
});

export function usePageTransition() {
  return useContext(TransitionContext);
}

// WebGL Liquid Morph Shader
const MORPH_VERTEX = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const MORPH_FRAGMENT = `
  uniform float uProgress;
  uniform float uTime;
  uniform vec2 uOrigin;
  uniform vec2 uResolution;

  varying vec2 vUv;

  // Simplex noise
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

  float snoise(vec2 v) {
    const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
    vec2 i = floor(v + dot(v, C.yy));
    vec2 x0 = v - i + dot(i, C.xx);
    vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
    vec4 x12 = x0.xyxy + C.xxzz;
    x12.xy -= i1;
    i = mod289(i);
    vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
    vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
    m = m*m; m = m*m;
    vec3 x = 2.0 * fract(p * C.www) - 1.0;
    vec3 h = abs(x) - 0.5;
    vec3 ox = floor(x + 0.5);
    vec3 a0 = x - ox;
    m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
    vec3 g;
    g.x = a0.x * x0.x + h.x * x0.y;
    g.yz = a0.yz * x12.xz + h.yz * x12.yw;
    return 130.0 * dot(m, g);
  }

  void main() {
    vec2 uv = vUv;
    vec2 aspect = vec2(uResolution.x / uResolution.y, 1.0);
    vec2 origin = uOrigin * aspect;
    vec2 pos = uv * aspect;

    float dist = length(pos - origin);
    float maxDist = length(aspect);

    // Liquid noise displacement
    float noise1 = snoise(uv * 4.0 + uTime * 0.8) * 0.15;
    float noise2 = snoise(uv * 8.0 - uTime * 0.5) * 0.08;
    float totalNoise = noise1 + noise2;

    // Expanding liquid circle from origin
    float threshold = uProgress * (maxDist + 0.5);
    float edge = smoothstep(threshold - 0.3, threshold, dist + totalNoise * uProgress);

    // Color: deep purple/violet liquid
    vec3 purple = vec3(0.545, 0.361, 0.965);
    vec3 deepPurple = vec3(0.2, 0.05, 0.35);
    vec3 black = vec3(0.02, 0.0, 0.05);

    // Liquid edge glow
    float edgeGlow = smoothstep(threshold - 0.15, threshold, dist + totalNoise * uProgress)
                   - smoothstep(threshold, threshold + 0.15, dist + totalNoise * uProgress);

    vec3 color = mix(black, deepPurple, 0.3);
    color += purple * edgeGlow * 2.0;

    // Ripple effect at the expanding edge
    float ripple = sin((dist - threshold) * 30.0 + uTime * 5.0) * 0.5 + 0.5;
    color += purple * ripple * edgeGlow * 0.5;

    float alpha = 1.0 - edge;
    alpha = clamp(alpha, 0.0, 1.0);

    gl_FragColor = vec4(color, alpha);
  }
`;

function LiquidMorphMesh({ progress, origin }: { progress: number; origin: [number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);
  const uniforms = useMemo(
    () => ({
      uProgress: { value: 0 },
      uTime: { value: 0 },
      uOrigin: { value: new THREE.Vector2(origin[0], origin[1]) },
      uResolution: { value: new THREE.Vector2(window.innerWidth, window.innerHeight) },
    }),
    []
  );

  useFrame((state) => {
    if (meshRef.current) {
      const mat = meshRef.current.material as THREE.ShaderMaterial;
      mat.uniforms.uTime.value = state.clock.getElapsedTime();
      // GSAP already eases progress; a second low-pass left the dark portal
      // lingering over the next page, especially visible in the light theme.
      mat.uniforms.uProgress.value = progress;
      mat.uniforms.uOrigin.value.set(origin[0], origin[1]);
    }
  });

  return (
    <mesh ref={meshRef}>
      <planeGeometry args={[2, 2]} />
      <shaderMaterial
        vertexShader={MORPH_VERTEX}
        fragmentShader={MORPH_FRAGMENT}
        uniforms={uniforms}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
}

export function PageTransitionProvider({ children }: { children: React.ReactNode }) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const [, setLocation] = useLocation();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [shaderProgress, setShaderProgress] = useState(0);
  const [shaderOrigin, setShaderOrigin] = useState<[number, number]>([0.5, 0.5]);
  const [showCanvas, setShowCanvas] = useState(false);
  const pendingPath = useRef<string | null>(null);

  const navigateWithPortal = useCallback((path: string) => {
    if (isTransitioning) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setLocation(path);
      window.scrollTo(0, 0);
      return;
    }
    setIsTransitioning(true);
    pendingPath.current = path;

    // Get mouse position for origin
    const mouseX = (window as any).__lastMouseX ?? window.innerWidth / 2;
    const mouseY = (window as any).__lastMouseY ?? window.innerHeight / 2;

    // Convert to UV coordinates (0-1)
    const originX = mouseX / window.innerWidth;
    const originY = 1 - (mouseY / window.innerHeight); // Flip Y for shader

    setShaderOrigin([originX, originY]);
    setShowCanvas(true);
    setShaderProgress(0);

    // Determine transition speed based on route type
    const isCaseStudyTransition = path.includes("/case-study/");
    const expandDuration = isCaseStudyTransition ? 0.9 : 0.8;
    const shrinkDuration = isCaseStudyTransition ? 0.7 : 0.6;
    const holdDelay = isCaseStudyTransition ? 200 : 150;

    // Animate progress 0 -> 1 (expand)
    const expandAnim = { val: 0 };
    gsap.to(expandAnim, {
      val: 1,
      duration: expandDuration,
      ease: "power2.inOut",
      onUpdate: () => setShaderProgress(expandAnim.val),
      onComplete: () => {
        // Navigate at peak
        setLocation(path);
        window.scrollTo(0, 0);

        // Shrink back 1 -> 0 with hold for dramatic effect
        setTimeout(() => {
          const shrinkAnim = { val: 1 };
          gsap.to(shrinkAnim, {
            val: 0,
            duration: shrinkDuration,
            ease: "power3.out",
            onUpdate: () => setShaderProgress(shrinkAnim.val),
            onComplete: () => {
              setShowCanvas(false);
              setIsTransitioning(false);
              pendingPath.current = null;
            },
          });
        }, holdDelay);
      },
    });
  }, [isTransitioning, setLocation]);

  // Track mouse position globally
  useEffect(() => {
    const track = (e: MouseEvent) => {
      (window as any).__lastMouseX = e.clientX;
      (window as any).__lastMouseY = e.clientY;
    };
    window.addEventListener("mousemove", track, { passive: true });
    return () => window.removeEventListener("mousemove", track);
  }, []);

  // Listen for custom portal-navigate events from any component
  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      // Support both string and object { path: string } formats
      const path = typeof detail === "string" ? detail : detail?.path;
      if (path) navigateWithPortal(path);
    };
    window.addEventListener("portal-navigate", handler);
    return () => window.removeEventListener("portal-navigate", handler);
  }, [navigateWithPortal]);

  return (
    <TransitionContext.Provider value={{ navigateWithPortal, isTransitioning }}>
      {children}
      {/* WebGL Liquid Morph Transition Overlay */}
      {showCanvas && (
        <div className="fixed inset-0 z-[99990] pointer-events-none">
          <Canvas
            dpr={[1, 2]}
            camera={{ position: [0, 0, 1], fov: 90 }}
            gl={{ antialias: false, alpha: true }}
            style={{ background: "transparent" }}
          >
            <LiquidMorphMesh progress={shaderProgress} origin={shaderOrigin} />
          </Canvas>
        </div>
      )}
    </TransitionContext.Provider>
  );
}
