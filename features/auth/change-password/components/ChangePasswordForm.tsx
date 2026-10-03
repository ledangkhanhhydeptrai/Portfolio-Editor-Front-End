"use client";

import React from "react";
import { Eye, EyeOff, Lock, Mail, ArrowRight } from "lucide-react";

interface ChangePasswordFormProps {
  email: string;
  setEmail: (value: string) => void;
  newPassword: string;
  setNewPassword: (value: string) => void;
  confirmPassword: string;
  setConfirmPassword: (value: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  loading?: boolean;
}

const inputClass =
  "w-full rounded-xl border border-slate-300 bg-white py-3 pl-11 pr-11 text-[15px] text-slate-900 " +
  "placeholder:text-slate-400 transition focus:border-teal-700 focus:outline-none focus:ring-4 focus:ring-teal-700/15";

const ChangePasswordForm: React.FC<ChangePasswordFormProps> = ({
  email,
  setEmail,
  newPassword,
  setNewPassword,
  confirmPassword,
  setConfirmPassword,
  onSubmit,
  loading = false,
}) => {
  const [showNew, setShowNew] = React.useState(false);
  const [showConfirm, setShowConfirm] = React.useState(false);

  const mismatch = confirmPassword.length > 0 && confirmPassword !== newPassword;
  const canSubmit = !!email && !!newPassword && confirmPassword === newPassword && !loading;

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      {/* Email */}
      <div>
        <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-slate-700">
          Email
        </label>
        <div className="relative">
          <Mail className="pointer-events-none absolute top-1/2 left-4 h-4.5 w-4.5 -translate-y-1/2 text-slate-400" />
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="ten@congty.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClass}
            required
          />
        </div>
      </div>

      {/* New password */}
      <div>
        <label htmlFor="newPassword" className="mb-1.5 block text-sm font-medium text-slate-700">
          Mật khẩu mới
        </label>
        <div className="relative">
          <Lock className="pointer-events-none absolute top-1/2 left-4 h-4.5 w-4.5 -translate-y-1/2 text-slate-400" />
          <input
            id="newPassword"
            type={showNew ? "text" : "password"}
            autoComplete="new-password"
            placeholder="Nhập mật khẩu mới"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className={inputClass}
            required
          />
          <button
            type="button"
            onClick={() => setShowNew((v) => !v)}
            aria-label={showNew ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
            className="absolute top-1/2 right-3 -translate-y-1/2 rounded-md p-1 text-slate-400 transition hover:text-slate-700 focus-visible:outline-2 focus-visible:outline-teal-700"
          >
            {showNew ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
          </button>
        </div>
      </div>

      {/* Confirm password */}
      <div>
        <label
          htmlFor="confirmPassword"
          className="mb-1.5 block text-sm font-medium text-slate-700"
        >
          Nhập lại mật khẩu mới
        </label>
        <div className="relative">
          <Lock className="pointer-events-none absolute top-1/2 left-4 h-4.5 w-4.5 -translate-y-1/2 text-slate-400" />
          <input
            id="confirmPassword"
            type={showConfirm ? "text" : "password"}
            autoComplete="new-password"
            placeholder="Nhập lại để xác nhận"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            aria-invalid={mismatch}
            className={`${inputClass} ${
              mismatch ? "border-red-500 focus:border-red-500 focus:ring-red-500/15" : ""
            }`}
            required
          />
          <button
            type="button"
            onClick={() => setShowConfirm((v) => !v)}
            aria-label={showConfirm ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
            className="absolute top-1/2 right-3 -translate-y-1/2 rounded-md p-1 text-slate-400 transition hover:text-slate-700 focus-visible:outline-2 focus-visible:outline-teal-700"
          >
            {showConfirm ? <EyeOff className="h-4.5 w-4.5" /> : <Eye className="h-4.5 w-4.5" />}
          </button>
        </div>
        {mismatch && <p className="mt-1.5 text-xs text-red-600">Hai mật khẩu chưa khớp nhau.</p>}
      </div>

      <button
        type="submit"
        disabled={!canSubmit}
        className="group flex w-full items-center justify-center gap-2 rounded-xl bg-teal-800 px-5 py-3.5 text-[15px] font-semibold text-white transition hover:bg-teal-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-800 disabled:cursor-not-allowed disabled:bg-slate-300"
      >
        {loading ? "Đang lưu..." : "Đổi mật khẩu"}
        {!loading && <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />}
      </button>
    </form>
  );
};

export default ChangePasswordForm;
