import { combineReducers } from "redux";
import countriesReducer from "./reducers/countriesReducer";
import countryReducer from "./reducers/countryReducer";
import filterCountriesReducer from "./reducers/filterCountryReducer";

const rootReducer = combineReducers({
  country: countryReducer,
  countries: countriesReducer,
  filterCountries: filterCountriesReducer,
});

export default rootReducer;
