import {
    FILTER_COUNTRIES,
    FILTER_COUNTRIES_SUCCESS,
    FILTER_COUNTRIES_ERROR,
  } from "../actionType";
  
  const initialState = {
    loading: false,
    data: [],
    error: "",
  };
  
  const filterCountriesReducer = (state = initialState, action) => {
    switch (action.type) {
      case FILTER_COUNTRIES:
        return {
          ...state,
          loading: true,
        };
      case FILTER_COUNTRIES_SUCCESS:
        return {
          loading: false,
          data: action.payload,
          error: "",
        };
      case FILTER_COUNTRIES_ERROR:
        return {
          loading: false,
          data: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default filterCountriesReducer;
  