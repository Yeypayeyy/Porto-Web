"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { prefersReducedMotion } from "./motion-config";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  /** Pull strength; higher = follows the cursor more. */
  strength?: number;
};

/**
 * Wraps an interactive element so it drifts toward the cursor on hover and
 * springs back on leave. Inert (plain span) under reduced motion.
 */
export function MagneticButton({
  children,
  className,
  strength = 0.35,
}: MagneticButtonProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    const move = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      gsap.to(el, {
        x: x * strength,
        y: y * strength,
        duration: 0.5,
        ease: "power3.out",
      });
    };

    const reset = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.4)" });
    };

    el.addEventListener("pointermove", move);
    el.addEventListener("pointerleave", reset);

    return () => {
      el.removeEventListener("pointermove", move);
      el.removeEventListener("pointerleave", reset);
    };
  }, [strength]);

  return (
    <span ref={ref} className={className} style={{ display: "inline-flex" }}>
      {children}
    </span>
  );
}
