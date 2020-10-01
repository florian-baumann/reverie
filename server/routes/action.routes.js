const { votes } = require("../middlewares");
const { authJwt } = require("../middlewares");

const controller = require("../controllers/action.controller");


module.exports = function(app) {

    //upvote
    app.post("/posts/upvote/:ideaId",
    [authJwt.verifyToken],
    controller.upvote
    );

    //downvote
    app.post("/posts/downvote/:ideaId",
    [authJwt.verifyToken],
    controller.downvote
    );

    //delete
    app.post("/posts/delete/:ideaId",
    [authJwt.verifyToken],
    controller.delete
    );

    //new
    //app.post("/posts/delete/:ideaId",
    //[authJwt.verifyToken],
    //controller.upvote
    //);
}
