"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EASE_OUT, REVEAL, prefersReducedMotion } from "./motion-config";

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Stagger direct children instead of animating the wrapper as one block. */
  stagger?: boolean;
  delay?: number;
  y?: number;
  start?: string;
  /** Play on mount instead of on scroll (for above-the-fold content). */
  immediate?: boolean;
};

/**
 * Scroll-triggered entrance. Fades + rises into place once, when the element
 * enters the viewport. No-ops (content simply visible) under reduced motion.
 */
export function Reveal({
  children,
  as,
  className,
  stagger = false,
  delay = 0,
  y = REVEAL.y,
  start = "top 82%",
  immediate = false,
}: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const Tag = (as ?? "div") as ElementType;

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    gsap.registerPlugin(ScrollTrigger);

    const targets = stagger ? Array.from(el.children) : el;

    const ctx = gsap.context(() => {
      gsap.from(targets, {
        y,
        opacity: 0,
        duration: REVEAL.duration,
        ease: EASE_OUT,
        delay,
        stagger: stagger ? REVEAL.stagger : 0,
        scrollTrigger: immediate ? undefined : { trigger: el, start, once: true },
      });
    }, el);

    return () => ctx.revert();
  }, [stagger, delay, y, start, immediate]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
