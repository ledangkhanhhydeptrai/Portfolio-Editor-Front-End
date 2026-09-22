"use client";

const skills = [
  ["01", "Video Editor", "Sáng tạo", "Dựng video · Storytelling · Visual", "▶"],
  ["02", "Developer", "Công nghệ", "Frontend · Backend · Database", "</>"],
  [
    "03",
    "Driver",
    "Driving / Licensed",
    "An toàn · Tập trung · Trách nhiệm",
    "DR"
  ]
];
export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="border-t border-white/7 px-6 py-24 lg:px-10 xl:px-14"
    >
      <div className="mx-auto w-full max-w-375">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#7F96F5]">
              02 / Chuyên môn
            </p>
            <h2 className="mt-5 font-['Fraunces'] text-3xl font-light lg:text-4xl">
              Ba thế mạnh.
            </h2>
          </div>
          <p className="text-sm text-[#817E77]">
            Sáng tạo · Công nghệ · Kỷ luật
          </p>
        </div>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {skills.map(([no, title, label, desc, icon]) => (
            <article
              key={no}
              className="min-h-72 rounded-2xl border border-white/8 bg-[#101012] p-7 transition-colors duration-300 hover:border-white/15"
            >
              <div className="flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/2 font-mono text-[10px] text-[#B7B4AD]">
                  {icon}
                </div>
                <span className="font-mono text-[9px] text-[#5F5C56]">
                  {no}
                </span>
              </div>
              <div className="mt-20">
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#7F96F5]">
                  {label}
                </p>
                <h3 className="mt-2 text-xl font-semibold">{title}</h3>
                <p className="mt-3 text-sm text-[#A6A39B]">{desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
