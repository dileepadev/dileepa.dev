import WebLinks from "@/constants/links";
import { PageLinks } from "@/constants/links";
import {
  AboutPageData,
  EducationPageData,
  ExperiencePageData,
  MediaPageData,
  ConnectPageData,
} from "@/types/interfaces";

const aboutPageData: AboutPageData = {
  title: "About",

  subtitle: "Get to know my background, goals, and interests.",

  introduction:
    "Hi, everyone! I'm a computing student, solution developer, community volunteer, and content creator. As a student, I have a keen interest in and excitement for discovering new things, especially in the area of technology. My passion aligns with enjoying solving problems with code and creating useful applications using computing skills as a solution developer. I also care about giving back to the community and sharing my knowledge with others. That's why I volunteer for various communities and create content that can help people achieve their goals and improve their lives.",

  background: "These are some intriguing facts about my personal details.",

  goals:
    "It's been a few years since I stepped into the tech space. Having achieved significant milestones, I'm now dedicated to following these targets.",

  interests: "Let me tell you about the passions that define me.",

  backgroundList: [
    { icon: "🎟️", title: "Name is Dileepa Lakmal Bandara" },
    { icon: "📆", title: "Born on July 24, 1997" },
    { icon: "🌏", title: "Lives in Sri Lanka (GMT+5:30)" },
    { icon: "👦🏽", title: "Gender is Male (He/Him/His)" },
    { icon: "💼", title: "Works in Sinhala & English" },
  ],

  goalsList: [
    { icon: "🤖", title: "Follow the AI Engineer Path" },
    { icon: "💻", title: "Follow the Software Developer Path" },
    { icon: "🚩", title: "Build a Tech Community" },
    { icon: "🎓", title: "Pursue a Master's Degree" },
  ],

  interestsList: [
    { icon: "🎬", title: "Watching Movies & TV Shows" },
    { icon: "🎧", title: "Listening to Music" },
    { icon: "🖌️", title: "Creating Contents" },
    { icon: "📚", title: "Studying New Things" },
    { icon: "🎤", title: "Public Speaking" },
  ],
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
      link: PageLinks.education.coventry,
    },
    {
      course: "Higher National Diploma in Software Engineering",
      institute: "National Institute of Business Management",
      country: "Sri Lanka",
      years: "2020 - 2021",
      status: "4.0 GPA",
      image: "nibm",
      link: PageLinks.education.nibm,
    },
    {
      course: "Diploma in Computer System Design",
      institute: "National Institute of Business Management",
      country: "Sri Lanka",
      years: "2019 - 2020",
      status: "3.75 GPA",
      image: "nibm",
      link: PageLinks.education.nibm,
    },
    {
      course: "Primary and Secondary Education",
      institute: "Maliyadeva Model School",
      country: "Sri Lanka",
      years: "2003 - 2016",
      status: "GCE Advanced Level (Maths)",
      image: "mms",
      link: PageLinks.education.mms,
    },
  ],
};

const experiencePageData: ExperiencePageData = {
  title: "Experience",

  subtitle: "Explore my professional work and volunteer experience.",

  work: [
    {
      title: "Freelance Solutions Developer",
      org: "Early Wings Dev",
      country: "Sri Lanka",
      years: "Jun 2019 - Present",
      status:
        "Software Development (Mobile, Desktop, Web, API), UI UX Designing, Tech Support Assistant & Data Analysis",
      image: "ewd",
      link: PageLinks.experience.ewd,
    },
    {
      title: "Trainee Mobile App Developer",
      org: "DDS Techvira",
      country: "Sri Lanka",
      years: "May 2021 - Nov 2021",
      status:
        "Android, Flutter, Dart, Firebase, Git, REST API, JSON Parsing, Android Studio, VS Code, App Releasing & UI UX Designing",
      image: "ddst",
      link: PageLinks.experience.ddst,
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
      link: PageLinks.experience.nibmcs,
    },
    {
      title: "Club Lead",
      org: "NIBM FOSS Community",
      country: "Sri Lanka",
      years: "Oct 2022 - Present",
      status: "",
      image: "nibmfossc",
      link: PageLinks.experience.nibmfossc,
    },
    {
      title: "Microsoft Learn Student Ambassador",
      org: "Microsoft",
      country: "Sri Lanka",
      years: "Oct 2022 - Present",
      status: "",
      image: "msft",
      link: PageLinks.experience.mlsa,
    },
    {
      title: "Member",
      org: "Microsoft Learn Student Ambassadors - Sri Lanka",
      country: "Sri Lanka",
      years: "Jan 2023 - Present",
      status: "",
      image: "mlsa",
      link: PageLinks.experience.mlsaLK,
    },
    {
      title: "Volunteer",
      org: "GDG Sri Lanka",
      country: "Sri Lanka",
      years: "Oct 2022 - Present",
      status: "",
      image: "gdglk",
      link: PageLinks.experience.gdgLK,
    },
    {
      title: "Volunteer",
      org: "FOSS Sri Lanka",
      country: "Sri Lanka",
      years: "Oct 2023 - Present",
      status: "",
      image: "fosslk",
      link: PageLinks.experience.fossLK,
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
      link: PageLinks.media.youtube,
      handler: "@dileepadev",
    },
    {
      title: "Dileepa Bandara",
      org: "Hashnode",
      years: "Nov 2023 - Present",
      status: "",
      image: "hashnode",
      link: PageLinks.media.hashnode,
      handler: "@dileepadev",
    },
  ],
};
const connectPageData: ConnectPageData = {
  title: "Connect",

  subtitle:
    "Connect with me through social media and other communication channels.",

  description:
    "Let's connect! Whether you have inquiries, thoughts to share, or just want to drop a friendly message, I'd love to hear from you. Feel free to reach out through the contact form.",

  connectLinks: [
    {
      title: "Email",
      link: "mailto:" + WebLinks.email,
      handler: WebLinks.email,
      icon: "email",
    },
    {
      title: "GitHub",
      link: WebLinks.github,
      handler: "dileepadev",
      icon: "github",
    },
    {
      title: "LinkedIn",
      link: WebLinks.linkedin,
      handler: "in/dileepadev",
      icon: "linkedin",
    },
    {
      title: "X (Twitter)",
      link: WebLinks.xtwitter,
      handler: "dileepadev",
      icon: "xtwitter",
    },
    {
      title: "YouTube",
      link: WebLinks.youtube,
      handler: "@dileepadev",
      icon: "youtube",
    },
    {
      title: "Instagram",
      link: WebLinks.instagram,
      handler: "dileepadev",
      icon: "instagram",
    },
  ],

  submitStatus: "SUCCESS",
  submitMessage:
    "Thanks for contacting me! I`ll get back to you as soon as possible. 😊",
};

const textData = {
  aboutPageData,
  educationPageData,
  experiencePageData,
  mediaPageData,
  connectPageData,
};

export default textData;
