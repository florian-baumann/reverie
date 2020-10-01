# donno

start server with nodemon: "nodemon server.js"

start client: "npm run serve"

start mongoDB: "sudo service mongodb start"
status mongoDB: "service mongodb status"

API:

    Authentication:
        POST /auth/signup
        SingnUp new User. Roles: user, moderator, admin
            param:
                {
                    "username": String,
                    "email": String,
                    "password": String,
                    "roles": []
                }
            return:
                {
                    "message": String
                }

        POST /auth/signin
        SignIn existing User
            param:
                {
                    "username": String,
                    "password": String
                }
            return (wrong password)):
                {
                    "accessToken": null,
                    "message": String
                }
            return (legal account):
                {
                    "id": String,
                    "uername": String,
                    "email": String,
                    "roles": [String],
                    "accessToken": String
                }

        POST /auth/logut        ! ! ! MISSING ! ! !
        Log user out, delete accessToken
            param:
                {
                    "username": String
                }
            return:
                {
                    "message": String
                }

    Authorization:

        GET /test/all
        returns Public Content
            param:
                {

                }
            return:
                {

                }
        GET /test/user for loggedin users (user/moderator/admin)
            param:
                Head:
                    x-access-token: Sting
                
            returns 
                {

                }

        GET /test/mod for moderator
            param:
                Head:
                    x-access-token: Sting
                
            returns 
                {
                    
                }

        GET /test/admin for admin
            param:
                Head:
                    x-access-token: Sting
                
            returns 
                {
                    
                }



