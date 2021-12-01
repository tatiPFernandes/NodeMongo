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


exports.updateMovie = async (collection, dataObj)=>{
    try{
        await collection.updateOne(
    {
        id: dataObj.id
    },
    {
        $set: {
            "title": dataObj.title,
            "actor": dataObj.actor,
            "rating": dataObj.rating
        }
     });
    }catch(e){
        console.log(error)
    }
}

exports.deleteMovie = async (collection, dataObj) =>{
    try{
        await collection.deleteOne(dataObj)
    }catch(e){
        console.log(error)
    }
}