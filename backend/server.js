const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 8000;
const cors = require("cors");
const colors = require("colors");
const connectDB = require("./config/db");

const journeyRoute = require("./journeyRoute");

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/journey/:id", journeyRoute);

app.use("/api/journey", journeyRoute);

app.listen(PORT, () => {
  console.log(`Server starting on port ${PORT}`);
});
