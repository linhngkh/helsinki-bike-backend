const express = require("express");
const router = express.Router();
const Trips = require("./model/tripsModel");

// get one trip
router.get("/:id", (req, res) => {
  // req.params.id;
});
// get all trips
router.get("/", async (req, res) => {
  const posts = await Trips.find();
  res.send(posts);
  res.status(200).json({ message: "get journey" });
});

module.exports = router;
