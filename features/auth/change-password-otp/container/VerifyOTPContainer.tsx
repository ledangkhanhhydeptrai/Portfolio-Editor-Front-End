"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";

import {
  clearVerifyOTPError,
  clearVerifyOTPSuccess,
  getVerifyOTPRequest,
} from "../ChangePasswordOTPSlice";

import Notification from "@/components/ui/Notification";
import CreateVerifyOTPForm from "../components/CreateVerifyOTPForm";
import Loading from "@/components/ui/Loading";

export default function VerifyOTPContainer() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { successMessage, loading, error, resetToken } = useAppSelector(
    (state) => state.changePasswordOTP,
  );

  const [email, setEmail] = React.useState<string>("");

  const [otp, setOtp] = React.useState<string>("");

  // =========================================
  // SUBMIT
  // =========================================

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(
      getVerifyOTPRequest({
        email,
        otp,
      }),
    );
  };

  // =========================================
  // DEBUG TOKEN
  // =========================================

  React.useEffect(() => {
    console.log("VERIFY OTP RESET TOKEN:", resetToken);
  }, [resetToken]);

  // =========================================
  // CLOSE ERROR
  // =========================================

  const handleCloseError = () => {
    dispatch(clearVerifyOTPError());
  };

  // =========================================
  // CLOSE SUCCESS
  // =========================================

  const handleCloseSuccess = () => {
    // Chỉ xóa notification
    // KHÔNG xóa resetToken
    dispatch(clearVerifyOTPSuccess());

    router.replace("/reset-password");
  };

  return (
    <>
      <Notification
        open={Boolean(error)}
        message={typeof error === "string" ? error : "Giải mã OTP thất bại"}
        severity="error"
        onClose={handleCloseError}
      />

      <Notification
        open={Boolean(successMessage)}
        message={typeof successMessage === "string" ? successMessage : "Xác minh OTP thành công"}
        severity="success"
        onClose={handleCloseSuccess}
      />

      <CreateVerifyOTPForm
        email={email}
        setEmail={setEmail}
        otp={otp}
        setOtp={setOtp}
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
