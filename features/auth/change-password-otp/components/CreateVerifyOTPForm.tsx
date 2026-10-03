"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Info, Mail, ShieldCheck } from "lucide-react";

import { VerifyOTPRequestForm } from "../ChangePasswordOTPTypes";

const OTP_LENGTH = 6;
const CURRENT_STEP = 1; // 0: Nhập email, 1: Xác minh OTP, 2: Đặt mật khẩu mới

const STEPS = [
  { title: "Nhập email", desc: "Email bạn đã dùng để đăng ký tài khoản." },
  { title: "Xác minh mã OTP", desc: "Nhập mã gồm 6 chữ số được gửi vào hộp thư." },
  { title: "Đặt mật khẩu mới", desc: "Tạo mật khẩu mới và đăng nhập lại." },
];

const Brand: React.FC = () => (
  <Link href="/" className="group inline-flex items-center gap-3">
    <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-sm font-bold text-[#F1F4F2] transition group-hover:border-[#8196FF]/40 group-hover:bg-[#8196FF]/10">
      KH
    </span>
    <span className="text-left">
      <span className="block text-sm font-semibold tracking-[-0.02em] text-white/90">Khánh Hỷ</span>
      <span className="block text-xs text-white/35">Portfolio Editor</span>
    </span>
  </Link>
);

const CreateVerifyOTPForm: React.FC<VerifyOTPRequestForm> = ({
  email,
  setEmail,
  otp,
  setOtp,
  onSubmit,
}) => {
  const inputRefs = React.useRef<Array<HTMLInputElement | null>>([]);

  // =========================================
  // OTP DIGITS
  // =========================================

  const otpDigits = Array.from({ length: OTP_LENGTH }, (_, index) => otp[index] || "");

  // =========================================
  // CHANGE OTP
  // =========================================

  const handleOtpChange = (index: number, value: string) => {
    const digit = value.replace(/\D/g, "").slice(-1);

    const nextOtp = otpDigits.slice();

    nextOtp[index] = digit;

    setOtp(nextOtp.join(""));

    if (digit && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // =========================================
  // KEY DOWN
  // =========================================

  const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Backspace" && !otpDigits[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    if (event.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    if (event.key === "ArrowRight" && index < OTP_LENGTH - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // =========================================
  // PASTE OTP
  // =========================================

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();

    const pastedValue = event.clipboardData.getData("text").replace(/\D/g, "").slice(0, OTP_LENGTH);

    if (!pastedValue) {
      return;
    }

    setOtp(pastedValue);

    const nextIndex = Math.min(pastedValue.length, OTP_LENGTH - 1);

    inputRefs.current[nextIndex]?.focus();
  };

  const canSubmit = !!email.trim() && otp.length === OTP_LENGTH;

  return (
    <main className="grid min-h-dvh bg-[#0D1618] text-[#E9EFEC] lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
      {/* ================================= */}
      {/* LEFT: BRAND + STEPS               */}
      {/* ================================= */}

      <aside className="relative hidden overflow-hidden border-r border-white/6 bg-[#111C1F] lg:flex lg:flex-col lg:justify-between lg:p-14">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -top-32 -left-24 h-96 w-96 rounded-full bg-[#6F83FF]/15 blur-[110px]" />
          <div className="absolute -right-24 -bottom-32 h-96 w-96 rounded-full bg-[#5BCFB2]/8 blur-[120px]" />
          <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.8)_1px,transparent_1px)] bg-size-[28px_28px] opacity-[0.03]" />
        </div>

        <div className="relative">
          <Brand />
        </div>

        <div className="relative max-w-md">
          <h2 className="text-4xl leading-[1.15] font-semibold tracking-[-0.03em] text-[#F4F6F5]">
            Gần xong rồi, chỉ cần xác minh mã OTP.
          </h2>

          <ol className="mt-12">
            {STEPS.map((step, index) => {
              const isDone = index < CURRENT_STEP;
              const isCurrent = index === CURRENT_STEP;
              const isLast = index === STEPS.length - 1;

              return (
                <li key={step.title} className="relative flex gap-4 pb-8 last:pb-0">
                  {!isLast && (
                    <span
                      aria-hidden
                      className={`absolute top-10 left-4.25 h-[calc(100%-2.5rem)] w-px ${
                        isDone ? "bg-[#8FA2FF]/50" : "bg-white/10"
                      }`}
                    />
                  )}

                  <span
                    className={`relative flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-semibold ${
                      isCurrent
                        ? "bg-[#8FA2FF] text-[#0D1618] shadow-[0_0_0_6px_rgba(143,162,255,0.15)]"
                        : isDone
                          ? "bg-[#8FA2FF]/20 text-[#A9B8FF] ring-1 ring-[#8FA2FF]/40"
                          : "border border-white/15 bg-[#111C1F] text-white/50"
                    }`}
                  >
                    {isDone ? <Check className="h-4 w-4" /> : index + 1}
                  </span>

                  <div className="pt-1">
                    <p
                      className={`text-[15px] font-semibold ${
                        isCurrent ? "text-white" : isDone ? "text-white/75" : "text-white/60"
                      }`}
                    >
                      {step.title}
                    </p>
                    <p className="mt-1 text-sm leading-6 text-white/40">{step.desc}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        <p className="relative text-sm text-white/30">
          Mọi yêu cầu khôi phục đều được xác minh qua email của bạn.
        </p>
      </aside>

      {/* ================================= */}
      {/* RIGHT: FORM                       */}
      {/* ================================= */}

      <section className="relative flex flex-col px-5 py-8 sm:px-10">
        <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden lg:hidden">
          <div className="absolute -top-32 left-[10%] h-80 w-80 rounded-full bg-[#6F83FF]/10 blur-[100px]" />
        </div>

        {/* Top bar */}
        <div className="relative flex items-center justify-between">
          <div className="lg:invisible">
            <Brand />
          </div>

          <Link
            href="/change-password-otp"
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-white/50 transition hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-[#91A4FF]"
          >
            <ArrowLeft className="h-4 w-4" />
            Dùng email khác
          </Link>
        </div>

        {/* Form block */}
        <div className="relative flex flex-1 items-center justify-center py-10">
          <div className="w-full max-w-110">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8FA2FF]/12 text-[#A9B8FF] ring-1 ring-[#8FA2FF]/20">
              <ShieldCheck className="h-6 w-6" />
            </span>

            <h1 className="mt-6 text-3xl font-semibold tracking-[-0.03em] text-[#F4F6F5]">
              Xác minh mã OTP
            </h1>

            <p className="mt-2 text-[15px] leading-6 text-white/50">
              Nhập mã xác minh gồm 6 chữ số đã được gửi đến email của bạn.
            </p>

            <form onSubmit={onSubmit} className="mt-8">
              {/* EMAIL */}

              <label
                htmlFor="verify-email"
                className="mb-2 block text-sm font-medium text-white/75"
              >
                Email nhận mã
              </label>

              <div className="relative">
                <Mail className="pointer-events-none absolute top-1/2 left-4 h-4.5 w-4.5 -translate-y-1/2 text-white/30" />

                <input
                  id="verify-email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="name@example.com"
                  autoComplete="email"
                  autoFocus={!email}
                  className="h-13 w-full rounded-xl border border-white/10 bg-white/4 pr-4 pl-12 text-[15px] text-white/90 transition outline-none placeholder:text-white/25 hover:border-white/20 focus:border-[#8FA2FF]/60 focus:bg-white/6 focus:ring-4 focus:ring-[#8FA2FF]/12"
                />
              </div>

              {/* OTP */}

              <div className="mt-6">
                <label htmlFor="otp-0" className="mb-2 block text-sm font-medium text-white/75">
                  Mã OTP
                </label>

                <div className="grid grid-cols-6 gap-2 sm:gap-3">
                  {otpDigits.map((digit, index) => (
                    <input
                      key={index}
                      id={`otp-${index}`}
                      ref={(element) => {
                        inputRefs.current[index] = element;
                      }}
                      type="text"
                      inputMode="numeric"
                      autoComplete={index === 0 ? "one-time-code" : "off"}
                      maxLength={1}
                      value={digit}
                      onChange={(event) => handleOtpChange(index, event.target.value)}
                      onKeyDown={(event) => handleKeyDown(index, event)}
                      onFocus={(event) => event.target.select()}
                      onPaste={handlePaste}
                      aria-label={`Chữ số OTP thứ ${index + 1}`}
                      className={`aspect-4/5 w-full rounded-xl border text-center text-2xl font-semibold text-[#F3F5F4] caret-[#91A4FF] transition duration-200 outline-none hover:border-white/25 focus:border-[#8FA2FF]/70 focus:bg-[#8FA2FF]/10 focus:ring-4 focus:ring-[#8FA2FF]/15 ${
                        digit ? "border-[#8FA2FF]/40 bg-[#8FA2FF]/8" : "border-white/10 bg-white/4"
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="mt-5 flex items-start gap-3 rounded-xl bg-[#8FA2FF]/8 p-3.5 ring-1 ring-[#8FA2FF]/12">
                <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#A9B8FF]" />
                <p className="text-[13px] leading-5 text-white/50">
                  Chưa thấy email? Hãy kiểm tra cả mục thư rác (spam). Bạn cũng có thể dán trực tiếp
                  mã vào ô đầu tiên.
                </p>
              </div>

              <button
                type="submit"
                disabled={!canSubmit}
                className="group mt-6 flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-[#ECEDE8] px-5 text-[15px] font-semibold text-[#101416] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition duration-200 hover:bg-white focus-visible:ring-2 focus-visible:ring-[#91A4FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1618] focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-white/30 disabled:shadow-none"
              >
                Xác minh OTP
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CreateVerifyOTPForm;
