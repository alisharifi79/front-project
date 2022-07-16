const addBtn = document.getElementById('add-movie-btn');
const searchBtn = document.getElementById('search-btn');

let movies = [];

const renderMovies = function () {
  const movieList = document.getElementById('movie-list');

  if (movies.length === 0) {
    movieList.classList.remove('visible');
    return;
  } else {
    movieList.classList.add('visible');
  }
  movieList.innerHTML = '';

  movies.forEach(function (movie) {
    const movieEl = document.createElement('li');
    let text = movie.info.title + ' _ ';
    for (const key in movie.info) {
      if (key !== 'title') {
        text = text + `${key}: ${movie.info[key]}`;
      }
    }
    movieEl.textContent = text;
    movieList.append(movieEl);
  });
};

const addMovieHandler = function () {
  const title = document.getElementById('title').value;
  const extraValue = document.getElementById('extra-value').value;
  const extraName = document.getElementById('extra-name').value;

  if (
    title.trim() === '' ||
    extraName.trim() === '' ||
    extraValue.trim() === ''
  ) {
    alert('wrong input');
    return;
  } else {
    const newMovie = {
      info: {
        title,
        [extraName]: extraValue,
      },
      id: Math.random(),
    };
    movies.push(newMovie);
    renderMovies();
  }
};

const searchMovieHandler = function () {
  const searchInput = document.getElementById('filter-title');
  const movieList = document.getElementById('movie-list');

  let isMovieThere = false;

  movies.forEach(function (movie) {
    if (movie.info.title.includes(searchInput.value)) {
      isMovieThere = true;
      movieList.innerHTML = '';
      const movieEl = document.createElement('li');
      let text = movie.info.title + ' _ ';
      for (const key in movie.info) {
        if (key !== 'title') {
          text = text + `${key}: ${movie.info[key]}`;
        }
      }
      movieEl.textContent = text;
      movieList.append(movieEl);
    }
  });
  if (!isMovieThere) {
    alert('movie not found!');
  }
};

addBtn.addEventListener('click', addMovieHandler);
searchBtn.addEventListener('click', searchMovieHandler);
