"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";

import ResetPasswordOTPForm from "../components/ResetPasswordOTPForm";

import Notification from "@/components/ui/Notification";
import Loading from "@/components/ui/Loading";

import {
  clearResetPasswordError,
  clearResetPasswordState,
  clearResetPasswordSuccess,
  resetPasswordRequest,
} from "../reset-password-slice";

import { clearVerifyOTPState } from "../../change-password-otp/ChangePasswordOTPSlice";

export default function ResetPasswordOTPContainer() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  // =========================================
  // RESET PASSWORD STATE
  // =========================================

  const { successMessage, loading, error } = useAppSelector((state) => state.resetPasswordOTP);

  // =========================================
  // RESET TOKEN FROM VERIFY OTP
  // =========================================

  const resetToken = useAppSelector((state) => state.changePasswordOTP.resetToken);
  console.log("Token:", resetToken);
  // =========================================
  // FORM STATE
  // =========================================

  const [newPassword, setNewPassword] = React.useState<string>("");

  const [confirmPassword, setConfirmPassword] = React.useState<string>("");

  // =========================================
  // RESET PAGE STATE
  // =========================================

  React.useEffect(() => {
    dispatch(clearResetPasswordState());
  }, [dispatch]);

  // =========================================
  // SUBMIT
  // =========================================

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!resetToken) {
      console.log("RESET TOKEN NOT FOUND");
      return;
    }

    console.log("RESET TOKEN:", resetToken);

    dispatch(
      resetPasswordRequest({
        resetToken,
        newPassword,
        confirmPassword,
      }),
    );
  };

  // =========================================
  // CLOSE ERROR
  // =========================================

  const handleCloseError = () => {
    dispatch(clearResetPasswordError());
  };

  // =========================================
  // CLOSE SUCCESS
  // =========================================

  const handleCloseSuccess = () => {
    dispatch(clearResetPasswordSuccess());

    // Reset password hoàn tất
    // Bây giờ mới xóa resetToken
    dispatch(clearVerifyOTPState());

    router.replace("/login");
  };

  return (
    <>
      <Notification
        open={Boolean(error)}
        message={typeof error === "string" ? error : "Đặt lại mật khẩu thất bại"}
        severity="error"
        onClose={handleCloseError}
      />

      <Notification
        open={Boolean(successMessage)}
        message={
          typeof successMessage === "string" ? successMessage : "Đặt lại mật khẩu thành công"
        }
        severity="success"
        onClose={handleCloseSuccess}
      />

      <ResetPasswordOTPForm
        newPassword={newPassword}
        setNewPassword={setNewPassword}
        confirmPassword={confirmPassword}
        setConfirmPassword={setConfirmPassword}
        onSubmit={handleSubmit}
      />

      {loading && (
        <div className="fixed inset-0 z-200 flex items-center justify-center bg-[#0D1618]/60 backdrop-blur-[3px]">
          <Loading />
        </div>
      )}
    </>
  );
}
