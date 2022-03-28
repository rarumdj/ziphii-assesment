import React, { useEffect } from "react";
import Country from "./Country";
import { useSelector } from "react-redux";
import { useActions } from "../../utils/redux/useAction";

import { v4 as uuidv4 } from "uuid";
import Loader from "../Loader";

const ListCountry = () => {
  const { fetchCountries } = useActions();

  const { loading, error, data } = useSelector(
    (state) => state.filterCountries
  );

  useEffect(() => {
    fetchCountries();
  }, [fetchCountries]);

  return (
    <>
      {loading && (
        <div className="h-screen flex justify-center items-center">
          <Loader />
        </div>
      )}
      {error && (
        <div className="h-screen flex justify-center items-center">{error}</div>
      )}
      {!loading && !error && (
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] gap-16 mt-16 items-center justify-center">
          {data.map((countryItem) => (
            <Country key={uuidv4()} countryItem={countryItem} />
          ))}
        </div>
      )}
    </>
  );
};

export default ListCountry;
