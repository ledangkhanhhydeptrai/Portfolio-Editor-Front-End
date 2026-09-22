"use client";
export default function ContactSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/7 bg-[#0B0B0D]">
      {/* =====================================================
      BACKGROUND
  ===================================================== */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-[8%] top-1/2 h-120 w-120 -translate-y-1/2 rounded-full bg-[#5B7CFA]/5 blur-[160px]" />
        <div className="absolute right-[12%] top-1/2 h-64 w-64 -translate-y-1/2 rounded-full border border-white/3" />
        <div className="absolute right-[calc(12%+48px)] top-1/2 h-40 w-40 -translate-y-1/2 rounded-full border border-[#5B7CFA]/7" />
        <div className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-[#5B7CFA]/20 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-375 px-6 py-24 lg:px-10 lg:py-28 xl:px-14">
        {/* =====================================================
        SECTION LABEL
    ===================================================== */}
        <div className="mb-14 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="h-px w-8 bg-[#5B7CFA]" />

            <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-[#9BAEFF]">
              Liên hệ
            </span>
          </div>

          <span className="hidden font-mono text-[8px] uppercase tracking-[0.2em] text-[#5F5C56] sm:block">
            05 / Contact
          </span>
        </div>

        {/* =====================================================
        MAIN CONTENT
    ===================================================== */}
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-24">
          {/* ===================================================
          LEFT
      =================================================== */}
          <div>
            <h2 className="max-w-2xl font-['Fraunces'] text-[54px] font-light leading-[0.98] tracking-[-0.045em] text-[#F0EFEA] sm:text-[64px] lg:text-[72px]">
              Cùng tạo nên
              <br />
              <span className="bg-linear-to-r from-[#9BAEFF] via-[#8A96C8] to-[#77756F] bg-clip-text text-transparent">
                điều khác biệt.
              </span>
            </h2>

            <p className="mt-7 max-w-md text-[13px] leading-6 text-[#918E87]">
              Mở cho dự án, công việc và những cơ hội mới. Nếu bạn có một ý
              tưởng thú vị, hãy bắt đầu bằng một lời chào.
            </p>

            {/* SOCIAL */}
            <div className="mt-10 flex flex-wrap items-center gap-7">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-[11px] text-[#918E87] transition hover:text-[#EDECE8]"
              >
                GitHub
                <span className="text-[#5F5C56] transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#9BAEFF]">
                  ↗
                </span>
              </a>

              <span className="h-1 w-1 rounded-full bg-white/10" />

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2 text-[11px] text-[#918E87] transition hover:text-[#EDECE8]"
              >
                LinkedIn
                <span className="text-[#5F5C56] transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#9BAEFF]">
                  ↗
                </span>
              </a>

              <span className="h-1 w-1 rounded-full bg-white/10" />

              <span className="font-mono text-[8px] uppercase tracking-[0.18em] text-[#5F5C56]">
                Việt Nam
              </span>
            </div>
          </div>

          {/* ===================================================
          RIGHT
      =================================================== */}
          <div className="relative">
            {/* DECORATION NUMBER */}
            <span className="pointer-events-none absolute -right-2 -top-20 select-none font-['Fraunces'] text-[120px] leading-none text-white/2">
              05
            </span>

            {/* TOP STATUS */}
            <div className="mb-5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-30" />

                  <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
                </span>

                <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#817E77]">
                  Sẵn sàng hợp tác
                </span>
              </div>

              <span className="font-mono text-[8px] text-[#55524D]">
                AVAILABLE
              </span>
            </div>

            {/* MAIN CONTACT BOX */}
            <a
              href="mailto:your@email.com"
              className="group relative block overflow-hidden rounded-2xl border border-white/8 bg-white/2 p-7 transition duration-500 hover:border-[#5B7CFA]/25 hover:bg-white/3 sm:p-8"
            >
              {/* CARD GLOW */}
              <div className="absolute inset-x-12 top-0 h-px bg-linear-to-r from-transparent via-[#5B7CFA]/50 to-transparent" />
              <div className="pointer-events-none absolute -right-16 -top-20 h-52 w-52 rounded-full bg-[#5B7CFA]/10 blur-[90px] transition duration-500 group-hover:bg-[#5B7CFA]/15" />

              {/* SUBTLE LINES */}
              <div className="pointer-events-none absolute right-8 top-8 h-24 w-24 rounded-full border border-white/5" />

              <div className="pointer-events-none absolute right-13 top-13 h-14 w-14 rounded-full border border-[#5B7CFA]/10" />

              <div className="relative">
                <div className="flex items-start justify-between gap-8">
                  <div>
                    <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#55524C]">
                      Bắt đầu một cuộc trò chuyện
                    </span>

                    <h3 className="mt-5 max-w-md font-['Fraunces'] text-[30px] font-light leading-[1.2] tracking-tight text-[#E4E2DC] sm:text-[34px]">
                      Có một ý tưởng?
                      <br />
                      <span className="text-[#9A98A5]">Hãy kể tôi nghe.</span>
                    </h3>
                  </div>

                  {/* ARROW */}
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-sm text-[#918E87] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:border-[#5B7CFA]/30 group-hover:bg-[#5B7CFA]/10 group-hover:text-[#9BAEFF]">
                    ↗
                  </div>
                </div>

                {/* EMAIL */}
                <div className="mt-12 border-t border-white/7 pt-5">
                  <span className="font-mono text-[7px] uppercase tracking-[0.22em] text-[#5F5C56]">
                    Email
                  </span>

                  <div className="mt-2 flex items-end justify-between gap-5">
                    <p className="text-[15px] text-[#C9C6BF] transition duration-300 group-hover:text-[#EDECE8]">
                      your@email.com
                    </p>

                    <span className="hidden font-mono text-[7px] uppercase tracking-[0.16em] text-[#55524D] sm:block">
                      Click to write
                    </span>
                  </div>
                </div>
              </div>
            </a>

            {/* MINI INFO */}
            <div className="mt-5 grid grid-cols-3 border-t border-white/7 pt-5">
              <div>
                <p className="font-mono text-[7px] uppercase tracking-[0.18em] text-[#55524D]">
                  Công việc
                </p>

                <p className="mt-2 text-[10px] text-[#817E77]">Tự do</p>
              </div>

              <div className="border-l border-white/7 pl-5">
                <p className="font-mono text-[7px] uppercase tracking-[0.18em] text-[#55524D]">
                  Lĩnh vực
                </p>

                <p className="mt-2 text-[10px] text-[#817E77]">Edit · Dev</p>
              </div>

              <div className="border-l border-white/7 pl-5">
                <p className="font-mono text-[7px] uppercase tracking-[0.18em] text-[#55524D]">
                  Phản hồi
                </p>

                <p className="mt-2 text-[10px] text-[#817E77]">
                  Sớm nhất có thể
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
        BOTTOM
    ===================================================== */}
        <div className="mt-20 flex items-center gap-5">
          <span className="font-mono text-[7px] uppercase tracking-[0.22em] text-[#4C4944]">
            KH
          </span>

          <div className="h-px flex-1 bg-white/5" />

          <span className="font-mono text-[7px] uppercase tracking-[0.2em] text-[#4C4944]">
            Editor / Developer / Driver
          </span>
        </div>
      </div>
    </section>
  );
}
