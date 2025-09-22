const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      dbName: "MERNAuthentication",
    });
    console.log("database connected");
  } catch (error) {
    console.error("error connecting db", error);
    throw error;
  }
};

module.exports = connectDB;
