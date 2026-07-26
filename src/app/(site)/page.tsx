import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatementSection } from "@/components/sections/StatementSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { JerseySeam } from "@/components/site/jersey";

export default function Home() {
  return (
    <main className="min-h-screen bg-bone text-ink">
      <Header />
      <HeroSection />
      {/* Seams mark the three tone flips only. Statement → Projects is bone on
          bone, so it stays unmarked rather than becoming decoration. */}
      <JerseySeam top="var(--ink)" bottom="var(--bone)" />
      <StatementSection />
      <ProjectsSection />
      <JerseySeam top="var(--bone)" bottom="var(--ink)" flip />
      <ExperienceSection />
      <JerseySeam top="var(--ink)" bottom="var(--bone)" flip />
      <Footer />
    </main>
  );
}
