"use client";

import Link from "next/link";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { projects } from "@/data/portfolio";

const batikElement = "/UI/batik-element.webp";

export function ProjectsSection() {
  const projectSlides = projects;
  const sliderRef = useRef<HTMLDivElement>(null);
  const scrollFrameRef = useRef<number | null>(null);
  const [activeProject, setActiveProject] = useState(0);
  const projectCount = projectSlides.length;

  const scrollToProject = useCallback((index: number) => {
    const slider = sliderRef.current;
    const slide = slider?.children[index] as HTMLElement | undefined;

    if (!slider || !slide) {
      return;
    }

    slide.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
    setActiveProject(index);
  }, []);

  const showPreviousProject = () => {
    scrollToProject(Math.max(activeProject - 1, 0));
  };

  const showNextProject = () => {
    scrollToProject(Math.min(activeProject + 1, projectCount - 1));
  };

  const handleProjectScroll = () => {
    const slider = sliderRef.current;

    if (!slider || scrollFrameRef.current !== null) {
      return;
    }

    scrollFrameRef.current = window.requestAnimationFrame(() => {
      const sliderCenter = slider.scrollLeft + slider.clientWidth / 2;
      const closestIndex = Array.from(slider.children).reduce(
        (closest, child, index) => {
          const slide = child as HTMLElement;
          const slideCenter = slide.offsetLeft + slide.offsetWidth / 2;
          const distance = Math.abs(sliderCenter - slideCenter);

          return distance < closest.distance ? { index, distance } : closest;
        },
        { index: 0, distance: Number.POSITIVE_INFINITY },
      ).index;

      setActiveProject(closestIndex);
      scrollFrameRef.current = null;
    });
  };

  const isFirstProject = activeProject === 0;
  const isLastProject = activeProject === projectCount - 1;

  useEffect(() => {
    return () => {
      if (scrollFrameRef.current !== null) {
        window.cancelAnimationFrame(scrollFrameRef.current);
      }
    };
  }, []);

  return (
    <section
      id="projects"
      className="landing-section project-showcase-bg relative overflow-hidden bg-[#f8faf6] px-5 py-16 text-[#202520] md:px-8"
    >
      <div className="absolute left-0 top-0 h-6 w-full bg-[#2f6b43]">
        <div className="project-stitch-line absolute inset-x-0 top-1/2 h-1 -translate-y-1/2" />
      </div>
      <div className="absolute bottom-0 left-0 h-6 w-full bg-[#2f6b43]">
        <div className="project-stitch-line absolute inset-x-0 top-1/2 h-1 -translate-y-1/2" />
      </div>
      <Image
        src={batikElement}
        alt=""
        width={190}
        height={190}
        sizes="190px"
        className="project-batik-element absolute -left-12 top-36 z-0 h-36 w-36 rotate-[18deg] object-contain opacity-85 md:h-48 md:w-48"
        aria-hidden="true"
      />
      <Image
        src={batikElement}
        alt=""
        width={190}
        height={190}
        sizes="190px"
        className="project-batik-element absolute -right-12 bottom-16 z-0 h-36 w-36 rotate-[-16deg] object-contain opacity-85 md:h-48 md:w-48"
        aria-hidden="true"
      />

      <div className="section-reveal relative mx-auto max-w-7xl pt-10">
        <div className="grid items-center gap-7 lg:grid-cols-[220px_1fr_280px]">
          <div className="stitch-patch inline-flex w-fit rotate-[-2deg] rounded-[16px] border-2 border-dashed border-[#f3b41b] bg-white px-8 py-5 text-3xl font-black text-[#4c4d4a] shadow-[0_12px_28px_rgba(35,42,35,0.12)]">
            Projects
          </div>
          <p className="section-copy max-w-3xl text-lg font-medium leading-8 text-[#303730] md:text-2xl md:leading-10">
            A collection of projects, experiments, and systems I have worked
            on, each shaped by curiosity, practical problem solving, and the
            goal of building digital experiences that feel useful and reliable.
          </p>
          <Link
            className="inline-flex items-center justify-center gap-3 rounded-[14px] bg-[#ffa72b] px-7 py-5 text-lg font-bold text-[#1f2923] shadow-[0_16px_30px_rgba(255,167,43,0.26)] transition hover:-translate-y-1 hover:bg-[#ffb84a]"
            href="/projects"
          >
            Lihat Project
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.3"
              aria-hidden="true"
            >
              <path d="M7 17 17 7" />
              <path d="M9 7h8v8" />
            </svg>
          </Link>
        </div>

        <div className="section-reveal section-reveal-late mt-20">
          <div className="mb-5 flex items-center justify-between gap-4">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#2f6b43]">
              {activeProject + 1} / {projectCount}
            </p>

          </div>

          <div className="project-carousel relative">
            <button
              type="button"
              className="project-slider-button project-slider-button-prev absolute left-3 top-1/2 z-20 md:-left-5"
              onClick={showPreviousProject}
              disabled={isFirstProject}
              aria-label="Project sebelumnya"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.3"
                aria-hidden="true"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <div
              ref={sliderRef}
              className="project-slider flex snap-x snap-mandatory items-stretch gap-8 overflow-x-auto px-12 py-5 md:gap-10 md:px-16"
              onScroll={handleProjectScroll}
            >
              {projectSlides.map((project, index) => {
                const isActive = index === activeProject;

                return (
                  <Link
                    href={`/projects/${project.slug}`}
                    key={project.title}
                    className={`project-slide-card lift-card reveal-card group relative min-h-[500px] w-[min(84vw,720px)] shrink-0 snap-center overflow-hidden rounded-[18px] bg-[#050706] text-white shadow-[0_22px_52px_rgba(33,71,45,0.22)] ring-1 ring-[#2f6b43]/40 md:w-[620px] lg:w-[720px] ${
                      isActive
                        ? "opacity-100 ring-2 ring-[#ffa72b]/70"
                        : "opacity-82"
                    }`}
                    aria-label={`Lihat detail ${project.title}`}
                  >
                    <div className="flex h-full flex-col">
                      <div className="relative min-h-[260px] overflow-hidden bg-[#09110d] md:min-h-[330px]">
                        {project.image ? (
                          <Image
                            src={project.image}
                            alt={`${project.title} preview`}
                            fill
                            sizes={
                              isActive
                                ? "(min-width: 1024px) 720px, (min-width: 768px) 620px, 84vw"
                                : "(min-width: 1024px) 720px, (min-width: 768px) 620px, 84vw"
                            }
                            className="object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                          />
                        ) : (
                          <>
                            <div className="project-preview-grid absolute inset-0 opacity-55" />
                            <div className="absolute inset-x-8 top-20 text-center text-3xl font-black leading-tight text-white/16 md:text-4xl">
                              {project.title}
                            </div>
                          </>
                        )}
                      </div>

                      <div className="relative flex flex-1 flex-col justify-end bg-[#050706] p-7 md:p-10">
                        <h3
                          className={`font-black leading-tight ${
                            isActive ? "text-3xl md:text-4xl" : "text-2xl"
                          }`}
                        >
                          {project.title}
                        </h3>
                        <p
                          className={`mt-4 max-w-3xl font-medium text-[#dce3dd] ${
                            isActive
                              ? "text-base leading-8 md:text-xl md:leading-9"
                              : "line-clamp-3 text-base leading-7"
                          }`}
                        >
                          {project.summary}
                        </p>
                        <div className="mt-7 inline-flex w-fit items-center gap-2 rounded-full bg-[#ffa72b] px-4 py-2 text-sm font-black text-[#1f2923] transition group-hover:bg-[#ffbf5f]">
                          Lihat detail
                          <svg
                            className="h-4 w-4"
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
                        </div>
                        <div
                          className={`mt-5 items-center gap-3 text-sm font-bold text-[#dce3dd] ${
                            isActive ? "flex" : "hidden"
                          }`}
                        >
                          <span className="h-3 w-3 rounded-full bg-[#56ff96]" />
                          {project.tag}
                        </div>
                        <div
                          className={`mt-5 flex flex-wrap gap-2 ${
                            isActive ? "" : "hidden"
                          }`}
                        >
                          {project.points.map((point) => (
                            <span
                              key={point}
                              className="rounded-full bg-white/12 px-4 py-2 text-xs font-black text-[#f4f6f0] ring-1 ring-white/12"
                            >
                              {point}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>

            <button
              type="button"
              className="project-slider-button project-slider-button-next absolute right-3 top-1/2 z-20 md:-right-5"
              onClick={showNextProject}
              disabled={isLastProject}
              aria-label="Project berikutnya"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.3"
                aria-hidden="true"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>

          <div className="mt-5 flex justify-center gap-2" aria-label="Pilih project">
            {projectSlides.map((project, index) => (
              <button
                type="button"
                key={project.title}
                onClick={() => scrollToProject(index)}
                aria-label={`Tampilkan ${project.title}`}
                className="project-dot-button"
              >
                <span
                  className={`block h-2 rounded-full transition-all ${
                    index === activeProject
                      ? "w-8 bg-[#2f6b43]"
                      : "w-2 bg-[#2f6b43]/35"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
