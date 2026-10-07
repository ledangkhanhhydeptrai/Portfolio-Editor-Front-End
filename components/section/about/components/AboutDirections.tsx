import { DirectionProps } from "@/features/direction/DirectionTypes";
import Link from "next/link";
import React from "react";



interface AboutDirectionsProps {
  directions: DirectionProps[];
}

const AboutDirections: React.FC<AboutDirectionsProps> = ({ directions }) => {
  return (
    <section className="relative border-b border-white/10">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-100 w-200 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#718CFF]/7 blur-[160px]" />

      <div className="relative mx-auto w-full max-w-375 px-6 py-20 lg:px-10 lg:py-24 xl:px-14">
        <div className="flex flex-col gap-5 border-b border-white/10 pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-3">
              <span className="text-2.25 font-mono text-[#8EA5FF]">02</span>

              <span className="h-px w-8 bg-white/15" />
            </div>

            <h2 className="mt-5 font-['Fraunces'] text-4xl font-light tracking-[-0.03em] text-[#F4F3EF]">
              Ba hướng.
              <span className="text-[#A09E98]"> Một con người.</span>
            </h2>
          </div>

          <p className="max-w-sm text-xs leading-5 text-[#96948E]">
            Mỗi lĩnh vực cho tôi một góc nhìn khác nhau trong cách giải quyết vấn đề và tạo ra sản
            phẩm.
          </p>
          <Link
            href="/direction"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-[9px] tracking-[0.12em] text-[#AAA8A1] uppercase transition-all duration-300 hover:border-[#8EA5FF]/40 hover:bg-[#8EA5FF]/10 hover:text-[#9BADFF]"
          >
            <span>Xem tất cả</span>

            <span className="text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </Link>
        </div>

        {directions.length === 0 ? (
          <div className="bg-white2 mt-6 flex min-h-60 items-center justify-center rounded-2xl border border-dashed border-white/10">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#8EA5FF]">
                ↗
              </div>

              <h3 className="mt-4 font-['Fraunces'] text-xl text-[#F4F3EF]">Chưa có hướng đi</h3>

              <p className="mt-2 text-xs leading-5 text-[#96948E]">
                Hiện chưa có dữ liệu chuyên môn để hiển thị.
              </p>
            </div>
          </div>
        ) : (
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {directions.map((direction, index) => (
              <article
                key={direction.id}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-[#1B1E29]/75 p-7 shadow-[0_15px_45px_rgba(0,0,0,0.12)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#8EA5FF]/30 hover:bg-[#20232F]"
              >
                <div className="flex items-center justify-between">
                  <span className="text-2.25 font-mono text-[#8EA5FF]">
                    {String(index + 1).padStart(2, "0")} / {direction.code.toUpperCase()}
                  </span>

                  <span className="text-xl text-[#777A84] transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#9BADFF]">
                    ↗
                  </span>
                </div>

                <div className="mt-12 flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-[#9BADFF]">
                  {direction.icon}
                </div>

                <h3 className="mt-6 font-['Fraunces'] text-2xl text-[#F4F3EF]">
                  {direction.title}
                </h3>

                <p className="mt-4 text-xs leading-6 text-[#999791]">{direction.description}</p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {direction.skills.map((skill) => (
                    <span
                      key={skill.id}
                      className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 font-mono text-[8px] text-[#AAA8A1]"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>

                <div className="mt-7 border-t border-white/10 pt-5">
                  <Link
                    href={`/direction/${direction.id}`}
                    className="group inline-flex items-center gap-2 font-mono text-[9px] tracking-[0.12em] text-[#8EA5FF] uppercase transition-colors duration-300 hover:text-[#B4C2FF]"
                  >
                    <span>Xem chi tiết</span>

                    <span className="text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      ↗
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutDirections;
