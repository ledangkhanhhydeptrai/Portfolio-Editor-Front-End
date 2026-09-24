import { ExperienceAccent } from "@/features/experience/experienceTypes";


export const getExperienceAccent = (
  position: string
): ExperienceAccent => {
  const value =
    position.toLowerCase();

  if (
    value.includes("editor") ||
    value.includes("thực tập")
  ) {
    return {
      text: "text-violet-300",
      dot: "bg-violet-400",
      border:
        "border-violet-400/15",
      background:
        "bg-violet-400/5",
      glow:
        "bg-violet-500/8",
      line:
        "from-violet-400/70",
      label: "Thực tập",
    };
  }

  if (
    value.includes("part-time") ||
    value.includes("parttime") ||
    value.includes("part time")
  ) {
    return {
      text: "text-indigo-300",
      dot: "bg-indigo-400",
      border:
        "border-indigo-400/15",
      background:
        "bg-indigo-400/5",
      glow:
        "bg-indigo-500/8",
      line:
        "from-indigo-400/70",
      label: "Bán thời gian",
    };
  }

  return {
    text: "text-slate-300",
    dot: "bg-slate-400",
    border: "border-white/10",
    background: "bg-white/3",
    glow: "bg-slate-500/5",
    line: "from-slate-400/50",
    label: "Kinh nghiệm",
  };
};