const { Router } = require("express");

const {
  getCountryHandler,
  getCountryByIdHandler,
} = require("../handlers/CountryHandler");

const countries = Router();

countries.get("/search", getCountryHandler);
countries.get("/", getCountryHandler);
countries.get("/:id", getCountryByIdHandler);

module.exports = countries;
