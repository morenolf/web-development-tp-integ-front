import axios from "axios"

const API_URL_CHARACTERS = 'http://localhost:8091/characters'
const API_URL_CLOTH = 'http://localhost:8091/cloth'

export const getCharactersRequest = (userId, token) => axios.get(`${API_URL_CHARACTERS}/${userId}`, { headers: { Authorization: `Bearer ${token}` }})

export const getCharacterRequest = (id, token) => axios.get(`${API_URL_CHARACTERS}/${id}`, { headers: { Authorization: `Bearer ${token}` }})

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

export const updateCharacterRequest = (id, character, token) => axios.patch(`${API_URL_CHARACTERS}/${id}`, character, { headers: { Authorization: `Bearer ${token}` }})

export const deleteCharacterRequest = (id, token) => axios.delete(`${API_URL_CHARACTERS}/${id}`, { headers: { Authorization: `Bearer ${token}` }})

export const getClothRequest = (type, paging, token) => axios.get(`${API_URL_CLOTH}/${type}`, { headers: { Authorization: `Bearer ${token}` }, params: paging})


