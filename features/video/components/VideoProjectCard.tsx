"use client";

import React from "react";

import type { VideoProject } from "../videoTypes";

interface VideoProjectCardProps {
  project: VideoProject;
  index: number;
}

const VideoProjectCard: React.FC<VideoProjectCardProps> = ({
  project,
  index
}) => {
  const order = String(index + 1).padStart(2, "0");

  return (
    <article className="group relative flex h-full min-w-0 flex-col">
      {/* ================================================
          VIDEO
      ================================================= */}

      <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-[18px] border border-white/8 bg-[#111218]">
        <video
          src={project.videoUrl}
          poster={project.thumbnailUrl}
          controls
          preload="metadata"
          playsInline
          className="block h-full w-full object-cover"
        />

        {/* NUMBER */}

        <div className="pointer-events-none absolute left-4 top-4 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-[#111218]/85 backdrop-blur-xl">
          <span className="font-mono text-[8px] tracking-[0.12em] text-white/60">
            {order}
          </span>
        </div>

        {/* DURATION */}

        <div className="pointer-events-none absolute bottom-4 right-4 rounded-md border border-white/10 bg-black/60 px-2.5 py-1.5 backdrop-blur-md">
          <span className="font-mono text-[8px] tracking-[0.12em] text-white/70">
            {project.duration}
          </span>
        </div>

        {/* HOVER BORDER */}

        <div className="pointer-events-none absolute inset-0 rounded-[18px] border border-violet-300/0 transition-all duration-500 group-hover:border-violet-300/20" />
      </div>

      {/* ================================================
          CONTENT
      ================================================= */}

      <div className="flex min-w-0 flex-1 flex-col px-1 pb-2 pt-5">
        {/* META */}

        <div className="flex h-4 min-w-0 items-center justify-between gap-4">
          <div className="flex min-w-0 items-center gap-2">
            <span className="h-1 w-1 shrink-0 rounded-full bg-violet-400" />

            <span className="truncate font-mono text-[8px] uppercase tracking-[0.2em] text-violet-300">
              {project.category}
            </span>
          </div>

          <span className="shrink-0 font-mono text-[8px] tracking-[0.14em] text-slate-600">
            {project.year}
          </span>
        </div>

        {/* TITLE */}

        <h3 className="mt-3 min-h-7 truncate text-xl font-medium tracking-[-0.03em] text-[#F4F3EF] transition-colors duration-300 group-hover:text-violet-200">
          {project.title}
        </h3>

        {/* DESCRIPTION */}

        <p className="mt-2 min-h-12 line-clamp-2 max-w-full break-words text-sm leading-6 text-slate-500">
          {project.description}
        </p>

        {/* BOTTOM */}

        <div className="mt-auto flex min-w-0 items-center gap-3 pt-5">
          <span className="h-px w-6 shrink-0 bg-white/10 transition-all duration-500 group-hover:w-10 group-hover:bg-violet-300/40" />

          <span className="truncate font-mono text-[8px] uppercase tracking-[0.2em] text-slate-600">
            Watch Project
          </span>
        </div>
      </div>
    </article>
  );
};

export default VideoProjectCard;
