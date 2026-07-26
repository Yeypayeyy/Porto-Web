/**
 * Rossoneri jersey motif — the shared vocabulary for red + gold structural
 * geometry. Both pieces speak the same language as the footer's wing SVG:
 * a red panel with a gold trim line running alongside its curve.
 *
 * `JerseyWing` frames a bar (the header).
 * `JerseySeam` joins two sections that flip tone, so a hard bone/black edge
 * becomes a stitched panel join instead of a cut.
 */

/** Red wing with gold trim. Mirror it with `-scale-x-100` for the right edge. */
export function JerseyWing({ className }: { className: string }) {
  return (
    <svg
      aria-hidden="true"
      className={`pointer-events-none absolute top-0 hidden h-[4.6rem] w-12 md:block ${className}`}
      viewBox="0 0 48 74"
      preserveAspectRatio="none"
      fill="none"
    >
      <path
        d="M0 0 H38 C 27 24 20 50 32 74 H0 Z"
        fill="var(--rossoneri)"
        opacity="0.9"
      />
      <path
        d="M43 0 C 32 24 25 50 37 74"
        stroke="var(--gold)"
        strokeWidth="2.5"
        opacity="0.8"
      />
    </svg>
  );
}

/**
 * Section handoff. `top` / `bottom` are the two section backgrounds; the strip
 * paints `top`, then sweeps `bottom` across on a curve so the tone change
 * happens along the seam rather than at a straight edge. `flip` mirrors the
 * curve so consecutive seams don't read as a repeated stamp.
 */
export function JerseySeam({
  top,
  bottom,
  flip = false,
}: {
  top: string;
  bottom: string;
  flip?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className="relative h-9 w-full overflow-hidden md:h-14"
      style={{ background: top }}
    >
      <svg
        className={`h-full w-full ${flip ? "-scale-x-100" : ""}`}
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        fill="none"
      >
        <path
          d="M0 56 H1440 V6 C 1070 42 430 10 0 36 Z"
          fill={bottom}
        />
        <path
          d="M0 36 C 430 10 1070 42 1440 6"
          stroke="var(--rossoneri)"
          strokeWidth="7"
          opacity="0.9"
        />
        <path
          d="M0 25 C 430 -1 1070 31 1440 -5"
          stroke="var(--gold)"
          strokeWidth="2"
          opacity="0.75"
        />
      </svg>
    </div>
  );
}
