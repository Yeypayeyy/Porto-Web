import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
