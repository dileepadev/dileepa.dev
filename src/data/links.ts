import {
  FaGithub,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export const navItems = [
  { name: "About", id: "about" },
  { name: "Experience", id: "experience" },
  { name: "Education", id: "education" },
  { name: "Community", id: "community" },
  { name: "Connect", id: "connect" },
];

export const socialLinks = {
  github: "https://github.com/dileepadev",
  linkedin: "https://linkedin.com/in/dileepadev",
  xtwitter: "https://twitter.com/dileepadev",
  instagram: "https://instagram.com/dileepadev",
  youtube: "https://youtube.com/@dileepadev",
};

export const emailAddress = "contact@dileepa.dev";

export const connectLinks = [
  {
    name: "Email",
    value: emailAddress,
    href: `mailto:${emailAddress}`,
    icon: FaEnvelope,
  },
  {
    name: "LinkedIn",
    value: "dileepadev",
    href: socialLinks.linkedin,
    icon: FaLinkedinIn,
  },
  {
    name: "GitHub",
    value: "dileepadev",
    href: socialLinks.github,
    icon: FaGithub,
  },
  {
    name: "Twitter",
    value: "dileepadev",
    href: socialLinks.xtwitter,
    icon: FaXTwitter,
  },
  {
    name: "Instagram",
    value: "dileepadev",
    href: socialLinks.instagram,
    icon: FaInstagram,
  },
  {
    name: "YouTube",
    value: "dileepadev",
    href: socialLinks.youtube,
    icon: FaYoutube,
  },
];
