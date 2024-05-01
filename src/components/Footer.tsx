import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import WebLinks from "@/constants/links";
import packageJson from "../../package.json";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col gap-2 justify-center items-center pb-5 pt-5 outline outline-1 footerTheme">
        <p className="text-sm textTheme">
          Copyright © {new Date().getFullYear()} Dileepa Bandara
        </p>
        <p className="text-sm textTheme">
          Version {packageJson.version} | Built with Next.js{" "}
          {packageJson.dependencies.next}
        </p>
        <Link
          href={WebLinks.githubRepo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm rounded-xl px-4 py-1 cardTheme textButtonTheme transitionButtonTheme"
          aria-label="View Source Code on GitHub"
        >
          <div className="flex items-center">
            <p>View Source</p>
            <FaGithub className="ml-2" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
