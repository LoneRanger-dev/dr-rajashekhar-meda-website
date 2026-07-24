"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Procedural brain/spine visualisation.
 *
 * Generated in code rather than loaded as a GLTF model on purpose:
 * no extra network request, no model licence to track, and it stays
 * well inside the performance budget on the mid-range Android phones
 * that make up most of this clinic's traffic.
 *
 * This is decorative only — it is aria-hidden and never the LCP element.
 */

const TEAL = new THREE.Color("#22D3EE");
const NAVY = new THREE.Color("#1E6BA8");

/** Points distributed over a brain-like lobed ellipsoid. */
function useBrainPoints(count: number) {
  return useMemo(() => {
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const scales = new Float32Array(count);

    for (let i = 0; i < count; i++) {
      // Even distribution on a sphere, then deformed into a brain shape.
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);

      let x = Math.sin(phi) * Math.cos(theta);
      let y = Math.sin(phi) * Math.sin(theta);
      let z = Math.cos(phi);

      // Lobed folding — approximates cortical gyri without a real model.
      const fold =
        1 +
        0.12 * Math.sin(6 * theta) * Math.sin(3 * phi) +
        0.08 * Math.cos(8 * phi);

      // Brain proportions: wider than tall, longer front-to-back.
      x *= 1.25 * fold;
      y *= 0.95 * fold;
      z *= 1.05 * fold;

      // Central fissure — a shallow gap down the midline.
      if (Math.abs(x) < 0.06) x += x >= 0 ? 0.06 : -0.06;

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      const mix = (y + 1) / 2;
      const c = NAVY.clone().lerp(TEAL, mix * 0.85 + 0.15);
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;

      scales[i] = Math.random() * 0.6 + 0.4;
    }

    return { positions, colors, scales };
  }, [count]);
}

function BrainPoints({ count = 2600 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const { positions, colors } = useBrainPoints(count);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.12;
    // Gentle breathing motion, tied to elapsed time so it stays frame-rate independent.
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = Math.sin(t * 0.25) * 0.08;
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
        size={0.028}
        vertexColors
        transparent
        opacity={0.9}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

/** Stylised vertebral column descending from the brain stem. */
function SpineColumn() {
  const ref = useRef<THREE.Group>(null);

  const vertebrae = useMemo(
    () => Array.from({ length: 14 }, (_, i) => i),
    []
  );

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.12;
    const t = state.clock.getElapsedTime();
    ref.current.rotation.x = Math.sin(t * 0.25) * 0.08;
  });

  return (
    <group ref={ref} position={[0, -1.15, 0]}>
      {vertebrae.map((i) => {
        const y = -i * 0.17;
        // Slight natural curve to the column.
        const z = Math.sin(i * 0.22) * 0.12;
        const scale = 1 - i * 0.028;
        return (
          <mesh key={i} position={[0, y, z]} scale={scale}>
            <torusGeometry args={[0.11, 0.038, 8, 20]} />
            <meshBasicMaterial
              color={TEAL}
              transparent
              opacity={Math.max(0.1, 0.55 - i * 0.03)}
              blending={THREE.AdditiveBlending}
              depthWrite={false}
            />
          </mesh>
        );
      })}
    </group>
  );
}

export default function NeuroScene() {
  return (
    <Canvas
      // Cap DPR — retina phones otherwise render 3x the pixels for a
      // background flourish nobody is inspecting closely.
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 4.2], fov: 45 }}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      style={{ background: "transparent" }}
    >
      <BrainPoints />
      <SpineColumn />
    </Canvas>
  );
}
