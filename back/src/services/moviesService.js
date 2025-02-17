const axios = require("axios");
const Movie = require("../models/Movie");



// class movieClass{
//     constructor({title, poster, year, director, duration, genre,rate }){
//         if (!title || !poster || !director ) {
//             throw new Error("las propiedades 'title', 'poster' y 'director' son obligatorias");
//         };
//         this.title = title;
//         this.poster = poster;
//         this.year = year;
//         this.director = director;
//         this.duration = duration;
//         this.genre = genre;
//         this.rate = rate;

//     };
// };

const getAllMovies = async () =>{

    try {

        const res = await Movie.find();
        // const res = await axios.get("https://students-api.up.railway.app/movies");

        // // Prueba de validacon
        // const res ={
        //     data:[{"title":"Guardians of the Galaxy Vol. 2",
        //         "year":2017,
        //         // "director":"James Gunn",
        //         "duration":"2h 16min",
        //         "genre":["Action","Adventure","Comedy"],
        //         "rate":7.7,
        //         "poster":"https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg"},]
        // }

        // const movies = res.data.map(movie => new Movies(movie))
        return res;
        
    } catch (error) {
        console.error("Error fetching movies:"+ error.message,);
        throw error;
};
};

const createMovie = async (movieData) => {
    try {
       
        const newMovie = await Movie.create(movieData);
        return newMovie;
    } catch (error) {
        console.error("Error creating movie: " + error.message);
        throw error;
    }
};




module.exports ={ 
    getAllMovies,
    createMovie,
};