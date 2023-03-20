const express = require("express");
const router = express.Router();
const Stations = require("../model/Stations");

router.get("/", async (req, res) => {
  try {
    const data = await Stations.find({});
    console.log(data);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
