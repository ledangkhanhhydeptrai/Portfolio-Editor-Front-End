"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden px-6 pt-24 lg:px-10 xl:px-14"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#5B7CFA]/35 to-transparent" />
      <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] w-full max-w-375 items-center gap-14 py-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#7F96F5]"
          >
            Portfolio / 2026
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="mt-6 max-w-3xl font-['Fraunces'] text-5xl font-light leading-[1.02] tracking-[-0.04em] sm:text-6xl lg:text-[68px]"
          >
            Khánh Hỷ
            <br />
            <span className="text-[#9BAEFF]">Editor & Developer.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="mt-6 max-w-xl text-sm leading-7 text-[#A6A39B] lg:text-[15px]"
          >
            Tôi làm video và xây dựng sản phẩm số — tập trung vào trải nghiệm rõ
            ràng, hình ảnh có chủ đích và những thứ thực sự sử dụng được.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              href="/project"
              className="inline-flex items-center gap-2 rounded-lg bg-[#EDECE8] px-5 py-2.5 text-xs font-medium text-[#0B0B0D] transition hover:bg-white"
            >
              Xem dự án <span>↗</span>
            </Link>
            <Link
              href="/about"
              className="rounded-lg border border-white/10 px-5 py-2.5 text-xs font-medium text-[#C7C4BD] transition hover:border-white/20 hover:text-white"
            >
              Về tôi
            </Link>
          </motion.div>
          <div className="mt-12 grid max-w-xl grid-cols-3 border-t border-white/8 pt-5">
            <div>
              <p className="text-[9px] uppercase tracking-[0.18em] text-[#5F5C56]">
                Focus
              </p>
              <p className="mt-1.5 text-xs">Edit + Dev</p>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-[0.18em] text-[#5F5C56]">
                Location
              </p>
              <p className="mt-1.5 text-xs">Việt Nam</p>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-[0.18em] text-[#5F5C56]">
                Status
              </p>
              <p className="mt-1.5 text-xs">Available</p>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-5"
        >
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#101012] shadow-2xl shadow-black/30">
            <div className="flex h-11 items-center justify-between border-b border-white/7 px-4">
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-white/15" />
                <span className="h-2 w-2 rounded-full bg-white/15" />
                <span className="h-2 w-2 rounded-full bg-white/15" />
              </div>
              <span className="font-mono text-[8px] text-[#5F5C56]">
                khanhhy.workspace
              </span>
            </div>
            <div className="space-y-3 p-4">
              <div className="rounded-xl border border-white/7 bg-black/25 p-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-medium">
                    Editing Timeline
                  </span>
                  <span className="font-mono text-[8px] text-[#7F96F5]">
                    00:14:28:00
                  </span>
                </div>
                <div className="mt-5 space-y-2">
                  <div className="flex gap-1">
                    <span className="h-4 w-1/4 rounded bg-white/7" />
                    <span className="h-4 w-1/2 rounded bg-[#5B7CFA]/45" />
                    <span className="h-4 flex-1 rounded bg-white/7" />
                  </div>
                  <div className="flex gap-1">
                    <span className="h-3 w-2/3 rounded bg-white/5" />
                    <span className="h-3 flex-1 rounded bg-white/10" />
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-white/7 p-4">
                  <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#5F5C56]">
                    Development
                  </p>
                  <p className="mt-3 text-xs">Next.js · Spring Boot</p>
                </div>
                <div className="rounded-xl border border-white/7 p-4">
                  <p className="font-mono text-[8px] uppercase tracking-[0.16em] text-[#5F5C56]">
                    Creative
                  </p>
                  <p className="mt-3 text-xs">Edit · Storytelling</p>
                </div>
              </div>
              <div className="flex items-center justify-between border-t border-white/7 px-1 pt-3 font-mono text-[8px] uppercase tracking-[0.14em] text-[#5F5C56]">
                <span>Editor</span>
                <span>Developer</span>
                <span>Driver</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
