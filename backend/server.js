const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 8080;
const cors = require("cors");
const colors = require("colors");
const ExpressError = require("./utils/ExpressError");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const tripsRoutes = require("./routes/journeys");
const stationsRoutes = require("./routes/stations");
// connect to mongodb
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// fetch all journeys
app.use("/api/journeys", tripsRoutes);

// fetch all stations
app.use("/api/stations", stationsRoutes);

app.use((err, req, res, next) => {
  const { statusCode = 500, message = "Something went wrong...!" } = err;
  res.status(statusCode).render(message);
});

mongoose.connection.once("open", () => {
  console.log("Connected to mongodb".blue.underline);
  app.listen(PORT, () => {
    console.log(`Server starting on port ${PORT}`.cyan.underline);
  });
});
