const axios = require("axios")
const handleOnSubmit = async (e) => {
    e.preventDefault();

    const confirmation = await Swal.fire({
        title: "¿Estás seguro de que quieres agregar esta película?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, agregar",
        cancelButtonText: "Cancelar"
    });
    if (!confirmation.isConfirmed) return;
    const form = document.getElementById("form_movies");
    const title = form.querySelector('input[name="title"]').value;
    const year = form.querySelector('input[name="year"]').value;
    const director = form.querySelector('input[name="director"]').value;
    const h = form.querySelector('input[name="h"]').value || 0; 
    const min = form.querySelector('input[name="min"]').value || 0; 
    const rate = form.querySelector('input[name="rate"]').value;
    const poster = form.querySelector('input[name="poster"]').value;

   
    const genre = Array.from(
        form.querySelectorAll('input[name="opciones"]:checked')
    ).map((checkbox) => checkbox.value);

    const duration = `${h}h ${min}min`;

      
    if (!title || !year || !director || genre.length === 0 || !rate || !poster) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Todos los campos son obligatorios",
          });
        return;
    }
  
    const valores = {
        title,
        year,
        director,
        duration,
        genre, 
        rate,
        poster
    };

    console.log("Prueba Datos enviados al backend:", valores);

    try {
        const response = await axios.post("http://localhost:3000/movies", valores);
        
        swal.fire({
            title: "Película añadida exitosamente",
            icon: "success",
          });
        
        form.reset();
    } catch (error) {
        console.error("Error al añadir la película:", error);
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Hubo un problema al añadir la película. Inténtalo de nuevo",
          });
       
    }
};

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form_movies");
    if (form) {
        form.addEventListener("submit", handleOnSubmit);
    }

    const resetButton = document.getElementById("reset_button");
    if (resetButton) {
        resetButton.addEventListener("click", handleOnReset);
    }
});

const handleOnReset = async () => {

    const confirmation = await Swal.fire({
        title: "¿Estás seguro de que quieres reiniciar el formulario?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Sí, reiniciar",
        cancelButtonText: "Cancelar"
    });

    if (!confirmation.isConfirmed) return;

    const formData = document.querySelectorAll("#form_movies input, #form_movies select");
    formData.forEach(input => {
        if (input.type === "checkbox") {
            input.checked = false;
        } else {
            input.value = "";
        }
    });
    swal.fire({
        title: "El formulario ha sido reiniciado",
        icon: "success",
      });
    
};
