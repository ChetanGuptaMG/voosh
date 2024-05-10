const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  googleId: String,
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
  },
  profilePic: {
    type: String,
  },
  bio: {
    type: String,
  },
  phone: {
    type: String,
  },
  visablity: {
    type: String,
    enum: ["public", "private"],
    default: "public",
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

module.exports = mongoose.model("User", userSchema);
