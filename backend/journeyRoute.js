const express = require("express");
const router = express.Router();

// get all trips
router.get("/", (req, res) => {
  res.status(200).json({ message: "get journey" });
});

// get one trip
router.get("/:id", (req, res) => {
  // req.params.id;
});


module.exports = router;
