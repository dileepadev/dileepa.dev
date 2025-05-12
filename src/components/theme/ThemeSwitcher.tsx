"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      type="button"
      className="p-1.5 rounded-md buttonColor transition-colors duration-200 cursor-pointer"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <HiOutlineMoon className="textColor" size={20} />
      ) : (
        <HiOutlineSun className="textColor" size={20} />
      )}
    </button>
  );
};

export default ThemeSwitcher;
