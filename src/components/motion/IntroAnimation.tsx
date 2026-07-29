"use client";

import { useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { prefersReducedMotion } from "./motion-config";
import { useTransition } from "./TransitionContext";

/**
 * Dual-purpose curtain overlay:
 *
 * 1. **Intro** (first visit per session, ~3.5 s):
 *    Black curtain with "FrlAgee" monogram, red rule, and "AG" tagline.
 *    Holds for a beat, then slides up to reveal the site.
 *
 * 2. **Page transition** (~1.2 s):
 *    Same curtain slides *down* to cover the viewport (exit phase),
 *    then slides *up* to reveal the new page (enter phase).
 *    The monogram plays a faster, subtler animation during transitions.
 */
export function IntroAnimation() {
  const overlayRef = useRef<HTMLDivElement>(null);
  const monogramRef = useRef<HTMLDivElement>(null);
  const ruleRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  const { phase, onExitComplete, onEnterComplete, isIntro, completeIntro } =
    useTransition();

  // ─── Intro animation (runs once on mount if isIntro) ──────────
  useEffect(() => {
    if (!isIntro) return;

    const overlay = overlayRef.current;
    const monogram = monogramRef.current;
    const rule = ruleRef.current;
    const tagline = taglineRef.current;

    if (!overlay || !monogram || !rule || !tagline) return;

    document.body.style.overflow = "hidden";

    if (prefersReducedMotion() || document.hidden) {
      gsap.set(overlay, { opacity: 0, display: "none" });
      document.body.style.overflow = "";
      completeIntro();
      return;
    }

    // Make overlay visible & positioned at yPercent: 0
    gsap.set(overlay, { yPercent: 0, opacity: 1, display: "flex" });
    gsap.set(monogram, { opacity: 0, scale: 0.78, y: 16 });
    gsap.set(rule, { scaleX: 0, transformOrigin: "left center" });
    gsap.set(tagline, { opacity: 0, y: 18 });

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = "";
        completeIntro();
      },
    });

    tl
      // 1. Hold black screen briefly
      .to({}, { duration: 0.25 })
      // 2. Name fades + scales in (longer)
      .to(monogram, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.85,
        ease: "power3.out",
      })
      // 3. Red rule sweeps
      .to(
        rule,
        {
          scaleX: 1,
          duration: 0.65,
          ease: "power2.inOut",
        },
        "-=0.25",
      )
      // 4. Tagline rises
      .to(
        tagline,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.15",
      )
      // 5. Hold for a beat so the user reads it
      .to({}, { duration: 0.6 })
      // 6. Everything fades out
      .to([monogram, rule, tagline], {
        opacity: 0,
        y: -12,
        duration: 0.35,
        ease: "power2.in",
        stagger: 0.04,
      })
      // 7. Curtain slides up out of viewport
      .to(overlay, {
        yPercent: -100,
        duration: 0.82,
        ease: "power4.inOut",
      }, "-=0.1");

    tlRef.current = tl;

    return () => {
      tl.kill();
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isIntro]);

  // ─── Page transition: EXIT phase ─────────────────────────────
  const runExit = useCallback(() => {
    const overlay = overlayRef.current;
    const monogram = monogramRef.current;
    const rule = ruleRef.current;
    const tagline = taglineRef.current;

    if (!overlay || !monogram || !rule || !tagline) {
      onExitComplete();
      return;
    }

    if (prefersReducedMotion() || document.hidden) {
      onExitComplete();
      return;
    }

    // Reset overlay to come from bottom
    gsap.set(overlay, { yPercent: 100, opacity: 1, display: "flex" });
    gsap.set(monogram, { opacity: 0, scale: 0.78, y: 16 });
    gsap.set(rule, { scaleX: 0, transformOrigin: "left center" });
    gsap.set(tagline, { opacity: 0, y: 18 });

    const tl = gsap.timeline({
      onComplete: onExitComplete,
    });

    // Same pop as the intro, played at ~60% of its length.
    tl
      // Curtain slides up to cover viewport
      .to(overlay, {
        yPercent: 0,
        duration: 0.55,
        ease: "power3.inOut",
      })
      .to(monogram, {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.5,
        ease: "power3.out",
      }, "-=0.15")
      .to(rule, {
        scaleX: 1,
        duration: 0.4,
        ease: "power2.inOut",
      }, "-=0.2")
      .to(tagline, {
        opacity: 1,
        y: 0,
        duration: 0.35,
        ease: "power3.out",
      }, "-=0.15");

    tlRef.current = tl;
  }, [onExitComplete]);

  // ─── Page transition: ENTER phase ─────────────────────────────
  const runEnter = useCallback(() => {
    const overlay = overlayRef.current;
    const monogram = monogramRef.current;
    const rule = ruleRef.current;
    const tagline = taglineRef.current;

    if (!overlay) {
      onEnterComplete();
      return;
    }

    if (prefersReducedMotion() || document.hidden) {
      gsap.set(overlay, { display: "none" });
      onEnterComplete();
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        gsap.set(overlay, { display: "none" });
        onEnterComplete();
      },
    });

    tl
      // Fade out inner elements
      .to([monogram, rule, tagline].filter(Boolean), {
        opacity: 0,
        y: -8,
        duration: 0.2,
        ease: "power2.in",
        stagger: 0.02,
      })
      // Curtain slides up out of viewport
      .to(overlay, {
        yPercent: -100,
        duration: 0.6,
        ease: "power4.inOut",
      }, "-=0.05");

    tlRef.current = tl;
  }, [onEnterComplete]);

  // React to phase changes
  useEffect(() => {
    if (isIntro) return; // intro handles its own sequence

    if (phase === "exit") {
      runExit();
    } else if (phase === "enter") {
      runEnter();
    }
  }, [phase, isIntro, runExit, runEnter]);

  // A backgrounded tab freezes rAF, which would leave the curtain stranded
  // mid-transition. Snap whatever is running to its end instead.
  useEffect(() => {
    const onVisibility = () => {
      if (document.hidden) tlRef.current?.progress(1);
    };
    document.addEventListener("visibilitychange", onVisibility);
    return () => document.removeEventListener("visibilitychange", onVisibility);
  }, []);

  // Clean up on unmount
  useEffect(() => {
    return () => {
      tlRef.current?.kill();
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      className="intro-overlay"
      style={isIntro ? undefined : { display: "none" }}
      aria-hidden="true"
    >
      {/* Subtle red glow blobs */}
      <div className="intro-glow intro-glow--tl" />
      <div className="intro-glow intro-glow--br" />

      {/* Center stage */}
      <div className="intro-center">
        {/* Monogram / brand name */}
        {/* Rides the existing monogram tween — no timeline changes needed. */}
        <div ref={monogramRef} className="intro-monogram">
          <Image
            src="/images/char-kmteti-stand.png"
            alt=""
            width={512}
            height={1024}
            priority
            className="intro-char"
          />
          <span className="intro-name">FrlAgee</span>
        </div>

        {/* Brand-red horizontal rule */}
        <div ref={ruleRef} className="intro-rule" />

        {/* Tagline */}
        <div ref={taglineRef} className="intro-tagline">
          AG
        </div>
      </div>
    </div>
  );
}
