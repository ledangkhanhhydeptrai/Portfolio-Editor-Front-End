"use client";

import React from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";

import HeaderAnimations from "./HeaderAnimations";
import HeaderBrand from "./HeaderBrand";
import HeaderStatus from "./HeaderStatus";
import DesktopNavigation from "./DesktopNavigation";
import MobileMenu from "./MobileMenu";

import ContactPopup from "@/components/popup/ContactPopup";
import { useAppSelector } from "@/hooks/redux";

interface HeaderContentProps {
  pathname: string;
}

function useHydrated() {
  return React.useSyncExternalStore(
    () => {
      return () => {};
    },
    () => true,
    () => false,
  );
}

const HeaderContent: React.FC<HeaderContentProps> = ({ pathname }) => {
  const hydrated = useHydrated();

  const { user, authReady } = useAppSelector((state) => state.auth);

  const username = user ? user.username : null;
  const router = useRouter();

  const searchParams = useSearchParams();
  const currentCategory = searchParams.get("category");

  const [contactOpen, setContactOpen] = React.useState(false);

  const [scrolled, setScrolled] = React.useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const [mobileSkillsOpen, setMobileSkillsOpen] = React.useState(false);

  const [mobileProjectsOpen, setMobileProjectsOpen] = React.useState(false);

  const [desktopSkillsOpen, setDesktopSkillsOpen] = React.useState(false);

  const [desktopProjectsOpen, setDesktopProjectsOpen] = React.useState(false);

  const [accountOpen, setAccountOpen] = React.useState(false);

  const desktopSkillsRef = React.useRef<HTMLDivElement>(null);

  const desktopProjectsRef = React.useRef<HTMLDivElement>(null);

  const accountRef = React.useRef<HTMLDivElement>(null);

  // =========================================================
  // SCROLL
  // =========================================================

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // =========================================================
  // BODY LOCK
  // =========================================================

  React.useEffect(() => {
    if (!mobileMenuOpen) {
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // =========================================================
  // ESC
  // =========================================================

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") {
        return;
      }

      setMobileMenuOpen(false);
      setMobileSkillsOpen(false);
      setMobileProjectsOpen(false);

      setDesktopSkillsOpen(false);
      setDesktopProjectsOpen(false);

      setAccountOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  // =========================================================
  // CLICK OUTSIDE
  // =========================================================

  React.useEffect(() => {
    const onMouseDown = (event: MouseEvent) => {
      const target = event.target as Node;

      if (desktopSkillsRef.current && !desktopSkillsRef.current.contains(target)) {
        setDesktopSkillsOpen(false);
      }

      if (desktopProjectsRef.current && !desktopProjectsRef.current.contains(target)) {
        setDesktopProjectsOpen(false);
      }

      if (accountRef.current && !accountRef.current.contains(target)) {
        setAccountOpen(false);
      }
    };

    document.addEventListener("mousedown", onMouseDown);

    return () => document.removeEventListener("mousedown", onMouseDown);
  }, []);

  // =========================================================
  // MOBILE
  // =========================================================

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileSkillsOpen(false);
    setMobileProjectsOpen(false);
  };

  const handleMobileContact = () => {
    closeMobileMenu();
    setContactOpen(true);
  };

  // =========================================================
  // DESKTOP DROPDOWNS
  // =========================================================

  const handleSkillsOpen = () => {
    setDesktopProjectsOpen(false);
    setAccountOpen(false);
    setDesktopSkillsOpen(true);
  };

  const handleSkillsToggle = () => {
    setDesktopProjectsOpen(false);
    setAccountOpen(false);

    setDesktopSkillsOpen((previous) => !previous);
  };

  const handleProjectsOpen = () => {
    setDesktopSkillsOpen(false);
    setAccountOpen(false);
    setDesktopProjectsOpen(true);
  };

  const handleProjectsToggle = () => {
    setDesktopSkillsOpen(false);
    setAccountOpen(false);

    setDesktopProjectsOpen((previous) => !previous);
  };

  // =========================================================
  // ACCOUNT DROPDOWN
  // =========================================================

  const handleAccountToggle = () => {
    setDesktopSkillsOpen(false);
    setDesktopProjectsOpen(false);

    setAccountOpen((previous) => !previous);
  };

  const handleLogout = () => {
    setAccountOpen(false);
    closeMobileMenu();

    /*
     * Tạm thời chỉ clear thông tin UI.
     *
     * Khi authSlice/authSaga của bạn có logoutRequest
     * thì thay phần này bằng:
     *
     * dispatch(logoutRequest());
     *
     * Không lưu/xóa JWT ở đây vì JWT HttpOnly
     * phải do backend xử lý.
     */

    localStorage.removeItem("auth_user");

    router.replace("/");
  };

  // =========================================================
  // MOBILE ACCORDIONS
  // =========================================================

  const handleMobileSkillsToggle = () => {
    setMobileProjectsOpen(false);

    setMobileSkillsOpen((previous) => !previous);
  };

  const handleMobileProjectsToggle = () => {
    setMobileSkillsOpen(false);

    setMobileProjectsOpen((previous) => !previous);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 z-50 w-full border-b backdrop-blur-xl transition-colors duration-300 ${
          scrolled
            ? "border-white/10 bg-[#0C0D10]/92 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
            : "border-white/6 bg-[#0C0D10]/70"
        }`}
      >
        <HeaderAnimations />

        <div className="mx-auto flex h-18 w-full max-w-375 items-center justify-between px-4 sm:px-6 lg:px-10 xl:px-14">
          <HeaderBrand onClick={closeMobileMenu} />

          <DesktopNavigation
            pathname={pathname}
            currentCategory={currentCategory}
            skillsOpen={desktopSkillsOpen}
            skillsRef={desktopSkillsRef}
            onSkillsOpen={handleSkillsOpen}
            onSkillsClose={() => setDesktopSkillsOpen(false)}
            onSkillsToggle={handleSkillsToggle}
            projectsOpen={desktopProjectsOpen}
            projectsRef={desktopProjectsRef}
            onProjectsOpen={handleProjectsOpen}
            onProjectsClose={() => setDesktopProjectsOpen(false)}
            onProjectsToggle={handleProjectsToggle}
          />

          <div className="flex items-center gap-2 xl:ml-5">
            <HeaderStatus />

            {/* ============================================= */}
            {/* AUTH DESKTOP                                  */}
            {/* ============================================= */}

            {!hydrated || !authReady ? (
              <div className="hidden h-9 w-32 lg:block" />
            ) : user ? (
              <div ref={accountRef} className="relative hidden lg:block">
                {/* ACCOUNT BUTTON */}

                <button
                  type="button"
                  aria-expanded={accountOpen}
                  aria-haspopup="menu"
                  onClick={handleAccountToggle}
                  className={`flex h-9 items-center gap-1.5 rounded-full border px-4 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-[#7C93FF] ${
                    accountOpen
                      ? "border-[#7C93FF]/40 bg-[#7C93FF]/14 shadow-[0_0_24px_rgba(124,147,255,0.08)]"
                      : "border-[#7C93FF]/20 bg-[#7C93FF]/8 hover:border-[#7C93FF]/35 hover:bg-[#7C93FF]/12"
                  }`}
                >
                  <span className="text-xs text-[#B5B2A9]">Hello,</span>

                  <span className="max-w-32 truncate text-xs font-semibold text-[#9BADFF]">
                    {username}
                  </span>

                  <svg
                    viewBox="0 0 20 20"
                    fill="none"
                    aria-hidden="true"
                    className={`ml-0.5 h-3.5 w-3.5 shrink-0 text-[#7C93FF] transition-transform duration-200 ${
                      accountOpen ? "rotate-180" : ""
                    }`}
                  >
                    <path
                      d="M5 7.5L10 12.5L15 7.5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {/* ACCOUNT DROPDOWN */}

                {accountOpen && (
                  <div
                    role="menu"
                    className="absolute top-[calc(100%+10px)] right-0 z-60 w-56 overflow-hidden rounded-2xl border border-white/10 bg-[#111318]/98 p-1.5 shadow-[0_20px_60px_rgba(0,0,0,0.55)] backdrop-blur-xl"
                    style={{
                      animation: "accountDropdownIn 0.18s ease-out both",
                    }}
                  >
                    {/* USER INFO */}

                    <div className="border-b border-white/8 px-3 py-3">
                      <p className="text-[10px] font-medium tracking-[0.12em] text-[#6F6C65] uppercase">
                        Tài khoản
                      </p>

                      <div className="mt-2 flex items-center gap-2.5">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#7C93FF]/25 bg-[#7C93FF]/10">
                          <span className="text-xs font-semibold text-[#9BADFF]">
                            {username ? username.charAt(0).toUpperCase() : "U"}
                          </span>
                        </div>

                        <div className="min-w-0">
                          <p className="truncate text-sm font-semibold text-[#F2F0EA]">
                            {username}
                          </p>

                          <p className="mt-0.5 text-[11px] text-[#7E7B73]">Portfolio account</p>
                        </div>
                      </div>
                    </div>

                    {/* MENU */}

                    <div className="pt-1.5">
                      {/* PROFILE */}

                      <Link
                        href="/profile"
                        role="menuitem"
                        onClick={() => setAccountOpen(false)}
                        className="group flex h-10 w-full items-center gap-3 rounded-xl px-3 text-sm text-[#D6D3CB] transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-[#7C93FF]"
                      >
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0 text-[#9BADFF]"
                        >
                          <circle cx="10" cy="6.5" r="3" stroke="currentColor" strokeWidth="1.5" />

                          <path
                            d="M4.5 16C4.9 12.9 6.8 11.5 10 11.5C13.2 11.5 15.1 12.9 15.5 16"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>

                        <span>Profile</span>

                        <span
                          aria-hidden="true"
                          className="ml-auto text-xs text-white/25 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:text-white/50"
                        >
                          →
                        </span>
                      </Link>

                      {/* SEPARATOR */}

                      <div className="my-1 h-px bg-white/6" />

                      {/* LOGOUT */}

                      <button
                        type="button"
                        role="menuitem"
                        onClick={handleLogout}
                        className="group flex h-10 w-full items-center gap-3 rounded-xl px-3 text-sm text-red-300/75 transition-colors hover:bg-red-400/8 hover:text-red-300 focus-visible:outline-2 focus-visible:outline-red-400/50"
                      >
                        <svg
                          viewBox="0 0 20 20"
                          fill="none"
                          aria-hidden="true"
                          className="h-4 w-4 shrink-0"
                        >
                          <path
                            d="M8 4H5.5C4.67 4 4 4.67 4 5.5V14.5C4 15.33 4.67 16 5.5 16H8"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />

                          <path
                            d="M12 6L16 10L12 14"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />

                          <path
                            d="M7 10H16"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                          />
                        </svg>

                        <span>Đăng xuất</span>

                        <span
                          aria-hidden="true"
                          className="ml-auto text-xs opacity-40 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:opacity-80"
                        >
                          →
                        </span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="hidden items-center gap-1 lg:flex">
                <Link
                  href="/login"
                  className="flex h-9 items-center rounded-full px-4 text-xs font-medium text-[#B5B2A9] transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-[#7C93FF]"
                >
                  Đăng nhập
                </Link>

                <Link
                  href="/register"
                  className="flex h-9 items-center rounded-full border border-white/12 px-4 text-xs font-medium text-[#F2F0EA] transition-colors hover:border-[#7C93FF]/50 hover:bg-[#7C93FF]/10 focus-visible:outline-2 focus-visible:outline-[#7C93FF]"
                >
                  Đăng ký
                </Link>
              </div>
            )}

            {/* ============================================= */}
            {/* CONTACT                                       */}
            {/* ============================================= */}

            <button
              type="button"
              onClick={() => setContactOpen(true)}
              className="hidden h-9 items-center gap-1.5 rounded-full bg-[#F2F0EA] px-4 text-xs font-semibold text-[#0C0D10] transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7C93FF] sm:flex"
            >
              Liên hệ
              <span aria-hidden="true">↗</span>
            </button>

            {/* ============================================= */}
            {/* MOBILE MENU BUTTON                            */}
            {/* ============================================= */}

            <button
              type="button"
              aria-label={mobileMenuOpen ? "Đóng menu" : "Mở menu"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen((previous) => !previous)}
              className={`relative flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#7C93FF] md:hidden ${
                mobileMenuOpen
                  ? "border-[#7C93FF]/40 bg-[#7C93FF]/10"
                  : "border-white/10 bg-white/3 hover:bg-white/6"
              }`}
            >
              <span className="relative block h-3.5 w-5">
                <span
                  className={`absolute left-0 h-px w-5 bg-[#F2F0EA] transition-all duration-300 ${
                    mobileMenuOpen ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />

                <span
                  className={`absolute top-1.5 left-0 h-px w-3.5 bg-[#F2F0EA] transition-opacity duration-200 ${
                    mobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />

                <span
                  className={`absolute left-0 h-px w-5 bg-[#F2F0EA] transition-all duration-300 ${
                    mobileMenuOpen ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </div>

        {/* =============================================== */}
        {/* MOBILE MENU                                     */}
        {/* =============================================== */}

        {mobileMenuOpen && (
          <MobileMenu
            pathname={pathname}
            currentCategory={currentCategory}
            skillsOpen={mobileSkillsOpen}
            onSkillsToggle={handleMobileSkillsToggle}
            projectsOpen={mobileProjectsOpen}
            onProjectsToggle={handleMobileProjectsToggle}
            onClose={closeMobileMenu}
            onContact={handleMobileContact}
            hydrated={hydrated}
            authReady={authReady}
            username={username}
          />
        )}
      </header>

      {/* ================================================= */}
      {/* MOBILE OVERLAY                                    */}
      {/* ================================================= */}

      {mobileMenuOpen && (
        <button
          type="button"
          aria-label="Đóng menu"
          onClick={closeMobileMenu}
          className="fixed inset-0 z-40 bg-black/55 md:hidden"
        />
      )}

      {/* ================================================= */}
      {/* CONTACT POPUP                                     */}
      {/* ================================================= */}

      <ContactPopup open={contactOpen} onClose={() => setContactOpen(false)} />

      {/* ================================================= */}
      {/* ACCOUNT DROPDOWN ANIMATION                        */}
      {/* ================================================= */}

      <style jsx global>{`
        @keyframes accountDropdownIn {
          from {
            opacity: 0;
            transform: translateY(-6px) scale(0.98);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
      `}</style>
    </>
  );
};

export default HeaderContent;
