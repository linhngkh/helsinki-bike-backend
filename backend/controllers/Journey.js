// GET all journey
// http://localhost:8000/api/journeys/
exports.getAllJourney = (req, res, next) => {
  res.send("GET all journeys");
};

// GET one journey by id
// http://localhost:8000/api/journeys/:id
exports.getOneJourney = (req, res, next) => {
  res.send("one journey");
};
