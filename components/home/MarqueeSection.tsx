"use client";

export default function MarqueeSection() {
  const items = [
    "VIDEO EDITING",
    "NEXT.JS",
    "SPRING BOOT",
    "STORYTELLING",
    "POSTGRESQL",
    "MOTION"
  ];
  return (
    <section className="border-y border-white/7 bg-[#0E0E11] px-6 py-4 lg:px-10 xl:px-14">
      <div className="mx-auto flex w-full max-w-375 flex-wrap items-center justify-center gap-x-7 gap-y-2 font-mono text-[9px] uppercase tracking-[0.24em] text-[#6F6C65]">
        {items.map((item, i) => (
          <span key={item} className="flex items-center gap-7">
            {i > 0 && <span className="text-white/15">/</span>}
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
