import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";

export function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      data-cursor={theme === "light" ? "DARK" : "LIGHT"}
      className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-[2.5px] border-foreground bg-pop-yellow text-onpop shadow-pop-sm transition-transform hover:rotate-12"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
    >
      {theme === "light" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}
