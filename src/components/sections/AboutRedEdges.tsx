"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { prefersReducedMotion } from "@/components/motion/motion-config";

/**
 * Rossoneri tide on the About panel. Two oversized ellipses sit just outside
 * the panel's top and bottom edges, so only their caps read as curves — the
 * top one meets the hero's tech-stack strip, the bottom one closes the panel.
 *
 * The section pins while they swell in, so the reader cannot scroll past
 * until the motion resolves. Desktop only: pinning a full-height panel on a
 * phone fights the address-bar resize and reads as a stall.
 */

/** Fixed header height (`h-[4.6rem]` in Header.tsx). The panel pins *below* the
 *  header rather than under it, so the top cap is never hidden by the nav bar.
 *  Keep in sync with the `md:h-[calc(100vh-4.6rem)]` on AboutSection. */
const HEADER_H = 74;
/** How much of each ellipse shows once it has settled, at most. Short windows
 *  get a proportionally thinner cap so the copy is not crowded by the red. */
const MAX_CAP = 72;
const CAP_RATIO = 0.08;
/** Full ellipse height — the rest is parked outside the panel. */
const ELLIPSE_H = 460;
/** Pinned scroll distance. Longer = slower swell. */
const PIN_LENGTH = "+=70%";
/** Desktop only: pinning a full-height panel on a phone fights the address-bar
 *  resize and reads as a stall. */
const DESKTOP = "(min-width: 768px)";

export function AboutRedEdges() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const section = el?.parentElement;
    if (!el || !section || prefersReducedMotion()) return;

    gsap.registerPlugin(ScrollTrigger);

    // Re-read on every ScrollTrigger refresh (resize, media change) so the cap
    // tracks the panel height. `--cap` drives the CSS, the return value drives
    // the tween, so the two can never drift apart.
    const cap = () => {
      const px = Math.min(
        MAX_CAP,
        Math.round(section.getBoundingClientRect().height * CAP_RATIO),
      );
      el.style.setProperty("--cap", `${px}px`);
      return px;
    };

    const mm = gsap.matchMedia();

    mm.add(DESKTOP, () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: `top top+=${HEADER_H}`,
          end: PIN_LENGTH,
          pin: true,
          // Plain `true`, not a number: Lenis already smooths the scroll, and a
          // numeric scrub adds a second lag on top of it — the two peaks and
          // troughs fight each other and read as stutter.
          scrub: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      tl.from(
        el.querySelector("[data-tide='top']"),
        { y: () => -cap(), ease: "none", force3D: true },
        0,
      ).from(
        el.querySelector("[data-tide='bottom']"),
        { y: () => cap(), ease: "none", force3D: true },
        0,
      );
    });

    return () => mm.revert();
  }, []);

  return (
    <div ref={ref} aria-hidden="true" className="pointer-events-none absolute inset-0">
      <div
        data-tide="top"
        className="absolute left-1/2 w-[180%] rounded-[50%] bg-rossoneri [will-change:transform]"
        style={{
          height: ELLIPSE_H,
          top: `calc(var(--cap, ${MAX_CAP}px) - ${ELLIPSE_H}px)`,
          marginLeft: "-90%",
        }}
      />
      <div
        data-tide="bottom"
        className="absolute left-1/2 w-[180%] rounded-[50%] bg-rossoneri [will-change:transform]"
        style={{
          height: ELLIPSE_H,
          bottom: `calc(var(--cap, ${MAX_CAP}px) - ${ELLIPSE_H}px)`,
          marginLeft: "-90%",
        }}
      />
    </div>
  );
}
