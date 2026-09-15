/**
 * Section handoff between two tones. `top` / `bottom` are the two section
 * backgrounds. The strip is one clean arch with no trim lines: by default the
 * top tone bulges down into the bottom one, `flip` makes the bottom tone rise
 * into the top one so consecutive seams don't read as a repeated stamp.
 *
 * Fill only, so `preserveAspectRatio="none"` can stretch it to any width
 * without distorting anything.
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
      className="relative h-10 w-full overflow-hidden md:h-20"
      style={{ background: flip ? top : bottom }}
    >
      <svg
        className="block h-full w-full"
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
      >
        {flip ? (
          <path d="M0 80 V78 Q 720 -76 1440 78 V80 Z" fill={bottom} />
        ) : (
          <path d="M0 0 V2 Q 720 156 1440 2 V0 Z" fill={top} />
        )}
      </svg>
    </div>
  );
}
