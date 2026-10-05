"use client";

import React from "react";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check, Copy, Globe, Hash } from "lucide-react";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { getLinkIdRequest, getLinkUserIdRequest } from "../socialLinkSlice";

import Loading from "@/components/ui/Loading";
import ErrorMessage from "@/components/ui/ErrorMessage";

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9BADFF]";

const getHost = (url: string) => {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return url;
  }
};

export default function SocialLinkContainerById() {
  const params = useParams();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { social_link, loading, error } = useAppSelector((state) => state.socialLink);

  const [copied, setCopied] = React.useState(false);
  const copyTimer = React.useRef<ReturnType<typeof setTimeout> | null>(null);

  const id = params.id;

  React.useEffect(() => {
    if (typeof id !== "string") return;
    dispatch(getLinkUserIdRequest(id));
    dispatch(getLinkIdRequest(id));
  }, [dispatch, id]);

  React.useEffect(() => {
    return () => {
      if (copyTimer.current) clearTimeout(copyTimer.current);
    };
  }, []);

  const handleCopy = async () => {
    if (!social_link) return;

    try {
      await navigator.clipboard.writeText(social_link.url);
      setCopied(true);
      if (copyTimer.current) clearTimeout(copyTimer.current);
      copyTimer.current = setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard bị chặn: bỏ qua */
    }
  };

  if (loading) return <Loading />;
  if (error) return <ErrorMessage />;

  if (!social_link) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#14161F] px-6 text-[#F4F3EF]">
        <div className="text-center">
          <p className="font-['Fraunces'] text-3xl font-light">Không tìm thấy liên kết</p>
          <p className="mt-3 text-sm text-white/50">
            Liên kết này có thể đã bị xoá hoặc đường dẫn không đúng.
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

  const host = getHost(social_link.url);
  const order = `#${String(social_link.displayOrder).padStart(2, "0")}`;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#14161F] px-5 py-24 text-[#F4F3EF] sm:px-8 lg:py-28">
      <style>{`
        @keyframes sl-rise { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: none; } }
        .sl-rise { animation: sl-rise .7s cubic-bezier(.22,1,.36,1) both; }
        @media (prefers-reduced-motion: reduce) { .sl-rise { animation: none; } }
      `}</style>

      {/* Nền ambient lấy màu từ icon của nền tảng */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[80vh] overflow-hidden mask-[linear-gradient(to_bottom,black_30%,transparent)]"
      >
        {social_link.iconUrl && (
          <Image
            src={social_link.iconUrl}
            alt=""
            fill
            priority
            sizes="100vw"
            className="scale-[2.2] object-contain opacity-30 blur-3xl saturate-200"
          />
        )}
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* Back */}
        <button
          type="button"
          onClick={() => router.back()}
          className={`group mb-12 inline-flex items-center gap-2.5 rounded-full bg-white/6 py-2 pr-5 pl-3 text-sm text-white/70 ring-1 ring-white/10 backdrop-blur transition hover:bg-white/10 hover:text-white ${focusRing}`}
        >
          <ArrowLeft
            size={16}
            className="transition-transform group-hover:-translate-x-0.5"
            aria-hidden
          />
          Quay lại
        </button>

        <section className="grid gap-14 lg:grid-cols-[1fr_minmax(0,480px)] lg:items-center lg:gap-20">
          {/* ───────── Trái ───────── */}
          <div>
            <h1 className="sl-rise font-['Fraunces'] text-5xl leading-[1.02] font-light tracking-[-0.035em] text-balance sm:text-6xl lg:text-7xl">
              {social_link.platform}
            </h1>

            <p
              className="sl-rise mt-6 max-w-md text-base leading-8 text-white/60"
              style={{ animationDelay: "90ms" }}
            >
              Kết nối với tôi qua {social_link.platform} để xem thêm các dự án, sản phẩm và hoạt
              động của tôi.
            </p>

            <div className="sl-rise mt-10 flex flex-wrap gap-3" style={{ animationDelay: "180ms" }}>
              <a
                href={social_link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group inline-flex items-center gap-2.5 rounded-full bg-[#F4F3EF] px-6 py-3.5 text-sm font-medium text-[#14161F] transition hover:-translate-y-0.5 hover:bg-white ${focusRing}`}
              >
                Mở {social_link.platform}
                <ArrowUpRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  aria-hidden
                />
              </a>

              <button
                type="button"
                onClick={handleCopy}
                className={`inline-flex items-center gap-2.5 rounded-full bg-white/8 px-6 py-3.5 text-sm text-white/80 ring-1 ring-white/10 transition hover:bg-white/14 hover:text-white ${focusRing}`}
              >
                {copied ? <Check size={16} aria-hidden /> : <Copy size={16} aria-hidden />}
                {copied ? "Đã sao chép" : "Sao chép liên kết"}
              </button>
            </div>
          </div>

          {/* ───────── Phải: thẻ liên kết ───────── */}
          <div className="sl-rise relative" style={{ animationDelay: "120ms" }}>
            {/* Quầng sáng dưới thẻ */}
            <div
              aria-hidden
              className="absolute inset-x-8 top-1/2 -bottom-6 rounded-[3rem] bg-[#718CFF]/25 blur-3xl"
            />

            {/* Khung viền: bo ngoài 28px = bo trong 20px + padding 8px */}
            <div className="relative rounded-[28px] bg-white/6 p-1.5 shadow-[0_40px_100px_-30px_rgba(0,0,0,0.8)] ring-1 ring-white/12 backdrop-blur sm:p-2">
              <div className="rounded-[22px] bg-[#14161F]/75 p-7 sm:rounded-[20px] sm:p-9">
                {/* Icon + số thứ tự */}
                <div className="flex items-start justify-between gap-6">
                  <div className="relative h-24 w-24 overflow-hidden rounded-3xl bg-white/8 shadow-2xl ring-1 ring-white/15">
                    {social_link.iconUrl && (
                      <Image
                        src={social_link.iconUrl}
                        alt={social_link.platform}
                        fill
                        sizes="96px"
                        className="object-contain p-5"
                      />
                    )}
                  </div>

                  <span className="rounded-full bg-[#9BADFF]/15 px-3.5 py-1.5 text-sm font-medium text-[#BCC8FF] ring-1 ring-[#9BADFF]/25">
                    {order}
                  </span>
                </div>

                {/* Tên + tên miền */}
                <h2 className="mt-8 font-['Fraunces'] text-4xl font-light tracking-tight">
                  {social_link.platform}
                </h2>
                <p className="mt-1.5 text-base text-white/45">{host}</p>

                {/* Liên kết */}
                <a
                  href={social_link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group mt-8 flex min-w-0 items-center justify-between gap-4 rounded-2xl bg-white/5 px-5 py-4 ring-1 ring-white/10 transition hover:bg-[#9BADFF]/10 hover:ring-[#9BADFF]/30 ${focusRing}`}
                >
                  <span className="min-w-0 truncate text-sm text-white/65 transition-colors group-hover:text-white">
                    {social_link.url}
                  </span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-white/70 transition group-hover:bg-[#9BADFF] group-hover:text-[#14161F]">
                    <ArrowUpRight size={15} aria-hidden />
                  </span>
                </a>

                {/* Thông tin */}
                <dl className="mt-6 divide-y divide-white/8">
                  <InfoRow icon={<Globe size={16} aria-hidden />} label="Tên miền" value={host} />
                  <InfoRow
                    icon={<Hash size={16} aria-hidden />}
                    label="Thứ tự hiển thị"
                    value={String(social_link.displayOrder).padStart(2, "0")}
                  />
                </dl>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

interface InfoRowProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const InfoRow: React.FC<InfoRowProps> = ({ icon, label, value }) => (
  <div className="flex items-center justify-between gap-4 py-3.5">
    <dt className="flex items-center gap-2.5 text-sm text-white/45">
      <span className="text-[#AAB8FF]">{icon}</span>
      {label}
    </dt>
    <dd className="min-w-0 truncate text-right text-sm font-medium text-white/85">{value}</dd>
  </div>
);
