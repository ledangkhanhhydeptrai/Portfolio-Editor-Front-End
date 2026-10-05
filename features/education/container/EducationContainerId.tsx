"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, BookOpen, CalendarDays, GraduationCap, Hash, School } from "lucide-react";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { getEducationIdRequest, getEducationUserIdRequest } from "../educationSlice";

import Loading from "@/components/ui/Loading";
import ErrorMessage from "@/components/ui/ErrorMessage";

const EducationContainerId: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const params = useParams();

  const { education, loading, error } = useAppSelector((state) => state.education);

  const id = params.id;

  React.useEffect(() => {
    if (typeof id !== "string") {
      return;
    }
    dispatch(getEducationUserIdRequest(id));
    dispatch(getEducationIdRequest(id));
  }, [dispatch, id]);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorMessage />;
  }

  if (!education) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#11131B] px-6 text-[#F0EFEA]">
        <div className="text-center">
          <p className="font-mono text-[10px] tracking-[0.2em] text-white/35 uppercase">
            Education not found
          </p>

          <button
            type="button"
            onClick={() => router.back()}
            className="mt-5 text-sm text-white/50 transition-colors hover:text-white"
          >
            ← Quay lại
          </button>
        </div>
      </main>
    );
  }

  const duration = education.endYear - education.startYear;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#11131B] px-6 py-24 text-[#F0EFEA] lg:px-10 xl:px-14">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-60 left-[10%] h-130 w-130 rounded-full bg-indigo-500/10 blur-[180px]" />

        <div className="absolute top-[35%] -right-60 h-130 w-130 rounded-full bg-violet-500/8 blur-[180px]" />

        <div className="absolute -bottom-60 left-[30%] h-120 w-120 rounded-full bg-blue-500/6 blur-[170px]" />

        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="absolute inset-x-0 top-0 h-80 bg-linear-to-b from-white/2 to-transparent" />
      </div>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <div className="relative z-10 mx-auto w-full max-w-350">
        {/* BACK */}

        <button
          type="button"
          onClick={() => router.back()}
          className="group mb-16 inline-flex items-center gap-3 text-sm text-white/40 transition-colors hover:text-white"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition-all duration-300 group-hover:border-[#8EA5FF]/30 group-hover:bg-[#8EA5FF]/5">
            <ArrowLeft size={15} />
          </span>
          Quay lại học vấn
        </button>

        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="grid items-start gap-14 lg:grid-cols-[0.65fr_0.35fr] lg:gap-20">
          {/* LEFT */}

          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-[9px] tracking-[0.24em] text-[#8EA5FF] uppercase">
                Education / {String(education.displayOrder).padStart(2, "0")}
              </span>

              <span className="h-px w-8 bg-[#8EA5FF]/30" />

              <span className="font-mono text-[9px] tracking-[0.18em] text-white/30 uppercase">
                {education.startYear} — {education.endYear}
              </span>
            </div>

            {/* DEGREE */}

            <h1 className="mt-8 max-w-4xl font-['Fraunces'] text-5xl leading-none font-light tracking-tighter text-[#F4F3EF] sm:text-6xl lg:text-7xl">
              {education.degree}
              <span className="text-[#8EA5FF]">.</span>
            </h1>

            {/* SCHOOL */}

            <div className="mt-8 flex items-center gap-3">
              <School size={17} className="shrink-0 text-[#8EA5FF]" />

              <p className="text-base font-medium text-white/65">{education.schoolName}</p>
            </div>

            {/* MAJOR */}

            <div className="mt-3 flex items-center gap-3">
              <BookOpen size={17} className="shrink-0 text-white/25" />

              <p className="text-sm text-white/40">{education.major}</p>
            </div>

            {/* DESCRIPTION */}

            <p className="mt-9 max-w-3xl text-[15px] leading-8 text-[#9295A5]">
              {education.description}
            </p>
          </div>

          {/* =====================================================
              ACADEMIC CARD
          ===================================================== */}

          <div className="lg:pt-5">
            <div className="relative overflow-hidden rounded-[28px] border border-white/8 bg-white/3 p-7 backdrop-blur-sm">
              <div className="pointer-events-none absolute -top-20 -right-20 h-44 w-44 rounded-full bg-indigo-500/10 blur-3xl" />

              <div className="relative">
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#8EA5FF]/15 bg-[#8EA5FF]/7">
                    <GraduationCap size={21} className="text-[#9BADFF]" />
                  </div>

                  <span className="font-mono text-[9px] tracking-[0.18em] text-white/25">
                    #{String(education.displayOrder).padStart(2, "0")}
                  </span>
                </div>

                <p className="mt-9 font-mono text-[9px] tracking-[0.2em] text-white/30 uppercase">
                  Chuyên ngành
                </p>

                <h2 className="mt-3 text-xl font-medium tracking-[-0.02em] text-[#F0EFEA]">
                  {education.major}
                </h2>

                <p className="mt-2 text-sm text-white/35">{education.schoolName}</p>

                <div className="mt-8 border-t border-white/7 pt-5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[8px] tracking-[0.16em] text-white/25 uppercase">
                      Thời gian
                    </span>

                    <span className="text-xs text-[#9BADFF]">
                      {education.startYear} — {education.endYear}
                    </span>
                  </div>

                  <div className="mt-4 flex items-center justify-between">
                    <span className="font-mono text-[8px] tracking-[0.16em] text-white/25 uppercase">
                      Khoảng thời gian
                    </span>

                    <span className="text-xs text-white/50">{duration} năm</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            STUDY TIMELINE
        ===================================================== */}

        <section className="mt-24 border-t border-white/8 pt-14">
          <div className="grid gap-12 lg:grid-cols-[0.35fr_0.65fr] lg:gap-20">
            {/* LEFT */}

            <div>
              <p className="font-mono text-[9px] tracking-[0.22em] text-[#8EA5FF] uppercase">
                Academic Timeline
              </p>

              <h2 className="mt-4 font-['Fraunces'] text-3xl font-light tracking-[-0.03em]">
                Hành trình học tập.
              </h2>

              <p className="mt-4 max-w-xs text-sm leading-6 text-white/35">
                Thời gian bắt đầu và hoàn thành chương trình học.
              </p>
            </div>

            {/* RIGHT */}

            <div>
              {/* START */}

              <div className="relative border-l border-white/10 pb-14 pl-8">
                <span className="absolute top-0 -left-1.25 h-2.5 w-2.5 rounded-full border-2 border-[#11131B] bg-[#8EA5FF] ring-1 ring-[#8EA5FF]/30" />

                <p className="font-mono text-[8px] tracking-[0.18em] text-[#8EA5FF] uppercase">
                  Bắt đầu
                </p>

                <p className="mt-2 text-2xl font-medium text-white/80">{education.startYear}</p>

                <p className="mt-2 text-sm text-white/30">{education.schoolName}</p>
              </div>

              {/* END */}

              <div className="relative pl-8">
                <span className="absolute top-0 -left-1.25 h-2.5 w-2.5 rounded-full border-2 border-[#11131B] bg-white/35 ring-1 ring-white/10" />

                <p className="font-mono text-[8px] tracking-[0.18em] text-white/30 uppercase">
                  Hoàn thành
                </p>

                <p className="mt-2 text-2xl font-medium text-white/80">{education.endYear}</p>

                <p className="mt-2 text-sm text-white/30">{education.degree}</p>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            EDUCATION DETAILS
        ===================================================== */}

        <section className="mt-24 border-t border-white/8 pt-14">
          <div className="grid gap-12 lg:grid-cols-[0.35fr_0.65fr] lg:gap-20">
            {/* LEFT */}

            <div>
              <p className="font-mono text-[9px] tracking-[0.22em] text-[#8EA5FF] uppercase">
                About Education
              </p>

              <h2 className="mt-4 font-['Fraunces'] text-3xl font-light tracking-[-0.03em]">
                Thông tin học vấn.
              </h2>
            </div>

            {/* RIGHT */}

            <div>
              <p className="max-w-3xl text-base leading-8 text-[#9B9EAC]">
                {education.description}
              </p>

              {/* INFORMATION GRID */}

              <div className="mt-10 grid overflow-hidden rounded-2xl border border-white/8 sm:grid-cols-2">
                {/* SCHOOL */}

                <div className="border-b border-white/8 p-5 sm:border-r">
                  <div className="flex items-center gap-2 text-white/25">
                    <School size={12} />

                    <span className="font-mono text-[8px] tracking-[0.16em] uppercase">Trường</span>
                  </div>

                  <p className="mt-3 text-sm text-white/70">{education.schoolName}</p>
                </div>

                {/* DEGREE */}

                <div className="border-b border-white/8 p-5">
                  <div className="flex items-center gap-2 text-white/25">
                    <GraduationCap size={12} />

                    <span className="font-mono text-[8px] tracking-[0.16em] uppercase">
                      Bằng cấp
                    </span>
                  </div>

                  <p className="mt-3 text-sm text-white/70">{education.degree}</p>
                </div>

                {/* MAJOR */}

                <div className="border-b border-white/8 p-5 sm:border-r sm:border-b-0">
                  <div className="flex items-center gap-2 text-white/25">
                    <BookOpen size={12} />

                    <span className="font-mono text-[8px] tracking-[0.16em] uppercase">
                      Chuyên ngành
                    </span>
                  </div>

                  <p className="mt-3 text-sm text-white/70">{education.major}</p>
                </div>

                {/* YEARS */}

                <div className="p-5">
                  <div className="flex items-center gap-2 text-white/25">
                    <CalendarDays size={12} />

                    <span className="font-mono text-[8px] tracking-[0.16em] uppercase">
                      Niên khóa
                    </span>
                  </div>

                  <p className="mt-3 text-sm text-white/70">
                    {education.startYear} — {education.endYear}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =====================================================
            FOOTER
        ===================================================== */}

        <div className="mt-24 flex flex-col gap-4 border-t border-white/8 pt-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-2">
            <Hash size={10} className="text-white/20" />

            <span className="font-mono text-[8px] tracking-[0.18em] text-white/20 uppercase">
              Education Detail
            </span>
          </div>

          <span className="max-w-xs truncate font-mono text-[8px] text-white/20 sm:max-w-none">
            ID · {education.id}
          </span>
        </div>
      </div>
    </main>
  );
};

export default EducationContainerId;
