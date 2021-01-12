const db = require("../models");
const Idea = db.idea;


exports.adminBoard = (req, res) => {
    res.status(200).send("Admin Content.");
};