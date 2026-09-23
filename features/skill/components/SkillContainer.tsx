"use client";

import React from "react";
import Image from "next/image";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import Loading from "@/components/ui/Loading";
import ErrorMessage from "@/components/ui/ErrorMessage";

import { getSkillRequest } from "../skillSlice";
import { SkillProps } from "../skillTypes";

/* =========================================================
   CATEGORY UI META

   LƯU Ý:
   - category KHÔNG lấy từ đây
   - category lấy từ API
   - object này chỉ quyết định màu + icon UI
========================================================= */

const CATEGORY_META: Record<
  string,
  {
    dot: string;
    text: string;
    glow: string;
    border: string;
    ring: string;
    icon: React.ReactNode;
  }
> = {
  VIDEO_EDITING: {
    dot: "bg-fuchsia-400",
    text: "text-fuchsia-300",
    glow: "bg-fuchsia-500/10",
    border: "hover:border-fuchsia-500/30",
    ring: "group-hover:ring-fuchsia-500/30",
    icon: (
      <path
        d="M4 6.5A1.5 1.5 0 0 1 5.5 5h7A1.5 1.5 0 0 1 14 6.5v11A1.5 1.5 0 0 1 12.5 19h-7A1.5 1.5 0 0 1 4 17.5v-11ZM14 9.5l5.2-2.9a.6.6 0 0 1 .8.53v9.74a.6.6 0 0 1-.8.53L14 14.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    )
  },

  DEVELOPMENT: {
    dot: "bg-indigo-400",
    text: "text-indigo-300",
    glow: "bg-indigo-500/10",
    border: "hover:border-indigo-500/30",
    ring: "group-hover:ring-indigo-500/30",
    icon: (
      <path
        d="m9 8-4 4 4 4M15 8l4 4-4 4M13 5l-2 14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )
  },

  DRIVING: {
    dot: "bg-emerald-400",
    text: "text-emerald-300",
    glow: "bg-emerald-500/10",
    border: "hover:border-emerald-500/30",
    ring: "group-hover:ring-emerald-500/30",
    icon: (
      <path
        d="M5 16.5v-4l1.7-4.6A2 2 0 0 1 8.6 6.5h6.8a2 2 0 0 1 1.9 1.4L19 12.5v4M5 16.5a1.5 1.5 0 0 0 1.5 1.5h.2A1.5 1.5 0 0 0 8 16.5v-.7H16v.7a1.5 1.5 0 0 0 1.5 1.5h.2a1.5 1.5 0 0 0 1.3-1.5M5 16.5H4M19 16.5h1M7.5 12h9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    )
  }
};

/* =========================================================
   DEFAULT UI META

   Nếu sau này API thêm category mới mà frontend chưa
   khai báo màu riêng thì vẫn render bình thường.
========================================================= */

const DEFAULT_META = {
  dot: "bg-slate-400",
  text: "text-slate-300",
  glow: "bg-slate-500/10",
  border: "hover:border-slate-500/30",
  ring: "group-hover:ring-slate-500/30",
  icon: <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.5" />
};

/* =========================================================
   RECRUITER META

   CHỈ PHẦN NÀY FIX CỨNG.

   VIDEO_EDITING / DEVELOPMENT / DRIVING là key dùng để
   match với category được API trả về.
========================================================= */

const RECRUITER_META: Record<
  string,
  {
    position: string;
    label: string;
    description: string;
    status: string;
  }
> = {
  VIDEO_EDITING: {
    position: "Video Editor",
    label: "Dành cho nhà tuyển dụng",
    description:
      "Phù hợp với các vị trí dựng video, short-form content, social media content và visual storytelling.",
    status: "Open to opportunities"
  },

  DEVELOPMENT: {
    position: "Full-stack Developer",
    label: "Dành cho nhà tuyển dụng",
    description:
      "Phù hợp với các vị trí phát triển sản phẩm web từ frontend đến backend.",
    status: "Open to opportunities"
  },

  DRIVING: {
    position: "Driver",
    label: "Định hướng nghề nghiệp",
    description:
      "Đã có giấy phép lái xe, hiện đang bổ túc tay lái và tiếp tục tích lũy kinh nghiệm thực tế.",
    status: "Licensed · Practice next"
  }
};

/* =========================================================
   FORMAT CATEGORY

   Dữ liệu category vẫn là API.

   VIDEO_EDITING
        ↓
   Video Editing

   DEVELOPMENT
        ↓
   Development

   DRIVING
        ↓
   Driving

   Không cần CATEGORY_LABEL hard-code.
========================================================= */

function formatCategory(category: string) {
  return category
    .toLowerCase()
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

/* =========================================================
   GROUP BY CATEGORY

   category lấy trực tiếp từ skill.category của API.
========================================================= */

function groupByCategory(skills: SkillProps[]) {
  const groups = new Map<string, SkillProps[]>();

  for (const skill of skills) {
    const list = groups.get(skill.category) ?? [];

    list.push(skill);

    groups.set(skill.category, list);
  }

  /* =======================================================
     SORT displayOrder TỪ API
  ======================================================= */

  for (const list of groups.values()) {
    list.sort((a, b) => a.displayOrder - b.displayOrder);
  }

  return Array.from(groups.entries());
}

/* =========================================================
   COMPONENT
========================================================= */

const SkillContainer: React.FC = () => {
  const dispatch = useAppDispatch();

  const { data, loading, error } = useAppSelector((state) => state.skill);

  /* =====================================================
       CALL API
    ===================================================== */

  React.useEffect(() => {
    dispatch(getSkillRequest());
  }, [dispatch]);

  /* =====================================================
       LOADING
    ===================================================== */

  if (loading) {
    return <Loading />;
  }

  /* =====================================================
       ERROR
    ===================================================== */

  if (error) {
    return <ErrorMessage />;
  }

  /* =====================================================
       API DATA
    ===================================================== */

  const skills: SkillProps[] = data ?? [];

  const grouped = groupByCategory(skills);

  /* =====================================================
       SCROLL TO CATEGORY
    ===================================================== */

  const scrollToCategory = (category: string) => {
    const element = document.getElementById(`skill-${category}`);

    if (!element) {
      return;
    }

    element.scrollIntoView({
      behavior: "smooth",
      block: "center"
    });
  };

  /* =====================================================
       UI
    ===================================================== */

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#07070c] px-6 py-20 lg:px-10">
      {/* =================================================
            ANIMATION
        ================================================= */}

      <style>
        {`
            @keyframes skillFadeUp {
              from {
                opacity: 0;
                transform: translateY(14px);
              }

              to {
                opacity: 1;
                transform: translateY(0);
              }
            }

            @keyframes skillFadeLeft {
              from {
                opacity: 0;
                transform: translateX(-14px);
              }

              to {
                opacity: 1;
                transform: translateX(0);
              }
            }

            @keyframes skillBlobDrift {
              0%,
              100% {
                transform: translate(0, 0) scale(1);
              }

              50% {
                transform: translate(10px, 12px) scale(1.06);
              }
            }

            @keyframes skillBlobDriftSide {
              0%,
              100% {
                transform: translate(0, 0) scale(1);
                opacity: 0.5;
              }

              50% {
                transform: translate(10px, -14px) scale(1.1);
                opacity: 0.8;
              }
            }

            @keyframes skillDashTravel {
              to {
                stroke-dashoffset: -200;
              }
            }
          `}
      </style>

      {/* =================================================
            BACKGROUND
        ================================================= */}

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] bg-size-[28px_28px] mask-[radial-gradient(ellipse_70%_60%_at_20%_20%,#000_20%,transparent_75%)]" />

      <div
        className="pointer-events-none absolute left-[10%] top-10 h-80 w-80 rounded-full bg-indigo-600/10 blur-[110px]"
        style={{
          animation: "skillBlobDrift 10s ease-in-out infinite"
        }}
      />

      <div
        className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-fuchsia-600/8 blur-[110px]"
        style={{
          animation: "skillBlobDriftSide 12s ease-in-out infinite 1s"
        }}
      />

      <div
        className="pointer-events-none absolute bottom-10 right-24 h-64 w-64 rounded-full bg-emerald-600/8 blur-[110px]"
        style={{
          animation: "skillBlobDriftSide 13s ease-in-out infinite 3s"
        }}
      />

      {/* =================================================
            BLUEPRINT CORNERS
        ================================================= */}

      <div className="pointer-events-none absolute left-6 top-6 hidden h-8 w-8 border-l border-t border-white/10 lg:block" />

      <div className="pointer-events-none absolute bottom-6 right-6 hidden h-8 w-8 border-b border-r border-white/10 lg:block" />

      {/* =================================================
            MAIN GRID
        ================================================= */}

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-14 lg:grid-cols-[380px_1fr] lg:gap-12">
        {/* ===============================================
              LEFT
          =============================================== */}

        <div
          className="lg:sticky lg:top-24 lg:self-start"
          style={{
            animation: "skillFadeLeft 0.6s cubic-bezier(0.16,1,0.3,1) both"
          }}
        >
          {/* BADGE */}

          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />

              <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Portfolio
          </span>

          {/* TITLE */}

          <h1 className="mt-5 bg-linear-to-b from-white to-slate-400 bg-clip-text text-4xl font-bold leading-tight tracking-tight text-transparent">
            Kỹ năng &amp; Chuyên môn
          </h1>

          <span className="mt-4 block h-px w-14 bg-linear-to-r from-indigo-400/70 to-transparent" />

          <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-500">
            Tổng hợp các công cụ, công nghệ và kỹ năng được tích lũy qua quá
            trình học tập và làm việc.
          </p>

          {/* =============================================
                STATS
            ============================================= */}

          <div className="mt-8 flex flex-wrap gap-3">
            <div className="rounded-xl border border-white/10 bg-white/3 px-5 py-3 transition-colors duration-300 hover:border-white/20">
              <p className="text-xl font-semibold text-slate-100">
                {skills.length}
              </p>

              <p className="text-[11px] text-slate-500">Kỹ năng</p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/3 px-5 py-3 transition-colors duration-300 hover:border-white/20">
              <p className="text-xl font-semibold text-slate-100">
                {grouped.length}
              </p>

              <p className="text-[11px] text-slate-500">Nhóm</p>
            </div>
          </div>

          {/* =============================================
                CATEGORY LIST

                category = API
            ============================================= */}

          <div className="mt-6 flex flex-col gap-2 border-t border-white/7 pt-6">
            {grouped.map(([category, items]) => {
              const meta = CATEGORY_META[category] ?? DEFAULT_META;

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => scrollToCategory(category)}
                  className="group flex w-full items-center justify-between rounded-lg px-2 py-2 text-left transition-colors duration-300 hover:bg-white/4"
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`h-1.5 w-1.5 rounded-full ${meta.dot}`} />

                    <p className="text-[12px] text-slate-400 transition-colors group-hover:text-slate-200">
                      {formatCategory(category)}
                    </p>
                  </div>

                  <span className="font-mono text-[10px] text-slate-600">
                    {String(items.length).padStart(2, "0")}
                  </span>
                </button>
              );
            })}
          </div>

          {/* =============================================
                RECRUITER QUICK SELECT

                Chỉ recruiter fix cứng.
                category dùng để match API.
            ============================================= */}

          <div className="mt-8 border-t border-white/7 pt-6">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-slate-600">
              Bạn đang tuyển vị trí nào?
            </p>

            <div className="mt-4 flex flex-col gap-2">
              {grouped.map(([category]) => {
                const recruiter = RECRUITER_META[category];

                const meta = CATEGORY_META[category] ?? DEFAULT_META;

                if (!recruiter) {
                  return null;
                }

                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => scrollToCategory(category)}
                    className="group flex w-full items-center justify-between rounded-xl border border-white/7 bg-white/3 px-4 py-3 text-left transition-all duration-300 hover:-translate-y-0.5 hover:border-white/15 hover:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <span className={`h-2 w-2 rounded-full ${meta.dot}`} />

                      <span className="text-xs text-slate-300 transition-colors group-hover:text-white">
                        {recruiter.position}
                      </span>
                    </div>

                    <span className="text-xs text-slate-600 transition-all duration-300 group-hover:translate-x-1 group-hover:text-slate-300">
                      →
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ===============================================
              DIVIDER
          =============================================== */}

        <svg
          className="pointer-events-none absolute inset-y-0 left-95 ml-6 hidden h-full w-6 xl:block"
          preserveAspectRatio="none"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="100%"
            stroke="#EDECE8"
            strokeOpacity="0.08"
            strokeWidth="1"
            strokeDasharray="3 9"
            style={{
              animation: "skillDashTravel 8s linear infinite"
            }}
          />
        </svg>

        {/* ===============================================
              RIGHT
          =============================================== */}

        <div className="columns-1 gap-5 sm:columns-2">
          {grouped.map(([category, items], groupIndex) => {
            const meta = CATEGORY_META[category] ?? DEFAULT_META;

            const recruiter = RECRUITER_META[category];

            return (
              <section
                id={`skill-${category}`}
                key={category}
                style={{
                  animation: `skillFadeUp 0.5s cubic-bezier(0.16,1,0.3,1) ${
                    groupIndex * 0.08
                  }s both`
                }}
                className={`group relative mb-5 block scroll-mt-32 break-inside-avoid overflow-hidden rounded-2xl border border-white/7 bg-white/3 p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/4 ${meta.border}`}
              >
                {/* GLOW */}

                <div
                  className={`pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full blur-3xl transition-opacity duration-300 group-hover:opacity-150 ${meta.glow}`}
                />

                {/* =====================================
                        CATEGORY HEADER

                        category = API
                    ===================================== */}

                <div className="relative mb-5 flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 transition-all duration-300 ${meta.text} ${meta.ring}`}
                  >
                    <svg
                      className="h-4.5 w-4.5"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      {meta.icon}
                    </svg>
                  </div>

                  <div>
                    <h2 className="text-sm font-semibold text-slate-200">
                      {formatCategory(category)}
                    </h2>

                    <p className="text-xs text-slate-600">
                      {items.length} kỹ năng
                    </p>
                  </div>
                </div>

                {/* =====================================
                        SKILL LIST

                        name = API
                        id = API
                        iconUrl = API
                        displayOrder = API
                    ===================================== */}

                <ul className="relative flex flex-col gap-1">
                  {items.map((skill) => (
                    <li
                      key={skill.id}
                      className="flex items-center gap-3 rounded-lg px-2.5 py-2 text-sm text-slate-300 transition-colors duration-200 hover:bg-white/5"
                    >
                      {skill.iconUrl ? (
                        <span className="relative h-5 w-5 shrink-0 overflow-hidden rounded-md bg-white/5">
                          <Image
                            src={skill.iconUrl}
                            alt={skill.name}
                            fill
                            sizes="20px"
                            className="object-contain p-0.5"
                          />
                        </span>
                      ) : (
                        <span
                          className={`h-1.5 w-1.5 shrink-0 rounded-full ${meta.dot}`}
                        />
                      )}

                      <span className="truncate">{skill.name}</span>
                    </li>
                  ))}
                </ul>

                {/* =====================================
                        RECRUITER

                        Chỉ phần này fix cứng.
                    ===================================== */}

                {recruiter && (
                  <div className="relative mt-6 overflow-hidden rounded-xl border border-white/7 bg-[#0B0B12]/70 p-4">
                    {/* recruiter glow */}

                    <div
                      className={`pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full blur-3xl ${meta.glow}`}
                    />

                    <div className="relative">
                      {/* LABEL */}

                      <div className="flex items-center justify-between gap-4">
                        <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-slate-600">
                          {recruiter.label}
                        </p>

                        <span
                          className={`h-1.5 w-1.5 shrink-0 rounded-full ${meta.dot}`}
                        />
                      </div>

                      {/* POSITION */}

                      <h3
                        className={`mt-3 text-base font-semibold ${meta.text}`}
                      >
                        {recruiter.position}
                      </h3>

                      {/* DESCRIPTION */}

                      <p className="mt-2 text-[11px] leading-5 text-slate-500">
                        {recruiter.description}
                      </p>

                      {/* STATUS */}

                      <div className="mt-4 flex items-center gap-2 border-t border-white/7 pt-3">
                        <span className="relative flex h-1.5 w-1.5">
                          <span
                            className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-30 ${meta.dot}`}
                          />

                          <span
                            className={`relative h-1.5 w-1.5 rounded-full ${meta.dot}`}
                          />
                        </span>

                        <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-slate-600">
                          {recruiter.status}
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </section>
            );
          })}

          {/* ===============================================
                EMPTY
            =============================================== */}

          {grouped.length === 0 && (
            <div className="flex flex-col items-center gap-4 py-16 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-slate-800/60 ring-1 ring-slate-700">
                <svg
                  className="h-7 w-7 text-slate-500"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M9 12h6M9 16h6M8 4h8a2 2 0 0 1 2 2v13l-4-2-2 2-2-2-4 2V6a2 2 0 0 1 2-2Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div>
                <p className="text-sm font-medium text-slate-300">
                  Chưa có kỹ năng nào
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Danh sách kỹ năng sẽ hiển thị tại đây khi có dữ liệu.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SkillContainer;
