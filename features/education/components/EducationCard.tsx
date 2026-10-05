"use client";

import React from "react";

import type { EducationProps } from "../educationTypes";
import Link from "next/link";

interface EducationCardProps {
  education: EducationProps;
  index: number;
}

const EducationCard: React.FC<EducationCardProps> = ({ education, index }) => {
  const order = String(index + 1).padStart(2, "0");

  return (
    <article className="group relative grid gap-8 lg:grid-cols-[190px_1fr] lg:gap-14">
      {/* =============================================
            LEFT — TIME
        ============================================= */}

      <div className="relative pl-10 lg:pt-8 lg:pl-0">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs font-medium text-indigo-300">
            {education.startYear}
          </span>

          <div className="relative h-px w-8 overflow-hidden bg-white/10">
            <div className="absolute inset-0 -translate-x-full bg-indigo-300 transition-transform duration-500 group-hover:translate-x-0" />
          </div>

          <span className="font-mono text-xs text-slate-500">{education.endYear}</span>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <span className="font-mono text-[8px] tracking-[0.2em] text-slate-600 uppercase">
            {order}
          </span>

          <span className="text-slate-700">/</span>

          <span className="font-mono text-[8px] tracking-[0.2em] text-slate-600 uppercase">
            Education
          </span>
        </div>
      </div>

      {/* =============================================
            TIMELINE DOT
        ============================================= */}

      <div className="absolute top-8 left-0 z-10 lg:left-52">
        <div className="relative flex h-5 w-5 items-center justify-center rounded-full border border-indigo-300/30 bg-[#1B1E29] transition-all duration-500 group-hover:border-indigo-300/70">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-300" />

          <span className="absolute inset-0 rounded-full bg-indigo-300/20 opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />
        </div>
      </div>

      {/* =============================================
            CONTENT
        ============================================= */}

      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#222632]/65 transition-all duration-500 group-hover:-translate-y-1 group-hover:border-indigo-300/20 group-hover:bg-[#242835]/80">
        {/* TOP ACCENT */}

        <div className="absolute top-0 left-0 h-full w-px bg-linear-to-b from-indigo-300/70 via-indigo-300/10 to-transparent" />

        {/* BACKGROUND NUMBER */}

        <span className="pointer-events-none absolute -top-12 -right-3 font-mono text-[150px] leading-none font-semibold tracking-[-0.08em] text-white/2 select-none sm:text-[190px]">
          {order}
        </span>

        {/* GLOW */}

        <div className="pointer-events-none absolute -top-30 -right-30 h-80 w-80 rounded-full bg-indigo-500/5 blur-[100px] transition-all duration-700 group-hover:bg-indigo-500/10" />

        <div className="relative p-7 sm:p-9 lg:p-11">
          {/* =========================================
                LABEL
            ========================================= */}

          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full border border-indigo-300/20 bg-indigo-300/5">
                <span className="h-1.5 w-1.5 rounded-full bg-indigo-300" />
              </span>

              <span className="font-mono text-[9px] tracking-[0.24em] text-indigo-300 uppercase">
                Học vấn
              </span>
            </div>

            <span className="hidden font-mono text-[8px] tracking-[0.2em] text-slate-600 uppercase sm:block">
              {education.startYear}
              {" — "}
              {education.endYear}
            </span>
          </div>

          {/* =========================================
                SCHOOL
            ========================================= */}

          <div className="max-w-220">
            <h2 className="text-3xl font-medium tracking-[-0.04em] text-[#F4F3EF] sm:text-4xl lg:text-[42px]">
              {education.schoolName}
            </h2>

            <p className="mt-4 text-base text-slate-400">{education.degree}</p>
          </div>

          {/* =========================================
                DIVIDER
            ========================================= */}

          <div className="my-9 h-px bg-linear-to-r from-white/10 via-white/7 to-transparent" />

          {/* =========================================
                DETAILS
            ========================================= */}

          <div className="grid gap-8 lg:grid-cols-[260px_1fr] lg:gap-14">
            {/* MAJOR */}

            <div>
              <p className="font-mono text-[8px] tracking-[0.24em] text-slate-600 uppercase">
                Chuyên ngành
              </p>

              <p className="mt-4 text-base font-medium text-[#EEEDE8]">{education.major}</p>

              <div className="mt-5 flex items-center gap-2">
                <span className="h-1 w-1 rounded-full bg-indigo-300" />

                <span className="font-mono text-[8px] tracking-[0.18em] text-slate-600 uppercase">
                  Academic Program
                </span>
              </div>
            </div>

            {/* DESCRIPTION */}

            <div className="lg:border-l lg:border-white/7 lg:pl-12">
              <p className="font-mono text-[8px] tracking-[0.24em] text-slate-600 uppercase">
                Tổng quan
              </p>

              <p className="mt-4 max-w-180 text-sm leading-7 text-slate-400">
                {education.description}
              </p>
            </div>
          </div>

          {/* =========================================
      FOOTER
========================================= */}

          <div className="mt-10 flex items-center justify-between gap-4 border-t border-white/7 pt-6">
            {/* LABEL */}

            <div className="flex items-center gap-3">
              <div className="h-px w-7 bg-indigo-300/30" />

              <span className="font-mono text-[8px] tracking-[0.2em] text-slate-600 uppercase">
                Academic Background
              </span>
            </div>

            {/* DETAIL */}

            <Link
              href={`/education/${education.id}`}
              className="group/detail inline-flex shrink-0 items-center gap-2.5 rounded-full border border-white/8 bg-white/3 px-3.5 py-2 font-mono text-[8px] tracking-[0.14em] text-slate-500 uppercase transition-all duration-300 hover:border-indigo-300/30 hover:bg-indigo-300/7 hover:text-indigo-300"
            >
              Xem chi tiết
              <span className="transition-transform duration-300 group-hover/detail:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
};

export default EducationCard;
