const db = require("../models");
const CommentIdea = db.commentIdea;
const Idea = db.idea;


//New Comment under Idea
exports.create = (req, res) => {
    let New = req.body.newComment;

    const comment = {
        "username": New.username,
        "userId": 0,
        "timestamp": 0,
        "comment": New.comment,
        "upvotes": 0,
        "downvotes": 0
    };


    // Idea.comments.push(comment);
    // Idea.save(function (err) {
    //     if (err) return handleError(err)
    //     console.log('Success!');
    //   });

    

    Idea.findByIdAndUpdate(req.params.ideaId, 
        { $push: {comments: comment}},
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
    
    Idea.findOneAndUpdate(
        {comments: {
            $elemMaatch: {_id: req.param.commId}
        }},
        {upvotes: newupvotes},
        {
            new: true,                       // return updated doc
            runValidators: true              // validate before update
        }
    )
    .then(doc => {
        console.log(doc);
        res.status(200).send(Idea);
    })
    .catch(err => {
        console.error(err);
        res.status(500).send(err);
    });

   
    
};

//Downvote
exports.downvote = (req, res) => {

};

//Delete
exports.delete = (req, res) => {

};
