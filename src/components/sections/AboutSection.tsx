import Link from "next/link";
import { ArrowUpRight, AtSign, BriefcaseBusiness, Code2, Mail } from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "farrel.ag20@gmail.com",
    href: "mailto:farrel.ag20@gmail.com",
    icon: Mail,
  },
  {
    label: "GitHub",
    value: "Yeypayeyy",
    href: "https://github.com/Yeypayeyy",
    icon: Code2,
  },
  {
    label: "LinkedIn",
    value: "farrel-ag",
    href: "https://www.linkedin.com/in/farrel-ag",
    icon: BriefcaseBusiness,
  },
  {
    label: "Instagram",
    value: "@frlagee",
    href: "https://www.instagram.com/frlagee",
    icon: AtSign,
  },
];

export function AboutSection() {
  return (
    <section
      id="contact"
      className="landing-section relative overflow-hidden bg-[radial-gradient(circle_at_50%_20%,rgba(244,246,240,0.62)_0%,rgba(183,220,215,0.42)_22%,transparent_38%),radial-gradient(circle_at_82%_78%,rgba(115,191,63,0.58)_0%,rgba(115,191,63,0.32)_30%,transparent_54%),linear-gradient(135deg,#b7dcd7_0%,#66c3d4_52%,#a5dca1_100%)] px-5 py-16 text-[#121513] md:px-8 md:py-20"
    >
      <div className="drift-soft absolute -left-10 bottom-10 h-28 w-28 rounded-full bg-[#73bf3f]/20 blur-2xl" />
      <div className="section-reveal mx-auto grid max-w-6xl gap-10 border-t border-[#73bf3f]/50 pt-10 md:grid-cols-[0.58fr_1fr] md:items-start">
        <div className="max-w-xl">
          <p className="stitch-patch inline-flex w-fit rotate-[-2deg] rounded-[12px] border-2 border-dashed border-[#f3b41b] bg-white px-5 py-3 text-xl font-black text-[#4c4d4a] shadow-[0_12px_28px_rgba(35,42,35,0.12)] md:px-6 md:py-4 md:text-2xl">
            Contact
          </p>
          <h2 className="section-title mt-6 text-4xl font-black leading-tight text-[#121513] md:text-5xl">
            Let&apos;s build something useful together.
          </h2>
          <p className="section-copy mt-5 max-w-lg text-base font-medium leading-8 text-[#24282b] md:text-lg">
            Punya ide project, kolaborasi, atau sekadar mau ngobrol soal web,
            backend, dan Web3? Kirim pesan lewat channel di samping.
          </p>
        </div>

        <div className="reveal-list grid gap-4">
          {contactLinks.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.href}
                className="contact-card group flex items-center justify-between gap-5 rounded-[8px] border border-[#121513]/12 bg-white/70 p-5 text-[#121513] shadow-[0_16px_34px_rgba(31,48,36,0.12)] backdrop-blur transition hover:-translate-y-1 hover:border-[#2f6b43]/35 hover:bg-white"
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              >
                <span className="flex min-w-0 items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#2f6b43] text-[#f8faf6]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-black uppercase tracking-[0.16em] text-[#2f6b43]">
                      {item.label}
                    </span>
                    <span className="mt-1 block truncate text-lg font-black">
                      {item.value}
                    </span>
                  </span>
                </span>
                <ArrowUpRight
                  className="h-5 w-5 shrink-0 transition group-hover:translate-x-1 group-hover:-translate-y-1"
                  aria-hidden="true"
                />
              </a>
            );
          })}

          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              className="landing-cta inline-flex items-center gap-3 rounded-full bg-[#121513] px-7 py-4 text-base font-black text-[#f4f6f0] shadow-[0_16px_34px_rgba(18,21,19,0.24)] transition hover:-translate-y-1 hover:bg-[#2f6b43]"
              href="mailto:farrel.ag20@gmail.com"
            >
              Send email
              <Mail className="h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
