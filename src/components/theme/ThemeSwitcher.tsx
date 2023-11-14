"use client";
import { useTheme } from "next-themes";
import IconMoon from "../icons/IconMoon";
import IconSun from "../icons/IconSun";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="fixed bottom-8 right-8">
      <button
        type="button"
        className="w-12 h-12 rounded-full shadow-md inline-flex justify-center items-center focus:outline-none cardTheme"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        {theme === "dark" ? <IconMoon /> : <IconSun />}
      </button>
    </div>
  );
};
