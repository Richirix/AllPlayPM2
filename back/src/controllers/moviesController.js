const moviesService = require("../services/moviesService");

const getMovies = async (req, res) => {
    try {
        const movies = await moviesService.getAllMovies();
        res.status(200).send(movies);
    } catch (error) {
        res.status(500).send({
            error: "Error interno del servidor: " + error.message,
        });
    }
};

const createMovieController = async (req, res) => {
    try {
        const movieData = req.body;
        console.log("Prueba datos recibidos desde el frontend:", movieData);
        const newMovie = await moviesService.createMovie(movieData);
        res.status(201).json(newMovie);
    } catch (error) {
        res.status(500).json({ message: "Error creating movie", error: error.message });
    }
};

module.exports = {
    getMovies,
    createMovieController,
};
