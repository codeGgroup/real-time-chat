const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const router = express.Router();

router.post('/register', async (req, res) => {
    console.log('Received request to /api/auth/register');
    console.log('Request body:', req.body);

    const { username, email, password } = req.body;

    try {
        // Check if the email already exists
        const existingUser = await User.exists({ email });
        if (existingUser) {
            console.error('Email already exists');
            return res.status(400).json({ message: 'Email already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        // Save the user to the database
        await newUser.save();

        // Send a success response
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Error registering user:', error);
        if (error.name === 'ValidationError') {
            const errorMessage = Object.values(error.errors).map(err => err.message).join(', ');
            console.error('Validation error:', errorMessage);
            return res.status(400).json({ message: errorMessage });
        } else {
            console.error('Server error:', error);
            return res.status(500).json({ message: 'An error occurred. Please try again later.' });
        }
    }
});

router.post('/login', async (req, res) => {
    // user login logic
});

module.exports = router;