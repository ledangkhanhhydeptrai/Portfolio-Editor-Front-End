"use client";

import React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

import type { VideoProject } from "../videoTypes";
import { formatCategory } from "./VideoProjectCard";

interface VideoProjectFeaturedProps {
  project: VideoProject;
  index: number;
  total: number;
  autoPlay: boolean;
  onPrev: () => void;
  onNext: () => void;
}

/** Trình phát chính (cột PHẢI). */
const VideoProjectFeatured: React.FC<VideoProjectFeaturedProps> = ({
  project,
  index,
  total,
  autoPlay,
  onPrev,
  onNext,
}) => {
  return (
    <div className="relative min-w-0">
      {/* ambient glow lấy từ thumbnail */}
      <div className="pointer-events-none absolute -inset-10 -z-10 overflow-hidden opacity-40">
        <Image
          key={project.id}
          src={project.thumbnailUrl}
          alt=""
          fill
          sizes="800px"
          className="scale-125 object-cover blur-3xl"
        />
      </div>

      <article className="overflow-hidden rounded-3xl border border-white/10 bg-[#141620] shadow-[0_40px_100px_-30px_rgba(0,0,0,0.8)]">
        <div className="aspect-video bg-black">
          <video
            key={project.id}
            src={project.videoUrl}
            poster={project.thumbnailUrl}
            controls
            autoPlay={autoPlay}
            playsInline
            className="h-full w-full object-contain"
          />
        </div>

        <div className="flex flex-col gap-6 p-6 sm:p-8 md:flex-row md:items-start md:justify-between">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="rounded-full border border-violet-300/20 bg-violet-400/10 px-3 py-1 text-violet-200">
                {formatCategory(project.category)}
              </span>
              {project.year && <span>{project.year}</span>}
              <span className="h-1 w-1 rounded-full bg-white/20" />
              <span className="font-mono">{project.duration}</span>
            </div>

            <h2 className="mt-4 text-2xl font-medium tracking-[-0.03em] text-[#F4F3EF] sm:text-3xl">
              {project.title}
            </h2>

            {project.description && (
              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
                {project.description}
              </p>
            )}
          </div>

          {/* prev / next */}
          <div className="flex shrink-0 items-center gap-3">
            <span className="mr-1 font-mono text-xs text-slate-500">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>

            <button
              type="button"
              onClick={onPrev}
              disabled={index === 0}
              aria-label="Video trước"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent"
            >
              <ChevronLeft size={18} />
            </button>

            <button
              type="button"
              onClick={onNext}
              disabled={index === total - 1}
              aria-label="Video sau"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-30 disabled:hover:bg-transparent"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default VideoProjectFeatured;
