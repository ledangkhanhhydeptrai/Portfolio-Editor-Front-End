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
    <main className="relative min-h-screen overflow-hidden bg-[#1B1E29] px-6 py-24 text-[#F0EFEA] lg:px-10">
      {/* =====================================================
          ANIMATION
      ===================================================== */}

      <style>
        {`
          @keyframes workStyleFadeUp {
            from {
              opacity: 0;
              transform: translateY(28px);
            }

            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes workStyleGlow {
            0%,
            100% {
              transform: translate3d(0, 0, 0) scale(1);
            }

            50% {
              transform: translate3d(20px, 18px, 0) scale(1.08);
            }
          }
        `}
      </style>

      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        {/* BASE */}

        <div className="absolute inset-0 bg-linear-to-b from-[#252936] via-[#1F222E] to-[#1A1D27]" />

        {/* TOP GLOW */}

        <div className="absolute -top-70 left-1/2 h-150 w-200 -translate-x-1/2 rounded-full bg-indigo-400/12 blur-[180px]" />

        {/* LEFT GLOW */}

        <div
          className="absolute top-80 -left-50 h-120 w-120 rounded-full bg-indigo-500/8 blur-[160px]"
          style={{
            animation: "workStyleGlow 12s ease-in-out infinite",
          }}
        />

        {/* RIGHT GLOW */}

        <div
          className="absolute top-150 -right-50 h-130 w-130 rounded-full bg-violet-500/8 blur-[170px]"
          style={{
            animation: "workStyleGlow 15s ease-in-out infinite reverse",
          }}
        />

        {/* GRID */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.055)_1px,transparent_0)] mask-[radial-gradient(ellipse_80%_70%_at_50%_25%,#000_20%,transparent_85%)] bg-size-[30px_30px]" />

        {/* TOP LIGHT */}

        <div className="absolute inset-x-0 top-0 h-100 bg-linear-to-b from-white/3 to-transparent" />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <header className="mx-auto max-w-4xl text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="h-px w-10 bg-indigo-300/30" />

            <span className="font-mono text-[9px] tracking-[0.28em] text-indigo-300 uppercase">
              Work Style
            </span>

            <span className="h-px w-10 bg-indigo-300/30" />
          </div>

          <h1 className="mt-7 text-4xl font-semibold tracking-[-0.045em] text-[#F4F3EF] sm:text-5xl lg:text-6xl">
            Cách tôi làm việc
            <span className="text-indigo-300">.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-500">
            Những nguyên tắc tôi duy trì trong quá trình làm việc để đảm bảo chất lượng, tiến độ và
            sự nhất quán của sản phẩm.
          </p>

          {/* COUNT */}

          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/7 bg-white/3 px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-300" />

            <span className="font-mono text-[8px] tracking-[0.18em] text-slate-500 uppercase">
              {workStyles.length} nguyên tắc làm việc
            </span>
          </div>
        </header>

        {/* =====================================================
            CONTENT
        ===================================================== */}

        {workStyles.length > 0 ? (
          <section className="mt-20 grid gap-5 md:grid-cols-2">
            {workStyles.map((workStyle, index) => {
              const order = String(index + 1).padStart(2, "0");

              return (
                <article
                  key={workStyle.id}
                  className="group relative min-h-80 overflow-hidden rounded-[28px] border border-white/8 bg-white/3 transition-all duration-500 hover:-translate-y-1 hover:border-indigo-300/20 hover:bg-white/4"
                  style={{
                    animation: `workStyleFadeUp 0.7s cubic-bezier(0.16,1,0.3,1) ${
                      index * 0.1 + 0.15
                    }s both`,
                  }}
                >
                  {/* TOP ACCENT */}

                  <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-indigo-300/45 to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-100" />

                  {/* GLOW */}

                  <div className="pointer-events-none absolute -top-30 -right-30 h-80 w-80 rounded-full bg-indigo-500/5 blur-[100px] transition-all duration-700 group-hover:bg-indigo-500/10" />

                  {/* BACKGROUND NUMBER */}

                  <span className="pointer-events-none absolute -top-8 -right-3 font-mono text-[150px] leading-none font-bold tracking-[-0.08em] text-white/2 select-none sm:text-[180px]">
                    {order}
                  </span>

                  {/* CONTENT */}

                  <div className="relative flex h-full min-h-80 flex-col p-7 sm:p-9">
                    {/* TOP */}

                    <div className="flex items-start justify-between gap-5">
                      {/* ICON */}

                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-indigo-300/15 bg-indigo-300/5 transition-all duration-500 group-hover:border-indigo-300/30 group-hover:bg-indigo-300/8">
                        <span className="h-2 w-2 rounded-full bg-indigo-300 shadow-[0_0_15px_rgba(165,180,252,0.5)]" />
                      </div>

                      {/* ORDER */}

                      <span className="font-mono text-[9px] tracking-[0.18em] text-slate-600">
                        / {order}
                      </span>
                    </div>

                    {/* LABEL */}

                    <p className="mt-10 font-mono text-[8px] tracking-[0.22em] text-indigo-300/70 uppercase">
                      Nguyên tắc làm việc
                    </p>

                    {/* TITLE */}

                    <h2 className="mt-4 max-w-lg text-2xl font-semibold tracking-[-0.035em] text-[#F0EFEA] transition-colors duration-300 group-hover:text-white sm:text-3xl">
                      {workStyle.title}
                    </h2>

                    {/* DESCRIPTION */}

                    <p className="mt-5 max-w-xl text-sm leading-7 text-slate-500 transition-colors duration-300 group-hover:text-slate-400">
                      {workStyle.description}
                    </p>

                    {/* FOOTER */}

                    <div className="mt-auto pt-10">
                      <div className="flex items-center justify-between border-t border-white/6 pt-5">
                        <div className="flex items-center gap-3">
                          <span className="h-px w-6 bg-indigo-300/30" />

                          <span className="font-mono text-[8px] tracking-[0.18em] text-slate-600 uppercase">
                            Work Style
                          </span>
                        </div>

                        <span className="font-mono text-[8px] tracking-[0.14em] text-indigo-300/50">
                          #{String(workStyle.displayOrder).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </section>
        ) : (
          /* =====================================================
              EMPTY
          ===================================================== */

          <section className="mt-20 flex min-h-80 items-center justify-center rounded-[28px] border border-dashed border-white/10 bg-white/2">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/8 bg-white/3">
                <span className="h-2 w-2 rounded-full bg-slate-600" />
              </div>

              <p className="mt-5 text-sm font-medium text-slate-400">Chưa có Work Style</p>

              <p className="mt-2 text-xs text-slate-600">Nội dung sẽ được cập nhật sau.</p>
            </div>
          </section>
        )}

        {/* =====================================================
            FOOTER
        ===================================================== */}

        <footer className="mt-24 border-t border-white/7 pt-7">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="font-mono text-[8px] tracking-[0.2em] text-slate-700 uppercase">
              Work Philosophy
            </p>

            <p className="font-mono text-[8px] tracking-[0.16em] text-slate-700 uppercase">
              Quality · Consistency · Growth
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
