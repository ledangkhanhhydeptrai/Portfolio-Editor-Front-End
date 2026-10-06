import Link from "next/link";
import { WorkStyleProps } from "@/features/work-style/WorkStylesTypes";
import React from "react";

interface AboutWorkStyleProps {
  workStyles: WorkStyleProps[];
}

const AboutWorkStyle: React.FC<AboutWorkStyleProps> = ({ workStyles }) => {
  const sortedWorkStyles = [...workStyles].sort((a, b) => a.displayOrder - b.displayOrder);

  return (
    <section className="relative border-b border-white/10">
      <div className="mx-auto w-full max-w-375 px-6 py-20 lg:px-10 lg:py-24 xl:px-14">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          {/* LEFT */}

          <div>
            <div className="flex items-center gap-3">
              <span className="text-2.25 font-mono text-[#8EA5FF]">03</span>

              <span className="h-px w-8 bg-white/15" />
            </div>

            <h2 className="mt-5 font-['Fraunces'] text-4xl leading-tight font-light tracking-[-0.03em] text-[#F4F3EF]">
              Cách tôi
              <br />
              <span className="text-[#A09E98]">làm việc</span>
            </h2>

            {/* VIEW DETAIL BUTTON */}

            <Link
              href="/work-style"
              className="group/btn mt-10 inline-flex items-center gap-3 rounded-full border border-white/15 py-2 pr-2 pl-5 text-sm font-medium text-[#F4F3EF] transition-colors duration-300 hover:border-[#8EA5FF]/60 hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-[#8EA5FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#13151D] focus-visible:outline-none"
            >
              Xem tất cả
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#8EA5FF] text-[#13151D] transition-transform duration-300 group-hover/btn:translate-x-0.5">
                <svg
                  viewBox="0 0 24 24"
                  className="h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </span>
            </Link>
          </div>

          {/* RIGHT */}

          <div className="grid overflow-hidden rounded-2xl border border-white/10 bg-[#1A1D28]/60 sm:grid-cols-2">
            {sortedWorkStyles.map((item, index) => {
              const number = String(item.displayOrder).padStart(2, "0");

              return (
                <article
                  key={item.id}
                  className={`group p-7 transition-colors duration-300 hover:bg-white/5 ${
                    index % 2 === 0 ? "sm:border-r sm:border-white/10" : ""
                  } ${index < sortedWorkStyles.length - 2 ? "border-b border-white/10" : ""}`}
                >
                  {/* NUMBER */}

                  <span className="font-mono text-[8px] text-[#8EA5FF]">{number}</span>

                  {/* TITLE */}

                  <h3 className="mt-8 text-sm font-medium text-[#F4F3EF]">{item.title}</h3>

                  {/* DESCRIPTION */}

                  <p className="mt-3 max-w-xs text-xs leading-5 text-[#96948E]">
                    {item.description}
                  </p>

                  {/* ACCENT */}

                  <div className="mt-7 h-px w-8 bg-white/15 transition-all duration-300 group-hover:w-14 group-hover:bg-[#8EA5FF]/70" />
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWorkStyle;
