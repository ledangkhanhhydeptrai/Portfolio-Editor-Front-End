"use client";

import Footer from "@/components/layouts/Footer";
import Header from "@/components/layouts/Header";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#0B0B0D] text-[#F0EFEA] selection:bg-[#5B7CFA] selection:text-white">
      {/* ======================================================
          BACKGROUND
      ====================================================== */}
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute -left-40 top-40 h-125 w-125 rounded-full bg-[#5B7CFA]/5 blur-[160px]" />
        <div className="absolute -right-40 top-175 h-125 w-125 rounded-full bg-violet-500/5 blur-[160px]" />
      </div>

      <Header />

      {/* ======================================================
          HERO
      ====================================================== */}
      <section
        id="home"
        className="relative min-h-screen overflow-hidden px-6 pt-24 lg:px-10 xl:px-14"
      >
        {/* GRID */}
        <div
          className="pointer-events-none absolute inset-0 opacity-3"
          style={{
            backgroundImage:
              "linear-gradient(#EDECE8 1px, transparent 1px), linear-gradient(90deg, #EDECE8 1px, transparent 1px)",
            backgroundSize: "45px 45px",
            maskImage: "linear-gradient(to bottom, black, transparent 85%)"
          }}
        />

        {/* GLOW / DECOR */}
        <div className="pointer-events-none absolute -right-20 top-20 h-125 w-125 rounded-full bg-[#5B7CFA]/15 blur-[150px]" />
        <div className="pointer-events-none absolute left-[8%] top-32 h-40 w-40 rounded-full border border-white/5" />
        <div className="pointer-events-none absolute left-[calc(8%+32px)] top-40 h-24 w-24 rounded-full border border-[#5B7CFA]/10" />
        <div className="pointer-events-none absolute bottom-16 right-[7%] font-mono text-[8px] uppercase tracking-[0.3em] text-white/10">
          KH / PORTFOLIO / 2026
        </div>

        <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] w-full max-w-375 items-center gap-10 py-10 lg:grid-cols-12 xl:gap-14">
          {/* LEFT */}
          <div className="lg:col-span-7 xl:pr-4">
            {/* BADGE */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#5B7CFA]/20 bg-[#5B7CFA]/5 px-3 py-1.5 text-[11px] text-[#9BAEFF]">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5B7CFA] opacity-50" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#5B7CFA]" />
              </span>
              Editor · Developer · Driver
            </div>

            {/* TITLE */}
            <h1 className="mt-7 font-['Fraunces'] text-5xl font-light leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-[64px] xl:text-[72px]">
              Khánh Hỷ
              <span className="mt-1 block bg-linear-to-r from-[#AEB9FF] via-[#8EA5FF] to-[#77756F] bg-clip-text text-transparent">
                Sáng tạo.
              </span>
              <span className="block">Xây dựng. Chuyển động.</span>
            </h1>

            {/* DESCRIPTION */}
            <p className="mt-6 max-w-xl text-sm leading-7 text-[#A6A39B] lg:text-[15px]">
              Kết hợp hình ảnh, công nghệ và trải nghiệm để tạo nên những sản
              phẩm có dấu ấn riêng.
            </p>

            {/* BUTTONS */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group flex items-center gap-2 rounded-lg bg-[#5B7CFA] px-5 py-2.5 text-xs font-medium text-white transition duration-300 hover:bg-[#6B88FF]"
              >
                Xem dự án
                <span className="transition group-hover:translate-x-1">→</span>
              </a>

              <a
                href="#about"
                className="rounded-lg border border-white/10 bg-white/2 px-5 py-2.5 text-xs font-medium transition hover:border-white/20 hover:bg-white/4"
              >
                Về tôi
              </a>
            </div>

            {/* MINI INFO */}
            <div className="mt-10 flex flex-wrap gap-10 border-t border-white/7 pt-5">
              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#6F6C65]">
                  Định hướng
                </p>

                <p className="mt-1.5 text-xs">Sáng tạo + Công nghệ</p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#6F6C65]">
                  Khu vực
                </p>

                <p className="mt-1.5 text-xs">Việt Nam</p>
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#6F6C65]">
                  Trạng thái
                </p>

                <p className="mt-1.5 flex items-center gap-2 text-xs">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Sẵn sàng
                </p>
              </div>
            </div>
          </div>

          {/* ==================================================
              HERO RIGHT
          ================================================== */}
          <div className="relative lg:col-span-5 lg:pl-2">
            <div className="absolute -inset-10 rounded-full bg-[#5B7CFA]/10 blur-[100px]" />

            <div className="group/workspace relative w-full overflow-hidden rounded-[22px] border border-white/10 bg-[#101012] shadow-2xl shadow-black/50 transition duration-500 hover:-translate-y-1 hover:border-[#5B7CFA]/25">
              <div className="pointer-events-none absolute inset-x-12 top-0 h-px bg-linear-to-r from-transparent via-[#5B7CFA]/60 to-transparent" />
              <div className="pointer-events-none absolute -right-20 top-20 h-52 w-52 rounded-full bg-[#5B7CFA]/8 blur-[90px]" />
              {/* WINDOW HEADER */}
              <div className="flex h-12 items-center justify-between border-b border-white/7 px-5">
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-red-400/50" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400/50" />
                  <span className="h-2 w-2 rounded-full bg-green-400/50" />
                </div>

                <span className="font-mono text-[9px] text-[#6F6C65]">
                  khanhhy.workspace
                </span>
              </div>

              <div className="p-4">
                {/* EDITING */}
                <div className="rounded-xl border border-white/7 bg-black/30 p-3.5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-md bg-violet-500/10 text-[10px]">
                        ▶
                      </span>

                      <span className="text-[11px] font-medium">
                        Editing Timeline
                      </span>
                    </div>

                    <span className="font-mono text-[8px] text-[#5B7CFA]">
                      00:14:28:00
                    </span>
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="flex gap-1">
                      <div className="h-4 w-[20%] rounded bg-[#5B7CFA]/20" />
                      <div className="h-4 w-[50%] rounded bg-[#5B7CFA]/60" />
                      <div className="h-4 flex-1 rounded bg-[#5B7CFA]/20" />
                    </div>

                    <div className="flex gap-1">
                      <div className="h-3.5 w-[65%] rounded bg-emerald-500/20" />
                      <div className="h-3.5 flex-1 rounded bg-white/5" />
                    </div>
                  </div>
                </div>

                {/* DEVELOPER */}
                <div className="mt-2.5 rounded-xl border border-white/7 bg-black/30 p-3.5 font-mono text-[10px]">
                  <div className="flex justify-between text-[#6F6C65]">
                    <span>portfolio.ts</span>

                    <span className="text-emerald-400">● running</span>
                  </div>

                  <div className="mt-3 space-y-1 text-[#A6A39B]">
                    <p>
                      <span className="text-[#C678DD]">const</span> creator ={" "}
                      <span className="text-[#98C379]">
                        &quot;Khánh Hỷ&quot;
                      </span>
                      ;
                    </p>

                    <p>
                      <span className="text-[#C678DD]">const</span> stack = [
                    </p>

                    <p className="pl-5 text-[#98C379]">&quot;Next.js&quot;,</p>

                    <p className="pl-5 text-[#98C379]">
                      &quot;Spring Boot&quot;,
                    </p>

                    <p className="pl-5 text-[#98C379]">
                      &quot;PostgreSQL&quot;
                    </p>

                    <p>];</p>
                  </div>
                </div>

                {/* DRIVER */}
                <div className="mt-2.5 flex items-center justify-between rounded-xl border border-white/7 bg-black/20 p-3.5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/7 bg-white/3 text-sm">
                      🚗
                    </div>

                    <div>
                      <p className="text-[11px] font-medium">Driver</p>

                      <p className="mt-0.5 text-[9px] text-[#6F6C65]">
                        Tập trung · An toàn · Tin cậy
                      </p>
                    </div>
                  </div>

                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </div>
              </div>

              {/* BOTTOM */}
              <div className="flex items-center justify-between border-t border-white/7 px-5 py-3 text-[9px] text-[#6F6C65]">
                <span>Editor / Developer / Driver</span>

                <span>2026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          ABOUT
      ====================================================== */}
      <section
        id="about"
        className="relative overflow-hidden border-t border-white/7 px-6 py-24 lg:px-10 xl:px-14"
      >
        <div className="pointer-events-none absolute -left-40 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-[#5B7CFA]/5 blur-[140px]" />
        <span className="pointer-events-none absolute right-[5%] top-12 select-none font-['Fraunces'] text-[120px] leading-none text-white/2">
          01
        </span>
        <div className="relative mx-auto grid w-full max-w-375 gap-14 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-[#5B7CFA]" />

              <span className="text-[10px] uppercase tracking-[0.3em] text-[#5B7CFA]">
                Giới thiệu
              </span>
            </div>

            <h2 className="mt-5 font-['Fraunces'] text-3xl font-light leading-tight lg:text-4xl">
              Nhiều hơn
              <br />
              một hướng đi.
            </h2>
          </div>

          <div>
            <p className="max-w-4xl font-['Fraunces'] text-2xl font-light leading-[1.45] text-[#E0DED8] sm:text-3xl lg:text-[34px]">
              Tôi thích tạo ra những thứ có thể
              <span className="text-[#5B7CFA]"> nhìn thấy</span>,
              <span className="text-[#5B7CFA]"> sử dụng</span> và
              <span className="text-[#5B7CFA]"> cảm nhận</span>.
            </p>

            <div className="mt-8 grid gap-4 border-t border-white/7 pt-7 sm:grid-cols-2">
              <div className="group relative overflow-hidden rounded-2xl border border-white/7 bg-white/2 p-5 transition duration-300 hover:border-[#5B7CFA]/20 hover:bg-white/3">
                <span className="font-mono text-[8px] text-[#5B7CFA]">
                  01 / BUILD
                </span>
                <p className="mt-3 text-sm leading-6 text-[#A6A39B]">
                  Lập trình biến ý tưởng thành sản phẩm số.
                </p>
                <div className="absolute bottom-0 left-5 h-px w-0 bg-[#5B7CFA] transition-all duration-500 group-hover:w-16" />
              </div>

              <div className="group relative overflow-hidden rounded-2xl border border-white/7 bg-white/2 p-5 transition duration-300 hover:border-violet-400/20 hover:bg-white/3">
                <span className="font-mono text-[8px] text-violet-300/70">
                  02 / CREATE
                </span>
                <p className="mt-3 text-sm leading-6 text-[#A6A39B]">
                  Video biến hình ảnh thành câu chuyện.
                </p>
                <div className="absolute bottom-0 left-5 h-px w-0 bg-violet-400 transition-all duration-500 group-hover:w-16" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================
          SKILLS
      ====================================================== */}
      <section
        id="skills"
        className="relative overflow-hidden border-t border-white/7 px-6 py-24 lg:px-10 xl:px-14"
      >
        <div className="pointer-events-none absolute right-0 top-1/3 h-100 w-100 rounded-full bg-violet-500/5 blur-[150px]" />
        <span className="pointer-events-none absolute left-[4%] top-12 select-none font-['Fraunces'] text-[120px] leading-none text-white/2">
          02
        </span>
        <div className="relative mx-auto w-full max-w-375">
          {/* HEADER */}
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-[#5B7CFA]" />

                <span className="text-[10px] uppercase tracking-[0.3em] text-[#5B7CFA]">
                  Chuyên môn
                </span>
              </div>

              <h2 className="mt-5 font-['Fraunces'] text-3xl font-light lg:text-4xl">
                Ba thế mạnh.
              </h2>
            </div>

            <p className="text-sm text-[#A6A39B]">Ba lĩnh vực. Một tư duy.</p>
          </div>

          {/* CARDS */}
          <div className="mt-12 grid gap-4 lg:grid-cols-3">
            {/* EDITOR */}
            <article className="group relative min-h-80 overflow-hidden rounded-3xl border border-white/8 bg-[#101012] p-7 shadow-xl shadow-black/10 transition duration-500 hover:-translate-y-2 hover:border-violet-400/20 hover:shadow-2xl hover:shadow-violet-950/10">
              <div className="absolute inset-x-7 top-0 h-px bg-linear-to-r from-transparent via-violet-400/30 to-transparent" />
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-500/0 blur-[80px] transition duration-500 group-hover:bg-violet-500/10" />

              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/3 text-sm">
                    ▶
                  </div>

                  <span className="font-mono text-[10px] text-[#6F6C65]">
                    01
                  </span>
                </div>

                <div className="mt-20">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-violet-300/60">
                    Sáng tạo
                  </p>

                  <h3 className="mt-2 text-xl font-semibold">Video Editor</h3>

                  <p className="mt-3 text-sm text-[#A6A39B]">
                    Dựng video · Storytelling · Visual
                  </p>
                </div>
              </div>
            </article>

            {/* DEVELOPER */}
            <article className="group relative min-h-80 overflow-hidden rounded-3xl border border-white/8 bg-[#101012] p-7 shadow-xl shadow-black/10 transition duration-500 hover:-translate-y-2 hover:border-[#5B7CFA]/30 hover:shadow-2xl hover:shadow-blue-950/10">
              <div className="absolute inset-x-7 top-0 h-px bg-linear-to-r from-transparent via-[#5B7CFA]/40 to-transparent" />
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#5B7CFA]/0 blur-[80px] transition duration-500 group-hover:bg-[#5B7CFA]/10" />

              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/3 font-mono text-xs">
                    &lt;/&gt;
                  </div>

                  <span className="font-mono text-[10px] text-[#6F6C65]">
                    02
                  </span>
                </div>

                <div className="mt-20">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-[#9BAEFF]">
                    Công nghệ
                  </p>

                  <h3 className="mt-2 text-xl font-semibold">Developer</h3>

                  <p className="mt-3 text-sm text-[#A6A39B]">
                    Frontend · Backend · Database
                  </p>
                </div>
              </div>
            </article>

            {/* DRIVER */}
            <article className="group relative min-h-80 overflow-hidden rounded-3xl border border-white/8 bg-[#101012] p-7 shadow-xl shadow-black/10 transition duration-500 hover:-translate-y-2 hover:border-emerald-400/20 hover:shadow-2xl hover:shadow-emerald-950/10">
              <div className="absolute inset-x-7 top-0 h-px bg-linear-to-r from-transparent via-emerald-400/30 to-transparent" />
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-500/0 blur-[80px] transition duration-500 group-hover:bg-emerald-500/10" />

              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/3">
                    🚗
                  </div>

                  <span className="font-mono text-[10px] text-[#6F6C65]">
                    03
                  </span>
                </div>

                <div className="mt-20">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-emerald-300/60">
                    Thực tế
                  </p>

                  <h3 className="mt-2 text-xl font-semibold">Driver</h3>

                  <p className="mt-3 text-sm text-[#A6A39B]">
                    An toàn · Tập trung · Trách nhiệm
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ======================================================
          PROJECTS
      ====================================================== */}
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

            <p className="text-sm text-[#A6A39B]">
              Code · AI · Video · Sáng tạo
            </p>
          </div>

          {/* ==================================================
              PRODUCT AI
          ================================================== */}
          <article className="group relative mt-12 overflow-hidden rounded-[26px] border border-white/8 bg-[#101012] shadow-2xl shadow-black/20 transition duration-500 hover:border-[#5B7CFA]/20">
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
                  <span className="font-mono text-[10px] text-[#5B7CFA]">
                    03
                  </span>

                  <span className="text-lg text-[#6F6C65] transition group-hover:rotate-90 group-hover:text-white">
                    +
                  </span>
                </div>

                <div>
                  <p className="font-['Fraunces'] text-5xl font-light text-white/6">
                    MORE
                  </p>

                  <h3 className="mt-3 text-xl font-semibold">
                    Đang phát triển.
                  </h3>

                  <p className="mt-2 text-sm text-[#A6A39B]">
                    Nhiều dự án mới đang được xây dựng.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ======================================================
          EXPERIENCE
      ====================================================== */}
      <section
        id="experience"
        className="relative overflow-hidden border-t border-white/7 px-6 py-24 lg:px-10 xl:px-14"
      >
        <div className="pointer-events-none absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-[#5B7CFA]/5 blur-[150px]" />
        <span className="pointer-events-none absolute right-[5%] top-12 select-none font-['Fraunces'] text-[120px] leading-none text-white/2">
          04
        </span>
        <div className="relative mx-auto w-full max-w-375">
          <div className="flex items-center gap-3">
            <span className="h-px w-7 bg-[#5B7CFA]" />

            <span className="text-[10px] uppercase tracking-[0.3em] text-[#5B7CFA]">
              Kinh nghiệm
            </span>
          </div>

          <h2 className="mt-5 font-['Fraunces'] text-3xl font-light lg:text-4xl">
            Hành trình.
          </h2>

          <div className="mt-10 border-t border-white/8">
            {/* VIDEO */}
            <div className="group relative grid gap-5 border-b border-white/8 py-7 transition duration-300 hover:bg-white/2 md:grid-cols-[180px_1fr_1.2fr] md:px-4">
              <span className="absolute left-0 top-1/2 hidden h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5B7CFA] shadow-[0_0_16px_rgba(91,124,250,0.8)] md:block" />
              <p className="font-mono text-[10px] text-[#6F6C65]">2026 — Nay</p>

              <div>
                <h3 className="text-base font-medium transition group-hover:text-[#9BAEFF]">
                  Video Editor
                </h3>

                <p className="mt-1 text-[10px] text-[#6F6C65]">Creative</p>
              </div>

              <p className="max-w-md text-sm text-[#A6A39B]">
                Dựng video · Storytelling · Visual
              </p>
            </div>

            {/* DEVELOPMENT */}
            <div className="group relative grid gap-5 border-b border-white/8 py-7 transition duration-300 hover:bg-white/2 md:grid-cols-[180px_1fr_1.2fr] md:px-4">
              <span className="absolute left-0 top-1/2 hidden h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20 transition group-hover:bg-[#5B7CFA] md:block" />
              <p className="font-mono text-[10px] text-[#6F6C65]">
                Development
              </p>

              <div>
                <h3 className="text-base font-medium transition group-hover:text-[#9BAEFF]">
                  Full-stack Developer
                </h3>

                <p className="mt-1 text-[10px] text-[#6F6C65]">Software</p>
              </div>

              <p className="max-w-md text-sm text-[#A6A39B]">
                React · Next.js · Spring Boot · FastAPI
              </p>
            </div>
          </div>
        </div>
      </section>

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

      <Footer />
    </main>
  );
}
