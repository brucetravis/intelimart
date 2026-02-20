// import the official mongodb driver for node js. We only extract MongoClient from the library
const { MongoClient } = require("mongodb")

// store your uri inside a string
const uri = process.env.MONGO_URI

// create a new instance of the Mongodb client but now the instance includes your connection string
const client = new MongoClient(uri)

// Array of collections
// const intelimartCollections = [
    
//     { id: 1, collection: "Users" },
//     { id: 2, collection: "Products" },
//     { id: 3, collection: "Sales" },
//     { id: 4, collection: "Orders" }
// ]


async function run() {
    
    try {
        // open a connection to my cluster and wait for a response from MongoDB
        await client.connect()
        // Log a successful connection message (important for debugging)
        console.log('Connected successfully to MongoDB')

        // select a database (It will create a database if it does not exist)
        const database = client.db("Intelimart")

        // select a collection
        const collection = database.collection("Products")

        // read documents (empty at first)
        const docs = await collection.find({}).toArray()
        console.log(docs)

    } finally {
        // close the connection
        await client.close()
    }
}

run().catch(console.dir)

