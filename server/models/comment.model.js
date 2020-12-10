const mongoose = require("mongoose");

const Comment =  mongoose.model(
    "Comment",
    new mongoose.Schema({
        "authorId": {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        },
        "ideaId": {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Idea"
        },
        "created": {
            type: Date,
            default: Date.now
        },
        "comment": String,
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
    })
);

module.exports = Comment;