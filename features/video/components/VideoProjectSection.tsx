"use client";

import React from "react";

import type { VideoProject } from "../videoTypes";

import VideoProjectCard from "./VideoProjectCard";
import VideoProjectEmpty from "./VideoProjectEmpty";

const mockVideos: VideoProject[] = [
  {
    id: "1",
    title: "Product Commercial",
    description:
      "Video sản phẩm tập trung vào nhịp dựng, chuyển động và trải nghiệm",
    videoUrl: "/videos/demo-01.mp4",
    category: "Product Video",
    duration: "00:32",
    year: 2026
  },
  {
    id: "2",
    title: "Short-form Editing",
    description: "Video ngắn tập trung vào nhịp dựng và khả năng giữ sự chú ý.",
    videoUrl: "/videos/demo-02.mp4",
    category: "Short-form",
    duration: "00:24",
    year: 2026
  },
  {
    id: "3",
    title: "Visual Storytelling",
    description:
      "Bài dựng tập trung vào lựa chọn cảnh và kể chuyện bằng hình ảnh.",
    videoUrl: "/videos/demo-03.mp4",
    category: "Storytelling",
    duration: "00:45",
    year: 2026
  }
];

const VideoProjectSection: React.FC = () => {
  if (mockVideos.length === 0) {
    return <VideoProjectEmpty />;
  }

  return (
    <section className="relative min-h-screen w-full overflow-x-hidden bg-[#1B1E29] px-6 py-20 text-[#F0EFEA] lg:px-10">
      {/* ================================================
          BACKGROUND
      ================================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* DOT GRID */}

        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "32px 32px"
          }}
        />

        {/* RIGHT GLOW */}

        <div className="absolute -right-50 top-0 h-125 w-125 rounded-full bg-violet-500/5 blur-[140px]" />

        {/* LEFT GLOW */}

        <div className="absolute -left-40 top-100 h-100 w-100 rounded-full bg-indigo-500/5 blur-[140px]" />
      </div>

      {/* ================================================
          CONTAINER
      ================================================= */}

      <div className="relative mx-auto w-full max-w-350">
        {/* ================================================
            HEADER
        ================================================= */}

        <header className="mb-12 grid min-w-0 gap-6 border-b border-white/7 pb-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          {/* LEFT */}

          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[9px] uppercase tracking-[0.26em] text-violet-300">
                02 / Video Portfolio
              </span>

              <span className="h-px w-10 bg-violet-300/40" />
            </div>

            <h1 className="mt-5 text-4xl font-medium tracking-[-0.045em] text-[#F4F3EF] sm:text-5xl">
              Sản phẩm dựng video
              <span className="text-violet-300">.</span>
            </h1>

            <p className="mt-4 max-w-130 text-sm leading-7 text-slate-500">
              Những sản phẩm video và bài dựng tập trung vào nhịp điệu, hình ảnh
              và cách kể chuyện.
            </p>
          </div>

          {/* RIGHT */}

          <div className="flex shrink-0 items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />

            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-500">
              {String(mockVideos.length).padStart(2, "0")} Projects
            </span>
          </div>
        </header>

        {/* ================================================
            VIDEO GRID
        ================================================= */}

        <div className="grid w-full min-w-0 grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-2 xl:grid-cols-3">
          {mockVideos.map((project, index) => (
            <VideoProjectCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoProjectSection;
