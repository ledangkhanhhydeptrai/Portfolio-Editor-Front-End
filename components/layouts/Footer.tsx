import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.07] bg-[#08080A]">
      {/* BACKGROUND GLOW */}
      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-64 w-150 -translate-x-1/2 rounded-full bg-[#5B7CFA]/6 blur-[130px]" />

      <div className="relative mx-auto w-full max-w-375 px-6 lg:px-10 xl:px-14">
        {/* ================= MAIN ================= */}
        <div className="grid gap-10 py-9 sm:grid-cols-2 lg:grid-cols-[1.6fr_0.6fr_0.6fr]">
          {/* BRAND */}
          <div>
            <Link href="#home" className="group inline-flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/3 text-[11px] font-bold text-[#EDECE8] transition group-hover:border-[#5B7CFA]/40 group-hover:bg-[#5B7CFA]/10">
                KH
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
            <div className="mt-4 flex items-center gap-2">
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
            <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-[#55524C]">
              Khám phá
            </p>

            <div className="mt-4 grid gap-2.5">
              <a
                href="#about"
                className="w-fit text-xs text-[#8A887F] transition hover:translate-x-1 hover:text-[#EDECE8]"
              >
                Giới thiệu
              </a>

              <a
                href="#skills"
                className="w-fit text-xs text-[#8A887F] transition hover:translate-x-1 hover:text-[#EDECE8]"
              >
                Kỹ năng
              </a>

              <a
                href="#projects"
                className="w-fit text-xs text-[#8A887F] transition hover:translate-x-1 hover:text-[#EDECE8]"
              >
                Dự án
              </a>

              <a
                href="#experience"
                className="w-fit text-xs text-[#8A887F] transition hover:translate-x-1 hover:text-[#EDECE8]"
              >
                Kinh nghiệm
              </a>
            </div>
          </div>

          {/* SOCIAL */}
          <div>
            <p className="font-mono text-[8px] uppercase tracking-[0.22em] text-[#55524C]">
              Kết nối
            </p>

            <div className="mt-4 grid gap-2.5">
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
        <div className="flex flex-col gap-3 border-t border-white/[0.07] py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[8px] uppercase tracking-[0.14em] text-[#4D4A44]">
            © 2026 Khánh Hỷ
          </p>

          <div className="flex items-center gap-5">
            <span className="hidden font-mono text-[8px] uppercase tracking-[0.14em] text-[#4D4A44] sm:block">
              Việt Nam
            </span>

            <a
              href="#home"
              className="group flex items-center gap-2 text-[11px] text-[#77756F] transition hover:text-[#EDECE8]"
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
