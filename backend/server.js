const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 8000;
const cors = require("cors");
const colors = require("colors");
const ExpressError = require("./utils/ExpressError");
const mongoose = require("mongoose");
const connectDB = require("./config/db");
const tripsRoutes = require("./routes/journeys");

// connect to mongodb
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

// find by id of the trip
app.use("/api/journeys/:id", tripsRoutes);

// fetch all
app.use("/api/journeys", tripsRoutes);

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
