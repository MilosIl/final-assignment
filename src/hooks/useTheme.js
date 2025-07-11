import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/store/ThemeStore/ThemeStore";
import { useEffect } from "react";

const useTheme = () => {
  const dispatch = useDispatch();
  const { isDarkMode, loading, error } = useSelector((state) => state.theme);

  useEffect(() => {
    const root = document.documentElement;

    if (isDarkMode) {
      root.classList.add("dark");
      root.style.colorScheme = "dark";
      document.body.style.backgroundColor = "#111827";
      document.body.style.color = "#f0f9ff";
    } else {
      root.classList.remove("dark");
      root.style.colorScheme = "light";
      document.body.style.backgroundColor = "#ffffff";
      document.body.style.color = "#111827";
    }
  }, [isDarkMode]);

  const toggle = () => {
    dispatch(toggleTheme());
  };

  const setTheme = (theme) => {
    if (theme === "dark" && !isDarkMode) {
      dispatch(toggleTheme());
    } else if (theme === "light" && isDarkMode) {
      dispatch(toggleTheme());
    }
  };

  const theme = isDarkMode ? "dark" : "light";

  const systemPreference =
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

  return {
    theme,
    isDarkMode,
    isLightMode: !isDarkMode,
    toggle,
    setTheme,
    systemPreference,
    loading,
    error,
  };
};

export { useTheme };
