import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Numeral from "numeral";
import { useActions } from "../../utils/redux/useAction";
import Borders from "./Borders";
import Loader from "../Loader";

const DetailsPage = () => {
  const { code } = useParams();
  const { fetchCountry } = useActions();

  const { loading, error, data } = useSelector((state) => state?.country);

  useEffect(() => {
    fetchCountry(code);
  }, [fetchCountry, code]);

  if (data) {
    const {
      name,
      population,
      region,
      nativeName,
      flag,
      capital,
      subregion,
      topLevelDomain,
      currencies,
      languages,
      borders,
    } = data;

    return (
      <>
        {loading && (
          <div className="h-screen flex justify-center items-center">
            <Loader />
          </div>
        )}
        {error && (
          <div className="h-screen flex justify-center items-center">
            {error}
          </div>
        )}

        {!loading && !error && (
          <div>
            <Link
              to="/"
              className="flex items-center max-w-min py-1.5 px-6 bg-secondary rounded-md shadow-[0_0px_15px_-6px_rgba(0,0,0,0.2)] text-primary"
            >
              <span className="mr-2">
                <Icon
                  icon="bx:arrow-back"
                  fontSize={20}
                  className="text-primary my-auto"
                />
              </span>{" "}
              Back
            </Link>

            <div className="mt-16 grid md:grid-cols-2 md:gap-24 gap-8 justify-center items-center">
              <div className="w-full md:mb-0 mb-6">
                <img
                  src={flag}
                  alt=""
                  className="object-fill w-full h-full rounded-sm"
                />
              </div>
              <div className=" my-auto flex flex-col">
                <h1 className="font-bold text-lg text-primary mb-6">{name}</h1>
                <div className="flex md:flex-row flex-col justify-between">
                  <ul className="space-y-2 text-primary text-sm">
                    <li className="font-bold">
                      Native Name:{" "}
                      <span className="font-normal">{nativeName}</span>
                    </li>
                    <li className="font-bold">
                      Population:{" "}
                      <span className="font-normal">
                        {Numeral(population).format(0, 0)}
                      </span>
                    </li>
                    <li className="font-bold">
                      Region: <span className="font-normal">{region}</span>
                    </li>
                    <li className="font-bold">
                      Sub Region:{" "}
                      <span className="font-normal">
                        {subregion !== "" ? subregion : "N.A."}
                      </span>
                    </li>
                    <li className="font-bold">
                      Capital:{" "}
                      <span className="font-normal">
                        {capital !== "" ? capital : "N.A."}
                      </span>
                    </li>
                  </ul>
                  <ul className="space-y-2 md:mt-0 mt-5 text-primary text-sm">
                    <li className="font-bold">
                      Top Level Domain:{" "}
                      <span className="font-normal">{topLevelDomain}</span>
                    </li>
                    <li className="font-bold">
                      Currency:{" "}
                      <span className="font-normal">
                        {currencies
                          ?.map((currency) => currency.name)
                          .join(", ")}
                      </span>
                    </li>
                    <li className="font-bold">
                      Languages:{" "}
                      <span className="font-normal">
                        {languages?.map((language) => language.name).join(", ")}
                      </span>
                    </li>
                  </ul>
                </div>
                {borders?.length > 0 && <Borders borders={borders} />}
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
};

export default DetailsPage;
