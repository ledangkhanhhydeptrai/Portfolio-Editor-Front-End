"use client";

import React from "react";
import Link from "next/link";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { getWorkStylesRequest, getWorkStylesUserRequest } from "../WorkStylesSlice";

import Loading from "@/components/ui/Loading";
import ErrorMessage from "@/components/ui/ErrorMessage";

/* Bộ icon xoay vòng theo thứ tự thẻ, để mỗi thẻ có một dấu hiệu nhận diện riêng */
const ICONS = [
  <path key="check" d="M5 12.5l4.5 4.5L19 7.5" />,
  <g key="search">
    <circle cx="11" cy="11" r="6" />
    <path d="M20 20l-4.2-4.2" />
  </g>,
  <path key="bolt" d="M13 3L5 14h6l-1 7 8-11h-6l1-7z" />,
  <g key="target">
    <circle cx="12" cy="12" r="8" />
    <circle cx="12" cy="12" r="3" />
  </g>,
  <path key="chat" d="M5 6h14v9H10l-4 3v-3H5V6z" />,
  <path key="clock" d="M12 7v5l3 2M12 21a9 9 0 100-18 9 9 0 000 18z" />,
];

/* Spotlight bám theo con trỏ chuột */
function handleSpotlight(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--x", `${e.clientX - rect.left}px`);
  el.style.setProperty("--y", `${e.clientY - rect.top}px`);
}

export default function WorkStyleContainer() {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.workstyle);
  const { user, authReady } = useAppSelector((state) => state.auth);
  React.useEffect(() => {
    if (!authReady) {
      return;
    }
    if (user) {
      dispatch(getWorkStylesUserRequest());
      return;
    }
    dispatch(getWorkStylesRequest());
  }, [dispatch, user, authReady]);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage />;

  const workStyles = [...data].sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0F111A] px-6 pt-28 pb-24 text-[#ECEAE4] lg:px-10 lg:pt-36">
      <style>
        {`
          @keyframes wsRise {
            from { opacity: 0; transform: translateY(18px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes wsFloat {
            0%, 100% { transform: translate(0, 0); }
            50%      { transform: translate(30px, 20px); }
          }
          @media (prefers-reduced-motion: reduce) {
            .ws-motion { animation: none !important; opacity: 1 !important; transform: none !important; }
            .ws-float  { animation: none !important; }
          }
        `}
      </style>

      {/* Nền: lưới chấm + quầng sáng trôi nhẹ */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-60"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.07) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 25%, black 30%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 60% at 50% 25%, black 30%, transparent 75%)",
          }}
        />
        <div
          className="ws-float absolute -top-40 left-1/2 h-130 w-215 -translate-x-1/2 rounded-full bg-indigo-500/15 blur-[170px]"
          style={{ animation: "wsFloat 14s ease-in-out infinite" }}
        />
        <div
          className="ws-float absolute right-0 bottom-0 h-96 w-96 rounded-full bg-fuchsia-500/10 blur-[160px]"
          style={{ animation: "wsFloat 18s ease-in-out infinite reverse" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* ============ HEADER ============ */}
        <header
          className="ws-motion flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
          style={{ animation: "wsRise 0.8s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          <div className="max-w-2xl">
            <h1 className="text-4xl leading-[1.1] font-bold tracking-[-0.035em] text-balance text-white sm:text-5xl lg:text-6xl">
              Cách tôi{" "}
              <span className="bg-linear-to-r from-indigo-300 via-violet-300 to-fuchsia-300 bg-clip-text text-transparent">
                làm việc
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">
              Những nguyên tắc tôi giữ trong suốt quá trình làm việc để đảm bảo chất lượng, tiến độ
              và sự nhất quán của sản phẩm.
            </p>
          </div>

          <div className="inline-flex shrink-0 items-center gap-3 self-start rounded-full border border-white/10 bg-white/4 px-5 py-2.5 text-sm text-slate-300 backdrop-blur md:self-auto">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-300/70" />
              <span className="relative h-2 w-2 rounded-full bg-indigo-300 shadow-[0_0_12px_rgba(165,180,252,0.8)]" />
            </span>
            <span>
              <span className="font-semibold text-white tabular-nums">{workStyles.length}</span>{" "}
              nguyên tắc làm việc
            </span>
          </div>
        </header>

        {/* ============ DANH SÁCH ============ */}
        {workStyles.length > 0 ? (
          <section className="mt-14 grid gap-5 md:grid-cols-2 lg:mt-16">
            {workStyles.map((workStyle, index) => (
              <article
                key={workStyle.id}
                onMouseMove={handleSpotlight}
                className="ws-motion group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-white/6 to-white/2 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300/40 sm:p-10 last:odd:md:col-span-2"
                style={{
                  animation: `wsRise 0.7s cubic-bezier(0.16,1,0.3,1) ${0.15 + index * 0.08}s both`,
                }}
              >
                {/* Spotlight theo chuột */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(420px circle at var(--x, 50%) var(--y, 50%), rgba(129,140,248,0.16), transparent 45%)",
                  }}
                />

                {/* Số thứ tự lớn làm watermark */}
                <span className="pointer-events-none absolute -right-2 -bottom-8 text-[9rem] leading-none font-black text-white/3 transition-colors duration-500 select-none group-hover:text-indigo-300/8">
                  {String(workStyle.displayOrder).padStart(2, "0")}
                </span>

                {/* Vệt sáng góc phải */}
                <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-indigo-400/10 blur-[80px] transition-colors duration-500 group-hover:bg-indigo-400/20" />

                {/* Icon */}
                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-400 to-violet-500 shadow-lg shadow-indigo-500/25 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    {ICONS[index % ICONS.length]}
                  </svg>
                </div>

                {/* Nội dung */}
                <h2 className="relative mt-8 text-2xl font-semibold tracking-[-0.02em] text-white sm:text-[1.65rem]">
                  {workStyle.title}
                </h2>

                <p className="relative mt-4 max-w-2xl text-[15px] leading-8 text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                  {workStyle.description}
                </p>

                {/* Footer */}
                <div className="relative mt-7 flex items-center justify-between border-t border-white/8 pt-5">
                  <span className="text-xs text-slate-500">
                    Nguyên tắc{" "}
                    <span className="font-semibold text-slate-300 tabular-nums">
                      {String(workStyle.displayOrder).padStart(2, "0")}
                    </span>
                    /{String(workStyles.length).padStart(2, "0")}
                  </span>

                  <Link
                    href={`/work-style/${workStyle.id}`}
                    className="group/link inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-slate-300 transition-all duration-300 hover:border-indigo-300/30 hover:bg-indigo-400/10 hover:text-white focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:outline-none"
                  >
                    <span>Xem chi tiết</span>
                    <span className="text-indigo-300 transition-transform duration-300 group-hover/link:translate-x-0.5">
                      →
                    </span>
                  </Link>
                </div>

                {/* Thanh nhấn dưới */}
                <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-linear-to-r from-indigo-400 via-violet-400 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              </article>
            ))}
          </section>
        ) : (
          <section className="mt-14 flex min-h-72 flex-col items-center justify-center rounded-3xl border border-dashed border-white/12 px-6 text-center">
            <span className="h-2 w-2 rounded-full bg-indigo-300/60" />
            <p className="mt-5 text-base font-medium text-slate-200">
              Chưa có nguyên tắc nào được thêm
            </p>
            <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
              Thêm nguyên tắc đầu tiên trong trang quản trị, nội dung sẽ hiển thị tại đây.
            </p>
          </section>
        )}
      </div>
    </main>
  );
}
