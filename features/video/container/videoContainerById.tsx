"use client";

import React from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { getVideoRequestById, getVideoRequestUserById } from "../videoSlice";

import Loading from "@/components/ui/Loading";
import ErrorMessage from "@/components/ui/ErrorMessage";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9BADFF]";

const VideoContainerById: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { video, loading, error } = useAppSelector((state) => state.video);

  const videoRef = React.useRef<HTMLVideoElement>(null);
  const copyTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);
  const [copied, setCopied] = React.useState(false);

  const id = params.id;

  React.useEffect(() => {
    if (typeof id !== "string") return;
    dispatch(getVideoRequestUserById(id));
    dispatch(getVideoRequestById(id));
  }, [dispatch, id]);

  React.useEffect(() => {
    return () => {
      if (copyTimer.current) clearTimeout(copyTimer.current);
    };
  }, []);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      if (copyTimer.current) clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard bị chặn: bỏ qua */
    }
  };

  const handleFullscreen = () => {
    videoRef.current?.requestFullscreen?.();
  };

  if (loading) return <Loading />;
  if (error) return <ErrorMessage />;

  if (!video) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#14161F] px-6 text-[#F4F3EF]">
        <div className="text-center">
          <p className="font-['Fraunces'] text-3xl font-light">Không tìm thấy video</p>
          <p className="mt-3 text-sm text-white/50">
            Video này có thể đã bị xoá hoặc đường dẫn không đúng.
          </p>
          <button
            type="button"
            onClick={() => router.back()}
            className={`mt-7 rounded-full bg-white/10 px-6 py-2.5 text-sm text-white transition hover:bg-white/15 ${focusRing}`}
          >
            Quay lại
          </button>
        </div>
      </div>
    );
  }

  const categoryLabel =
    video.category === "PRODUCT_VIDEO" ? "Product Video" : video.category.replaceAll("_", " ");
  const projectNo = `#${String(video.displayOrder).padStart(2, "0")}`;

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#14161F] text-[#F4F3EF]">
      <style>{`
        @keyframes vc-rise { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
        .vc-rise { animation: vc-rise .7s cubic-bezier(.22,1,.36,1) both; }
        @media (prefers-reduced-motion: reduce) { .vc-rise { animation: none; } }
      `}</style>

      {/* Ambient glow lấy màu từ chính thumbnail */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[85vh] overflow-hidden"
        aria-hidden
      >
        <Image
          src={video.thumbnailUrl}
          alt=""
          fill
          priority
          sizes="100vw"
          className="scale-125 object-cover opacity-35 blur-3xl saturate-150"
        />
        <div className="absolute inset-0 bg-linear-to-b from-[#14161F]/30 via-[#14161F]/70 to-[#14161F]" />
      </div>

      <main className="relative z-10 mx-auto w-full max-w-7xl px-5 pt-24 pb-24 sm:px-8 lg:pt-28">
        {/* Back */}
        <button
          type="button"
          onClick={() => router.back()}
          className={`group mb-8 inline-flex items-center gap-2.5 rounded-full bg-white/6 py-2 pr-5 pl-3 text-sm text-white/70 ring-1 ring-white/10 backdrop-blur transition hover:bg-white/10 hover:text-white ${focusRing}`}
        >
          <span className="transition-transform group-hover:-translate-x-0.5">←</span>
          Quay lại
        </button>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.75fr)_minmax(0,1fr)] lg:items-start lg:gap-14">
          {/* ───────── Trái: video + thanh thao tác ───────── */}
          <div>
            <div className="relative">
              {/* Vệt sáng dưới player */}
              <div
                aria-hidden
                className="absolute inset-x-8 top-1/2 -bottom-6 rounded-[3rem] bg-[#718CFF]/25 blur-3xl"
              />

              {/* Khung viền: bo ngoài 28px = bo trong 20px + padding 8px */}
              <div className="relative rounded-[28px] bg-white/6 p-1.5 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.8)] ring-1 ring-white/12 backdrop-blur sm:p-2">
                <div className="relative aspect-video overflow-hidden rounded-[22px] bg-black sm:rounded-[20px]">
                  {/* Nền mờ lấp khoảng đen khi video không đúng tỉ lệ 16:9 */}
                  <Image
                    src={video.thumbnailUrl}
                    alt=""
                    aria-hidden
                    fill
                    sizes="(min-width: 1280px) 760px, 100vw"
                    className="scale-110 object-cover opacity-40 blur-2xl"
                  />
                  <video
                    ref={videoRef}
                    key={video.id}
                    controls
                    preload="metadata"
                    poster={video.thumbnailUrl}
                    className="relative h-full w-full object-contain"
                  >
                    <source src={video.videoUrl} type="video/mp4" />
                    Trình duyệt của bạn không hỗ trợ video.
                  </video>
                </div>
              </div>
            </div>

            {/* Thanh thao tác */}
            <div className="relative mt-8 flex flex-wrap items-center gap-3 rounded-2xl bg-white/4 p-3 ring-1 ring-white/10 backdrop-blur">
              <button
                type="button"
                onClick={handleCopyLink}
                className={`inline-flex items-center gap-2 rounded-xl bg-[#9BADFF] px-4 py-2.5 text-sm font-medium text-[#14161F] transition hover:bg-[#B3C1FF] ${focusRing}`}
              >
                {copied ? <CheckIcon /> : <LinkIcon />}
                {copied ? "Đã sao chép" : "Sao chép liên kết"}
              </button>

              <a
                href={video.videoUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 rounded-xl bg-white/8 px-4 py-2.5 text-sm text-white/85 transition hover:bg-white/14 ${focusRing}`}
              >
                <DownloadIcon />
                Tải video
              </a>

              <button
                type="button"
                onClick={handleFullscreen}
                className={`inline-flex items-center gap-2 rounded-xl bg-white/8 px-4 py-2.5 text-sm text-white/85 transition hover:bg-white/14 ${focusRing}`}
              >
                <ExpandIcon />
                Toàn màn hình
              </button>

              <span className="ml-auto hidden px-2 text-sm text-white/40 sm:block">
                {video.duration} · {video.year}
              </span>
            </div>
          </div>

          {/* ───────── Phải: thông tin ───────── */}
          <div className="lg:sticky lg:top-8">
            <div className="vc-rise mb-5 flex flex-wrap items-center gap-2.5 text-sm">
              <span className="rounded-full bg-[#9BADFF]/15 px-3.5 py-1.5 font-medium text-[#BCC8FF] ring-1 ring-[#9BADFF]/25">
                {categoryLabel}
              </span>
              <span className="rounded-full bg-white/6 px-3.5 py-1.5 text-white/60 ring-1 ring-white/10">
                Dự án {projectNo}
              </span>
            </div>

            <h1
              className="vc-rise font-['Fraunces'] text-4xl leading-[1.08] font-light tracking-tight text-balance sm:text-5xl"
              style={{ animationDelay: "80ms" }}
            >
              {video.title}
            </h1>

            <div className="vc-rise relative mt-8 pl-6" style={{ animationDelay: "160ms" }}>
              <span
                aria-hidden
                className="absolute top-1 bottom-1 left-0 w-px bg-linear-to-b from-[#9BADFF] via-[#9BADFF]/25 to-transparent"
              />
              <h2 className="text-sm font-medium text-[#AAB8FF]">Về video này</h2>
              <p className="mt-3 font-['Fraunces'] text-lg leading-8 font-light whitespace-pre-line text-white/80">
                {video.description}
              </p>
            </div>

            <div
              className="vc-rise mt-8 grid grid-cols-2 gap-3"
              style={{ animationDelay: "240ms" }}
            >
              <StatTile icon={<ClockIcon />} label="Thời lượng" value={video.duration} />
              <StatTile icon={<CalendarIcon />} label="Năm thực hiện" value={String(video.year)} />
              <StatTile
                className="col-span-2"
                icon={<TagIcon />}
                label="Thể loại"
                value={categoryLabel}
              />
            </div>
          </div>
        </div>

        {/* ───────── Cuối trang ───────── */}
        <div className="relative mt-20 overflow-hidden rounded-3xl bg-white/4 p-8 ring-1 ring-white/10 backdrop-blur sm:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -top-24 -right-16 h-64 w-64 rounded-full bg-[#718CFF]/20 blur-3xl"
          />
          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-['Fraunces'] text-2xl font-light sm:text-3xl">
                Còn nhiều dự án khác trong portfolio
              </p>
              <p className="mt-2 text-sm text-white/50">
                Quay lại danh sách để xem thêm các video đã thực hiện.
              </p>
            </div>

            <button
              type="button"
              onClick={() => router.push("/video")}
              className={`group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#F4F3EF] px-6 py-3 text-sm font-medium text-[#14161F] transition hover:bg-white ${focusRing}`}
            >
              <span className="transition-transform group-hover:-translate-x-1">←</span>
              Xem tất cả video
            </button>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-white/30">Portfolio {video.year}</p>
      </main>
    </div>
  );
};

/* ───────── Thành phần phụ ───────── */

interface StatTileProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  className?: string;
}

const StatTile: React.FC<StatTileProps> = ({ icon, label, value, className = "" }) => (
  <div
    className={`rounded-2xl bg-white/4 p-4 ring-1 ring-white/10 backdrop-blur transition hover:bg-white/6 ${className}`}
  >
    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#9BADFF]/12 text-[#AAB8FF]">
      {icon}
    </span>
    <p className="mt-4 text-sm text-white/45">{label}</p>
    <p className="mt-1 text-lg font-medium text-white/90">{value}</p>
  </div>
);

const iconProps = {
  width: 18,
  height: 18,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

const LinkIcon = () => (
  <svg {...iconProps}>
    <path d="M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.5 1.5" />
    <path d="M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.5-1.5" />
  </svg>
);

const CheckIcon = () => (
  <svg {...iconProps}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

const DownloadIcon = () => (
  <svg {...iconProps}>
    <path d="M12 3v12m0 0-4-4m4 4 4-4" />
    <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" />
  </svg>
);

const ExpandIcon = () => (
  <svg {...iconProps}>
    <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
  </svg>
);

const ClockIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

const CalendarIcon = () => (
  <svg {...iconProps}>
    <rect x="3" y="5" width="18" height="16" rx="2" />
    <path d="M3 10h18M8 3v4m8-4v4" />
  </svg>
);

const TagIcon = () => (
  <svg {...iconProps}>
    <path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0L3 13V3h10l7.6 7.6a2 2 0 0 1 0 2.8Z" />
    <circle cx="7.5" cy="7.5" r="1.2" />
  </svg>
);

export default VideoContainerById;
