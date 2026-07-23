import type { Metadata } from "next";
import "../globals.css";
import { Archivo } from "next/font/google";
import { cn } from "@/lib/utils";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { IntroAnimation } from "@/components/motion/IntroAnimation";
import { TransitionProvider } from "@/components/motion/TransitionContext";

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
        <TransitionProvider>
          <IntroAnimation />
          <SmoothScroll>{children}</SmoothScroll>
        </TransitionProvider>
      </body>
    </html>
  );
}
