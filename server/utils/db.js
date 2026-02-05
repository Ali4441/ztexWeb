const mongoose = require('mongoose');

module.exports = async () => {
  try {
    const url = 'mongodb://localhost:27017/pastes'
    await mongoose.connect(url);
    console.log("connection is succesful to DataBase");

  } catch (error) {
    console.error(error);
    process.exit(0);
  }
};