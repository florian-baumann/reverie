const mongoose = require("mongoose");
const CommentIdea = require("./commentIdea.model"); //Subschema

const Idea = mongoose.model(
  "idea",
  new mongoose.Schema({
    "user": {
        "username": String,
        "id": Number
    },
    //"created_time": Date,
    "tags": [String],
    "link": String,
    "head": String,
    "idea": String,
    "upvotes": Number,
    "downvotes": Number,
    "comments": [CommentIdea]
  })
);

module.exports = Idea;