import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useTheme } from "@/contexts/ThemeContext";

const STAR_COUNT = 1500;

function MovingStars({ boosted, light }: { boosted: boolean; light: boolean }) {
  const starsRef = useRef<THREE.Points>(null);
  const pointer = useRef({ x: 0, y: 0, active: false });
  const { viewport } = useThree();
  const positions = useMemo(() => {
    const result = new Float32Array(STAR_COUNT * 3);
    for (let i = 0; i < STAR_COUNT; i++) {
      result[i * 3] = (Math.random() - 0.5) * 20;
      result[i * 3 + 1] = (Math.random() - 0.5) * 20;
      result[i * 3 + 2] = Math.random() * -50;
    }
    return result;
  }, []);

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      pointer.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
      pointer.current.active = event.pointerType === "mouse";
    };
    const onLeave = () => { pointer.current.active = false; };
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  useFrame((_, frameDelta) => {
    if (!starsRef.current) return;
    const delta = Math.min(frameDelta, 0.05);
    const array = starsRef.current.geometry.attributes.position.array as Float32Array;
    const speed = boosted ? 80 : 40;
    const mouseX = pointer.current.x * viewport.width * 0.5;
    const mouseY = pointer.current.y * viewport.height * 0.5;

    for (let i = 0; i < STAR_COUNT; i++) {
      const x = i * 3;
      array[x + 2] += delta * speed;
      if (pointer.current.active) {
        const dx = array[x] - mouseX;
        const dy = array[x + 1] - mouseY;
        const distance = Math.hypot(dx, dy);
        if (distance > 0.001 && distance < 3) {
          const force = (3 - distance) * delta * 8;
          array[x] += (dx / distance) * force;
          array[x + 1] += (dy / distance) * force;
        }
      }
      if (array[x + 2] > 5) {
        array[x] = (Math.random() - 0.5) * 20;
        array[x + 1] = (Math.random() - 0.5) * 20;
        array[x + 2] = -50;
      }
    }
    starsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={starsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color={boosted ? "#00ffff" : light ? "#6336a7" : "#a78bfa"}
        transparent
        opacity={0.9}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

export default function GlobalStarfield() {
  const { theme } = useTheme();
  const [boosted, setBoosted] = useState(false);

  useEffect(() => {
    const onBoost = (event: Event) => {
      setBoosted((event as CustomEvent<boolean>).detail === true);
    };
    window.addEventListener("galactic-starfield-boost", onBoost);
    return () => window.removeEventListener("galactic-starfield-boost", onBoost);
  }, []);

  return (
    <div className="global-starfield" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 3], fov: 75 }}
        gl={{ alpha: true, antialias: false }}
        style={{ background: "transparent" }}
      >
        <MovingStars boosted={boosted} light={theme === "light"} />
      </Canvas>
    </div>
  );
}
