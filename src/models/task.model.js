const mongoose = require("mongoose");

const scheme = new mongoose.Schema({
  id: String,
  description: String,
  completed: Boolean
});

module.exports = mongoose.model("Task", scheme);
