import React from "react";
import Image from "next/image";

import type { ProjectProps } from "../projectTypes";

import ProjectLinks from "./ProjectLinks";
import ProjectImagePlaceholder from "./ProjectImagePlaceholder";
import EmptyCategory from "./EmptyCategory";

interface DevelopmentProjectsProps {
  projects: ProjectProps[];
}

const DevelopmentProjects: React.FC<DevelopmentProjectsProps> = ({
  projects
}) => {
  /* =====================================================
     FEATURED / OTHER
  ===================================================== */

  const featuredProjects = projects.filter((project) => project.featured);

  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="development-projects" className="scroll-mt-24">
      {/* =================================================
          HEADER
      ================================================= */}

      <div className="mb-10 flex flex-col gap-5 border-b border-white/7 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-indigo-300">
              01 / Phát triển
            </span>

            <span className="h-px w-10 bg-indigo-400/40" />
          </div>

          <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#F0EFEA]">
            Dự án lập trình
          </h2>

          <p className="mt-2 text-xs leading-6 text-slate-500">
            Những ứng dụng và công cụ tôi đã thiết kế, phát triển và triển khai.
          </p>
        </div>

        <span className="font-mono text-xs text-slate-600">
          {String(projects.length).padStart(2, "0")}
        </span>
      </div>

      {/* =================================================
          FEATURED PROJECTS
      ================================================= */}

      {featuredProjects.length > 0 && (
        <div className="space-y-8">
          {featuredProjects.map((project, index) => (
            <article
              key={project.id}
              style={{
                animation: `projectFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) ${
                  index * 0.1 + 0.1
                }s both`
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/7 bg-white/3 transition-all duration-500 hover:border-white/15 hover:bg-white/4"
            >
              {/* =========================================
                    GRID
                ========================================= */}

              <div className="grid min-h-100 grid-cols-1 lg:grid-cols-[0.85fr_1.15fr]">
                {/* IMAGE */}

                <div className="relative min-h-65 overflow-hidden bg-[#0B0B10] lg:min-h-full">
                  {project.thumbnailUrl ? (
                    <Image
                      src={project.thumbnailUrl}
                      alt={project.title}
                      fill
                      priority={index === 0}
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="object-contain p-8 transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  ) : (
                    <ProjectImagePlaceholder />
                  )}

                  {/* BACKGROUND DECORATION */}

                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#07070c]/30 via-transparent to-transparent lg:bg-linear-to-r lg:from-transparent lg:via-transparent lg:to-[#07070c]/20" />

                  {/* ORDER */}

                  <div className="absolute left-5 top-5">
                    <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 font-mono text-[9px] tracking-[0.15em] text-white/70 backdrop-blur-md">
                      {String(project.displayOrder).padStart(2, "0")}
                    </span>
                  </div>

                  {/* FEATURED */}

                  <div className="absolute bottom-5 left-5">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 backdrop-blur-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />

                      <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/70">
                        Nổi bật
                      </span>
                    </span>
                  </div>
                </div>

                {/* CONTENT */}

                <div className="relative flex flex-col justify-between p-7 sm:p-9 lg:p-10">
                  {/* GLOW */}

                  <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-indigo-500/8 blur-[100px]" />

                  {/* MAIN CONTENT */}

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">
                        Phát triển /{" "}
                        {String(project.displayOrder).padStart(2, "0")}
                      </p>

                      <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                    </div>

                    <h3 className="mt-8 text-3xl font-semibold tracking-[-0.03em] text-[#F0EFEA] transition-colors duration-300 group-hover:text-white">
                      {project.title}
                    </h3>

                    <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500">
                      {project.description}
                    </p>
                  </div>

                  {/* LINKS */}

                  <ProjectLinks
                    demoUrl={project.demoUrl}
                    githubUrl={project.githubUrl}
                    featured
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* =================================================
          OTHER DEVELOPMENT PROJECTS
      ================================================= */}

      {otherProjects.length > 0 && (
        <div className="mt-16">
          {/* HEADER */}

          <div className="mb-7 flex items-center justify-between">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">
              Các dự án khác
            </p>

            <span className="font-mono text-[9px] text-slate-700">
              {String(otherProjects.length).padStart(2, "0")}
            </span>
          </div>

          {/* GRID */}

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {otherProjects.map((project, index) => (
              <article
                key={project.id}
                style={{
                  animation: `projectFadeUp 0.6s cubic-bezier(0.16,1,0.3,1) ${
                    index * 0.08 + 0.2
                  }s both`
                }}
                className="group overflow-hidden rounded-2xl border border-white/7 bg-white/3 transition-all duration-500 hover:-translate-y-1 hover:border-white/15 hover:bg-white/4"
              >
                {/* IMAGE */}

                <div className="relative aspect-video overflow-hidden bg-[#0B0B10]">
                  {project.thumbnailUrl ? (
                    <Image
                      src={project.thumbnailUrl}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain p-6 transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                  ) : (
                    <ProjectImagePlaceholder />
                  )}

                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#07070c]/30 via-transparent to-transparent" />

                  {/* ORDER */}

                  <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/40 px-2.5 py-1 font-mono text-[8px] tracking-[0.15em] text-white/60 backdrop-blur-md">
                    {String(project.displayOrder).padStart(2, "0")}
                  </span>
                </div>

                {/* CONTENT */}

                <div className="p-6">
                  <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-indigo-300/70">
                    Phát triển
                  </p>

                  <h3 className="mt-3 text-lg font-semibold tracking-[-0.02em] text-slate-200 transition-colors duration-300 group-hover:text-white">
                    {project.title}
                  </h3>

                  <p className="mt-3 line-clamp-3 text-xs leading-6 text-slate-500">
                    {project.description}
                  </p>

                  <ProjectLinks
                    demoUrl={project.demoUrl}
                    githubUrl={project.githubUrl}
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* =================================================
          EMPTY
      ================================================= */}

      {projects.length === 0 && (
        <EmptyCategory
          title="Chưa có dự án phát triển."
          description="Các dự án phát triển sẽ xuất hiện tại đây khi có dữ liệu."
          accent="indigo"
        />
      )}
    </section>
  );
};

export default DevelopmentProjects;
