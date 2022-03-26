export function getBoardGameList() {
  return fetch(`${process.env.REACT_APP_BACKEND_SERVER_URL}/api/boardgames`)
  .then(res => res.json())
}