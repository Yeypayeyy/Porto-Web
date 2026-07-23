"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EASE_OUT, prefersReducedMotion } from "./motion-config";

type TextRevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  delay?: number;
  /** Animate on mount instead of on scroll (used for above-the-fold hero copy). */
  immediate?: boolean;
};

/**
 * Line-by-line masked reveal: each block-level child slides up from behind a
 * clipped mask. Falls back to plain visible text under reduced motion.
 */
export function TextReveal({
  children,
  as,
  className,
  delay = 0,
  immediate = false,
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);
  const Tag = (as ?? "div") as ElementType;

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    gsap.registerPlugin(ScrollTrigger);

    const lines = Array.from(el.querySelectorAll<HTMLElement>("[data-line]"));
    const targets = lines.length ? lines : [el];

    const ctx = gsap.context(() => {
      gsap.from(targets, {
        yPercent: 120,
        opacity: 0,
        duration: 1,
        ease: EASE_OUT,
        delay,
        stagger: 0.12,
        scrollTrigger: immediate
          ? undefined
          : { trigger: el, start: "top 85%", once: true },
      });
    }, el);

    return () => ctx.revert();
  }, [delay, immediate]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
