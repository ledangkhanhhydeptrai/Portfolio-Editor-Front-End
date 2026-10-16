import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";

import type { ProjectProps } from "../projectTypes";

import ProjectLinks from "./ProjectLinks";
import ProjectDetailLink from "./ProjectDetailLink";
import ProjectImagePlaceholder from "./ProjectImagePlaceholder";

interface VideoProjectsProps {
  projects: ProjectProps[];
}

/* ------------------------------------------------------------------
   Khung hình video: ảnh thumbnail + thanh timeline mảnh ở đáy.
   Khi rê chuột, "playhead" chạy dọc timeline như đang phát clip.
   Đây là điểm nhấn duy nhất của section, mọi thứ còn lại giữ tối giản.
------------------------------------------------------------------- */
const Frame: React.FC<{ project: ProjectProps; sizes: string }> = ({ project, sizes }) => (
  <div className="relative aspect-video overflow-hidden bg-[#0B0B10]">
    {project.thumbnailUrl ? (
      <Image
        src={project.thumbnailUrl}
        alt={project.title}
        fill
        sizes={sizes}
        className="object-cover"
      />
    ) : (
      <ProjectImagePlaceholder />
    )}

    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/60 to-transparent" />

    {/* Nút phát */}
    <span className="pointer-events-none absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-[#0B0B10] opacity-0 transition-opacity duration-200 group-focus-within/card:opacity-100 group-hover/card:opacity-100">
      <Play size={16} fill="currentColor" className="translate-x-px" />
    </span>

    {project.featured && (
      <span className="absolute top-3 left-3 rounded-md bg-black/55 px-2.5 py-1 text-xs font-medium text-violet-100 backdrop-blur-sm">
        Nổi bật
      </span>
    )}

    {/* Timeline */}
    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-0.75 bg-white/15">
      <div className="h-full w-0 bg-violet-400 transition-[width] duration-2500 ease-linear group-hover/card:w-full motion-reduce:transition-none" />
    </div>
  </div>
);

const VideoProjects: React.FC<VideoProjectsProps> = ({ projects }) => {
  const lead = projects.find((p) => p.featured) ?? projects[0];
  const rest = lead ? projects.filter((p) => p.id !== lead.id) : [];

  return (
    <section id="video-projects" className="mt-32 scroll-mt-24">
      {/* Header */}
      <header className="mb-10 flex items-end justify-between gap-6">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-[-0.03em] text-[#F0EFEA]">
            Dự án dựng video
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-400">
            Video ngắn, video sản phẩm và những bản dựng tập trung vào kể chuyện bằng hình ảnh.
          </p>
        </div>

        {projects.length > 0 && (
          <p className="shrink-0 text-sm text-slate-500">{projects.length} dự án</p>
        )}
      </header>

      {lead ? (
        <div className="space-y-5">
          {/* Dự án chính: bố cục ngang, ảnh lớn */}
          <article className="group/card relative grid overflow-hidden rounded-2xl bg-white/3 ring-1 ring-white/8 transition-colors duration-300 hover:ring-violet-400/40 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <Frame project={lead} sizes="(max-width: 1024px) 100vw, 60vw" />
            </div>

            <div className="flex flex-col justify-center gap-4 p-6 sm:p-8 lg:col-span-2">
              <h3 className="text-2xl font-semibold tracking-[-0.02em] text-[#F0EFEA]">
                {lead.title}
              </h3>
              <p className="text-sm leading-7 text-slate-400">{lead.description}</p>

              <div className="mt-2 flex flex-wrap items-center gap-3">
                <ProjectDetailLink id={lead.id} accent="violet" />
                <div className="relative z-10">
                  <ProjectLinks demoUrl={lead.demoUrl} githubUrl={null} />
                </div>
              </div>
            </div>
          </article>

          {/* Các dự án còn lại */}
          {rest.length > 0 && (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {rest.map((project) => (
                <article
                  key={project.id}
                  className="group/card relative flex flex-col overflow-hidden rounded-xl bg-white/3 ring-1 ring-white/8 transition-colors duration-300 hover:ring-violet-400/40"
                >
                  <Frame project={project} sizes="(max-width: 768px) 100vw, 50vw" />

                  <div className="flex flex-1 flex-col gap-3 p-5">
                    <h3 className="text-lg font-semibold text-[#F0EFEA]">{project.title}</h3>
                    <p className="line-clamp-3 text-sm leading-6 text-slate-400">
                      {project.description}
                    </p>

                    <div className="mt-auto flex flex-wrap items-center gap-3 pt-3">
                      <ProjectDetailLink id={project.id} accent="violet" />
                      <div className="relative z-10">
                        <ProjectLinks demoUrl={project.demoUrl} githubUrl={null} />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      ) : (
        /* Trạng thái trống */
        <div className="rounded-2xl border border-dashed border-white/12 px-8 py-14 sm:px-12">
          <div className="max-w-md">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-violet-400/10 text-violet-300">
              <Play size={18} className="translate-x-px" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-[#F0EFEA]">Chưa có video nào</h3>
            <p className="mt-2 text-sm leading-7 text-slate-400">
              Các dự án dựng video sẽ xuất hiện ở đây ngay khi được thêm vào. Bạn có thể quay lại
              sau hoặc xem các dự án khác trong phần trên.
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default VideoProjects;
