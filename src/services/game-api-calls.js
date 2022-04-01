const BASE_URL = process.env.REACT_APP_BACKEND_SERVER_URL

export function searchVideoGame(name) {
  return fetch(`${BASE_URL}/api/videoGames/${name}`)
    .then(res => res.json())
}