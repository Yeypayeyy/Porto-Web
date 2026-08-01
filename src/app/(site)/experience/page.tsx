import Image from "next/image";
import Link from "next/link";
import { experiences, type Experience } from "@/data/portfolio";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";

// Oldest first — the rail is read as a route, not a résumé stack.
const stops = [...experiences].reverse();

// Wave geometry. Every stop owns 100 viewBox units; the SVG is stretched to
// the real column width with preserveAspectRatio="none", so the same path
// works at any breakpoint. Peaks/troughs sit 24 units off centre, which is
// 2.4rem inside the 10rem band — that constant is what the pins align to.
const PEAK = 26;
const TROUGH = 74;

function wavePath(count: number) {
  const points: [number, number][] = [[0, 50]];
  for (let i = 0; i < count; i += 1) {
    points.push([i * 100 + 50, i % 2 === 0 ? PEAK : TROUGH]);
  }
  points.push([count * 100, 50]);

  return points
    .map(([x, y], i) => {
      if (i === 0) return `M ${x} ${y}`;
      const [px, py] = points[i - 1];
      const handle = (x - px) / 2;
      return `C ${px + handle} ${py}, ${x - handle} ${y}, ${x} ${y}`;
    })
    .join(" ");
}

function Pin({ flipped }: { flipped: boolean }) {
  return (
    <svg
      className={`h-[2.4rem] w-6 drop-shadow-[0_6px_14px_rgba(226,0,26,0.45)] ${
        flipped ? "rotate-180" : ""
      }`}
      viewBox="0 0 24 38"
      fill="none"
      aria-hidden="true"
    >
      <path d="M12 16v20" stroke="var(--bone)" strokeOpacity="0.5" strokeWidth="2" />
      <circle cx="12" cy="10" r="9" fill="var(--rossoneri)" />
      <circle cx="9" cy="7" r="2.6" fill="var(--bone)" fillOpacity="0.55" />
    </svg>
  );
}

// Shared by the rail card and the detail list so a stop without a photo yet
// degrades the same way in both places.
function StopPhoto({ stop, sizes }: { stop: Experience; sizes: string }) {
  if (!stop.image) {
    return (
      <div className="flex aspect-[4/3] w-full items-center justify-center bg-bone/[0.03] px-2 text-center text-[0.55rem] font-black uppercase leading-tight tracking-[0.2em] text-bone/25">
        Foto menyusul
      </div>
    );
  }

  return (
    <Image
      src={stop.image}
      alt={`${stop.organization} — ${stop.role}`}
      width={640}
      height={480}
      sizes={sizes}
      className="aspect-[4/3] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
    />
  );
}

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-ink text-bone">
      <Header dark />

      <section className="px-6 pt-28 sm:px-10 sm:pt-32">
        <div className="mx-auto max-w-[94rem]">
          <p className="text-[0.72rem] font-black uppercase tracking-[0.28em] text-rossoneri">
            Experience
          </p>
          <h1 className="mt-4 max-w-4xl text-5xl font-extrabold uppercase leading-[0.9] tracking-tighter sm:text-7xl lg:text-8xl">
            Rute selama kuliah
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-snug text-bone/60 sm:text-xl">
            {stops.length} pemberhentian, dari staf perlengkapan sampai memimpin
            organisasi. Geser ke kanan untuk menyusuri rutenya.
          </p>
        </div>
      </section>

      <section className="experience-rail-shell relative mt-14 sm:mt-20">
        <div className="experience-rail flex snap-x snap-mandatory overflow-x-auto scroll-smooth pb-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {/* Spacers keep the first and last stop reachable at centre snap. */}
          <div className="shrink-0 grow-0 basis-6 sm:basis-24" />

          {/* w-max: the wave is absolutely positioned against this box, so it
              has to be as wide as all the stops, not as wide as the viewport.
              Height is left to the tallest card: flex stretches every stop to
              it, and each stop splits that height into two equal rows, so the
              wave's centre line stays shared without a magic fixed height. */}
          <div className="relative flex w-max shrink-0 items-stretch">
            {/* w-full, not inset-x-0: an SVG is a replaced element, so an auto
                width falls back to its intrinsic viewBox ratio instead. */}
            <svg
              className="pointer-events-none absolute left-0 top-1/2 h-40 w-full -translate-y-1/2"
              viewBox={`0 0 ${stops.length * 100} 100`}
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d={wavePath(stops.length)}
                fill="none"
                stroke="var(--bone)"
                strokeOpacity="0.28"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="9 11"
                vectorEffect="non-scaling-stroke"
                className="experience-rail-stitch"
              />
            </svg>

            {stops.map((stop, index) => {
              const up = index % 2 === 0;

              const photo = (
                  <figure
                    className={`group relative overflow-hidden rounded-[1.75rem] bg-bone/5 shadow-[0_28px_60px_-30px_rgba(0,0,0,0.9)] ring-1 ring-bone/10 [corner-shape:squircle] ${
                      up ? "self-start" : "self-end mb-[3.2rem]"
                    }`}
                  >
                    <StopPhoto stop={stop} sizes="(min-width: 640px) 21rem, 17rem" />
                    <figcaption className="absolute bottom-3 left-3 rounded-full bg-ink/75 px-3 py-1.5 text-[0.62rem] font-black uppercase tracking-[0.16em] text-bone backdrop-blur">
                      {stop.accent}
                    </figcaption>
                  </figure>
                );

                // pb/pt 2.4rem = the peak/trough offset, so the pin tip lands
                // exactly on the wave instead of being placed by hand.
                const caption = (
                  <div
                    className={`flex flex-col items-center gap-2 text-center ${
                      up ? "justify-end pb-[2.4rem]" : "justify-start pt-[2.4rem]"
                    }`}
                  >
                    {!up && <Pin flipped />}
                    <div>
                      <p className="text-[0.68rem] font-black uppercase tracking-[0.2em] text-rossoneri">
                        {String(index + 1).padStart(2, "0")} / {stop.period}
                      </p>
                      <h2 className="mt-2 text-2xl font-extrabold leading-tight tracking-tight">
                        {stop.organization}
                      </h2>
                      <p className="mt-1.5 text-sm font-bold text-bone/70">
                        {stop.role}
                      </p>
                      <p className="mt-2 text-xs leading-5 text-bone/45">
                        {stop.location}
                      </p>
                    </div>
                    {up && <Pin flipped={false} />}
                  </div>
                );

                return (
                  <article
                    key={`${stop.organization}-${stop.role}`}
                    className="grid w-[17rem] shrink-0 snap-center grid-rows-2 px-3 sm:w-[21rem] sm:px-4"
                  >
                    {up ? caption : photo}
                    {up ? photo : caption}
                  </article>
                );
            })}
          </div>

          <div className="shrink-0 grow-0 basis-6 sm:basis-24" />
        </div>

        <div className="mx-auto mt-2 h-1 w-40 overflow-hidden rounded-full bg-bone/12 sm:w-64">
          <div className="experience-rail-progress h-full w-full rounded-full bg-rossoneri" />
        </div>
      </section>

      <section className="px-6 py-24 sm:px-10">
        <div className="mx-auto grid max-w-[94rem] gap-10 border-t border-bone/10 pt-12 lg:grid-cols-2">
          {stops.map((stop) => (
            <div
              key={`${stop.organization}-${stop.role}-detail`}
              className="grid grid-cols-[6.5rem_1fr] gap-5 sm:grid-cols-[9rem_1fr] sm:gap-6"
            >
              <figure className="group self-start overflow-hidden rounded-[1.25rem] bg-bone/5 ring-1 ring-bone/10 [corner-shape:squircle]">
                <StopPhoto
                  stop={stop}
                  sizes="(min-width: 640px) 9rem, 6.5rem"
                />
              </figure>
              <div>
                <h3 className="text-xl font-extrabold tracking-tight">
                  {stop.organization}
                  <span className="ml-3 text-sm font-bold text-bone/40">
                    {stop.period}
                  </span>
                </h3>
                <p className="mt-1 text-sm font-bold text-bone/70">
                  {stop.role}
                </p>
                <p className="mt-3 text-base leading-7 text-bone/60">
                  {stop.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-14 max-w-[94rem]">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-lg text-rossoneri"
          >
       
            <svg
              className="h-4 w-4 shrink-0"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <path d="M7 17 17 7M8 7h9v9" />
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
