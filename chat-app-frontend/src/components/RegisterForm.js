import { registerUser, loginUser } from './api';

// Example usage
const handleRegister = async (userData) => {
    try {
        await registerUser(userData);
        // Handle successful registration
    } catch (error) {
        // Handle registration error
    }
};
