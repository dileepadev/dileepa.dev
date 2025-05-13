export interface EducationLogo {
  light: string;
  dark: string;
}

export interface EducationData {
  _id: string;
  course: string;
  institution: string;
  period: string;
  description: string;
  url: string;
  logo: EducationLogo;
}
