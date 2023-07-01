const { Activity, Country } = require("../db");

const getActivityByName = async () => {
  const activitiesBd = await Activity.findAll(); // Obtener todas las actividades desde la base de datos
  return activitiesBd;
};

const createActivity = async (
  name,
  difficulty,
  duration,
  season,
  countries
) => {
  const activityCreated = await Activity.create({
    name,
    difficulty,
    duration,
    season,
  });

  if (activityCreated) {
    const countryFound = await Country.findAll({
      where: {
        name: countries,
      },
    });
    await activityCreated.addCountry(countryFound);
  }
  return activityCreated;
};

module.exports = { getActivityByName, createActivity };
