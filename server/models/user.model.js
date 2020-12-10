const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    karma: Number,
    "created": {
      type: Date,
      default: Date.now
    },
    roles: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role"
    }],
    ideas: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Idea"
    }],
    comments: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }]
  })
);

module.exports = User;