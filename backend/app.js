const express = require("express");
const app = express();
const cors = require("cors");
const colors = require("colors");
const mongoose = require("mongoose");
const config = require("./utils/config");
const journeyRoute = require("./controllers/journeys");
const stationsRoute = require("./controllers/stations");
const bodyParser = require("body-parser");
const logger = require("./utils/logger");
const middleware = require("./utils/middleware");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
// connect to mongodb
logger.info("Connecting to ", config.MONGODB_URI);

mongoose
  .connect(config.MONGODB_URI, { useNewUrlParser: "true" })
  .then(() => {
    logger.info(`Connected to MONGODB`.bgMagenta);
  })
  .catch((error) => logger.error("Error connecting to mongodb", error.message));

// middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(middleware.requestLogger);

// fetch all journeys
app.use("/api/journeys", journeyRoute);

// fetch all stations
app.use("/api/stations", stationsRoute);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
