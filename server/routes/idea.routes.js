const { authJwt } = require("../middlewares");

const controller = require("../controllers/idea.controller");


module.exports = function(app) {

    //upvote
    app.put("idea/:ideaId/upvote",
    [authJwt.verifyToken],
    controller.upvote
    );

    //downvote
    app.put("/idea/:ideaId/downvote",
    [authJwt.verifyToken],
    controller.downvote
    );

    //new
    app.post("/idea/new",
    [authJwt.verifyToken],
    controller.create
    );

    //delete
    app.delete("/idea/:ideaId/delete",
    [authJwt.verifyToken],
    controller.delete
    );


    //giving back feed (all existing Ideas)
    app.get("/idea/feed",
    [authJwt.verifyToken],
    controller.feed
    );

    //giving back all ideas of username
    app.get("/idea/user/:username",
    [authJwt.verifyToken],
    controller.allIdeasbyUser
    );

    //giving back one specific idea from id
    app.get("/idea/:ideaId",
    [authJwt.verifyToken],
    controller.ideaById
    );

}
