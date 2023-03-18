const express = require("express");
const router = express.Router();
const Trips = require("../model/Trips");

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

router.get("/api/journey/:id", (req, res) => {
  res.send("ok view 1 id");
});

module.exports = router;
