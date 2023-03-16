const Trips = require("../model/Trips");

// GET all journey
// http://localhost:8000/api/journeys/
exports.getAllJourney = async (req, res, next) => {
 db.collection("stationbikes").find()
};

// GET one journey by id
// http://localhost:8000/api/journeys/:id
exports.getOneJourney = async (req, res, next) => {
  res.send("one journey");
};
