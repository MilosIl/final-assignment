import { ToggleTheme } from "@/components";
import { useState, useEffect } from "react";

const ToggleThemeContainer = () => {
  const [dark, setDark] = useState(false);

  const handleTheme = () => {
    setDark(!dark);
  };

  // Apply dark mode to document and body
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "#111827"; // dark gray
      document.body.style.color = "#f9fafb"; // light text
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor = "#ffffff"; // white
      document.body.style.color = "#111827"; // dark text
    }
  }, [dark]);

  return <ToggleTheme handleTheme={handleTheme} theme={dark} />;
};

export { ToggleThemeContainer };
