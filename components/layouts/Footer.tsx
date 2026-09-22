import Link from "next/link";

export default function Footer() {
  const particles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    left: (i * 41) % 100,
    top: (i * 29) % 100,
    size: 2 + (i % 2),
    delay: (i % 5) * 0.8,
    duration: 7 + (i % 4) * 1.3
  }));

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-[#08080A]">
      <style>{`
        @keyframes footerFloat {
          0%, 100% { transform: translateY(0); opacity: 0.15; }
          50% { transform: translateY(-14px); opacity: 0.45; }
        }
        @keyframes footerShimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes footerGlowPulse {
          0%, 100% { opacity: 0.06; }
          50% { opacity: 0.14; }
        }
      `}</style>

      {/* LƯỚI NỀN KỸ THUẬT - đồng bộ phong cách với Hero */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(#EDECE8 1px, transparent 1px), linear-gradient(90deg, #EDECE8 1px, transparent 1px)",
          backgroundSize: "56px 56px"
        }}
      />

      {/* BACKGROUND GLOW đôi màu */}
      <div
        className="pointer-events-none absolute -bottom-40 left-1/2 h-64 w-150 -translate-x-1/2 rounded-full bg-[#5B7CFA]/6 blur-[130px]"
        style={{ animation: "footerGlowPulse 9s ease-in-out infinite" }}
      />
      <div
        className="pointer-events-none absolute -top-20 right-0 h-56 w-56 rounded-full bg-[#8EA5FF]/5 blur-[110px]"
        style={{ animation: "footerGlowPulse 11s ease-in-out infinite 2s" }}
      />

      {/* Particles trôi nổi trang trí */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        {particles.map((p) => (
          <span
            key={p.id}
            className="absolute rounded-full bg-[#5B7CFA]"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
              animation: `footerFloat ${p.duration}s ease-in-out ${p.delay}s infinite`
            }}
          />
        ))}
      </div>

      {/* Viền góc trang trí kiểu blueprint */}
      <div className="pointer-events-none absolute left-6 top-6 hidden h-8 w-8 border-l border-t border-white/10 md:block" />
      <div className="pointer-events-none absolute bottom-24 right-6 hidden h-8 w-8 border-b border-r border-white/10 md:block" />

      <div className="relative mx-auto w-full max-w-375 px-6 lg:px-10 xl:px-14">
        {/* ================= MAIN ================= */}
        <div className="grid gap-10 py-9 sm:grid-cols-2 lg:grid-cols-[1.6fr_0.6fr_0.6fr]">
          {/* BRAND */}
          <div>
            <Link href="#home" className="group inline-flex items-center gap-3">
              <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/3 text-[11px] font-bold text-[#EDECE8] transition group-hover:rotate-[8deg] group-hover:border-[#5B7CFA]/40 group-hover:bg-[#5B7CFA]/10">
                <span className="relative z-10">KH</span>
                <div className="absolute -bottom-4 -right-4 h-8 w-8 rounded-full bg-[#5B7CFA]/25 blur-lg transition duration-300 group-hover:bg-[#5B7CFA]/45" />
              </div>

              <div>
                <p className="font-['Fraunces'] text-base text-[#EDECE8]">
                  Khánh Hỷ
                </p>

                <p className="font-mono text-[7px] uppercase tracking-[0.2em] text-[#55524C]">
                  Portfolio cá nhân
                </p>
              </div>
            </Link>

            <p className="mt-4 max-w-xs text-xs leading-5 text-[#68665F]">
              Editor · Developer · Driver
            </p>

            {/* STATUS */}
            <div className="mt-4 flex items-center gap-2 rounded-full border border-white/6 bg-white/2 px-3 py-1.5 w-fit">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-30" />
                <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>

              <span className="text-[11px] text-[#8A887F]">
                Sẵn sàng cho cơ hội mới
              </span>
            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <p className="relative inline-block font-mono text-[8px] uppercase tracking-[0.22em] text-[#55524C]">
              Khám phá
              <span className="absolute -bottom-1.5 left-0 h-px w-4 bg-[#5B7CFA]/60" />
            </p>

            <div className="mt-5 grid gap-2.5">
              <a
                href="#about"
                className="group flex w-fit items-center gap-1.5 text-xs text-[#8A887F] transition hover:translate-x-1 hover:text-[#EDECE8]"
              >
                <span className="h-px w-0 bg-[#5B7CFA] transition-all duration-300 group-hover:w-2.5" />
                Giới thiệu
              </a>

              <a
                href="#skills"
                className="group flex w-fit items-center gap-1.5 text-xs text-[#8A887F] transition hover:translate-x-1 hover:text-[#EDECE8]"
              >
                <span className="h-px w-0 bg-[#5B7CFA] transition-all duration-300 group-hover:w-2.5" />
                Kỹ năng
              </a>

              <a
                href="#projects"
                className="group flex w-fit items-center gap-1.5 text-xs text-[#8A887F] transition hover:translate-x-1 hover:text-[#EDECE8]"
              >
                <span className="h-px w-0 bg-[#5B7CFA] transition-all duration-300 group-hover:w-2.5" />
                Dự án
              </a>

              <a
                href="#experience"
                className="group flex w-fit items-center gap-1.5 text-xs text-[#8A887F] transition hover:translate-x-1 hover:text-[#EDECE8]"
              >
                <span className="h-px w-0 bg-[#5B7CFA] transition-all duration-300 group-hover:w-2.5" />
                Kinh nghiệm
              </a>
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <p className="relative inline-block font-mono text-[8px] uppercase tracking-[0.22em] text-[#55524C]">
              Kết nối
              <span className="absolute -bottom-1.5 left-0 h-px w-4 bg-[#5B7CFA]/60" />
            </p>

            <div className="mt-5 grid gap-2.5">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-fit items-center gap-2 text-xs text-[#8A887F] transition hover:text-[#EDECE8]"
              >
                GitHub
                <span className="text-[9px] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-fit items-center gap-2 text-xs text-[#8A887F] transition hover:text-[#EDECE8]"
              >
                LinkedIn
                <span className="text-[9px] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>

              <a
                href="mailto:your@email.com"
                className="group flex w-fit items-center gap-2 text-xs text-[#8A887F] transition hover:text-[#EDECE8]"
              >
                Email
                <span className="text-[9px] transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* ================= BOTTOM ================= */}
        <div className="relative flex flex-col gap-3 overflow-hidden border-t border-white/[0.07] py-5 sm:flex-row sm:items-center sm:justify-between">
          {/* tia sáng chạy dọc theo đường viền trên */}
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden">
            <div
              className="h-full w-1/4 bg-linear-to-r from-transparent via-[#5B7CFA]/70 to-transparent"
              style={{ animation: "footerShimmer 6s linear infinite" }}
            />
          </div>

          <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-[#4D4A44]">
            © 2026 Khánh Hỷ
          </p>

          <div className="flex items-center gap-5">
            <span className="hidden font-mono text-[8px] uppercase tracking-[0.14em] text-[#4D4A44] sm:block">
              Việt Nam
            </span>

            <a
              href="#home"
              className="group flex items-center gap-2 rounded-full border border-white/[0.07] px-3 py-1.5 text-[11px] text-[#77756F] transition hover:border-[#5B7CFA]/40 hover:text-[#EDECE8]"
            >
              Lên đầu
              <span className="transition group-hover:-translate-y-1">↑</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
