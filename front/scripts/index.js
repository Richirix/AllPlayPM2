const axios = require("axios");
const rendersCards = require("./rendersCards.js");


const fetchData = async () => {
    try {
        const response = await axios.get("http://localhost:3000/movies");
        const data = response.data;
        rendersCards(data); 
    } catch (err) {
        console.error("Hubo un error al obtener las películas:", err.message);
    }
};


if (window.location.pathname.endsWith("index.html") || window.location.pathname.endsWith("/") ) {
    fetchData();
}


if (window.location.pathname.endsWith("agregarPelicula.html" )) {
    const { handleOnSubmit, handleOnReset } = require("./addMovie");

   
}

