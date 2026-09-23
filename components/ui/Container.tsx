import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
}

const SIZE_MAP: Record<NonNullable<ContainerProps["size"]>, string> = {
  sm: "max-w-2xl",
  md: "max-w-4xl",
  lg: "max-w-5xl",
  xl: "max-w-6xl",
  full: "max-w-none"
};

export default function Container({
  children,
  className = "",
  size = "lg"
}: ContainerProps) {
  return (
    <div className={`mx-auto w-full px-6 ${SIZE_MAP[size]} ${className}`}>
      {children}
    </div>
  );
}
