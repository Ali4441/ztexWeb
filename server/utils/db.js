const mongoose = require('mongoose');

module.exports = async () => {
  try {
    // const url = process.env.MONGO_URI || "mongodb://localhost:27017/ztexweb";
    const url = "mongodb+srv://codewithali001_db_user:T2Ii7idfveGPnbaz@cluster1.lvymipp.mongodb.net/ztexweb?retryWrites=true&w=majority";
    console.log("Connecting to MongoDB at:", url); // <-- for verification
    await mongoose.connect(url);




    console.log("Database connected successfully");

  } catch (error) {
    console.error("DB connection error:", error);
    process.exit(1);
  }
};
