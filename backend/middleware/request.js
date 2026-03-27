// Middleware to check if each request has a the JWT tokena dn the token is valid


// import the jwt module
const jwt = require('jsonwebtoken')

const requestMiddleware = (req, res, next) => {
    // get the authorization header from the frontend request
    const authorizationHeader = req.header.authorization

    // if the authorization header is not there (meaning there is no token)
    if (!authorizationHeader) {
        return res.status(400).json({ message: "No token provided" })
    }

    // if the header exists

    // extract the token
    const token = authorizationHeader.split(" ")[1] // get the token which is at index 1

    // verify if the token is valid, has not been tampered with
    const decode = jwt.verify(token, process.env.JWT_SECRET) // you use our secret key to check if our token is valid

    // attach the decoded token to the user info
    req.user = decode

    // go to the next middleware
    next()
}