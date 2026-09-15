import { Download, ExternalLink } from "lucide-react";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";

export const metadata = {
  title: "CV | Muhammad Farrel Al Ghazy",
  description:
    "Curriculum vitae of Muhammad Farrel Al Ghazy, Information Engineering student at Universitas Gadjah Mada and fullstack developer.",
};

const CV_PATH = "/cv-muhammad-farrel-al-ghazy.pdf";

export default function CvPage() {
  return (
    <main className="min-h-screen bg-bone text-ink">
      <Header />

      <section className="px-6 pb-16 pt-28 md:px-12 md:pb-20 md:pt-36">
        <div className="mx-auto max-w-[64rem]">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-ink/55">
                Curriculum vitae
              </p>
              <h1 className="mt-3 font-display text-[clamp(2rem,5vw,3.4rem)] font-black uppercase leading-[0.95] tracking-[-0.035em]">
                Muhammad Farrel <span className="text-rossoneri">Al Ghazy.</span>
              </h1>
            </div>
            <a
              href={CV_PATH}
              download
              className="group hidden items-center gap-3 rounded-full bg-ink px-7 py-4 text-sm font-bold uppercase tracking-[0.16em] text-bone transition-colors duration-300 hover:bg-rossoneri md:inline-flex"
            >
              Download PDF
              <Download className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" aria-hidden="true" />
            </a>
          </div>

          {/* iOS Safari renders only page one of a PDF inside an iframe, so small
              screens get open/download buttons instead of a broken preview. */}
          <iframe
            src={`${CV_PATH}#view=FitH`}
            title="CV of Muhammad Farrel Al Ghazy"
            className="mt-10 hidden h-[85vh] w-full rounded-2xl border border-ink/10 bg-white md:block"
          />

          <div className="mt-10 rounded-2xl border border-ink/10 bg-bone-soft p-6 md:hidden">
            <p className="text-base leading-7 text-ink/75">
              PDF preview works best on a larger screen. Open it in a new tab or
              download it.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={CV_PATH}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-sm font-bold uppercase tracking-[0.14em]"
              >
                Open PDF
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
              <a
                href={CV_PATH}
                download
                className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold uppercase tracking-[0.14em] text-bone"
              >
                Download
                <Download className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
