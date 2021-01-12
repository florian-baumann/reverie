const { authJwt } = require("../middlewares");

const controller = require("../controllers/feed.controller");


module.exports = function(app) {

    app.use(function(req, res, next) {
        res.header(
          "Access-Control-Allow-Headers",
          "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    });

    //giving back feed (all existing Ideas)
    app.get("/idea/feed",
    [authJwt.verifyToken],
    controller.feed
    );

    //giving back feed with pagnation (all existing Ideas)
    app.get("/idea/feedpag",
    [authJwt.verifyToken],
    controller.feedpag_new
    );










}