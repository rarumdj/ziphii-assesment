import React from "react";
import Toggle from "./Toggle";

const Header = () => {
  return (
    <header className="flex flex-row items-center shadow-sm bg-secondary lg:px-16 px-6 py-5">
      <div className="text-primary md:text-base text-xs font-bold">
        Where in the World?
      </div>
      <div className="text-primary ml-auto">
        <Toggle />
      </div>
      
    </header>
  );
};

export default Header;
