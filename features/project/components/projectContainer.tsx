"use client";

import React from "react";
import Image from "next/image";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";

import { getProjectRequest } from "../projectSlice";

import Loading from "@/components/ui/Loading";
import ErrorMessage from "@/components/ui/ErrorMessage";

/* =========================================================
   PROJECT CONTAINER
========================================================= */

const ProjectContainer: React.FC = () => {
  const dispatch = useAppDispatch();

  const { data, loading, error } = useAppSelector((state) => state.project);

  /* =======================================================
     GET PROJECTS
  ======================================================= */

  React.useEffect(() => {
    dispatch(getProjectRequest());
  }, [dispatch]);

  /* =======================================================
     LOADING
  ======================================================= */

  if (loading) {
    return <Loading />;
  }

  /* =======================================================
     ERROR
  ======================================================= */

  if (error) {
    return <ErrorMessage />;
  }

  /* =======================================================
     SORT PROJECTS BY DISPLAY ORDER
  ======================================================= */

  const projects = [...(data ?? [])].sort(
    (a, b) => a.displayOrder - b.displayOrder
  );

  const featuredProjects = projects.filter((project) => project.featured);

  const normalProjects = projects.filter((project) => !project.featured);

  /* =======================================================
     UI
  ======================================================= */

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#07070c] px-6 py-24 lg:px-10">
      {/* ===================================================
          ANIMATIONS
      =================================================== */}

      <style>
        {`
          @keyframes projectFadeUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes projectGlow {
            0%,
            100% {
              transform: translate(0, 0) scale(1);
            }

            50% {
              transform: translate(20px, 15px) scale(1.08);
            }
          }

          @keyframes projectLine {
            from {
              transform: scaleX(0);
            }

            to {
              transform: scaleX(1);
            }
          }
        `}
      </style>

      {/* ===================================================
          BACKGROUND
      =================================================== */}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-size-[30px_30px] mask-[radial-gradient(ellipse_80%_70%_at_50%_20%,#000_20%,transparent_80%)]" />

      <div
        className="pointer-events-none absolute -left-32 top-40 h-120 w-120 rounded-full bg-indigo-500/8 blur-[150px]"
        style={{
          animation: "projectGlow 12s ease-in-out infinite"
        }}
      />

      <div
        className="pointer-events-none absolute -right-40 top-150 h-120 w-120 rounded-full bg-violet-500/7 blur-[160px]"
        style={{
          animation: "projectGlow 14s ease-in-out infinite reverse"
        }}
      />

      {/* ===================================================
          CONTAINER
      =================================================== */}

      <div className="relative mx-auto max-w-7xl">
        {/* =================================================
            HEADER
        ================================================= */}

        <div
          style={{
            animation: "projectFadeUp 0.6s cubic-bezier(0.16,1,0.3,1) both"
          }}
          className="mb-16"
        >
          {/* BADGE */}

          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-indigo-300">
              Selected Work
            </span>

            <span className="h-px w-12 bg-indigo-400/50" />
          </div>

          {/* TITLE */}

          <div className="mt-5 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="max-w-3xl bg-linear-to-b from-white via-slate-100 to-slate-500 bg-clip-text text-4xl font-semibold tracking-[-0.04em] text-transparent sm:text-5xl lg:text-6xl">
                Projects
              </h1>

              <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500">
                Một số sản phẩm tôi đã xây dựng trong quá trình học tập, phát
                triển và thử nghiệm các ý tưởng thực tế.
              </p>
            </div>

            {/* PROJECT COUNT */}

            <div className="flex items-end gap-3">
              <span className="font-mono text-4xl font-light text-slate-200">
                {String(projects.length).padStart(2, "0")}
              </span>

              <span className="pb-1.5 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">
                Projects
              </span>
            </div>
          </div>

          {/* LINE */}

          <div className="mt-10 h-px w-full overflow-hidden bg-white/7">
            <div
              className="h-full w-full origin-left bg-linear-to-r from-indigo-400/60 via-white/10 to-transparent"
              style={{
                animation: "projectLine 1s cubic-bezier(0.16,1,0.3,1) both 0.2s"
              }}
            />
          </div>
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
                <div className="grid min-h-115 grid-cols-1 lg:grid-cols-[1.15fr_0.85fr]">
                  {/* =====================================
                        THUMBNAIL
                    ===================================== */}

                  <div className="relative min-h-75 overflow-hidden bg-[#0B0B10] lg:min-h-full">
                    {project.thumbnailUrl ? (
                      <Image
                        src={project.thumbnailUrl}
                        alt={project.title}
                        fill
                        priority={index === 0}
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                          className="h-10 w-10 text-slate-700"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5v-13Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />

                          <path
                            d="m4 16 4.5-4.5 3.5 3.5 2-2 6 6"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinejoin="round"
                          />

                          <circle
                            cx="15.5"
                            cy="8.5"
                            r="1.5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </div>
                    )}

                    {/* OVERLAY */}

                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#07070c]/70 via-transparent to-transparent lg:bg-linear-to-r lg:from-transparent lg:via-transparent lg:to-[#07070c]/30" />

                    {/* NUMBER */}

                    <div className="absolute left-5 top-5">
                      <span className="rounded-full border border-white/10 bg-black/40 px-3 py-1.5 font-mono text-[9px] tracking-[0.15em] text-white/70 backdrop-blur-md">
                        {String(project.displayOrder).padStart(2, "0")}
                      </span>
                    </div>

                    {/* FEATURED BADGE */}

                    <div className="absolute bottom-5 left-5">
                      <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 backdrop-blur-md">
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />

                        <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/70">
                          Featured
                        </span>
                      </span>
                    </div>
                  </div>

                  {/* =====================================
                        CONTENT
                    ===================================== */}

                  <div className="relative flex flex-col justify-between p-7 sm:p-9 lg:p-10">
                    {/* GLOW */}

                    <div className="pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full bg-indigo-500/8 blur-[100px]" />

                    <div className="relative">
                      {/* META */}

                      <div className="flex items-center justify-between">
                        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">
                          Project /
                          {String(project.displayOrder).padStart(2, "0")}
                        </p>

                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                      </div>

                      {/* TITLE FROM API */}

                      <h2 className="mt-8 text-3xl font-semibold tracking-[-0.03em] text-[#F0EFEA] transition-colors duration-300 group-hover:text-white">
                        {project.title}
                      </h2>

                      {/* DESCRIPTION FROM API */}

                      <p className="mt-5 text-sm leading-7 text-slate-500">
                        {project.description}
                      </p>
                    </div>

                    {/* ===================================
                          ACTIONS
                      =================================== */}

                    <div className="relative mt-10 flex flex-wrap gap-3 border-t border-white/7 pt-6">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/demo inline-flex items-center gap-3 rounded-xl bg-[#F0EFEA] px-5 py-3 text-xs font-medium text-[#0B0B0D] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
                        >
                          Live Demo
                          <svg
                            className="h-3.5 w-3.5 transition-transform duration-300 group-hover/demo:translate-x-0.5 group-hover/demo:-translate-y-0.5"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M7 17 17 7M9 7h8v8"
                              stroke="currentColor"
                              strokeWidth="1.7"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/github inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/3 px-5 py-3 text-xs font-medium text-slate-300 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/7 hover:text-white"
                        >
                          <svg
                            className="h-4 w-4"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                          >
                            <path d="M12 .7a11.5 11.5 0 0 0-3.64 22.41c.58.11.79-.25.79-.56v-2.23c-3.22.7-3.9-1.37-3.9-1.37-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.72 1.27 3.39.97.1-.75.4-1.27.74-1.56-2.57-.29-5.27-1.29-5.27-5.73 0-1.27.45-2.3 1.2-3.11-.12-.3-.52-1.48.11-3.07 0 0 .98-.31 3.16 1.19A11 11 0 0 1 12 6.05c.98 0 1.96.13 2.87.39 2.19-1.5 3.16-1.19 3.16-1.19.64 1.59.24 2.77.12 3.07.74.81 1.19 1.84 1.19 3.11 0 4.45-2.71 5.43-5.29 5.72.42.36.79 1.07.79 2.16v3.24c0 .31.21.68.8.56A11.5 11.5 0 0 0 12 .7Z" />
                          </svg>
                          GitHub
                        </a>
                      )}

                      {!project.demoUrl && !project.githubUrl && (
                        <span className="inline-flex items-center gap-2 rounded-xl border border-white/7 bg-white/3 px-4 py-3 font-mono text-[9px] uppercase tracking-[0.15em] text-slate-600">
                          <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                          Links coming soon
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* =================================================
            OTHER PROJECTS
        ================================================= */}

        {normalProjects.length > 0 && (
          <div className="mt-20">
            {/* HEADER */}

            <div className="mb-8 flex items-center justify-between border-b border-white/7 pb-5">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">
                  More work
                </p>

                <h2 className="mt-2 text-xl font-medium text-slate-200">
                  Other Projects
                </h2>
              </div>

              <span className="font-mono text-[10px] text-slate-600">
                {String(normalProjects.length).padStart(2, "0")}
              </span>
            </div>

            {/* GRID */}

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {normalProjects.map((project, index) => (
                <article
                  key={project.id}
                  style={{
                    animation: `projectFadeUp 0.6s cubic-bezier(0.16,1,0.3,1) ${
                      index * 0.08 + 0.2
                    }s both`
                  }}
                  className="group overflow-hidden rounded-2xl border border-white/7 bg-white/3 transition-all duration-500 hover:-translate-y-1 hover:border-white/15 hover:bg-white/4"
                >
                  {/* =====================================
                        THUMBNAIL
                    ===================================== */}

                  <div className="relative aspect-video overflow-hidden bg-[#0B0B10]">
                    {project.thumbnailUrl ? (
                      <Image
                        src={project.thumbnailUrl}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <svg
                          className="h-9 w-9 text-slate-700"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M4 5.5A1.5 1.5 0 0 1 5.5 4h13A1.5 1.5 0 0 1 20 5.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 4 18.5v-13Z"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />

                          <path
                            d="m4 16 4.5-4.5 3.5 3.5 2-2 6 6"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    )}

                    <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#07070c]/70 via-transparent to-transparent" />

                    {/* ORDER */}

                    <span className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/40 px-2.5 py-1 font-mono text-[8px] tracking-[0.15em] text-white/60 backdrop-blur-md">
                      {String(project.displayOrder).padStart(2, "0")}
                    </span>
                  </div>

                  {/* =====================================
                        CONTENT
                    ===================================== */}

                  <div className="p-6">
                    <h3 className="text-lg font-semibold tracking-[-0.02em] text-slate-200 transition-colors duration-300 group-hover:text-white">
                      {project.title}
                    </h3>

                    <p className="mt-3 line-clamp-3 text-xs leading-6 text-slate-500">
                      {project.description}
                    </p>

                    {/* LINKS */}

                    <div className="mt-6 flex items-center gap-5 border-t border-white/7 pt-5">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center gap-2 text-[11px] text-slate-400 transition-colors hover:text-white"
                        >
                          Live Demo
                          <span className="transition-transform duration-300 group-hover/link:translate-x-0.5">
                            ↗
                          </span>
                        </a>
                      )}

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/link inline-flex items-center gap-2 text-[11px] text-slate-400 transition-colors hover:text-white"
                        >
                          GitHub
                          <span className="transition-transform duration-300 group-hover/link:translate-x-0.5">
                            ↗
                          </span>
                        </a>
                      )}

                      {!project.demoUrl && !project.githubUrl && (
                        <span className="font-mono text-[8px] uppercase tracking-[0.15em] text-slate-700">
                          Coming Soon
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {/* =================================================
            EMPTY STATE
        ================================================= */}

        {projects.length === 0 && (
          <div className="flex min-h-80 flex-col items-center justify-center rounded-2xl border border-dashed border-white/10 bg-white/2 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/7 bg-white/3">
              <svg
                className="h-6 w-6 text-slate-600"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7M5 7h14a1 1 0 0 1 1 1v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a1 1 0 0 1 1-1Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />

                <path d="M4 12h16" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </div>

            <p className="mt-5 text-sm font-medium text-slate-300">
              Chưa có project
            </p>

            <p className="mt-2 text-xs text-slate-600">
              Project sẽ hiển thị tại đây khi API có dữ liệu.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectContainer;
