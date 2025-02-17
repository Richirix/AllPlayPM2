const { Router } = require("express");
const moviesController = require("../controllers/moviesController");
const movieRouter = Router();
const movieValidate = require("../middlewares/movieValidator");

movieRouter.get("/movies", moviesController.getMovies);


movieRouter.post("/movies", movieValidate,moviesController.createMovieController);

module.exports = movieRouter;
