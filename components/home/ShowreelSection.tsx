"use client";

const reels = [
  ["01", "Commercial", "Hook · Product · Rhythm"],
  ["02", "Short-form", "Pacing · Captions · Retention"],
  ["03", "Storytelling", "Emotion · Visual · Sound"]
];
export default function ShowreelSection() {
  return (
    <section className="border-t border-white/7 px-6 py-24 lg:px-10 xl:px-14">
      <div className="mx-auto w-full max-w-375">
        <div className="flex items-end justify-between gap-8">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#7F96F5]">
              Selected Motion
            </p>
            <h2 className="mt-5 font-['Fraunces'] text-3xl font-light lg:text-4xl">
              Video có nhịp.
              <br />
              <span className="text-[#8E91A3]">Và có mục đích.</span>
            </h2>
          </div>
          <span className="hidden font-mono text-[9px] text-[#6F6C65] md:block">
            SHOWREEL / 2026
          </span>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {reels.map(([no, title, desc]) => (
            <article
              key={no}
              className="group aspect-4/3 rounded-2xl border border-white/8 bg-[#101012] p-6 transition-colors duration-300 hover:border-white/16"
            >
              <div className="flex h-full flex-col justify-between">
                <span className="font-mono text-[9px] text-[#7F96F5]">
                  {no}
                </span>
                <div>
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-xs text-[#A6A39B] transition group-hover:border-white/20 group-hover:text-white">
                    ▶
                  </div>
                  <h3 className="text-lg font-medium">{title}</h3>
                  <p className="mt-1 text-[11px] text-[#817E77]">{desc}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
