import React from "react";
import Link from "next/link";

import { FormField, PasswordField } from "../register";
import type { LoginField } from "./types";
import { LoginProps } from "../../authTypes";

interface LoginFormProps {
  values: LoginProps;
  loading: boolean;
  onChange: (field: LoginField, value: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onForgotPassword: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
  values,
  loading,
  onChange,
  onSubmit,
  onForgotPassword,
}) => (
  <>
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <FormField
        id="email"
        label="Email"
        type="email"
        value={values.email}
        onChange={(v) => onChange("email", v)}
        placeholder="example@gmail.com"
        autoComplete="email"
        disabled={loading}
      />

      <PasswordField
        value={values.password}
        onChange={(v) => onChange("password", v)}
        disabled={loading}
        autoComplete="current-password"
        showStrength={false}
        labelAction={
          <button
            type="button"
            onClick={onForgotPassword}
            className="text-sm font-medium text-[#91A4FF] transition-colors hover:text-[#B1BEFF]"
          >
            Quên mật khẩu?
          </button>
        }
      />

      <button
        type="submit"
        disabled={loading}
        className="mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#F2B544] text-sm font-semibold text-[#0D1618] transition hover:bg-[#F7C766] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2B544] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#0D1618]/25 border-t-[#0D1618]" />
            <span>Đang đăng nhập...</span>
          </>
        ) : (
          <span>Đăng nhập</span>
        )}
      </button>
    </form>

    <p className="mt-8 text-center text-sm text-white/45">
      Chưa có tài khoản?{" "}
      <Link
        href="/register"
        className="font-medium text-[#F2B544] underline-offset-4 transition hover:underline"
      >
        Tạo tài khoản
      </Link>
    </p>

    <p className="mt-4 text-center">
      <Link href="/" className="text-xs text-white/35 transition hover:text-white/70">
        Quay lại portfolio
      </Link>
    </p>
  </>
);

export default LoginForm;
