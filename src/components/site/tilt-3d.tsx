"use client";

import { useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Generic 3D cursor-tilt wrapper for arbitrary content (cards, panels).
 *
 * The inner plane leans toward the pointer within a shallow, premium range
 * (rotateX ±6°, rotateY ±8°) on a 1500px perspective, and children keep depth
 * via preserve-3d. Engages on fine pointers only, honours reduced-motion, and
 * server-renders flat — so touch users and SSR get a clean static card with no
 * layout shift.
 */
export function Tilt3D({
  children,
  className,
  maxX = 6,
  maxY = 8,
}: {
  children: ReactNode;
  className?: string;
  maxX?: number;
  maxY?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({ rx: 0, ry: 0, active: false });

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    setT({
      rx: -(py - 0.5) * 2 * maxX,
      ry: (px - 0.5) * 2 * maxY,
      active: true,
    });
  }

  function reset() {
    setT((s) => ({ ...s, rx: 0, ry: 0, active: false }));
  }

  return (
    <div className={cn("[perspective:1500px]", className)}>
      <div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={reset}
        className="group h-full [transform-style:preserve-3d] will-change-transform"
        style={{
          transform: `rotateX(${t.rx}deg) rotateY(${t.ry}deg)`,
          transition: t.active
            ? "transform 100ms linear"
            : "transform 500ms var(--ease-out)",
        }}
      >
        {children}
      </div>
    </div>
  );
}
