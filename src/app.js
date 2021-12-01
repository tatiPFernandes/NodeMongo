const connection = require("./db/connection")
const {addMovie, listMovies, updateMovie, deleteMovie, filterMovie} = require("./utils")

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
            id: process.argv[3],
            title: process.argv[4],
            actor: process.argv[5],
            rating: process.argv[6]
        };
        await connection(updateMovie, movieUpdate)
    }else if(command === "delete"){
        const movieDelete ={
            title: process.argv[3]
        }
        console.log("Movie deleted")
        await connection(deleteMovie, movieDelete)
    }else{
        console.log("Incorrect command")
    }
}



app()