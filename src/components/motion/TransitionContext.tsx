"use client";

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/navigation";

export type TransitionPhase = "idle" | "exit" | "enter";

interface TransitionContextValue {
  /** Current phase of the page transition. */
  phase: TransitionPhase;
  /** Trigger a page transition: plays exit curtain → navigates → plays enter curtain. */
  navigateWithTransition: (href: string) => void;
  /** Called by IntroAnimation when the exit curtain has fully covered the viewport. */
  onExitComplete: () => void;
  /** Called by IntroAnimation when the enter curtain has fully revealed the new page. */
  onEnterComplete: () => void;
  /** Whether the very first intro animation (session start) is still running. */
  isIntro: boolean;
  /** Mark the intro as complete. */
  completeIntro: () => void;
}

const Ctx = createContext<TransitionContextValue | null>(null);

export function useTransition() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("useTransition must be used within TransitionProvider");
  return ctx;
}

export function TransitionProvider({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [phase, setPhase] = useState<TransitionPhase>("idle");
  const pendingHref = useRef<string | null>(null);

  // Play the intro on every full page load (not gated per session).
  // ponytail: revert to `!sessionStorage.getItem("intro-played")` to make it once-per-session again.
  const [isIntro, setIsIntro] = useState(true);

  const completeIntro = useCallback(() => {
    setIsIntro(false);
  }, []);

  const navigateWithTransition = useCallback(
    (href: string) => {
      if (phase !== "idle") return; // prevent double-fire
      pendingHref.current = href;
      setPhase("exit");
    },
    [phase],
  );

  const onExitComplete = useCallback(() => {
    // Navigation happens *after* the curtain covers the screen
    if (pendingHref.current) {
      router.push(pendingHref.current, { scroll: false });
      pendingHref.current = null;
    }
    // Small delay to let React commit the new page before revealing
    setTimeout(() => {
      setPhase("enter");
      // Scroll to top for the new page
      window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
    }, 100);
  }, [router]);

  const onEnterComplete = useCallback(() => {
    setPhase("idle");
  }, []);

  return (
    <Ctx.Provider
      value={{
        phase,
        navigateWithTransition,
        onExitComplete,
        onEnterComplete,
        isIntro,
        completeIntro,
      }}
    >
      {children}
    </Ctx.Provider>
  );
}
