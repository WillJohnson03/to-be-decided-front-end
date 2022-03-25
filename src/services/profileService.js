import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/profiles`

async function getAllProfiles() {
  const res = await fetch(BASE_URL, {
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
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

export { getAllProfiles }
