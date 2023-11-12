export interface AboutPageData {
  title: string;
  subtitle: string;
  introduction: string;
  background: string;
  goals: string;
  interests: string;
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

const aboutPageData: AboutPageData = {
  title: "About",

  subtitle: "Get to know my background, goals, and interests.",

  introduction:
    "Hi, everyone! I'm a computing student, solution developer, community volunteer, and content creator. As a student, I have a keen interest in and excitement for discovering new things, especially in the area of technology. My passion aligns with enjoying solving problems with code and creating useful applications using computing skills as a solution developer. I also care about giving back to the community and sharing my knowledge with others. That's why I volunteer for various communities and create content that can help people achieve their goals and improve their lives.",

  background: "These are some intriguing facts about my personal details.",

  goals:
    "It's been a few years since I stepped into the tech space. Having achieved significant milestones, I'm now dedicated to following these targets.",

  interests: "Let me tell you about the passions that define me.",
};

const educationPageData: EducationPageData = {
  title: "Education",

  subtitle: "Discover my academic qualifications and institutions.",

  academic: [
    {
      course: "BSc (Hons) Computing",
      institute: "Coventry University",
      country: "United Kingdom",
      years: "2021 - 2024",
      status: "Ongoing",
      image: "coventry",
      link: "https://www.coventry.ac.uk/",
    },
    {
      course: "Higher National Diploma in Software Engineering",
      institute: "National Institute of Business Management",
      country: "Sri Lanka",
      years: "2020 - 2021",
      status: "4.0 GPA",
      image: "nibm",
      link: "https://www.nibm.lk/",
    },
    {
      course: "Diploma in Computer System Design",
      institute: "National Institute of Business Management",
      country: "Sri Lanka",
      years: "2019 - 2020",
      status: "3.75 GPA",
      image: "nibm",
      link: "https://www.nibm.lk/",
    },
    {
      course: "Primary and Secondary Education",
      institute: "Maliyadeva Model College",
      country: "Sri Lanka",
      years: "2003 - 2016",
      status: "GCE Advanced Level (Maths)",
      image: "mmc",
      link: "",
    },
  ],
};

const experiencePageData: ExperiencePageData = {
  title: "Experience",

  subtitle: "Explore my professional work and volunteer experience.",

  work: [
    {
      title: "Solution Developer (Freelance)",
      org: "Early Wings Dev",
      country: "Sri Lanka",
      years: "Jun 2019 - Present",
      status:
        "Software Development (Mobile, Desktop, Web, API), UI UX Designing, Tech Support Assistant & Data Analysis",
      image: "ewd",
      link: "https://lk.linkedin.com/company/early-wings-dev/",
    },
    {
      title: "Trainee Software Developer (Flutter)",
      org: "DDS Techvira",
      country: "Sri Lanka",
      years: "May 2021 - Nov 2021",
      status:
        "Android, Flutter, Dart, Firebase, Git, REST API, JSON Parsing, Android Studio, VS Code, App Releasing & UI UX Designing",
      image: "ddst",
      link: "https://ddstechvira.com/",
    },
  ],

  volunteer: [
    {
      title: "President",
      org: "NIBM Computing Society",
      country: "Sri Lanka",
      years: "Oct 2022 - Present",
      status: "",
      image: "nibmcs",
      link: "https://nibmcs.org/",
    },
    {
      title: "Club Lead",
      org: "NIBM FOSS Community",
      country: "Sri Lanka",
      years: "Oct 2022 - Present",
      status: "",
      image: "nibmfossc",
      link: "https://fossc.nibmcs.org/",
    },
    {
      title: "Microsoft Learn Student Ambassador",
      org: "Microsoft",
      country: "Sri Lanka",
      years: "Oct 2022 - Present",
      status: "",
      image: "msft",
      link: "https://mvp.microsoft.com/studentambassadors/",
    },
    {
      title: "Member",
      org: "Microsoft Learn Student Ambassadors - Sri Lanka",
      country: "Sri Lanka",
      years: "Jan 2023 - Present",
      status: "",
      image: "mlsa",
      link: "https://lk.linkedin.com/company/mlsasrilanka/",
    },
    {
      title: "Volunteer",
      org: "GDG Sri Lanka",
      country: "Sri Lanka",
      years: "Oct 2022 - Present",
      status: "",
      image: "gdglk",
      link: "https://gdgsrilanka.org/",
    },
    {
      title: "Volunteer",
      org: "FOSS Sri Lanka",
      country: "Sri Lanka",
      years: "Oct 2023 - Present",
      status: "",
      image: "fosslk",
      link: "https://foss.lk/",
    },
  ],
};
const mediaPageData: MediaPageData = {
  title: "Media",

  subtitle: "Check out my latest articles, videos, and other content.",

  log: [
    {
      title: "Dileepa Bandara",
      org: "YouTube",
      years: "Nov 2023 - Present",
      status: "",
      image: "youtube",
      link: "https://youtube.com/@dileepabandara/",
      handler: "@dileepabandara",
    },
    {
      title: "Dileepa Bandara",
      org: "Hashnode",
      years: "Sep 2022 - Present",
      status: "",
      image: "hashnode",
      link: "https://hashnode.com/@dileepabandara/",
      handler: "@dileepabandara",
    },
  ],
};

const textData = {
  aboutPageData,
  educationPageData,
  experiencePageData,
  mediaPageData,
};

export default textData;
