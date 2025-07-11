import { IconMoon, IconSun } from "@/assets";
import { useState } from "react";

const ToggleDarkMode = () => {
  const [dark, setDark] = useState(false);
  return (
    <span onClick={() => setDark(!dark)}>
      {dark ? <IconMoon /> : <IconSun />}
    </span>
  );
};

export { ToggleDarkMode };
