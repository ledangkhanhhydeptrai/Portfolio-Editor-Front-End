"use client";

import React from "react";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { getWorkStylesRequest } from "../WorkStylesSlice";

import Loading from "@/components/ui/Loading";
import ErrorMessage from "@/components/ui/ErrorMessage";

export default function WorkStyleContainer() {
  const dispatch = useAppDispatch();

  const { data, loading, error } = useAppSelector((state) => state.workstyle);

  React.useEffect(() => {
    dispatch(getWorkStylesRequest());
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  const workStyles = [...data].sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0F111A] px-6 pt-28 pb-24 text-[#ECEAE4] lg:px-10 lg:pt-36">
      <style>
        {`
          @keyframes wsRise {
            from { opacity: 0; transform: translateY(18px); }
            to   { opacity: 1; transform: translateY(0); }
          }

          @media (prefers-reduced-motion: reduce) {
            .ws-motion { animation: none !important; opacity: 1 !important; transform: none !important; }
          }
        `}
      </style>

      {/* Nền */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-40 left-1/2 h-130 w-215 -translate-x-1/2 rounded-full bg-indigo-500/12 blur-[170px]" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-violet-500/8 blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* ============ HEADER ============ */}
        <header
          className="ws-motion flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
          style={{ animation: "wsRise 0.8s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          <div className="max-w-2xl">
            <h1 className="text-4xl leading-[1.1] font-bold tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
              Cách tôi làm việc
              <span className="bg-linear-to-r from-indigo-300 to-violet-300 bg-clip-text text-transparent">
                .
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-base leading-8 text-slate-400">
              Những nguyên tắc tôi giữ trong suốt quá trình làm việc để đảm bảo chất lượng, tiến độ
              và sự nhất quán của sản phẩm.
            </p>
          </div>

          <div className="inline-flex shrink-0 items-center gap-3 self-start rounded-full border border-white/10 bg-white/4 px-5 py-2.5 text-sm text-slate-300 md:self-auto">
            <span className="h-2 w-2 rounded-full bg-indigo-300 shadow-[0_0_12px_rgba(165,180,252,0.8)]" />
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
                className="ws-motion group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-white/6 to-white/2 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-300/40 hover:from-white/8 sm:p-10 last:odd:md:col-span-2"
                style={{
                  animation: `wsRise 0.7s cubic-bezier(0.16,1,0.3,1) ${0.15 + index * 0.08}s both`,
                }}
              >
                {/* Vệt sáng góc phải */}
                <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-indigo-400/10 blur-[80px] transition-colors duration-500 group-hover:bg-indigo-400/20" />

                {/* Icon */}
                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-400 to-violet-500 shadow-lg shadow-indigo-500/25">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-6 w-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12.5l4.5 4.5L19 7.5" />
                  </svg>
                </div>

                {/* Nội dung */}
                <h2 className="relative mt-8 text-2xl font-semibold tracking-[-0.02em] text-white sm:text-[1.65rem]">
                  {workStyle.title}
                </h2>

                <p className="relative mt-4 max-w-2xl text-[15px] leading-8 text-slate-400 transition-colors duration-300 group-hover:text-slate-300">
                  {workStyle.description}
                </p>

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
