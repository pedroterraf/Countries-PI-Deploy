const { Router } = require("express");

const {
  getActivityHandler,
  createActivityHandler,
} = require("../handlers/ActivityHandler");

const activities = Router();

activities.get("/", getActivityHandler);
activities.post("/", createActivityHandler);

module.exports = activities;
