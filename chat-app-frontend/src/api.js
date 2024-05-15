import axios from 'axios';

const api = axios.create({
    baseURL: '/api',
});

export const registerUser = (userData) => api.post('/auth/register', userData);
export const loginUser = (userData) => api.post('/auth/login', userData);
