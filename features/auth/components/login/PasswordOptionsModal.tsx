"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ChevronRight, KeyRound, MailCheck, ShieldCheck, X } from "lucide-react";

interface PasswordOptionsModalProps {
  open: boolean;
  onClose: () => void;
}

const PasswordOptionsModal: React.FC<PasswordOptionsModalProps> = ({ open, onClose }) => {
  const router = useRouter();
  const firstOptionRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (!open) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    firstOptionRef.current?.focus();

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) {
    return null;
  }

  const handleForgotPassword = () => {
    onClose();
    router.push("/change-password-otp");
  };

  const handleChangePassword = () => {
    onClose();
    router.push("/change-password");
  };

  return (
    <div className="fixed inset-0 z-100 flex items-end justify-center px-4 pb-4 sm:items-center sm:pb-0">
      <style>{`
        @keyframes pom-fade { from { opacity: 0 } to { opacity: 1 } }
        @keyframes pom-rise { from { opacity: 0; transform: translateY(14px) scale(.98) } to { opacity: 1; transform: none } }
        .pom-overlay { animation: pom-fade .2s ease-out both }
        .pom-panel { animation: pom-rise .28s cubic-bezier(.2,.8,.2,1) both }
        @media (prefers-reduced-motion: reduce) {
          .pom-overlay, .pom-panel { animation: none }
        }
      `}</style>

      {/* Overlay */}
      <button
        type="button"
        aria-label="Đóng"
        tabIndex={-1}
        onClick={onClose}
        className="pom-overlay absolute inset-0 cursor-default bg-[#050A0B]/75 backdrop-blur-sm"
      />

      {/* Modal */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="password-options-title"
        aria-describedby="password-options-desc"
        className="pom-panel relative z-10 w-full max-w-120 overflow-hidden rounded-3xl border border-white/10 bg-[#0E1618] shadow-[0_40px_120px_rgba(0,0,0,0.6)]"
      >
        {/* Header */}
        <div className="relative border-b border-white/6 bg-linear-to-b from-white/4 to-transparent px-6 pt-6 pb-5 sm:px-7 sm:pt-7">
          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng"
            className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center rounded-full text-white/45 transition hover:bg-white/8 hover:text-white focus-visible:outline-2 focus-visible:outline-[#8FA2FF]"
          >
            <X className="h-4.5 w-4.5" />
          </button>

          <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#8FA2FF] text-[#0E1618] shadow-[0_8px_24px_rgba(143,162,255,0.35)]">
            <ShieldCheck className="h-6 w-6" />
          </span>

          <h2
            id="password-options-title"
            className="mt-5 text-2xl font-semibold tracking-[-0.02em] text-[#F4F6F5]"
          >
            Bạn cần hỗ trợ gì về mật khẩu?
          </h2>

          <p id="password-options-desc" className="mt-1.5 text-sm leading-6 text-white/50">
            Chọn cách phù hợp với tình huống của bạn.
          </p>
        </div>

        {/* Options */}
        <div className="space-y-3 px-4 py-4 sm:px-5 sm:py-5">
          <button
            ref={firstOptionRef}
            type="button"
            onClick={handleForgotPassword}
            className="group flex w-full items-center gap-4 rounded-2xl border border-white/8 bg-white/3 p-4 text-left transition duration-200 hover:border-[#8FA2FF]/40 hover:bg-[#8FA2FF]/8 focus-visible:outline-2 focus-visible:outline-[#8FA2FF]"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#8FA2FF]/15 text-[#A9B8FF] transition group-hover:bg-[#8FA2FF] group-hover:text-[#0E1618]">
              <MailCheck className="h-6 w-6" />
            </span>

            <span className="min-w-0 flex-1">
              <span className="block text-[15px] font-semibold text-white">Tôi quên mật khẩu</span>
              <span className="mt-1 block text-[13px] leading-5 text-white/50">
                Nhận mã OTP qua email để xác minh, rồi tạo mật khẩu mới.
              </span>
              <span className="mt-2 inline-block rounded-md bg-white/6 px-2 py-0.5 text-[11px] text-white/55">
                Chỉ cần email đã đăng ký
              </span>
            </span>

            <ChevronRight className="h-5 w-5 shrink-0 text-white/25 transition duration-200 group-hover:translate-x-0.5 group-hover:text-[#A9B8FF]" />
          </button>

          <button
            type="button"
            onClick={handleChangePassword}
            className="group flex w-full items-center gap-4 rounded-2xl border border-white/8 bg-white/3 p-4 text-left transition duration-200 hover:border-emerald-400/40 hover:bg-emerald-400/8 focus-visible:outline-2 focus-visible:outline-emerald-400"
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-400/15 text-emerald-300 transition group-hover:bg-emerald-400 group-hover:text-[#0E1618]">
              <KeyRound className="h-6 w-6" />
            </span>

            <span className="min-w-0 flex-1">
              <span className="block text-[15px] font-semibold text-white">
                Tôi muốn đổi mật khẩu
              </span>
              <span className="mt-1 block text-[13px] leading-5 text-white/50">
                Nhập mật khẩu hiện tại để đặt sang mật khẩu mới.
              </span>
              <span className="mt-2 inline-block rounded-md bg-white/6 px-2 py-0.5 text-[11px] text-white/55">
                Cần nhớ mật khẩu hiện tại
              </span>
            </span>

            <ChevronRight className="h-5 w-5 shrink-0 text-white/25 transition duration-200 group-hover:translate-x-0.5 group-hover:text-emerald-300" />
          </button>
        </div>

        {/* Footer */}
        <div className="border-t border-white/6 px-4 py-3 sm:px-5">
          <button
            type="button"
            onClick={onClose}
            className="w-full rounded-xl py-2.5 text-sm font-medium text-white/50 transition hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-[#8FA2FF]"
          >
            Để sau
          </button>
        </div>
      </div>
    </div>
  );
};

export default PasswordOptionsModal;
