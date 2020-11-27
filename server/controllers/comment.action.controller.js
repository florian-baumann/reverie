const db = require("../models");
//const CommentIdea = require("../models/commentIdea.model");
const CommentIdea = db.commentIdea;
const Idea = db.idea;


//New Comment under Idea
exports.create = (req, res) => {
    let New = req.body.newComment;

    const comment = new CommentIdea({
        "username": New.username,
        "userId": 0,
        "timestamp": 0,
        "comment": New.comment,
        "upvotes": 0,
        "downvotes": 0
    });


    // Idea.comments.push(comment);
    // Idea.save(function (err) {
    //     if (err) return handleError(err)
    //     console.log('Success!');
    //   });

    

    Idea.findByIdAndUpdate(req.params.ideaId, 
        { $push: {comments: comment.toObject()}},
        function (err, succ) {
            if (err) {
                return res.status(500).send({ message: err });
            } else {
                console.log(succ);
                return res.status(200).send(succ);
            }  
        }
    )
};














//Upvote
exports.upvote = (req, res) => {
    var newupvotes;
    
    // CommentIdea.findById(
    //     "5fbed0aba1ee0b0c6a1729d6",
    //     {upvotes: 10},
    //     {
    //         new: true,                       // return updated doc
    //         runValidators: true              // validate before update
    //     }
    // )
    // .then(doc => {
    //     console.log(doc);
    //     res.status(200).send(CommentIdea);
    // })
    // .catch(err => {
    //     console.error(err);
    //     res.status(500).send(err);
    // });

    //-----------------

    console.log(req.params.commId);

    // CommentIdea.findById(req.params.ideaId, function (err, docs) { 
    //     if (err){ 
    //         console.log(err); 
    //     } 
    //     else{ 
    //         console.log("Result : ", docs); 
    //     } 
    // }); 

    // Idea.find(
    //     { "comments._id": "5fbc456c50579adb7d663dc2"},
        
    //     (err, docs) => {
    //         if (err){ 
    //             console.log(err); 
    //         } 
    //         else{ 
    //                console.log("Result : ", docs); 
    //         } 
    //     }
    // )

    // CommentIdea.find({"username": "user"}, (err, ideas) => {
    //     if (err) {
    //       return res.status(500).send(err);
    //     } else {
    //       return res.status(200).send(ideas)
    //     }
    //   })


    Idea.updateOne(
        {"_id": req.params.ideaId, "comments._id": req.params.commId},
        {"$set": {"comments.$.upvotes": 69 } },
        function(err, docs) {
            if (err){ 
                console.log(err);
                res.status(500).send(err);
            } 
            else{ 
                    console.log("Result : ", docs); 
                    res.status(200).send(docs)
            } 
        }
    )
    
};

//Downvote
exports.downvote = (req, res) => {

};

//Delete
exports.delete = (req, res) => {

};
