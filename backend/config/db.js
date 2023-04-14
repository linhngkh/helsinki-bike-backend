const mongoose = require("mongoose");

// MONGO_URI=mongodb+srv://linhng:linhng123@cluster0.ubkr5bf.mongodb.net/citybikes

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
