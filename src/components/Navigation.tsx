"use client";

import Link from "next/link";
import type React from "react";

import { useState, useRef } from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { HiX, HiOutlineMenuAlt4 } from "react-icons/hi";
import { navItems, socialLinks, emailAddress } from "@/data/links";
import {
  scrollToSection as smoothScrollToSection,
  scrollToTop as smoothScrollToTop,
} from "@/utils/scroll";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <header ref={headerRef} className="bodyColor sticky top-0 z-50">
      <div className="container mx-auto px-4 py-5 flex justify-between items-center">
        <div className="textButtonSecondaryColor buttonTransition font-medium text-base">
          <Link
            href="#hero"
            className="cursor-pointer"
            onClick={(e) => smoothScrollToTop(e, closeMobileMenu)}
          >
            Dileepa Bandara
          </Link>
        </div>

        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className="textButtonColor buttonTransition cursor-pointer"
              onClick={(e) => smoothScrollToSection(e, item.id)}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex space-x-4">
          <Link
            href={socialLinks.github ?? "#"}
            target="_blank"
            className="textButtonColor buttonTransition cursor-pointer"
          >
            <FaGithub size={20} />
          </Link>
          <Link
            href={socialLinks.linkedin ?? "#"}
            target="_blank"
            className="textButtonColor buttonTransition cursor-pointer"
          >
            <FaLinkedinIn size={20} />
          </Link>
          <Link
            href={`mailto:${emailAddress}`}
            target="_blank"
            className="textButtonColor buttonTransition cursor-pointer"
          >
            <FaEnvelope size={20} />
          </Link>
        </div>

        <div className="md:hidden">
          <button
            type="button"
            title="Toggle Navigation Menu"
            className="textButtonColor buttonTransition cursor-pointer focus:outline-none p-1 rounded"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <HiX size={24} />
            ) : (
              <HiOutlineMenuAlt4 size={24} />
            )}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="bodyColor borderColor md:hidden absolute top-full left-0 right-0 mt-0 py-2 rounded-b-md shadow-lg flex flex-col items-center z-40">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="textButtonColor buttonTransition cursor-pointer py-2 w-full text-center"
                onClick={(e) =>
                  smoothScrollToSection(e, item.id, closeMobileMenu)
                }
              >
                {item.name}
              </a>
            ))}
            <div className="borderColor mt-8 pt-4 px-4 py-2 border-t w-full flex justify-center space-x-6">
              <Link
                href={socialLinks.github ?? "#"}
                target="_blank"
                className="textButtonColor buttonTransition cursor-pointer"
              >
                <FaGithub size={20} />
              </Link>
              <Link
                href={socialLinks.linkedin ?? "#"}
                target="_blank"
                className="textButtonColor buttonTransition cursor-pointer"
              >
                <FaLinkedinIn size={20} />
              </Link>
              <Link
                href={`mailto:${emailAddress}`}
                target="_blank"
                className="textButtonColor buttonTransition cursor-pointer"
              >
                <FaEnvelope size={20} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navigation;
