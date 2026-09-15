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
      {/* Only About → Projects gets a seam, and on mobile only: on md+ About's
          own red caps close the pinned panel, and a second curve there collides
          with that scroll animation. Experience → Footer is a straight cut. */}
      <AboutSection />
      <JerseySeam top="var(--bone)" bottom="var(--ink)" flip className="md:hidden" />
      <ProjectsSection />
      <ExperienceSection />
      <Footer />
    </main>
  );
}
