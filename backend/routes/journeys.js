const express = require("express");
const router = express.Router();
const Trips = require("../model/Journey");

router.get("/", async (req, res) => {
  // making pagination
  const page = req.query.page || 0;
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


module.exports = router;
