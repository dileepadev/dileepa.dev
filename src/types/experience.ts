export interface ExperienceLogo {
  light: string;
  dark: string;
}

export interface ExperienceData {
  _id: string;
  title: string;
  company: string;
  url: string;
  period: string;
  description: string;
  technologies: string[];
  logo: ExperienceLogo;
}
