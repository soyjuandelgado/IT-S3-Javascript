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
  let movies = getMoviesFromDirector(array, director); 
  let result = movies.reduce((sum, movie) => sum + movie.score, 0)
  result = result / movies.length;
  result = Math.round(result * 100) / 100;
  console.log("EXERCICE 3 ->", result);
  return result;
}

function orderAlphabetically(array) {
  let titles = array.map( movie => movie.title);
  titles.sort();
  console.log("EXERCICE 4 ->", titles);
  return titles.slice(0,20);
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  let moviesByYear = [...array];
  moviesByYear.sort( (a,b) => {
    let res = a.year - b.year;
    if(res == 0)
      res = (a.title < b.title) ? -1 : 
        (a.title > b.title) ? 1 : 0;
    return res;
  });

  console.log("EXERCICE 5 ->", moviesByYear);
  return moviesByYear;
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
function hoursToMinutes(array) {
  let result = array.map( (movie) => {
    let hours = parseInt(movie.duration.match(/(\d+)\s*h/)?.[1] || 0);
    let minutes = parseInt(movie.duration.match(/(\d+)\s*min/)?.[1] || 0); 
 
    minutes += hours * 60;
    return {...movie, duration: minutes};  //hace una copia de movie modificando la duracion
  });
  console.log("EXERCICE 7 ->", result);
  return result;
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  let moviesYear = array.filter((movie) => movie.year == year);
  let result =  moviesYear.reduce((best, movie) => {
    best = (movie.score > best.score) ? movie : best;
    return best;
  }, {score:0});

  return [result];
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
