// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  if(!Array.isArray(array))
    return; 

  let result =  array.map(element => element.director);
  console.log("EXERCICE 1 ->", result);
  return result;
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  if(!Array.isArray(array))
    return; 
  let result = array.filter((movie) => movie.director == director);
  console.log("EXERCICE 2 ->", result);
  return result;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  if(!Array.isArray(array))
    return; 

  let movies = getMoviesFromDirector(array, director); 
  let result = movies.reduce((sum, movie) => sum + movie.score, 0)
  result = result / movies.length;
  result = Math.round(result * 100) / 100;
  console.log("EXERCICE 3 ->", result);
  return result;
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  if(!Array.isArray(array))
    return; 

  let result = array.reduce((ordered, movie) => {
    if(ordered.length==0)
      ordered.push(movie.title);
    else{
      let i = 0;
      while(i < ordered.length && movie.title > ordered[i])
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
function orderByYear(array) {
  if(!Array.isArray(array))
    return; 

  let result = array.reduce((ordered, movie) => {
    if(ordered.length == 0)
      ordered.push(movie);
     else{
      let i = 0;
      while(i < ordered.length && movie.year > ordered[i].year)
        i++;
      while(i < ordered.length && movie.year == ordered[i].year && movie.title > ordered[i].title)
        i++;
      ordered.splice(i, 0, movie);
    }
     return ordered;
  }, [])

  console.log("EXERCICE 5 ->", result);
  return result;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, category) {
  let result = array.reduce( (values, movie) => {
    if (movie.genre.some(genre => genre == category)){
      values.sum += movie.score;
      values.quantity++;
    }
    return values;
  }, {sum:0, quantity:0}) 
  
  if (result.quantity == 0)
    return 0;
  let average = Math.round((result.sum / result.quantity) * 10) / 10;
  console.log("EXERCICE 6 ->", average);
  return average;
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
