const {
  createActivity,
  getActivityByName,
} = require("../controllers/ActivityController");

const getActivityHandler = async (req, res) => {
  try {
    const activities = await getActivityByName();
    res.status(200).json(activities);
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
};

const createActivityHandler = async (req, res) => {
  const { name, difficulty, duration, season, countries } = req.body;
  try {
    if (!name || !difficulty || !duration || !season || !countries) {
      throw Error("Missing one or more properties");
    }
    const newActivity = await createActivity(
      name,
      difficulty,
      duration,
      season,
      countries
    );
    console.log(newActivity);
    return res.status(201).json(newActivity);
  } catch (error) {
    return res.status(400).send({ error: error.message });
  }
};

module.exports = { getActivityHandler, createActivityHandler };
