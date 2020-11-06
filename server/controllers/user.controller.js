//for testing authorisations
//There are 4 functions:
//– /api/test/all for public access
//– /api/test/user for loggedin users (any role)
//– /api/test/mod for moderator users
//– /api/test/admin for admin users

const db = require("../models");
const Idea = db.idea;


exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};

exports.userDashboard = (req, res) => {
  res.status(200).send("user Dashboard");
};

//just sends all ideas from mongo db
exports.userAllideas = (req, res) => {
  Idea.find((err, idea) => {
    if (err) {
      return res.status(500).send(err);
    } else {
      return res.status(200).send(idea)
    }
  })
};

//sends one idea from mongodb
exports.oneIdea = (req, res) => {
  Idea.findById(req.params.id, (err, curr) => {
    if(err) {
      return res.status(500).send(err);
    } else {
      console.log(curr);
      return res.status(200).send(curr);
    }
  })
};
