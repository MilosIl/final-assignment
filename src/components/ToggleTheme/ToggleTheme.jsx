import { IconMoon, IconSun } from "@/assets";

const ToggleTheme = ({ handleTheme, theme }) => {
  return (
    <span
      onClick={handleTheme}
      className="cursor-pointer transition-all duration-300 ease-in-out "
    >
      <div className="relative h-7 w-7">
        <div
          className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
            theme ? "opacity-100" : "opacity-0"
          }`}
        >
          <IconSun />
        </div>
        <div
          className={`absolute inset-0 transition-opacity duration-300 ease-in-out ${
            theme ? "opacity-0" : "opacity-100"
          }`}
        >
          <IconMoon />
        </div>
      </div>
    </span>
  );
};

export { ToggleTheme };
