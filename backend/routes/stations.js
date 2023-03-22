const express = require("express");
const router = express.Router();
const Stations = require("../model/Stations");

// get all stations
router.get("/", async (req, res) => {
  try {
    const data = await Stations.find({});
    console.log(data);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

// get single station
router.get("/:id", async (req, res) => {
  try {
    const station = await Stations.findById(req.params.id);
    res.json(station);
  } catch (error) {
    res.json({ message: error });
  }
});
module.exports = router;
