// import the product model that we will use to communicate with MongoDB
const Product = require('../models/productModel')
// import the configured cloudinary
const cloudinary = require('../configs/cloudinary')
// import the uuid module so that we can generate an Id for each product
const { v4: uuidv4 } = require('uuid')

// function to add a product to the database
const addProduct = async (req, res) => {
    // get the required data from the request body
    const { category, name, quantity, price, description } = req.body
    const imageFile = req.file // multer stores the file info here
    
    // calculate the total
    const total = Number(price) * Number(quantity)
    // product status
    const status = 'Active'
    
    console.log(req.body)

    //  if any of the data is missing, send a 400 bad request error
    if (!category || !name || !quantity || !price || !description || !imageFile) {
        //  return a 400 Bad request error
        return res.status(400).json({ message: 'All fields are required.' })
    } else if (Number(price) <= 0 || Number(quantity) <= 0) {
        // send a 400 Bad request error
        return res.status(400).json({ message: 'Price and Quantity MUST be greater than 0' })
    } else if (req.file && !req.file.mimetype.startsWith("image/")) {
        return res.status(400).json({ message: "Uploaded file MUST be an image" })
    }
    
    try {
        // upload the image to cloudinary and store it in a folder called products
        const uploadedImage = await cloudinary.uploader.upload(imageFile.path, { folder: 'products' })

        // declare variables storing the unique ID na dthe date
        const sku = uuidv4()

        // save the product to MongoDB
        const product = await Product.create({
            category,
            name,
            sku,
            quantity,
            price,
            total,
            description,
            status,
            image: uploadedImage.secure_url
        })


        //  success response
        res.status(201).json({
            message: "Product added successfully",
            product
        })
    } catch (err) {
        console.error(`Error uploading product: ${err}`)
        res.status(500).json({ message: 'Server Error' })
    }

}

// function to fetch products from the database
const fetchProducts = async (req, res) => {
    try {
        // fetch products from the database Products collection
        const products = await Product.find({})
        

        // send a success message stating that the fetch was successful
        res.status(200).json({ 
            message: 'Products fetched successfully', // message diplaying a successful fetch
            products // the products fetched
        })
        
    } catch (err) {
        // log errors that may arise from fetching products
        console.error("ERROR fetching Products: ", err)
        res.status(500).json({ message: 'Server Error' })
    }
}


// controller function to delete a product according to the id
const deleteProduct = async (req, res) => {
    
    try {
        
        //  get the product id from the request parameter
        const { id } = req.params

        // check if the product that is deleted exists
        const isProduct = await Product.findById(id)

        //  if it does not exist, send a 404 meaning that the product is missing/ has not been found
        if (!isProduct) {
            return res.status(404).json({ message: 'Product Not found.' })
        } else {
            //  if the product exists, delete It
            await Product.findByIdAndDelete(id)
        }

        // send a success message to the front end
        res.status(200).json({ message: 'Product Deleted Successfully.' })

    } catch (err) {
        console.error('Backend: Error deleting Product', err)
        res.status(500).json({ message: 'Server Error.' })
    }
}

// function to update a products details
const updateProduct = async (req, res) => {

    try {
        // extract the id from the request parameter
        const { id } = req.params

        //  extract the product data from the request body
        const { category, name, quantity, price, description } = req.body

        // extract the image from the request file
        const image = req.file

        // Calculate the product total
        const total = Number(price) * Number(quantity)

        // validate and check if all the data has been made available and if not, send a 400 Bad request
        if (!category || !name || !quantity || !price || !description || !total) {
            // send a 400 Bad request error
            return res.status(400).json({ message: 'All fileds required' })
        } else if (Number(price) <= 0 || Number(quantity) <= 0) {
            // send a 400 Bad request error
            return res.status(400).json({ message: 'Price and Quantity MUST be greater than 0' })
        } else if (req.file && !req.file.mimetype.startsWith("image/")) {
            return res.status(400).json({ message: "Uploaded file MUST be an image" })
        }

        // fetch the product to be updated by It's Id
        const product = await Product.findById(id)

        // if the product was not found, return a 404
        if (!product) {
            return res.status(404).json({ message: 'Product does not exists.' })
        }

        // if the product exists, assign the new values
        product.category = category
        product.name = name
        product.quantity = Number(quantity)
        product.price = Number(price)
        product.description = description
        product.total = total

        // only update the image if req.file exists
        if (image) {
            // upload the image to cloud storage
            const uploadedImage = await cloudinary.uploader.upload(image.path, { folder: 'products' })

            // upload the secure url
            product.image = uploadedImage.secure_url
        }

        // save the product info
        await product.save()

        // display a success message
        res.status(200).json({ message: "Product updated successfully." })

    } catch (err) {
        console.error('ERROR Updating Product.', err)
        // show case a server error
        res.status(500).json({ message: 'Server Error.' })
    }
}


//  export the controller
module.exports = { addProduct, fetchProducts, deleteProduct, updateProduct }