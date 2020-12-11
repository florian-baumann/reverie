# reverie

## Introduction

Github + Instagram + Twitter for Ideas


## Technologies

JavaScript: 
VueJs: 2.6

VueX: 3.4

ExpressJs: 4.17

MongoDB: 

## Launch

start client: "npm run serve"

start server with nodemon: "nodemon server.js"

start mongoDB: "sudo service mongodb start"

status mongoDB: "service mongodb status"


## Api



Authentication:
    POST /auth/signup
        //SingnUp new User. Roles: user, moderator, admin
        ->req:
            {
                "username": String,
                "email": String,
                "password": String,
                "roles": []
            }
        <-res:


    POST /auth/signin
        //SignIn existing User
        ->req:
            {
                "username": String,
                "password": String
            }
        <-res: (wrong password)):
            {
                "accessToken": null,
                "message": String
            }
        <-res: (legal account):
            {
                "id": String,
                "uername": String,
                "email": String,
                "roles": [String],
                "accessToken": String
            }

    POST /auth/logut                ? ? ? ?
        //Log user out, delete accessToken
        ->req:
            {
                "username": String
            }
        return:
            {
                "message": String
            }

Authorization:

    GET /test/all
        //returns Public Content
        
    GET /test/user 
        //for loggedin users (user/moderator/admin)

    GET /test/mod 
        //for moderator

    GET /test/admin 
        //for admin


Ideas:

    POST: /idea/new 
        //creating new idea
        ->req:
            {
                "newIdea": {
                    "tags": [String],
                    "head": String,
                    "idea": String
                }
            }

        res:
            xxx

    DELETE: /idea/:ideaId/delete
    //delete of Idea with ideaId

    PUT: /idea/:ideaId/upvote
    //one downvote of Idea with ideaId
    
    PUT: /idea/:ideaId/downvote
        //one downvote of Idea with ideaId

    GET: /idea/feed
        //all existing Ideas 
        <-res: 
            [{
                "_id": String,
                "author": String,
                "created": {Date,
                "tags": [String],
                "head": String,
                "description": String,
                "upvotes": Number,
                "userUpvotes": [String],
                "downvotes": Number,
                "userDownvotes": [String],
                "comments": [String] 
            }]

    GET: /idea/user/:username
        //ideas of User with username
        <-res: 
            [{
                "_id": String,
                "author": String,
                "created": {Date,
                "tags": [String],
                "head": String,
                "description": String,
                "upvotes": Number,
                "userUpvotes": [String],
                "downvotes": Number,
                "userDownvotes": [String],
                "comments": [String] 
            }]

    GET: /idea/:ideaId
        //idea  with comments from IdeaId
        <-res: 
            [{
                "_id": String,
                "author": String,
                "created": {Date,
                "tags": [String],
                "head": String,
                "description": String,
                "upvotes": Number,
                "userUpvotes": [String],
                "downvotes": Number,
                "userDownvotes": [String],
                "comments": [{
                    "_id": String,
                    "author": String,
                    "ideaId": String,
                    "created": Date,
                    "comment": String,
                    "upvotes": Number,
                    "userUpvotes": [String],
                    "downvotes": Number,
                    "userDownvotes": [String]
                }] 
            }]


Comment:

    POST: /comment/:ideaId/new
        //new Comment on Idea with iderId
        ->req: 
            {
                "newComment": String
            }

    DELETE: /comment/:commentId/delete
        //delete Comment with commentId

    PUT: /comment/:commentId/upvote
        //one upvote of Comment with commentId

    PUT: /comment/:commentId/downvote
        //one downvote of Comment with commentId

    GET: /comment/user/:userId
        //all comments of of user with UserId
        <-res:
            {
                "_id": String,
                "author": String,
                "ideaId": String,
                "created": Date,
                "comment": String,
                "upvotes": Number,
                "userUpvotes": [String],
                "downvotes": Number,
                "userDownvotes": [String]
            }

    GET: /comment/user
        //all Comments of Requester with req.userId
        <-res:
            {
                "_id": String,
                "author": String,
                "ideaId": String,
                "created": Date,
                "comment": String,
                "upvotes": Number,
                "userUpvotes": [String],
                "downvotes": Number,
                "userDownvotes": [String]
            }



