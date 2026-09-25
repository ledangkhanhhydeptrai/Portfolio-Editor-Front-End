"use client";

import React from "react";
import { VideoProject } from "../videoTypes";

interface VideoProjectFeaturedProps {
  project: VideoProject;
}

const VideoProjectFeatured: React.FC<VideoProjectFeaturedProps> = ({
  project
}) => {
  return (
    <article className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#202330]">
      {/* VIDEO */}

      <div className="relative aspect-video overflow-hidden bg-black">
        <video
          src={project.videoUrl}
          poster={project.thumbnailUrl}
          controls
          preload="metadata"
          playsInline
          className="h-full w-full object-cover"
        />

        {/* TOP INFO */}

        <div className="pointer-events-none absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/10 bg-[#111218]/80 px-3 py-2 backdrop-blur-xl">
          <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />

          <span className="font-mono text-[8px] uppercase tracking-[0.22em] text-white/70">
            Featured Project
          </span>
        </div>
      </div>

      {/* CONTENT */}

      <div className="relative p-7 sm:p-9">
        <span className="pointer-events-none absolute -right-2 -top-5 font-mono text-8xl font-semibold tracking-[-0.08em] text-white/3">
          01
        </span>

        <div className="relative flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-180">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-violet-300">
                {project.category}
              </span>

              {project.year && (
                <>
                  <span className="h-1 w-1 rounded-full bg-white/20" />

                  <span className="font-mono text-[9px] text-slate-500">
                    {project.year}
                  </span>
                </>
              )}

              {project.duration && (
                <>
                  <span className="h-1 w-1 rounded-full bg-white/20" />

                  <span className="font-mono text-[9px] text-slate-500">
                    {project.duration}
                  </span>
                </>
              )}
            </div>

            <h3 className="text-3xl font-medium tracking-[-0.04em] text-[#F4F3EF] sm:text-4xl">
              {project.title}
            </h3>

            <p className="mt-4 max-w-150 text-sm leading-7 text-slate-400">
              {project.description}
            </p>
          </div>

          <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.2em] text-slate-500">
            <span className="h-px w-8 bg-violet-300/40" />
            Selected Work
          </div>
        </div>
      </div>
    </article>
  );
};

export default VideoProjectFeatured;
