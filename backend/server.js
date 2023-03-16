const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 8000;
const cors = require("cors");
const colors = require("colors");
const connectDB = require("./config/db");

connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/journey", require("./journeyRoute"));

app.listen(PORT, () => {
  console.log(`Server starting on port ${PORT}`);
});
