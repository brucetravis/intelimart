const { MongoClient } = require("mongodb") // Mongo clinet is the object that allows my code to connect, read, write and close connections

// store your url inside a string
const url = "mongodb+srv://BRUCETRAVIS:3SinVrGI6VGqV1Dr@neurora.tlw0aww.mongodb.net/?appName=NEURORA"

// create a new instance of the Mongodb client but now the instance includes your connection string
const client = new MongoClient(url)


async function run () {

    try {
        await client.connect()

        // select a database (It will create a database if it does not exist)
        const database = client.db("Intelimart")
    } finally {}
}

await pauses execution until MongoDB responds

client.connect => opens the connection to my cluster

Until the line above runs successfully, my code above cannot read or write data

// select a database (It will create a database if it does not exist)
const database = client.db("Intelimart")


// read documents (empty at first)
const docs = await collection.find({})

collection.find({}) - queries MongoDB for documents

{} - empty filter -> returns all documents in the collection

.toArray() - convert the result

docs - variable that now holds all documents


// close the connection
await client.close() => closes the connection to MongoDB

- Never leave the connection open or the ap may run out of resources or locks


run().catch(console.dir) - calls the run function

.catch(console.dir) - if any unhandled errors occur inside run(), they are printed neatly. Ensures your app doesn't crash silently


