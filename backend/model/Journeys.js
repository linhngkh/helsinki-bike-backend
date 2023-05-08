const mongoose = require("mongoose");

const journeySchema = new mongoose.Schema({
  departure: { type: String },
  return: { type: String },
  departure_station_id: { type: Number },
  departure_station_name: { type: String },
  return_station_id: { type: Number },
  return_station_name: { type: String },
  covered_distance: { type: Number },
  duration: { type: Number },
});

journeySchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

module.exports = mongoose.model("Journeys", journeySchema, "Journeys");
