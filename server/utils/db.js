const mongoose = require('mongoose');

module.exports = async () => {
  try {
    const url = process.env.MONGO_URI || "mongodb://localhost:27017/pastes";

    await mongoose.connect(url);

    console.log("Database connected successfully");

  } catch (error) {
    console.error("DB connection error:", error);
    process.exit(1);
  }
};
