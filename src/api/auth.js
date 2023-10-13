import axios from "axios"

const API_URL = 'http://localhost:8091/users'
const headers = { 'Authorization': 'random token key name' };

export const registerRequest = (user) => axios.post(`${API_URL}/register`, user, { headers })

export const loginRequest = (user) => axios.get(`${API_URL}/login`, { params: { email: user.email,  password: user.password }, headers })

export const verifyTokenRequest = (user) => axios.post(`${API_URL}/verify`, user, { headers })
