const mongoose = require("mongoose");

const stationSchema = new mongoose.Schema({
  FID: {
    type: String,
    required: true,
  },
  ID: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "Stations",
  },
  Nimi: {
    type: String,
    required: true,
  },
  Namn: {
    type: String,
    required: true,
  },
  Name: {
    type: String,
    required: true,
  },
  Osoite: {
    type: String,
    required: true,
  },
  Adress: {
    type: String,
    required: true,
  },
  Kaupunki: {
    type: String,
    required: true,
  },
  Stad: {
    type: String,
    required: true,
  },
  Operaattor: {
    type: String,
    required: true,
  },
  Kapasiteet: {
    type: Number,
    required: true,
  },
  x: {
    type: Number,
    required: true,
  },
  y: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Stations", stationSchema, "Stations");
