import React from "react";

import { WORK_STYLES } from "../data/aboutData";

const AboutWorkStyle: React.FC = () => {
  return (
    <section className="relative border-b border-white/10">
      <div className="mx-auto w-full max-w-375 px-6 py-20 lg:px-10 lg:py-24 xl:px-14">
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-2.25 text-[#8EA5FF]">03</span>

              <span className="h-px w-8 bg-white/15" />
            </div>

            <h2 className="mt-5 font-['Fraunces'] text-4xl font-light leading-tight tracking-[-0.03em] text-[#F4F3EF]">
              Cách tôi
              <br />
              <span className="text-[#A09E98]">làm việc.</span>
            </h2>
          </div>

          <div className="grid overflow-hidden rounded-2xl border border-white/10 bg-[#1A1D28]/60 sm:grid-cols-2">
            {WORK_STYLES.map((item, index) => (
              <article
                key={item.number}
                className={`group p-7 transition-colors duration-300 hover:bg-white/5 ${
                  index % 2 === 0 ? "sm:border-r sm:border-white/10" : ""
                } ${index < 2 ? "border-b border-white/10" : ""}`}
              >
                <span className="font-mono text-[8px] text-[#8EA5FF]">
                  {item.number}
                </span>

                <h3 className="mt-8 text-sm font-medium text-[#F4F3EF]">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-xs text-xs leading-5 text-[#96948E]">
                  {item.text}
                </p>

                <div className="mt-7 h-px w-8 bg-white/15 transition-all duration-300 group-hover:w-14 group-hover:bg-[#8EA5FF]/70" />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWorkStyle;
