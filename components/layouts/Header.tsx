"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  {
    label: "Trang chủ",
    href: "/"
  },
  {
    label: "Giới thiệu",
    href: "/about"
  },
  {
    label: "Kỹ năng",
    href: "/skills"
  },
  {
    label: "Dự án",
    href: "/projects",
    count: "03"
  },
  {
    label: "Kinh nghiệm",
    href: "/experience"
  }
];

const HeaderContent = ({ pathname }: { pathname: string }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  // =====================================================
  // SCROLL HEADER
  // =====================================================

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // =====================================================
  // LOCK BODY WHEN MENU OPEN
  // =====================================================

  React.useEffect(() => {
    if (!mobileMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // =====================================================
  // ESC TO CLOSE
  // =====================================================

  React.useEffect(() => {
    if (!mobileMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  // =====================================================
  // ACTIVE ROUTE
  // =====================================================

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <>
      <header
        className={`fixed left-0 top-0 z-50 w-full border-b backdrop-blur-2xl transition-all duration-500 ${
          scrolled
            ? "border-white/9 bg-[#0B0B0D]/95 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
            : "border-white/7 bg-[#0B0B0D]/80"
        }`}
      >
        <style>{`
          @keyframes shimmerLine {
            0% {
              transform: translateX(-100%);
            }

            100% {
              transform: translateX(100%);
            }
          }

          @keyframes floatDot {
            0%,
            100% {
              transform: translateY(0);
              opacity: 0.2;
            }

            50% {
              transform: translateY(-4px);
              opacity: 0.6;
            }
          }

          @keyframes logoGlowPulse {
            0%,
            100% {
              opacity: 0.35;
              transform: scale(1);
            }

            50% {
              opacity: 0.6;
              transform: scale(1.15);
            }
          }

          @keyframes mobileMenuIn {
            from {
              opacity: 0;
              transform: translateY(-10px) scale(0.98);
            }

            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        `}</style>

        {/* =====================================================
            TOP LIGHT
        ===================================================== */}

        <div className="pointer-events-none absolute inset-x-0 top-0 h-px overflow-hidden bg-linear-to-r from-transparent via-[#5B7CFA]/60 to-transparent">
          <div
            className="h-full w-1/3 bg-linear-to-r from-transparent via-[#8EA5FF] to-transparent"
            style={{
              animation: "shimmerLine 5s linear infinite"
            }}
          />
        </div>

        {/* =====================================================
            DECORATIVE DOTS
        ===================================================== */}

        <div
          className="pointer-events-none absolute left-[6%] top-1/2 hidden h-1 w-1 -translate-y-1/2 rounded-full bg-[#5B7CFA] xl:block"
          style={{
            animation: "floatDot 4s ease-in-out infinite"
          }}
        />

        <div
          className="pointer-events-none absolute right-[6%] top-1/2 hidden h-1 w-1 -translate-y-1/2 rounded-full bg-[#5B7CFA] xl:block"
          style={{
            animation: "floatDot 4s ease-in-out infinite 1.5s"
          }}
        />

        {/* =====================================================
            HEADER CONTENT
        ===================================================== */}

        <div className="mx-auto flex h-18 w-full max-w-375 items-center justify-between px-4 sm:px-6 lg:px-10 xl:px-14">
          {/* =====================================================
              BRAND
          ===================================================== */}

          <Link
            href="/"
            className="group flex min-w-fit items-center gap-3"
            onClick={() => setMobileMenuOpen(false)}
          >
            {/* LOGO */}

            <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/4 transition duration-300 group-hover:rotate-[8deg] group-hover:border-[#5B7CFA]/40 group-hover:bg-[#5B7CFA]/10">
              <span className="relative z-10 text-[11px] font-bold tracking-tight text-[#EDECE8]">
                KH
              </span>

              <div
                className="absolute -bottom-5 -right-5 h-10 w-10 rounded-full bg-[#5B7CFA]/20 blur-xl transition duration-300 group-hover:bg-[#5B7CFA]/40"
                style={{
                  animation: "logoGlowPulse 3s ease-in-out infinite"
                }}
              />
            </div>

            {/* NAME */}

            <div className="hidden sm:block">
              <div className="flex items-center gap-2">
                <p className="font-['Fraunces'] text-sm text-[#EDECE8]">
                  Khánh Hỷ
                </p>

                <span className="relative flex h-1 w-1">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#5B7CFA] opacity-60" />

                  <span className="relative h-1 w-1 rounded-full bg-[#5B7CFA]" />
                </span>
              </div>

              <p className="mt-0.5 font-mono text-[7px] uppercase tracking-[0.2em] text-[#5c584f]">
                Portfolio cá nhân
              </p>
            </div>
          </Link>

          {/* =====================================================
              DESKTOP NAVIGATION
          ===================================================== */}

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center rounded-xl border border-white/[0.07] bg-white/2.5 p-1 md:flex">
            {navItems.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative flex items-center gap-2 overflow-hidden rounded-lg px-3.5 py-2 text-[11px] font-medium transition duration-300 ${
                    active
                      ? "bg-white/2.5 text-[#EDECE8]"
                      : "text-[#8A887F] hover:bg-white/4 hover:text-[#EDECE8]"
                  }`}
                >
                  {/* SWEEP */}

                  <span className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/5 to-transparent transition-transform duration-500 group-hover:translate-x-full" />

                  <span className="relative">{item.label}</span>

                  {/* PROJECT COUNT */}

                  {item.count && (
                    <span
                      className={`relative rounded px-1.5 py-0.5 font-mono text-[7px] ${
                        active
                          ? "bg-[#5B7CFA]/15 text-[#8EA5FF]"
                          : "bg-[#5B7CFA]/10 text-[#8EA5FF]"
                      }`}
                    >
                      {item.count}
                    </span>
                  )}

                  {/* ACTIVE */}

                  <span
                    className={`absolute bottom-1 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-[#5B7CFA] shadow-[0_0_8px_#5B7CFA] transition-all duration-300 ${
                      active ? "w-1 opacity-100" : "w-0 opacity-0"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* =====================================================
              RIGHT
          ===================================================== */}

          <div className="flex items-center gap-3">
            {/* STATUS - DESKTOP */}

            <div className="hidden items-center gap-2 lg:flex">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />

                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>

              <div>
                <p className="text-[9px] font-medium text-[#B5B3AD]">
                  Sẵn sàng
                </p>

                <p className="font-mono text-[7px] text-[#5c584f]">
                  nhận cơ hội mới
                </p>
              </div>
            </div>

            {/* DIVIDER */}

            <div className="hidden h-7 w-px bg-white/8 lg:block" />

            {/* CONTACT - TABLET / DESKTOP */}

            <Link
              href="/contact"
              className="group relative hidden items-center gap-2 overflow-hidden rounded-lg bg-[#EDECE8] px-4 py-2 text-[11px] font-semibold text-[#0B0B0D] transition duration-300 hover:scale-[1.03] hover:bg-white sm:flex"
            >
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-[#5B7CFA]/25 to-transparent transition-transform duration-500 group-hover:translate-x-full" />

              <span className="relative z-10">Liên hệ</span>

              <span className="relative z-10 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                ↗
              </span>
            </Link>

            {/* =====================================================
                MOBILE HAMBURGER
            ===================================================== */}

            <button
              type="button"
              aria-label={mobileMenuOpen ? "Đóng menu" : "Mở menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((previous) => !previous)}
              className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/3 transition hover:border-white/20 hover:bg-white/6 md:hidden"
            >
              <div className="relative h-4 w-5">
                {/* TOP */}

                <span
                  className={`absolute left-0 top-0.5 h-px bg-[#EDECE8] transition-all duration-300 ${
                    mobileMenuOpen ? "top-2 w-5 rotate-45" : "w-5"
                  }`}
                />

                {/* MIDDLE */}

                <span
                  className={`absolute left-0 top-2 h-px bg-[#EDECE8] transition-all duration-300 ${
                    mobileMenuOpen ? "w-0 opacity-0" : "w-3.5 opacity-100"
                  }`}
                />

                {/* BOTTOM */}

                <span
                  className={`absolute bottom-0.5 left-0 h-px bg-[#EDECE8] transition-all duration-300 ${
                    mobileMenuOpen ? "bottom-1.5 w-5 -rotate-45" : "w-5"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* =====================================================
    MOBILE MENU
===================================================== */}

        {mobileMenuOpen && (
          <div
            className="absolute left-0 top-full w-full border-t border-white/6 bg-[#0B0B0D]/98 backdrop-blur-2xl md:hidden"
            style={{
              animation: "mobileMenuIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) both"
            }}
          >
            <nav className="w-full px-4 py-4 sm:px-6">
              {/* NAV ITEMS */}
              <div className="space-y-1">
                {navItems.map((item, index) => {
                  const active = isActive(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`group flex w-full items-center justify-between rounded-xl px-4 py-4 transition duration-300 ${
                        active
                          ? "bg-white/6 text-[#EDECE8]"
                          : "text-[#8A887F] hover:bg-white/[0.035] hover:text-[#EDECE8]"
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        {/* NUMBER */}
                        <span
                          className={`w-5 font-mono text-[8px] ${
                            active ? "text-[#7F96F5]" : "text-[#4C4944]"
                          }`}
                        >
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        {/* LABEL */}
                        <span className="text-[13px] font-medium">
                          {item.label}
                        </span>

                        {/* PROJECT COUNT */}
                        {item.count && (
                          <span className="rounded bg-[#5B7CFA]/10 px-1.5 py-0.5 font-mono text-[7px] text-[#8EA5FF]">
                            {item.count}
                          </span>
                        )}
                      </div>

                      <span
                        className={`text-sm transition duration-300 group-hover:translate-x-1 ${
                          active ? "text-[#7F96F5]" : "text-[#5F5C56]"
                        }`}
                      >
                        →
                      </span>
                    </Link>
                  );
                })}
              </div>

              {/* CONTACT */}
              <div className="mt-4 border-t border-white/[0.07] pt-4">
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex w-full items-center justify-between rounded-xl bg-[#EDECE8] px-5 py-4 text-[12px] font-semibold text-[#0B0B0D] transition active:scale-[0.99]"
                >
                  <span>Liên hệ</span>
                  <span>↗</span>
                </Link>

                {/* STATUS */}
                <div className="mt-5 flex items-center justify-between px-1 pb-1">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />
                      <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    </span>

                    <span className="font-mono text-[8px] uppercase tracking-[0.14em] text-[#68655E]">
                      Sẵn sàng nhận cơ hội mới
                    </span>
                  </div>

                  <span className="font-mono text-[7px] uppercase tracking-[0.14em] text-[#44413D]">
                    2026
                  </span>
                </div>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* =====================================================
          MOBILE BACKDROP
      ===================================================== */}

      {mobileMenuOpen && (
        <button
          type="button"
          aria-label="Đóng menu"
          onClick={() => setMobileMenuOpen(false)}
          className="fixed inset-0 z-40 bg-black/55 backdrop-blur-[2px] md:hidden"
        />
      )}
    </>
  );
};

const Header = () => {
  const pathname = usePathname();

  return <HeaderContent key={pathname} pathname={pathname} />;
};

export default Header;
