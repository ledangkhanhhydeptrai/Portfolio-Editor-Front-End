export interface ExperienceProps {
  id: string;
  companyName: string;
  position: string;
  description: string;
  startDate: string;
  endDate: string;
  isCurrent: boolean;
  displayOrder: number;
}
export interface ExperienceAccent {
  text: string;
  dot: string;
  border: string;
  background: string;
  glow: string;
  line: string;
  label: string;
}