import React, { useState } from "react";
import axios from "axios";
import '../App.css'

const RegisterForm = () => {
    const [message, setMessage] = useState("");
    const [formError, setFormError] = useState("");

    const registerUser = async (userData) => {
        try {
            const response = await axios.post('http://localhost:3002/api/auth/register', userData)
            setMessage(response.data.message);
        } catch (error) {
            setFormError("An error occurred. Please try again later.");
            console.error('Error registering user:', error);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const username = event.target.username.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        if (!username || !email || !password) {
            setFormError("Please fill in all the required fields.");
            return;
        }

        const userData = {
            username,
            email,
            password,
        };
        await registerUser(userData);
    };

    return (
        <div className="reg-container">
            <h1 className="heading">Register</h1>
            <form className="reg-form" onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" placeholder="John Fine" />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="abc@gmail.com" />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Enter password" />
                <button type="submit">Register</button>
            </form>
            {message && <p className="message">{message}</p>}
            {formError && <p className="error">{formError}</p>}
        </div>
    );
};

export default RegisterForm;
