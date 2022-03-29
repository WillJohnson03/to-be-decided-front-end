const BASE_URL = process.env.REACT_APP_BACKEND_SERVER_URL

// export function getMoviesList() {
//   return fetch(`${BASE_URL}/api/movies`)
//   .then(res => res.json())
// }

export function searchMovie(name) {
  // console.log(name)
  return fetch(`${BASE_URL}/api/movies/${name}`)
  .then(res => res.json())
}