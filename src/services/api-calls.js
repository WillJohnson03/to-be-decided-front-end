const baseGameUrl = 'https://dbd-api.herokuapp.com'

const baseMovieUrl = 'https://dbd-api.herokuapp.com'

const baseBoardGameUrl = 'https://api.boardgameatlas.com/api/'

export function getBoardGameList() {
  return fetch(`${baseBoardGameUrl}/search?name=&client_id=It4sstezqG`)
  .then(res => res.json())
}