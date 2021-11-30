const connection = require("./db/connection")
const {addMovie, listMovies} = require("./utils")

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
    
    }else{
        console.log("incorrect input")
    }
}

app()