import Link from "next/link";
import { FaCodeBranch, FaGithub } from "react-icons/fa";
import { socialLinks } from "@/data/links";
import packageJson from "@/../package.json";
import ThemeSwitcher from "./ThemeSwitcher";

const Footer = () => {
  return (
    <footer className="py-6 bg-gray-50 dark:bg-black textColor border-t border-gray-200">
      {" "}
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
        {" "}
        {/* Copyright */}
        <span className="text-sm text-center sm:text-left order-last sm:order-first mt-2 sm:mt-0">
          © 2025 Dileepa Bandara. All rights reserved.
        </span>
        {/* Links & Theme Switcher */}
        <div className="text-sm flex flex-row items-center space-x-2 justify-center sm:justify-end">
          <Link
            href={`${socialLinks.github}/dileepa.dev`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm rounded-md px-3 py-1.5 buttonColor transition-colors duration-200 flex items-center"
            aria-label="View Source Code on GitHub"
          >
            <FaGithub className="mr-1.5" size={14} /> <span>View Source</span>
          </Link>
          <span className="text-neutral-300">|</span>
          <Link
            href={`${socialLinks.github}/dileepa.dev/releases/tag/v1.2.0`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm rounded-md px-3 py-1.5 buttonColor transition-colors duration-200 flex items-center"
            aria-label="View App Version"
          >
            <FaCodeBranch className="mr-1.5" size={14} />{" "}
            <span>v{packageJson.version}</span>
          </Link>
          <span className="text-neutral-300">|</span> <ThemeSwitcher />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
