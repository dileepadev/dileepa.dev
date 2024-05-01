"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { NavLinks } from "@/constants/links";
import IconClose from "./icons/IconClose";
import IconMenu from "./icons/IconMenu";
import SocialMediaBar from "./SocialMediaBar";
import Footer from "./Footer";
import { ThemeSwitcher } from "./theme/ThemeSwitcher";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const renderNavLinks = (isMobile: boolean) => (
    <ul
      className={`flex flex-col items-center ${
        isMobile ? "py-2" : "md:flex-row"
      }`}
    >
      {NavLinks.map((link) => (
        <li key={link.key} className={isMobile ? "py-2" : "px-4"}>
          <Link href={link.href}>
            <p
              className={`font-regular text-md textButtonTheme transitionButtonTheme ${
                link.href === pathname && !isMobile
                  ? "navBarSelectedItem selectedNavItem"
                  : ""
              } ${
                link.href === pathname && isMobile
                  ? "navBarSelectedItemMobile selectedNavItem"
                  : ""
              } `}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="xs:px-6 sm:px-12 md:px-16 pt-8 pb-5 fixed w-full top-0 z-10 outline outline-5 navBarTheme">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="flex items-center justify-between">
          {/* ⚙️ Logo */}
          <Link href="/">
            <div className="flex items-center justify-center">
              <Logo />
            </div>
          </Link>
          {/* 📂 Mobile Menu Button */}
          <div className="md:hidden flex items-center justify-center ">
            <button
              type="button"
              className="inline-flex items-center"
              title="Toggle Navigation Menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <IconClose /> : <IconMenu />}
            </button>
          </div>
        </div>
        {/* 💻 Desktop NavBar Items */}
        <div className="md:flex hidden">{renderNavLinks(false)}</div>
        {/* 💻 Social Media Links */}
        <div className="md:flex hidden">
          <SocialMediaBar />
        </div>
      </div>
      {/* 📱 Mobile NavBar Items */}
      <div
        className={`md:hidden pt-10 ${
          menuOpen
            ? "fixed w-full h-full left-0 justify-around flex flex-col navBarTheme"
            : "hidden"
        }`}
      >
        <div>
          {renderNavLinks(true)}
          {/* 📱 Social Media Links 📱 */}
          <div className="mt-12">
            <p className="pb-4 text-center text-md font-medium textTheme">
              Find me on
            </p>
            <SocialMediaBar />
          </div>
        </div>
        {/* 📱 Footer & ThemeSwitcher 📱 */}
        <ThemeSwitcher />
        <div className="pb-2">
          <Footer />
        </div>
      </div>
    </nav>
  );
}
