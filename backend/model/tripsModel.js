const mongoose = require("mongoose");

const tripsSchema = new mongoose.Schema({
  departure: String,
  return: String,
  departure_station_id: Number,
  departure_station_name: String,
  return_station_id: Number,
  return_station_name: String,
  covered_distance: Number,
  duration: Number,
});

module.exports = mongoose.model("Trips", tripsSchema);
