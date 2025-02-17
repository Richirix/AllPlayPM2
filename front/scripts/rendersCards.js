const movieContainer = document.getElementById("movieContainer");

const rendersCards = (data) =>{
    data.forEach(movie=>{
        const movieCard = document.createElement('div');
        movieCard.classList.add("cards", "p-4");
      
        
        const title = document.createElement('h6');
        title.classList.add("card-title","text-center","text-white", "p-auto");
        title.textContent = movie.title;
    
        const poster = document.createElement('img');
        poster.src = movie.poster;
        poster.alt = `${movie.title} poster`;
        poster.classList.add("card-img-top");
        poster.style.width = "10rem"; 
        poster.style.height = "12rem"; 
     
        const year = document.createElement('p');
        year.classList.add("card-text","text-white", "mb-auto");
        year.textContent = movie.year;
        
        const director = document.createElement('p');
        director.classList.add("card-text" ,"text-white", "mb-auto");
        director.textContent = movie.director;
    
        const duration = document.createElement('p');
        duration.classList.add("card-text" ,"text-white", "mb-auto");
        duration.textContent = movie.duration;
    
        const genre = document.createElement('p');
        genre.classList.add("card-text" ,"text-white", "mb-auto");
        genre.textContent = movie.genre;
    
        const rate = document.createElement('p');
        rate.classList.add("card-text" ,"text-white", "mb-auto");
        rate.textContent = `⭐ ${movie.rate} / 10`;
    
        movieCard.append(title, poster, year, director, duration, genre, rate);
           
        movieContainer.appendChild(movieCard);
        
    
    });
    };
        
module.exports = rendersCards;