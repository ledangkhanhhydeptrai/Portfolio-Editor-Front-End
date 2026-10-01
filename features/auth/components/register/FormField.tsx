import React from "react";

interface FormFieldProps {
  id: string;
  label: string;
  type?: React.HTMLInputTypeAttribute;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  autoComplete?: string;
  disabled?: boolean;
  hint?: string;
  /** Phần tử đặt bên phải nhãn, ví dụ link "Quên mật khẩu?". */
  labelAction?: React.ReactNode;
  endAdornment?: React.ReactNode;
  children?: React.ReactNode;
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  autoComplete,
  disabled,
  hint,
  labelAction,
  endAdornment,
  children
}) => (
  <div>
    <div className="mb-2 flex items-center justify-between">
      <label htmlFor={id} className="text-sm font-medium text-white/75">
        {label}
      </label>

      {labelAction}
    </div>

    <div className="relative">
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        autoComplete={autoComplete}
        disabled={disabled}
        aria-describedby={hint ? `${id}-hint` : undefined}
        className={`h-12 w-full rounded-lg border border-white/12 bg-white/4 px-4 text-sm text-[#E9EFEC] outline-none transition placeholder:text-white/25 hover:border-white/20 focus:border-[#F2B544] focus:ring-2 focus:ring-[#F2B544]/25 disabled:cursor-not-allowed disabled:opacity-50 ${
          endAdornment ? "pr-12" : ""
        }`}
      />

      {endAdornment && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-2">
          {endAdornment}
        </div>
      )}
    </div>

    {hint && (
      <p id={`${id}-hint`} className="mt-2 text-xs text-white/40">
        {hint}
      </p>
    )}

    {children}
  </div>
);

export default FormField;
