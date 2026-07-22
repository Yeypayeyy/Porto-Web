"use client";

import { useEffect, useRef, type ElementType, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "./motion-config";

type ParallaxProps = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** Pixels of vertical drift across the scroll range. Negative = moves up. */
  amount?: number;
};

/**
 * Scroll-scrubbed vertical parallax. Element drifts by `amount` px between
 * entering and leaving the viewport. Disabled under reduced motion.
 */
export function Parallax({
  children,
  as,
  className,
  amount = -80,
}: ParallaxProps) {
  const ref = useRef<HTMLElement>(null);
  const Tag = (as ?? "div") as ElementType;

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { y: -amount / 2 },
        {
          y: amount / 2,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [amount]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
