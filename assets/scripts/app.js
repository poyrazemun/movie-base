const addMovieModal = document.getElementById("add-modal");
const startAddMovieButton = document.querySelector("header button");
const backdrop = document.getElementById("backdrop");

const cancelAddMovieButton = addMovieModal.querySelector(".btn--passive");
const addMovieButton = addMovieModal.querySelector(".btn--success");

const userInputs = addMovieModal.querySelectorAll("input");

const entryTextSection = document.getElementById("entry-text");
const deleteMovieModal = document.getElementById("delete-modal");

const movies = [];

const updateUI = () => {
  if (movies.length > 0) {
    entryTextSection.style.display = "none";
  }
};

const deleteMovie = (movieId) => {
  const movieElement = document.querySelector(`[data-id="${movieId}"]`);

  if (!movieElement) {
    console.warn(`Element with data-id="${movieId}" not found initially.`);
    return;
  }

  movieElement.remove();
  console.log(`Movie element with data-id="${movieId}" removed.`);

  const movieIndex = movies.findIndex((movie) => movie.id === movieId);

  if (movieIndex !== -1) {
    movies.splice(movieIndex, 1);
    //console.log(`Movie with id ${movieId} removed from array.`);
  }

  if (movies.length === 0) {
    entryTextSection.style.display = "block";
  }

  cancelMovieDeletion();
};

const cancelMovieDeletion = () => {
  toggleBackdrop();
  deleteMovieModal.classList.remove("visible");
};

const deleteMovieHandler = (movieId) => {
  deleteMovieModal.classList.add("visible");
  toggleBackdrop();
  const cancelDeletionButton = deleteMovieModal.querySelector(".btn--passive");
  let confirmDeletionButton = deleteMovieModal.querySelector(".btn--danger");

  confirmDeletionButton.replaceWith(confirmDeletionButton.cloneNode(true));
  //since we bind this element with movieId below, we do not solve with removeEventListener. Therefore I have swapped
  //the deletion button

  confirmDeletionButton = deleteMovieModal.querySelector(".btn--danger");

  cancelDeletionButton.removeEventListener("click", cancelMovieDeletion);

  cancelDeletionButton.addEventListener("click", cancelMovieDeletion);
  confirmDeletionButton.addEventListener(
    "click",
    deleteMovie.bind(null, movieId)
  );
};

const renderNewMovieElement = (id, title, image, rating) => {
  const newMovieElement = document.createElement("li");
  newMovieElement.className = "movie-element";
  newMovieElement.setAttribute("data-id", id);
  newMovieElement.innerHTML = `
  <div class = "movie-element__image">
  <img src="${image}" alt="${title}"> 
  </div>
  <div class="movie-element__info">
  <h2>${title}</h2>
  <p>${rating}/5 stars</p>
  <button class="delete-btn" data-id="movieId">Delete</button>
  </div>
  `;

  newMovieElement
    .querySelector(".delete-btn")
    .addEventListener("click", deleteMovieHandler.bind(null, id));

  document.getElementById("movie-list").append(newMovieElement);
};

const closeMovieModal = () => {
  addMovieModal.classList.remove("visible");
};

const showMovieModal = () => {
  addMovieModal.classList.add("visible");
  toggleBackdrop();
};

const clearMovieInputs = () => {
  for (const userInput of userInputs) {
    userInput.value = "";
  }
};

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const addMovieToTheDatabase = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (
    titleValue.trim() === "" ||
    imageUrlValue.trim() === "" ||
    ratingValue.trim() === "" ||
    parseInt(ratingValue) < 1 ||
    parseInt(ratingValue) > 5
  ) {
    alert("Please enter valid values!");
    return;
  }

  const newMovie = {
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue,
  };

  movies.push(newMovie);
  console.log(movies);
  closeMovieModal();
  toggleBackdrop();
  clearMovieInputs();
  renderNewMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating
  );
  updateUI();
};

const backdropClickHandler = () => {
  closeMovieModal();
  cancelMovieDeletion();
  clearMovieInputs();
};

const cancelAddMovie = () => {
  closeMovieModal();
  clearMovieInputs();
  toggleBackdrop();
};

startAddMovieButton.addEventListener("click", showMovieModal);
backdrop.addEventListener("click", backdropClickHandler);
cancelAddMovieButton.addEventListener("click", cancelAddMovie);
addMovieButton.addEventListener("click", addMovieToTheDatabase);
