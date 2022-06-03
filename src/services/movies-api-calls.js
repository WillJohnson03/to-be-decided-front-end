const BASE_URL = process.env.REACT_APP_BACKEND_SERVER_URL

export function searchMovie(name) {
  return fetch(`${BASE_URL}/api/movies/${name}`)
    .then(res => res.json())
}
