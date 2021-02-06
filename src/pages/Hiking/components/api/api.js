import axios from 'axios';

const httpRequest = axios.create({
    baseURL: 'https://hiking-backend.herokuapp.com/api/'
});

export const apiUserRegister = data => httpRequest.post('/register', data);
export const apiUserProfile = (data, config) => httpRequest.post('/profile', data, config);
export const apiUserLogin = data => httpRequest.post('/login', data);