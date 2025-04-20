"use client";

import type React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  // Smooth scroll function
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);

    if (section) {
      // Get header height to offset the scroll position
      const header = document.querySelector("header");
      const headerHeight = header ? header.getBoundingClientRect().height : 0;

      // Calculate the position to scroll to
      const offsetTop =
        section.getBoundingClientRect().top + window.scrollY - headerHeight;

      // Smooth scroll to the section
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="pt-10 pb-20 md:pt-16 md:pb-32 container mx-auto px-4">
      <div className="flex flex-col items-center text-center">
        {/* Profile Image at the top */}
        <div className="mb-10 animate-on-scroll">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-200">
            <Image
              src="/profile.webp"
              alt="Dileepa Bandara"
              loading="eager"
              priority
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Text content below the image */}
        <div className="animate-on-scroll max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-black bg-clip-text">Dileepa Bandara</span>
          </h1>
          <p className="md:text-xl text-lg text-gray-700 mb-8 leading-relaxed">
            I&#39;m an Associate AI Engineer passionate about building
            intelligent solutions that make a difference.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="#connect"
              className="bg-neutral-900 text-white py-2 px-4 rounded-md hover:bg-black transition duration-300"
              onClick={(e) => scrollToSection(e, "connect")}
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
