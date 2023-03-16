const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connecting = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(
      `MONGODB CONNECTED : ${connecting.connection.host}`.cyan.underline
    );
  } catch (error) {
    console.log(`Error: ${error.message}`.red);
    process.exit(1);
  }
};
module.exports = connectDB;
