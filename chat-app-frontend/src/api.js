// api.js
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://10.49.63.228:3001/api', // or the correct URL of your backend server
});

export const registerUser = (userData) => api.post('/auth/register', userData);
export const loginUser = (userData) => api.post('/auth/login', userData);
export const fetchUsers = async () => {
    try {
        const response = await api.get('/users');
        return response.data.users;
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
};
