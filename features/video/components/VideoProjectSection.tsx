"use client";

import React from "react";

import type { VideoProject } from "../videoTypes";

import VideoProjectCard from "./VideoProjectCard";
import VideoProjectEmpty from "./VideoProjectEmpty";
import VideoProjectFeatured from "./VideoProjectFeatured";

interface VideoProjectSectionProps {
  videos: VideoProject[];
}

/** Bố cục chia TRÁI (giới thiệu + danh sách) / PHẢI (trình phát). */
const VideoProjectSection: React.FC<VideoProjectSectionProps> = ({ videos }) => {
  const [activeId, setActiveId] = React.useState<VideoProject["id"] | null>(null);
  const [userPicked, setUserPicked] = React.useState(false);

  if (videos.length === 0) {
    return <VideoProjectEmpty />;
  }

  const activeIndex = Math.max(
    0,
    videos.findIndex((v) => v.id === activeId),
  );
  const active = videos[activeIndex];

  const select = (index: number) => {
    setActiveId(videos[index].id);
    setUserPicked(true);
  };

  return (
    <section className="relative w-full overflow-hidden px-6 py-12 text-[#F0EFEA] lg:px-10 lg:py-16">
      <div className="mx-auto grid w-full max-w-350 min-w-0 gap-10 lg:grid-cols-[minmax(0,360px)_minmax(0,1fr)] lg:gap-12 xl:grid-cols-[minmax(0,400px)_minmax(0,1fr)]">
        {/* ====================== LEFT ====================== */}
        <aside className="min-w-0 lg:sticky lg:top-24 lg:self-start">
          <p className="text-sm text-violet-300">Video portfolio</p>

          <h1 className="mt-3 text-3xl leading-tight font-medium tracking-[-0.04em] text-[#F4F3EF] sm:text-4xl">
            Sản phẩm dựng video
            <span className="text-violet-300">.</span>
          </h1>

          <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
            Những sản phẩm tập trung vào nhịp điệu, hình ảnh và cách kể chuyện.
          </p>

          <div className="mt-8 flex items-center justify-between text-xs text-slate-500">
            <span>Danh sách phát</span>
            <span>{videos.length} video</span>
          </div>

          <ul className="mt-3 flex flex-col gap-2">
            {videos.map((video, index) => (
              <li key={video.id}>
                <VideoProjectCard
                  project={video}
                  active={index === activeIndex}
                  onSelect={() => select(index)}
                />
              </li>
            ))}
          </ul>
        </aside>

        {/* ====================== RIGHT ====================== */}
        <VideoProjectFeatured
          project={active}
          index={activeIndex}
          total={videos.length}
          autoPlay={userPicked}
          onPrev={() => select(activeIndex - 1)}
          onNext={() => select(activeIndex + 1)}
        />
      </div>
    </section>
  );
};

export default VideoProjectSection;
