const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 8000;
const cors = require("cors");
const colors = require("colors");
const { connectToDb, getDb } = require("./config/db");
const journeyRoute = require("./tripsRoute");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/journey/:id", journeyRoute);

app.use("/api/journey", journeyRoute);


// db connect

let db 


connectToDb((err) => {
  if (!err) {
    app.listen(PORT, () => {
      console.log(`Server starting on port ${PORT}`);
    });
    db = getDb()
  }
});
