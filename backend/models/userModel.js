const mongoose = require("mongoose");

const authSchema = mongoose.Schema(
  {
    userName: {
      type: String,
    },
    email: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User",authSchema);

module.exports = User