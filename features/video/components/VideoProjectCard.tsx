"use client";

import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";

import type { VideoProject } from "../videoTypes";

export const formatCategory = (value: string) => {
  const text = value.replaceAll("_", " ").toLowerCase();
  return text.charAt(0).toUpperCase() + text.slice(1);
};

interface VideoProjectCardProps {
  project: VideoProject;
  active: boolean;
  onSelect: () => void;
}

/** Một dòng trong danh sách phát (cột TRÁI). */
const VideoProjectCard: React.FC<VideoProjectCardProps> = ({ project, active, onSelect }) => {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-current={active ? "true" : undefined}
      className={`group relative flex w-full items-center gap-4 overflow-hidden rounded-2xl p-2.5 pr-4 text-left transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-300 ${
        active ? "bg-white/8" : "hover:bg-white/4"
      }`}
    >
      {/* accent bar */}
      <span
        className={`absolute top-3 bottom-3 left-0 w-0.75 rounded-full bg-violet-400 transition-opacity ${
          active ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* thumbnail */}
      <div className="relative aspect-video w-28 shrink-0 overflow-hidden rounded-xl bg-[#1A1D27] sm:w-32">
        <Image
          src={project.thumbnailUrl}
          alt=""
          fill
          sizes="128px"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute right-1 bottom-1 rounded-md bg-black/70 px-1.5 py-0.5 font-mono text-[10px] text-white/90">
          {project.duration}
        </span>
      </div>

      {/* text */}
      <div className="min-w-0 flex-1">
        <h3 className="truncate text-[15px] font-medium text-[#F4F3EF]">{project.title}</h3>
        <p className="mt-1 truncate text-xs text-slate-500">
          {formatCategory(project.category)}
          {project.year ? `  •  ${project.year}` : ""}
        </p>

        {active ? (
          <span className="mt-2 inline-flex items-end gap-0.5 text-[11px] text-violet-300">
            <span className="flex h-3 items-end gap-0.5">
              <i className="block h-1.5 w-0.5 rounded-full bg-violet-300 motion-safe:animate-pulse" />
              <i className="block h-3 w-0.5 rounded-full bg-violet-300 [animation-delay:150ms] motion-safe:animate-pulse" />
              <i className="block h-2 w-0.5 rounded-full bg-violet-300 [animation-delay:300ms] motion-safe:animate-pulse" />
            </span>
            <span className="ml-1.5">Đang chọn</span>
          </span>
        ) : (
          <span className="mt-2 inline-flex items-center gap-1 text-[11px] text-slate-600 transition-colors group-hover:text-slate-300">
            <Play size={10} fill="currentColor" /> Xem
          </span>
        )}
      </div>
    </button>
  );
};

export default VideoProjectCard;
