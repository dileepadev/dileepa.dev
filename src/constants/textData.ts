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
  title: {
    acquainted: "Let's Get Acquainted",
    achievements: "Achievements",
    testimonials: "What Others Say",
  },
  subtitle: {
    acquainted:
      "This is a brief overview about my background, goals, and interests.",
    achievements:
      "Technical and non-technical milestones that changed my life.",
    testimonials:
      "Insights and experiences shared by colleagues, mentors, and collaborators.",
  },

  itemCardDescription: {
    introduction:
      "Hi everyone! I'm a computing student, solutions developer, and community volunteer. Exploring the fascinating fields of Software Development, Artificial Intelligence, and Cloud Computing technologies, I have a keen interest in and excitement for discovering new things as a student. My passion aligns with enjoying solving problems with code and creating useful applications using computing skills as a solution developer. While I'm doing this, I believe in giving back to the community and sharing my knowledge with others. So, I volunteer for various communities and create content that can help people achieve their goals and improve their lives.",
    background: "These are some intriguing facts about my personal details.",
    goals: "I've set these main goals for my career development.",
    interests: "I'm passionate about these activities and hobbies.",
  },

  itemCardList: {
    backgroundList: [
      { icon: "🔖", title: "Name: Dileepa Lakmal Bandara" },
      { icon: "🎂", title: "Birthday: July 24th" },
      { icon: "👨🏽", title: "Gender: Male (He/Him/His)" },
      { icon: "🌏", title: "Location: Sri Lanka (GMT+5:30)" },
      { icon: "💬", title: "Communicate: English & Sinhala" },
    ],

    goalsList: [
      { icon: "🤖", title: "Follow: AI Engineering" },
      { icon: "💻", title: "Practice: Software Development" },
      { icon: "🚩", title: "Support: Tech Communities" },
      { icon: "🎓", title: "Complete: Master's Degree" },
    ],

    interestsList: [
      { icon: "🎬", title: "Watch: Movies & TV Shows" },
      { icon: "🎧", title: "Listen: Songs & Music" },
      { icon: "🖌️", title: "Create: Contents & Media" },
      { icon: "🔍", title: "Explore: New Things" },
    ],
  },

  achievementsList: [
    {
      title: "Gold Microsoft Learn Student Ambassador",
      date: "Feb 2024",
      description:
        "Received the highest milestone within the Microsoft Learn Student Ambassadors program, in recognition of exceptional dedication and impactful contributions to both the community and technology.",
    },
    {
      title: "Completed 10+ Events as a Speaker",
      date: "Dec 2023",
      description:
        "Delivered engaging presentations on various topics, including Software Development, AI, and Cloud Computing, at tech events and meetups, inspiring and educating audiences on the latest trends and technologies.",
    },
    {
      title: "Established NIBM Computing Society",
      date: "Oct 2022",
      description:
        "Started the NIBM Computing Society, a student-led organization dedicated to fostering a culture of innovation, learning, and collaboration among computing students at the National Institute of Business Management.",
    },
    {
      title: "Colors Award",
      date: "Jan 2018",
      description:
        "Received the prestigious Colors Award for outstanding achievements in academics, extracurricular activities, and community service, recognizing exceptional leadership and contributions to the school community at Maliyadeva Model School.",
    },
    {
      title: "President's Scout Award",
      date: "Jan 2016",
      description:
        "Earned the President's Scout Award, the highest rank in the Sri Lanka Scout Association, for demonstrating exceptional leadership, service, and commitment to the principles of scouting.",
    },
  ],

  testimonials: [
    {
      name: "Prabhath Mannapperuma",
      title: "Partner Technology Strategist",
      org: "@Microsoft",
      image: "prabhath",
      connection: "",
      profileLink: PageLinks.about.prabhath,
      testimonialLink: PageLinks.about.linkedInRecommendations,
      testimonial:
        "I highly recommend Dileepa Bandara as a Microsoft Learn Student Ambassador. Over the past few years, I've witnessed his unwavering commitment to community engagement and his proactive efforts in collaborating with fellow students. Dileepa's dedication to giving back and his impactful contributions make him a valuable asset to any company or project.",
    },
    {
      name: "Ruwandika Wijesiri",
      title: "Technical Lead",
      org: "@Sysco LABS",
      image: "ruwandika",
      connection: "",
      profileLink: PageLinks.about.ruwandika,
      testimonialLink: PageLinks.about.linkedInRecommendations,
      testimonial:
        "I was impressed by his technical skills and the potential he had at the time I was teaching him, making him one of the hardworking & talented students at the institute. He is very much passionate about writing code and solving problems through the development of creative and innovative software solutions and tends to stay up to date with the latest technologies as well.",
    },
    {
      name: "Isuru Devinda De Silva",
      title: "Co-Founder",
      org: "@DDS Techvira",
      image: "isuru",
      connection: "",
      profileLink: PageLinks.about.isuru,
      testimonialLink: PageLinks.about.linkedInRecommendations,
      testimonial:
        "I’m amazed by Dileepa’s ability to Flutter, a skill he uses to his benefit when making presentations to clients and colleagues. He is a highly focused person as well as analytical and can add to any team he is a part of. His energy to make things happen was contagious and it helped us achieve great goals. One of the best analysts we had for sure.",
    },
    {
      name: "Nimesh Ekanayake",
      title: "Technical Consultant",
      org: "@Platned",
      image: "nimesh",
      connection: "",
      profileLink: PageLinks.about.nimesh,
      testimonialLink: PageLinks.about.linkedInRecommendations,
      testimonial:
        "Dileepa possesses exceptional skills in community building, leadership, and technical expertise, making a significant impact on the success of our initiatives. His passion for empowering fellow students and fostering a culture of continuous learning is truly inspiring. It has been a pleasure working alongside Dileepa, and I am confident that his skills and commitment will continue to shine in future endeavors.",
    },
    {
      name: "Eranga Perera",
      title: "Consultant / Lecturer",
      org: "@NIBM",
      image: "eranga",
      connection: "",
      profileLink: PageLinks.about.eranga,
      testimonialLink: PageLinks.about.linkedInRecommendations,
      testimonial:
        "What truly impressed me about Dileepa was their proactive approach to problem-solving. They exhibited a strong analytical mindset, often thinking outside the box to find innovative solutions. Their eagerness to explore new technologies and apply them practically was commendable and reflected in their work. I am delighted to recommend them highly for their exceptional dedication to the IT field.",
    },
    {
      name: "Buwaneka Jayasundara",
      title: "DevOps Engineer",
      org: "@Affiniti Innovations",
      image: "buwaneka",
      connection: "",
      profileLink: PageLinks.about.buwaneka,
      testimonialLink: PageLinks.about.linkedInRecommendations,
      testimonial:
        "Dileepa and I collaborated on a challenging mobile app project centered around visualizing data predicted by ML algorithms. As a Flutter developer, Dileepa demonstrated exceptional coding skills and a profound understanding of Google Cloud services, contributing significantly to the success of our project. His problem-solving abilities are exemplary, consistently finding innovative solutions to complex challenges.",
    },
  ],
};

const educationPageData: EducationPageData = {
  title: "Education",

  subtitle: "Discover the stages of my academic learning journey.",

  academic: [
    {
      course: "BSc (Hons) Computing",
      institute: "Coventry University",
      location: "United Kingdom",
      years: "Nov 2021 - Feb 2024",
      status: "First Class Honours",
      image: "coventry",
      link: PageLinks.education.coventry,
    },
    {
      course: "Higher National Diploma in Software Engineering",
      institute: "National Institute of Business Management",
      location: "Sri Lanka",
      years: "Apr 2020 - Aug 2021",
      status: "4.0 GPA",
      image: "nibm",
      link: PageLinks.education.nibm,
    },
    {
      course: "Diploma in Computer System Design",
      institute: "National Institute of Business Management",
      location: "Sri Lanka",
      years: "Mar 2019 - Aug 2020",
      status: "3.75 GPA",
      image: "nibm",
      link: PageLinks.education.nibm,
    },
    {
      course: "Primary and Secondary Education",
      institute: "Maliyadeva Model School",
      location: "Sri Lanka",
      years: "Jan 2003 - Dec 2016",
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
      years: "Jun 2019 - Dec 2023",
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
      title: "Express.js",
      description: "A web application framework for Node.js.",
      image: "express",
      imageL: "express-l",
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
      title: "GraphQL",
      description:
        "A query language for APIs and a runtime for executing those queries by using a type system you define for your data.",
      image: "graphql",
      imageL: "graphql",
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

  toolsCode: [
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
      title: "IntelliJ IDEA",
      description:
        "A Java integrated development environment for developing computer software.",
      image: "intellijidea",
      imageL: "intellijidea",
      link: "",
    },
    {
      title: "PyCharm",
      description:
        "An integrated development environment used in computer programming, specifically for the Python language.",
      image: "pycharm",
      imageL: "pycharm",
      link: "",
    },
    {
      title: "Codespaces",
      description:
        "A cloud-based development environment that is integrated into GitHub.",
      image: "codespaces",
      imageL: "codespaces",
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
      title: "Google Colab",
      description:
        "A free cloud service that supports free GPU and TPU for deep learning.",
      image: "googlecolab",
      imageL: "googlecolab",
      link: "",
    },
  ],

  toolsPM: [
    {
      title: "ClickUp",
      description: "A cloud-based collaboration and project management tool.",
      image: "clickup",
      imageL: "clickup",
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
      title: "Microsoft 365",
      description:
        "A line of subscription services offered by Microsoft as part of the Microsoft Office product line.",
      image: "microsoft365",
      imageL: "microsoft365",
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
      link: PageLinks.experience.aicsl,
    },
    {
      title: "Volunteer",
      org: "Sri Lanka Developer Forum",
      location: "Sri Lanka",
      years: "Jan 2024 - Present",
      status: "",
      image: "sldf",
      link: PageLinks.experience.sldf,
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
  title: {
    events: "Event Highlights",
    csc: "Cloud Skills Challenges",
  },
  subtitle: {
    events:
      "A snapshot of memorable sessions, meetups, and workshops I've participated in.",
    csc: "A collection of Cloud Skills Challenges I've hosted.",
  },

  eventsList: [
    {
      title: "Building, Deploying, and Consuming ML Models with Azure ML",
      date: "28th February 2024",
      time: "12:30 PM - 2:00 PM (UTC+05:30)",
      venue: "Google Meet (Online)",
      description:
        "A hands-on workshop to introduce the Azure Machine Learning platform for building, deploying, and consuming machine learning models.",
      image: "banner",
      link: "#",
      role: ["Speaker"],
      organizer: [
        "Amihacks 2k24 by Amity University Gwalior",
        "Microsoft Learn Student Ambassadors",
      ],
      organizerImage: ["ami", "mlsa"],
    },
    {
      title: "Microsoft Imagine Cup 2024 - NIBM Awareness Session",
      date: "20th December 2023",
      time: "7:30 PM - 9:00 PM (UTC+05:30)",
      venue: "Microsoft Teams (Online)",
      description:
        "An awareness session for NIBM students to learn about the Microsoft Imagine Cup 2024 competition and how to participate.",
      image: "banner",
      link: "#",
      role: ["Host, Speaker"],
      organizer: [
        "NIBM Computing Society",
        "Microsoft Learn Student Ambassadors",
      ],
      organizerImage: ["nibmcs", "mlsa"],
    },
    {
      title: "Navigating Azure OpenAl Service as a Beginner",
      date: "01st December 2023",
      time: "8:00 PM - 9:30 PM (UTC+05:30)",
      venue: "Microsoft Teams (Online)",
      description:
        "A beginner-friendly session includes hands-on practice demos to explore the Azure OpenAl service and its capabilities for AI-powered applications.",
      image: "banner",
      link: "#",
      role: ["Host, Speaker"],
      organizer: ["Microsoft Learn Student Ambassadors"],
      organizerImage: ["mlsa"],
    },
    {
      title: "Web development with Microsoft tools",
      date: "19th August 2023",
      time: "8:00 PM - 9:30 PM (UTC+05:30)",
      venue: "Microsoft Teams (Online)",
      description:
        "A session to guide beginners through building their first web application using Microsoft tools and services.",
      image: "banner",
      link: "#",
      role: ["Host, Speaker"],
      organizer: ["Microsoft Learn Student Ambassadors"],
      organizerImage: ["mlsa"],
    },
    {
      title: "Microsoft Build After Party - NIBM Meetup",
      date: "04th July 2023",
      time: "3:00 PM - 6:00 PM (UTC+05:30)",
      venue: "NIBM Colombo (In-Person)",
      description:
        "A post-event meetup to discuss the highlights of Microsoft Build 2023 and share insights on the latest announcements and technologies.",
      image: "banner",
      link: "#",
      role: ["Host, Speaker"],
      organizer: [
        "NIBM Computing Society",
        "Microsoft Learn Student Ambassadors",
      ],
      organizerImage: ["nibmcs", "mlsa"],
    },
    {
      title: "Build your first web app with Node.js",
      date: "25th March 2023",
      time: "3:00 PM - 4:00 PM (UTC+05:30)",
      venue: "Microsoft Sri Lanka (In-Person)",
      description:
        "A hands-on workshop to guide beginners through building their first web application using Node.js and Express.js.",
      image: "banner",
      link: "#",
      role: ["Co-Host, Speaker"],
      organizer: ["Microsoft Learn Student Ambassadors - Sri Lanka"],
      organizerImage: ["mlsa"],
    },
    {
      title: "Getting Started with Microsoft 365",
      date: "07th March 2023",
      time: "1:00 PM - 3:00 PM (UTC+05:30)",
      venue: "NIBM Kurunegala (In-Person)",
      description:
        "An introductory session to explore the features and benefits of Microsoft 365 for students and educators.",
      image: "banner",
      link: "#",
      role: ["Host, Speaker"],
      organizer: ["Microsoft Learn Student Ambassadors"],
      organizerImage: ["mlsa"],
    },
    {
      title: "Introduction to Azure",
      date: "24th February 2023",
      time: "10:00 AM - 12:00 PM (UTC+05:30)",
      venue: "NIBM Colombo (In-Person)",
      description:
        "A beginner-friendly workshop to introduce the fundamentals of Azure cloud services and how to get started with Azure.",
      image: "banner",
      link: "#",
      role: ["Host, Speaker"],
      organizer: [
        "NIBM Computing Society",
        "Microsoft Learn Student Ambassadors",
      ],
      organizerImage: ["nibmcs", "mlsa"],
    },
    {
      title: "FOSS Community Meetup - NIBM",
      date: "14th January 2023",
      time: "10:00 AM - 12:00 PM (UTC+05:30)",
      venue: "NIBM Colombo (In-Person)",
      description:
        "A community meetup to discuss the latest trends in open-source software and how to contribute to FOSS projects.",
      image: "banner",
      link: "#",
      role: ["Co-Host, Speaker"],
      organizer: ["NIBM Computing Society", "FOSS Sri Lanka"],
      organizerImage: ["nibmcs", "fosslk"],
    },
  ],

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
