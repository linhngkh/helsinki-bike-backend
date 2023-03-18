const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 8000;
const cors = require("cors");
const colors = require("colors");
const Trips = require("./model/Trips");
const mongoose = require("mongoose");
const connectDB = require("./config/db");

// connect to mongodb
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// fetch all
let db;
app.get("/api/journey", async (req, res) => {
  try {
    const value = await Trips.find({}).skip(50000).limit(300);
    console.log(value);
    res.send(value);
  } catch (error) {
    console.log(error);
  }
});

mongoose.connection.once("open", () => {
  console.log("Connected to mongodb".blue.underline);
  app.listen(PORT, () => {
    console.log(`Server starting on port ${PORT}`.cyan.underline);
  });
});
