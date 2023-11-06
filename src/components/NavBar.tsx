"use client";
import React, { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { NavLinks } from "@/constants/links";
import IconClose from "./icons/IconClose";
import IconMenu from "./icons/IconMenu";
import SocialMediaBar from "./SocialMediaBar";
import Footer from './Footer';

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="xs:px-6 sm:px-12 md:px-16 pt-8 pb-5 fixed w-full top-0 z-10 outline outline-1 navBarTheme">
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
        <div className="md:flex hidden">
          <ul className="md:flex md:flex-row  flex flex-col items-center ">
            {NavLinks.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="px-4 font-regular text-md textButtonTheme transitionButtonTheme"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
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
          <ul className="flex flex-col items-center">
            {NavLinks.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="py-2 font-regular text-md textButtonTheme transitionButtonTheme"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </ul>
          {/* 📱 Social Media Links 📱 */}
          <div className="mt-12">
            <p className="pb-4 text-center text-md font-medium textTheme">
              Find me on
            </p>
            <SocialMediaBar />
          </div>
        </div>
        {/* 📱 Footer 📱 */}
        <div className="pb-2">
          <Footer />
        </div>
      </div>
    </nav>
  );
}
