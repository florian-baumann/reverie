const db = require("../models");
const Idea = db.idea;
const User = db.user;


//Upvote
exports.upvote = (req, res) => {

    console.log(">>idea upvotes");

    Idea.findByIdAndUpdate(
        req.params.ideaId,
        {
            $set: {upvotes: newupvotes},
            $addToSet: {userUpvotes: req.userId}
        },
        {
            new: true,                       // return updated doc
            runValidators: true              // validate before update
        }
    )
    .then(doc => {
        console.log(">>upvoted: " + req.params.ideaId);
        res.status(200).send(">>upvoted: " + req.params.ideaId);
    })
    .catch(err => {
        console.error(err);
        res.status(500).send(err);
    });
};

//Downvote
exports.downvote = (req, res) => {
    console.log(">>idea downvote");

    Idea.findByIdAndUpdate(
        req.params.ideaId,
        {
            $set: {downvotes: newdownvotes},
            $addToSet: {userDownvotes: req.userId}      
        },
        {
            new: true,                       // return updated doc
            runValidators: true              // validate before update
        }
    )
    .then(doc => {
        console.log(">>downvoted: " + req.params.ideaId);
        res.status(200).send(">>downvoted: " + req.params.ideaId);
    })
    .catch(err => {
        console.error(err);
        res.status(500).send(err);
    });
};




//New
exports.create = (req, res) => {
    let New = req.body.newIdea;

    console.log(req.userId);
   
    const newIdea = new Idea({
        "author": req.userId,
        "tags": New.tags,
        "head": New.head,
        "description": New.idea,
        "upvotes": 0,
        "downvotes": 0,
        "comments": []
    });

    newIdea.save(err => {
        if (err) {
            return res.status(500).send({ message: err });
        } else {
            console.log(newIdea);
            return res.status(200).send(newIdea);
        }  
    });
}

//Delete
exports.delete = (req, res) => {

    Idea.findByIdAndDelete(req.params.ideaId)
        .then(response => {
            console.log(response);
            res.status(200).send("Successfully Deleted: " + req.params.ideaId);
        })
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        })
}

//giving back feed (all existing Ideas)
exports.feed = (req, res) => {
    Idea.find((err, idea) => {
        if (err) {
          return res.status(500).send(err);
        } else {

          return res.status(200).send(idea)
        }
      })
      .populate("author");
};
  

 //giving back all ideas of username
exports.allIdeasbyUsername = (req, res) => {

    console.log("ideas by username: " + req.params.username);

    Idea.find(
        {username: req.param.username}, (err, ideas) => {
            if (err) {
                 res.status(500).send(err);
            } else {
                 res.status(200).send(ideas)
            }
    })
    .populate("author");
    
};


//sends one idea with comments from mongodb with id
exports.ideaById = (req, res) => {
        // Idea
        //     .findById(req.params.ideaId)
        //     .populate("comments")
        //     .then (temp => {
        //         res.json(temp);
        //     })

        Idea.findById(req.params.ideaId, (err, curr) => {
            if(err) {
              return res.status(500).send(err);
            } else {
              //console.log(curr);
              return res.status(200).send(curr);
            }
        })
        .populate("comments")
        .populate("author");
        
};