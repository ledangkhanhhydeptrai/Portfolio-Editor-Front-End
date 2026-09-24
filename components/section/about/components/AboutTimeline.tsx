import React from "react";

import { TIMELINE } from "../data/aboutData";

import TimelineItem from "./TimelineItem";

const AboutTimeline: React.FC = () => {
  return (
    <section className="relative border-b border-white/10">
      <div className="mx-auto w-full max-w-375 px-6 py-20 lg:px-10 lg:py-24 xl:px-14">
        <div className="grid gap-14 lg:grid-cols-[0.55fr_1.45fr] lg:gap-24">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-2.25 text-[#8EA5FF]">01</span>

              <span className="h-px w-8 bg-white/15" />
            </div>

            <h2 className="mt-5 font-['Fraunces'] text-3xl font-light text-[#F4F3EF]">
              Hành trình
            </h2>

            <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.2em] text-[#777A84]">
              Từng bước một
            </p>
          </div>

          <div>
            {TIMELINE.map((item, index) => (
              <TimelineItem
                key={item.title}
                item={item}
                index={index}
                isLast={index === TIMELINE.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTimeline;
