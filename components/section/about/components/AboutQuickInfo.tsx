import React from "react";

import MagneticLink from "./MagneticLink";

const information = [
  ["ĐỊA ĐIỂM", "Việt Nam"],
  ["LĨNH VỰC", "Edit + Development"],
  ["ĐỊNH HƯỚNG", "Freelance / Remote"],
  ["TRẠNG THÁI", "Sẵn sàng"]
] as [string, string][];

const AboutQuickInfo: React.FC = () => {
  return (
    <section className="relative">
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-200 -translate-x-1/2 rounded-full bg-[#718CFF]/8 blur-[150px]" />

      <div className="relative mx-auto w-full max-w-375 px-6 py-20 lg:px-10 lg:py-24 xl:px-14">
        {/* INFO */}

        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.15)] sm:grid-cols-2 lg:grid-cols-4">
          {information.map(([label, value]) => (
            <div
              key={label}
              className="group bg-[#1B1E29] px-6 py-6 transition-colors duration-300 hover:bg-[#222632]"
            >
              <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#777A84]">
                {label}
              </p>

              <p className="mt-3 text-xs text-[#D1CFC9]">{value}</p>
            </div>
          ))}
        </div>

        {/* CTA */}

        <div className="mt-16 grid gap-10 border-t border-white/10 pt-14 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <p className="font-mono text-2.25 uppercase tracking-[0.24em] text-[#8EA5FF]">
              Tiếp theo
            </p>

            <h2 className="mt-5 max-w-3xl font-['Fraunces'] text-4xl font-light leading-[1.1] tracking-[-0.03em] text-[#F4F3EF] sm:text-5xl">
              Đừng chỉ đọc về tôi.
              <br />
              <span className="text-[#A09E98]">
                Hãy xem những gì tôi đã làm.
              </span>
            </h2>
          </div>

          <MagneticLink href="/projects" />
        </div>
      </div>
    </section>
  );
};

export default AboutQuickInfo;
