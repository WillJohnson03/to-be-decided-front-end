const baseBoardGameUrl = 'https://api.boardgameatlas.com/api/'

export function getBoardGameList() {
  fetch(`${process.env.REACT_APP_BACKEND_SERVER_URL}/api/boardgames`)
  .then(res => {
    console.log(res)
    res.json()
  })
}