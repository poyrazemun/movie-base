# Movie List App

A simple JavaScript-based movie list application that allows users to add, view, and delete movies.

## Features

- Add a movie with a title, image URL, and rating (1-5 stars).
- View a list of added movies.
- Delete movies from the list.
- UI updates dynamically based on the number of movies in the list.

## Technologies Used

- HTML
- CSS
- JavaScript (Vanilla JS, DOM Manipulation)

## How to Use

1. Click the **Add Movie** button.
2. Enter the movie title, image URL, and a rating (1-5 stars).
3. Click **Add** to save the movie to the list.
4. Click the **Delete** button on a movie to remove it from the list.

## Project Structure

- `index.html` - Main HTML structure
- `app.css` - Styles for UI elements
- `script.js` - Contains all JavaScript logic

## JavaScript Functionality

- `showMovieModal()`: Opens the movie input modal.
- `closeMovieModal()`: Closes the movie input modal.
- `addMovieToTheDatabase()`: Validates and adds a movie to the list.
- `renderNewMovieElement()`: Renders a new movie entry in the list.
- `deleteMovieHandler()`: Triggers the movie deletion modal.
- `deleteMovie()`: Removes a movie from the list and updates the UI.
- `updateUI()`: Hides or displays the default text based on the list.
- `toggleBackdrop()`: Manages the background overlay.

## Installation & Setup

1. Clone this repository:
   ```sh
   git clone https://github.com/yourusername/movie-list-app.git
   ```
2. Open `index.html` in a web browser.

## Future Improvements

- Add local storage support to persist movies.
- Improve the UI with animations and better styling.
- Implement edit functionality for added movies.



