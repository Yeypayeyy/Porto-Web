"use client";

import { useEffect, useRef, type ElementType } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "./motion-config";

type ScrollFillTextProps = {
  text: string;
  as?: ElementType;
  className?: string;
  /** Resting opacity of not-yet-filled words. Kept legible for no-JS/headless. */
  dim?: number;
};

/**
 * Signature statement motion: each word fills from dim to full as the block
 * scrolls through the viewport (scrubbed). Legible by default; under reduced
 * motion every word is simply shown at full strength.
 */
export function ScrollFillText({
  text,
  as,
  className,
  dim = 0.22,
}: ScrollFillTextProps) {
  const ref = useRef<HTMLElement>(null);
  const Tag = (as ?? "p") as ElementType;
  const words = text.split(" ");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const spans = el.querySelectorAll<HTMLElement>("[data-word]");

    if (prefersReducedMotion()) {
      gsap.set(spans, { opacity: 1 });
      return;
    }

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        spans,
        { opacity: dim },
        {
          opacity: 1,
          ease: "none",
          stagger: 0.4,
          scrollTrigger: {
            trigger: el,
            start: "top 78%",
            end: "bottom 62%",
            scrub: true,
          },
        },
      );
    }, el);

    return () => ctx.revert();
  }, [dim]);

  return (
    <Tag ref={ref} className={className}>
      {words.map((word, i) => (
        <span key={i} data-word style={{ opacity: dim }}>
          {word}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </Tag>
  );
}
