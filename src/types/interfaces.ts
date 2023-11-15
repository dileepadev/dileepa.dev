export interface AboutPageData {
  title: string;
  subtitle: string;
  introduction: string;
  background: string;
  goals: string;
  interests: string;
  backgroundList?: Array<{
    icon: string;
    title: string;
  }>;
  goalsList?: Array<{
    icon: string;
    title: string;
  }>;
  interestsList?: Array<{
    icon: string;
    title: string;
  }>;
}

export interface EducationPageData {
  title: string;
  subtitle: string;
  academic: Array<{
    course: string;
    institute: string;
    country: string;
    years: string;
    status: string;
    image: string;
    link: string;
  }>;
}

export interface ExperiencePageData {
  title: string;
  subtitle: string;
  work: Array<{
    title: string;
    org: string;
    country: string;
    years: string;
    status: string;
    image: string;
    link: string;
  }>;
  volunteer: Array<{
    title: string;
    org: string;
    country: string;
    years: string;
    status: string;
    image: string;
    link: string;
  }>;
}
export interface MediaPageData {
  title: string;
  subtitle: string;
  log: Array<{
    title: string;
    org: string;
    years: string;
    status: string;
    image: string;
    link: string;
    handler: string;
  }>;
}
export interface ConnectPageData {
  title: string;
  subtitle: string;
  description: string;
  connectLinks: Array<{
    title: string;
    link: string;
    handler: string;
    icon: string;
  }>;
  submitStatus: string;
  submitMessage: string;
}

export interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
