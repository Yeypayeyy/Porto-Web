import Link from "next/link";
import Image from "next/image";
import { Experience, experiences } from "@/data/portfolio";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";

const organizationNames = new Set([
  "KMTETI FT UGM",
  "UGM Blockchain Club",
  "JAWARAGAMA",
]);

const experienceSections = [
  {
    title: "Organisasi",
    eyebrow: "Leadership & Community",
    copy:
      "Ruang untuk membangun arah, menjaga ritme tim, dan menumbuhkan dampak bersama lewat peran organisasi.",
    image: "/experience/gallery-8.jpeg",
    imageAlt: "Dokumentasi kegiatan organisasi mahasiswa",
    items: experiences.filter((item) => organizationNames.has(item.organization)),
  },
  {
    title: "Kepanitiaan",
    eyebrow: "Event Operations",
    copy:
      "Pengalaman di balik layar acara: koordinasi, logistik, komunikasi, dan kesiapan eksekusi saat hari-H.",
    image: "/experience/gallery-3.jpeg",
    imageAlt: "Dokumentasi kepanitiaan acara kampus",
    items: experiences.filter((item) => !organizationNames.has(item.organization)),
  },
];

function ExperienceCard({ item, index }: { item: Experience; index: number }) {
  return (
    <article
      className="reveal-card rounded-[8px] border border-white/10 bg-white/[0.055] p-5 shadow-[0_22px_58px_rgba(0,0,0,0.24)] backdrop-blur transition hover:-translate-y-1 hover:border-[#a8db4f]/35 hover:bg-white/[0.075] md:p-6"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="stitch-patch inline-flex rounded-[12px] border-2 border-dashed border-[#f3b41b] bg-white px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#4c4d4a] shadow-[0_10px_22px_rgba(0,0,0,0.18)]">
          {item.accent}
        </span>
        <span className="text-xs font-black text-[#a8db4f]">
          0{index + 1}
        </span>
      </div>

      <div className="mt-5">
        <h3 className="text-2xl font-black leading-tight text-[#f4f6f0]">
          {item.organization}
        </h3>
        <p className="mt-2 text-sm font-black text-[#dce3dd]">{item.role}</p>
        <p className="mt-3 text-xs font-bold uppercase tracking-[0.12em] text-[#aeb5ae]">
          {item.period} / {item.location}
        </p>
      </div>

      <p className="mt-5 text-sm font-medium leading-7 text-[#cbd4cd] md:text-base md:leading-8">
        {item.description}
      </p>
    </article>
  );
}

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-[#080b09] text-[#f4f6f0]">
      <Header />

      <section className="relative isolate overflow-hidden px-5 py-20 md:px-8 md:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(168,219,79,0.16),transparent_24rem),radial-gradient(circle_at_82%_76%,rgba(102,195,212,0.14),transparent_24rem)]" />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(244,246,240,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(244,246,240,0.18)_1px,transparent_1px)] [background-size:56px_56px]" />
        <div className="absolute inset-x-0 top-0 h-24 bg-[linear-gradient(180deg,rgba(8,11,9,0.86),transparent)]" />
        <div className="absolute bottom-0 left-0 z-10 h-6 w-full bg-[#2f6b43]">
          <div className="project-stitch-line absolute inset-x-0 top-1/2 h-1 -translate-y-1/2" />
        </div>

        <div className="relative z-20 mx-auto max-w-6xl">
          <Link
            className="fun-link inline-flex text-sm font-black text-[#b7dcd7]"
            href="/"
          >
            Back to home
          </Link>

          <div className="section-reveal mt-9 max-w-4xl">
            <p className="stitch-patch inline-flex w-fit rotate-[-2deg] rounded-[16px] border-2 border-dashed border-[#f3b41b] bg-white px-7 py-4 text-2xl font-black text-[#4c4d4a] shadow-[0_12px_28px_rgba(0,0,0,0.2)] md:px-8 md:py-5 md:text-3xl">
              Experience
            </p>
            <h1 className="section-title mt-6 text-5xl font-black leading-tight text-[#f4f6f0] md:text-7xl">
              Cerita peran, ruang bertumbuh, dan kerja bersama.
            </h1>
            <p className="section-copy mt-6 max-w-3xl text-lg font-medium leading-8 text-[#dce3dd] md:text-2xl md:leading-10">
              Pengalaman ini dipisah menjadi organisasi dan kepanitiaan supaya
              alur kontribusinya lebih mudah dibaca, dari strategi tim sampai
              operasional acara.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-start">
            {experienceSections.map((section) => (
              <section key={section.title} className="section-reveal-late">
                <div className="border-t border-white/10 pt-8">
                  <div>
                    <p className="text-xs font-black uppercase tracking-[0.16em] text-[#a8db4f]">
                      {section.eyebrow}
                    </p>
                    <h2 className="mt-3 text-4xl font-black leading-tight text-[#f4f6f0] md:text-5xl">
                      {section.title}
                    </h2>
                    <p className="mt-5 text-base font-medium leading-8 text-[#dce3dd]">
                      {section.copy}
                    </p>
                  </div>

                  <div className="reveal-list mt-6 flex flex-wrap content-start gap-2">
                    {section.items.map((item) => (
                      <span
                        key={item.organization}
                        className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#dce3dd]"
                      >
                        {item.accent}
                      </span>
                    ))}
                  </div>

                  <figure className="relative mt-7 aspect-[16/10] overflow-hidden rounded-[8px] border border-white/10 bg-white/[0.055] p-1.5 shadow-[0_24px_70px_rgba(0,0,0,0.34)]">
                    <Image
                      src={section.image}
                      alt={section.imageAlt}
                      fill
                      sizes="(min-width: 1024px) 560px, 100vw"
                      className="rounded-[6px] object-cover opacity-90 saturate-110"
                    />
                    <div className="absolute inset-1.5 rounded-[6px] bg-[linear-gradient(180deg,transparent_45%,rgba(8,11,9,0.62))]" />
                    <figcaption className="absolute bottom-5 left-5 rounded-full border border-white/12 bg-[#080b09]/72 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#dce3dd] backdrop-blur">
                      {section.title}
                    </figcaption>
                  </figure>

                  <div className="mt-5 grid gap-3">
                    {section.items.map((item) => (
                      <div
                        key={`${section.title}-summary-${item.organization}`}
                        className="rounded-[8px] border border-white/8 bg-white/[0.045] px-4 py-3"
                      >
                        <p className="text-sm font-black text-[#f4f6f0]">
                          {item.organization}
                        </p>
                        <p className="mt-1 text-xs font-bold leading-5 text-[#cbd4cd]">
                          {item.role}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 grid gap-4">
                  {section.items.map((item, index) => (
                    <ExperienceCard
                      key={`${item.organization}-${item.role}`}
                      item={item}
                      index={index}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
