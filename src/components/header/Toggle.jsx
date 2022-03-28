import React, { useContext } from "react";
import { Icon } from "@iconify/react";
import { ThemeContext } from "../theme/ThemeContext";

export const Toggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);


  return (
    <>
      <button
        className="flex space-x-2 items-center"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        <Icon
          icon={theme === "dark" ? "carbon:light" : "ic:outline-dark-mode"}
          className="text-primary md:h-6 md:w-6 h-4 w-4"
        />
        <span className="text-primary font-bold md:text-sm text-xs">{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
      </button>
    </>
  );
};

export default Toggle;
