"use client";

export default function ContactSection() {
  return (
    <section className="border-t border-white/7 bg-[#0B0B0D] px-6 py-24 lg:px-10 xl:px-14">
      <div className="mx-auto w-full max-w-375">
        {/* SECTION LABEL */}
        <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#7F96F5]">
          05 / Liên hệ
        </p>

        <div className="mt-10 grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-24">
          {/* LEFT */}
          <div>
            <h2 className="max-w-2xl font-['Fraunces'] text-5xl font-light leading-[1.02] tracking-[-0.04em] text-[#EDECE8] sm:text-6xl">
              Tôi đang tìm kiếm
              <br />
              <span className="text-[#9A98A5]">cơ hội tiếp theo.</span>
            </h2>

            <p className="mt-7 max-w-md text-sm leading-6 text-[#918E87]">
              Hiện tôi đang tìm kiếm cơ hội làm việc trong lĩnh vực Video
              Editing và Software Development. Sẵn sàng trao đổi về vị trí phù
              hợp, môi trường làm việc và cơ hội phát triển.
            </p>

            {/* SOCIAL LINKS */}
            <div className="mt-9 flex gap-6 text-[11px] text-[#817E77]">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                GitHub ↗
              </a>

              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-white"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div>
            <a
              href="mailto:ledangkhanhhy@email.com"
              className="group block rounded-2xl border border-white/10 bg-[#101012] p-7 transition-colors duration-300 hover:border-white/18 sm:p-8"
            >
              <div className="flex items-center justify-between">
                <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#5F5C56]">
                  Liên hệ
                </p>

                <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#6F6C65]">
                  Available for work
                </span>
              </div>

              <div className="mt-6 flex items-end justify-between gap-6">
                <div>
                  <h3 className="font-['Fraunces'] text-3xl font-light leading-tight text-[#E4E2DC]">
                    Có vị trí phù hợp?
                    <br />
                    <span className="text-[#9A98A5]">Hãy liên hệ với tôi.</span>
                  </h3>

                  <p className="mt-7 text-sm text-[#A6A39B]">
                    ledangkhanhhy@email.com
                  </p>
                </div>

                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 text-[#918E87] transition duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-white/20 group-hover:text-white">
                  ↗
                </span>
              </div>
            </a>

            {/* STATUS */}
            <div className="mt-5 grid grid-cols-3 border-t border-white/7 pt-5 font-mono text-[8px] uppercase tracking-[0.15em] text-[#5F5C56]">
              <div>
                <p className="text-[#4C4944]">Trạng thái</p>
                <p className="mt-2 normal-case tracking-normal text-[#817E77]">
                  Tìm việc
                </p>
              </div>

              <div className="border-l border-white/7 pl-5">
                <p className="text-[#4C4944]">Lĩnh vực</p>
                <p className="mt-2 normal-case tracking-normal text-[#817E77]">
                  Edit · Dev
                </p>
              </div>

              <div className="border-l border-white/7 pl-5">
                <p className="text-[#4C4944]">Khu vực</p>
                <p className="mt-2 normal-case tracking-normal text-[#817E77]">
                  Việt Nam
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="mt-20 flex items-center justify-between border-t border-white/5 pt-5 font-mono text-[8px] uppercase tracking-[0.18em] text-[#4C4944]">
          <span>KH / Portfolio 2026</span>
          <span>Open to opportunities</span>
        </div>
      </div>
    </section>
  );
}
