import React from "react";
import Link from "next/link";

import FormField from "./FormField";
import PasswordField from "./PasswordField";
import type { RegisterField } from "./types";
import { RegisterProps } from "../../authTypes";

interface RegisterFormProps {
  values: RegisterProps;
  loading: boolean;
  onChange: (field: RegisterField, value: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
  values,
  loading,
  onChange,
  onSubmit
}) => (
  <>
    <form onSubmit={onSubmit} noValidate className="space-y-5">
      <FormField
        id="username"
        label="Username"
        value={values.username}
        onChange={(v) => onChange("username", v)}
        placeholder="Nhập username"
        autoComplete="username"
        disabled={loading}
        hint="Username sẽ là địa chỉ portfolio của bạn."
      />

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
      />

      <button
        type="submit"
        disabled={loading}
        className="mt-2 flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-[#F2B544] text-sm font-semibold text-[#0D1618] transition hover:bg-[#F7C766] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F2B544] active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading ? (
          <>
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#0D1618]/25 border-t-[#0D1618]" />
            <span>Đang tạo tài khoản...</span>
          </>
        ) : (
          <span>Tạo tài khoản</span>
        )}
      </button>
    </form>

    <p className="mt-8 text-center text-sm text-white/45">
      Đã có tài khoản?{" "}
      <Link
        href="/login"
        className="font-medium text-[#F2B544] underline-offset-4 transition hover:underline"
      >
        Đăng nhập
      </Link>
    </p>
  </>
);

export default RegisterForm;
