const mongoose = require("mongoose");

const CommentIdea =  mongoose.model(
    "commentIdea",
    new mongoose.Schema({
        "username": String,
        "userId": Number,
        "created": {
            type: Date,
            default: Date.now
        },
        "comment": String,
        "upvotes": Number,
        "downvotes": Number
        })
);

module.exports = CommentIdea;