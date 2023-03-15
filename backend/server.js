const express = require("express");
const dotenv = require("dotenv").config();
const PORT = process.env.PORT || 8000;
const cors = require("cors");

const app = express();
app.use(cors());

app.get("/api/journey", (req, res) => {
  res.json({ message: "get journey" });
});

app.listen(PORT, () => {
  console.log(`Server starting on port ${PORT}`);
});
