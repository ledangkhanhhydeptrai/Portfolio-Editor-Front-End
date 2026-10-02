"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useAppSelector } from "@/hooks/redux";

export default function ProjectsSection() {
  const { data, loading, error } = useAppSelector((state) => state.project);

  // =========================================================
  // SORT PROJECTS
  // Featured trước -> displayOrder
  // =========================================================

  const projects = React.useMemo(() => {
    const categoryPriority: Record<string, number> = {
      VIDEO_EDITING: 1,
      DEVELOPMENT: 2,
      DRIVING: 3,
    };

    return [...data].sort((a, b) => {
      const priorityA = categoryPriority[a.category] || 999;
      const priorityB = categoryPriority[b.category] || 999;

      // 1. Project Edit / Video Editing lên đầu
      if (priorityA !== priorityB) {
        return priorityA - priorityB;
      }

      // 2. Cùng category thì Featured lên trước
      if (a.featured !== b.featured) {
        return a.featured ? -1 : 1;
      }

      // 3. Cuối cùng theo displayOrder
      return a.displayOrder - b.displayOrder;
    });
  }, [data]);

  // Home chỉ hiển thị tối đa 3 project
  const featuredProjects = React.useMemo(() => {
    return projects.slice(0, 3);
  }, [projects]);

  const formatCategory = (category: string) => {
    return category
      .replaceAll("_", " ")
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  // =========================================================
  // STATES
  // =========================================================

  if (loading) {
    return (
      <section id="projects" className="border-t border-white/7 px-6 py-24 lg:px-10 xl:px-14">
        <div className="mx-auto w-full max-w-375">
          <div className="grid gap-5 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="h-96 animate-pulse rounded-2xl border border-white/8 bg-white/3"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="border-t border-white/7 px-6 py-24 lg:px-10 xl:px-14">
        <div className="mx-auto w-full max-w-375">
          <div className="rounded-2xl border border-white/8 bg-white/3 px-6 py-10">
            <p className="text-sm text-[#8E91A3]">Không thể tải danh sách dự án.</p>
          </div>
        </div>
      </section>
    );
  }

  if (projects.length === 0) {
    return (
      <section id="projects" className="border-t border-white/7 px-6 py-24 lg:px-10 xl:px-14">
        <div className="mx-auto w-full max-w-375">
          <div className="rounded-2xl border border-dashed border-white/10 bg-white/2 px-6 py-14 text-center">
            <p className="text-sm text-[#8E91A3]">Chưa có dự án nào.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="border-t border-white/7 px-6 py-24 lg:px-10 xl:px-14">
      <div className="mx-auto w-full max-w-375">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-[10px] tracking-[0.28em] text-[#7F96F5] uppercase">
              03 / Dự án
            </p>

            <h2 className="mt-5 font-['Fraunces'] text-3xl leading-tight font-light lg:text-4xl">
              Những sản phẩm
              <br />
              <span className="text-[#8E91A3]">tôi đã tạo nên.</span>
            </h2>
          </div>

          <p className="text-sm text-[#817E77]">Development · Creative · Product</p>
        </div>

        {/* =====================================================
            PROJECT GRID
        ===================================================== */}

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <article
              key={project.id}
              className="group overflow-hidden rounded-2xl border border-white/8 bg-[#101012] transition-all duration-500 hover:-translate-y-1 hover:border-[#7F96F5]/25"
            >
              {/* =================================================
                  THUMBNAIL
              ================================================= */}

              <div className="relative aspect-video overflow-hidden border-b border-white/8 bg-[#0A0A0C]">
                {project.thumbnailUrl ? (
                  <Image
                    src={project.thumbnailUrl}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-mono text-4xl font-medium text-white/5">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                )}

                {/* Thumbnail overlay */}

                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-[#101012]/60 via-transparent to-transparent" />

                {/* Number */}

                <span className="absolute top-4 left-4 rounded-full border border-white/10 bg-black/40 px-2.5 py-1 font-mono text-[9px] text-white/70 backdrop-blur-md">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Featured */}

                {project.featured && (
                  <span className="absolute top-4 right-4 rounded-full border border-[#9BADFF]/20 bg-[#7F96F5]/10 px-2.5 py-1 font-mono text-[8px] tracking-[0.14em] text-[#AAB7FF] uppercase backdrop-blur-md">
                    Featured
                  </span>
                )}
              </div>

              {/* =================================================
                  CONTENT
              ================================================= */}

              <div className="flex min-h-60 flex-col p-6">
                {/* Category */}

                <p className="font-mono text-[9px] tracking-[0.2em] text-[#7F96F5] uppercase">
                  {formatCategory(project.category)}
                </p>

                {/* Title */}

                <h3 className="mt-3 text-xl font-semibold tracking-[-0.02em] text-[#F0EFEA] transition-colors duration-300 group-hover:text-white">
                  {project.title}
                </h3>

                {/* Description */}

                {project.description && (
                  <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#8E8B84]">
                    {project.description}
                  </p>
                )}

                {/* Bottom */}

                <div className="mt-auto pt-7">
                  <div className="border-t border-white/7 pt-5">
                    <div className="flex flex-wrap items-center gap-2">
                      {/* DEMO */}

                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group/demo flex items-center gap-2 rounded-lg bg-[#EDECE8] px-3.5 py-2 text-[11px] font-medium text-[#0B0B0D] transition-colors hover:bg-white"
                        >
                          Xem dự án
                          <ArrowUpRight
                            size={13}
                            className="transition-transform duration-300 group-hover/demo:translate-x-0.5 group-hover/demo:-translate-y-0.5"
                          />
                        </a>
                      )}

                      {project.category === "DEVELOPMENT" && project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 rounded-lg border border-white/10 px-3.5 py-2 text-[11px] text-[#C7C4BD] transition-colors hover:border-white/20 hover:bg-white/4 hover:text-white"
                        >
                          <svg
                            viewBox="0 0 24 24"
                            className="h-3.5 w-3.5"
                            fill="currentColor"
                            aria-hidden="true"
                          >
                            <path d="M12 .7C5.7.7.6 5.8.6 12.1c0 5 3.3 9.3 7.8 10.8.6.1.8-.3.8-.6v-2.2c-3.2.7-3.9-1.4-3.9-1.4-.5-1.3-1.3-1.7-1.3-1.7-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.6-.3-5.3-1.3-5.3-5.7 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.1 1.2a10.8 10.8 0 0 1 5.7 0C17 4.7 18 5 18 5c.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.4.8 1.1.8 2.2v3.2c0 .3.2.7.8.6 4.5-1.5 7.8-5.8 7.8-10.8C23.4 5.8 18.3.7 12 .7Z" />
                          </svg>

                          <span>GitHub</span>
                        </a>
                      )}

                      {/* Không có URL */}

                      {!project.demoUrl && !project.githubUrl && (
                        <span className="font-mono text-[9px] tracking-[0.14em] text-white/25 uppercase">
                          Project
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* =====================================================
            VIEW ALL
        ===================================================== */}

        <div className="mt-8 flex justify-center">
          <Link
            href="/projects"
            className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/3 px-5 py-2.5 text-xs font-medium text-[#C8C6BF] transition-all duration-300 hover:border-[#7F96F5]/40 hover:bg-[#7F96F5]/8 hover:text-white"
          >
            Xem tất cả dự án
            <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
