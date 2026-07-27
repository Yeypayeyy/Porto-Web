/**
 * Rossoneri jersey motif — the shared vocabulary for red + gold structural
 * geometry. It speaks the same language as the footer's wing SVG: a red
 * panel with a gold trim line running alongside its curve.
 *
 * `JerseySeam` joins two sections that flip tone, so a hard bone/black edge
 * becomes a stitched panel join instead of a cut.
 */

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
