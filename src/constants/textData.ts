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
      location: "United Kingdom",
      years: "2021 - 2024",
      status: "Ongoing",
      image: "coventry",
      link: PageLinks.education.coventry,
    },
    {
      course: "Higher National Diploma in Software Engineering",
      institute: "National Institute of Business Management",
      location: "Sri Lanka",
      years: "2020 - 2021",
      status: "4.0 GPA",
      image: "nibm",
      link: PageLinks.education.nibm,
    },
    {
      course: "Diploma in Computer System Design",
      institute: "National Institute of Business Management",
      location: "Sri Lanka",
      years: "2019 - 2020",
      status: "3.75 GPA",
      image: "nibm",
      link: PageLinks.education.nibm,
    },
    {
      course: "Primary and Secondary Education",
      institute: "Maliyadeva Model School",
      location: "Sri Lanka",
      years: "2003 - 2016",
      status: "GCE Advanced Level (Maths)",
      image: "mms",
      link: PageLinks.education.mms,
    },
  ],
};

const experiencePageData: ExperiencePageData = {
  title: "Experience",

  subtitle: {
    work: "These are the places where my technical career unfolded.",
    projects: "Check out some of the projects I've worked on.",
    tools:
      "I love using so many tools to make my work easier. Here are some of them.",
    volunteer:
      "These are my favorite tech communities I've been involved with.",
  },

  work: [
    {
      title: "Freelance Solutions Developer",
      org: "WingzDev · Self-Employed",
      location: "Sri Lanka · Remote",
      years: "Jun 2019 - Present",
      status:
        "Software Development (Mobile, Desktop, Web, API), UI UX Designing, Tech Support Assistant, SEO, Data Analysis, AI/ML, Cloud Computing",
      image: "wd",
      link: PageLinks.experience.wd,
    },
    {
      title: "Trainee Mobile App Developer",
      org: "DDS Techvira · Internship",
      location: "Sri Lanka · Remote",
      years: "May 2021 - Nov 2021",
      status:
        "Flutter, Dart, Android, Firebase, SQL, Git, GitHub, REST API, JSON Parsing, Android Studio, VS Code, App Releasing & UI UX Designing",
      image: "ddst",
      link: PageLinks.experience.ddst,
    },
  ],

  projects: [
    {
      title: "Student Profiler",
      description:
        "Personalized student profile management system using AI/ML for educational institutions. Web & mobile apps help to manage student data.",
      image: "student-profiler",
      keyWords: [
        "Python",
        "Flutter",
        "Dart",
        "Firebase",
        "Flask",
        "TenserFlow",
        "Keras",
        "Scikit-learn",
        "OpenCV",
      ],
      link: "/",
    },
    {
      title: "GGEZ Network",
      description:
        "A social network mobile app for gamers to view game news and connect with communities while earning crypto tokens and merchandise.",
      image: "ggez",
      keyWords: ["Flutter", "Dart", "Firebase", "Solidity"],
      link: "/",
    },
    {
      title: "Railway Guider",
      description:
        "A system that helps to search trains, view timetables, book tickets, scan QR tickets, track the real-time location of the trains, and earn rewards.",
      image: "railway-guider",
      keyWords: [
        "Android",
        "Java",
        ".NET",
        "C#",
        "Firebase",
        "HTML",
        "CSS",
        "Bootstrap",
        "JavaScript",
      ],
      link: "/",
    },
    {
      title: "Car Tracking System",
      description:
        "An IoT-based system that helps to track the real-time location of vehicles, view the history of the vehicle's location, and get alerts.",
      image: "car-tracking",
      keyWords: ["Arduino", "C++", "Flutter", "Dart", "Firebase"],
      link: "/",
    },
    {
      title: "How to Create a Custom React",
      description:
        "In this article, we will learn how to create a custom React hook that can be used to fetch data from an API.",
      image: "banner",
      keyWords: ["React", "Custom Hooks", "API"],
      link: "/",
    },
  ],

  toolsFrontBack: [
    {
      title: "HTML5",
      description:
        "A markup language used for structuring and presenting content on the World Wide Web.",
      image: "html5",
      imageL: "html5",
      link: "",
    },
    {
      title: "CSS3",
      description:
        "A style sheet language used for describing the presentation of a document written in HTML.",
      image: "css3",
      imageL: "css3",
      link: "",
    },
    {
      title: "Bootstrap",
      description:
        "A free and open-source CSS framework directed at responsive, mobile-first front-end web development.",
      image: "bootstrap",
      imageL: "bootstrap",
      link: "",
    },
    {
      title: "Tailwind CSS",
      description: "A utility-first CSS framework for rapid UI development.",
      image: "tailwindcss",
      imageL: "tailwindcss",
      link: "",
    },
    {
      title: "JavaScript",
      description: "A high-level, interpreted programming language.",
      image: "javascript",
      imageL: "javascript",
      link: "",
    },
    {
      title: "TypeScript",
      description:
        "A typed superset of JavaScript that compiles to plain JavaScript.",
      image: "typescript",
      imageL: "typescript",
      link: "",
    },
    {
      title: "Node.js",
      description:
        "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
      image: "nodejs",
      imageL: "nodejs",
      link: "",
    },
    {
      title: "React.js",
      description: "A JavaScript library for building user interfaces.",
      image: "reactjs",
      imageL: "reactjs",
      link: "",
    },
    {
      title: "Next.js",
      description: "A React framework for building production-ready apps.",
      image: "nextjs",
      imageL: "nextjs",
      link: "",
    },
    {
      title: "C#",
      description: "A general-purpose, multi-paradigm programming language.",
      image: "csharp",
      imageL: "csharp",
      link: "",
    },
    {
      title: ".NET",
      description: "A free, cross-platform, open-source developer platform.",
      image: "dotnet",
      imageL: "dotnet",
      link: "",
    },
    {
      title: "Dart",
      description:
        "A client-optimized programming language for fast apps on any platform.",
      image: "dart",
      imageL: "dart",
      link: "",
    },
    {
      title: "Flutter",
      description:
        "Google's UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase.",
      image: "flutter",
      imageL: "flutter",
      link: "",
    },
    {
      title: "Python",
      description:
        "An interpreted high-level general-purpose programming language.",
      image: "python",
      imageL: "python",
      link: "",
    },
    {
      title: "Flask",
      description: "A lightweight WSGI web application framework in Python.",
      image: "flask",
      imageL: "flask",
      link: "",
    },
    {
      title: "FastAPI",
      description:
        "A modern, fast (high-performance), web framework for Python.",
      image: "fastapi",
      imageL: "fastapi",
      link: "",
    },
    {
      title: "Java",
      description:
        "A class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible.",
      image: "java",
      imageL: "java",
      link: "",
    },
    {
      title: "GraphQL",
      description:
        "A query language for APIs and a runtime for executing those queries by using a type system you define for your data.",
      image: "graphql",
      imageL: "graphql",
      link: "",
    },
  ],

  toolsCloud: [
    {
      title: "Azure",
      description:
        "A cloud computing service created by Microsoft for building, testing, deploying, and managing applications and services.",
      image: "azure",
      imageL: "azure",
      link: "",
    },
    {
      title: "GCP",
      description:
        "A suite of cloud computing services that runs on the same infrastructure that Google uses internally for its end-user products.",
      image: "gcp",
      imageL: "gcp",
      link: "",
    },
    {
      title: "Firebase",
      description:
        "A platform developed by Google for creating mobile and web applications.",
      image: "firebase",
      imageL: "firebase",
      link: "",
    },
    {
      title: "Supabase",
      description:
        "An open-source Firebase alternative. Instantly add authentication, a realtime database, serverless functions, and storage to your project.",
      image: "supabase",
      imageL: "supabase",
      link: "",
    },
    {
      title: "PostgreSQL",
      description: "A powerful, open-source object-relational database system.",
      image: "postgresql",
      imageL: "postgresql",
      link: "",
    },
    {
      title: "MongoDB",
      description:
        "A source-available cross-platform document-oriented database program.",
      image: "mongodb",
      imageL: "mongodb",
      link: "",
    },
    {
      title: "Git",
      description:
        "A distributed version control system for tracking changes in source code during software development.",
      image: "git",
      imageL: "git",
      link: "",
    },
    {
      title: "GitHub",
      description:
        "A web-based platform for version control and collaboration.",
      image: "github",
      imageL: "github-l",
      link: "",
    },
    {
      title: "GitLab",
      description:
        "A web-based DevOps lifecycle tool that provides a Git repository manager.",
      image: "gitlab",
      imageL: "gitlab",
      link: "",
    },
    {
      title: "Codemagic",
      description:
        "A CI/CD tool that helps you build, test, and deliver your apps.",
      image: "codemagic",
      imageL: "codemagic",
      link: "",
    },
  ],

  toolsAIML: [
    {
      title: "Azure AI",
      description:
        "A web-based integrated development environment for building AI applications.",
      image: "azureai",
      imageL: "azureai",
      link: "",
    },
    {
      title: "Azure ML",
      description:
        "A collaborative, drag-and-drop tool to build, test, and deploy machine learning models.",
      image: "azureml",
      imageL: "azureml",
      link: "",
    },
    {
      title: "TensorFlow",
      description: "An end-to-end open-source platform for machine learning.",
      image: "tensorflow",
      imageL: "tensorflow",
      link: "",
    },
    {
      title: "Keras",
      description: "An open-source deep learning framework written in Python.",
      image: "keras",
      imageL: "keras",
      link: "",
    },
    {
      title: "PyTorch",
      description:
        "An open-source machine learning library based on the Torch library.",
      image: "pytorch",
      imageL: "pytorch",
      link: "",
    },
    {
      title: "Scikit-learn",
      description:
        "A free software machine learning library for the Python programming language.",
      image: "scikitlearn",
      imageL: "scikitlearn",
      link: "",
    },
    {
      title: "OpenCV",
      description:
        "A library of programming functions mainly aimed at real-time computer vision.",
      image: "opencv",
      imageL: "opencv",
      link: "",
    },
    {
      title: "LangChain",
      description:
        "A blockchain-based platform for language learning and teaching.",
      image: "langchain",
      imageL: "langchain-l",
      link: "",
    },
  ],
  toolsPM: [
    {
      title: "Visual Studio Code",
      description:
        "A free source-code editor made by Microsoft for Windows, Linux, and macOS.",
      image: "vscode",
      imageL: "vscode",
      link: "",
    },
    {
      title: "Visual Studio",
      description:
        "An integrated development environment for developing computer programs.",
      image: "visualstudio",
      imageL: "visualstudio",
      link: "",
    },
    {
      title: "Android Studio",
      description:
        "The official integrated development environment for Google's Android operating system.",
      image: "androidstudio",
      imageL: "androidstudio",
      link: "",
    },
    {
      title: "Google Colab",
      description:
        "A free cloud service that supports free GPU and TPU for deep learning.",
      image: "googlecolab",
      imageL: "googlecolab",
      link: "",
    },
    {
      title: "CodeSandbox",
      description:
        "An online code editor and prototyping tool that makes creating web applications faster.",
      image: "codesandbox",
      imageL: "codesandbox",
      link: "",
    },
    {
      title: "Jira",
      description:
        "A proprietary issue tracking product developed by Atlassian.",
      image: "jira",
      imageL: "jira",
      link: "",
    },
    {
      title: "ClickUp",
      description: "A cloud-based collaboration and project management tool.",
      image: "clickup",
      imageL: "clickup",
      link: "",
    },
    {
      title: "Figma",
      description:
        "A cloud-based design tool that is used for creating user interfaces.",
      image: "figma",
      imageL: "figma",
      link: "",
    },
  ],

  workingAreas: [
    {
      name: "Web Development",
      description: "",
      image: "python",
      link: PageLinks.experience.work,
    },
    {
      name: "Mobile Development",
      description: "",
      image: "python",
      link: PageLinks.experience.work,
    },
    {
      name: "Project Management",
      description: "",
      image: "python",
      link: PageLinks.experience.work,
    },
  ],

  volunteer: [
    {
      title: "Microsoft Learn Student Ambassador",
      org: "Microsoft",
      location: "Global",
      years: "Oct 2022 - Present",
      status: "",
      image: "msft",
      link: PageLinks.experience.mlsa,
    },
    {
      title: "Member",
      org: "Microsoft Learn Student Ambassadors - Sri Lanka",
      location: "Sri Lanka",
      years: "Jan 2023 - Present",
      status: "",
      image: "mlsa",
      link: PageLinks.experience.mlsaLK,
    },
    {
      title: "Volunteer",
      org: "AI Community Sri Lanka",
      location: "Sri Lanka",
      years: "Jan 2024 - Present",
      status: "",
      image: "aicsl",
      link: PageLinks.experience.fossLK,
    },
    {
      title: "Volunteer",
      org: "Sri Lanka Developer Forum",
      location: "Sri Lanka",
      years: "Jan 2024 - Present",
      status: "",
      image: "sldf",
      link: PageLinks.experience.fossLK,
    },
    {
      title: "Volunteer",
      org: "GDG Sri Lanka",
      location: "Sri Lanka",
      years: "Oct 2022 - Present",
      status: "",
      image: "gdglk",
      link: PageLinks.experience.gdgLK,
    },
    {
      title: "Volunteer",
      org: "FOSS Sri Lanka",
      location: "Sri Lanka",
      years: "Oct 2023 - Present",
      status: "",
      image: "fosslk",
      link: PageLinks.experience.fossLK,
    },
    {
      title: "President",
      org: "NIBM Computing Society",
      location: "Sri Lanka",
      years: "Oct 2022 - Dec 2023",
      status: "",
      image: "nibmcs",
      link: PageLinks.experience.nibmcs,
    },
    {
      title: "Club Lead",
      org: "NIBM FOSS Community",
      location: "Sri Lanka",
      years: "Oct 2022 - Dec 2023",
      status: "",
      image: "nibmfossc",
      link: PageLinks.experience.nibmfossc,
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
