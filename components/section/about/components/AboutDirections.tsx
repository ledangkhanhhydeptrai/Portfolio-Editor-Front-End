import { DirectionProps } from "@/features/direction/DirectionTypes";
import Link from "next/link";
import React from "react";

interface AboutDirectionsProps {
  directions: DirectionProps[];
}

/**
 * direction.icon có thể là URL ảnh (vd: https://.../1179120.png) hoặc ReactNode/emoji.
 * Trước đây URL bị in ra dạng chữ nên tràn khỏi khung -> giờ render bằng <img>.
 */
const DirectionIcon = ({ icon, title }: { icon: unknown; title: string }) => {
  if (typeof icon === "string" && (icon.startsWith("http") || icon.startsWith("/"))) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={icon} alt={title} className="h-7 w-7 object-contain" loading="lazy" />
    );
  }
  return <>{icon as React.ReactNode}</>;
};

const AboutDirections: React.FC<AboutDirectionsProps> = ({ directions }) => {
  return (
    <section className="relative border-b border-white/10">
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#718CFF]/10 blur-[160px]" />

      <div className="relative mx-auto w-full max-w-[1500px] px-6 py-20 lg:px-10 lg:py-24 xl:px-14">
        {/* Header: tiêu đề bên trái, mô tả + nút gom về bên phải */}
        <div className="flex flex-col gap-6 border-b border-white/10 pb-10 md:flex-row md:items-end md:justify-between">
          <h2 className="font-['Fraunces'] text-4xl font-light tracking-[-0.03em] text-[#F4F3EF] sm:text-5xl">
            Ba hướng.
            <span className="block text-[#A09E98] sm:inline"> Một con người.</span>
          </h2>

          <div className="flex max-w-md flex-col gap-4 md:items-end md:text-right">
            <p className="text-sm leading-6 text-[#A3A19B]">
              Mỗi lĩnh vực cho tôi một góc nhìn khác nhau trong cách giải quyết vấn đề và tạo ra sản
              phẩm.
            </p>

            <Link
              href="/direction"
              className="group inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-medium text-[#D5D3CC] transition-all duration-300 hover:border-[#8EA5FF]/50 hover:bg-[#8EA5FF]/10 hover:text-white"
            >
              Xem tất cả
              <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </Link>
          </div>
        </div>

        {directions.length === 0 ? (
          <div className="mt-10 flex min-h-60 items-center justify-center rounded-2xl border border-dashed border-white/15 bg-white/[0.02]">
            <div className="text-center">
              <h3 className="font-['Fraunces'] text-xl text-[#F4F3EF]">Chưa có hướng đi</h3>
              <p className="mt-2 text-sm leading-6 text-[#96948E]">
                Hiện chưa có dữ liệu chuyên môn để hiển thị.
              </p>
            </div>
          </div>
        ) : (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {directions.map((direction) => (
              <article
                key={direction.id}
                className="group relative flex flex-col rounded-2xl border border-white/10 bg-[#1B1E29]/80 p-7 backdrop-blur-md transition-colors duration-300 hover:border-[#8EA5FF]/40 hover:bg-[#20232F]"
              >
                {/* Icon + mã lĩnh vực */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/5 text-xl text-[#9BADFF]">
                    <DirectionIcon icon={direction.icon} title={direction.title} />
                  </div>

                  <span className="rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-[#8EA5FF]">
                    {direction.code.toUpperCase()}
                  </span>
                </div>

                <h3 className="mt-7 font-['Fraunces'] text-2xl leading-snug text-[#F4F3EF]">
                  {direction.title}
                </h3>

                <p className="mt-3 line-clamp-5 text-sm leading-7 text-[#A3A19B]">
                  {direction.description}
                </p>

                {/* Kỹ năng */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {direction.skills.map((skill) => (
                    <span
                      key={skill.id}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#C4C2BB]"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>

                {/* mt-auto: luôn đẩy link xuống đáy, các card cao bằng nhau */}
                <div className="mt-auto pt-7">
                  <Link
                    href={`/direction/${direction.id}`}
                    className="group/link inline-flex items-center gap-2 border-t border-white/10 pt-5 text-sm font-medium text-[#8EA5FF] transition-colors duration-300 hover:text-[#B4C2FF] w-full"
                  >
                    Xem chi tiết
                    <span className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5">
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