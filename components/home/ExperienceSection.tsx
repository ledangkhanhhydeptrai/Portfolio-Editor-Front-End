"use client";

import React from "react";
import Link from "next/link";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import {
  getExperienceRequest,
  getExperienceUserRequest,
} from "@/features/experience/experienceSlice";

export default function ExperienceSection() {
  const dispatch = useAppDispatch();

  // =========================================================
  // AUTH
  // =========================================================

  const { user: authUser, authReady } = useAppSelector(
    (state) => state.auth
  );

  // =========================================================
  // EXPERIENCE STATE
  // =========================================================

  const {
    data,
    userExperience,
    loading,
    error,
  } = useAppSelector(
    (state) => state.experience
  );

  // =========================================================
  // GET EXPERIENCE
  //
  // Guest:
  // /api/public/experience
  //
  // Login:
  // /api/user/experience
  // =========================================================

  React.useEffect(() => {
    if (!authReady) {
      return;
    }

    if (authUser) {
      dispatch(getExperienceUserRequest());
      return;
    }

    dispatch(getExperienceRequest());
  }, [dispatch, authReady, authUser]);

  // =========================================================
  // SELECT DATA
  //
  // Login    -> userExperience
  // No login -> data
  // =========================================================

  const experienceData = authUser
    ? userExperience
    : data;

  // =========================================================
  // SORT EXPERIENCE
  //
  // 1. displayOrder
  // 2. startDate mới hơn trước
  // =========================================================

  const experiences = React.useMemo(() => {
    return [...experienceData].sort((a, b) => {
      if (a.displayOrder !== b.displayOrder) {
        return a.displayOrder - b.displayOrder;
      }

      return (
        new Date(b.startDate).getTime() -
        new Date(a.startDate).getTime()
      );
    });
  }, [experienceData]);

  // =========================================================
  // HOME CHỈ HIỂN THỊ 3 EXPERIENCE
  // =========================================================

  const homeExperiences = React.useMemo(() => {
    return experiences.slice(0, 3);
  }, [experiences]);

  // =========================================================
  // FORMAT DATE
  //
  // 2026-07-20 -> 07/2026
  // =========================================================

  const formatDate = (date: string) => {
    const value = new Date(`${date}T00:00:00`);

    return new Intl.DateTimeFormat("vi-VN", {
      month: "2-digit",
      year: "numeric",
    }).format(value);
  };

  const formatPeriod = (
    startDate: string,
    endDate: string,
    isCurrent: boolean
  ) => {
    const start = formatDate(startDate);

    if (isCurrent) {
      return `${start} — Nay`;
    }

    if (!endDate) {
      return start;
    }

    return `${start} — ${formatDate(endDate)}`;
  };

  // =========================================================
  // UI
  // =========================================================

  return (
    <section
      id="experience"
      className="border-t border-white/7 px-6 py-24 lg:px-10 xl:px-14"
    >
      <div className="mx-auto w-full max-w-375">
        {/* ===================================================
            HEADER
        =================================================== */}

        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-[10px] tracking-[0.28em] text-[#7F96F5] uppercase">
              04 / Kinh nghiệm
            </p>

            <h2 className="mt-5 font-['Fraunces'] text-3xl font-light lg:text-4xl">
              Hành trình.
            </h2>
          </div>

          {!loading && !error && experiences.length > 0 && (
            <p className="font-mono text-[9px] tracking-[0.16em] text-[#5F5C56] uppercase">
              {String(experiences.length).padStart(2, "0")} Experiences
            </p>
          )}
        </div>

        {/* ===================================================
            LOADING
        =================================================== */}

        {loading && (
          <div className="mt-10 border-t border-white/8">
            {Array.from({ length: 3 }).map((_, index) => (
              <div
                key={index}
                className="grid gap-3 border-b border-white/8 py-7 md:grid-cols-[180px_1fr_1.2fr] md:gap-5"
              >
                <div className="h-3 w-24 animate-pulse rounded bg-white/5" />

                <div>
                  <div className="h-4 w-40 animate-pulse rounded bg-white/5" />

                  <div className="mt-2 h-3 w-28 animate-pulse rounded bg-white/3" />
                </div>

                <div>
                  <div className="h-3 w-full animate-pulse rounded bg-white/5" />

                  <div className="mt-2 h-3 w-3/4 animate-pulse rounded bg-white/3" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ===================================================
            ERROR
        =================================================== */}

        {!loading && error && (
          <div className="mt-10 rounded-2xl border border-white/8 bg-white/3 px-6 py-10">
            <p className="text-sm text-[#8E91A3]">
              Không thể tải kinh nghiệm.
            </p>
          </div>
        )}

        {/* ===================================================
            EMPTY
        =================================================== */}

        {!loading && !error && experiences.length === 0 && (
          <div className="mt-10 rounded-2xl border border-dashed border-white/10 bg-white/2 px-6 py-14 text-center">
            <p className="text-sm text-[#8E91A3]">
              Chưa có kinh nghiệm nào.
            </p>
          </div>
        )}

        {/* ===================================================
            EXPERIENCE LIST
        =================================================== */}

        {!loading && !error && experiences.length > 0 && (
          <>
            <div className="mt-10 border-t border-white/8">
              {homeExperiences.map((experience, index) => (
                <div
                  key={experience.id}
                  className="group grid gap-3 border-b border-white/8 py-7 transition-colors duration-300 hover:border-white/15 md:grid-cols-[180px_1fr_1.2fr] md:gap-5"
                >
                  {/* DATE */}

                  <div>
                    <p className="font-mono text-[9px] tracking-[0.14em] text-[#6F6C65] uppercase">
                      {formatPeriod(
                        experience.startDate,
                        experience.endDate,
                        experience.isCurrent
                      )}
                    </p>

                    <span className="mt-3 block font-mono text-[8px] text-white/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* POSITION + COMPANY */}

                  <div>
                    <h3 className="text-base font-medium text-[#F0EFEA] transition-colors duration-300 group-hover:text-white">
                      {experience.position}
                    </h3>

                    <p className="mt-1 text-[10px] text-[#7F96F5]">
                      {experience.companyName}
                    </p>
                  </div>

                  {/* DESCRIPTION */}

                  <p className="max-w-lg text-sm leading-6 text-[#A6A39B]">
                    {experience.description}
                  </p>
                </div>
              ))}
            </div>

            {/* =================================================
                VIEW ALL
            ================================================= */}

            <div className="mt-8 flex justify-center">
              <Link
                href="/experience"
                className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/3 px-5 py-2.5 text-xs font-medium text-[#C8C6BF] transition-all duration-300 hover:border-[#7F96F5]/40 hover:bg-[#7F96F5]/8 hover:text-white"
              >
                Xem tất cả kinh nghiệm

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
}