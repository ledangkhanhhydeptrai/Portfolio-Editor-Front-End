"use client";

import React from "react";
import { Play, X } from "lucide-react";

import { useAppSelector } from "@/hooks/redux";
import type { VideoProject } from "@/features/video/videoTypes";
import Image from "next/image";
import Link from "next/link";

export default function ShowreelSection() {
  const { data, loading, error } = useAppSelector((state) => state.video);

  const [selectedVideo, setSelectedVideo] = React.useState<VideoProject | null>(null);

  const videos = React.useMemo(() => {
    return [...data].sort((a, b) => a.displayOrder - b.displayOrder);
  }, [data]);
  const featuredVideos = React.useMemo(() => {
    return videos.slice(0, 3);
  }, [videos]);
  React.useEffect(() => {
    if (selectedVideo === null) {
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedVideo(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedVideo]);

  const formatCategory = (category: string) => {
    return category
      .replaceAll("_", " ")
      .toLowerCase()
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <>
      <section className="border-t border-white/7 px-6 py-24 lg:px-10 xl:px-14">
        <div className="mx-auto w-full max-w-375">
          {/* HEADER */}

          <div className="flex items-end justify-between gap-8">
            <div>
              <p className="font-mono text-[10px] tracking-[0.28em] text-[#7F96F5] uppercase">
                Selected Motion
              </p>

              <h2 className="mt-5 font-['Fraunces'] text-3xl font-light lg:text-4xl">
                Video có nhịp.
                <br />
                <span className="text-[#8E91A3]">Và có mục đích.</span>
              </h2>
            </div>

            <span className="hidden font-mono text-[9px] text-[#6F6C65] md:block">
              SHOWREEL / 2026
            </span>
          </div>

          {/* LOADING */}

          {loading && (
            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {Array.from({ length: 3 }).map((_, index) => (
                <div
                  key={index}
                  className="aspect-4/3 animate-pulse rounded-2xl border border-white/8 bg-white/3"
                />
              ))}
            </div>
          )}

          {/* ERROR */}

          {!loading && error && (
            <div className="mt-12 rounded-2xl border border-white/8 bg-white/3 px-6 py-10">
              <p className="text-sm text-[#8E91A3]">Không thể tải video.</p>
            </div>
          )}

          {/* EMPTY */}

          {!loading && !error && videos.length === 0 && (
            <div className="mt-12 rounded-2xl border border-dashed border-white/10 bg-white/2 px-6 py-14 text-center">
              <p className="text-sm text-[#8E91A3]">Chưa có video nào.</p>
            </div>
          )}

          {/* VIDEOS */}

          {/* VIDEOS */}

          {!loading && !error && featuredVideos.length > 0 && (
            <>
              <div className="mt-12 grid gap-4 md:grid-cols-3">
                {featuredVideos.map((video, index) => (
                  <article
                    key={video.id}
                    className="group relative aspect-4/3 overflow-hidden rounded-2xl border border-white/8 bg-[#101012] transition-all duration-500 hover:-translate-y-1 hover:border-white/16"
                  >
                    {/* THUMBNAIL */}

                    {video.thumbnailUrl && (
                      <Image
                        src={video.thumbnailUrl}
                        alt={video.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        fill
                      />
                    )}

                    {/* OVERLAY */}

                    <div className="absolute inset-0 bg-linear-to-t from-[#090A0E] via-black/30 to-black/5" />

                    {/* NUMBER */}

                    <span className="absolute top-5 left-5 z-10 font-mono text-[9px] tracking-[0.18em] text-[#AAB7FF]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* DURATION */}

                    {video.duration && (
                      <span className="absolute top-4 right-4 z-10 rounded-full border border-white/10 bg-black/40 px-2.5 py-1 font-mono text-[9px] text-white/70 backdrop-blur-md">
                        {video.duration}
                      </span>
                    )}

                    {/* CONTENT */}

                    <div className="absolute inset-x-0 bottom-0 z-10 p-6">
                      <button
                        type="button"
                        onClick={() => setSelectedVideo(video)}
                        aria-label={`Phát ${video.title}`}
                        className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/20 text-[#D8D6D0] backdrop-blur-md transition-all duration-300 group-hover:scale-105 group-hover:border-white/30 group-hover:bg-white group-hover:text-[#11131B]"
                      >
                        <Play size={13} fill="currentColor" className="ml-0.5" />
                      </button>

                      <p className="mb-2 font-mono text-[9px] tracking-[0.16em] text-[#9BADFF] uppercase">
                        {formatCategory(video.category)}
                      </p>

                      <h3 className="truncate text-lg font-medium text-[#F0EFEA]">{video.title}</h3>

                      <div className="mt-2 flex items-center gap-2">
                        <span className="text-[11px] text-[#817E77]">{video.year}</span>

                        <span className="h-0.5 w-0.5 rounded-full bg-white/30" />

                        <span className="text-[11px] text-[#817E77]">{video.duration}</span>
                      </div>

                      {video.description && (
                        <p className="mt-3 line-clamp-2 text-[11px] leading-5 text-white/45">
                          {video.description}
                        </p>
                      )}
                    </div>
                  </article>
                ))}
              </div>

              {/* ============================================
        VIEW ALL BUTTON
    ============================================ */}

              <div className="mt-8 flex justify-center">
                <Link
                  href="/video"
                  className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/3 px-5 py-2.5 text-xs font-medium text-[#C8C6BF] transition-all duration-300 hover:border-[#7F96F5]/40 hover:bg-[#7F96F5]/8 hover:text-white"
                >
                  Xem tất cả video
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* ==================================================
          VIDEO POPUP
      ================================================== */}

      {selectedVideo !== null && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center bg-black/85 p-4 backdrop-blur-xl sm:p-8"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-3xl border border-white/10 bg-[#101118] shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* CLOSE */}

            <button
              type="button"
              onClick={() => setSelectedVideo(null)}
              aria-label="Đóng video"
              className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white/70 backdrop-blur-md transition-colors hover:bg-white/10 hover:text-white"
            >
              <X size={15} />
            </button>

            {/* VIDEO */}

            <div className="aspect-video bg-black">
              <video
                key={selectedVideo.id}
                src={selectedVideo.videoUrl}
                poster={selectedVideo.thumbnailUrl}
                controls
                autoPlay
                playsInline
                className="h-full w-full object-contain"
              />
            </div>

            {/* INFO */}

            <div className="p-5 sm:p-7">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-mono text-[9px] tracking-[0.18em] text-[#9BADFF] uppercase">
                  {formatCategory(selectedVideo.category)}
                </span>

                <span className="h-0.5 w-0.5 rounded-full bg-white/30" />

                <span className="font-mono text-[9px] text-white/40">{selectedVideo.year}</span>

                <span className="h-0.5 w-0.5 rounded-full bg-white/30" />

                <span className="font-mono text-[9px] text-white/40">{selectedVideo.duration}</span>
              </div>

              <h3 className="mt-3 text-2xl font-medium tracking-[-0.02em] text-[#F0EFEA]">
                {selectedVideo.title}
              </h3>

              {selectedVideo.description && (
                <p className="mt-3 max-w-3xl text-sm leading-6 text-white/45">
                  {selectedVideo.description}
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
