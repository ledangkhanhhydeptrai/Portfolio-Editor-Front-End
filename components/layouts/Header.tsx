"use client";

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

const Header = () => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }

    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/[0.07] bg-[#0B0B0D]/80 backdrop-blur-2xl">
      {/* ÁNH SÁNG PHÍA TRÊN */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#5B7CFA]/60 to-transparent" />

      <div className="mx-auto flex h-18 w-full max-w-375 items-center justify-between px-6 lg:px-10 xl:px-14">
        {/* =====================================================
            BRAND
        ===================================================== */}
        <Link href="/" className="group flex min-w-fit items-center gap-3">
          {/* LOGO */}
          <div className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-white/4 transition duration-300 group-hover:border-[#5B7CFA]/40 group-hover:bg-[#5B7CFA]/10">
            <span className="relative z-10 text-[11px] font-bold tracking-tight text-[#EDECE8]">
              KH
            </span>

            <div className="absolute -bottom-5 -right-5 h-10 w-10 rounded-full bg-[#5B7CFA]/20 blur-xl transition duration-300 group-hover:bg-[#5B7CFA]/40" />
          </div>

          {/* NAME */}
          <div className="hidden sm:block">
            <div className="flex items-center gap-2">
              <p className="font-['Fraunces'] text-sm text-[#EDECE8]">
                Khánh Hỷ
              </p>

              <span className="h-1 w-1 rounded-full bg-[#5B7CFA]" />
            </div>

            <p className="mt-0.5 font-mono text-[7px] uppercase tracking-[0.2em] text-[#5c584f]">
              Portfolio cá nhân
            </p>
          </div>
        </Link>

        {/* =====================================================
            NAVIGATION
        ===================================================== */}
        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center rounded-xl border border-white/[0.07] bg-white/2.5 p-1 md:flex">
          {navItems.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative flex items-center gap-2 rounded-lg px-3.5 py-2 text-[11px] font-medium transition duration-300 ${
                  active
                    ? "bg-white/2.5 text-[#EDECE8]"
                    : "text-[#8A887F] hover:bg-white/4 hover:text-[#EDECE8]"
                }`}
              >
                {item.label}

                {/* PROJECT COUNT */}
                {item.count && (
                  <span
                    className={`rounded px-1.5 py-0.5 font-mono text-[7px] transition ${
                      active
                        ? "bg-[#5B7CFA]/15 text-[#8EA5FF]"
                        : "bg-[#5B7CFA]/10 text-[#8EA5FF]"
                    }`}
                  >
                    {item.count}
                  </span>
                )}

                {/* ACTIVE INDICATOR */}
                <span
                  className={`absolute bottom-1 left-1/2 h-0.5 -translate-x-1/2 rounded-full bg-[#5B7CFA] transition-all duration-300 ${
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
          {/* STATUS */}
          <div className="hidden items-center gap-2 lg:flex">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-40" />

              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>

            <div>
              <p className="text-[9px] font-medium text-[#B5B3AD]">Sẵn sàng</p>

              <p className="font-mono text-[7px] text-[#5c584f]">
                nhận cơ hội mới
              </p>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="hidden h-7 w-px bg-white/8 lg:block" />

          {/* CONTACT */}
          <Link
            href="/contact"
            className="group relative flex items-center gap-2 overflow-hidden rounded-lg bg-[#EDECE8] px-4 py-2 text-[11px] font-semibold text-[#0B0B0D] transition duration-300 hover:scale-[1.03] hover:bg-white"
          >
            <span className="relative z-10">Liên hệ</span>

            <span className="relative z-10 transition duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
              ↗
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
