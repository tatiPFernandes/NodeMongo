//const { Collection } = require("mongodb");

exports.addMovie = async(collection, dataObj) =>{
    try{
        await collection.insertOne(dataObj)
    }catch(error){
        console.log(error)
    }
}

exports.listMovies = async (collection) =>{
    try{
        const listAll =await collection.find().toArray()
        console.log(listAll)
    }catch(error){
        console.log(error)
    }
}