const express = require("express");
const router = express.Router();
const Trips = require("../model/Journey");

router.get("/", async (req, res) => {
  // making pagination
  const page = req.query.p || 0;
  const tripsPerPage = 30;
  try {
    const data = await Trips.find({})
      .skip(page * tripsPerPage)
      .limit(tripsPerPage);
    console.log(data);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});
// //localhost:8000/api/journeys?p=300 search by page

router.get("/:id", async (req, res) => {
  const singleTrip = await Trips.find({ id: req.params.id }, (err, items) => {
    if (err) res.status(500).send(error);
    res.status(200).json(singleTrip);
  });
});

module.exports = router;
