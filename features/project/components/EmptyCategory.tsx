import React from "react";

interface EmptyCategoryProps {
  title: string;
  description: string;

  accent: "indigo" | "violet" | "emerald";
}

const EmptyCategory: React.FC<EmptyCategoryProps> = ({
  title,
  description,
  accent
}) => {
  const accentClass = {
    indigo: "border-indigo-400/10 bg-indigo-400/3",

    violet: "border-violet-400/10 bg-violet-400/3",

    emerald: "border-emerald-400/10 bg-emerald-400/3"
  }[accent];

  return (
    <div
      className={`rounded-2xl border border-dashed p-10 text-center ${accentClass}`}
    >
      <p className="text-sm font-medium text-slate-300">{title}</p>

      <p className="mx-auto mt-2 max-w-md text-xs leading-6 text-slate-600">
        {description}
      </p>
    </div>
  );
};

export default EmptyCategory;
