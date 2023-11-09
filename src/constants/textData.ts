export interface AboutPageData {
  title: string;
  subtitle: string;
  introduction: string;
  background: string;
  goals: string;
  interests: string;
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

const textData = { aboutPageData };

export default textData;
