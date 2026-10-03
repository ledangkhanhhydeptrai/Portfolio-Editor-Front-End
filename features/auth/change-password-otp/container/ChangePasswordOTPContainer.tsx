"use client";

import React from "react";
import { useRouter } from "next/navigation";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";

import {
  clearChangePasswordOTPError,
  clearChangePasswordOTPState,
  clearChangePasswordOTPSuccess,
  createPasswordOTPRequest,
} from "../ChangePasswordOTPSlice";

import ChangePasswordOTPForm from "../components/ChangePasswordOTPForm";

import Notification from "@/components/ui/Notification";
import Loading from "@/components/ui/Loading";

const ChangePasswordOTPContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { successMessage, loading, error } = useAppSelector((state) => state.changePasswordOTP);

  const [email, setEmail] = React.useState<string>("");

  // =========================================
  // SUBMIT
  // =========================================

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(
      createPasswordOTPRequest({
        email,
      }),
    );
  };

  // =========================================
  // RESET REDUX STATE
  // =========================================

  React.useEffect(() => {
    dispatch(clearChangePasswordOTPState());

    return () => {
      dispatch(clearChangePasswordOTPState());
    };
  }, [dispatch]);

  // =========================================
  // CLOSE ERROR
  // =========================================

  const handleCloseError = () => {
    dispatch(clearChangePasswordOTPError());
  };

  // =========================================
  // CLOSE SUCCESS
  // =========================================

  const handleCloseSuccess = () => {
    dispatch(clearChangePasswordOTPSuccess());

    router.replace("/verify-otp");
  };

  return (
    <>
      {/* ================================= */}
      {/* ERROR NOTIFICATION                */}
      {/* ================================= */}

      <Notification
        open={Boolean(error)}
        message={typeof error === "string" ? error : "Gửi mã OTP thất bại"}
        severity="error"
        onClose={handleCloseError}
      />

      {/* ================================= */}
      {/* SUCCESS NOTIFICATION              */}
      {/* ================================= */}

      <Notification
        open={Boolean(successMessage)}
        message={
          typeof successMessage === "string" ? successMessage : "Mã OTP đã được gửi đến email"
        }
        severity="success"
        onClose={handleCloseSuccess}
      />

      {/* ================================= */}
      {/* FORM                              */}
      {/* ================================= */}

      <ChangePasswordOTPForm email={email} setEmail={setEmail} onSubmit={handleSubmit} />

      {/* ================================= */}
      {/* LOADING OVERLAY                   */}
      {/* ================================= */}

      {loading && (
        <div className="fixed inset-0 z-200 flex items-center justify-center bg-[#0D1618]/60 backdrop-blur-[3px]">
          <Loading />
        </div>
      )}
    </>
  );
};

export default ChangePasswordOTPContainer;
