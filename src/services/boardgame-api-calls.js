const BASE_URL = process.env.REACT_APP_BACKEND_SERVER_URL

export function searchBoardGame(name) {
  return fetch(`${BASE_URL}/api/boardgames/${name}`)
    .then(res => res.json())
}
