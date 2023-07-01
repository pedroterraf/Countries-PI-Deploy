import {
  ALL,
  CLEAN_DB,
  /*   DELETE_ACTIVITY, */
  GET_ALL_ACTIVITIES,
  GET_ALL_COUNTRIES,
  GET_ALL_COUNTRIES_BY_NAME,
  GET_COUNTRY_BY_ID,
  ORDER_CONTINENTS,
  ORDER_COUNTRIES,
  ORDER_POBLATION,
  POST_CREATE_ACTIVITY,
} from "./actions-type";

const initialState = {
  countries: [],
  CountriesToFilt: [],
  AllActivities: [],
  AllCountriesByName: [],
  CountryById: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        CountriesToFilt: action.payload,
      };

    case GET_ALL_ACTIVITIES:
      return { ...state, AllActivities: action.payload };

    case GET_ALL_COUNTRIES_BY_NAME:
      return { ...state, AllCountriesByName: action.payload };

    case GET_COUNTRY_BY_ID:
      return { ...state, CountryById: action.payload };

    case POST_CREATE_ACTIVITY:
      return { ...state, AllActivities: action.payload };

    /*     case DELETE_ACTIVITY:
      return { ...state, AllActivities: action.payload }; */

    case CLEAN_DB:
      return { ...state, AllCountriesByName: [], CountryById: {} };

    case ORDER_COUNTRIES:
      let countriesCopy = [...state.CountriesToFilt];
      if (action.payload === "A") {
        return {
          ...state,
          CountriesToFilt: countriesCopy.sort((a, b) =>
            a.name > b.name ? 1 : -1
          ),
        };
      } else if (action.payload === "D") {
        return {
          ...state,
          CountriesToFilt: countriesCopy.sort((a, b) =>
            a.name < b.name ? 1 : -1
          ),
        };
      }
      break;

    case ORDER_CONTINENTS:
      const filterContinent = state.countries.filter(
        (country) => country.continent === action.payload
      );
      return {
        ...state,
        CountriesToFilt:
          action.payload === "All" ? [...state.countries] : filterContinent,
      };

    case ORDER_POBLATION:
      let countriesPob = [...state.CountriesToFilt];
      if (action.payload === "A") {
        return {
          ...state,
          CountriesToFilt: countriesPob.sort((a, b) =>
            a.population > b.population ? 1 : -1
          ),
        };
      } else if (action.payload === "D") {
        return {
          ...state,
          CountriesToFilt: countriesPob.sort((a, b) =>
            a.population < b.population ? 1 : -1
          ),
        };
      }
      break;

    case ALL:
      if (action.payload === "All") {
        return { ...state, CountriesToFilt: [...state.countries] };
      }

      break;
    default:
      return { ...state, countries: action.payload };
  }
};

export default reducer;
