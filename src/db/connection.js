const {MongoClient} = require("mongodb")

require("dotenv").config()

const client = new MongoClient(process.env.MONGO_URI)
console.log(client)

const connection = async(crudFunc, dataObj) =>{
    try{
        await client.connect()
        console.log("connection")
        const db = client.db("testDb")
        const collection = db.collection("movies")
        await crudFunc(collection, dataObj)
        client.close()

    }catch(error){
        console.log(error)
    }
}


module.exports = connection;