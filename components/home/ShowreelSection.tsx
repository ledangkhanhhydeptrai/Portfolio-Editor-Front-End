"use client";

import { motion } from "motion/react";
export default function ShowreelSection() {
  return (
    <section className="relative overflow-hidden border-t border-white/7 px-6 py-24 lg:px-10 xl:px-14">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-100 w-100 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/7 blur-[150px]" />
      <div className="relative mx-auto w-full max-w-375">
        <div className="flex items-end justify-between gap-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="h-px w-7 bg-violet-400" />
              <span className="text-[10px] uppercase tracking-[0.3em] text-violet-300">
                Selected Motion
              </span>
            </div>
            <h2 className="mt-5 font-['Fraunces'] text-3xl font-light lg:text-4xl">
              Video không chỉ để xem.
              <br />
              <span className="text-[#8E91A3]">Nó phải có nhịp.</span>
            </h2>
          </div>
          <span className="hidden font-mono text-[9px] text-[#6F6C65] md:block">
            SHOWREEL / 2026
          </span>
        </div>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {[
            ["01", "Commercial", "Hook · Product · Rhythm"],
            ["02", "Short-form", "Pacing · Captions · Retention"],
            ["03", "Storytelling", "Emotion · Visual · Sound"]
          ].map((item, index) => (
            <motion.div
              key={item[0]}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65, delay: index * 0.12 }}
              whileHover={{ y: -10 }}
              className="group relative aspect-4/3 overflow-hidden rounded-3xl border border-white/8 bg-[#101012]"
            >
              <motion.div
                className="absolute inset-0"
                animate={{ scale: [1, 1.06, 1], x: [0, index % 2 ? -8 : 8, 0] }}
                transition={{
                  duration: 8 + index,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="absolute inset-0 bg-linear-to-br from-violet-500/12 via-transparent to-[#5B7CFA]/12" />
                <div className="absolute left-[12%] top-[18%] h-[48%] w-[76%] rounded-2xl border border-white/8 bg-black/35 shadow-2xl">
                  <div className="flex h-8 items-center gap-1.5 border-b border-white/7 px-3">
                    <i className="h-1.5 w-1.5 rounded-full bg-red-400/60" />
                    <i className="h-1.5 w-1.5 rounded-full bg-yellow-400/60" />
                    <i className="h-1.5 w-1.5 rounded-full bg-green-400/60" />
                  </div>
                  <div className="relative flex h-[calc(100%-2rem)] items-center justify-center overflow-hidden">
                    <motion.span
                      animate={{
                        scale: [1, 1.15, 1],
                        opacity: [0.65, 1, 0.65]
                      }}
                      transition={{ duration: 2.4, repeat: Infinity }}
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/8 text-sm"
                    >
                      ▶
                    </motion.span>
                  </div>
                </div>
              </motion.div>
              <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-black via-black/80 to-transparent p-6 pt-20">
                <div className="flex items-end justify-between">
                  <div>
                    <span className="font-mono text-[9px] text-violet-300">
                      {item[0]}
                    </span>
                    <h3 className="mt-2 text-lg font-medium">{item[1]}</h3>
                    <p className="mt-1 text-[11px] text-[#817E77]">{item[2]}</p>
                  </div>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-white group-hover:text-black">
                    ↗
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
