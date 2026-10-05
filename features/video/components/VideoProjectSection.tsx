"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import type { VideoProject } from "../videoTypes";

import VideoProjectCard from "./VideoProjectCard";
import VideoProjectEmpty from "./VideoProjectEmpty";
import VideoProjectFeatured from "./VideoProjectFeatured";

interface VideoProjectSectionProps {
  videos: VideoProject[];
}

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9BADFF]";

/** Bố cục chia TRÁI (giới thiệu + danh sách) / PHẢI (trình phát). */
const VideoProjectSection: React.FC<VideoProjectSectionProps> = ({ videos }) => {
  const [activeId, setActiveId] = React.useState<VideoProject["id"] | null>(null);
  const [userPicked, setUserPicked] = React.useState(false);

  // Đo phần màn hình còn lại bên dưới header để khung vừa khít, không sinh thanh cuộn
  const sectionRef = React.useRef<HTMLElement>(null);
  const [fitHeight, setFitHeight] = React.useState<number | null>(null);
  const hasVideos = videos.length > 0;

  React.useEffect(() => {
    const fit = () => {
      const el = sectionRef.current;
      if (!el || window.innerWidth < 1024) {
        setFitHeight(null);
        return;
      }
      const top = el.getBoundingClientRect().top + window.scrollY;
      setFitHeight(Math.max(480, window.innerHeight - top));
    };

    fit();
    window.addEventListener("resize", fit);
    return () => window.removeEventListener("resize", fit);
  }, [hasVideos]);

  if (videos.length === 0) {
    return <VideoProjectEmpty />;
  }

  const activeIndex = Math.max(
    0,
    videos.findIndex((v) => v.id === activeId),
  );
  const active = videos[activeIndex];

  // Vòng tròn: nhấn "trước" ở video đầu sẽ nhảy về video cuối (tránh videos[-1] bị lỗi)
  const select = (index: number) => {
    const next = (index + videos.length) % videos.length;
    setActiveId(videos[next].id);
    setUserPicked(true);
  };

  return (
    <section
      ref={sectionRef}
      style={fitHeight ? { height: fitHeight } : undefined}
      className="relative isolate w-full overflow-hidden px-6 py-12 text-[#F4F3EF] lg:px-10 lg:py-6"
    >
      <style>{`
        @keyframes vs-fade { from { opacity: 0; } to { opacity: 1; } }
        .vs-fade { animation: vs-fade .9s ease both; }
        @media (prefers-reduced-motion: reduce) { .vs-fade { animation: none; } }
      `}</style>

      {/* Nền ambient: đổi màu theo video đang chọn */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden mask-[linear-gradient(to_bottom,black_30%,transparent)]"
      >
        <Image
          key={active.id}
          src={active.thumbnailUrl}
          alt=""
          fill
          sizes="100vw"
          className="vs-fade scale-125 object-cover opacity-30 blur-3xl saturate-150"
        />
      </div>

      <div className="mx-auto grid w-full max-w-350 min-w-0 gap-8 lg:h-full lg:min-h-0 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[minmax(0,380px)_minmax(0,1fr)]">
        {/* ====================== LEFT ====================== */}
        <aside className="flex min-h-0 min-w-0 flex-col lg:h-full">
          <h1 className="font-['Fraunces'] text-3xl leading-[1.05] font-light tracking-[-0.03em] text-balance sm:text-4xl">
            Sản phẩm dựng video
          </h1>

          <p className="mt-3 max-w-sm text-sm leading-6 text-white/55">
            Những sản phẩm tập trung vào nhịp điệu, hình ảnh và cách kể chuyện.
          </p>

          {/* Bảng danh sách phát */}
          <div className="mt-6 flex min-h-0 flex-1 flex-col rounded-3xl bg-white/4 p-3 ring-1 ring-white/10 backdrop-blur">
            <div className="flex items-center justify-between px-2 pt-1 pb-3">
              <span className="text-sm font-medium text-white/80">Danh sách phát</span>
              <span className="rounded-full bg-white/8 px-2.5 py-1 text-xs text-white/60">
                {activeIndex + 1} / {videos.length}
              </span>
            </div>

            <ul className="flex min-h-0 flex-1 scrollbar-thin [scrollbar-color:rgba(255,255,255,0.18)_transparent] flex-col gap-2 overflow-y-auto overscroll-contain pr-1">
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

            <Link
              href={`/video/${active.id}`}
              className={`group mt-3 flex w-full shrink-0 items-center justify-between gap-4 rounded-2xl bg-[#F4F3EF] px-5 py-3.5 text-[#14161F] transition hover:bg-white ${focusRing}`}
            >
              <span className="min-w-0">
                <span className="block text-sm font-medium">Xem chi tiết</span>
                <span className="block truncate text-xs text-[#14161F]/55">{active.title}</span>
              </span>

              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#14161F] text-white transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </aside>

        {/* ====================== RIGHT ====================== */}
        <div className="relative min-h-0 min-w-0 lg:h-full">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-10 top-1/3 -bottom-6 rounded-[3rem] bg-[#718CFF]/15 blur-3xl"
          />

          <div className="relative lg:h-full">
            <VideoProjectFeatured
              project={active}
              index={activeIndex}
              total={videos.length}
              autoPlay={userPicked}
              onPrev={() => select(activeIndex - 1)}
              onNext={() => select(activeIndex + 1)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoProjectSection;
