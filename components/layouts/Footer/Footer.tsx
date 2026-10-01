"use client";

import Link from "next/link";

const exploreLinks = [
  { label: "Giới thiệu", href: "/about" },
  { label: "Kỹ năng", href: "/skills" },
  { label: "Dự án", href: "/projects" },
  { label: "Kinh nghiệm", href: "/experience" },
  { label: "Học vấn", href: "/education" }
];

// TODO: thay "#" bằng link thật của bạn
const socialLinks = [
  { label: "GitHub", href: "#", external: true },
  { label: "LinkedIn", href: "#", external: true },
  { label: "Email", href: "mailto:your@email.com", external: false }
];

const linkClass =
  "w-fit text-sm text-[#9A978E] transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7C93FF]";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/8 bg-[#0A0B0E]">
      <div className="mx-auto w-full max-w-375 px-6 lg:px-10 xl:px-14">
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr]">
          {/* BRAND */}
          <div>
            <Link
              href="/"
              className="group inline-flex items-center gap-3 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7C93FF]"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-linear-to-br from-[#7C93FF] to-[#4A63D8] text-[12px] font-bold tracking-tight text-white shadow-[0_6px_18px_-6px_rgba(124,147,255,0.7)] transition-transform duration-300 group-hover:-rotate-6">
                KH
              </span>

              <span>
                <span className="block font-['Fraunces'] text-base leading-tight text-[#F2F0EA]">
                  Khánh Hỷ
                </span>

                <span className="mt-0.5 block text-[11px] text-[#7E7B73]">
                  Portfolio cá nhân
                </span>
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-6 text-[#8B8981]">
              Dựng video, phát triển web và lái xe. Ba mảng việc, một người làm.
            </p>

            <p className="mt-5 flex w-fit items-center gap-2 rounded-full border border-white/8 bg-white/3 px-3 py-1.5 text-xs text-[#B5B2A9]">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Sẵn sàng nhận cơ hội mới
            </p>
          </div>

          {/* EXPLORE */}
          <nav aria-label="Khám phá">
            <h2 className="text-sm font-semibold text-[#F2F0EA]">Khám phá</h2>

            <ul className="mt-4 grid gap-2.5">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className={`block ${linkClass}`}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* SOCIAL */}
          <nav aria-label="Kết nối">
            <h2 className="text-sm font-semibold text-[#F2F0EA]">Kết nối</h2>

            <ul className="mt-4 grid gap-2.5">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className={`flex items-center gap-1.5 ${linkClass}`}
                  >
                    {link.label}
                    <span aria-hidden="true" className="text-xs text-[#7C93FF]">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col gap-3 border-t border-white/8 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-[#7E7B73]">© 2026 Khánh Hỷ. Việt Nam.</p>

          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex w-fit items-center gap-2 rounded-full border border-white/10 px-3.5 py-1.5 text-xs text-[#9A978E] transition-colors hover:border-[#7C93FF]/50 hover:bg-[#7C93FF]/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7C93FF]"
          >
            Lên đầu trang
            <span aria-hidden="true">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
