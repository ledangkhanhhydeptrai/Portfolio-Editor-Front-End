"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";
import { getDirectionIdRequest } from "../DirectionSlice";
import Loading from "@/components/ui/Loading";
import ErrorMessage from "@/components/ui/ErrorMessage";

/* API trả về icon dạng chuỗi ("code"), nên map sang SVG. Không khớp thì dùng icon mặc định. */
const ICONS: Record<string, React.ReactNode> = {
  code: <path d="M8 8l-5 4 5 4M16 8l5 4-5 4M14 5l-4 14" />,
  video: <path d="M4 6h10a2 2 0 012 2v8a2 2 0 01-2 2H4V6zM16 10l5-3v10l-5-3" />,
  car: (
    <path d="M5 16V11l2-5h10l2 5v5M3 16h18M7.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3zM16.5 19a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
  ),
  design: <path d="M12 3l9 9-9 9-9-9 9-9zM12 8v8M8 12h8" />,
  server: <path d="M4 5h16v6H4zM4 13h16v6H4zM8 8h.01M8 16h.01" />,
};

const CATEGORY_LABELS: Record<string, string> = {
  DEVELOPMENT: "Phát triển",
  DESIGN: "Thiết kế",
  TOOLS: "Công cụ",
  DATABASE: "Cơ sở dữ liệu",
};

function handleSpotlight(e: React.MouseEvent<HTMLElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--x", `${e.clientX - rect.left}px`);
  el.style.setProperty("--y", `${e.clientY - rect.top}px`);
}

export default function DirectionContainerById() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;
  const dispatch = useAppDispatch();
  const { direction, loading, error } = useAppSelector((state) => state.direction);

  React.useEffect(() => {
    if (typeof id !== "string") return;
    dispatch(getDirectionIdRequest(id));
  }, [dispatch, id]);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage />;
  if (!direction) return null;

  const order = String(direction.displayOrder).padStart(2, "0");
  const skills = [...(direction.skills ?? [])].sort((a, b) => a.displayOrder - b.displayOrder);
  const categories = Array.from(new Set(skills.map((s) => s.category)));
  const icon = ICONS[direction.icon] ?? ICONS.code;

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0B0B0D] text-[#F0EFEA]">
      <style>
        {`
          @keyframes dirRise {
            from { opacity: 0; transform: translateY(20px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes dirFloat {
            0%, 100% { transform: translate(0, 0); }
            50%      { transform: translate(30px, 20px); }
          }
          @media (prefers-reduced-motion: reduce) {
            .dir-motion, .dir-float { animation: none !important; opacity: 1 !important; transform: none !important; }
          }
        `}
      </style>

      {/* Nền */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "radial-gradient(ellipse 75% 60% at 50% 30%, black 30%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 75% 60% at 50% 30%, black 30%, transparent 80%)",
          }}
        />
        <div
          className="dir-float absolute -top-32 -left-24 h-110 w-110 rounded-full bg-[#7F96F5]/20 blur-[140px]"
          style={{ animation: "dirFloat 16s ease-in-out infinite" }}
        />
        <div
          className="dir-float absolute -right-24 -bottom-24 h-96 w-96 rounded-full bg-violet-500/15 blur-[140px]"
          style={{ animation: "dirFloat 20s ease-in-out infinite reverse" }}
        />
      </div>

      {/* pt-28 chừa chỗ cho navbar fixed để nút Quay lại không bị che */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col px-6 pt-28 pb-16 md:px-10 lg:px-16">
        {/* Nút quay lại */}
        <div
          className="dir-motion mb-10"
          style={{ animation: "dirRise 0.6s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          <button
            onClick={() => router.back()}
            className="group relative z-10 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white shadow-lg backdrop-blur transition hover:border-[#7F96F5]/60 hover:bg-[#7F96F5]/15 focus-visible:ring-2 focus-visible:ring-[#7F96F5] focus-visible:outline-none"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="h-4 w-4 transition-transform group-hover:-translate-x-1"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Quay lại
          </button>
        </div>

        <div className="grid flex-1 items-start gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* ============ TRÁI: thông tin ============ */}
          <div
            className="dir-motion lg:sticky lg:top-32"
            style={{ animation: "dirRise 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s both" }}
          >
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#7F96F5]/25 bg-[#7F96F5]/8 px-3.5 py-1.5 text-xs font-medium tracking-[0.2em] text-[#7F96F5] uppercase">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#7F96F5]" />
                Hướng đi {order}
              </span>

              <span className="rounded-full border border-white/10 bg-white/4 px-3 py-1.5 font-mono text-xs text-[#F0EFEA]/60">
                #{direction.code}
              </span>
            </div>

            {/* Icon lớn */}
            <div className="mt-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-linear-to-br from-[#7F96F5] to-violet-500 shadow-[0_16px_40px_-12px_rgba(127,150,245,0.7)]">
              <svg
                viewBox="0 0 24 24"
                className="h-10 w-10 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {icon}
              </svg>
            </div>

            <h1 className="mt-8 bg-linear-to-r from-white via-[#B4C2FF] to-violet-300 bg-clip-text text-4xl leading-[1.1] font-bold tracking-tight text-balance text-transparent sm:text-5xl xl:text-6xl">
              {direction.title}
            </h1>

            <div className="mt-6 h-1 w-20 rounded-full bg-linear-to-r from-[#7F96F5] to-violet-400" />

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#F0EFEA]/65">
              {direction.description}
            </p>

            {/* Thống kê */}
            <div className="mt-10 grid max-w-md grid-cols-3 gap-4">
              {[
                { label: "Công nghệ", value: String(skills.length).padStart(2, "0") },
                { label: "Nhóm", value: String(categories.length).padStart(2, "0") },
                { label: "Thứ tự", value: `#${order}` },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/4 p-4 backdrop-blur transition hover:-translate-y-1 hover:border-[#7F96F5]/40 hover:bg-white/8"
                >
                  <p className="text-2xl font-semibold tabular-nums">{item.value}</p>
                  <p className="mt-1 text-xs text-[#F0EFEA]/50">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ============ PHẢI: công nghệ ============ */}
          <div
            className="dir-motion relative"
            style={{ animation: "dirRise 0.8s cubic-bezier(0.16,1,0.3,1) 0.25s both" }}
          >
            <div className="absolute -inset-1 rounded-4xl bg-linear-to-br from-[#7F96F5] to-violet-500 opacity-25 blur-2xl" />

            <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-[#111216]/85 p-6 backdrop-blur-xl sm:p-8">
              <span className="pointer-events-none absolute -top-6 -right-2 text-[9rem] leading-none font-black text-white/4 select-none">
                {order}
              </span>

              <div className="relative flex items-end justify-between">
                <div>
                  <p className="text-[11px] font-medium tracking-[0.2em] text-[#F0EFEA]/40 uppercase">
                    Tech stack
                  </p>
                  <h2 className="mt-1 text-2xl font-semibold">Công nghệ sử dụng</h2>
                </div>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#F0EFEA]/60 tabular-nums">
                  {skills.length} mục
                </span>
              </div>

              {skills.length > 0 ? (
                <div className="relative mt-8 space-y-8">
                  {categories.map((category) => (
                    <div key={category}>
                      <p className="mb-4 flex items-center gap-3 text-xs font-medium tracking-[0.18em] text-[#7F96F5] uppercase">
                        {CATEGORY_LABELS[category] ?? category}
                        <span className="h-px flex-1 bg-white/10" />
                      </p>

                      <ul className="grid gap-3 sm:grid-cols-2">
                        {skills
                          .filter((s) => s.category === category)
                          .map((skill, i) => (
                            <li
                              key={skill.id}
                              onMouseMove={handleSpotlight}
                              className="dir-motion group relative flex items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/3 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#7F96F5]/50"
                              style={{
                                animation: `dirRise 0.6s cubic-bezier(0.16,1,0.3,1) ${0.4 + i * 0.1}s both`,
                              }}
                            >
                              {/* Spotlight theo chuột */}
                              <div
                                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                                style={{
                                  background:
                                    "radial-gradient(240px circle at var(--x, 50%) var(--y, 50%), rgba(127,150,245,0.16), transparent 50%)",
                                }}
                              />

                              <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-white/8 ring-1 ring-white/10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                                {skill.iconUrl ? (
                                  <Image
                                    src={skill.iconUrl}
                                    alt=""
                                    fill
                                    sizes="48px"
                                    className="object-contain p-2"
                                  />
                                ) : (
                                  <span className="text-lg font-semibold text-[#7F96F5]">
                                    {skill.name.charAt(0).toUpperCase()}
                                  </span>
                                )}
                              </span>

                              <span className="relative min-w-0 flex-1">
                                <span className="block truncate text-base font-medium">
                                  {skill.name}
                                </span>
                                <span className="mt-0.5 block text-xs text-[#F0EFEA]/45">
                                  Ưu tiên {String(skill.displayOrder).padStart(2, "0")}
                                </span>
                              </span>

                              <span
                                aria-hidden="true"
                                className="relative text-[#7F96F5] opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                              >
                                ↗
                              </span>
                            </li>
                          ))}
                      </ul>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="relative mt-8 rounded-2xl border border-dashed border-white/12 p-8 text-center text-sm text-[#F0EFEA]/50">
                  Chưa có công nghệ nào được thêm vào hướng đi này.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
