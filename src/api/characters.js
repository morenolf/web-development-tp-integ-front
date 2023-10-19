import axios from "axios"

const API_URL_CHARACTERS = 'http://localhost:8091/characters'
const API_URL_CLOTH = 'http://localhost:8091/cloth'

export const getCharactersRequest = (userId, token) => axios.get(`${API_URL_CHARACTERS}/${userId}`, { headers: { Authorization: `Bearer ${token}` }})

export const getCharacterRequest = (id, token) => axios.get(`${API_URL_CHARACTERS}/${id}`, { headers: { Authorization: `Bearer ${token}` }})

export const createCharacterRequest = (character, token) => axios.post(`${API_URL_CHARACTERS}/`, character, { headers: { Authorization: `Bearer ${token}` }})

export const updateCharacterRequest = (id, character, token) => axios.patch(`${API_URL_CHARACTERS}/${id}`, character, { headers: { Authorization: `Bearer ${token}` }})

export const deleteCharacterRequest = (id, token) => axios.delete(`${API_URL_CHARACTERS}/${id}`, { headers: { Authorization: `Bearer ${token}` }})

export const getClothRequest = (type, paging, token) => axios.get(`${API_URL_CLOTH}/${type}`, { headers: { Authorization: `Bearer ${token}` }, params: paging})
