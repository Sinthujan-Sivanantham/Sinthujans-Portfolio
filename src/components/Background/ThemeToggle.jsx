import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from '../..//lib/utils'

export const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme == "dark") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setIsDarkMode(true)
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button onClick={toggleTheme}
    className={cn("fixed max-sm:hidden tot-5 right-5 z-50 rounded-full transition-colors duration-300 gap-4"
    )} >
      {isDarkMode ? (
        <Sun className="h-6 text-yellow-300" />
      ) : (
        <Moon className="h-6 text-blue-900" />
      )}
    </button>
  );
};
