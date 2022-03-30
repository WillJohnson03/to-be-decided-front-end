import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/profiles`

async function getAllProfiles() {
  const res = await fetch(BASE_URL, {
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

function getProfile(id) {
  console.log(id);
  return fetch(`${BASE_URL}/${id}`, {
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  })
  .then(res => res.json())
}



function addVideoGame(videoGame) {
  return fetch(`${BASE_URL}/addVideoGame`, {
    method: 'POST',
    headers: {'Authorization': `Bearer ${tokenService.getToken()}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(videoGame)
  })
  .then(res => res.json())
}

function addBoardGame(boardGame) {
  return fetch(`${BASE_URL}/addBoardGame`, {
    method: 'POST',
    headers: {'Authorization': `Bearer ${tokenService.getToken()}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(boardGame)
  })
  .then(res => res.json())
}

function addMovie(movie) {
  return fetch(`${BASE_URL}/addMovie`, {
    method: 'POST',
    headers: {'Authorization': `Bearer ${tokenService.getToken()}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(movie)
  })
  .then(res => res.json())
}

// function removeVideoGame(videoGameName) {
//   return fetch(`${BASE_URL}/${videoGameName}`, {
//     method: "PATCH",
//     headers: { 
//       'Authorization': `Bearer ${tokenService.getToken()}`,
//     }
//   })
//   .then(res => res.json())
// }

// function removeBoardGame(boardGameName) {
//   return fetch(`${BASE_URL}/${boardGameName}`, {
//     method: "PATCH",
//     headers: { 
//       'Authorization': `Bearer ${tokenService.getToken()}`,
//     }
//   })
//   .then(res => res.json())
// }

// function removeMovie(movieName) {
//   return fetch(`${BASE_URL}/${movieName}`, {
//     method: "PATCH",
//     headers: { 
//       'Authorization': `Bearer ${tokenService.getToken()}`,
//     }
//   })
//   .then(res => res.json())
// }

export { 
  getAllProfiles,
  addVideoGame,
  addBoardGame,
  addMovie,
  // removeVideoGame,
  // removeBoardGame,
  // removeMovie,
  getProfile,
}
