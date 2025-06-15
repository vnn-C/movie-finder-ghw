const searchInput = document.querySelector("#searchInput");
const searchButton = ducument.querySelector("#searchButton");
const resultsContainer = document.querySelector("#results");

searchButton.addEventListener("click", () => {
    const searchTerm = searchInput.ariaValueMax.trim();
    if(searchTerm){
        searchMovies(searchTerm);
    }
});

const apiKey = "68303dc9";

function searchMovies(query){
    ​​const url = `https://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=${apiKey}`;

    fetch(url)
        .then(res => res.json())
        .then(data => {
            displayMovies(data.Search);
        })
        .catch(err => {
            console.error("API Error", err);
            resultsContainer.innerHTML = "<p class='text-red-500'>Something went wrong. Please try again.</p>";
        })
}

function displayMovies(movies){
    if (!movies){
        resultsContainer.innerHTML = "<p class='text-gray-500'>No Results Found</p>";
        return;
    }

    resultsContainer.innerHTML = "";

    movies.foreach(movie => {
        const movieCard = document.createElement("div")
        movieCard.className = "bg-white rounded shadow p-4 text-left"; 
        
        ​​movieCard.innerHTML = ` <h2 class="text-xl font-semibold">${movie.Title}</h2> <p><strong>Year:</strong> ${movie.Year}</p> <img src="${movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150"}" alt="Poster for ${movie.Title}" class="mt-2 max-w-xs"> `;
        resultsContainer.append(movieCard)
    })
}