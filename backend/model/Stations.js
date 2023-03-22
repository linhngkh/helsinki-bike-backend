const { ObjectId } = require("mongodb");
const mongoose = require("mongoose");

const stationSchema = new mongoose.Schema({
  _id: ObjectId,
  nimi: { type: String },
  osoite: { type: String },

  kaupunki: { type: String },
  Kapasiteet: { type: Number },
  x: { type: Number },
  y: { type: Number },
});

module.exports = mongoose.model("Stations", stationSchema, "Stations");
