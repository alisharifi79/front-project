const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backDrop = document.getElementById('backdrop');
const addMovieButton = document.getElementById('add-button');
const cancelMovieButton = addMovieModal.querySelector('.btn--passive');
//const movieCard = document.getElementById('movie-card');
const inputMovieTitle = document.getElementById('title');
const inputMovieImage = document.getElementById('image-url');
const inputMovieRating = document.getElementById('rating');
const entryTextSection = document.getElementById('entry-text');
// const movieTitle = document.getElementById('movie-title');
// const movieImage = document.getElementById('movie-img');
// const movieRating = document.getElementById('movie-rating');

let movieProperties = [];

const updateUI = function () {
  if (movieProperties.length === 0) {
    entryTextSection.style.display = 'block';
  } else {
    entryTextSection.style.display = 'none';
  }
};

const deleteMovie = function (movieTitle) {
  let movieIndex = 0;
  for (const movie of movieProperties) {
    if (movie.title === movieTitle) {
      break;
    }
    movieIndex++;
  }
  movieProperties.splice(movieIndex, 1);
  const movieList = document.getElementById('movie-list');
  movieList.children[movieIndex].remove();
};

const renderNewMovieElement = function (title, img, rating) {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
  <div class="movie-element__image">
  <img src="${img}" alt="${title}">
  </div>
  <div class="movie-element__info">
  <h2>${title}</h2>
  <p>${rating}/5 stars</p>
  </div>
  `;
  newMovieElement.addEventListener('click', deleteMovie.bind(null, title));
  const movieList = document.getElementById('movie-list');
  movieList.append(newMovieElement);
};

const clearInput = function () {
  inputMovieTitle.value = '';
  inputMovieImage.value = '';
  inputMovieRating.value = '';
};

const toggleMovieModal = function () {
  addMovieModal.classList.toggle('visible');
};

const changeBackground = function () {
  backDrop.classList.toggle('visible');
};

const addMovie = function () {
  if (
    inputMovieTitle.value.trim() === '' ||
    inputMovieImage.value.trim() === '' ||
    inputMovieRating.value.trim() === '' ||
    +inputMovieRating.value < 1 ||
    +inputMovieRating.value > 5
  ) {
    alert('wrong input please enter valid input');
    return;
  }
  // movieTitle.textContent = inputMovieTitle.value;
  // movieImage.src = inputMovieImage.value;
  // movieRating.textContent = inputMovieRating.value;
  // addMovieModal.classList.toggle('visible');
  // backDrop.classList.toggle('visible');

  const movieTitle = inputMovieTitle.value;
  const movieImage = inputMovieImage.value;
  const movieRating = inputMovieRating.value;

  let newMovie = {
    title: movieTitle,
    imgUrl: movieImage,
    rating: movieRating,
  };

  movieProperties.push(newMovie);
  console.log(movieProperties);
  renderNewMovieElement(newMovie.title, newMovie.imgUrl, newMovie.rating);
  updateUI();

  addMovieModal.classList.toggle('visible');
  backDrop.classList.toggle('visible');
  clearInput();
};

const closeMovieModal = function () {
  toggleMovieModal();
  changeBackground();
  clearInput();
};
const clickBackground = function () {
  toggleMovieModal();
  changeBackground();
};

startAddMovieButton.addEventListener('click', toggleMovieModal);
startAddMovieButton.addEventListener('click', changeBackground);
addMovieButton.addEventListener('click', addMovie);
cancelMovieButton.addEventListener('click', closeMovieModal);
backDrop.addEventListener('click', clickBackground);
