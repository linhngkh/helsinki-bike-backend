const express = require("express");
const router = express.Router();
const Trips = require("../model/Journey");

router.get("/", async (req, res) => {
  // making pagination
  const page = req.query.page || 0;
  const tripsPerPage = 500;
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


module.exports = router;
