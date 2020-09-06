const mongoose = require("mongoose");

const GameSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  author: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  rating: {
    type: String,
    default: "5",
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  platform: {
    type: String,
    default: "Unassigned",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("game", GameSchema);
