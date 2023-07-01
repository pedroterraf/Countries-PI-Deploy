const { Country, Activity } = require("../db");
const {
  getCountryByQuery,
  getAllCountries,
} = require("../controllers/CountryController");

const getCountryHandler = async (req, res) => {
  const { name } = req.query;
  try {
    const country = name
      ? await getCountryByQuery(name)
      : await getAllCountries();
    return res.status(201).json(country);
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
};

const getCountryByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const country = await Country.findByPk(id);
    const activities = await Activity.findAll({
      include: [
        {
          model: Country,
          where: { id: id },
        },
      ],
    });

    const activitiesCountry = activities.map((activity) => {
      return {
        name: activity.name,
        id: activity.id,
        difficulty: activity.difficulty,
        duration: activity.duration,
        season: activity.season,
      };
    });

    const results = { ...country.dataValues, activitiesCountry };
    return res.status(200).json(results);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = { getCountryHandler, getCountryByIdHandler };
