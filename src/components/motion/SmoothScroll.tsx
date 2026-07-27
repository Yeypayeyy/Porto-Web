"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/**
 * Global smooth-scroll provider (Lenis) wired into GSAP's ticker so every
 * ScrollTrigger stays in sync with the inertial scroll position.
 *
 * Respects `prefers-reduced-motion`: when the user asks for reduced motion we
 * skip Lenis entirely and let the browser scroll natively.
 */
export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    gsap.registerPlugin(ScrollTrigger);

    if (prefersReduced) {
      ScrollTrigger.refresh();
      return;
    }

    // `duration` is how long the glide takes to settle after each wheel tick —
    // the main knob for how smooth the page feels. Higher = longer, softer
    // glide; too high and the page feels detached from the wheel.
    const lenis = new Lenis({
      duration: 1.6,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      // Slightly under 1 so each tick travels less and the easing has room to
      // show, instead of the glide being cut short by the next tick.
      wheelMultiplier: 0.9,
      touchMultiplier: 1.6,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const onTick = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);

    // Anchor links should ease through Lenis rather than jump.
    const handleAnchorClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement)?.closest<HTMLAnchorElement>(
        'a[href^="#"], a[href*="/#"]',
      );
      if (!target) return;
      const hash = target.href.split("#")[1];
      if (!hash) return;
      const el = document.getElementById(hash);
      if (!el) return;
      event.preventDefault();
      lenis.scrollTo(el, { offset: -80 });
    };

    document.addEventListener("click", handleAnchorClick);

    ScrollTrigger.refresh();

    return () => {
      document.removeEventListener("click", handleAnchorClick);
      gsap.ticker.remove(onTick);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
