const db = require("../models");
const Idea = db.idea;
const User = db.user;


//Upvote
exports.upvote = (req, res) => {

    console.log(">>idea upvotes");

    Idea.findByIdAndUpdate(
        req.params.ideaId,
        {
            $addToSet: {userUpvotes: req.userId}
        },
        {
            new: true,                       // return updated doc
            runValidators: true              // validate before update
        }
    )
    .then(doc => {
        console.log("   >>upvoted Idea: " + req.params.ideaId);
        res.status(200).send(">>upvoted Idea: " + req.params.ideaId);
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
            $addToSet: {userDownvotes: req.userId}      
        },
        {
            new: true,                       // return updated doc
            runValidators: true              // validate before update
        }
    )
    .then(doc => {
        console.log("   >>downvoted Idea: " + req.params.ideaId);
        res.status(200).send(">>downvoted Idea: " + req.params.ideaId);
    })
    .catch(err => {
        console.error(err);
        res.status(500).send(err);
    });
};




//New
exports.create = (req, res) => {
    let New = req.body.newIdea;

    console.log("User: " + req.userId + "will create: " + New);
   
    const idea = new Idea({
        "author": req.userId,
        "tags": New.tags,
        "head": New.head,
        "description": New.idea,
        "upvotes": 0,
        "downvotes": 0,
        "comments": []
    });

    idea.save(idea)
    .then((data) => {
        console.log("User: " + req.userId + " created an idea");
        res.status(200).send(idea);
    })
    .catch((err) => {
        res.status(500).send(err);
    })
        
        
    //     err => {
    //     if (err) {
    //         return res.status(500).send({ message: err });
    //     } else {
    //         console.log(newIdea);
    //         return res.status(200).send(idea);
    //     }  
    // });
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
//--> old -> new : feedpag!
exports.feed = (req, res) => {
    Idea.find((err, idea) => {
        if (err) {
          return res.status(500).send(err);
        } else {

          return res.status(200).send(idea)
        }
      })
      .populate("author", "username");
};
  

//giving back all ideas of username
// exports.allIdeasbyUsername = (req, res) => {

//     console.log("ideas by username: " + req.params.username);

//     Idea.find(
//         {username: req.param.username}, (err, ideas) => {
//             if (err) {
//                  res.status(500).send(err);
//             } else {
//                  res.status(200).send(ideas)
//             }
//     })
//     .populate("author", "username");
// };

//giving back all ideas of username
exports.allIdeasbyUser = (req, res) => {

    console.log("ideas by username: " + req.params.username);

    Idea.find(
        {author: req.userId}, (err, ideas) => {
            if (err) {
                 res.status(500).send(err);
            } else {
                 res.status(200).send(ideas)
            }
    })
    .populate("author", "username");
};


//sends one idea with comments from mongodb with id
exports.ideaById = (req, res) => {

    console.log(">> idea by id: " + req.params.ideaId);

    Idea.findById(req.params.ideaId, (err, idea) => {
        if(err) {
            return res.status(500).send(err);
        } else {
            //console.log(idea);
            return res.status(200).send(idea);
        }
    })
    .populate("comments") 
    .populate("author", "username")
};

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<


const getPagination = (page, size) => {
    const limit = size ? +size : 3;
    const offset = page ? page * limit : 0;
  
    return { limit, offset };
};
  
// Retrieve all Tutorials from the database.
exports.feedpag = (req, res) => {
    const { page, size } = req.query;
    console.log(req.query)
    const { limit, offset } = getPagination(page, size);
  
    Idea.paginate({}, { offset, limit })            //condition in {] if needed
      .then((data) => {
        res.send({data});
      })
      .catch((err) => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials.",
        });
      });
};
