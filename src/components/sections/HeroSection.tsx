import Link from "next/link";

export function HeroSection() {
  return (
    <section
      id="home"
      className="aurora-bg relative -mt-2 overflow-hidden px-5 pb-16 pt-10 md:px-8 md:pb-20 md:pt-14"
    >
      <div className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(#f4f6f0_1px,transparent_1.4px)] [background-size:18px_18px]" />
      <div className="pulse-ring absolute -right-8 top-32 h-44 w-44 rounded-full border-[16px] border-[#73bf3f]/70 md:h-56 md:w-56" />
      <div className="drift-soft absolute left-5 top-24 rounded-full bg-[#66c3d4]/15 px-4 py-2 text-xs font-semibold text-[#b7dcd7] ring-1 ring-[#66c3d4]/25 md:left-12">
        based in Yogyakarta
      </div>
      <div className="absolute bottom-16 left-[52%] hidden h-2 w-28 rotate-[-12deg] rounded-full bg-[#66c3d4]/45 md:block" />
      <div className="drift-soft absolute bottom-20 left-[42%] hidden h-4 w-4 rounded-full bg-[#a8db4f] md:block" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-190px)] max-w-7xl gap-12 md:grid-cols-[1.08fr_0.92fr] md:items-center">
        <div className="pt-16 md:pt-10">
          <p className="text-sm font-bold text-[#b7dcd7] md:text-base">
            Information Engineering student at UGM
          </p>
          <h1 className="gradient-text mt-6 max-w-5xl text-6xl font-black leading-[0.88] md:text-[112px]">
            Muhammad Farrel
            <span className="block">Al Ghazy</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg font-medium leading-8 text-[#dce3dd] md:text-xl">
            I turn student-organization chaos into cleaner systems, sharper
            execution, and better digital work.
          </p>

          <div className="mt-9 flex flex-wrap gap-5 text-sm font-bold">
            <Link className="fun-link pb-1" href="/projects">
              Projects
            </Link>
            <Link className="fun-link pb-1" href="/experience">
              Experience
            </Link>
            <a className="fun-link pb-1" href="mailto:farrel.ag20@gmail.com">
              Contact
            </a>
          </div>

          <div className="mt-12 grid max-w-xl grid-cols-3 gap-3">
            {["Leadership", "Events", "Systems"].map((item) => (
              <div
                key={item}
                className="rounded-[8px] bg-white/[0.045] px-4 py-3 text-center text-xs font-bold text-[#b7dcd7] ring-1 ring-white/10"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[520px] md:mr-0">
          <div className="absolute -left-8 top-8 h-24 w-24 rounded-full bg-[#66c3d4]/20 blur-2xl" />
          <div className="absolute -bottom-8 right-8 h-28 w-28 rounded-full bg-[#a8db4f]/20 blur-2xl" />
          <div className="float-soft shimmer-soft relative aspect-[4/5] w-full overflow-hidden rounded-[10px] bg-[#24282b] shadow-[0_30px_80px_rgba(0,0,0,0.35)] ring-1 ring-white/15">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_24%,#b7dcd7_0_11%,transparent_12%),radial-gradient(circle_at_50%_108%,#66c3d4_0_43%,transparent_44%),linear-gradient(145deg,#253034_0%,#315b35_46%,#73bf3f_76%,#a8db4f_100%)] opacity-95" />
            <div className="absolute inset-x-9 bottom-9 top-9 rounded-[10px] border border-white/22" />
            <div className="absolute left-6 top-6 rounded-full bg-[#121513]/50 px-4 py-2 text-xs font-bold text-[#f4f6f0] ring-1 ring-white/15">
              portfolio 2026
            </div>
            <div className="absolute bottom-6 right-6 grid h-16 w-16 place-items-center rounded-full bg-[#a8db4f] text-base font-black text-[#121513] shadow-[0_12px_28px_rgba(18,21,19,0.22)]">
              FG
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
