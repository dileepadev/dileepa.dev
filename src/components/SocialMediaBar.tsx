import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import WebLinks from "@/constants/links";
import SiteInfo from "@/config/siteInfo";

export default function SocialMediaBar() {
  const iconSize = 20 as number;

  return (
    <div className="flex flex-row items-center justify-center">
      <Link
        href={`${WebLinks.github}`}
        target="_blank"
        rel="noopener noreferrer"
        className="mr-4 textButtonTheme transitionButtonTheme"
        aria-label={`Visit GitHub profile of ${SiteInfo.username}`}
      >
        <FaGithub size={iconSize} />
      </Link>
      <Link
        href={WebLinks.xtwitter}
        target="_blank"
        rel="noopener noreferrer"
        className="mr-4 textButtonTheme transitionButtonTheme"
        aria-label={`Visit Twitter profile of ${SiteInfo.username}`}
      >
        <FaXTwitter size={iconSize} />
      </Link>
      <Link
        href={WebLinks.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="mr-4 textButtonTheme transitionButtonTheme"
        aria-label={`Visit Linkedin profile of ${SiteInfo.username}`}
      >
        <FaLinkedinIn size={iconSize} />
      </Link>
      <Link
        href={WebLinks.youtube}
        target="_blank"
        rel="noopener noreferrer"
        className="textButtonTheme transitionButtonTheme"
        aria-label={`Visit YouTube profile of ${SiteInfo.username}`}
      >
        <FaYoutube size={iconSize} />
      </Link>
    </div>
  );
}
