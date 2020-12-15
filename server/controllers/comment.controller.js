const db = require("../models");
//const CommentIdea = require("../models/commentIdea.model");
const Comment = db.comment;
const Idea = db.idea;


//New Comment under Idea
exports.createComment = async (req, res) => {

    console.log("newComment")

    let New = req.body.newComment;

    const newComment = new Comment({
        "author": req.userId,
        "ideaId": req.params.ideaId,
        "comment": New.comment,
        "upvotes": 0,
        "downvotes": 0
    });

  
    newComment.save(function(err, docComment) {       //create() includes save()
        //console.log("\n>> Created Comment:\n", docComment);
        if(err) {
            res.status(500).send(err);
        } else {
            Idea.findByIdAndUpdate(
                req.params.ideaId,
                { 
                    $push: { comments: docComment._id } 
                },
                {
                    new: true, useFindAndModify: false
                }
            )
            .then(doc => {
                //console.log(doc);
                res.status(200).send(docComment);
            })
            .catch(err => {
                console.error(err);
                res.status(500).send(err);
            });
        }  
    })
};


//Upvote
exports.upvote = (req, res) => {
    console.log(">>comment upvote");

    Comment.findByIdAndUpdate(
        req.params.commentId,
        {
            $addToSet: {userUpvotes: req.userId}
        },
        {
            new: true,                       // return updated doc
            runValidators: true              // validate before update
        }
    )
    .then(doc => {
        console.log("   >>upvoted Comment: " + req.params.commentId);
        res.status(200).send(">>upvoted Comment: " + req.params.commentId);
    })
    .catch(err => {
        console.error(err);
        res.status(500).send(err);
    }); 
};


//Downvote
exports.downvote = (req, res) => {
    console.log(">>comment downvote");

    Comment.findByIdAndUpdate(
        req.params.commentId,
        {
            $addToSet: {userDownvotes: req.userId}
        },
        {
            new: true,                       // return updated doc
            runValidators: true              // validate before update
        }
    )
    .then(doc => {
        console.log("   >>downvoted Comment: " + req.params.commentId);
        res.status(200).send(">>downvoted Comment: " + req.params.commentId);
    })
    .catch(err => {
        console.error(err);
        res.status(500).send(err);
    });
};


//Delete
exports.delete = (req, res) => {
    console.log("comment delete");

    Comment.findByIdAndDelete(req.params.commentId, function(err, docs) {
        if (err){ 
            console.log(err) 
        } else { 
            Idea.findByIdAndUpdate(
                docs.ideaId,
                { $pull: {comments: docs._id}},
                {useFindAndModify: false},
                function(err) {
                    if (err) {
                        res.status(500).send(err);
                        console.log(err);
                    } else {
                        res.status(200).send("deleted from comments and idea.comments[]")
                    }
                        
                }
            ) 
        } 
    }) 
};
 

//giving back all comments of username
exports.allCommentsbyUser = (req, res) => {
    console.log("comment by user");

    Comment.find(
        {author: req.params.userId},
        function (err, docs) {
            if (err){ 
                console.log(err); 
                res.status(500).send(err);
            } else { 
                console.log(docs); 
                res.status(200).send(docs);
            } 
        }
    )
    .populate("author");
};


//giving back all Comments of requester
exports.allCommentsbyRequester = (req, res) => {
    console.log("comment by Requester");

    Comment.find(
        {author: req.userId},
        function (err, docs) {
            if (err){ 
                console.log(err); 
                res.status(500).send(err);
            } else { 
                console.log(docs); 
                res.status(200).send(docs);
            } 
        }
    )
    .populate("author");
};

