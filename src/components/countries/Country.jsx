import React from "react";
import Numeral from "numeral";
import { Link } from "react-router-dom";

const Country = ({ countryItem }) => {
  const { name, population, region, capital, flag, alpha3Code } = countryItem;
  return (
    <>
      <Link to={`/country/${alpha3Code}`}>
        <div className="flex flex-col w-full overflow-hidden bg-secondary shadow-md rounded-md">
          <div className="w-full h-40 bg-slate-400">
            <img src={flag} alt="" className="object-cover h-full w-full" />
          </div>
          <div className="px-6 pt-6 pb-10 h-48 space-y-4 text-primary">
            <h6 className="font-bold text-base">{name}</h6>
            <div className="space-y-2">
              <p className="text-xs font-bold ">
                Population:{" "}
                <span className="font-normal">
                  {Numeral(population).format(0, 0)}
                </span>
              </p>
              <p className="text-xs font-bold">
                Region: <span className="font-normal">{region}</span>
              </p>
              <p className="text-xs font-bold">
                Capital: <span className="font-normal">{capital}</span>
              </p>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Country;
