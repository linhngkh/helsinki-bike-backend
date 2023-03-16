const express = require("express");
const router = express.Router();




// get one trip
router.get("/:id", (req, res) => {
  // req.params.id;
});
// get all trips
router.get("/", (req, res) => {
  res.status(200).json({ message: "get journey" });
});

module.exports = router;
