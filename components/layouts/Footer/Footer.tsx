"use client";

import Link from "next/link";
import React from "react";
import { useAppSelector } from "@/hooks/redux";

const exploreLinks = [
  { label: "Giới thiệu", href: "/about" },
  { label: "Kỹ năng", href: "/skills" },
  { label: "Dự án", href: "/projects" },
  { label: "Kinh nghiệm", href: "/experience" },
  { label: "Học vấn", href: "/education" },
];

const focusRing =
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7C93FF]";

/* Link có gạch chân chạy từ trái sang khi hover */
const linkClass = `group/link relative inline-flex w-fit items-center gap-2 text-sm text-[#9A978E] transition-colors duration-300 hover:text-white ${focusRing}`;

function Arrow({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M7 17L17 7M9 7h8v8" />
    </svg>
  );
}

export default function Footer() {
  const { user } = useAppSelector((state) => state.auth);
  const { user: UserProfile } = useAppSelector((state) => state.profile);
  const username = user ? user.username : "Khánh Hỷ";
  const email = UserProfile ? UserProfile.email : "";
  const profile = UserProfile;
  return (
    <footer className="relative overflow-hidden border-t border-white/8 bg-[#0A0B0E]">
      {/* Đường sáng trên cùng + quầng sáng nền */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#7C93FF]/70 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 left-1/2 h-80 w-3xl -translate-x-1/2 rounded-full bg-[#4A63D8]/15 blur-[140px]"
      />

      <div className="relative mx-auto w-full max-w-375 px-6 lg:px-10 xl:px-14">
        {/* ============ CTA ============ */}
        <div className="flex flex-col gap-8 border-b border-white/8 py-14 md:flex-row md:items-end md:justify-between lg:py-16">
          <div className="max-w-xl">
            <p className="font-mono text-[9px] tracking-[0.24em] text-[#7C93FF] uppercase">
              {profile ? profile.jobTitle : "Đang bổ sung"}
            </p>

            {/* <h2 className="mt-4 font-['Fraunces'] text-3xl leading-tight text-balance text-[#F2F0EA] sm:text-4xl lg:text-5xl">
              {profile ? profile.workDirection : "Đang cập nhật"}
            </h2> */}

            <p className="mt-4 max-w-md text-sm leading-6 text-[#8B8981]">
              {profile ? profile.shortDescription : "Tôi có thể xử lý vấn đề liên quan đến nghề đó"}
            </p>
          </div>

          {email ? (
            <a
              href={`mailto:${email}`}
              className={`group inline-flex w-fit items-center gap-3 rounded-full bg-linear-to-r from-[#7C93FF] to-[#4A63D8] py-2 pr-2 pl-6 text-sm font-medium text-white shadow-[0_12px_32px_-10px_rgba(124,147,255,0.8)] transition-transform duration-300 hover:-translate-y-0.5 ${focusRing}`}
            >
              Gửi email cho tôi
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:rotate-45">
                <Arrow className="h-4 w-4" />
              </span>
            </a>
          ) : (
            <Link
              href="/social-link"
              className={`group inline-flex w-fit items-center gap-3 rounded-full bg-linear-to-r from-[#7C93FF] to-[#4A63D8] py-2 pr-2 pl-6 text-sm font-medium text-white shadow-[0_12px_32px_-10px_rgba(124,147,255,0.8)] transition-transform duration-300 hover:-translate-y-0.5 ${focusRing}`}
            >
              Xem cách liên hệ
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:rotate-45">
                <Arrow className="h-4 w-4" />
              </span>
            </Link>
          )}
        </div>

        {/* ============ NỘI DUNG CHÍNH ============ */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr]">
          {/* BRAND */}
          <div>
            <Link
              href="/"
              className={`group inline-flex items-center gap-3 rounded-xl ${focusRing}`}
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-[#7C93FF] to-[#4A63D8] text-[12px] font-bold tracking-tight text-white shadow-[0_6px_18px_-6px_rgba(124,147,255,0.7)] transition-transform duration-300 group-hover:-rotate-6">
                KH
              </span>

              <span>
                <span className="block font-['Fraunces'] text-base leading-tight text-[#F2F0EA]">
                  {username}
                </span>
                <span className="mt-0.5 block text-[11px] text-[#7E7B73]">Portfolio cá nhân</span>
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-6 text-[#8B8981]">
              {profile
                ? profile.aboutMe
                : "Tôi có khả năng xử lý vấn đề và luôn chủ động nghiên cứu, học hỏi thêm những điều mới để nâng cao kỹ năng và chất lượng công việc"}
            </p>

            <p className="mt-5 flex w-fit items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3.5 py-1.5 text-xs text-emerald-200/90">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70 motion-reduce:animate-none" />
                <span className="relative h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Sẵn sàng nhận cơ hội mới
            </p>
          </div>

          {/* EXPLORE */}
          <nav aria-label="Khám phá">
            <h2 className="text-sm font-semibold text-[#F2F0EA]">Khám phá</h2>

            <ul className="mt-5 grid gap-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={linkClass}>
                    <span className="h-px w-0 bg-[#7C93FF] transition-all duration-300 group-hover/link:w-3" />
                    <span className="transition-transform duration-300 group-hover/link:translate-x-0.5">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* CONTACT */}
          <nav aria-label="Kết nối">
            <h2 className="text-sm font-semibold text-[#F2F0EA]">Kết nối</h2>

            <ul className="mt-5 grid gap-3">
              <li>
                {email ? (
                  <a href={`mailto:${email}`} className={linkClass}>
                    Email
                    <Arrow className="h-3.5 w-3.5 text-[#7C93FF] transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                ) : (
                  <span className="text-sm text-[#7E7B73]">ledangkhanhhy@gmail.com</span>
                )}
              </li>

              <li>
                <Link href="/social-links" className={linkClass}>
                  Mạng xã hội
                  <Arrow className="h-3.5 w-3.5 text-[#7C93FF] transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* ============ TÊN LỚN LÀM WATERMARK ============ */}
        <div
          aria-hidden="true"
          className="pointer-events-none -mb-3 overflow-hidden text-center font-['Fraunces'] text-[22vw] leading-[0.8] font-semibold tracking-tight whitespace-nowrap text-transparent select-none lg:text-[13rem]"
          style={{
            backgroundImage: "linear-gradient(to bottom, rgba(124,147,255,0.22), transparent 85%)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
          }}
        >
          {username}
        </div>

        {/* ============ BOTTOM ============ */}
        <div className="relative flex flex-col gap-3 border-t border-white/8 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[#7E7B73]">© 2026 {username}. Việt Nam.</p>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`group flex w-fit items-center gap-2 rounded-full border border-white/10 py-1.5 pr-1.5 pl-4 text-xs text-[#9A978E] transition-colors hover:border-[#7C93FF]/50 hover:bg-[#7C93FF]/10 hover:text-white ${focusRing}`}
          >
            Lên đầu trang
            <span
              aria-hidden="true"
              className="flex h-6 w-6 items-center justify-center rounded-full bg-white/8 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:bg-[#7C93FF] group-hover:text-white"
            >
              ↑
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
