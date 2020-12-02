const mongoose = require("mongoose");



const Idea = mongoose.model(
  "idea",
  new mongoose.Schema({
    "AuthorId": {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    "created": {
      type: Date,
      default: Date.now
    },
    "tags": [String],
    "link": String,
    "head": String,
    "description": String,

    "upvotes": Number,
    "userUpvotes": [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }],
    "downvotes": Number,
    "userDownvotes": [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }],

    "comments": [{
      type: mongoose.Schema.Types.ObjectId,
      ref: "Comment"
    }] 
  })
);

module.exports = Idea;