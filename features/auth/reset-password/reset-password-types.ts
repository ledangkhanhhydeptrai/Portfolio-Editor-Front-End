import React from "react";

export interface ResetPasswordProps {
  newPassword: string;
  resetToken: string;
  confirmPassword: string;
}
export interface ResetPassword {
  newPassword: string;
  confirmPassword: string;

  setNewPassword: (value: string) => void;
  setConfirmPassword: (value: string) => void;

  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
