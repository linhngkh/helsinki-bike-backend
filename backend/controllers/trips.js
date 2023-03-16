const Trips = require("../model/Trips");

// GET all journey
// http://localhost:8000/api/journeys/
exports.getAllJourney = async (req, res, next) => {
  try {
    const trips = await Trips.find();
    return res.status(200).json({
      success: true,
      count: trips.length,
      data: trips,
    });
  } catch (error) {
    return res.send(500).json({
      success: false,
      error: "Server Error",
    });
  }
};

// GET one journey by id
// http://localhost:8000/api/journeys/:id
exports.getOneJourney = async (req, res, next) => {
  res.send("one journey");
};
