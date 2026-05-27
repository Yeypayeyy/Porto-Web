import Image from "next/image";
import Link from "next/link";

const experiencePhotos = [
  {
    src: "/experience/gallery-1.jpeg",
    alt: "Farrel bersama rekan kegiatan kampus",
    className: "left-[2%] top-7 h-36 w-48 rotate-[-8deg] md:h-52 md:w-72",
  },
  {
    src: "/experience/gallery-2.jpeg",
    alt: "Dokumentasi kegiatan organisasi mahasiswa",
    className: "right-[4%] top-8 h-40 w-44 rotate-[7deg] md:h-56 md:w-64",
  },
  {
    src: "/experience/gallery-3.jpeg",
    alt: "Dokumentasi kepanitiaan acara kampus",
    className: "left-[10%] bottom-9 h-44 w-40 rotate-[9deg] md:h-64 md:w-56",
  },
  {
    src: "/experience/gallery-4.jpeg",
    alt: "Farrel dalam kegiatan bersama tim",
    className: "right-[12%] bottom-6 h-36 w-52 rotate-[-6deg] md:h-52 md:w-80",
  },
  {
    src: "/experience/gallery-5.jpeg",
    alt: "Suasana acara dan kolaborasi mahasiswa",
    className: "left-[38%] top-3 hidden h-44 w-60 rotate-[4deg] lg:block",
  },
  {
    src: "/experience/gallery-6.jpeg",
    alt: "Dokumentasi kegiatan kampus bersama panitia",
    className: "right-[39%] bottom-4 hidden h-40 w-56 rotate-[-4deg] lg:block",
  },
  {
    src: "/experience/gallery-7.jpeg",
    alt: "Dokumentasi suasana kegiatan mahasiswa",
    className: "left-[28%] top-28 hidden h-40 w-64 rotate-[-3deg] xl:block",
  },
  {
    src: "/experience/gallery-8.jpeg",
    alt: "Dokumentasi momen organisasi dan kepanitiaan",
    className: "right-[29%] top-24 hidden h-44 w-64 rotate-[5deg] xl:block",
  },
  {
    src: "/experience/gallery-9.jpeg",
    alt: "Dokumentasi perjalanan kegiatan selama kuliah",
    className: "left-[44%] bottom-24 hidden h-36 w-56 rotate-[2deg] xl:block",
  },
  {
    src: "/experience/Hero.webp",
    alt: "Farrel bersama tim mahasiswa",
    className: "left-[1%] top-44 h-32 w-44 rotate-[5deg] md:h-44 md:w-64",
  },
  {
    src: "/experience/gallery-8.jpeg",
    alt: "Farrel dalam suasana kegiatan kampus",
    className: "right-[2%] top-52 h-32 w-44 rotate-[-8deg] md:h-44 md:w-60",
  },
  {
    src: "/experience/gallery-9.jpeg",
    alt: "Farrel mengikuti kegiatan bersama rekan kampus",
    className: "left-[26%] bottom-3 hidden h-36 w-52 rotate-[-7deg] md:block lg:h-44 lg:w-64",
  },
  {
    src: "/experience/gallery-5.jpeg",
    alt: "Potret Farrel dalam perjalanan organisasi",
    className: "right-[27%] bottom-2 hidden h-36 w-52 rotate-[8deg] md:block lg:h-44 lg:w-64",
  },
  {
    src: "/experience/gallery-2.jpeg",
    alt: "Potongan dokumentasi kegiatan organisasi",
    className: "left-[18%] top-3 hidden h-28 w-44 rotate-[11deg] sm:block lg:h-36 lg:w-56",
  },
  {
    src: "/experience/gallery-8.jpeg",
    alt: "Potongan dokumentasi acara kampus",
    className: "right-[18%] top-4 hidden h-28 w-44 rotate-[-10deg] sm:block lg:h-36 lg:w-56",
  },
  {
    src: "/experience/WhatsApp%20Image%202026-05-28%20at%2000.21.11%20%281%29.jpeg",
    alt: "Dokumentasi terbaru kegiatan selama kuliah",
    className: "left-[8%] top-[58%] hidden h-32 w-52 rotate-[-12deg] sm:block lg:h-44 lg:w-72",
  },
  {
    src: "/experience/WhatsApp%20Image%202026-05-28%20at%2000.20.28.jpeg",
    alt: "Dokumentasi terbaru momen kepanitiaan",
    className: "right-[7%] top-[55%] hidden h-32 w-52 rotate-[12deg] sm:block lg:h-44 lg:w-72",
  },
  {
    src: "/experience/WhatsApp%20Image%202026-05-28%20at%2000.20.27.jpeg",
    alt: "Dokumentasi terbaru kegiatan organisasi",
    className: "left-[35%] top-16 hidden h-32 w-52 rotate-[-9deg] md:block xl:h-40 xl:w-64",
  },
  {
    src: "/experience/WhatsApp%20Image%202026-05-28%20at%2000.20.25.jpeg",
    alt: "Dokumentasi terbaru perjalanan organisasi mahasiswa",
    className: "right-[35%] top-16 hidden h-32 w-52 rotate-[9deg] md:block xl:h-40 xl:w-64",
  },
  {
    src: "/experience/WhatsApp%20Image%202026-05-28%20at%2000.20.24.jpeg",
    alt: "Dokumentasi terbaru suasana acara kampus",
    className: "left-[34%] bottom-12 hidden h-32 w-52 rotate-[10deg] lg:block xl:h-40 xl:w-64",
  },
  {
    src: "/experience/WhatsApp%20Image%202026-05-28%20at%2000.21.11.jpeg",
    alt: "Dokumentasi terbaru bersama rekan kegiatan",
    className: "right-[34%] bottom-12 hidden h-32 w-52 rotate-[-10deg] lg:block xl:h-40 xl:w-64",
  },
  {
    src: "/experience/WhatsApp%20Image%202026-05-28%20at%2000.29.02.jpeg",
    alt: "Dokumentasi terbaru momen kegiatan kampus",
    className: "left-[48%] top-[48%] hidden h-28 w-44 rotate-[6deg] xl:block",
  },
  {
    src: "/experience/IMG_0582.jpg",
    alt: "Dokumentasi terbaru dalam kegiatan mahasiswa",
    className: "right-[48%] top-[48%] hidden h-28 w-44 rotate-[-6deg] xl:block",
  },
];

const experienceSignals = [
  "Kepanitiaan",
  "Organisasi",
  "Leadership",
  "Event Ops",
];

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative isolate overflow-hidden bg-[#080b09] px-5 py-20 text-[#f4f6f0] md:px-8 md:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(168,219,79,0.16),transparent_24rem),radial-gradient(circle_at_82%_76%,rgba(102,195,212,0.14),transparent_24rem)]" />
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(244,246,240,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(244,246,240,0.18)_1px,transparent_1px)] [background-size:56px_56px]" />

      <div className="absolute inset-0 z-0" aria-hidden="true">
        {experiencePhotos.map((photo, index) => (
          <figure
            key={`${photo.src}-${index}`}
            className={`experience-memory-photo absolute overflow-hidden rounded-[12px] border border-white/10 bg-white/5 p-1.5 shadow-[0_24px_70px_rgba(0,0,0,0.42)] ${photo.className}`}
            style={{ animationDelay: `${index * 0.45}s` }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 320px, 45vw"
              className="rounded-[8px] object-cover opacity-85 saturate-110"
            />
          </figure>
        ))}
      </div>

      <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,rgba(8,11,9,0.78),rgba(8,11,9,0.38)_46%,rgba(8,11,9,0.74))]" />
      <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(8,11,9,0.58),rgba(8,11,9,0.08)_44%,rgba(8,11,9,0.68))]" />

      <div className="relative z-20 mx-auto flex min-h-[520px] max-w-5xl flex-col items-center justify-center text-center">
        <p className="text-sm font-black uppercase tracking-[0.22em] text-[#a8db4f]">
          Experience
        </p>
        <h2 className="mt-5 max-w-4xl text-4xl font-black leading-tight text-[#f4f6f0] md:text-6xl">
          Di sela bangku kuliah, aku menemukan banyak ruang untuk bertumbuh.
        </h2>
        <p className="mt-7 max-w-3xl text-lg font-medium leading-8 text-[#dce3dd] md:text-2xl md:leading-10">
          Lewat kepanitiaan, organisasi, rapat panjang, hari-H yang ramai, dan
          orang-orang yang berjalan bersama, aku belajar bahwa pengalaman bukan
          cuma tentang peran yang dipegang, tapi tentang jejak kecil yang
          membentuk cara berpikir, bekerja, dan memimpin.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {experienceSignals.map((signal) => (
            <span
              key={signal}
              className="rounded-full border border-white/12 bg-white/8 px-4 py-2 text-xs font-black uppercase tracking-[0.12em] text-[#dce3dd]"
            >
              {signal}
            </span>
          ))}
        </div>

        <Link
          className="mt-10 inline-flex items-center gap-3 rounded-full bg-[#a8db4f] px-7 py-4 text-base font-black text-[#121513] shadow-[0_18px_42px_rgba(168,219,79,0.24)] transition hover:-translate-y-1 hover:bg-[#c1ee68] hover:shadow-[0_24px_54px_rgba(168,219,79,0.32)]"
          href="/experience"
        >
          Lihat cerita lengkapnya
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.4"
            aria-hidden="true"
          >
            <path d="M7 17 17 7" />
            <path d="M9 7h8v8" />
          </svg>
        </Link>
      </div>
    </section>
  );
}
