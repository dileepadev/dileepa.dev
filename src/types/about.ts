export interface AboutData {
  _id: string;
  name: string;
  description: string;
  email: string;
  title: string;
  images: {
    profilePng: string;
    profileWebp: string;
    bannerWebp: string;
  };
}
