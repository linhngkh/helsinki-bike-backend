const journeyRoutes = require("express").Router();
const Journeys = require("../model/Journeys");

journeyRoutes.get("/", async (req, res) => {
  // making pagination
  const page = req.query.page || 0;
  const tripsPerPage = 3000;
  try {
    const data = await Journeys.find({})
      .skip(page * tripsPerPage)
      .limit(tripsPerPage);
    console.log(data);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

journeyRoutes.get("/:id", (req, res, next) => {
  Journeys.findById(req.params.id)
    .then((journey) => {
      if (journey) {
        res.json(journey);
      } else {
        res.status(404).end();
      }
    })
    .catch((error) => next(error));
});

module.exports = journeyRoutes;
