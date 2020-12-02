const mongoose = require("mongoose");

const Comment =  mongoose.model(
    "comment",
    new mongoose.Schema({
        "author": String,
        "userId": {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
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