const mongoose = require("mongoose");

const CommentIdea =  new mongoose.Schema({
    "username": String,
    "userId": Number,
    "timestamp": Date,
    "comment": String,
    "upvotes": Number,
    "downvotes": Number
    })

module.exports = CommentIdea;