import React, { useState } from "react";
import axios from "axios";
import '../App.css';

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const loginUser = async (useData) =>  {
        try {
            const response = await axios.post('http://localhost:3002/api/auth/login', useData);
            if(response.status === 200){
                window.location.href = '/';
                return { success: true, message: 'Login successful!' };
            } else {
                return { success: false, message: response.data.message };
            }
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                return { success:false, message: error.response.data.message };
            } else {
                return { success: false, message: 'An error occurred. Please try again later.' };
            }
        }
    }
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { success, message } = await loginUser({email, password});
            if (success){
                window.location.href = '/';
            } else {
                setMessage(message);
            }
        } catch (error){
            setMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <div className="reg-container">
            <h1 className="heading">Login</h1>
            <form className="reg-form" onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="abc@gmail.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button type="submit">Login</button>
            </form>
            {message && <p className="message">{message}</p> }
        </div>
    );
}
export default LoginForm;