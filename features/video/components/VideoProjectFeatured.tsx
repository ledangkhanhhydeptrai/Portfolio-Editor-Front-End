"use client";

import React from "react";
import Image from "next/image";

import type { VideoProject } from "../videoTypes";

interface VideoProjectFeaturedProps {
  project: VideoProject;
  index: number;
  total: number;
  autoPlay: boolean;
  onPrev: () => void;
  onNext: () => void;
}

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9BADFF]";

const pad = (n: number) => String(n).padStart(2, "0");

const VideoProjectFeatured: React.FC<VideoProjectFeaturedProps> = ({
  project,
  index,
  total,
  autoPlay,
  onPrev,
  onNext,
}) => {
  const categoryLabel =
    project.category === "PRODUCT_VIDEO" ? "Product Video" : project.category.replaceAll("_", " ");

  const canNavigate = total > 1;

  return (
    <article className="flex h-full min-h-0 flex-col overflow-hidden rounded-[28px] bg-white/6 p-1.5 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.8)] ring-1 ring-white/12 backdrop-blur sm:p-2">
      {/* Video: chiếm toàn bộ chiều cao còn lại, phần thừa được lấp bằng ảnh bìa mờ */}
      <div className="relative aspect-video min-h-0 overflow-hidden rounded-[22px] bg-black sm:rounded-[20px] lg:aspect-auto lg:flex-1">
        <Image
          src={project.thumbnailUrl}
          alt=""
          aria-hidden
          fill
          sizes="(min-width: 1024px) 70vw, 100vw"
          className="scale-110 object-cover opacity-40 blur-2xl"
        />
        <video
          key={project.id}
          controls
          playsInline
          autoPlay={autoPlay}
          preload="metadata"
          poster={project.thumbnailUrl}
          className="relative h-full w-full object-contain"
        >
          <source src={project.videoUrl} type="video/mp4" />
          Trình duyệt của bạn không hỗ trợ video.
        </video>
      </div>

      {/* Thanh thông tin gọn, một hàng */}
      <div className="flex shrink-0 items-center gap-4 px-3 pt-3 pb-1.5 sm:px-4">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="rounded-full bg-[#9BADFF]/15 px-2.5 py-1 font-medium text-[#BCC8FF] ring-1 ring-[#9BADFF]/25">
              {categoryLabel}
            </span>
            <span className="text-white/45">
              {project.year} · {project.duration}
            </span>
          </div>

          <h2 className="mt-2 truncate font-['Fraunces'] text-2xl leading-tight font-light tracking-[-0.02em] text-[#F4F3EF]">
            {project.title}
          </h2>

          {project.description ? (
            <p className="mt-1 line-clamp-1 text-sm text-white/50">{project.description}</p>
          ) : null}
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <span className="mr-1 hidden text-sm text-white/45 tabular-nums sm:block">
            {pad(index + 1)} / {pad(total)}
          </span>

          <button
            type="button"
            onClick={onPrev}
            disabled={!canNavigate}
            aria-label="Video trước"
            className={`flex h-10 w-10 items-center justify-center rounded-full bg-white/8 text-white/80 transition hover:bg-white/15 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-white/8 ${focusRing}`}
          >
            ←
          </button>
          <button
            type="button"
            onClick={onNext}
            disabled={!canNavigate}
            aria-label="Video tiếp theo"
            className={`flex h-10 w-10 items-center justify-center rounded-full bg-[#9BADFF] text-[#14161F] transition hover:bg-[#B3C1FF] disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-[#9BADFF] ${focusRing}`}
          >
            →
          </button>
        </div>
      </div>
    </article>
  );
};

export default VideoProjectFeatured;
