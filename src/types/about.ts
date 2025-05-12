export interface AboutData {
  _id: string;
  name: string;
  title: string;
  tagline: string;
  description: string[];
  images: {
    profilePng: string;
    profileWebp: string;
    bannerWebp: string;
  };
  links: {
    website: string;
    email: string;
    github: string;
    linkedin: string;
    xtwitter: string;
    instagram: string;
    youtube: string;
  };
  connect: string[];
}
