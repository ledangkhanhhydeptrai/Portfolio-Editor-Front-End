import React from "react";
import Image from "next/image";

import type { ProjectProps } from "../projectTypes";

import ProjectLinks from "./ProjectLinks";
import ProjectDetailLink from "./ProjectDetailLink";
import ProjectImagePlaceholder from "./ProjectImagePlaceholder";
import EmptyCategory from "./EmptyCategory";

interface DevelopmentProjectsProps {
  projects: ProjectProps[];
}

const DevelopmentProjects: React.FC<DevelopmentProjectsProps> = ({ projects }) => {
  const featuredProjects = projects.filter((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section id="development-projects" className="scroll-mt-24">
      {/* Header */}
      <header className="mb-10 flex items-end justify-between gap-6">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#F0EFEA]">
            Dự án lập trình
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-400">
            Những ứng dụng và công cụ tôi đã thiết kế, phát triển và triển khai.
          </p>
        </div>

        {projects.length > 0 && (
          <p className="shrink-0 text-sm text-slate-500">{projects.length} dự án</p>
        )}
      </header>

      {/* Dự án nổi bật */}
      {featuredProjects.length > 0 && (
        <div className="space-y-6">
          {featuredProjects.map((project, index) => (
            <article
              key={project.id}
              className="group/card relative grid overflow-hidden rounded-2xl bg-white/3 ring-1 ring-white/8 transition-colors duration-300 hover:ring-indigo-400/40 lg:grid-cols-[0.85fr_1.15fr]"
            >
              {/* Ảnh */}
              <div className="relative min-h-64 bg-[#0B0B10] lg:min-h-96">
                {project.thumbnailUrl ? (
                  <Image
                    src={project.thumbnailUrl}
                    alt={project.title}
                    fill
                    priority={index === 0}
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="object-contain p-8"
                  />
                ) : (
                  <ProjectImagePlaceholder />
                )}

                <span className="absolute top-3 left-3 inline-flex items-center gap-2 rounded-md bg-black/55 px-2.5 py-1 text-xs font-medium text-indigo-100 backdrop-blur-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                  Nổi bật
                </span>
              </div>

              {/* Nội dung */}
              <div className="flex flex-col justify-between gap-10 p-7 sm:p-9 lg:p-10">
                <div>
                  <h3 className="text-3xl font-semibold tracking-[-0.03em] text-[#F0EFEA]">
                    {project.title}
                  </h3>
                  <p className="mt-5 max-w-xl text-sm leading-7 text-slate-400">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <ProjectDetailLink id={project.id} accent="indigo" />
                  <div className="relative z-10">
                    <ProjectLinks
                      demoUrl={project.demoUrl}
                      githubUrl={project.githubUrl}
                      featured
                    />
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}

      {/* Các dự án khác */}
      {otherProjects.length > 0 && (
        <div className={featuredProjects.length > 0 ? "mt-14" : ""}>
          {featuredProjects.length > 0 && (
            <div className="mb-6 flex items-baseline gap-3">
              <h3 className="text-lg font-semibold text-[#F0EFEA]">Các dự án khác</h3>
              <span className="text-sm text-slate-500">{otherProjects.length}</span>
            </div>
          )}

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {otherProjects.map((project) => (
              <article
                key={project.id}
                className="group/card relative flex flex-col overflow-hidden rounded-xl bg-white/3 ring-1 ring-white/8 transition-colors duration-300 hover:ring-indigo-400/40"
              >
                <div className="relative aspect-video bg-[#0B0B10]">
                  {project.thumbnailUrl ? (
                    <Image
                      src={project.thumbnailUrl}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain p-6"
                    />
                  ) : (
                    <ProjectImagePlaceholder />
                  )}
                </div>

                <div className="flex flex-1 flex-col gap-3 p-5">
                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-[#F0EFEA]">
                    {project.title}
                  </h3>
                  <p className="line-clamp-3 text-sm leading-6 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-auto flex flex-wrap items-center gap-3 pt-3">
                    <ProjectDetailLink id={project.id} accent="indigo" />
                    <div className="relative z-10">
                      <ProjectLinks demoUrl={project.demoUrl} githubUrl={project.githubUrl} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}

      {/* Trạng thái trống */}
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
