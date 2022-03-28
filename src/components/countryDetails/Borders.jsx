import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import countries from "i18n-iso-countries";
import english from "i18n-iso-countries/langs/en.json";
import { v4 as uuidv4 } from "uuid";

countries.registerLocale(english);
const Borders = () => {
  const { data, error } = useSelector((state) => {
    return state?.country;
  });

  if (data && data.borders) {
    const lessBorders = data.borders.slice(0, 3);

    return (
      <>
        {error && (
          <div className="h-screen flex justify-center items-center">
            {error}
          </div>
        )}
        <div className="flex md:flex-row flex-col md:space-x-4 md:space-y-0 space-y-4 mt-12 md:items-center ">
          <p className="text-xs font-bold text-primary">Border Country:</p>
          <ul className="flex flex-wrap text-primary text-xs">
            {lessBorders.map((border) => (
              <li
                key={uuidv4()}
                // onClick={() => handless(border)}
                className="mr-2 mb-2 py-1 px-5 bg-secondary rounded-sm shadow-[0_0px_5px_-0px_rgba(0,0,0,0.4)]"
              >
                <Link to={`/country/${border}`}>
                  {countries.getName(border, "en", { select: "official" })}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
};

export default Borders;
