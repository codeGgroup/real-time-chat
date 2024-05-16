import React from "react";
import '../App.css'
const RegisterForm = () => {
    return (
        <div className="reg-container">
            <h1 className="heading">Register</h1>
            <form className="reg-form">
                <label htmlFor="username">Username:</label>
                <input type="text" id="username" name="username" placeholder="John Fine"/>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="abc@gmail.com"/>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" placeholder="Enter password"/>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterForm;