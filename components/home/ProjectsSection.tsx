"use client";
export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden border-t border-white/7 px-6 py-24 lg:px-10 xl:px-14"
    >
      <div className="pointer-events-none absolute -right-48 top-0 h-125 w-125 rounded-full bg-[#5B7CFA]/10 blur-[160px]" />
      <span className="pointer-events-none absolute right-[4%] top-12 select-none font-['Fraunces'] text-[120px] leading-none text-white/2">
        03
      </span>

      <div className="relative mx-auto w-full max-w-375">
        {/* HEADER */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-[#5B7CFA]" />

              <span className="text-[10px] uppercase tracking-[0.3em] text-[#5B7CFA]">
                Dự án
              </span>
            </div>

            <h2 className="mt-5 font-['Fraunces'] text-3xl font-light leading-tight lg:text-4xl">
              Những sản phẩm
              <br />
              <span className="text-[#8E91A3]">tôi đã tạo nên.</span>
            </h2>
          </div>

          <p className="text-sm text-[#A6A39B]">Code · AI · Video · Sáng tạo</p>
        </div>

        {/* ==================================================
              PRODUCT AI
          ================================================== */}
        <article className="kh-shimmer group relative mt-12 overflow-hidden rounded-[26px] border border-white/8 bg-[#101012] shadow-2xl shadow-black/20 transition duration-500 hover:border-[#5B7CFA]/20">
          <div className="absolute inset-x-20 top-0 z-20 h-px bg-linear-to-r from-transparent via-[#5B7CFA]/60 to-transparent" />
          <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#5B7CFA]/10 blur-[100px] transition duration-700 group-hover:bg-[#5B7CFA]/20" />

          <div className="relative grid min-h-115 lg:grid-cols-[0.8fr_1.2fr]">
            {/* LEFT */}
            <div className="flex flex-col justify-between p-8 lg:p-10">
              <div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-[#5B7CFA]/30 bg-[#5B7CFA]/10 px-3 py-1 text-[10px] font-medium text-[#9BAEFF]">
                    Tiêu biểu
                  </span>

                  <span className="flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-[10px] text-[#A6A39B]">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Live
                  </span>
                </div>

                <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.25em] text-[#6F6C65]">
                  Full-stack / AI / Web
                </p>

                <h3 className="mt-3 text-3xl font-semibold tracking-tight lg:text-4xl">
                  Product AI
                </h3>

                <p className="mt-4 text-sm leading-6 text-[#A6A39B]">
                  Nền tảng sản phẩm tích hợp AI.
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {["React", "Next.js", "FastAPI", "PostgreSQL", "AI"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="rounded-md border border-white/10 bg-white/3 px-2.5 py-1 font-mono text-[10px] text-[#A6A39B]"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href="https://product-ai-front-end.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/button inline-flex items-center gap-2 rounded-lg bg-[#EDECE8] px-4 py-2.5 text-xs font-medium text-[#0B0B0D] transition hover:bg-white"
                >
                  Xem dự án
                  <span className="transition group-hover/button:translate-x-1 group-hover/button:-translate-y-1">
                    ↗
                  </span>
                </a>

                <a
                  href="#"
                  className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2.5 text-xs transition hover:border-white/30 hover:bg-white/3"
                >
                  GitHub
                  <span className="text-[#A6A39B]">→</span>
                </a>
              </div>
            </div>

            {/* ==================================================
                  PRODUCT VISUAL
              ================================================== */}
            <a
              href="https://product-ai-front-end.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative min-h-105 overflow-hidden border-t border-white/8 bg-[#08080A] lg:border-l lg:border-t-0"
            >
              {/* GRID */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage:
                    "linear-gradient(#EDECE8 1px, transparent 1px), linear-gradient(90deg, #EDECE8 1px, transparent 1px)",
                  backgroundSize: "35px 35px"
                }}
              />

              {/* BROWSER */}
              <div className="absolute left-8 -right-10 top-9 overflow-hidden rounded-l-2xl border border-white/10 bg-[#111114] shadow-2xl shadow-black/70 transition duration-700 group-hover:-translate-x-3 group-hover:-translate-y-2">
                {/* BROWSER HEADER */}
                <div className="flex h-11 items-center gap-4 border-b border-white/10 bg-[#151518] px-4">
                  <div className="flex gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-red-400/70" />
                    <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
                    <span className="h-2 w-2 rounded-full bg-green-400/70" />
                  </div>

                  <div className="flex h-6 flex-1 items-center rounded-md border border-white/5 bg-black/30 px-3 font-mono text-[9px] text-[#6F6C65]">
                    product-ai-front-end.vercel.app
                  </div>
                </div>

                {/* MOCK WEBSITE */}
                <div className="min-h-100 bg-[#F8F8FB] text-[#16161A]">
                  {/* APP NAV */}
                  <div className="flex h-12 items-center justify-between border-b border-black/5 bg-white px-6">
                    <div className="flex items-center gap-2">
                      <div className="flex h-6 w-6 items-center justify-center rounded-md bg-[#5B5BF7] text-[9px] font-bold text-white">
                        A
                      </div>

                      <span className="text-xs font-semibold">AuraAI</span>
                    </div>

                    <div className="flex gap-4 text-[8px] text-zinc-400">
                      <span>Explore</span>
                      <span>Categories</span>
                      <span>About</span>
                    </div>
                  </div>

                  {/* WEBSITE HERO */}
                  <div className="relative overflow-hidden bg-[#272260] px-7 py-8 text-white">
                    <div className="absolute right-8 top-5 h-28 w-28 rounded-full border-20 border-white/4" />

                    <p className="text-[8px] uppercase tracking-[0.2em] text-violet-200/70">
                      AI-Powered Shopping
                    </p>

                    <h4 className="mt-3 max-w-65 text-xl font-semibold leading-tight">
                      Discover style
                      <br />
                      curated for you
                    </h4>

                    <p className="mt-3 max-w-65 text-[8px] leading-4 text-violet-100/60">
                      Find personalized recommendations based on your taste,
                      budget and trending products.
                    </p>

                    <div className="mt-4 flex gap-2">
                      <span className="rounded-md bg-[#6C63FF] px-3 py-1.5 text-[7px]">
                        Explore products
                      </span>

                      <span className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-[7px]">
                        Browse all
                      </span>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="px-7 py-5">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[8px] text-zinc-400">
                          Browse categories
                        </p>

                        <p className="mt-1 text-[10px] font-semibold">
                          Available Categories
                        </p>
                      </div>

                      <span className="text-[7px] text-[#5B5BF7]">
                        View all →
                      </span>
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-3">
                      <div className="h-16 rounded-lg border border-black/5 bg-white shadow-sm">
                        <div className="m-3 h-6 rounded bg-zinc-100" />
                      </div>

                      <div className="h-16 rounded-lg border border-black/5 bg-white shadow-sm">
                        <div className="m-3 h-6 rounded bg-violet-50" />
                      </div>

                      <div className="h-16 rounded-lg border border-black/5 bg-white shadow-sm">
                        <div className="m-3 h-6 rounded bg-blue-50" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* OPEN */}
              <div className="absolute bottom-6 right-6 flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm text-black shadow-xl transition duration-300 group-hover:scale-110">
                ↗
              </div>
            </a>
          </div>
        </article>

        {/* ==================================================
              SECONDARY PROJECTS
          ================================================== */}
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {/* VIDEO */}
          <article className="group relative min-h-80 overflow-hidden rounded-3xl border border-white/8 bg-[#101012] p-7 transition duration-500 hover:-translate-y-1 hover:border-white/20">
            <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full bg-violet-500/10 blur-[90px]" />

            <div className="relative flex h-full flex-col justify-between">
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] text-[#5B7CFA]">
                    02
                  </span>

                  <span className="text-lg text-[#6F6C65] transition group-hover:text-white">
                    ↗
                  </span>
                </div>

                {/* TIMELINE */}
                <div className="mt-7 rounded-xl border border-white/8 bg-black/40 p-4">
                  <div className="flex justify-between font-mono text-[8px] text-[#6F6C65]">
                    <span>SEQUENCE_01</span>
                    <span>00:14:28:00</span>
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="flex gap-1">
                      <div className="h-5 w-[25%] rounded bg-[#5B7CFA]/25" />
                      <div className="h-5 w-[48%] rounded bg-[#5B7CFA]/65" />
                      <div className="h-5 flex-1 rounded bg-[#5B7CFA]/20" />
                    </div>

                    <div className="flex gap-1">
                      <div className="h-4 w-[60%] rounded bg-emerald-400/20" />
                      <div className="h-4 flex-1 rounded bg-white/5" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <p className="text-[10px] uppercase tracking-[0.25em] text-[#6F6C65]">
                  Sáng tạo
                </p>

                <h3 className="mt-2 text-xl font-semibold">Video Editing</h3>

                <p className="mt-2 text-sm text-[#A6A39B]">
                  Storytelling · Short-form · Visual
                </p>
              </div>
            </div>
          </article>

          {/* MORE */}
          <article className="group relative min-h-80 overflow-hidden rounded-3xl border border-white/8 bg-[#101012] p-7 transition duration-500 hover:-translate-y-1 hover:border-white/20">
            <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-[#5B7CFA]/10 blur-[100px]" />

            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-[#5B7CFA]">03</span>

                <span className="text-lg text-[#6F6C65] transition group-hover:rotate-90 group-hover:text-white">
                  +
                </span>
              </div>

              <div>
                <p className="font-['Fraunces'] text-5xl font-light text-white/6">
                  MORE
                </p>

                <h3 className="mt-3 text-xl font-semibold">Đang phát triển.</h3>

                <p className="mt-2 text-sm text-[#A6A39B]">
                  Nhiều dự án mới đang được xây dựng.
                </p>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
