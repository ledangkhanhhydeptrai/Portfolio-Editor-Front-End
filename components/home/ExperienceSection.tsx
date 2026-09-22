"use client";

import { motion } from "motion/react";
export default function ExperienceSection() {
  return (
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
            <p className="font-mono text-[10px] text-[#6F6C65]">Development</p>

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

          {/* DRIVING */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="group relative grid gap-5 border-b border-white/8 py-7 transition duration-300 hover:bg-emerald-400/2 md:grid-cols-[180px_1fr_1.2fr] md:px-4"
          >
            <span className="absolute left-0 top-1/2 hidden h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-emerald-400/50 bg-[#0B0B0D] transition group-hover:bg-emerald-400 group-hover:shadow-[0_0_16px_rgba(52,211,153,0.7)] md:block" />

            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/15 bg-emerald-400/5 px-2.5 py-1 font-mono text-[8px] uppercase tracking-[0.16em] text-emerald-300/70">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-30" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                Coming Soon
              </span>
            </div>

            <div>
              <h3 className="text-base font-medium transition group-hover:text-emerald-300">
                Driver
              </h3>
              <p className="mt-1 text-[10px] text-[#6F6C65]">Driving</p>
            </div>

            <div>
              <p className="max-w-md text-sm leading-6 text-[#A6A39B]">
                Đã có giấy phép lái xe · Đang bổ túc tay lái và tích lũy kinh
                nghiệm thực tế
              </p>
              <div className="mt-3 flex items-center gap-2 font-mono text-[8px] uppercase tracking-[0.14em] text-[#5F5C56]">
                <span className="h-px w-6 bg-emerald-400/40" />
                Licensed · Practice next
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
