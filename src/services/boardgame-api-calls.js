export function getBoardGameList() {
  return fetch(`${process.env.REACT_APP_BACKEND_SERVER_URL}/api/boardgames`)
  .then(res => res.json())
}

export function searchBoardGame(boardGame) {
  console.log(boardGame)
  return fetch(`${process.env.REACT_APP_BACKEND_SERVER_URL}/api/boardgames`)
  .then(res => res.json())
}