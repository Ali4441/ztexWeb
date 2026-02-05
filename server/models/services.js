const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    service: {
      type: String,
      required: true,
      trim: true
    },

    description: {
      type: String,
      required: true,
      trim: true
    },

    price: {
      type: String,
      required: true
    },

    provider: {
      type: String,
      required: true,
      trim: true
    },

    image: {
      type: String,
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Service", serviceSchema);
