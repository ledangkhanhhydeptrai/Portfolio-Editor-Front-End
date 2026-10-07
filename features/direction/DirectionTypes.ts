import { SkillProps } from "../skill/skillTypes";

export interface DirectionProps {
  id: string;
  code: string;
  icon: string;
  title: string;
  description: string;
  displayOrder: number;
  skills: SkillProps[];
}
