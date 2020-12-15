
module.exports = (mongoose, mongoosePaginate) => {
  var schema = mongoose.Schema(
    {
      "author": {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
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
    },
    {timestamps: true}
  );

  schema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  schema.plugin(mongoosePaginate);

  const Idea = mongoose.model("idea", schema);
  return Idea;
};


//old model:

//const mongoose = require("mongoose");
// const Idea = mongoose.model(
//   "Idea",
//   new mongoose.Schema(
//     {
//       "author": {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User"
//       },
//       "tags": [String],
//       "head": String,
//       "description": String,
  
//       "userUpvotes": [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User",
//       }],
//       "userDownvotes": [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User",
//       }],
  
//       "comments": [{
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Comment"
//       }] 
//       },
//       {timestamps: true}
//   )
// );

// module.exports = Idea;