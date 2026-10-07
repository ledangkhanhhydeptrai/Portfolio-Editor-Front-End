"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import React from "react";
import { getDirectionRequest, getDirectionUserRequest } from "../DirectionSlice";
import Loading from "@/components/ui/Loading";
import ErrorMessage from "@/components/ui/ErrorMessage";
import Image from "next/image";
import Link from "next/link";

/* Spotlight bám theo con trỏ chuột */
function handleSpotlight(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--x", `${e.clientX - rect.left}px`);
  el.style.setProperty("--y", `${e.clientY - rect.top}px`);
}

const DirectionContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.direction);
  const { user, authReady } = useAppSelector((state) => state.auth);
  React.useEffect(() => {
    if (!authReady) return;
    if (user) dispatch(getDirectionUserRequest());
    dispatch(getDirectionRequest());
  }, [dispatch, user, authReady]);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage />;

  const totalSkills = data?.reduce((sum, d) => sum + (d.skills?.length ?? 0), 0) ?? 0;

  return (
    <section className="relative w-full overflow-hidden bg-[#0B0B0D] px-6 py-24 md:px-10 lg:px-16">
      <style>
        {`
          @keyframes dirRise {
            from { opacity: 0; transform: translateY(20px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @media (prefers-reduced-motion: reduce) {
            .dir-motion { animation: none !important; opacity: 1 !important; transform: none !important; }
          }
        `}
      </style>

      {/* Nền: lưới chấm + quầng sáng */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse 70% 55% at 50% 20%, black 30%, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 70% 55% at 50% 20%, black 30%, transparent 75%)",
          }}
        />
        <div className="absolute -top-32 left-1/4 h-96 w-130 rounded-full bg-[#7F96F5]/12 blur-[150px]" />
        <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-violet-500/8 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* ============ HEADER ============ */}
        <div
          className="dir-motion mb-14 flex flex-col gap-8 md:flex-row md:items-end md:justify-between"
          style={{ animation: "dirRise 0.8s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          <div className="max-w-2xl">
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#7F96F5]/25 bg-[#7F96F5]/8 px-3.5 py-1.5 text-xs font-medium tracking-[0.2em] text-[#7F96F5] uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-[#7F96F5]" />
              Chuyên môn
            </span>

            <h2 className="text-4xl font-semibold tracking-tight text-balance text-[#F0EFEA] md:text-5xl lg:text-6xl">
              Hướng đi{" "}
              <span className="bg-linear-to-r from-[#B4C2FF] via-[#7F96F5] to-violet-300 bg-clip-text text-transparent">
                của tôi
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-[#F0EFEA]/60">
              Những lĩnh vực tôi tập trung phát triển và các công nghệ tôi sử dụng.
            </p>
          </div>

          {/* Thống kê nhanh */}
          <div className="flex shrink-0 gap-3">
            {[
              { label: "Hướng đi", value: data.length ?? 0 },
              { label: "Công nghệ", value: totalSkills },
            ].map((stat) => (
              <div
                key={stat.label}
                className="min-w-28 rounded-2xl border border-white/10 bg-white/3 px-5 py-3 backdrop-blur"
              >
                <p className="text-2xl font-semibold text-[#F0EFEA] tabular-nums">{stat.value}</p>
                <p className="mt-0.5 text-xs text-[#F0EFEA]/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ============ DANH SÁCH ============ */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {data.map((direction, index) => (
            <article
              key={direction.id}
              onMouseMove={handleSpotlight}
              className="dir-motion group relative flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-white/5 to-white/1 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#7F96F5]/40 sm:p-8 last:odd:md:col-span-2"
              style={{
                animation: `dirRise 0.7s cubic-bezier(0.16,1,0.3,1) ${0.12 + index * 0.08}s both`,
              }}
            >
              {/* Spotlight theo chuột */}
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(420px circle at var(--x, 50%) var(--y, 50%), rgba(127,150,245,0.14), transparent 45%)",
                }}
              />

              {/* Số thứ tự lớn làm watermark */}
              <span className="pointer-events-none absolute -top-4 right-4 text-8xl leading-none font-black text-white/3 transition-colors duration-500 select-none group-hover:text-[#7F96F5]/10">
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Direction header */}
              <div className="relative flex items-start gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-linear-to-br from-[#7F96F5]/25 to-[#7F96F5]/5 text-[#7F96F5] ring-1 ring-[#7F96F5]/25 transition-transform duration-500 group-hover:scale-105 group-hover:rotate-6">
                  <span className="text-2xl">{direction.icon}</span>
                </div>

                <div className="min-w-0 pr-10">
                  <h3 className="text-xl font-semibold tracking-tight text-[#F0EFEA]">
                    {direction.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#F0EFEA]/55 transition-colors duration-300 group-hover:text-[#F0EFEA]/70">
                    {direction.description}
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div className="relative mt-7 border-t border-white/8 pt-6">
                <p className="mb-4 text-[11px] font-medium tracking-[0.18em] text-[#F0EFEA]/40 uppercase">
                  Công nghệ · {direction.skills.length}
                </p>

                <div className="flex flex-wrap gap-2.5">
                  {direction.skills.map((skill) => (
                    <div
                      key={skill.id}
                      className="flex items-center gap-2.5 rounded-full border border-white/10 bg-black/30 py-1.5 pr-4 pl-1.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[#7F96F5]/50 hover:bg-[#7F96F5]/10"
                    >
                      <span className="relative flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white/8">
                        {skill.iconUrl ? (
                          <Image
                            src={skill.iconUrl}
                            alt=""
                            fill
                            sizes="28px"
                            className="object-contain p-1.5"
                          />
                        ) : (
                          <span className="text-[11px] font-semibold text-[#7F96F5]">
                            {skill.name.charAt(0).toUpperCase()}
                          </span>
                        )}
                      </span>

                      <span className="text-sm text-[#F0EFEA]/80">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Thanh nhấn dưới */}
              <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-linear-to-r from-[#7F96F5] via-violet-400 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
              {/* Xem chi tiết */}
              <div className="relative mt-7 flex items-center justify-between border-t border-white/8 pt-5">
                <Link
                  href={`/direction/${direction.id}`}
                  className="group/detail inline-flex items-center gap-2 text-xs font-medium tracking-wide text-[#7F96F5] transition-colors duration-300 hover:text-[#B4C2FF]"
                >
                  <span>Xem chi tiết</span>

                  <span className="text-sm transition-transform duration-300 group-hover/detail:translate-x-1 group-hover/detail:-translate-y-1">
                    ↗
                  </span>
                </Link>

                <span className="text-[10px] tracking-[0.15em] text-[#F0EFEA]/25 uppercase">
                  {direction.code}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DirectionContainer;
