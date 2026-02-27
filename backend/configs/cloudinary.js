// import the cloudinary modern v2 version
const cloudinary = require('cloudinary').v2

// configure the cloudinary v2 version with the correct configurations in order to connect to your account
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

//  export the configured cloudinary package
module.exports = cloudinary