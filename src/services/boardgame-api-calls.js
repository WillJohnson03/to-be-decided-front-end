const BASE_URL = process.env.REACT_APP_BACKEND_SERVER_URL

// export function getBoardGameList() {
//   return fetch(`${BASE_URL}/api/boardgames`)
//   .then(res => res.json())
// }

export function searchBoardGame(name) {
  // console.log(boardGame)
  return fetch(`${BASE_URL}/api/boardgames/${name}`)
  .then(res => res.json())
}

// export function getBoardGame(name) {
//   return fetch(`${BASE_URL}/api/boardgames/${name}`)
//   .then(res => res.json())
// }