"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

export default function HeroSection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 90, damping: 22 });
  const smoothY = useSpring(mouseY, { stiffness: 90, damping: 22 });
  const workspaceRotateY = useTransform(smoothX, [-0.5, 0.5], [-5, 5]);
  const workspaceRotateX = useTransform(smoothY, [-0.5, 0.5], [4, -4]);
  const workspaceX = useTransform(smoothX, [-0.5, 0.5], [-14, 14]);
  const workspaceY = useTransform(smoothY, [-0.5, 0.5], [-10, 10]);

  const handleHeroMouseMove = (event: React.MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const resetHeroMouse = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      id="home"
      onMouseMove={handleHeroMouseMove}
      onMouseLeave={resetHeroMouse}
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
      <div className="pointer-events-none kh-glow absolute -right-20 top-20 h-125 w-125 rounded-full bg-[#5B7CFA]/15 blur-[150px]" />
      <div className="pointer-events-none absolute left-[8%] top-32 h-40 w-40 rounded-full border border-white/5" />
      <div className="pointer-events-none absolute left-[calc(8%+32px)] top-40 h-24 w-24 rounded-full border border-[#5B7CFA]/10" />
      <div className="pointer-events-none absolute bottom-16 right-[7%] font-mono text-[8px] uppercase tracking-[0.3em] text-white/10">
        KH / PORTFOLIO / 2026
      </div>

      <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] w-full max-w-375 items-center gap-10 py-10 lg:grid-cols-12 xl:gap-14">
        {/* LEFT */}
        <div className="lg:col-span-7 xl:pr-4">
          {/* BADGE */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 rounded-full border border-[#5B7CFA]/20 bg-[#5B7CFA]/5 px-3 py-1.5 text-[11px] text-[#9BAEFF]"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5B7CFA] opacity-50" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#5B7CFA]" />
            </span>
            Editor · Developer · Driver
          </motion.div>

          {/* TITLE */}
          <motion.h1
            initial={{ opacity: 0, y: 32, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{
              duration: 0.8,
              delay: 0.08,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="mt-7 font-['Fraunces'] text-5xl font-light leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-[64px] xl:text-[72px]"
          >
            Khánh Hỷ
            <span className="mt-1 block bg-linear-to-r from-[#AEB9FF] via-[#8EA5FF] to-[#77756F] bg-clip-text text-transparent">
              Sáng tạo.
            </span>
            <span className="block">Xây dựng. Chuyển động.</span>
          </motion.h1>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.22 }}
            className="mt-6 max-w-xl text-sm leading-7 text-[#A6A39B] lg:text-[15px]"
          >
            Kết hợp hình ảnh, công nghệ và trải nghiệm để tạo nên những sản phẩm
            có dấu ấn riêng.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link
              href="/project"
              className="group flex items-center gap-2 rounded-lg bg-[#5B7CFA] px-5 py-2.5 text-xs font-medium text-white transition duration-300 hover:bg-[#6B88FF]"
            >
              Xem dự án
              <span className="transition group-hover:translate-x-1">→</span>
            </Link>

            <Link
              href="/hero"
              className="group flex items-center gap-2 rounded-lg border border-[#5B7CFA]/20 bg-[#5B7CFA]/5 px-5 py-2.5 text-xs font-medium text-[#9BAEFF] transition duration-300 hover:border-[#5B7CFA]/40 hover:bg-[#5B7CFA]/10"
            >
              Xem hồ sơ
              <span className="transition duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

            <Link
              href="/about"
              className="rounded-lg border border-white/10 bg-white/2 px-5 py-2.5 text-xs font-medium transition hover:border-white/20 hover:bg-white/4"
            >
              Về tôi
            </Link>
          </motion.div>

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

          <motion.div
            initial={{ opacity: 0, x: 45, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              opacity: { duration: 0.7, delay: 0.2 },
              scale: { duration: 0.8, delay: 0.2 }
            }}
            whileHover={{ scale: 1.025 }}
            style={{
              rotateX: workspaceRotateX,
              rotateY: workspaceRotateY,
              x: workspaceX,
              y: workspaceY,
              transformPerspective: 1000
            }}
            className="group/workspace relative w-full overflow-hidden rounded-[22px] border border-white/10 bg-[#101012] shadow-2xl shadow-black/50 transition-colors duration-500 hover:border-[#5B7CFA]/25"
          >
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

                <div className="relative mt-4 space-y-2 overflow-hidden">
                  <motion.div
                    className="pointer-events-none absolute bottom-0 top-0 z-10 w-px bg-[#9BAEFF] shadow-[0_0_10px_rgba(155,174,255,0.7)]"
                    initial={{ left: "0%" }}
                    animate={{ left: "100%" }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
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

                  <motion.span
                    animate={{ opacity: [0.45, 1, 0.45] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                    className="text-emerald-400"
                  >
                    ● running
                  </motion.span>
                </div>

                <div className="mt-3 space-y-1 text-[#A6A39B]">
                  <p>
                    <span className="text-[#C678DD]">const</span> creator ={" "}
                    <span className="text-[#98C379]">&quot;Khánh Hỷ&quot;</span>
                    ;
                  </p>

                  <p>
                    <span className="text-[#C678DD]">const</span> stack = [
                  </p>

                  <p className="pl-5 text-[#98C379]">&quot;Next.js&quot;,</p>

                  <p className="pl-5 text-[#98C379]">
                    &quot;Spring Boot&quot;,
                  </p>

                  <p className="pl-5 text-[#98C379]">&quot;PostgreSQL&quot;</p>

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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
