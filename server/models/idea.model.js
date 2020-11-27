const mongoose = require("mongoose");
const CommentIdea = require("./commentIdea.model"); //Subschema

// const Comment = new mongoose.Schema({
//   "username": String,
//   "userId": Number,
//   "created": {
//       type: Date,
//       default: Date.now
//   },
//   "comment": String,
//   "upvotes": Number,
//   "downvotes": Number
// })

const Idea = mongoose.model(
  "idea",
  new mongoose.Schema({
    "user": {
        "username": String,
        "id": Number
    },
    "created": {
      type: Date,
      default: Date.now
    },
    "tags": [String],
    "link": String,
    "head": String,
    "idea": String,
    "upvotes": Number,
    "downvotes": Number,
    "comments": [CommentIdea.schema]      //[comment]
  })
);

module.exports = Idea;