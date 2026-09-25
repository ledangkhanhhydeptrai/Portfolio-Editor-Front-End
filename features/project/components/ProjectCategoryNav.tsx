"use client";

import React from "react";
import Link from "next/link";

import {
  useSearchParams,
} from "next/navigation";

// =====================================================
// TYPES
// =====================================================

type ProjectCategory =
  | "DEVELOPMENT"
  | "VIDEO_EDITING"
  | "DRIVING";

type Accent =
  | "indigo"
  | "violet"
  | "emerald";

interface ProjectCategoryNavProps {
  developmentCount: number;
  videoCount: number;
  drivingCount: number;
}

interface CategoryButtonProps {
  number: string;
  title: string;
  description: string;
  count: number;
  category: ProjectCategory;
  accent: Accent;
  active: boolean;
}

// =====================================================
// PROJECT CATEGORY NAV
// =====================================================

const ProjectCategoryNav:
  React.FC<
    ProjectCategoryNavProps
  > = ({
    developmentCount,
    videoCount,
    drivingCount,
  }) => {
  const searchParams =
    useSearchParams();

  const currentCategory =
    searchParams.get(
      "category"
    );

  return (
    <div className="mb-28">
      {/* =================================================
          ALL PROJECTS
      ================================================= */}

      <div className="mb-4 flex justify-end">
        <Link
          href="/projects"
          className={`group flex items-center gap-2 rounded-full border px-4 py-2 font-mono text-[8px] uppercase tracking-[0.18em] transition-all duration-300 ${
            !currentCategory
              ? "border-white/15 bg-white/7 text-[#F0EFEA]"
              : "border-white/7 bg-white/3 text-slate-500 hover:border-white/15 hover:bg-white/5 hover:text-slate-300"
          }`}
        >
          <span>
            Xem tất cả
          </span>

          <span
            className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ${
              !currentCategory
                ? "bg-indigo-300 shadow-[0_0_8px_#8EA5FF]"
                : "bg-slate-600"
            }`}
          />
        </Link>
      </div>

      {/* =================================================
          CATEGORIES
      ================================================= */}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <CategoryButton
          number="01"
          title="Phát triển"
          description="Ứng dụng web, công cụ và các dự án phần mềm."
          count={
            developmentCount
          }
          category="DEVELOPMENT"
          accent="indigo"
          active={
            currentCategory ===
            "DEVELOPMENT"
          }
        />

        <CategoryButton
          number="02"
          title="Dựng video"
          description="Video ngắn, video sản phẩm và kể chuyện bằng hình ảnh."
          count={
            videoCount
          }
          category="VIDEO_EDITING"
          accent="violet"
          active={
            currentCategory ===
            "VIDEO_EDITING"
          }
        />

        <CategoryButton
          number="03"
          title="Lái xe"
          description="Đã có bằng · Đang bổ túc tay lái."
          count={
            drivingCount
          }
          category="DRIVING"
          accent="emerald"
          active={
            currentCategory ===
            "DRIVING"
          }
        />
      </div>
    </div>
  );
};

// =====================================================
// CATEGORY BUTTON
// =====================================================

const CategoryButton:
  React.FC<
    CategoryButtonProps
  > = ({
    number,
    title,
    description,
    count,
    category,
    accent,
    active,
  }) => {
  const styles = {
    indigo: {
      button:
        "border-indigo-400/15 bg-indigo-400/4 hover:border-indigo-400/35 hover:bg-indigo-400/7",

      activeButton:
        "border-indigo-300/40 bg-indigo-400/10 shadow-[0_15px_50px_rgba(99,102,241,0.10)]",

      glow:
        "bg-indigo-500/10",

      activeGlow:
        "bg-indigo-400/20",

      text:
        "text-indigo-300",

      dot:
        "bg-indigo-300",
    },

    violet: {
      button:
        "border-violet-400/15 bg-violet-400/4 hover:border-violet-400/35 hover:bg-violet-400/7",

      activeButton:
        "border-violet-300/40 bg-violet-400/10 shadow-[0_15px_50px_rgba(167,139,250,0.10)]",

      glow:
        "bg-violet-500/10",

      activeGlow:
        "bg-violet-400/20",

      text:
        "text-violet-300",

      dot:
        "bg-violet-300",
    },

    emerald: {
      button:
        "border-emerald-400/15 bg-emerald-400/4 hover:border-emerald-400/35 hover:bg-emerald-400/7",

      activeButton:
        "border-emerald-300/40 bg-emerald-400/10 shadow-[0_15px_50px_rgba(52,211,153,0.10)]",

      glow:
        "bg-emerald-500/10",

      activeGlow:
        "bg-emerald-400/20",

      text:
        "text-emerald-300",

      dot:
        "bg-emerald-300",
    },
  }[accent];

  return (
    <Link
      href={`/projects?category=${category}`}
      className={`group relative overflow-hidden rounded-2xl border p-6 text-left transition-all duration-500 hover:-translate-y-1 ${
        active
          ? styles.activeButton
          : styles.button
      }`}
    >
      {/* GLOW */}

      <div
        className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-[80px] transition-all duration-500 ${
          active
            ? styles.activeGlow
            : styles.glow
        }`}
      />

      {/* ACTIVE LINE */}

      <div
        className={`absolute inset-x-6 top-0 h-px bg-linear-to-r from-transparent via-current to-transparent transition-opacity duration-300 ${styles.text} ${
          active
            ? "opacity-100"
            : "opacity-0"
        }`}
      />

      <div className="relative">
        {/* TOP */}

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span
              className={`font-mono text-[9px] uppercase tracking-[0.2em] ${styles.text}`}
            >
              {number}
            </span>

            {active && (
              <span
                className={`h-1.5 w-1.5 rounded-full ${styles.dot} shadow-[0_0_8px_currentColor]`}
              />
            )}
          </div>

          <span className="font-mono text-[9px] text-slate-600">
            {String(
              count
            ).padStart(
              2,
              "0"
            )}
          </span>
        </div>

        {/* CONTENT */}

        <div className="mt-10 flex items-end justify-between">
          <div>
            <h2 className="text-lg font-medium text-[#F0EFEA]">
              {title}
            </h2>

            <p className="mt-2 max-w-60 text-xs leading-6 text-slate-500">
              {description}
            </p>
          </div>

          <span
            className={`text-lg transition-transform duration-300 group-hover:translate-x-1 ${styles.text}`}
          >
            →
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCategoryNav;