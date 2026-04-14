// Middleware to check if each request has a the JWT token and the token is valid
// This means that the user is logged in

// import the jwt module
const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
    // get the authorization header from the frontend request
    const authorizationHeader = req.headers.authorization

    // if the authorization header is not there (meaning there is no token)
    if (!authorizationHeader) {
        return res.status(400).json({ message: "No token provided" })
    }

    // console.log("Authorization header received: ", authorizationHeader)

    // if the header exists

    // extract the token
    const token = authorizationHeader.split(" ")[1]?.trim() // get the token which is at index 1

    //  if the token does not exist, deny the user entry
    if (!token) {
        return res.status(401).json({ message: "No token provided." })
    }

    try {
        // verify if the token is valid, has not been tampered with
        const decoded = jwt.verify(token, process.env.JWT_SECRET) // you use our secret key to check if our token is valid

        // console.log("Auth Middleware decoded user: ", decoded)

        // attach the decoded token to the user info
        req.user = decoded

        // go to the next middleware
        next()
    
    } catch(err) {
        return res.status(401).json({ message: "Invalid token" })
    }
}

module.exports = authMiddleware