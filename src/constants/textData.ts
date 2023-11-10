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

const textData = { aboutPageData, educationPageData };

export default textData;
