export function getMovieList() {
  fetch(`${process.env.REACT_APP_BACKEND_SERVER_URL}/api/movies`)
  .then(res => res.json())
}