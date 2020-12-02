const db = require("../models");
const Idea = db.idea;
const User = db.user;


//Upvote
exports.upvote = (req, res) => {

    var newupvotes;
    
    Idea.findById(req.params.ideaId, function(err, docs) {
        if(err) {
            console.log(err);
        } else {
            newupvotes = docs.upvotes + 1;

            Idea.findByIdAndUpdate(
                req.params.ideaId,
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
        }
    })
};

//Downvote
exports.downvote = (req, res) => {

    var newdownvotes;
    
    Idea.findById(req.params.ideaId, function(err, docs) {
        if(err) {
            console.log(err);
        } else {
            newdownvotes = docs.downvotes - 1;

            Idea.findByIdAndUpdate(
                req.params.ideaId,
                {
                    downvotes: newdownvotes
                },
                {
                    new: true,                       // return updated doc
                    runValidators: true              // validate before update
            })
            .then(doc => {
                console.log(doc);
                res.status(200).send(Idea);
            })
            .catch(err => {
                console.error(err);
                res.status(500).send(err);
            });
        }
    })
};

//New
exports.create = (req, res) => {
    let New = req.body.newIdea;
   
    const newIdea = new Idea({
        "AuthorId": req.userId,
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

exports.feed = (req, res) => {
    Idea.find((err, idea) => {
        if (err) {
          return res.status(500).send(err);
        } else {
          return res.status(200).send(idea)
        }
      })
};
  
  //sends one idea from mongodb with id
  exports.oneIdea = (req, res) => {
    Idea.findById(req.params.id, (err, curr) => {
      if(err) {
        return res.status(500).send(err);
      } else {
        //console.log(curr);
        return res.status(200).send(curr);
      }
    })
  };
  
  exports.allUserIdeas = (req, res) => {
    Idea.find({"user.username": req.params.username}, (err, ideas) => {
      if (err) {
        return res.status(500).send(err);
      } else {
        return res.status(200).send(ideas)
      }
    })
  };
