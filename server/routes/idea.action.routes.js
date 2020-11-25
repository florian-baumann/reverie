const { authJwt } = require("../middlewares");

const controller = require("../controllers/idea.action.controller");


module.exports = function(app) {

    //upvote
    app.put("/posts/upvote/:ideaId",
    [authJwt.verifyToken],
    controller.upvote
    );

    //downvote
    app.put("/posts/downvote/:ideaId",
    [authJwt.verifyToken],
    controller.downvote
    );

    //new
    app.post("/posts/new",
    [authJwt.verifyToken],
    controller.create
    );

    //delete
    app.delete("/posts/delete/:ideaId",
    [authJwt.verifyToken],
    controller.delete
    );
}
