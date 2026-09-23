import React from "react";
import Image from "next/image";

import type { ProjectProps } from "../projectTypes";

import ProjectLinks from "./ProjectLinks";

interface DrivingProjectsProps {
  projects: ProjectProps[];
}

const DrivingProjects: React.FC<DrivingProjectsProps> = ({ projects }) => {
  return (
    <section id="driving-projects" className="mt-32 scroll-mt-24">
      {/* =========================================
          HEADER
      ========================================= */}

      <div className="mb-10 flex flex-col gap-5 border-b border-white/7 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-300">
              03 / Driving
            </span>

            <span className="h-px w-10 bg-emerald-400/40" />
          </div>

          <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#F0EFEA]">
            Driving
          </h2>

          <p className="mt-2 text-xs leading-6 text-slate-500">
            Một hướng kỹ năng thực tế tôi đang tiếp tục phát triển.
          </p>
        </div>

        <span className="font-mono text-xs text-slate-600">
          {String(projects.length).padStart(2, "0")}
        </span>
      </div>

      {/* =========================================
          HAS API DATA
      ========================================= */}

      {projects.length > 0 ? (
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.id}
              style={{
                animation: `projectFadeUp 0.6s cubic-bezier(0.16,1,0.3,1) ${
                  index * 0.08
                }s both`
              }}
              className="group overflow-hidden rounded-2xl border border-emerald-400/10 bg-white/3 transition-all duration-500 hover:-translate-y-1 hover:border-emerald-400/25 hover:bg-white/4"
            >
              {/* IMAGE */}

              {project.thumbnailUrl && (
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.thumbnailUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
              )}

              {/* CONTENT */}

              <div className="p-6">
                <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-emerald-300/70">
                  Driving
                </p>

                <h3 className="mt-3 text-lg font-semibold text-[#F0EFEA]">
                  {project.title}
                </h3>

                <p className="mt-3 text-xs leading-6 text-slate-500">
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
      ) : (
        /* =====================================
           CURRENT STATUS
        ===================================== */

        <div className="relative overflow-hidden rounded-3xl border border-emerald-400/10 bg-emerald-400/3 p-8 sm:p-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-70 w-70 rounded-full bg-emerald-500/7 blur-[110px]" />

          <div className="pointer-events-none absolute bottom-0 right-10 font-mono text-[150px] font-bold leading-none text-white/2">
            03
          </div>

          <div className="relative grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end">
            <div className="max-w-2xl">
              {/* LICENSED */}

              <div className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />

                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-300">
                  Licensed
                </span>
              </div>

              <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-[#F0EFEA] sm:text-3xl">
                Driving experience
              </h3>

              <p className="mt-5 text-sm leading-7 text-slate-500">
                Đã có giấy phép lái xe. Hiện đang bổ túc tay lái và tiếp tục
                tích lũy kinh nghiệm thực tế trước khi bổ sung các nội dung và
                kinh nghiệm cụ thể vào portfolio.
              </p>

              {/* =================================
                  PROGRESS
              ================================= */}

              <div className="mt-9 grid max-w-xl grid-cols-1 gap-3 sm:grid-cols-3">
                {/* DONE */}

                <div className="rounded-xl border border-emerald-400/15 bg-emerald-400/5 p-4">
                  <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-emerald-300">
                    01 · Done
                  </span>

                  <p className="mt-2 text-xs text-slate-300">
                    Giấy phép lái xe
                  </p>
                </div>

                {/* CURRENT */}

                <div className="rounded-xl border border-amber-400/15 bg-amber-400/4 p-4">
                  <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-amber-300">
                    02 · Current
                  </span>

                  <p className="mt-2 text-xs text-slate-300">Bổ túc tay lái</p>
                </div>

                {/* NEXT */}

                <div className="rounded-xl border border-white/7 bg-white/3 p-4">
                  <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-slate-600">
                    03 · Next
                  </span>

                  <p className="mt-2 text-xs text-slate-500">
                    Kinh nghiệm thực tế
                  </p>
                </div>
              </div>
            </div>

            {/* STATUS */}

            <div className="inline-flex h-fit w-fit items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/5 px-4 py-2">
              <span
                className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                style={{
                  animation: "projectPulse 2s ease-in-out infinite"
                }}
              />

              <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-emerald-200">
                Licensed · Practice next
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default DrivingProjects;
