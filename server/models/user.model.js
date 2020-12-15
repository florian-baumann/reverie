const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    username: String,
    password: String,
    email: String,
    karma: Number,
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
  },
  {timestamps: true})
);

module.exports = User;