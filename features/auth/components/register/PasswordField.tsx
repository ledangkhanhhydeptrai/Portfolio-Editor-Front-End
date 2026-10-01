import React from "react";

import FormField from "./FormField";
import PasswordStrength from "./PasswordStrength";

interface PasswordFieldProps {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  autoComplete?: string;
  /** Hiện thanh độ mạnh mật khẩu (dùng cho đăng ký). Mặc định: bật. */
  showStrength?: boolean;
  labelAction?: React.ReactNode;
}

const PasswordField: React.FC<PasswordFieldProps> = ({
  value,
  onChange,
  disabled,
  autoComplete = "new-password",
  showStrength = true,
  labelAction
}) => {
  const [visible, setVisible] = React.useState<boolean>(false);

  return (
    <FormField
      id="password"
      label="Mật khẩu"
      type={visible ? "text" : "password"}
      value={value}
      onChange={onChange}
      placeholder="Nhập mật khẩu"
      autoComplete={autoComplete}
      labelAction={labelAction}
      disabled={disabled}
      endAdornment={
        <button
          type="button"
          onClick={() => setVisible((v) => !v)}
          disabled={disabled}
          aria-label={visible ? "Ẩn mật khẩu" : "Hiện mật khẩu"}
          className="rounded-md px-2.5 py-1.5 text-xs font-medium text-white/50 transition hover:text-white focus-visible:outline-2 focus-visible:outline-[#F2B544]"
        >
          {visible ? "Ẩn" : "Hiện"}
        </button>
      }
    >
      {showStrength && <PasswordStrength password={value} />}
    </FormField>
  );
};

export default PasswordField;
