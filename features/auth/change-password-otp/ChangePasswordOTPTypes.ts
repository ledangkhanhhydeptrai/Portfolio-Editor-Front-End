import React from "react";

export interface ChangePasswordForgotPasswordProps {
  email: string;
}
export interface ChangePasswordForgotPassword extends ChangePasswordForgotPasswordProps {
  setEmail: (v: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
export interface VerifyOTPResponse {
  resetToken: string;
}
export interface VerifyOTPRequest {
  email: string;
  otp: string;
}
export interface VerifyOTPRequestForm extends VerifyOTPRequest {
  setEmail: (v: string) => void;
  setOtp: (v: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
export interface VerifyOTPResponsePayload extends VerifyOTPResponse {
  successMessage: string;
}
