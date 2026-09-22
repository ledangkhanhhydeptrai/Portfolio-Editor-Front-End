"use client";

const tech = ["React", "Next.js", "FastAPI", "PostgreSQL", "AI"];
export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="border-t border-white/7 px-6 py-24 lg:px-10 xl:px-14"
    >
      <div className="mx-auto w-full max-w-375">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#7F96F5]">
              03 / Dự án
            </p>
            <h2 className="mt-5 font-['Fraunces'] text-3xl font-light leading-tight lg:text-4xl">
              Những sản phẩm
              <br />
              <span className="text-[#8E91A3]">tôi đã tạo nên.</span>
            </h2>
          </div>
          <p className="text-sm text-[#817E77]">Code · AI · Video</p>
        </div>
        <article className="mt-12 overflow-hidden rounded-2xl border border-white/9 bg-[#101012]">
          <div className="grid lg:grid-cols-[0.85fr_1.15fr]">
            <div className="flex min-h-105 flex-col justify-between p-8 lg:p-10">
              <div>
                <div className="flex gap-2">
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[9px] text-[#A6A39B]">
                    Featured
                  </span>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-[9px] text-[#A6A39B]">
                    Live
                  </span>
                </div>
                <p className="mt-8 font-mono text-[9px] uppercase tracking-[0.22em] text-[#5F5C56]">
                  Full-stack / AI / Web
                </p>
                <h3 className="mt-3 text-3xl font-semibold tracking-tight">
                  Product AI
                </h3>
                <p className="mt-4 text-sm leading-6 text-[#A6A39B]">
                  Nền tảng sản phẩm tích hợp AI.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-md border border-white/8 px-2.5 py-1 font-mono text-[9px] text-[#817E77]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-10 flex gap-3">
                <a
                  href="https://product-ai-front-end.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-[#EDECE8] px-4 py-2.5 text-xs font-medium text-[#0B0B0D] transition hover:bg-white"
                >
                  Xem dự án ↗
                </a>
                <a
                  href="#"
                  className="rounded-lg border border-white/10 px-4 py-2.5 text-xs text-[#C7C4BD] transition hover:border-white/20"
                >
                  GitHub
                </a>
              </div>
            </div>
            <a
              href="https://product-ai-front-end.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-105 border-t border-white/8 bg-[#0A0A0C] p-7 lg:border-l lg:border-t-0"
            >
              <div className="h-full overflow-hidden rounded-xl border border-white/9 bg-[#F8F8FB] text-[#16161A]">
                <div className="flex h-10 items-center gap-2 border-b border-black/5 bg-white px-4">
                  <span className="h-2 w-2 rounded-full bg-black/10" />
                  <span className="h-2 w-2 rounded-full bg-black/10" />
                  <span className="h-2 w-2 rounded-full bg-black/10" />
                  <div className="ml-2 h-5 flex-1 rounded bg-zinc-100" />
                </div>
                <div className="bg-[#302B67] px-7 py-10 text-white">
                  <p className="text-[8px] uppercase tracking-[0.2em] text-white/50">
                    AI-Powered Shopping
                  </p>
                  <h4 className="mt-3 text-xl font-semibold">
                    Discover style
                    <br />
                    curated for you
                  </h4>
                  <p className="mt-3 max-w-xs text-[9px] leading-4 text-white/55">
                    Personalized recommendations based on taste, budget and
                    products.
                  </p>
                </div>
                <div className="grid grid-cols-3 gap-3 p-7">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="h-20 rounded-lg border border-black/5 bg-white shadow-sm"
                    />
                  ))}
                </div>
              </div>
            </a>
          </div>
        </article>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <article className="min-h-72 rounded-2xl border border-white/8 bg-[#101012] p-7">
            <span className="font-mono text-[9px] text-[#7F96F5]">02</span>
            <div className="mt-8 rounded-xl border border-white/7 bg-black/25 p-4">
              <div className="flex gap-1">
                <span className="h-4 w-1/4 rounded bg-white/7" />
                <span className="h-4 w-1/2 rounded bg-[#5B7CFA]/40" />
                <span className="h-4 flex-1 rounded bg-white/7" />
              </div>
            </div>
            <div className="mt-10">
              <p className="text-[9px] uppercase tracking-[0.2em] text-[#5F5C56]">
                Creative
              </p>
              <h3 className="mt-2 text-xl font-semibold">Video Editing</h3>
              <p className="mt-2 text-sm text-[#A6A39B]">
                Storytelling · Short-form · Visual
              </p>
            </div>
          </article>
          <article className="flex min-h-72 flex-col justify-between rounded-2xl border border-white/8 bg-[#101012] p-7">
            <span className="font-mono text-[9px] text-[#7F96F5]">03</span>
            <div>
              <h3 className="text-xl font-semibold">Đang phát triển.</h3>
              <p className="mt-2 text-sm text-[#A6A39B]">
                Nhiều dự án mới đang được xây dựng.
              </p>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
