"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

import { useAppSelector } from "@/hooks/redux";

export default function SkillsSection() {
  const { user } = useAppSelector((state) => state.auth);

  const { data, userSkill, loading, error } = useAppSelector((state) => state.skill);

  const skillData = user ? userSkill : data;

  const skills = React.useMemo(() => {
    return [...skillData].sort((a, b) => {
      if (a.category === b.category) {
        return a.displayOrder - b.displayOrder;
      }

      return a.category.localeCompare(b.category);
    });
  }, [skillData]);

  const formatCategory = (category: string) => {
    switch (category) {
      case "VIDEO_EDITING":
        return "Video Editing";

      case "DEVELOPMENT":
        return "Development";

      case "DRIVING":
        return "Driving";

      default:
        return category
          .replaceAll("_", " ")
          .toLowerCase()
          .replace(/\b\w/g, (char) => char.toUpperCase());
    }
  };

  return (
    <section id="skills" className="border-t border-white/7 px-6 py-24 lg:px-10 xl:px-14">
      <div className="mx-auto w-full max-w-375">
        {/* HEADER */}

        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-[10px] tracking-[0.28em] text-[#7F96F5] uppercase">
              02 / Chuyên môn
            </p>

            <h2 className="mt-5 font-['Fraunces'] text-3xl font-light lg:text-4xl">
              Kỹ năng & công cụ.
            </h2>
          </div>

          <p className="text-sm text-[#817E77]">Sáng tạo · Công nghệ · Kỷ luật</p>
        </div>

        {/* LOADING */}

        {loading && (
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="h-52 animate-pulse rounded-2xl border border-white/8 bg-white/3"
              />
            ))}
          </div>
        )}

        {/* ERROR */}

        {!loading && error && (
          <div className="mt-12 rounded-2xl border border-white/8 bg-white/3 px-6 py-10">
            <p className="text-sm text-[#8E91A3]">Không thể tải danh sách kỹ năng.</p>
          </div>
        )}

        {/* EMPTY */}

        {!loading && !error && skills.length === 0 && (
          <div className="mt-12 rounded-2xl border border-dashed border-white/10 bg-white/2 px-6 py-14 text-center">
            <p className="text-sm text-[#8E91A3]">Chưa có kỹ năng nào.</p>
          </div>
        )}

        {/* SKILLS */}

        {!loading && !error && skills.length > 0 && (
          <>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {skills.map((skill, index) => (
                <Link
                  key={skill.id}
                  href={`/skills/${skill.id}`}
                  className="group relative min-h-52 overflow-hidden rounded-2xl border border-white/8 bg-[#101012] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#7F96F5]/25 hover:bg-[#12141A]"
                >
                  {/* GLOW */}

                  <div className="pointer-events-none absolute -top-16 -right-16 h-32 w-32 rounded-full bg-indigo-500/0 blur-3xl transition-all duration-500 group-hover:bg-indigo-500/10" />

                  {/* TOP */}

                  <div className="relative flex items-start justify-between">
                    {/* ICON */}

                    <div className="relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/3">
                      {skill.iconUrl ? (
                        <Image
                          src={skill.iconUrl}
                          alt={skill.name}
                          fill
                          sizes="48px"
                          className="object-contain p-2 transition-transform duration-300 group-hover:scale-105"
                        />
                      ) : (
                        <span className="font-mono text-xs text-[#7F96F5]">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      )}
                    </div>

                    {/* NUMBER */}

                    <span className="font-mono text-[9px] tracking-[0.16em] text-[#5F5C56]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  {/* CONTENT */}

                  <div className="relative mt-12">
                    <p className="font-mono text-[9px] tracking-[0.2em] text-[#7F96F5] uppercase">
                      {formatCategory(skill.category)}
                    </p>

                    <h3 className="mt-2 text-lg font-semibold text-[#F0EFEA] transition-colors duration-300 group-hover:text-white">
                      {skill.name}
                    </h3>

                    {/* DETAIL */}

                    <div className="mt-5 flex items-center justify-between border-t border-white/6 pt-4">
                      <span className="font-mono text-[9px] tracking-[0.14em] text-[#65636B] uppercase transition-colors duration-300 group-hover:text-[#9BADFF]">
                        Xem chi tiết
                      </span>

                      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/8 text-xs text-white/25 transition-all duration-300 group-hover:translate-x-1 group-hover:border-[#7F96F5]/30 group-hover:bg-[#7F96F5]/8 group-hover:text-[#9BADFF]">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* VIEW ALL */}

            <div className="mt-8 flex justify-center">
              <Link
                href="/skills"
                className="group flex items-center gap-3 rounded-full border border-white/10 bg-white/3 px-5 py-2.5 text-xs font-medium text-[#C8C6BF] transition-all duration-300 hover:border-[#7F96F5]/40 hover:bg-[#7F96F5]/8 hover:text-white"
              >
                Xem tất cả kỹ năng
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
