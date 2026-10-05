"use client";

import React from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Layers3, Star, Hash } from "lucide-react";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { getProjectIdRequest, getProjectUserIdRequest } from "../projectSlice";

import Loading from "@/components/ui/Loading";
import ErrorMessage from "@/components/ui/ErrorMessage";

const ProjectContainerId: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { project, loading, error } = useAppSelector((state) => state.project);

  const id = params.id;

  React.useEffect(() => {
    if (typeof id !== "string") {
      return;
    }
    dispatch(getProjectUserIdRequest(id));
    dispatch(getProjectIdRequest(id));
  }, [dispatch, id]);

  const formatCategory = (category: string) => {
    switch (category) {
      case "DEVELOPMENT":
        return "Development";

      case "VIDEO_EDITING":
        return "Video Editing";

      case "DESIGN":
        return "Design";

      default:
        return category
          .replaceAll("_", " ")
          .toLowerCase()
          .replace(/\b\w/g, (char) => char.toUpperCase());
    }
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  if (!project) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#1B1E29] px-6 text-[#F4F3EF]">
        <div className="text-center">
          <p className="font-mono text-[10px] tracking-[0.2em] text-white/35 uppercase">
            Project not found
          </p>

          <button
            type="button"
            onClick={() => router.back()}
            className="mt-5 text-sm text-white/50 transition-colors hover:text-white"
          >
            ← Quay lại
          </button>
        </div>
      </main>
    );
  }

  const category = formatCategory(project.category);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#1B1E29] px-6 py-24 text-[#F4F3EF] lg:px-10">
      {/* BACKGROUND */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 left-[10%] h-125 w-125 rounded-full bg-indigo-500/10 blur-[150px]" />

        <div className="absolute -right-30 -bottom-25 h-110 w-110 rounded-full bg-violet-500/8 blur-[150px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-350">
        {/* BACK */}

        <button
          type="button"
          onClick={() => router.back()}
          className="group mb-14 inline-flex items-center gap-3 text-sm text-white/40 transition-colors hover:text-white"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-indigo-300/30 group-hover:bg-indigo-300/5">
            <ArrowLeft size={15} />
          </span>
          Quay lại dự án
        </button>

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          {/* LEFT CONTENT */}

          <div>
            {/* CATEGORY */}

            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-[9px] tracking-[0.24em] text-[#8EA5FF] uppercase">
                Project / {String(project.displayOrder).padStart(2, "0")}
              </span>

              <div className="h-px w-8 bg-[#8EA5FF]/30" />

              <span className="font-mono text-[9px] tracking-[0.2em] text-white/30 uppercase">
                {category}
              </span>

              {project.featured && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-300/15 bg-amber-300/5 px-2.5 py-1 font-mono text-[8px] tracking-[0.14em] text-amber-200/70 uppercase">
                  <Star size={9} />
                  Featured
                </span>
              )}
            </div>

            {/* TITLE */}

            <h1 className="mt-7 max-w-3xl font-['Fraunces'] text-5xl leading-[0.98] font-light tracking-tighter text-[#F4F3EF] sm:text-6xl lg:text-7xl">
              {project.title}
              <span className="text-[#8EA5FF]">.</span>
            </h1>

            {/* DESCRIPTION */}

            <p className="mt-7 max-w-xl text-sm leading-7 text-[#9497A8] sm:text-[15px]">
              {project.description}
            </p>

            {/* ACTIONS */}

            <div className="mt-9 flex flex-wrap gap-3">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full bg-[#F4F3EF] px-5 py-3 text-sm font-medium text-[#171922] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white"
                >
                  Xem Live Demo
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/3 px-5 py-3 text-sm text-white/65 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#8EA5FF]/30 hover:bg-[#8EA5FF]/5 hover:text-white"
                >
                  GitHub
                  <ArrowUpRight
                    size={13}
                    className="text-white/30 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#9BADFF]"
                  />
                </a>
              )}
            </div>

            {/* META */}

            <div className="mt-12 grid max-w-xl grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/8 bg-white/8">
              {/* CATEGORY */}

              <div className="bg-[#1B1E29]/95 p-4 sm:p-5">
                <div className="flex items-center gap-2 text-white/25">
                  <Layers3 size={11} />

                  <span className="hidden font-mono text-[8px] tracking-[0.16em] uppercase sm:inline">
                    Category
                  </span>
                </div>

                <p className="mt-3 truncate text-xs text-white/65 sm:text-sm">{category}</p>
              </div>

              {/* ORDER */}

              <div className="bg-[#1B1E29]/95 p-4 sm:p-5">
                <div className="flex items-center gap-2 text-white/25">
                  <Hash size={11} />

                  <span className="hidden font-mono text-[8px] tracking-[0.16em] uppercase sm:inline">
                    Order
                  </span>
                </div>

                <p className="mt-3 text-xs text-white/65 sm:text-sm">
                  {String(project.displayOrder).padStart(2, "0")}
                </p>
              </div>

              {/* STATUS */}

              <div className="bg-[#1B1E29]/95 p-4 sm:p-5">
                <div className="flex items-center gap-2 text-white/25">
                  <Star size={11} />

                  <span className="hidden font-mono text-[8px] tracking-[0.16em] uppercase sm:inline">
                    Status
                  </span>
                </div>

                <div className="mt-3 flex items-center gap-2">
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      project.featured ? "bg-[#9BADFF]" : "bg-white/30"
                    }`}
                  />

                  <span className="text-xs text-white/65 sm:text-sm">
                    {project.featured ? "Featured" : "Project"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT THUMBNAIL
          ===================================================== */}

          <div className="relative">
            {/* GLOW */}

            <div className="absolute inset-0 scale-90 rounded-full bg-indigo-500/10 blur-[120px]" />

            {/* PROJECT WINDOW */}

            <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#101116] shadow-[0_40px_120px_rgba(0,0,0,0.35)]">
              {/* WINDOW BAR */}

              <div className="flex h-12 items-center justify-between border-b border-white/7 bg-[#111217] px-5">
                <div className="flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                  <span className="h-2 w-2 rounded-full bg-white/15" />
                </div>

                <span className="max-w-50 truncate font-mono text-[8px] tracking-widest text-white/20">
                  {project.title}
                </span>
              </div>

              {/* IMAGE */}

              <div className="relative aspect-video overflow-hidden bg-[#151720]">
                {project.thumbnailUrl ? (
                  <Image
                    src={project.thumbnailUrl}
                    alt={project.title}
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 55vw"
                    className="object-cover transition-transform duration-700 hover:scale-[1.02]"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-white/20 uppercase">
                      No preview
                    </span>
                  </div>
                )}

                {/* IMAGE GRADIENT */}

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-[#101116]/70 to-transparent" />

                {/* FEATURED */}

                {project.featured && (
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-black/45 px-3 py-1.5 font-mono text-[8px] tracking-[0.14em] text-white/70 uppercase backdrop-blur-md">
                      <Star size={9} className="text-[#9BADFF]" />
                      Featured
                    </span>
                  </div>
                )}
              </div>

              {/* WINDOW FOOTER */}

              <div className="flex items-center justify-between gap-5 px-5 py-4">
                <div className="min-w-0">
                  <p className="font-mono text-[8px] tracking-[0.16em] text-[#8EA5FF] uppercase">
                    {category}
                  </p>

                  <p className="mt-1 truncate text-xs text-white/55">{project.title}</p>
                </div>

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Xem demo ${project.title}`}
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/35 transition-all duration-300 hover:border-[#8EA5FF]/30 hover:bg-[#8EA5FF]/5 hover:text-[#9BADFF]"
                  >
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            PROJECT INFO
        ===================================================== */}

        <section className="mt-24 grid gap-10 border-t border-white/8 pt-12 lg:grid-cols-[0.35fr_0.65fr] lg:gap-20">
          <div>
            <p className="font-mono text-[9px] tracking-[0.22em] text-[#8EA5FF] uppercase">
              About Project
            </p>

            <h2 className="mt-4 font-['Fraunces'] text-3xl font-light tracking-[-0.03em]">
              Tổng quan dự án.
            </h2>
          </div>

          <div>
            <p className="max-w-3xl text-base leading-8 text-[#9B9EAC]">{project.description}</p>

            {/* LINKS */}

            <div className="mt-8 flex flex-col border-t border-white/7">
              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border-b border-white/7 py-5"
                >
                  <div>
                    <p className="font-mono text-[8px] tracking-[0.18em] text-white/25 uppercase">
                      Live Project
                    </p>

                    <p className="mt-1 text-sm text-white/65 transition-colors group-hover:text-white">
                      Xem phiên bản trực tiếp
                    </p>
                  </div>

                  <ArrowUpRight
                    size={16}
                    className="text-white/25 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#9BADFF]"
                  />
                </a>
              )}

              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between border-b border-white/7 py-5"
                >
                  <div>
                    <p className="font-mono text-[8px] tracking-[0.18em] text-white/25 uppercase">
                      Source Code
                    </p>

                    <p className="mt-1 text-sm text-white/65 transition-colors group-hover:text-white">
                      Xem repository trên GitHub
                    </p>
                  </div>

                  <ArrowUpRight
                    size={16}
                    className="text-white/25 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#9BADFF]"
                  />
                </a>
              )}
            </div>
          </div>
        </section>

        {/* =====================================================
            BOTTOM
        ===================================================== */}

        <div className="mt-20 flex flex-col gap-4 border-t border-white/8 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-mono text-[8px] tracking-[0.2em] text-white/20 uppercase">
            Project Detail
          </span>

          <span className="max-w-xs truncate font-mono text-[8px] text-white/20 sm:max-w-none">
            ID · {project.id}
          </span>
        </div>
      </div>
    </main>
  );
};

export default ProjectContainerId;
