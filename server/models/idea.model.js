const mongoose = require("mongoose");

const Idea = mongoose.model(
  "Idea",
  new mongoose.Schema({
    "author": {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    "created": {
      type: Date,
      default: Date.now
    },
    "tags": [String],
    "head": String,
    "description": String,

    "userUpvotes": [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }],
    "userDownvotes": [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    }],

    "comments": [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }] 
  })
);

module.exports = Idea;