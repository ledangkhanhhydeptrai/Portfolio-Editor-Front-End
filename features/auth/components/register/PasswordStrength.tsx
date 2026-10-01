import React from "react";

interface PasswordStrengthProps {
  password: string;
}

const LEVELS = [
  { label: "Yếu", color: "#E5736B" },
  { label: "Tạm được", color: "#F2B544" },
  { label: "Khá", color: "#A6CF7A" },
  { label: "Mạnh", color: "#5CC8A1" }
];

const getScore = (password: string): number => {
  let score = 0;

  if (password.length >= 8) score++;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  return score;
};

const PasswordStrength: React.FC<PasswordStrengthProps> = ({ password }) => {
  if (!password) return null;

  const score = getScore(password);
  const level = LEVELS[Math.max(score - 1, 0)];

  return (
    <div className="mt-3" aria-live="polite">
      <div className="flex gap-1.5">
        {LEVELS.map((_, i) => (
          <span
            key={i}
            className="h-1 flex-1 rounded-full transition-colors duration-300"
            style={{
              backgroundColor:
                i < Math.max(score, 1) ? level.color : "rgba(255,255,255,0.1)"
            }}
          />
        ))}
      </div>

      <p className="mt-2 text-xs text-white/45">
        Độ mạnh mật khẩu:{" "}
        <span style={{ color: level.color }} className="font-medium">
          {level.label}
        </span>
      </p>
    </div>
  );
};

export default PasswordStrength;
