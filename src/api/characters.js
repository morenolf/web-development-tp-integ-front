import axios from "axios"

const API_URL_CHARACTERS = 'http://localhost:8091/characters'
const API_URL_CLOTH = 'http://localhost:8091/cloth'

export const getCharactersRequest = (userId, token) => axios.get(`${API_URL_CHARACTERS}/${userId}`, { headers: { Authorization: `Bearer ${token}` }})

export const getCharacterRequest = async(id, token) => {
    const url = `${API_URL_CHARACTERS}/character/${id}`
    const auth = `Bearer ${token}`
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': auth }
    };
    let response = await fetch(url, requestOptions)
    return await response.json()
}

export const createCharacterRequest = async(character, userId, token) => {
    
    //axios.post(`${API_URL_CHARACTERS}/${userId}`, character, {Authorization: `Bearer ${token}`} );
    /*const options = {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        data: {name: "asadasd"},
        url: `${API_URL_CHARACTERS}/${userId}`
    }
    axios.post(`${API_URL_CHARACTERS}/${userId}`, {}, {"Authorization": `Bearer ${token}`} );
    //{character, headers: { Authorization: `Bearer ${token}` }}
    //axios.create()
    //axios(options);
    */

    const url = `${API_URL_CHARACTERS}/${userId}`
    const auth = `Bearer ${token}`
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': auth },
        body: JSON.stringify(character)
    };
    return await fetch(url, requestOptions);
}

//export const updateCharacterRequest = (id, character, token) => axios.patch(`${API_URL_CHARACTERS}/${id}`, character, { headers: { Authorization: `Bearer ${token}` }})

export const updateCharacterRequest = async(id, character, token) => {

    const url = `${API_URL_CHARACTERS}/${id}`
    const auth = `Bearer ${token}`
    const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', 'Authorization': auth },
        body: JSON.stringify(character)
    };
    return await fetch(url, requestOptions);
}

export const deleteCharacterRequest = (id, token) => axios.delete(`${API_URL_CHARACTERS}/${id}`, { headers: { Authorization: `Bearer ${token}` }})

//export const getClothRequest = (type, paging, token) => axios.get(`${API_URL_CLOTH}/${API_URL_CLOTH}`, { headers: { Authorization: `Bearer ${token}` }, params: paging})

export const getClothRequest = async(type, paging, token) => {
    const url = `${API_URL_CLOTH}/${type}?page=${paging.page}&limit=${paging.limit}`
    const auth = `Bearer ${token}`
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': auth }
    };
    let response = await fetch(url, requestOptions)
    return await response.json()
}
