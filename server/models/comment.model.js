
module.exports = mongoose => {
    var schema = mongoose.Schema(
        {
            "author": {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User"
            },
            "ideaId": {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Idea"
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
        },
        {timestamps: true}
    );
  
    schema.method("toJSON", function() {
      const { __v, _id, ...object } = this.toObject();
      object.id = _id;
      return object;
    });
  
    const Comment = mongoose.model("Comment", schema);
    return Comment;
};



//old model:

// const mongoose = require("mongoose");
// const Comment =  mongoose.model(
//     "Comment",
//     new mongoose.Schema({
//         "author": {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "User"
//         },
//         "ideaId": {
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "Idea"
//         },
//         "comment": String,
//         "userUpvotes": [{
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "User"
//         }],
//         "userDownvotes": [{
//             type: mongoose.Schema.Types.ObjectId,
//             ref: "User"
//         }],
//     },
//     {timestamps: true})
// );

// module.exports = Comment;


