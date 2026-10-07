"use client";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";
import { getWorkStyleByIdRequest, getWorkStyleByUserIdRequest } from "../WorkStylesSlice";
import Loading from "@/components/ui/Loading";
import ErrorMessage from "@/components/ui/ErrorMessage";

export default function WorkStyleContainerById() {
  const params = useParams();
  const router = useRouter();
  const id = params.id;
  const dispatch = useAppDispatch();
  const { work, data, loading, error } = useAppSelector((state) => state.workstyle);
  const { user, authReady } = useAppSelector((state) => state.auth);
  const cardRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (typeof id !== "string") return;
    if (!authReady) return;
    if (user) dispatch(getWorkStyleByUserIdRequest(id));
    dispatch(getWorkStyleByIdRequest(id));
  }, [dispatch, id, user, authReady]);

  /* Hiệu ứng nghiêng 3D theo chuột cho card chính */
  const handleTilt = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = cardRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    el.style.transform = `perspective(900px) rotateY(${(px - 0.5) * 10}deg) rotateX(${(0.5 - py) * 10}deg)`;
    el.style.setProperty("--x", `${px * 100}%`);
    el.style.setProperty("--y", `${py * 100}%`);
  };

  const resetTilt = () => {
    if (cardRef.current)
      cardRef.current.style.transform = "perspective(900px) rotateX(0) rotateY(0)";
  };

  if (loading) return <Loading />;
  if (error) return <ErrorMessage />;
  if (!work) return null;

  const order = String(work.displayOrder).padStart(2, "0");

  /* Prev / Next: chỉ hiện khi store đã có danh sách */
  const sorted = [...(data ?? [])].sort((a, b) => a.displayOrder - b.displayOrder);
  const currentIndex = sorted.findIndex((w) => w.id === work.id);
  const prev = currentIndex > 0 ? sorted[currentIndex - 1] : null;
  const next =
    currentIndex >= 0 && currentIndex < sorted.length - 1 ? sorted[currentIndex + 1] : null;
  const total = sorted.length;
  const progress = total > 0 && currentIndex >= 0 ? ((currentIndex + 1) / total) * 100 : 0;

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <style>
        {`
          @keyframes wsRise {
            from { opacity: 0; transform: translateY(20px); }
            to   { opacity: 1; transform: translateY(0); }
          }
          @keyframes wsFloat {
            0%, 100% { transform: translateY(0); }
            50%      { transform: translateY(-8px); }
          }
          @media (prefers-reduced-motion: reduce) {
            .ws-motion, .ws-float { animation: none !important; opacity: 1 !important; transform: none !important; }
          }
        `}
      </style>

      {/* Background decor */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-indigo-600/30 blur-3xl" />
        <div className="absolute -right-32 -bottom-32 h-96 w-96 rounded-full bg-fuchsia-600/20 blur-3xl" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-size-[48px_48px]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,#020617_100%)]" />
      </div>

      <div className="relative mx-auto flex min-h-screen max-w-6xl flex-col px-6 pt-28 pb-12 lg:px-10">
        {/* Thanh trên: Quay lại + tiến độ */}
        <div
          className="ws-motion mb-10 flex flex-wrap items-center justify-between gap-4"
          style={{ animation: "wsRise 0.6s cubic-bezier(0.16,1,0.3,1) both" }}
        >
          <button
            onClick={() => router.back()}
            className="group relative z-10 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-sm font-medium text-white shadow-lg backdrop-blur transition hover:border-indigo-400/60 hover:bg-indigo-500/20 focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
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

          {total > 0 && currentIndex >= 0 && (
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span className="tabular-nums">
                <span className="font-semibold text-white">{order}</span> /{" "}
                {String(total).padStart(2, "0")}
              </span>
              <div className="h-1 w-32 overflow-hidden rounded-full bg-white/10">
                <div
                  className="h-full rounded-full bg-linear-to-r from-indigo-400 to-fuchsia-400 transition-all duration-700"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>
          )}
        </div>

        <div className="grid flex-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* LEFT: Nội dung */}
          <div
            className="ws-motion order-2 lg:order-1"
            style={{ animation: "wsRise 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s both" }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium tracking-widest text-indigo-300 uppercase">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-400" />
              Phong cách làm việc
            </span>

            <h1 className="mt-6 bg-linear-to-r from-white via-indigo-200 to-fuchsia-300 bg-clip-text text-4xl leading-tight font-bold text-balance text-transparent sm:text-5xl xl:text-6xl">
              {work.title}
            </h1>

            <div className="mt-6 h-1 w-20 rounded-full bg-linear-to-r from-indigo-500 to-fuchsia-500" />

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-300">
              {work.description}
            </p>

            {/* Stats */}
            <div className="mt-10 grid max-w-md grid-cols-3 gap-4">
              {[
                { label: "Ưu tiên", value: `#${order}` },
                { label: "Chất lượng", value: "100%" },
                { label: "Tận tâm", value: "★★★★★" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur transition hover:-translate-y-1 hover:border-indigo-400/40 hover:bg-white/10"
                >
                  <p className="text-xl font-semibold">{item.value}</p>
                  <p className="mt-1 text-xs text-slate-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Card trực quan */}
          <div
            className="ws-motion order-1 flex justify-center lg:order-2"
            style={{ animation: "wsRise 0.8s cubic-bezier(0.16,1,0.3,1) 0.25s both" }}
          >
            <div
              className="ws-float relative w-full max-w-md"
              style={{ animation: "wsFloat 6s ease-in-out infinite" }}
            >
              {/* Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-linear-to-br from-indigo-500 to-fuchsia-500 opacity-40 blur-xl" />

              {/* Main card (nghiêng theo chuột) */}
              <div
                ref={cardRef}
                onMouseMove={handleTilt}
                onMouseLeave={resetTilt}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 p-8 pb-14 backdrop-blur-xl transition-transform duration-200 ease-out will-change-transform"
              >
                {/* Ánh sáng theo chuột */}
                <div
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(360px circle at var(--x, 70%) var(--y, 20%), rgba(129,140,248,0.18), transparent 50%)",
                  }}
                />

                {/* Số thứ tự lớn */}
                <span className="absolute -top-6 -right-4 text-[10rem] leading-none font-black text-white/5 select-none">
                  {order}
                </span>

                {/* Icon */}
                <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-500 to-fuchsia-500 shadow-lg shadow-indigo-500/30">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-8 w-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="11" cy="11" r="6" />
                    <path d="M20 20l-4.2-4.2" />
                  </svg>
                </div>

                <h2 className="relative mt-6 text-2xl font-semibold">{work.title}</h2>

                <ul className="relative mt-6 space-y-4">
                  {[
                    "Kiểm tra kỹ từng chi tiết",
                    "Đảm bảo đúng yêu cầu",
                    "Hạn chế tối đa lỗi phát sinh",
                  ].map((point) => (
                    <li key={point} className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-xs text-emerald-400">
                        ✓
                      </span>
                      <span className="text-slate-300">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-6 -left-4 rounded-2xl border border-white/10 bg-slate-900/90 px-5 py-3 shadow-xl backdrop-blur lg:-left-8">
                <p className="text-xs text-slate-400">Thứ tự hiển thị</p>
                <p className="text-2xl font-bold text-indigo-300">#{order}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Điều hướng trước / sau */}
        {(prev || next) && (
          <nav
            className="ws-motion mt-16 grid gap-4 border-t border-white/10 pt-8 sm:grid-cols-2"
            style={{ animation: "wsRise 0.8s cubic-bezier(0.16,1,0.3,1) 0.4s both" }}
            aria-label="Điều hướng nguyên tắc"
          >
            {prev ? (
              <Link
                href={`/work-style/${prev.id}`}
                className="group rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-indigo-400/40 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:outline-none"
              >
                <p className="text-xs text-slate-500 transition group-hover:text-indigo-300">
                  ← Nguyên tắc trước
                </p>
                <p className="mt-1 font-semibold text-slate-200">{prev.title}</p>
              </Link>
            ) : (
              <span />
            )}

            {next && (
              <Link
                href={`/work-style/${next.id}`}
                className="group rounded-2xl border border-white/10 bg-white/5 p-5 text-left transition hover:border-indigo-400/40 hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:outline-none sm:text-right"
              >
                <p className="text-xs text-slate-500 transition group-hover:text-indigo-300">
                  Nguyên tắc tiếp theo →
                </p>
                <p className="mt-1 font-semibold text-slate-200">{next.title}</p>
              </Link>
            )}
          </nav>
        )}
      </div>
    </section>
  );
}
