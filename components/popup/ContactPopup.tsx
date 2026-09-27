"use client";

import React from "react";

import ContactPage from "@/app/contact/page";

interface ContactPopupProps {
  open: boolean;
  onClose: () => void;
}

const ContactPopup: React.FC<ContactPopupProps> = ({ open, onClose }) => {
  React.useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const originalHtmlOverflow = document.documentElement.style.overflow;

    const originalBodyOverflow = document.body.style.overflow;

    document.documentElement.style.overflow = "hidden";

    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.documentElement.style.overflow = originalHtmlOverflow;

      document.body.style.overflow = originalBodyOverflow;

      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  return (
    <div
      className="
        fixed
        inset-0
        z-100
        h-dvh
        w-screen
        overflow-y-auto
        bg-[#1B1E29]
      "
    >
      {/* TOP BAR */}
      <div className="pointer-events-none fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-5 lg:px-10">
        <div className="pointer-events-auto flex items-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-indigo-300" />

          <span className="font-mono text-[9px] uppercase tracking-[0.24em] text-slate-500">
            Contact
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          aria-label="Đóng"
          className="
            pointer-events-auto
            flex
            h-11
            w-11
            items-center
            justify-center
            rounded-full
            border
            border-white/10
            bg-[#1B1E29]/90
            text-slate-400
            shadow-xl
            backdrop-blur-xl
            transition-all
            duration-300
            hover:rotate-90
            hover:border-indigo-300/30
            hover:bg-[#252936]
            hover:text-white
          "
        >
          <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4">
            <path
              d="M6 6L18 18M18 6L6 18"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>

      <ContactPage />
    </div>
  );
};

export default ContactPopup;
