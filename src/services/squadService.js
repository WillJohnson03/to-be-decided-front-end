import * as tokenService from './tokenService'

const BASE_URL = `${process.env.REACT_APP_BACKEND_SERVER_URL}/api/squads`

export async function getAllSquads() {
  const res = await fetch(BASE_URL, {
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  })
  return await res.json()
}

export function getSquad(id) {
  return fetch(`${BASE_URL}/${id}`, {
    headers: { Authorization: `Bearer ${tokenService.getToken()}` },
  })
  .then(res => res.json())
}

export function create(squad) {
  return fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: squad
  })
  .then(res => res.json())
}

export function deleteOne(id) {
  return fetch(`${BASE_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
  })
  .then(res => res.json())
}

export function update(squad) {
  return fetch(`${BASE_URL}/${squad.get('_id')}`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: squad
  })
  .then(res => res.json())
}

export function addUserToSquad(squad) {
  return fetch(`${BASE_URL}/${squad.get('_id')}/addUser`, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${tokenService.getToken()}`
    },
    body: squad
  })
  .then(res => res.json())
}