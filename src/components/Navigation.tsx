"use client";

import Link from "next/link";
import type React from "react";

import { useState, useRef } from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa";
import { HiX, HiOutlineMenuAlt4 } from "react-icons/hi";
import { navItems, socialLinks, emailAddress } from "@/data/links";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);

    if (section) {
      const header = headerRef.current;
      const headerHeight = header ? header.getBoundingClientRect().height : 0;

      const offsetTop =
        section.getBoundingClientRect().top + window.scrollY - headerHeight;

      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });

      setIsMobileMenuOpen(false);
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      ref={headerRef}
      className="sticky top-0 z-50 bg-white border-b border-gray-200"
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="font-semibold text-lg">
          <Link
            href="#hero"
            className="text-black hover:text-gray-700 transition-colors"
            onClick={scrollToTop}
          >
            Dileepa Bandara
          </Link>
        </div>

        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className="text-gray-700 hover:text-black transition-colors"
              onClick={(e) => scrollToSection(e, item.id)}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex space-x-4">
          <Link
            href={socialLinks.github ?? "#"}
            target="_blank"
            className="text-gray-700 hover:text-black transition-colors"
          >
            <FaGithub size={20} />
          </Link>
          <Link
            href={socialLinks.linkedin ?? "#"}
            target="_blank"
            className="text-gray-700 hover:text-black transition-colors"
          >
            <FaLinkedinIn size={20} />
          </Link>
          <Link
            href={`mailto:${emailAddress}`}
            target="_blank"
            className="text-gray-700 hover:text-black transition-colors"
          >
            <FaEnvelope size={20} />
          </Link>
        </div>

        <div className="md:hidden">
          <button
            type="button"
            title="Toggle Navigation Menu"
            className="focus:outline-none text-gray-700 hover:text-black hover:bg-gray-100 p-1 rounded transition-colors duration-200"
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
          <div className="md:hidden absolute top-full left-0 right-0 mt-0 py-2 bg-white rounded-b-md shadow-lg flex flex-col items-center z-40">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="py-2 w-full text-center text-gray-800 hover:bg-gray-100 hover:text-black transition-colors"
                onClick={(e) => scrollToSection(e, item.id)}
              >
                {item.name}
              </a>
            ))}
            <div className="mt-2 pt-2 border-t border-gray-200 w-full px-4 py-2 flex justify-center space-x-6">
              <Link
                href={socialLinks.github ?? "#"}
                target="_blank"
                className="text-gray-700 hover:text-black transition-colors"
              >
                <FaGithub size={20} />
              </Link>
              <Link
                href={socialLinks.linkedin ?? "#"}
                target="_blank"
                className="text-gray-700 hover:text-black transition-colors"
              >
                <FaLinkedinIn size={20} />
              </Link>
              <Link
                href={`mailto:${emailAddress}`}
                target="_blank"
                className="text-gray-700 hover:text-black transition-colors"
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
