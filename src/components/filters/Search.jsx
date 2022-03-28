import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { useActions } from "../../utils/redux/useAction";
import FilterRegion from "./FilterRegion";

const Search = () => {
  const [term, setTerm] = useState("");
  const { searchCountries } = useActions();

  searchCountries(term);

  // const onSubmitHandler = (event) => {
  //   event.preventDefault();
  //   if (term) {
  //     searchCountries(term);
  //   }
  // };

  return (
    <div className="flex md:flex-row flex-col md:space-y-0 space-y-6">
      <form  className="relative  text-gray-600">
        <input
          className="shadow-[0_0px_15px_-6px_rgba(0,0,0,0.2)] bg-secondary py-4 md:w-96 w-full px-5 pl-12 rounded-md text-xs focus:outline-none"
          type="search"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search for a country..."
        />
        <span className="absolute left-2 top-0 mt-4 ml-2">
          <Icon
            icon="ant-design:search-outlined"
            fontSize={18}
            className="text-primary"
          />
        </span>
      </form>
      <div className="md:ml-auto">
        <FilterRegion />
      </div>
    </div>
  );
};

export default Search;
