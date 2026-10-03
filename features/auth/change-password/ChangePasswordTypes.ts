export interface ChangePasswordUpdateProps {
  email: string;
  newPassword: string;
  confirmPassword: string;
}
export interface ChangePasswordProps extends ChangePasswordUpdateProps {
  setEmail: (v: string) => void;
  setNewPassword: (v: string) => void;
  setConfirmPassword: (v: string) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}
