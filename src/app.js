const connection = require("./db/connection")
const {addMovie, listMovies, updateMovie, deleteMovie, updateManyMovie, deleteMany} = require("./utils")

const command = process.argv[2]

const app = async () =>{
    if(command === "add"){
        const newMovie = {
            title: process.argv[3],
            actor: process.argv[4],
            rating: process.argv[5]
        }
        await connection(addMovie, newMovie)
    }else if (command === "list"){
        await connection(listMovies)
        
    }else if(command === "update"){
        const movieUpdate = {
            //id: process.argv[3],
            title: process.argv[3],
            actor: process.argv[4],
            rating: process.argv[5]
        };
        await connection(updateMovie, movieUpdate)
    }else if(command === "delete"){
        const movieDelete ={
           
            title: process.argv[3],
            
        
        }
        console.log("Movie deleted")
        await connection(deleteMovie, movieDelete)
    }else if(command === "updateMany"){
        const moviesUpdated ={
            //id: process.argv[3],
            title: process.argv[3],
            actor: process.argv[4],
            rating: process.argv[5]
        }
        console.log( "Movies Updated")
        await connection(updateManyMovie, moviesUpdated)

    }else if(command === "deleteMany"){
        const manyDeleted ={
            title: process.argv[3],
            actor: process.argv[4],
            rating: process.argv[5]

        }
        console.log("Movies deleted")
        await connection(deleteMany, manyDeleted)
    }else{
        console.log("Incorrect Command")
    }
       
}



app()