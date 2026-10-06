"use client";

import React from "react";
import Link from "next/link";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";

import { getCurriculumRequest, getCurriculumUserRequest } from "../CurriculumVitaeSlice";

import Loading from "@/components/ui/Loading";
import ErrorMessage from "@/components/ui/ErrorMessage";

/**
 * Hai trang giấy xếp chồng vẽ bằng CSS
 * Điểm nhấn của phần CV
 */
function PaperThumb() {
  return (
    <div aria-hidden="true" className="relative h-48 w-36">
      {/* Tờ giấy phía sau */}
      <div className="absolute inset-0 rotate-6 rounded-sm bg-[#8a8a94] opacity-50 transition duration-300 ease-out group-hover:translate-x-2 group-hover:rotate-9 motion-reduce:transition-none" />

      {/* Tờ giấy phía trước */}
      <div className="absolute inset-0 -rotate-3 rounded-sm bg-[#e9e6df] p-4 shadow-[0_24px_40px_-14px_rgba(0,0,0,0.8)] transition duration-300 ease-out group-hover:-translate-y-2 group-hover:rotate-0 motion-reduce:transition-none">
        <div className="flex items-center gap-2">
          <span className="h-5 w-5 rounded-full bg-[#101114]/80" />

          <span className="h-2 w-14 rounded-full bg-[#101114]/80" />
        </div>

        <div className="mt-4 space-y-2">
          <span className="block h-1 w-full rounded-full bg-[#101114]/25" />

          <span className="block h-1 w-10/12 rounded-full bg-[#101114]/25" />

          <span className="block h-1 w-11/12 rounded-full bg-[#101114]/25" />
        </div>

        <div className="mt-5 space-y-2">
          <span className="block h-1.5 w-10 rounded-full bg-[#7c8cff]" />

          <span className="block h-1 w-full rounded-full bg-[#101114]/25" />

          <span className="block h-1 w-9/12 rounded-full bg-[#101114]/25" />

          <span className="block h-1 w-10/12 rounded-full bg-[#101114]/25" />
        </div>

        <div className="mt-5 space-y-2">
          <span className="block h-1.5 w-8 rounded-full bg-[#7c8cff]" />

          <span className="block h-1 w-full rounded-full bg-[#101114]/25" />

          <span className="block h-1 w-8/12 rounded-full bg-[#101114]/25" />
        </div>

        <span className="absolute top-0 right-0 h-5 w-5 bg-linear-to-bl from-[#101114] from-50% to-[#cfcbc2] to-50%" />
      </div>
    </div>
  );
}

export default function CurriculumContainer() {
  const dispatch = useAppDispatch();

  const { user: authUser, authReady } = useAppSelector((state) => state.auth);

  const {
    data,
    user: userCurriculums,
    loading,
    error,
  } = useAppSelector((state) => state.curriculumVitae);

  React.useEffect(() => {
    dispatch(getCurriculumUserRequest());

    dispatch(getCurriculumRequest());
  }, [dispatch]);

  const curriculums = authUser ? userCurriculums : data;

  /*
   * ============================================================
   * LOADING AUTH
   * ============================================================
   */

  if (!authReady) {
    return <Loading />;
  }

  /*
   * ============================================================
   * LOADING CV
   * ============================================================
   */

  if (loading) {
    return <Loading />;
  }

  /*
   * ============================================================
   * ERROR
   * ============================================================
   */

  if (error) {
    return <ErrorMessage />;
  }

  /*
   * ============================================================
   * EMPTY
   * ============================================================
   */

  if (!curriculums || curriculums.length === 0) {
    return (
      <section className="flex min-h-100 items-center justify-center bg-[#101114] px-6">
        <div className="text-center">
          <p className="text-base font-medium text-neutral-300">Chưa có CV nào được tải lên</p>

          <p className="mt-1 text-sm text-neutral-500">CV sẽ sớm được cập nhật tại đây.</p>
        </div>
      </section>
    );
  }

  /*
   * ============================================================
   * UI
   * ============================================================
   */

  return (
    <section
      id="curriculum"
      className="bg-[#101114] px-6 py-24 text-white md:px-12 lg:px-20 lg:py-32"
    >
      <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] lg:gap-16">
        {/* =====================================================
            LEFT
        ===================================================== */}

        <div className="lg:sticky lg:top-28 lg:self-start">
          <h2 className="text-4xl font-semibold tracking-tight text-balance md:text-5xl">
            Hồ sơ cá nhân
          </h2>

          <p className="mt-5 max-w-sm text-base leading-7 text-neutral-400">
            Tổng hợp kinh nghiệm, kỹ năng và học vấn của tôi trong một tài liệu. Bạn có thể xem trực
            tuyến hoặc xem thông tin chi tiết.
          </p>

          <p className="mt-8 text-sm text-neutral-500">Hiện có {curriculums.length} tài liệu</p>

          {/* Có thể bỏ đoạn này nếu không muốn hiện */}
          {authUser && (
            <p className="mt-2 text-xs text-[#7c8cff]">Đang hiển thị CV của tài khoản hiện tại</p>
          )}
        </div>

        {/* =====================================================
            CV LIST
        ===================================================== */}

        <ul className="grid gap-6 sm:grid-cols-2">
          {curriculums.map((cv) => (
            <li
              key={cv.id}
              className="group flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/3 transition duration-300 hover:-translate-y-1 hover:border-[#7c8cff]/40 motion-reduce:hover:translate-y-0"
            >
              {/* =================================================
                  PAPER
              ================================================= */}

              <div className="flex items-center justify-center overflow-hidden border-b border-white/10 bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,rgba(124,140,255,0.22),transparent)] px-6 py-12">
                <PaperThumb />
              </div>

              {/* =================================================
                  CONTENT
              ================================================= */}

              <div className="flex flex-1 flex-col p-6">
                {/* Title */}

                <h3 className="truncate text-lg font-medium text-white md:text-xl">
                  {cv.title || "Hồ sơ cá nhân"}
                </h3>

                {/* Badges */}

                <div className="mt-3 flex flex-wrap items-center gap-2">
                  <span className="inline-flex w-fit items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-neutral-400">
                    PDF
                  </span>

                  {cv.isPrimary && (
                    <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-[#7c8cff]/30 bg-[#7c8cff]/10 px-2.5 py-1 text-xs font-medium text-[#aab3ff]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#7c8cff]" />
                      CV chính
                    </span>
                  )}
                </div>

                {/* =================================================
                    ACTIONS
                ================================================= */}

                <div className="mt-auto flex gap-3 pt-6">
                  {/* Xem PDF */}

                  <a
                    href={cv.fileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-full border border-white/15 px-4 text-sm font-medium whitespace-nowrap text-neutral-200 transition duration-200 hover:border-white/40 hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7c8cff]"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 12s3.75-6.75 9.75-6.75S21.75 12 21.75 12 18 18.75 12 18.75 2.25 12 2.25 12z"
                      />

                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    Xem CV
                  </a>

                  {/* Xem chi tiết */}

                  <Link
                    href={`/curriculum/${cv.id}`}
                    className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-full bg-white px-4 text-sm font-medium whitespace-nowrap text-[#101114] transition duration-200 hover:bg-neutral-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7c8cff]"
                  >
                    Xem chi tiết
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      className="h-4 w-4"
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
