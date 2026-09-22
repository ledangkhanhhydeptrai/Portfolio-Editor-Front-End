"use client";

const rows = [
  [
    "2026 — Nay",
    "Video Editor",
    "Creative",
    "Dựng video · Storytelling · Visual"
  ],
  [
    "Development",
    "Full-stack Developer",
    "Software",
    "React · Next.js · Spring Boot · FastAPI"
  ],
  [
    "Licensed",
    "Driver",
    "Driving",
    "Đã có giấy phép · Đang bổ túc tay lái và tích lũy kinh nghiệm"
  ]
];
export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="border-t border-white/7 px-6 py-24 lg:px-10 xl:px-14"
    >
      <div className="mx-auto w-full max-w-375">
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#7F96F5]">
          04 / Kinh nghiệm
        </p>
        <h2 className="mt-5 font-['Fraunces'] text-3xl font-light lg:text-4xl">
          Hành trình.
        </h2>
        <div className="mt-10 border-t border-white/8">
          {rows.map(([time, role, type, desc]) => (
            <div
              key={role}
              className="grid gap-3 border-b border-white/8 py-7 md:grid-cols-[180px_1fr_1.2fr] md:gap-5"
            >
              <p className="font-mono text-[9px] uppercase tracking-[0.14em] text-[#6F6C65]">
                {time}
              </p>
              <div>
                <h3 className="text-base font-medium">{role}</h3>
                <p className="mt-1 text-[10px] text-[#6F6C65]">{type}</p>
              </div>
              <p className="max-w-lg text-sm leading-6 text-[#A6A39B]">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
