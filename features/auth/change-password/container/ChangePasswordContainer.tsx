"use client";

import React from "react";
import { ShieldCheck, KeyRound, LogOut } from "lucide-react";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";

import {
  changePasswordRequest,
  clearChangePasswordError,
  clearChangePasswordState,
  clearChangePasswordSuccess,
} from "../ChangePasswordSlice";

import ChangePasswordForm from "../components/ChangePasswordForm";

import Loading from "@/components/ui/Loading";
import ErrorMessage from "@/components/ui/ErrorMessage";
import { useRouter } from "next/navigation";
import Notification from "@/components/ui/Notification";

const TIPS = [
  { icon: KeyRound, text: "Dùng ít nhất 8 ký tự, kết hợp chữ hoa, chữ thường và số." },
  { icon: ShieldCheck, text: "Không dùng lại mật khẩu của các dịch vụ khác." },
  { icon: LogOut, text: "Sau khi đổi, các thiết bị khác có thể cần đăng nhập lại." },
];

const ChangePasswordContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { loading, error, successMessage } = useAppSelector((state) => state.changePassword);

  const [email, setEmail] = React.useState<string>("");

  const [newPassword, setNewPassword] = React.useState<string>("");

  const [confirmPassword, setConfirmPassword] = React.useState<string>("");
  React.useEffect(() => {
    dispatch(clearChangePasswordState());

    return () => {
      dispatch(clearChangePasswordState());
    };
  }, [dispatch]);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(
      changePasswordRequest({
        email,
        newPassword,
        confirmPassword,
      }),
    );
  };
  React.useEffect(() => {
    if (!successMessage) {
      return;
    }

    const timer = window.setTimeout(() => {
      router.replace("/login");
    }, 1000);

    return () => {
      window.clearTimeout(timer);
    };
  }, [successMessage, dispatch, router]);
  const handleCloseError = () => {
    dispatch(clearChangePasswordError());
  };

  const handleCloseSuccess = () => {
    dispatch(clearChangePasswordSuccess());
    router.replace("/login");
  };
  return (
    <>
      <Notification
        open={Boolean(error)}
        message={typeof error === "string" ? error : "Đổi mật khẩu thất bại"}
        severity="error"
        onClose={handleCloseError}
      />

      <Notification
        open={Boolean(successMessage)}
        message={typeof successMessage === "string" ? successMessage : "Đổi mật khẩu thành công"}
        severity="success"
        onClose={handleCloseSuccess}
      />
      <main className="grid min-h-screen bg-white lg:grid-cols-[minmax(0,5fr)_minmax(0,6fr)]">
        {/* Bên trái: thông điệp + lưu ý bảo mật */}
        <aside className="relative hidden overflow-hidden bg-teal-950 text-teal-50 lg:flex lg:flex-col lg:justify-between lg:p-14">
          {/* Vòng tròn đồng tâm trang trí */}
          <div aria-hidden className="pointer-events-none absolute -right-40 -bottom-40">
            {[560, 420, 280, 140].map((size) => (
              <span
                key={size}
                className="absolute rounded-full border border-teal-700/40"
                style={{
                  width: size,
                  height: size,
                  right: -size / 2,
                  bottom: -size / 2,
                }}
              />
            ))}
          </div>

          <div className="relative flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-300 text-teal-950">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <span className="text-lg font-semibold tracking-tight">Tài khoản của bạn</span>
          </div>

          <div className="relative max-w-md">
            <h1 className="text-4xl leading-tight font-semibold tracking-tight">
              Đổi mật khẩu trong vài giây, giữ tài khoản an toàn lâu dài.
            </h1>

            <ul className="mt-10 space-y-5">
              {TIPS.map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-start gap-4">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-900 text-amber-300">
                    <Icon className="h-4.5 w-4.5" />
                  </span>
                  <p className="text-[15px] leading-relaxed text-teal-100/90">{text}</p>
                </li>
              ))}
            </ul>
          </div>

          <p className="relative text-sm text-teal-200/60">
            Cần hỗ trợ? Liên hệ quản trị viên hệ thống.
          </p>
        </aside>

        {/* Bên phải: form */}
        <section className="relative flex items-center justify-center px-6 py-12 sm:px-10">
          <div className="w-full max-w-md">
            <header className="mb-8">
              <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
                Đặt lại mật khẩu
              </h2>
              <p className="mt-2 text-[15px] text-slate-500">
                Nhập email và chọn mật khẩu mới cho tài khoản của bạn.
              </p>
            </header>

            {error && (
              <div className="mb-5" role="alert">
                <ErrorMessage />
              </div>
            )}

            <ChangePasswordForm
              email={email}
              setEmail={setEmail}
              newPassword={newPassword}
              setNewPassword={setNewPassword}
              confirmPassword={confirmPassword}
              setConfirmPassword={setConfirmPassword}
              onSubmit={handleSubmit}
              loading={loading}
            />
          </div>

          {/* Loading phủ lên phần form */}
          {loading && (
            <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/70 backdrop-blur-[1px]">
              <Loading />
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default ChangePasswordContainer;
