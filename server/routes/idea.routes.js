const { authJwt } = require("../middlewares");

const controller = require("../controllers/idea.controller");


module.exports = function(app) {

    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    //upvote
    app.put("/idea/:ideaId/upvote",
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




    //giving back all ideas of username
    // app.get("/idea/user/:username",
    // [authJwt.verifyToken],
    // controller.allIdeasbyUsername
    // );

    //giving back all ideas of username
    app.get("/idea/user/me/",
    [authJwt.verifyToken],
    controller.allIdeasbyUser
    );

    //giving back one specific idea from id
    app.get("/idea/id/:ideaId/",
    [authJwt.verifyToken],
    controller.ideaById
    );



}
