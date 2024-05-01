export interface AboutPageData {
  title: {
    acquainted: string;
    achievements: string;
    testimonials: string;
  };
  subtitle: {
    acquainted: string;
    achievements: string;
    testimonials: string;
  };
  itemCardDescription: {
    introduction: string;
    background: string;
    goals: string;
    interests: string;
  };
  itemCardList: {
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
  };
  achievementsList: Array<{
    title: string;
    date: string;
    description: string;
  }>;
  testimonials: Array<{
    name: string;
    title: string;
    org: string;
    image: string;
    connection: string;
    profileLink: string;
    testimonialLink: string;
    testimonial: string;
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
  toolsCode: Array<{
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
  title: {
    events: string;
    csc: string;
  };
  subtitle: {
    events: string;
    csc: string;
  };
  eventsList: Array<{
    title: string;
    date: string;
    time: string;
    venue: string;
    description: string;
    image: string;
    link: string;
    role: Array<string>;
    organizer: Array<string>;
    organizerImage: Array<string>;
  }>;
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
