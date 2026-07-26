"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * 3D tilt showcase card.
 *
 * The image sits on a perspective plane that tilts toward the pointer, with a
 * soft glare that tracks it — a premium "3D" presentation without WebGL.
 *
 * Degrades safely: the tilt only engages on fine pointers (mouse), so touch
 * users get a clean static card, and `prefers-reduced-motion` is honoured by
 * simply never applying a transform. Server-rendered markup is the flat card,
 * so there is no layout shift.
 */
export function TiltCard({
  src,
  alt,
  width,
  height,
  priority,
  sizes,
  className,
  caption,
  blurDataURL,
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  sizes?: string;
  className?: string;
  caption?: React.ReactNode;
  blurDataURL?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [t, setT] = useState({ rx: 0, ry: 0, gx: 50, gy: 0, active: false });

  function onMove(e: React.PointerEvent<HTMLDivElement>) {
    if (e.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width; // 0..1
    const py = (e.clientY - r.top) / r.height;
    const MAX = 7; // degrees — subtle, not gimmicky
    setT({
      ry: (px - 0.5) * 2 * MAX,
      rx: -(py - 0.5) * 2 * MAX,
      gx: px * 100,
      gy: py * 100,
      active: true,
    });
  }

  function reset() {
    setT((s) => ({ ...s, rx: 0, ry: 0, active: false }));
  }

  return (
    <div
      className={cn("[perspective:1200px]", className)}
      style={{ WebkitTapHighlightColor: "transparent" }}
    >
      <div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={reset}
        className="group glass rounded-3xl p-3 will-change-transform"
        style={{
          transform: `rotateX(${t.rx}deg) rotateY(${t.ry}deg)`,
          transformStyle: "preserve-3d",
          transition: t.active
            ? "transform 80ms linear"
            : "transform 500ms cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div
          className="relative overflow-hidden rounded-2xl"
          style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }}
        >
          <Image
            src={src}
            alt={alt}
            width={width}
            height={height}
            priority={priority}
            sizes={sizes}
            placeholder={blurDataURL ? "blur" : undefined}
            blurDataURL={blurDataURL}
            className="w-full h-auto object-cover"
          />
          {/* Glare — follows the pointer, fades out when the card rests. */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-2xl mix-blend-soft-light transition-opacity duration-500"
            style={{
              opacity: t.active ? 1 : 0,
              background: `radial-gradient(circle at ${t.gx}% ${t.gy}%, rgba(255,255,255,0.55), transparent 45%)`,
            }}
          />
        </div>

        {caption && (
          <div
            className="mt-3 px-2 pb-1"
            style={{ transform: "translateZ(60px)" }}
          >
            {caption}
          </div>
        )}
      </div>
    </div>
  );
}
