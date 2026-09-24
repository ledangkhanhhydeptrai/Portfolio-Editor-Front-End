import React from "react";

import useInView from "../hooks/useInView";

import type {
  TimelineEntry,
} from "../data/aboutData";

interface TimelineItemProps {
  item: TimelineEntry;
  index: number;
  isLast: boolean;
}

const TimelineItem: React.FC<
  TimelineItemProps
> = ({
  item,
  index,
  isLast,
}) => {
  const [ref, inView] =
    useInView<HTMLDivElement>(
      0.5
    );

  return (
    <div
      ref={ref}
      className="relative pl-12"
    >
      {!isLast && (
        <span
          className="absolute left-2.25 top-8 w-px bg-white/12"
          style={{
            height:
              "calc(100% - 0.5rem)",
          }}
        >
          <span
            className={`absolute inset-x-0 top-0 w-px bg-[#718CFF] transition-all duration-700 ${
              inView
                ? "h-full opacity-100"
                : "h-0 opacity-0"
            }`}
          />
        </span>
      )}

      <span
        className={`absolute left-0 top-1 flex h-4.75 w-4.75 items-center justify-center rounded-full border transition-all duration-500 ${
          inView
            ? "border-[#718CFF] bg-[#718CFF]/20"
            : "border-white/15 bg-[#1A1D28]"
        }`}
      >
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            inView
              ? "bg-[#9BADFF]"
              : "bg-slate-500"
          }`}
        />
      </span>

      <div
        className={`pb-12 transition-all duration-700 ${
          inView
            ? "translate-y-0 opacity-100"
            : "translate-y-3 opacity-0"
        }`}
        style={{
          transitionDelay: inView
            ? `${index * 60}ms`
            : "0ms",
        }}
      >
        <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#8EA5FF]">
          {item.tag}
        </span>

        <h3 className="mt-2 font-['Fraunces'] text-xl text-[#F4F3EF]">
          {item.title}
        </h3>

        <p className="mt-2 max-w-md text-xs leading-6 text-[#9A9892]">
          {item.text}
        </p>
      </div>
    </div>
  );
};

export default TimelineItem;