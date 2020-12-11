const mongoose = require("mongoose");

const Comment =  mongoose.model(
    "Comment",
    new mongoose.Schema({
        "author": {
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
        "userUpvotes": [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }],
        "userDownvotes": [{
            type: mongoose.Schema.Types.ObjectId,
            ref: "User"
        }],
    })
);

module.exports = Comment;