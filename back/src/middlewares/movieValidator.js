module.exports = (req, res, next)=>{
    const {title, year, director, duration, genre, rate, poster} = req.body;
    if (!title || !year || !director || !duration || !genre === 0 || !rate || !poster ){
        return res.status(400).json({
            message:"Todos los datos de una pelicula son necesarios"
        })
    }

    next();




};