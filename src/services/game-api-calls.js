export function getVideoGameList() {
  return fetch(`${process.env.REACT_APP_BACKEND_SERVER_URL}/api/videoGames`)
  .then(res => res.json())
}