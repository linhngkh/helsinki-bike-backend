const express = require("express");
const router = express.Router();
const Journeys = require("../model/Journeys");

router.get("/", async (req, res) => {
  // making pagination
  const page = req.query.page || 0;
  const tripsPerPage = 600;
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

module.exports = router;
