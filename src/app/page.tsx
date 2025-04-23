"use client";

import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import About from "@/components/sections/About";
import Community from "@/components/sections/Community";
import Connect from "@/components/sections/Connect";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Hero from "@/components/sections/Hero";

export default function Home() {
  // Animation on scroll
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");

      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isInView =
          rect.top <= window.innerHeight * 0.8 && rect.bottom >= 0;

        if (isInView) {
          element.classList.add("in-view");
        }
      });
    };

    // Initial check
    handleScroll();

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />

      <main className="pt-8 md:pt-4">
        {" "}
        <section id="hero">
          <Hero />
        </section>
        <hr className="gradientDividerTheme" />
        <About />
        <hr className="gradientDividerTheme" />
        <Experience />
        <hr className="gradientDividerTheme" />
        <Education />
        <Community />
        <Connect />
      </main>

      <Footer />
    </div>
  );
}
