import { ScrollFillText } from "@/components/motion/ScrollFillText";

/**
 * Full-height statement whose words fill from dim to full as the block scrolls
 * through the viewport (scrubbed) — the signature "read as you scroll" moment.
 */
export function StatementSection() {
  return (
    <section
      id="statement"
      className="relative flex min-h-[100svh] items-center bg-bone text-ink"
    >
      <div className="mx-auto w-full max-w-[80rem] px-6 md:px-12">
        <p className="mb-10 flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.34em] text-ink/45">
          <span className="h-px w-10 bg-rossoneri" />
          What I do
        </p>
        <ScrollFillText
          text="I connect engineering, Web3, partnerships, and event operations into products people use and teams people trust."
          dim={0.28}
          className="font-display text-[clamp(1.75rem,5.4vw,4.5rem)] font-black uppercase leading-[1.05] tracking-[-0.03em] text-rossoneri"
        />
      </div>
    </section>
  );
}
