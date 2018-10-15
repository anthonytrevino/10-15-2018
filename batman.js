
const MOVIES_URL ="http://www.omdbapi.com/?s=batman&apikey=76395bbd"

let moviesList = document.getElementById("moviesList")

function displayMovies(movies) {
  console.log(movies.Search)
  let movieItems = movies.Search.map(function(movie){
    return `<li>
    <label>${movie.Title}</label>
    <label>${movie.Year}</label>


    <img src="${movie.Poster}"></img>
    </li>`
  })


moviesList.innerHTML += movieItems.join('')
}



function performRequestUsingjQueryLibrary() {

// get is going to make a GET request
  $.get(MOVIES_URL,function(data){
    console.log(data)
    displayMovies(data)
  })

}
performRequestUsingjQueryLibrary()
// perform RequestUsingjQueryLibrary()


  //Figure out how to display a featured movie on hover
// function displayFeaturedMovie(movie) {
//   let featuredMovie = featuredMovie.addEventListener("click",)
//   featuredMovie.addEventListener("click",function()
// }
