import React from "react";
import Image from "next/image";

import type { ProjectProps } from "../projectTypes";

import ProjectLinks from "./ProjectLinks";
import ProjectImagePlaceholder from "./ProjectImagePlaceholder";

interface VideoProjectsProps {
  projects: ProjectProps[];
}

const VideoProjects: React.FC<VideoProjectsProps> = ({ projects }) => {
  return (
    <section id="video-projects" className="mt-32 scroll-mt-24">
      {/* =========================================
          HEADER
      ========================================= */}

      <div className="mb-10 flex flex-col gap-5 border-b border-white/7 pb-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-violet-300">
              02 / Video Editing
            </span>

            <span className="h-px w-10 bg-violet-400/40" />
          </div>

          <h2 className="mt-3 text-2xl font-semibold tracking-[-0.03em] text-[#F0EFEA]">
            Video Projects
          </h2>

          <p className="mt-2 text-xs leading-6 text-slate-500">
            Short-form content, product video và những sản phẩm tập trung vào
            visual storytelling.
          </p>
        </div>

        <span className="font-mono text-xs text-slate-600">
          {String(projects.length).padStart(2, "0")}
        </span>
      </div>

      {/* =========================================
          HAS DATA
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
              className="group overflow-hidden rounded-2xl border border-violet-400/10 bg-white/3 transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/25 hover:bg-white/4"
            >
              {/* IMAGE */}

              <div className="relative aspect-video overflow-hidden bg-[#0B0B10]">
                {project.thumbnailUrl ? (
                  <Image
                    src={project.thumbnailUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                ) : (
                  <ProjectImagePlaceholder />
                )}

                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#07070c]/80 via-transparent to-transparent" />

                {project.featured && (
                  <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-violet-400/15 bg-black/40 px-3 py-1.5 backdrop-blur-md">
                    <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />

                    <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-violet-200">
                      Featured
                    </span>
                  </span>
                )}
              </div>

              {/* CONTENT */}

              <div className="p-6">
                <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-violet-300/70">
                  Video Editing
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
           COMING SOON
        ===================================== */

        <div className="relative overflow-hidden rounded-3xl border border-violet-400/10 bg-violet-400/3 px-8 py-16 sm:px-10">
          <div className="pointer-events-none absolute -right-20 -top-20 h-70 w-70 rounded-full bg-violet-500/8 blur-[110px]" />

          <div className="pointer-events-none absolute bottom-0 right-10 font-mono text-[150px] font-bold leading-none text-white/2">
            02
          </div>

          <div className="relative max-w-xl">
            <div className="flex items-center gap-3">
              <span
                className="h-2 w-2 rounded-full bg-violet-400"
                style={{
                  animation: "projectPulse 2s ease-in-out infinite"
                }}
              />

              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-violet-300">
                Portfolio in progress
              </span>
            </div>

            <h3 className="mt-6 text-2xl font-semibold tracking-[-0.03em] text-[#F0EFEA] sm:text-3xl">
              Video work coming soon.
            </h3>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              Các sản phẩm Video Editing sẽ được cập nhật tại đây, bao gồm
              short-form content, product video và các bài dựng tập trung vào
              visual storytelling.
            </p>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-violet-400/15 bg-violet-400/5 px-4 py-2">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />

              <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-violet-200">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoProjects;
