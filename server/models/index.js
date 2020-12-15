const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;
db.user = require("./user.model");
db.role = require("./role.model");
db.idea = require("./idea.model.js")(mongoose, mongoosePaginate);
db.comment = require("./comment.model.js")(mongoose);

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
