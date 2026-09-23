import Link from "next/link";

export default function Footer() {
  const particles = Array.from({ length: 16 }, (_, i) => ({
    id: i,
    left: (i * 37) % 100,
    top: (i * 23) % 100,
    size: 2 + (i % 3),
    delay: (i % 6) * 0.7,
    duration: 6 + (i % 5) * 1.2,
    tone: i % 3 === 0 ? "#8EA5FF" : "#5B7CFA"
  }));

  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-[#08080A]">
      <style>{`
        @keyframes footerFloat {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0.15; }
          50% { transform: translateY(-16px) translateX(4px); opacity: 0.5; }
        }
        @keyframes footerShimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes footerGlowPulse {
          0%, 100% { opacity: 0.06; }
          50% { opacity: 0.16; }
        }
        @keyframes footerGradientDrift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .footer-brand-gradient {
          background: linear-gradient(90deg, #EDECE8, #8EA5FF, #EDECE8);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: footerGradientDrift 7s ease-in-out infinite;
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
        className="pointer-events-none absolute -bottom-40 left-1/2 h-64 w-150 -translate-x-1/2 rounded-full bg-[#5B7CFA]/8 blur-[130px]"
        style={{ animation: "footerGlowPulse 9s ease-in-out infinite" }}
      />
      <div
        className="pointer-events-none absolute -top-20 right-0 h-56 w-56 rounded-full bg-[#8EA5FF]/6 blur-[110px]"
        style={{ animation: "footerGlowPulse 11s ease-in-out infinite 2s" }}
      />
      <div
        className="pointer-events-none absolute -top-16 left-10 h-40 w-40 rounded-full bg-[#5B7CFA]/5 blur-[100px]"
        style={{ animation: "footerGlowPulse 10s ease-in-out infinite 4s" }}
      />

      {/* Particles trôi nổi trang trí */}
      <div className="pointer-events-none absolute inset-0 hidden md:block">
        {particles.map((p) => (
          <span
            key={p.id}
            className="absolute rounded-full"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              width: p.size,
              height: p.size,
              backgroundColor: p.tone,
              boxShadow: `0 0 6px ${p.tone}`,
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
              <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/3 text-[11px] font-bold text-[#EDECE8] transition duration-300 group-hover:rotate-[8deg] group-hover:border-[#5B7CFA]/40 group-hover:bg-[#5B7CFA]/10">
                <span className="relative z-10">KH</span>
                <div className="absolute -bottom-4 -right-4 h-8 w-8 rounded-full bg-[#5B7CFA]/25 blur-lg transition duration-300 group-hover:bg-[#5B7CFA]/45" />
              </div>

              <div>
                <p className="font-['Fraunces'] text-base footer-brand-gradient">
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
            <div className="mt-4 flex w-fit items-center gap-2 rounded-full border border-white/6 bg-white/2 px-3 py-1.5 transition-colors duration-300 hover:border-emerald-400/30 hover:bg-emerald-400/5">
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
                className="group flex w-fit items-center gap-1.5 text-xs text-[#8A887F] transition-all duration-300 hover:translate-x-1 hover:text-[#EDECE8]"
              >
                <span className="h-px w-0 bg-[#5B7CFA] shadow-[0_0_6px_#5B7CFA] transition-all duration-300 group-hover:w-2.5" />
                Giới thiệu
              </a>

              <a
                href="#skills"
                className="group flex w-fit items-center gap-1.5 text-xs text-[#8A887F] transition-all duration-300 hover:translate-x-1 hover:text-[#EDECE8]"
              >
                <span className="h-px w-0 bg-[#5B7CFA] shadow-[0_0_6px_#5B7CFA] transition-all duration-300 group-hover:w-2.5" />
                Kỹ năng
              </a>

              <a
                href="#projects"
                className="group flex w-fit items-center gap-1.5 text-xs text-[#8A887F] transition-all duration-300 hover:translate-x-1 hover:text-[#EDECE8]"
              >
                <span className="h-px w-0 bg-[#5B7CFA] shadow-[0_0_6px_#5B7CFA] transition-all duration-300 group-hover:w-2.5" />
                Dự án
              </a>

              <a
                href="#experience"
                className="group flex w-fit items-center gap-1.5 text-xs text-[#8A887F] transition-all duration-300 hover:translate-x-1 hover:text-[#EDECE8]"
              >
                <span className="h-px w-0 bg-[#5B7CFA] shadow-[0_0_6px_#5B7CFA] transition-all duration-300 group-hover:w-2.5" />
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
                className="group flex w-fit items-center gap-2 text-xs text-[#8A887F] transition-colors duration-300 hover:text-[#EDECE8]"
              >
                GitHub
                <span className="text-[9px] text-[#5B7CFA] transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex w-fit items-center gap-2 text-xs text-[#8A887F] transition-colors duration-300 hover:text-[#EDECE8]"
              >
                LinkedIn
                <span className="text-[9px] text-[#5B7CFA] transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                  ↗
                </span>
              </a>

              <a
                href="mailto:your@email.com"
                className="group flex w-fit items-center gap-2 text-xs text-[#8A887F] transition-colors duration-300 hover:text-[#EDECE8]"
              >
                Email
                <span className="text-[9px] text-[#5B7CFA] transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
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
              className="h-full w-1/4 bg-linear-to-r from-transparent via-[#8EA5FF]/80 to-transparent"
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
              className="group flex items-center gap-2 rounded-full border border-white/[0.07] px-3 py-1.5 text-[11px] text-[#77756F] transition-all duration-300 hover:border-[#5B7CFA]/40 hover:bg-[#5B7CFA]/5 hover:text-[#EDECE8]"
            >
              Lên đầu
              <span className="transition duration-300 group-hover:-translate-y-1">
                ↑
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
