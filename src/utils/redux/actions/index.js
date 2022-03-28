import {
  FETCH_COUNTRY,
  FETCH_COUNTRY_SUCCESS,
  FETCH_COUNTRY_ERROR,
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_ERROR,
  SEARCH_COUNTRIES,
  SEARCH_COUNTRIES_SUCCESS,
  SEARCH_COUNTRIES_ERROR,
  FILTER_COUNTRIES,
  FILTER_COUNTRIES_SUCCESS,
  FILTER_COUNTRIES_ERROR,
} from "../actionType";
import {
  getCountries,
  getCountry,
  getSearchCountries,
} from "../../api/countryApi";
import store from "../store";

export const fetchCountries = () => {
  return (dispatch) => {
    dispatch(fetchCountriesRequest());
    dispatch(filterCountriesRequest());

    getCountries()
      .then((response) => {
        dispatch(fetchCountriesSuccess(response.data));
        dispatch(filterCountriesSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchCountriesFailure(error.message));
        dispatch(filterCountriesFailure(error.message));
      });
  };
};

export const searchCountries = (term) => {
  return (dispatch) => {
    dispatch(searchCountriesRequest());
    dispatch(filterCountriesRequest());

    getSearchCountries(term)
      .then((response) => {
        dispatch(searchCountriesSuccess(response.data));
        dispatch(filterCountriesSuccess(response.data));
      })
      .catch((error) => {
        dispatch(
          fetchCountriesFailure("Can't find the country you're looking for")
        );
        dispatch(
          filterCountriesFailure("Can't find the country you're looking for")
        );
      });
  };
};

export const filterCountries = (countryId) => {
  return (dispatch) => {
    const countries = store.getState().countries;
    const filteredCountries = countries.data.filter(
      (country) => country.region === countryId
    );
    dispatch(filterCountriesSuccess(filteredCountries));
  };
};
export const fetchCountry = (code) => {
  return (dispatch) => {
    dispatch(fetchCountryRequest());

    getCountry(code)
      .then((response) => {
        dispatch(fetchCountrySuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchCountryFailure(error.message));
      });
  };
};

export const fetchCountryRequest = () => {
  return {
    type: FETCH_COUNTRY,
  };
};

export const fetchCountrySuccess = (country) => {
  return {
    type: FETCH_COUNTRY_SUCCESS,
    payload: country,
  };
};

export const fetchCountryFailure = (error) => {
  return {
    type: FETCH_COUNTRY_ERROR,
    payload: error,
  };
};

export const fetchCountriesRequest = () => {
  return {
    type: FETCH_COUNTRIES,
  };
};

export const fetchCountriesSuccess = (country) => {
  return {
    type: FETCH_COUNTRIES_SUCCESS,
    payload: country,
  };
};

export const fetchCountriesFailure = (error) => {
  return {
    type: FETCH_COUNTRIES_ERROR,
    payload: error,
  };
};

export const filterCountriesRequest = () => {
  return {
    type: FILTER_COUNTRIES,
  };
};

export const filterCountriesSuccess = (country) => {
  return {
    type: FILTER_COUNTRIES_SUCCESS,
    payload: country,
  };
};

export const filterCountriesFailure = (error) => {
  return {
    type: FILTER_COUNTRIES_ERROR,
    payload: error,
  };
};

export const searchCountriesRequest = () => {
  return {
    type: SEARCH_COUNTRIES,
  };
};

export const searchCountriesSuccess = (country) => {
  return {
    type: SEARCH_COUNTRIES_SUCCESS,
    payload: country,
  };
};

export const searchCountriesFailure = (error) => {
  return {
    type: SEARCH_COUNTRIES_ERROR,
    payload: error,
  };
};
