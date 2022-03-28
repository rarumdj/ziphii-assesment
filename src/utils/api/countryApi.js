import axios from "axios";

export const getCountries = () => {
  return axios.get("https://restcountries.com/v2/all");
};

export const getCountry = (code) => {
  return axios.get(`https://restcountries.com/v2/alpha/${code}`);
};

export const getSearchCountries = (term) => {
  if (term) {
    return axios.get(`https://restcountries.com/v2/name/${term}`);
  } else {
    return axios.get("https://restcountries.com/v2/all");
  }
};
