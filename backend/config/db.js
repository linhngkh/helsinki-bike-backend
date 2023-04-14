const mongoose = require("mongoose");

const db =
  "mongodb+srv://linhng:linhng123@cluster0.ubkr5bf.mongodb.net/citybikes";

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
