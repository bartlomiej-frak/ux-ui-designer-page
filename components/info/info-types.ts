export interface ExperienceProps {
  id: string;
  title: string;
  period: string;
  description: string;
}

export type EducationProps = ExperienceProps;

export interface CertificationsProps {
  id: string;
  certificate: string;
  details: string;
}

export interface SkillsProps {
  id: string;
  title: string;
  description: string;
  imgPath: string;
}

export interface ToolsProps {
  id: string;
  name: string;
}
