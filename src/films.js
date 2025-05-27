// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  let result =  array.map(element => element.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let result = array.filter((movie) => movie.director == director);
  console.log("EXERCICE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let movies = array.filter((movie) => movie.director == director); //Sustituir por getMoviesFromDirector
  let result = movies.reduce((sum, movie) => sum + movie.score, 0)
  result = result / movies.length;
  result = Math.round(result * 100) / 100;
  console.log("EXERCICE 3 ->", result);
  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  let result = array.reduce((ordered, movie) => {
    if(ordered.length==0)
      ordered.push(movie.title);
    else{
      let i = 0;
      while(movie.title > ordered[i])
        i++;
      ordered.splice(i, 0, movie.title);
    }
    return ordered;
  }, [])

  result = result.slice(0,20);
  console.log("EXERCICE 4 ->", result);
  return result;
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
