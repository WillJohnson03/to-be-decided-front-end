const BASE_URL = process.env.REACT_APP_BACKEND_SERVER_URL

// export function getMoviesList() {
//   return fetch(`${BASE_URL}/api/movies`)
//   .then(res => res.json())
// }

export function searchMovie(name) {
  return fetch(`${BASE_URL}/api/boardgames/${name}`)
  .then(res => res.json())
}