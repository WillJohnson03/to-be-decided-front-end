export function getMoviesList() {
  return fetch(`${process.env.REACT_APP_BACKEND_SERVER_URL}/api/movies`)
  .then(res => res.json())
}

export function searchMovie(movie) {
  return fetch(`${process.env.REACT_APP_BACKEND_SERVER_URL}/api/boardgames`)
  .then(res => res.json())
}