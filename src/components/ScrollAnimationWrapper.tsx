"use client";

import { useEffect, ReactNode } from "react";

export default function ScrollAnimationWrapper({
  children,
}: {
  children: ReactNode;
}) {
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

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <>{children}</>;
}
