const movies = [
    { title: 'Inception', releaseYear: 2010, genre: 'Sci-Fi', rating: 8.8 },
    { title: 'The Dark Knight', releaseYear: 2008, genre: 'Action', rating: 9.0 },
    { title: 'Titanic', releaseYear: 1997, genre: 'Romance', rating: 7.8 },
    { title: 'The Matrix', releaseYear: 1999, genre: 'Sci-Fi', rating: 8.7 },
    { title: 'The Godfather', releaseYear: 1972, genre: 'Crime', rating: 9.2 },
    { title: 'Avatar', releaseYear: 2009, genre: 'Sci-Fi', rating: 7.8 },
    { title: 'The Shawshank Redemption', releaseYear: 1994, genre: 'Drama', rating: 9.3 }
  ];
//   1. **Sort the Movies by Rating**: Sort the movies so that the highest-rated movie comes first.
//   2. **Find a Movie by Title**: Write a function that takes a movie title as a parameter and returns the movie object. If no movie is found, return a message indicating that the movie is not in the catalog.
//   3. **Get Movies with a Rating Greater Than 8**: Create a new array of movies that have a rating greater than 8.
//   4. **List All Movie Titles**: Create an array of only the movie titles.
//   5. **Count Movies in a Specific Genre**: Write a function that takes a genre as a parameter and returns the number of movies in that genre.
//   6. **Check if All Movies Are Rated Above 7**: Check if every movie in the catalog has a rating above 7.
//   7. **Get Movies Released After 2000**: Create a new array that includes only movies released after the year 2000.
  
    movies.sort((a,b) => b.rating - a.rating);
    console.log(movies);

    const topMovies = movies.filter((rate) => rate.rating > 8);
    console.log(topMovies);

    const movieTitles = movies.map((names)=> names.title)
    console.log(movieTitles);

  function findMovies(title)
  {
    const movieTitle  = movies.find((m) => m.title === title);
    if(!movieTitle) 
    {
        return "Movie not found";
    }
    return movieTitle;
  }
  console.log(findMovies("Avatar"));

function countMovies(genre)
{
    let count = movies.filter((m) => m.genre === genre).length;
    return count
}
  console.log(countMovies("Sci-Fi"));
  
const allAbove = movies.every((m) => m.rating > 7);
   console.log(allAbove);

const   moviesAfter = movies.filter((m) => m.releaseYear > 2000);
console.log(moviesAfter);
