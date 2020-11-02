const fs = require('fs');
const db = require("../models");
const Idea = db.idea;
//const ideas = require("./_db0/ideas.json")

function jsonReader(filePath, cb) {
    fs.readFile(filePath, (err, fileData) => {
        if (err) {
            return cb && cb(err)
        }
        try {
            const object = JSON.parse(fileData)
            return cb && cb(null, object)
        } catch(err) {
            return cb && cb(err)
        }
    })
}

//Upvote
exports.upvote = (req, res) => {
        
    //Read File und pack sie in ideas objekt 
    jsonReader('./_db0/ideas.json', (err, ideas) => {
        if (err) {
            console.log('Error reading file:',err)
            return
    }
    
    //Upvote
    for(var i = 0; i < ideas.length; i++) {
        //check transmitteded Params
        if( ideas[i].id == req.params.ideaId){
            ideas[i].upvotes++;
            res.status(200).send("Sucessfully Upvoted Idea: " + req.params.ideaId + " to " + ideas[i].upvotes);

        }
    }

    //Write back (Format with Strg+k+f)
    fs.writeFile('./_db0/ideas.json', JSON.stringify(ideas), (err) => {
            if (err) console.log('Error writing file:', err)
        })
    })
};

//Downvote
exports.downvote = (req, res) => {

    //Read File und pack sie in ideas objekt 
    jsonReader('./_db0/ideas.json', (err, ideas) => {
        if (err) {
            console.log('Error reading file:',err)
            return
        }
    
        //Upvote
        for(var i = 0; i < ideas.length; i++) {
            //check transmitteded Params
            if( ideas[i].id == req.params.ideaId){
                ideas[i].downvotes++;
                res.status(200).send("Sucessfully Upvoted Idea: " + req.params.ideaId + " to " + ideas[i].upvotes);

            }
    }

    //Write back (Format with Strg+k+f)
    fs.writeFile('./_db0/ideas.json', JSON.stringify(ideas), (err) => {
            if (err) console.log('Error writing file:', err)
        })
    })

};

//New
exports.create = (req, res) => {
    let New = req.body.newIdea;

    const idea = new Idea({
        "user": {
            "username": New.user.username,
            "id": New.user.id,
            "full_name": New.user.full_name
        },
        "created_time": Date,
        "tags": New.tags,
        //"link": String,
        "head": New.head,
        "idea": New.idea,
        "upvotes": 0,
        "downvotes": 0,
        "comments": []

    })

    idea.save(err => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        } 

        res.status(200).send({ message: "New Idea saved successfully!" });
    });

    // //Read File und put in ideas obj
    // jsonReader('./_db0/ideas.json', (err, ideas) => {
    //     if (err) {
    //         console.log('Error reading file:'+ err)
    //         return
    //     }

    //     //new Ideas Object
    //     ideas.push(req.body.newIdea);
    //     res.status(200).send("Successfully added new Idea to database: " + req.body)

    //     //save file
    //     fs.writeFile('./_db0/ideas.json', JSON.stringify(ideas), (err) => {
    //         if (err) console.log('Error writing file:', err)
    //     })
    // })
};

//Delete
// exports.delete = (req, res) => {

// };

