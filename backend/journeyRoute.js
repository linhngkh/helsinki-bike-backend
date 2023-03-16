const express = require("express");
const router = express.Router();
const Trips = require("./model/Trips");
const {
  getAllJourney,
  getOneJourney,
} = require("../backend/controllers/Journey");

router.route("/").get(getAllJourney);

router.route("/:id").get(getOneJourney);

module.exports = router;
