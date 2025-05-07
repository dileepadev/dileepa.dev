export interface ExperienceLogo {
  light: string;
  dark: string;
}

export interface Experience {
  _id: string;
  title: string;
  company: string;
  url: string;
  period: string;
  description: string;
  technologies: string[];
  logo: ExperienceLogo;
}
