const { Country } = require("../db");
const { Op } = require("sequelize");

const getAllCountries = async (req, res) => {
  /*   const apiCountryResponse = await axios.get("http://localhost:5000/countries");
  const apiCountries = apiCountryResponse.data;

  const countriesToCreate = await apiCountries?.map((countries) => ({
    id: countries.cca3,
    name: countries.name.common,
    image: countries.flags.svg,
    continent: countries.continents[0],
    capital: countries.capital ? countries.capital[0] : "Not Found",
    subregion: countries.subregion ? countries.subregion : "Not Found",
    area: countries.area,
    population: countries.population,
  }));

  for (const country of countriesToCreate) { */
  /* const existingCountry = await Country.findByPk(country.id); */
  /* if (!existingCountry) { */
  /* await Country.create(country); */
  /* } */
  /* } */
  /*   return countriesToCreate; */
  const CountryResponse = await Country.findAll();

  return CountryResponse;
};

const getCountryByQuery = async (name) => {
  const apiResponse = await getAllCountries();

  const apiCountries = await apiResponse.filter(
    (countries) => countries.name.common === name
  );

  const countriesDb = await Country.findAll({
    where: { name: { [Op.like]: `%${name}%` } },
  });

  if (countriesDb.length === 0) {
    throw ERROR("No countries found");
  }
  return [...apiCountries, ...countriesDb];
};

module.exports = {
  getCountryByQuery,
  getAllCountries,
};
