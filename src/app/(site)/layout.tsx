import type { Metadata } from "next";
import "../globals.css";
import { Archivo } from "next/font/google";
import { cn } from "@/lib/utils";
import { SmoothScroll } from "@/components/motion/SmoothScroll";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-sans",
  axes: ["wdth"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Farrel Al Ghazy | Portfolio",
  description:
    "Portfolio of Muhammad Farrel Al Ghazy, Information Engineering undergraduate student at Universitas Gadjah Mada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={cn("h-full antialiased font-sans", archivo.variable)}
    >
      <body className="min-h-full flex flex-col bg-bone">
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0 z-[70] border-[6px] border-rossoneri md:border-[9px]"
        />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
