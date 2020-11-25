const { authJwt } = require("../middlewares");

const controller = require("../controllers/comment.action.controller");


module.exports = function(app) {

    //new Comment
    app.post("/comment/:ideaId/new",
    [authJwt.verifyToken],
    controller.create
    );

    //upvote
    app.put("/comment/upvote/:ideaId/:commId",
    [authJwt.verifyToken],
    controller.upvote
    );

    //downvote
    app.put("/posts/downvote/:ideaId/:comId",
    [authJwt.verifyToken],
    controller.downvote
    );

    //delete
    app.delete("/posts/delete/:ideaId/:comId",
    [authJwt.verifyToken],
    controller.delete
    );
}