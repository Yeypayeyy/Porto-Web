"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { projects } from "@/data/portfolio";

const batikElement = "/images/batik-element.webp";
const projectImages: Record<string, string> = {
  "KMTETI Website": "/images/Screenshot%202026-05-27%20014658.png",
  "Campaign Web": "/images/Screenshot%202026-05-27%20020810.png",
};
const visibleProjectOffsets = [-1, 0, 1];

export function ProjectsSection() {
  const projectSlides = projects;
  const [activeProject, setActiveProject] = useState(0);
  const projectCount = projectSlides.length;

  const showPreviousProject = () => {
    setActiveProject((current) => (current - 1 + projectCount) % projectCount);
  };

  const showNextProject = () => {
    setActiveProject((current) => (current + 1) % projectCount);
  };

  const getProjectIndex = (offset: number) =>
    (activeProject + offset + projectCount) % projectCount;

  return (
    <section
      id="projects"
      className="project-showcase-bg relative overflow-hidden bg-[#f8faf6] px-5 py-16 text-[#202520] md:px-8"
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

      <div className="relative mx-auto max-w-6xl pt-10">
        <div className="grid items-center gap-7 lg:grid-cols-[220px_1fr_280px]">
          <div className="inline-flex w-fit rotate-[-2deg] rounded-[16px] border-2 border-dashed border-[#f3b41b] bg-white px-8 py-5 text-3xl font-black text-[#4c4d4a] shadow-[0_12px_28px_rgba(35,42,35,0.12)]">
            Projects
          </div>
          <p className="max-w-3xl text-lg font-medium leading-8 text-[#303730] md:text-2xl md:leading-10">
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

        <div className="mt-14">
          <div className="mb-5 flex items-center justify-between gap-4">
            <p className="text-sm font-black uppercase tracking-[0.16em] text-[#2f6b43]">
              {activeProject + 1} / {projectCount}
            </p>

          </div>

          <div className="project-carousel relative">
            <button
              type="button"
              className="project-slider-button project-slider-button-prev absolute left-2 top-1/2 z-20 md:-left-5"
              onClick={showPreviousProject}
              aria-label="Previous project"
            >
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
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>

            <div className="project-slider flex items-stretch justify-center gap-5 overflow-hidden px-10 py-2 md:px-8">
              {visibleProjectOffsets.map((offset) => {
                const project = projectSlides[getProjectIndex(offset)];
                const isActive = offset === 0;
                const projectImage = projectImages[project.title];

                return (
                  <article
                    key={`${project.title}-${offset}`}
                    className={`project-slide-card lift-card relative shrink-0 overflow-hidden rounded-[18px] bg-[#050706] text-white shadow-[0_22px_52px_rgba(33,71,45,0.22)] ring-1 ring-[#2f6b43]/40 ${
                      isActive
                        ? "min-h-[410px] w-full md:w-[58%]"
                        : "hidden min-h-[350px] md:block md:w-[24%] md:opacity-75"
                    }`}
                  >
                    <div className="flex h-full flex-col">
                      <div className="relative min-h-[210px] overflow-hidden bg-[#09110d] md:min-h-[240px]">
                        {projectImage ? (
                          <Image
                            src={projectImage}
                            alt={`${project.title} preview`}
                            fill
                            sizes={
                              isActive
                                ? "(min-width: 768px) 58vw, calc(100vw - 6rem)"
                                : "24vw"
                            }
                            className="object-cover object-top"
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

                      <div className="relative flex flex-1 flex-col justify-end bg-[#050706] p-6 md:p-8">
                        <h3
                          className={`font-black leading-tight ${
                            isActive ? "text-2xl md:text-3xl" : "text-xl"
                          }`}
                        >
                          {project.title}
                        </h3>
                        <p
                          className={`mt-4 max-w-3xl font-medium text-[#dce3dd] ${
                            isActive
                              ? "text-base leading-7 md:text-xl md:leading-8"
                              : "line-clamp-3 text-sm leading-6"
                          }`}
                        >
                          {project.summary}
                        </p>
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
                  </article>
                );
              })}
            </div>

            <button
              type="button"
              className="project-slider-button project-slider-button-next absolute right-2 top-1/2 z-20 md:-right-5"
              onClick={showNextProject}
              aria-label="Next project"
            >
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
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>

          <div className="mt-5 flex justify-center gap-2" aria-hidden="true">
            {projectSlides.map((project, index) => (
              <span
                key={project.title}
                className={`h-2 rounded-full transition-all ${
                  index === activeProject
                    ? "w-8 bg-[#2f6b43]"
                    : "w-2 bg-[#2f6b43]/35"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
