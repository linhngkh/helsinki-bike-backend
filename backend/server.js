const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 8000;
const cors = require("cors");
const colors = require("colors");

const mongoose = require("mongoose");
const connectDB = require("./config/db");
const tripsRoutes = require("./routes/trips");

// connect to mongodb
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// fetch all

app.use("/api/journeys", tripsRoutes);

mongoose.connection.once("open", () => {
  console.log("Connected to mongodb".blue.underline);
  app.listen(PORT, () => {
    console.log(`Server starting on port ${PORT}`.cyan.underline);
  });
});
