import { useTheme } from "@/contexts/ThemeContext";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  if (!toggleTheme) return null;

  return (
    <button
      type="button"
      className="theme-switch fixed top-5 right-5 z-[9990] flex h-11 w-11 items-center justify-center rounded-full border border-white/20 bg-[#140d26]/85 text-[#f8f4ff] shadow-lg backdrop-blur-xl transition-[transform,background-color,color] duration-200 hover:scale-105 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8b5cf6]"
      aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
      aria-pressed={theme === "light"}
      title={theme === "dark" ? "Light theme" : "Dark theme"}
      onClick={toggleTheme}
    >
      <span aria-hidden="true" className="text-lg leading-none">{theme === "dark" ? "☀" : "☾"}</span>
    </button>
  );
}
