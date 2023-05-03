const stationsRoute = require("express").Router();
const Stations = require("../model/Stations");

// get all stations
stationsRoute.get("/", (req, res) => {
  Stations.find({}).then((station) => {
    res.json(station);
  });
});

// get single station
stationsRoute.get("/:id", async (req, res) => {
  Stations.findById(req.params.id)
    .then((station) => {
      if (station) {
        res.json(station);
      } else {
        res.status(404).end();
      }
    })
    .catch((error) => NextPlan(error));
});

module.exports = stationsRoute;
