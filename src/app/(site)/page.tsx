import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatementSection } from "@/components/sections/StatementSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";

export default function Home() {
  return (
    <main className="min-h-screen bg-bone text-ink">
      <Header />
      <HeroSection />
      <StatementSection />
      <ProjectsSection />
      <ExperienceSection />
      <Footer />
    </main>
  );
}
