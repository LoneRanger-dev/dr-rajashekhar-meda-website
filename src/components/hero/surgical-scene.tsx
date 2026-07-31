"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Procedural Laparoscopic & Surgical 3D Visualisation.
 *
 * Renders a high-tech medical HUD with floating laparoscopic keyhole trocars,
 * holographic abdominal contour particles, and spatial Apple Vision Pro-style
 * surgical laser rings in Suraksha purple and medical cyan.
 */

const PURPLE = new THREE.Color("#9333EA");
const CYAN = new THREE.Color("#06B6D4");

function makeRandom(seed: number) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Floating 3D holographic abdominal & trocar keyhole point cloud. */
function useLaparoPoints(count: number) {
  return useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const random = makeRandom(0x7e22ce);

    for (let i = 0; i < count; i++) {
      const u = random();
      const v = random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);

      let x = Math.sin(phi) * Math.cos(theta);
      let y = Math.sin(phi) * Math.sin(theta);
      let z = Math.cos(phi);

      // Abdominal contour fold
      const fold = 1 + 0.15 * Math.sin(4 * theta) * Math.cos(2 * phi);

      x *= 1.35 * fold;
      y *= 0.85 * fold;
      z *= 1.1 * fold;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      const mix = (y + 1) / 2;
      const c = PURPLE.clone().lerp(CYAN, mix * 0.9 + 0.1);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    return { positions, colors };
  }, [count]);
}

function LaparoPoints({ count = 2800 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const { positions, colors } = useLaparoPoints(count);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.15;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = Math.sin(t * 0.2) * 0.06;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
          count={count}
        />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} count={count} />
      </bufferGeometry>
      <pointsMaterial
        size={0.026}
        vertexColors
        transparent
        opacity={0.88}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/** Holographic keyhole surgical trocar rings (representing 3D Laparoscopic Instruments). */
function TrocarRings() {
  const groupRef = useRef<THREE.Group>(null);
  const rings = useMemo(() => Array.from({ length: 5 }, (_, i) => i), []);

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y -= delta * 0.18;
    const t = state.clock.getElapsedTime();
    groupRef.current.rotation.z = Math.cos(t * 0.3) * 0.1;
  });

  return (
    <group ref={groupRef}>
      {rings.map((i) => {
        const radius = 0.4 + i * 0.28;
        const yPos = (i - 2) * 0.35;
        return (
          <mesh key={i} position={[0, yPos, 0]} rotation={[Math.PI / 3, 0, i * 0.5]}>
            <torusGeometry args={[radius, 0.012, 12, 48]} />
            <meshBasicMaterial
              color={i % 2 === 0 ? CYAN : PURPLE}
              transparent
              opacity={0.6 - i * 0.08}
              blending={THREE.AdditiveBlending}
              depthWrite={false}
            />
          </mesh>
        );
      })}
    </group>
  );
}

export default function SurgicalScene() {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 4.2], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      style={{ background: "transparent" }}
    >
      <LaparoPoints />
      <TrocarRings />
    </Canvas>
  );
}
