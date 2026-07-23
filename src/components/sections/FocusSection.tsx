export function FocusSection() {
  return (
    <section className="bg-[#f7f5f2] px-5 py-20 text-[#121513] md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-center justify-between gap-8">
          <div className="max-w-xl">
            <p className="text-xs font-black uppercase text-[#e2001a]">
              Focus Area
            </p>
            <h2 className="mt-3 text-4xl font-black md:text-5xl">
              Built around projects, organizations, and people.
            </h2>
          </div>
          <div className="grid gap-3 text-sm font-bold text-[#24282b] sm:grid-cols-3">
            <span className="rounded-full border border-[#121513]/15 px-4 py-2">
              Product thinking
            </span>
            <span className="rounded-full border border-[#121513]/15 px-4 py-2">
              Event execution
            </span>
            <span className="rounded-full border border-[#121513]/15 px-4 py-2">
              Team leadership
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
