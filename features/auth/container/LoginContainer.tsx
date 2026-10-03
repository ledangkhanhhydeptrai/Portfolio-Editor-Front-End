"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import Notification from "@/components/ui/Notification";

import { clearAuthError, clearAuthSuccess, createLoginRequest } from "../authSlice";

import { LoginBrandPanel, LoginForm, LoginHeader, PasswordOptionsModal } from "../components/login";

import type { LoginField } from "../components/login";
import { LoginProps } from "../authTypes";

const LoginContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { successMessage, loading, error } = useAppSelector((state) => state.auth);

  const [values, setValues] = React.useState<LoginProps>({
    email: "",
    password: "",
  });
  const [passwordOptionsOpen, setPasswordOptionsOpen] = React.useState(false);
  const handleChange = (field: LoginField, value: string) => {
    setValues((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(createLoginRequest(values));
  };

  React.useEffect(() => {
    if (!successMessage) {
      return;
    }

    const timer = window.setTimeout(() => {
      dispatch(clearAuthSuccess());
      router.replace("/");
    }, 1000);

    return () => {
      window.clearTimeout(timer);
    };
  }, [successMessage, dispatch, router]);

  return (
    <>
      <Notification
        open={Boolean(error)}
        message={typeof error === "string" ? error : "Đăng nhập thất bại"}
        severity="error"
        onClose={() => dispatch(clearAuthError())}
      />

      <Notification
        open={Boolean(successMessage)}
        message={
          typeof successMessage === "string" ? successMessage : "Đăng nhập tài khoản thành công"
        }
        severity="success"
        onClose={() => dispatch(clearAuthSuccess())}
      />

      <main className="h-dvh overflow-x-hidden overflow-y-auto bg-[#0D1618] text-[#E9EFEC]">
        <div className="mx-auto grid min-h-dvh w-full max-w-375 lg:grid-cols-2">
          <LoginBrandPanel />

          <section className="flex min-h-dvh items-start justify-center px-6 py-12 sm:px-10 lg:items-center lg:px-14 xl:px-20">
            <div className="w-full max-w-md">
              <LoginHeader />

              <LoginForm
                values={values}
                loading={loading}
                onChange={handleChange}
                onSubmit={handleSubmit}
                onForgotPassword={() => setPasswordOptionsOpen(true)}
              />
            </div>
          </section>
        </div>
        <PasswordOptionsModal
          open={passwordOptionsOpen}
          onClose={() => setPasswordOptionsOpen(false)}
        />
      </main>
    </>
  );
};

export default LoginContainer;
