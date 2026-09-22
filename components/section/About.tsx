"use client";

import Link from "next/link";

import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import React from "react";

/* =========================================================
   TYPES
========================================================= */
interface TimelineEntry {
  tag: string;
  title: string;
  text: string;
}

interface TimelineItemProps {
  item: TimelineEntry;
  index: number;
  isLast: boolean;
}

interface MagneticLinkProps {
  href: string;
}

interface Offset {
  x: number;
  y: number;
}

/* =========================================================
   HOOK: reveal an element once it scrolls into view
========================================================= */
function useInView<T extends HTMLElement>(
  threshold = 0.35
): [React.RefObject<T | null>, boolean] {
  const ref = React.useRef<T | null>(null);
  const [inView, setInView] = React.useState<boolean>(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const frame = requestAnimationFrame(() => setInView(true));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, inView];
}

/* =========================================================
   HOOK: scroll progress (0 → 1) for the top progress bar
========================================================= */
function useScrollProgress(): number {
  const [progress, setProgress] = React.useState<number>(0);

  React.useEffect(() => {
    let ticking = false;

    const update = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      setProgress(max > 0 ? Math.min(1, doc.scrollTop / max) : 0);
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return progress;
}

const TIMELINE: TimelineEntry[] = [
  {
    tag: "Khởi đầu",
    title: "Công nghệ thông tin",
    text: "Học cách phân tích vấn đề, xây dựng hệ thống và biến yêu cầu thành một sản phẩm có thể sử dụng."
  },
  {
    tag: "Bước ngoặt",
    title: "Tư duy sản phẩm",
    text: "Nhận ra rằng hoạt động tốt thôi chưa đủ — cách trình bày và cảm giác mang lại cũng quan trọng không kém."
  },
  {
    tag: "Mở rộng",
    title: "Video editing",
    text: "Kể chuyện bằng hình ảnh, nhịp điệu và cảm xúc — một ngôn ngữ khác với code, nhưng cùng một mục đích."
  },
  {
    tag: "Hiện tại",
    title: "Không giới hạn danh xưng",
    text: "Học đủ sâu ở nhiều lĩnh vực để có thể tạo ra một kết quả thực sự tốt, bất kể hình thức."
  }
];

const SKILL_TAGS: string[] = [
  "CapCut",
  "Storytelling",
  "Short-form",
  "Next.js",
  "Spring Boot",
  "PostgreSQL",
  "Tập trung",
  "An toàn",
  "Trách nhiệm",
  "Xử lý hình ảnh",
  "Dựng phim",
  "Giao diện"
];

/* =========================================================
   TIMELINE ITEM
========================================================= */
const TimelineItem = ({ item, index, isLast }: TimelineItemProps) => {
  const [ref, inView] = useInView<HTMLDivElement>(0.5);

  return (
    <div ref={ref} className="relative pl-12">
      {!isLast && (
        <span
          className="absolute left-2.25 top-8 w-px bg-white/10"
          style={{ height: "calc(100% - 0.5rem)" }}
        >
          <span
            className={`absolute inset-x-0 top-0 w-px bg-[#5B7CFA] transition-all duration-700 ease-out ${
              inView ? "h-full opacity-100" : "h-0 opacity-0"
            }`}
          />
        </span>
      )}

      <span
        className={`absolute left-0 top-1 flex h-4.75 w-4.75 items-center justify-center rounded-full border transition-all duration-500 ${
          inView
            ? "border-[#5B7CFA] bg-[#5B7CFA]/15"
            : "border-white/10 bg-[#0B0B0D]"
        }`}
      >
        <span
          className={`h-1.5 w-1.5 rounded-full transition-colors duration-500 ${
            inView ? "bg-[#8EA5FF]" : "bg-[#343330]"
          }`}
        />
      </span>

      <div
        className={`pb-12 transition-all duration-700 ease-out ${
          inView ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        }`}
        style={{ transitionDelay: inView ? `${index * 60}ms` : "0ms" }}
      >
        <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#5B7CFA]">
          {item.tag}
        </span>

        <h3 className="mt-2 font-['Fraunces'] text-xl text-[#EDECE8]">
          {item.title}
        </h3>

        <p className="mt-2 max-w-md text-xs leading-6 text-[#68665F]">
          {item.text}
        </p>
      </div>
    </div>
  );
};

/* =========================================================
   MAGNETIC CTA BUTTON
========================================================= */
const MagneticLink = ({ href }: MagneticLinkProps) => {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = React.useState<Offset>({ x: 0, y: 0 });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setOffset({ x: x * 0.25, y: y * 0.35 });
  };

  const handleLeave = () => setOffset({ x: 0, y: 0 });

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transform: `translate(${offset.x}px, ${offset.y}px)` }}
      className="w-fit"
    >
      <Link
        href={href}
        className="group flex items-center gap-5 rounded-xl bg-[#EDECE8] px-6 py-4 text-xs font-semibold text-[#0B0B0D] transition-transform duration-300 ease-out hover:bg-white"
      >
        Xem dự án
        <span className="transition duration-300 group-hover:translate-x-1">
          →
        </span>
      </Link>
    </div>
  );
};

const About = () => {
  const [mounted, setMounted] = React.useState<boolean>(false);
  const heroRef = React.useRef<HTMLDivElement | null>(null);
  const [quoteRef, quoteInView] = useInView<HTMLDivElement>(0.6);
  const [marqueeRef, marqueeInView] = useInView<HTMLDivElement>(0.2);
  const progress = useScrollProgress();

  React.useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(id);
  }, []);

  const handleHeroMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = heroRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  const heroStyle: React.CSSProperties & { "--mx"?: string; "--my"?: string } =
    {
      "--mx": "50%",
      "--my": "20%"
    };

  return (
    <div className="min-h-screen bg-[#0B0B0D] text-[#EDECE8]">
      {/* SCROLL PROGRESS */}
      <div className="fixed left-0 top-0 z-50 h-0.5 w-full bg-white/4">
        <div
          className="h-full bg-[#5B7CFA] transition-[width] duration-150 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
      </div>

      <Header />

      <main className="overflow-hidden">
        {/* =========================================================
            HERO ABOUT
        ========================================================= */}
        <section
          ref={heroRef}
          onMouseMove={handleHeroMove}
          className="relative overflow-hidden border-b border-white/[0.07]"
          style={heroStyle}
        >
          {/* BACKGROUND */}
          <div className="pointer-events-none absolute inset-0">
            {/* GRID */}
            <div
              className="absolute inset-0 opacity-2.5"
              style={{
                backgroundImage:
                  "linear-linear(#EDECE8 1px, transparent 1px), linear-linear(90deg, #EDECE8 1px, transparent 1px)",
                backgroundSize: "48px 48px"
              }}
            />

            {/* GLOWS */}
            <div className="absolute -right-40 top-0 h-150 w-150 rounded-full bg-[#5B7CFA]/8 blur-[170px]" />

            <div className="absolute -left-60 bottom-0 h-120 w-120 rounded-full bg-[#5B7CFA]/4 blur-[160px]" />

            {/* CURSOR-FOLLOW GLOW */}
            <div
              className="absolute inset-0 hidden opacity-70 transition-opacity duration-500 lg:block"
              style={{
                background:
                  "radial-linear(320px circle at var(--mx) var(--my), rgba(139,165,255,0.10), transparent 70%)"
              }}
            />

            {/* HUGE NUMBER */}
            <span className="absolute right-6 top-24 select-none font-['Fraunces'] text-[220px] leading-none text-white/[0.018] lg:right-14 lg:text-[330px]">
              01
            </span>
          </div>

          <div className="relative mx-auto w-full max-w-375 px-6 pb-20 pt-32 lg:px-10 lg:pb-24 lg:pt-36 xl:px-14">
            {/* TOP */}
            <div
              className={`flex items-center justify-between border-b border-white/[0.07] pb-5 transition-all duration-700 ease-out ${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-2 opacity-0"
              }`}
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-7 bg-[#5B7CFA]" />

                <span className="font-mono text-2.25 uppercase tracking-[0.28em] text-[#8EA5FF]">
                  Giới thiệu
                </span>
              </div>

              <span className="hidden font-mono text-[8px] uppercase tracking-[0.2em] text-[#4D4A44] sm:block">
                Khánh Hỷ · Portfolio 2026
              </span>
            </div>

            {/* HERO CONTENT */}
            <div className="grid gap-14 pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-end lg:gap-24">
              {/* LEFT */}
              <div>
                <p
                  className={`mb-5 font-mono text-2.25 uppercase tracking-[0.24em] text-[#55524C] transition-all duration-700 ease-out ${
                    mounted
                      ? "translate-y-0 opacity-100"
                      : "translate-y-3 opacity-0"
                  }`}
                  style={{ transitionDelay: "80ms" }}
                >
                  Một chút về tôi
                </p>

                <h1 className="max-w-4xl font-['Fraunces'] text-[52px] font-light leading-[0.96] tracking-[-0.045em] text-[#EDECE8] sm:text-[64px] lg:text-[78px]">
                  <span
                    className={`inline-block transition-all duration-700 ease-out ${
                      mounted
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    }`}
                    style={{ transitionDelay: "160ms" }}
                  >
                    Tôi thích tạo ra
                  </span>
                  <br />
                  <span
                    className={`inline-block text-[#77756F] transition-all duration-700 ease-out ${
                      mounted
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    }`}
                    style={{ transitionDelay: "260ms" }}
                  >
                    những thứ
                  </span>{" "}
                  <span
                    className={`inline-block text-[#8EA5FF] transition-all duration-700 ease-out ${
                      mounted
                        ? "translate-y-0 opacity-100"
                        : "translate-y-6 opacity-0"
                    }`}
                    style={{ transitionDelay: "340ms" }}
                  >
                    có ích.
                  </span>
                </h1>
              </div>

              {/* RIGHT */}
              <div
                className={`max-w-xl transition-all duration-700 ease-out lg:pb-2 ${
                  mounted
                    ? "translate-y-0 opacity-100"
                    : "translate-y-4 opacity-0"
                }`}
                style={{ transitionDelay: "420ms" }}
              >
                <p className="font-['Fraunces'] text-[22px] font-light leading-normal tracking-[-0.02em] text-[#B9B7B0] sm:text-[25px]">
                  Tôi là <span className="text-[#EDECE8]">Khánh Hỷ</span>, làm
                  việc ở giao điểm giữa{" "}
                  <span className="text-[#8EA5FF]">công nghệ</span>, hình ảnh và
                  trải nghiệm thực tế.
                </p>

                <p className="mt-5 max-w-lg text-[12px] leading-6 text-[#68665F]">
                  Tôi quan tâm đến cách một ý tưởng được biến thành sản phẩm: từ
                  viết code, xây dựng trải nghiệm, xử lý hình ảnh cho đến việc
                  hoàn thiện những chi tiết nhỏ nhất.
                </p>

                <div className="mt-7 flex flex-wrap items-center gap-5">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-30" />
                      <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
                    </span>

                    <span className="text-[11px] text-[#8A887F]">
                      Sẵn sàng cho cơ hội mới
                    </span>
                  </div>

                  <span className="h-4 w-px bg-white/10" />

                  <span className="font-mono text-2.25 uppercase tracking-[0.16em] text-[#55524C]">
                    Việt Nam
                  </span>
                </div>
              </div>
            </div>

            {/* SCROLL CUE */}
            <div
              className={`mt-16 hidden items-center gap-3 transition-opacity duration-700 lg:flex ${
                mounted ? "opacity-100" : "opacity-0"
              }`}
              style={{ transitionDelay: "600ms" }}
            >
              <span className="relative flex h-8 w-5 items-start justify-center rounded-full border border-white/15 pt-1.5">
                <span className="scroll-dot h-1 w-1 rounded-full bg-[#8EA5FF]" />
              </span>
              <span className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#4D4A44]">
                Cuộn xuống
              </span>
            </div>
          </div>
        </section>

        {/* =========================================================
            HÀNH TRÌNH (TIMELINE)
        ========================================================= */}
        <section className="relative border-b border-white/[0.07]">
          <div className="mx-auto w-full max-w-375 px-6 py-20 lg:px-10 lg:py-24 xl:px-14">
            <div className="grid gap-14 lg:grid-cols-[0.55fr_1.45fr] lg:gap-24">
              {/* LABEL */}
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-2.25 text-[#5B7CFA]">01</span>

                  <span className="h-px w-8 bg-white/10" />
                </div>

                <h2 className="mt-5 font-['Fraunces'] text-3xl font-light text-[#EDECE8]">
                  Hành trình
                </h2>

                <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.2em] text-[#4D4A44]">
                  Từng bước một
                </p>
              </div>

              {/* TIMELINE */}
              <div>
                {TIMELINE.map((item, index) => (
                  <TimelineItem
                    key={item.title}
                    item={item}
                    index={index}
                    isLast={index === TIMELINE.length - 1}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            PULL QUOTE
        ========================================================= */}
        <section className="relative border-b border-white/[0.07]">
          <div className="mx-auto w-full max-w-375 px-6 py-16 lg:px-10 xl:px-14">
            <div
              ref={quoteRef}
              className={`mx-auto max-w-4xl text-center transition-all duration-700 ease-out ${
                quoteInView
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              }`}
            >
              <span className="font-['Fraunces'] text-3xl text-[#5B7CFA]/40">
                &ldquo;
              </span>
              <p className="mt-2 font-['Fraunces'] text-[26px] font-light leading-[1.35] tracking-[-0.02em] text-[#D9D7D0] sm:text-[32px]">
                Một thứ hoạt động tốt thôi chưa đủ — cách nó được trình bày và
                cảm giác mà nó mang lại cũng rất quan trọng.
              </p>
            </div>
          </div>
        </section>

        {/* =========================================================
            THREE DIRECTIONS
        ========================================================= */}
        <section className="relative border-b border-white/[0.07]">
          {/* GLOW */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-100 w-200 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#5B7CFA]/4 blur-[160px]" />

          <div className="relative mx-auto w-full max-w-375 px-6 py-20 lg:px-10 lg:py-24 xl:px-14">
            {/* HEADER */}
            <div className="flex flex-col gap-5 border-b border-white/[0.07] pb-8 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-2.25 text-[#5B7CFA]">02</span>

                  <span className="h-px w-8 bg-white/10" />
                </div>

                <h2 className="mt-5 font-['Fraunces'] text-4xl font-light tracking-[-0.03em] text-[#EDECE8]">
                  Ba hướng.
                  <span className="text-[#77756F]"> Một con người.</span>
                </h2>
              </div>

              <p className="max-w-sm text-xs leading-5 text-[#68665F]">
                Mỗi lĩnh vực cho tôi một góc nhìn khác nhau trong cách giải
                quyết vấn đề và tạo ra sản phẩm.
              </p>
            </div>

            {/* CARDS */}
            <div className="grid lg:grid-cols-3">
              {/* VIDEO EDITOR */}
              <div className="group relative border-b border-white/[0.07] py-9 lg:border-b-0 lg:border-r lg:pr-10">
                <div className="mb-12 flex items-center justify-between">
                  <span className="font-mono text-2.25 text-[#5B7CFA]">
                    01 / EDIT
                  </span>

                  <span className="text-xl text-[#343330] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#8EA5FF]">
                    ↗
                  </span>
                </div>

                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-white/8 bg-white/2.5 text-base transition-transform duration-300 group-hover:scale-110">
                  ▶
                </div>

                <h3 className="font-['Fraunces'] text-2xl text-[#EDECE8]">
                  Video Editor
                </h3>

                <p className="mt-4 max-w-sm text-xs leading-6 text-[#68665F]">
                  Tập trung vào cách chọn source, nhịp dựng, bố cục và cách kể
                  câu chuyện bằng hình ảnh.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {["CapCut", "Storytelling", "Short-form"].map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-white/[0.07] bg-white/2 px-2.5 py-1 font-mono text-[8px] text-[#66635D]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* DEVELOPER */}
              <div className="group relative border-b border-white/[0.07] py-9 lg:border-b-0 lg:border-r lg:px-10">
                <div className="mb-12 flex items-center justify-between">
                  <span className="font-mono text-2.25 text-[#5B7CFA]">
                    02 / CODE
                  </span>

                  <span className="text-xl text-[#343330] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#8EA5FF]">
                    ↗
                  </span>
                </div>

                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-white/8 bg-white/2.5 font-mono text-sm text-[#8EA5FF] transition-transform duration-300 group-hover:scale-110">
                  &lt;/&gt;
                </div>

                <h3 className="font-['Fraunces'] text-2xl text-[#EDECE8]">
                  Developer
                </h3>

                <p className="mt-4 max-w-sm text-xs leading-6 text-[#68665F]">
                  Xây dựng ứng dụng từ giao diện đến backend, tập trung vào
                  logic rõ ràng và trải nghiệm sử dụng thực tế.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {["Next.js", "Spring Boot", "PostgreSQL"].map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-white/[0.07] bg-white/2 px-2.5 py-1 font-mono text-[8px] text-[#66635D]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* DRIVER */}
              <div className="group relative py-9 lg:pl-10">
                <div className="mb-12 flex items-center justify-between">
                  <span className="font-mono text-2.25 text-[#5B7CFA]">
                    03 / DRIVE
                  </span>

                  <span className="text-xl text-[#343330] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#8EA5FF]">
                    ↗
                  </span>
                </div>

                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-white/8 bg-white/2.5 text-base transition-transform duration-300 group-hover:scale-110">
                  🚗
                </div>

                <h3 className="font-['Fraunces'] text-2xl text-[#EDECE8]">
                  Driver
                </h3>

                <p className="mt-4 max-w-sm text-xs leading-6 text-[#68665F]">
                  Một hướng thực tế giúp tôi rèn sự tập trung, tính chủ động và
                  trách nhiệm trong từng tình huống.
                </p>

                <div className="mt-7 flex flex-wrap gap-2">
                  {["Tập trung", "An toàn", "Trách nhiệm"].map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-white/[0.07] bg-white/2 px-2.5 py-1 font-mono text-[8px] text-[#66635D]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            SKILL MARQUEE
        ========================================================= */}
        <section
          ref={marqueeRef}
          className="relative overflow-hidden border-b border-white/[0.07] py-10"
        >
          <div
            className={`marquee-track flex w-max items-center gap-10 transition-opacity duration-700 ${
              marqueeInView ? "opacity-100" : "opacity-0"
            }`}
          >
            {[...SKILL_TAGS, ...SKILL_TAGS].map((tag, index) => (
              <span
                key={`${tag}-${index}`}
                className="flex items-center gap-10 font-['Fraunces'] text-2xl font-light text-[#4D4A44] sm:text-3xl"
              >
                {tag}
                <span className="text-sm text-[#5B7CFA]/50">✦</span>
              </span>
            ))}
          </div>

          {/* EDGE FADES */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-linear-to-r from-[#0B0B0D] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-linear-to-l from-[#0B0B0D] to-transparent" />
        </section>

        {/* =========================================================
            WORK STYLE
        ========================================================= */}
        <section className="relative border-b border-white/[0.07]">
          <div className="mx-auto w-full max-w-375 px-6 py-20 lg:px-10 lg:py-24 xl:px-14">
            <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
              {/* LEFT */}
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-2.25 text-[#5B7CFA]">03</span>

                  <span className="h-px w-8 bg-white/10" />
                </div>

                <h2 className="mt-5 font-['Fraunces'] text-4xl font-light leading-tight tracking-[-0.03em] text-[#EDECE8]">
                  Cách tôi
                  <br />
                  <span className="text-[#77756F]">làm việc.</span>
                </h2>
              </div>

              {/* RIGHT */}
              <div className="grid sm:grid-cols-2">
                {[
                  {
                    number: "01",
                    title: "Hiểu vấn đề",
                    text: "Xác định rõ mục tiêu trước khi bắt đầu làm."
                  },
                  {
                    number: "02",
                    title: "Làm có chủ đích",
                    text: "Mỗi chi tiết đều nên có lý do để tồn tại."
                  },
                  {
                    number: "03",
                    title: "Thử và chỉnh",
                    text: "Không ngại sửa lại nếu kết quả chưa đủ tốt."
                  },
                  {
                    number: "04",
                    title: "Hoàn thiện",
                    text: "Ưu tiên sản phẩm sử dụng được thay vì chỉ đẹp trên ý tưởng."
                  }
                ].map((item, index) => (
                  <div
                    key={item.number}
                    className={`group p-7 ${
                      index % 2 === 0
                        ? "sm:border-r sm:border-white/[0.07]"
                        : ""
                    } ${index < 2 ? "border-b border-white/[0.07]" : ""}`}
                  >
                    <span className="font-mono text-[8px] text-[#5B7CFA]">
                      {item.number}
                    </span>

                    <h3 className="mt-8 text-sm font-medium text-[#EDECE8]">
                      {item.title}
                    </h3>

                    <p className="mt-3 max-w-xs text-xs leading-5 text-[#68665F]">
                      {item.text}
                    </p>

                    <div className="mt-7 h-px w-8 bg-white/10 transition-all duration-300 group-hover:w-14 group-hover:bg-[#5B7CFA]/50" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            QUICK INFO + CTA
        ========================================================= */}
        <section className="relative">
          <div className="pointer-events-none absolute bottom-0 left-1/2 h-80 w-200 -translate-x-1/2 rounded-full bg-[#5B7CFA]/5 blur-[150px]" />

          <div className="relative mx-auto w-full max-w-375 px-6 py-20 lg:px-10 lg:py-24 xl:px-14">
            {/* INFO */}
            <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2 lg:grid-cols-4">
              {(
                [
                  ["ĐỊA ĐIỂM", "Việt Nam"],
                  ["LĨNH VỰC", "Edit + Development"],
                  ["ĐỊNH HƯỚNG", "Freelance / Remote"],
                  ["TRẠNG THÁI", "Sẵn sàng"]
                ] as [string, string][]
              ).map(([label, value]) => (
                <div
                  key={label}
                  className="group bg-[#0B0B0D] px-6 py-6 transition-colors duration-300 hover:bg-white/2"
                >
                  <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-[#4D4A44]">
                    {label}
                  </p>

                  <p className="mt-3 text-xs text-[#B5B3AD]">{value}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-16 grid gap-10 border-t border-white/[0.07] pt-14 lg:grid-cols-[1fr_auto] lg:items-end">
              <div>
                <p className="font-mono text-2.25 uppercase tracking-[0.24em] text-[#5B7CFA]">
                  Tiếp theo
                </p>

                <h2 className="mt-5 max-w-3xl font-['Fraunces'] text-4xl font-light leading-[1.1] tracking-[-0.03em] text-[#EDECE8] sm:text-5xl">
                  Đừng chỉ đọc về tôi.
                  <br />
                  <span className="text-[#77756F]">
                    Hãy xem những gì tôi đã làm.
                  </span>
                </h2>
              </div>

              <MagneticLink href="/projects" />
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style jsx>{`
        .marquee-track {
          animation: marquee 28s linear infinite;
        }

        @keyframes marquee {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .scroll-dot {
          animation: scroll-cue 1.6s ease-in-out infinite;
        }

        @keyframes scroll-cue {
          0%,
          100% {
            transform: translateY(0);
            opacity: 1;
          }
          50% {
            transform: translateY(10px);
            opacity: 0.3;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track,
          .scroll-dot {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default About;
