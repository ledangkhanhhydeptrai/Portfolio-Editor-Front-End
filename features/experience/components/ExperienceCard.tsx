import React from "react";

import { formatDate } from "@/utils/formatDate";

import type { ExperienceAccent, ExperienceProps } from "../experienceTypes";

interface ExperienceCardProps {
  experience: ExperienceProps;
  index: number;
  accent: ExperienceAccent;
  side: "left" | "right";
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  experience,
  index,
  accent,
  side
}) => {
  return (
    <div className="group relative">
      {/* CONNECTOR */}

      <div
        className={`absolute top-14 hidden h-px w-14 bg-linear-to-r lg:block ${
          side === "left"
            ? "-right-14 from-white/15 to-white/5"
            : "-left-14 from-white/5 to-white/15"
        }`}
      />

      {/* CARD */}

      <div className="relative overflow-hidden rounded-3xl border border-white/7 bg-white/3 transition-all duration-500 hover:-translate-y-1 hover:border-white/15 hover:bg-white/4">
        {/* ACCENT */}

        <div
          className={`h-px w-full bg-linear-to-r ${accent.line} via-white/10 to-transparent`}
        />

        {/* GLOW */}

        <div
          className={`pointer-events-none absolute -right-20 -top-20 h-60 w-60 rounded-full ${accent.glow} blur-[100px]`}
        />

        {/* NUMBER */}

        <span className="pointer-events-none absolute -bottom-5 right-3 font-mono text-[110px] font-bold leading-none text-white/2">
          {String(index + 1).padStart(2, "0")}
        </span>

        <div className="relative p-6 sm:p-7">
          {/* TOP */}

          <div className="flex items-start justify-between gap-4">
            {/* COMPANY ICON */}

            <div
              className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${accent.border} ${accent.background}`}
            >
              <svg
                className={`h-5 w-5 ${accent.text}`}
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4 20V7.5A1.5 1.5 0 0 1 5.5 6H10v14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />

                <path
                  d="M10 20V4.5A1.5 1.5 0 0 1 11.5 3h7A1.5 1.5 0 0 1 20 4.5V20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />

                <path
                  d="M3 20h18"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />

                <path
                  d="M14 7h2M14 11h2M14 15h2M6.5 10H8M6.5 14H8"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* BADGES */}

            <div className="flex flex-wrap justify-end gap-2">
              <span
                className={`rounded-full border ${accent.border} ${accent.background} px-2.5 py-1 font-mono text-[7px] uppercase tracking-[0.15em] ${accent.text}`}
              >
                {accent.label}
              </span>

              {experience.isCurrent && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/15 bg-emerald-400/5 px-2.5 py-1">
                  <span
                    className="h-1.5 w-1.5 rounded-full bg-emerald-400"
                    style={{
                      animation: "experiencePulse 2s ease-in-out infinite"
                    }}
                  />

                  <span className="font-mono text-[7px] uppercase tracking-[0.15em] text-emerald-300">
                    Hiện tại
                  </span>
                </span>
              )}
            </div>
          </div>

          {/* INDEX */}

          <p
            className={`mt-7 font-mono text-[8px] uppercase tracking-[0.2em] ${accent.text}`}
          >
            Kinh nghiệm /{String(index + 1).padStart(2, "0")}
          </p>

          {/* POSITION */}

          <h3 className="mt-3 text-xl font-semibold tracking-[-0.03em] text-[#F0EFEA] transition-colors duration-300 group-hover:text-white sm:text-2xl">
            {experience.position}
          </h3>

          {/* COMPANY */}

          <div className="mt-2 flex items-center gap-2">
            <span className={`h-1.5 w-1.5 rounded-full ${accent.dot}`} />

            <p className="text-sm font-medium text-slate-400">
              {experience.companyName}
            </p>
          </div>

          {/* DATE */}

          <div className="mt-6">
            <p className="font-mono text-[7px] uppercase tracking-[0.18em] text-slate-600">
              Thời gian làm việc
            </p>

            <div className="mt-2 inline-flex items-center gap-2 rounded-lg border border-white/7 bg-black/20 px-3 py-2">
              <svg
                className="h-3.5 w-3.5 shrink-0 text-slate-600"
                viewBox="0 0 24 24"
                fill="none"
              >
                <rect
                  x="4"
                  y="5"
                  width="16"
                  height="15"
                  rx="2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />

                <path
                  d="M8 3v4M16 3v4M4 10h16"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>

              <span className="font-mono text-[9px] tracking-[0.03em] text-slate-400">
                {formatDate(experience.startDate)}

                <span className="mx-2 text-slate-700">—</span>

                {experience.isCurrent
                  ? "Hiện tại"
                  : formatDate(experience.endDate)}
              </span>
            </div>
          </div>

          {/* DESCRIPTION */}

          <div className="mt-7 border-t border-white/7 pt-6">
            <div className="flex items-center gap-3">
              <p className="font-mono text-[7px] uppercase tracking-[0.18em] text-slate-600">
                Công việc chính
              </p>

              <span className="h-px flex-1 bg-white/5" />
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-500">
              {experience.description}
            </p>
          </div>

          {/* FOOTER */}

          <div className="mt-7 flex items-center justify-between border-t border-white/5 pt-5">
            <div className="flex items-center gap-2">
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  experience.isCurrent ? "bg-emerald-400" : "bg-slate-600"
                }`}
              />

              <span
                className={`font-mono text-[7px] uppercase tracking-[0.15em] ${
                  experience.isCurrent ? "text-emerald-300" : "text-slate-600"
                }`}
              >
                {experience.isCurrent ? "Đang làm việc" : "Đã hoàn thành"}
              </span>
            </div>

            <span className="font-mono text-[8px] text-slate-700">
              #{String(experience.displayOrder).padStart(2, "0")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
