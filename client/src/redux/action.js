import {
  GET_ALL_COUNTRIES,
  GET_ALL_COUNTRIES_BY_NAME,
  GET_COUNTRY_BY_ID,
  GET_ALL_ACTIVITIES,
  POST_CREATE_ACTIVITY,
  /* DELETE_ACTIVITY, */
  CLEAN_DB,
  ORDER_COUNTRIES,
  ORDER_CONTINENTS,
  ORDER_POBLATION,
  ALL,
} from "./actions-type";
import axios from "axios";

const endpointCountries =
  "https://countries-pi-deploy-production.up.railway.app/countries";
const endpointActivities =
  "https://countries-pi-deploy-production.up.railway.app/activities";

export const allCountries = () => {
  return async function (dispatch) {
    const response = await axios.get(endpointCountries);
    dispatch({
      type: GET_ALL_COUNTRIES,
      payload: response.data,
    });
  };
};

export const AllCountriesByName = (countryName) => {
  return async function (dispatch) {
    const response = await axios.get(
      `${endpointCountries}/search?name=${countryName}`
    );
    return dispatch({
      type: GET_ALL_COUNTRIES_BY_NAME,
      payload: response.data,
    });
  };
};

export const CountryById = (countryID) => {
  return async function (dispatch) {
    const response = await axios.get(`${endpointCountries}/${countryID}`);
    return dispatch({
      type: GET_COUNTRY_BY_ID,
      payload: response.data,
    });
  };
};

export const allActivities = () => {
  return async function (dispatch) {
    const response = await axios.get(endpointActivities);
    return dispatch({
      type: GET_ALL_ACTIVITIES,
      payload: response.data,
    });
  };
};

export const postActivity = (activity) => {
  return async function (dispatch) {
    const response = await axios.post(endpointActivities, activity);
    return dispatch({
      type: POST_CREATE_ACTIVITY,
      payload: response.data,
    });
  };
};

/* export const deleteActivity = (idAct) => {
  return async function (dispatch) {
    const response = await axios.delete(`${endpointActivities}/${idAct}`);
    return dispatch({
      type: DELETE_ACTIVITY,
      payload: response.data,
    });
  };
}; */

export const cleanDB = () => {
  return {
    type: CLEAN_DB,
  };
};

export const orderCountries = (order) => {
  return {
    type: ORDER_COUNTRIES,
    payload: order,
  };
};

export const orderContinents = (order) => {
  return {
    type: ORDER_CONTINENTS,
    payload: order,
  };
};

export const orderPoblation = (order) => {
  return {
    type: ORDER_POBLATION,
    payload: order,
  };
};

export const all = (value) => {
  return {
    type: ALL,
    payload: value,
  };
};
