const fs = require('fs')
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

};

//Delete
exports.delete = (req, res) => {

};

//New
//exports.upvote = (req, res) => {
//};

