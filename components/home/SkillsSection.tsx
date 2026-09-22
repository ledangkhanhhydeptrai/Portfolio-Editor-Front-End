"use client";

import { motion } from "motion/react";
export default function SkillsSection() {
  return (
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
          <motion.article
            initial={{ opacity: 0, y: 55, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.65,
              delay: 0 * 0.12,
              ease: [0.22, 1, 0.36, 1]
            }}
            whileHover={{ y: -12, scale: 1.015 }}
            className="group relative min-h-80 overflow-hidden rounded-3xl border border-white/8 bg-[#101012] p-7 shadow-xl shadow-black/10 transition duration-500 hover:-translate-y-2 hover:border-violet-400/20 hover:shadow-2xl hover:shadow-violet-950/10"
          >
            <div className="absolute inset-x-7 top-0 h-px bg-linear-to-r from-transparent via-violet-400/30 to-transparent" />
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-violet-500/0 blur-[80px] transition duration-500 group-hover:bg-violet-500/10" />

            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/3 text-sm">
                  ▶
                </div>

                <span className="font-mono text-[10px] text-[#6F6C65]">01</span>
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
          </motion.article>

          {/* DEVELOPER */}
          <motion.article
            initial={{ opacity: 0, y: 55, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.65,
              delay: 1 * 0.12,
              ease: [0.22, 1, 0.36, 1]
            }}
            whileHover={{ y: -12, scale: 1.015 }}
            className="group relative min-h-80 overflow-hidden rounded-3xl border border-white/8 bg-[#101012] p-7 shadow-xl shadow-black/10 transition duration-500 hover:-translate-y-2 hover:border-[#5B7CFA]/30 hover:shadow-2xl hover:shadow-blue-950/10"
          >
            <div className="absolute inset-x-7 top-0 h-px bg-linear-to-r from-transparent via-[#5B7CFA]/40 to-transparent" />
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-[#5B7CFA]/0 blur-[80px] transition duration-500 group-hover:bg-[#5B7CFA]/10" />

            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/3 font-mono text-xs">
                  &lt;/&gt;
                </div>

                <span className="font-mono text-[10px] text-[#6F6C65]">02</span>
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
          </motion.article>

          {/* DRIVER */}
          <motion.article
            initial={{ opacity: 0, y: 55, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.65,
              delay: 2 * 0.12,
              ease: [0.22, 1, 0.36, 1]
            }}
            whileHover={{ y: -12, scale: 1.015 }}
            className="group relative min-h-80 overflow-hidden rounded-3xl border border-white/8 bg-[#101012] p-7 shadow-xl shadow-black/10 transition duration-500 hover:-translate-y-2 hover:border-emerald-400/20 hover:shadow-2xl hover:shadow-emerald-950/10"
          >
            <div className="absolute inset-x-7 top-0 h-px bg-linear-to-r from-transparent via-emerald-400/30 to-transparent" />
            <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-emerald-500/0 blur-[80px] transition duration-500 group-hover:bg-emerald-500/10" />

            <div className="relative flex h-full flex-col justify-between">
              <div className="flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/3">
                  🚗
                </div>

                <span className="font-mono text-[10px] text-[#6F6C65]">03</span>
              </div>

              <div className="mt-14">
                <p className="text-[10px] uppercase tracking-[0.2em] text-emerald-300/60">
                  Driving / Licensed
                </p>

                <h3 className="mt-2 text-xl font-semibold">Driver</h3>

                <p className="mt-3 text-sm text-[#A6A39B]">
                  An toàn · Tập trung · Trách nhiệm
                </p>

                <div className="mt-5 overflow-hidden rounded-xl border border-emerald-400/10 bg-emerald-400/3 p-3">
                  <div className="flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.16em] text-[#6F6C65]">
                    <span>Driving skill</span>
                    <span className="text-emerald-300/70">Licensed</span>
                  </div>

                  <div className="relative mt-3 h-8">
                    <div className="absolute left-1 right-1 top-1/2 h-px -translate-y-1/2 bg-linear-to-r from-emerald-400/15 via-emerald-400/50 to-emerald-400/15" />
                    <span className="absolute left-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full border border-emerald-300/50 bg-[#101012]" />
                    <span className="absolute right-0 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.65)]" />
                    <motion.span
                      className="absolute top-1/2 -translate-y-1/2 text-sm drop-shadow-[0_0_8px_rgba(52,211,153,0.35)]"
                      animate={{ left: ["2%", "84%", "2%"] }}
                      transition={{
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      🚗
                    </motion.span>
                  </div>

                  <div className="mt-1 flex items-center gap-2 text-[9px] text-[#817E77]">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    Đã có giấy phép lái xe
                  </div>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  );
}
