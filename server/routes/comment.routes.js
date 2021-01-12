const { authJwt } = require("../middlewares");

const controller = require("../controllers/comment.controller");


module.exports = function(app) {

    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    //new Comment
    app.post("/comment/:ideaId/new",
    [authJwt.verifyToken],
    controller.createComment
    );

    //upvote
    app.put("/comment/:commentId/upvote",
    [authJwt.verifyToken],
    controller.upvote
    );

    //downvote
    app.put("/comment/:commentId/downvote",
    [authJwt.verifyToken],
    controller.downvote
    );

    //delete
    app.delete("/comment/:commentId/delete",
    [authJwt.verifyToken],
    controller.delete
    );

    //All comments of one user
    app.get("/comment/user/:userId",
    [authJwt.verifyToken],
    controller.allCommentsbyUser
    );


    //giving back all Comments of requester
    app.get("/comment/user/",
    [authJwt.verifyToken],
    controller.allCommentsbyRequester
    );


}