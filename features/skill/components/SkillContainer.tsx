"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import React from "react";
import { getSkillRequest } from "../skillSlice";
import Loading from "@/components/ui/Loading";
import ErrorMessage from "@/components/ui/ErrorMessage";
import Image from "next/image";
import { SkillProps } from "../skillTypes";

const CATEGORY_LABEL: Record<string, string> = {
  VIDEO_EDITING: "Video Editing",
  DEVELOPMENT: "Development",
  DRIVING: "Driving"
};

const CATEGORY_META: Record<
  string,
  {
    dot: string;
    text: string;
    glow: string;
    border: string;
    icon: React.ReactNode;
  }
> = {
  VIDEO_EDITING: {
    dot: "bg-fuchsia-400",
    text: "text-fuchsia-300",
    glow: "bg-fuchsia-500/10",
    border: "hover:border-fuchsia-500/30",
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

const DEFAULT_META = {
  dot: "bg-slate-400",
  text: "text-slate-300",
  glow: "bg-slate-500/10",
  border: "hover:border-slate-500/30",
  icon: <circle cx="12" cy="12" r="7" stroke="currentColor" strokeWidth="1.5" />
};

function groupByCategory(skills: SkillProps[]) {
  const groups = new Map<string, SkillProps[]>();
  for (const skill of skills) {
    const list = groups.get(skill.category) ?? [];
    list.push(skill);
    groups.set(skill.category, list);
  }
  for (const list of groups.values()) {
    list.sort((a, b) => a.displayOrder - b.displayOrder);
  }
  return Array.from(groups.entries());
}

const SkillContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { data, loading, error } = useAppSelector((state) => state.skill);

  React.useEffect(() => {
    dispatch(getSkillRequest());
  }, [dispatch]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return <ErrorMessage />;
  }

  const skills: SkillProps[] = data ?? [];
  const grouped = groupByCategory(skills);

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#07070c] px-6 py-20">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] bg-size-[28px_28px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_20%,transparent_75%)]" />
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-xl -translate-x-1/2 rounded-full bg-indigo-600/10 blur-[100px]" />

      <div className="relative mx-auto max-w-5xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Portfolio
          </span>
          <h1 className="mt-4 bg-linear-to-b from-white to-slate-400 bg-clip-text text-4xl font-bold tracking-tight text-transparent">
            Kỹ năng &amp; Chuyên môn
          </h1>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-slate-500">
            Tổng hợp các công cụ, công nghệ và kỹ năng được tích lũy qua quá
            trình học tập và làm việc.
          </p>

          {/* Stat pills */}
          <div className="mt-7 flex items-center justify-center gap-3">
            <div className="rounded-xl border border-white/10 bg-white/3 px-5 py-3">
              <p className="text-xl font-semibold text-slate-100">
                {skills.length}
              </p>
              <p className="text-[11px] text-slate-500">Kỹ năng</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/3 px-5 py-3">
              <p className="text-xl font-semibold text-slate-100">
                {grouped.length}
              </p>
              <p className="text-[11px] text-slate-500">Nhóm</p>
            </div>
          </div>
        </div>

        {/* Category cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {grouped.map(([category, items]) => {
            const meta = CATEGORY_META[category] ?? DEFAULT_META;
            return (
              <section
                key={category}
                className={`group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/2.5 p-6 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/4 ${meta.border}`}
              >
                <div
                  className={`pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full blur-3xl transition-opacity duration-300 group-hover:opacity-150 ${meta.glow}`}
                />

                <div className="relative mb-5 flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 ${meta.text}`}
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
                      {CATEGORY_LABEL[category] ?? category}
                    </h2>
                    <p className="text-xs text-slate-600">
                      {items.length} kỹ năng
                    </p>
                  </div>
                </div>

                <ul className="relative flex flex-col gap-1">
                  {items.map((skill) => (
                    <li
                      key={skill.id}
                      className="flex items-center gap-3 rounded-lg px-2.5 py-2 text-sm text-slate-300 transition hover:bg-white/5"
                    >
                      {skill.iconUrl ? (
                        <span className="relative h-5 w-5 shrink-0 overflow-hidden rounded-md bg-white/5">
                          <Image
                            src={skill.iconUrl}
                            alt={skill.name}
                            fill
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
              </section>
            );
          })}
        </div>

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
  );
};

export default SkillContainer;
