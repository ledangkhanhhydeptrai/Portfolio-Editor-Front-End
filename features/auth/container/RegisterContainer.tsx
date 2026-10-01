"use client";

import React from "react";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import Notification from "@/components/ui/Notification";

import {
  clearAuthError,
  clearAuthSuccess,
  createRegisterRequest
} from "../authSlice";

import {
  RegisterBrandPanel,
  RegisterForm,
  RegisterHeader
} from "../components/register";
import type { RegisterField } from "../components/register";
import { RegisterProps } from "../authTypes";

const RegisterContainer: React.FC = () => {
  const dispatch = useAppDispatch();

  const { successMessage, loading, error } = useAppSelector(
    (state) => state.auth
  );

  const [values, setValues] = React.useState<RegisterProps>({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (field: RegisterField, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(createRegisterRequest(values));
  };

  return (
    <>
      <Notification
        open={Boolean(error)}
        message={typeof error === "string" ? error : "Đăng ký thất bại"}
        severity="error"
        onClose={() => dispatch(clearAuthError())}
      />

      <Notification
        open={Boolean(successMessage)}
        message={
          typeof successMessage === "string"
            ? successMessage
            : "Đăng ký tài khoản thành công"
        }
        severity="success"
        onClose={() => dispatch(clearAuthSuccess())}
      />

      <main className="h-dvh overflow-y-auto overflow-x-hidden bg-[#0D1618] text-[#E9EFEC]">
        <div className="mx-auto grid min-h-dvh w-full max-w-375 lg:grid-cols-2">
          <RegisterBrandPanel />

          <section className="flex min-h-dvh items-start justify-center px-6 py-12 sm:px-10 lg:items-center lg:px-14 xl:px-20">
            <div className="w-full max-w-md">
              <RegisterHeader />

              <RegisterForm
                values={values}
                loading={loading}
                onChange={handleChange}
                onSubmit={handleSubmit}
              />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default RegisterContainer;
