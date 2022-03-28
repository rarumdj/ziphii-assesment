import {
  FETCH_COUNTRIES,
  FETCH_COUNTRIES_SUCCESS,
  FETCH_COUNTRIES_ERROR,
  SEARCH_COUNTRIES,
  SEARCH_COUNTRIES_SUCCESS,
  SEARCH_COUNTRIES_ERROR,
} from "../actionType";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const countriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COUNTRIES:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COUNTRIES_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case FETCH_COUNTRIES_ERROR:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    case SEARCH_COUNTRIES:
      return {
        ...state,
        loading: true,
      };
    case SEARCH_COUNTRIES_SUCCESS:
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
    case SEARCH_COUNTRIES_ERROR:
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default countriesReducer;
