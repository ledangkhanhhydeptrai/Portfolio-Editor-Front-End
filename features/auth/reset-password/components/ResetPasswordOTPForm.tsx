"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Eye,
  EyeOff,
  KeyRound,
  Lock,
} from "lucide-react";

import { ResetPassword } from "../reset-password-types";

const CURRENT_STEP = 2; // 0: Nhập email, 1: Xác minh OTP, 2: Đặt mật khẩu mới

const STEPS = [
  { title: "Nhập email", desc: "Email bạn đã dùng để đăng ký tài khoản." },
  { title: "Xác minh mã OTP", desc: "Nhập mã gồm 6 chữ số được gửi vào hộp thư." },
  { title: "Đặt mật khẩu mới", desc: "Tạo mật khẩu mới và đăng nhập lại." },
];

const inputClass =
  "h-13 w-full rounded-xl border border-white/10 bg-white/4 pr-12 pl-12 text-[15px] text-white/90 transition outline-none " +
  "placeholder:text-white/25 hover:border-white/20 focus:border-[#8FA2FF]/60 focus:bg-white/6 focus:ring-4 focus:ring-[#8FA2FF]/12";

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

const ResetPasswordOTPForm: React.FC<ResetPassword> = ({
  confirmPassword,
  newPassword,
  setConfirmPassword,
  setNewPassword,
  onSubmit,
}) => {
  const [showNewPassword, setShowNewPassword] = React.useState<boolean>(false);

  const [showConfirmPassword, setShowConfirmPassword] = React.useState<boolean>(false);

  const mismatch = confirmPassword.length > 0 && confirmPassword !== newPassword;
  const canSubmit = !!newPassword && confirmPassword === newPassword;

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
            Bước cuối cùng: đặt mật khẩu mới.
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
            href="/login"
            className="inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-white/50 transition hover:bg-white/5 hover:text-white focus-visible:outline-2 focus-visible:outline-[#91A4FF]"
          >
            <ArrowLeft className="h-4 w-4" />
            Đăng nhập
          </Link>
        </div>

        {/* Form block */}
        <div className="relative flex flex-1 items-center justify-center py-10">
          <div className="w-full max-w-110">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#8FA2FF]/12 text-[#A9B8FF] ring-1 ring-[#8FA2FF]/20">
              <KeyRound className="h-6 w-6" />
            </span>

            <h1 className="mt-6 text-3xl font-semibold tracking-[-0.03em] text-[#F4F6F5]">
              Tạo mật khẩu mới
            </h1>

            <p className="mt-2 text-[15px] leading-6 text-white/50">
              Tài khoản của bạn đã được xác minh. Hãy tạo mật khẩu mới để hoàn tất việc khôi phục.
            </p>

            <form onSubmit={onSubmit} className="mt-8 space-y-5" noValidate>
              {/* NEW PASSWORD */}

              <div>
                <label
                  htmlFor="new-password"
                  className="mb-2 block text-sm font-medium text-white/75"
                >
                  Mật khẩu mới
                </label>

                <div className="relative">
                  <Lock className="pointer-events-none absolute top-1/2 left-4 h-4.5 w-4.5 -translate-y-1/2 text-white/30" />

                  <input
                    id="new-password"
                    type={showNewPassword ? "text" : "password"}
                    value={newPassword}
                    onChange={(event) => setNewPassword(event.target.value)}
                    placeholder="Nhập mật khẩu mới"
                    autoComplete="new-password"
                    autoFocus
                    className={inputClass}
                  />

                  <button
                    type="button"
                    onClick={() => setShowNewPassword((value) => !value)}
                    aria-label={showNewPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                    className="absolute top-1/2 right-3 -translate-y-1/2 rounded-md p-1.5 text-white/30 transition hover:text-white/80 focus-visible:outline-2 focus-visible:outline-[#91A4FF]"
                  >
                    {showNewPassword ? (
                      <EyeOff className="h-4.5 w-4.5" />
                    ) : (
                      <Eye className="h-4.5 w-4.5" />
                    )}
                  </button>
                </div>
              </div>

              {/* CONFIRM PASSWORD */}

              <div>
                <label
                  htmlFor="confirm-password"
                  className="mb-2 block text-sm font-medium text-white/75"
                >
                  Xác nhận mật khẩu
                </label>

                <div className="relative">
                  <Lock className="pointer-events-none absolute top-1/2 left-4 h-4.5 w-4.5 -translate-y-1/2 text-white/30" />

                  <input
                    id="confirm-password"
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    placeholder="Nhập lại mật khẩu mới"
                    autoComplete="new-password"
                    aria-invalid={mismatch}
                    className={`${inputClass} ${
                      mismatch
                        ? "border-red-400/60 focus:border-red-400/70 focus:ring-red-400/15"
                        : ""
                    }`}
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((value) => !value)}
                    aria-label={showConfirmPassword ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
                    className="absolute top-1/2 right-3 -translate-y-1/2 rounded-md p-1.5 text-white/30 transition hover:text-white/80 focus-visible:outline-2 focus-visible:outline-[#91A4FF]"
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4.5 w-4.5" />
                    ) : (
                      <Eye className="h-4.5 w-4.5" />
                    )}
                  </button>
                </div>

                {mismatch && (
                  <p className="mt-2 text-[13px] text-red-300" role="alert">
                    Hai mật khẩu chưa khớp nhau.
                  </p>
                )}
              </div>

              {/* INFO */}

              <div className="flex items-start gap-3 rounded-xl bg-emerald-400/8 p-3.5 ring-1 ring-emerald-400/15">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-300" />
                <p className="text-[13px] leading-5 text-white/55">
                  Mã OTP đã được xác minh thành công. Bạn có thể đặt mật khẩu mới ngay bây giờ.
                </p>
              </div>

              {/* SUBMIT */}

              <button
                type="submit"
                disabled={!canSubmit}
                className="group flex h-13 w-full items-center justify-center gap-2 rounded-xl bg-[#ECEDE8] px-5 text-[15px] font-semibold text-[#101416] shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition duration-200 hover:bg-white focus-visible:ring-2 focus-visible:ring-[#91A4FF] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1618] focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-white/10 disabled:text-white/30 disabled:shadow-none"
              >
                Cập nhật mật khẩu
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResetPasswordOTPForm;
