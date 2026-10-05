"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { ArrowLeft, BriefcaseBusiness, CalendarDays, Clock3 } from "lucide-react";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { getExperienceIdRequest, getExperienceUserIdRequest } from "../experienceSlice";

import Loading from "@/components/ui/Loading";
import ErrorMessage from "@/components/ui/ErrorMessage";

/* ---------- helpers ---------- */

const toDate = (value?: string) => {
  if (!value) return null;
  const [y, m, d] = value.split("T")[0].split("-").map(Number);
  if (!y || !m || !d) return null;
  return new Date(y, m - 1, d);
};

const formatDate = (value: string) => {
  const date = toDate(value);
  if (!date) return "";
  const dd = String(date.getDate()).padStart(2, "0");
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  return `${dd}/${mm}/${date.getFullYear()}`;
};

const formatMonthYear = (value: string) => {
  const date = toDate(value);
  if (!date) return "";
  return `Tháng ${date.getMonth() + 1}, ${date.getFullYear()}`;
};

const getDuration = (startValue?: string, endValue?: string, isCurrent?: boolean) => {
  const start = toDate(startValue);
  const end = isCurrent ? new Date() : toDate(endValue);
  if (!start || !end || end < start) return "";

  let months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  if (end.getDate() < start.getDate()) months -= 1;

  if (months < 1) {
    const days = Math.floor((end.getTime() - start.getTime()) / 86_400_000) + 1;
    return `${days} ngày`;
  }

  const years = Math.floor(months / 12);
  const rest = months % 12;

  return [years ? `${years} năm` : "", rest ? `${rest} tháng` : ""].filter(Boolean).join(" ");
};

/* ---------- component ---------- */

const ExperienceIdContainer: React.FC = () => {
  const params = useParams();
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { experience, loading, error } = useAppSelector((state) => state.experience);

  const id = params.id;

  // Hiệu ứng "vẽ" đường timeline đúng một lần khi trang hiện ra
  const [drawn, setDrawn] = React.useState(false);

  React.useEffect(() => {
    if (typeof id !== "string") return;
    dispatch(getExperienceUserIdRequest(id));
    dispatch(getExperienceIdRequest(id));
  }, [dispatch, id]);

  React.useEffect(() => {
    if (!experience) return;
    const frame = requestAnimationFrame(() => setDrawn(true));
    return () => cancelAnimationFrame(frame);
  }, [experience]);

  if (loading) return <Loading />;
  if (error) return <ErrorMessage />;

  if (!experience) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0F1117] px-6 text-[#ECEBE6]">
        <div className="text-center">
          <p className="font-['Fraunces'] text-2xl font-light">Không tìm thấy kinh nghiệm này</p>
          <p className="mt-2 text-sm text-white/45">
            Mục này có thể đã bị xoá hoặc đường dẫn không đúng.
          </p>
          <button
            type="button"
            onClick={() => router.back()}
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/12 px-4 py-2 text-sm text-white/70 transition-colors hover:border-white/30 hover:text-white focus-visible:ring-2 focus-visible:ring-[#8EA5FF] focus-visible:outline-none"
          >
            <ArrowLeft size={14} />
            Quay lại
          </button>
        </div>
      </main>
    );
  }

  const isCurrent = experience.isCurrent;
  const duration = getDuration(experience.startDate, experience.endDate, isCurrent);
  const company: string = experience.companyName ?? "";
  const initial = company.trim().charAt(0).toUpperCase() || "?";

  // Mô tả: tách theo dòng để hiển thị đúng cách người dùng đã nhập
  const lines: string[] = (experience.description ?? "")
    .split(/\r?\n/)
    .map((line: string) => line.replace(/^[-•*]\s*/, "").trim())
    .filter(Boolean);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0F1117] px-6 pt-32 pb-24 text-[#ECEBE6] lg:px-10 xl:px-14">
      {/* Một vệt sáng duy nhất phía sau tiêu đề */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-64 left-1/2 h-130 w-225 -translate-x-1/2 rounded-full bg-[#5B6CFF]/10 blur-[160px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        {/* ===== Điều hướng ===== */}
        <nav className="mb-12 sm:mb-16">
          <button
            type="button"
            onClick={() => router.back()}
            className="group inline-flex items-center gap-3 rounded-full py-1 pr-3 text-sm text-white/50 transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-[#8EA5FF] focus-visible:outline-none"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 transition-colors group-hover:border-[#8EA5FF]/50 group-hover:bg-[#8EA5FF]/10">
              <ArrowLeft size={15} />
            </span>
            Kinh nghiệm
          </button>
        </nav>

        {/* ===== Tiêu đề: công ty là nhân vật chính ===== */}
        <header className="flex flex-col gap-8 sm:flex-row sm:items-start sm:gap-10">
          <div
            aria-hidden
            className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl border border-[#8EA5FF]/20 bg-[#8EA5FF]/10 font-['Fraunces'] text-4xl font-light text-[#C3CFFF] sm:h-24 sm:w-24 sm:text-5xl"
          >
            {initial}
          </div>

          <div className="min-w-0">
            <h1 className="font-['Fraunces'] text-5xl leading-[1.02] font-light tracking-[-0.035em] text-[#F6F5F1] sm:text-6xl lg:text-7xl">
              {company}
            </h1>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#8EA5FF]/12 py-1.5 pr-4 pl-3 text-sm font-medium text-[#C3CFFF]">
                <BriefcaseBusiness size={14} />
                {experience.position}
              </span>

              <span
                className={`inline-flex items-center gap-2 rounded-full border py-1.5 pr-4 pl-3 text-sm ${
                  isCurrent
                    ? "border-emerald-400/25 bg-emerald-400/8 text-emerald-300"
                    : "border-white/10 text-white/55"
                }`}
              >
                <span className="relative flex h-2 w-2">
                  {isCurrent && (
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/60 motion-reduce:animate-none" />
                  )}
                  <span
                    className={`relative inline-flex h-2 w-2 rounded-full ${
                      isCurrent ? "bg-emerald-400" : "bg-white/40"
                    }`}
                  />
                </span>
                {isCurrent ? "Đang làm việc" : "Đã hoàn thành"}
              </span>

              {duration && (
                <span className="inline-flex items-center gap-2 text-sm text-white/45">
                  <Clock3 size={14} />
                  {duration}
                </span>
              )}
            </div>
          </div>
        </header>

        {/* ===== Timeline ===== */}
        <section
          aria-label="Thời gian làm việc"
          className="mt-14 rounded-[28px] border border-white/8 bg-white/3 px-6 py-8 sm:mt-16 sm:px-10 sm:py-9"
        >
          <div className="relative">
            {/* đường nền */}
            <div className="absolute top-2 right-0 left-0 h-px bg-white/10" />

            {/* đường được "vẽ" khi vào trang */}
            <div
              className="absolute top-2 left-0 h-px bg-linear-to-r from-[#8EA5FF] to-[#8EA5FF]/50 transition-[width] duration-1000 ease-out motion-reduce:transition-none"
              style={{ width: drawn ? "100%" : "0%" }}
            />

            {/* thời lượng nằm ngay trên đường */}
            {duration && (
              <span className="absolute top-2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8EA5FF]/30 bg-[#161926] px-4 py-1 text-sm whitespace-nowrap text-[#C3CFFF]">
                {duration}
              </span>
            )}

            <div className="relative flex items-start justify-between gap-6">
              {/* Bắt đầu */}
              <div>
                <span className="block h-4 w-4 rounded-full border-[3px] border-[#13151D] bg-[#8EA5FF] ring-1 ring-[#8EA5FF]/50" />
                <p className="mt-6 text-sm text-white/45">Bắt đầu</p>
                <p className="mt-1 font-['Fraunces'] text-2xl font-light text-[#F6F5F1] sm:text-3xl">
                  {formatMonthYear(experience.startDate)}
                </p>
                <p className="mt-1 text-sm text-white/35">{formatDate(experience.startDate)}</p>
              </div>

              {/* Kết thúc */}
              <div className="text-right">
                <span
                  className={`ml-auto block h-4 w-4 rounded-full border-[3px] border-[#13151D] ring-1 ${
                    isCurrent ? "bg-emerald-400 ring-emerald-400/50" : "bg-white/55 ring-white/20"
                  }`}
                />
                <p className="mt-6 text-sm text-white/45">{isCurrent ? "Hiện tại" : "Kết thúc"}</p>
                <p className="mt-1 font-['Fraunces'] text-2xl font-light text-[#F6F5F1] sm:text-3xl">
                  {isCurrent ? "Đang tiếp diễn" : formatMonthYear(experience.endDate)}
                </p>
                <p className="mt-1 text-sm text-white/35">
                  {isCurrent ? "Chưa có ngày kết thúc" : formatDate(experience.endDate)}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ===== Nội dung ===== */}
        <div className="mt-14 grid gap-12 sm:mt-16 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-20">
          <section>
            <h2 className="font-['Fraunces'] text-3xl font-light tracking-tight text-[#F6F5F1]">
              Công việc thực hiện
            </h2>

            {lines.length === 0 && (
              <p className="mt-6 rounded-2xl border border-dashed border-white/12 px-5 py-6 text-[15px] text-white/40">
                Chưa có mô tả cho kinh nghiệm này.
              </p>
            )}

            {lines.length === 1 && (
              <p className="mt-6 max-w-[62ch] text-[17px] leading-8 text-[#A6A9B8]">{lines[0]}</p>
            )}

            {lines.length > 1 && (
              <ul className="mt-6 max-w-[62ch] space-y-4">
                {lines.map((line, index) => (
                  <li key={index} className="flex gap-4 text-[17px] leading-8 text-[#A6A9B8]">
                    <span
                      aria-hidden
                      className="mt-3.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8EA5FF]"
                    />
                    <span>{line}</span>
                  </li>
                ))}
              </ul>
            )}
          </section>

          <aside>
            <div className="rounded-3xl border border-white/8 bg-white/3 p-6 lg:sticky lg:top-28">
              <h2 className="font-['Fraunces'] text-xl font-light text-white/85">
                Thông tin nhanh
              </h2>

              <dl className="mt-5 divide-y divide-white/8">
                <div className="py-4 first:pt-0">
                  <dt className="flex items-center gap-2 text-sm text-white/40">
                    <BriefcaseBusiness size={13} />
                    Vị trí
                  </dt>
                  <dd className="mt-1.5 text-[15px] text-white/85">{experience.position}</dd>
                </div>

                <div className="py-4">
                  <dt className="flex items-center gap-2 text-sm text-white/40">
                    <CalendarDays size={13} />
                    Thời gian
                  </dt>
                  <dd className="mt-1.5 text-[15px] text-white/85">
                    {formatDate(experience.startDate)} –{" "}
                    {isCurrent ? "Nay" : formatDate(experience.endDate)}
                  </dd>
                </div>

                {duration && (
                  <div className="py-4 last:pb-0">
                    <dt className="flex items-center gap-2 text-sm text-white/40">
                      <Clock3 size={13} />
                      Thời lượng
                    </dt>
                    <dd className="mt-1.5 text-[15px] text-white/85">{duration}</dd>
                  </div>
                )}
              </dl>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
};

export default ExperienceIdContainer;
