import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { JerseySeam } from "@/components/site/jersey";

export default function Home() {
  return (
    <main className="min-h-screen bg-bone text-ink">
      <Header />
      <HeroSection />
      {/* Seams mark tone flips only. Hero → About is bone on bone, and
          Projects → Experience is ink on ink. About → Projects gets a seam on
          mobile only: on md+ About's own red caps close the pinned panel, and a
          second curve there collides with that scroll animation. */}
      <AboutSection />
      <JerseySeam top="var(--bone)" bottom="var(--ink)" flip className="md:hidden" />
      <ProjectsSection />
      <ExperienceSection />
      <JerseySeam top="var(--ink)" bottom="var(--bone)" />
      <Footer />
    </main>
  );
}
