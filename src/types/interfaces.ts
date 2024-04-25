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
    location: string;
    years: string;
    status: string;
    image: string;
    link: string;
  }>;
}

export interface ExperiencePageData {
  title: string;
  subtitle: {
    work: string;
    projects: string;
    tools: string;
    volunteer: string;
  };
  work: Array<{
    title: string;
    org: string;
    location: string;
    years: string;
    status: string;
    image: string;
    link: string;
  }>;
  projects: Array<{
    title: string;
    description: string;
    image: string;
    keyWords: Array<string>;
    link: string;
  }>;
  toolsFrontBack: Array<{
    title: string;
    description: string;
    image: string;
    imageL: string;
    link: string;
  }>;
  toolsCloud: Array<{
    title: string;
    description: string;
    image: string;
    imageL: string;
    link: string;
  }>;
  toolsAIML: Array<{
    title: string;
    description: string;
    image: string;
    imageL: string;
    link: string;
  }>;
  toolsPM: Array<{
    title: string;
    description: string;
    image: string;
    imageL: string;
    link: string;
  }>;
  workingAreas: Array<{
    name: string;
    description: string;
    image: string;
    link: string;
  }>;
  volunteer: Array<{
    title: string;
    org: string;
    location: string;
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
