import type React from "react";

/**
 * Smoothly scrolls the window to a specific section on the page, accounting for a sticky header.
 * @param e - The mouse event triggering the scroll.
 * @param sectionId - The ID of the HTML element to scroll to.
 * @param callback - An optional function to call after scrolling is initiated.
 */
export const scrollToSection = (
  e: React.MouseEvent<HTMLAnchorElement>,
  sectionId: string,
  callback?: () => void
) => {
  e.preventDefault();
  const section = document.getElementById(sectionId);

  if (section) {
    // Get header height to offset the scroll position
    // Assumes the header element can be selected with 'header'
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

    // Execute the callback if provided (e.g., to close a mobile menu)
    if (callback) {
      callback();
    }
  }
};

/**
 * Smoothly scrolls the window to the top of the page.
 * @param e - The mouse event triggering the scroll.
 * @param callback - An optional function to call after scrolling is initiated.
 */
export const scrollToTop = (
  e: React.MouseEvent<HTMLAnchorElement>,
  callback?: () => void
) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  if (callback) {
    callback();
  }
};
