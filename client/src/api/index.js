import axios from 'axios'

const API = axios.create({baseURL: 'https://localhost:5000'})

export const logIn = (authData) => API.post('/user/login', authData);
export const signup = (authData) => API.post('/user/signup', authData);