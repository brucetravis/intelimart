// Function to generate a secret key

// import the crypto module
const crypto = require('crypto')

// generate the secret key
const secretKey = crypto.randomBytes(64).toString('hex')

// log the secret key
console.log(secretKey)