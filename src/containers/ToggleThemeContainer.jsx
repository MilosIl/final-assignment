import { ToggleTheme } from "@/components";
import { useTheme } from "@/hooks/useTheme";

const ToggleThemeContainer = () => {
  const { isDarkMode, toggle } = useTheme();

  return <ToggleTheme handleTheme={toggle} theme={isDarkMode} />;
};

export { ToggleThemeContainer };
