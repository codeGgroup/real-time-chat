const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const router = express.Router();

router.post('/register', async (req, res) => {
    console.log('Received request to /api/auth/register');
    console.log('Request body:', req.body);
    console.log('Request body:', JSON.stringify(req.body));

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
    console.log('Received request to /api/auth/login');
    console.log('Request body:', req.body);

    const { email, password } = req.body;

    try {
        // Fetch the user from the database
        const user = await User.findOne(
            {email: email},
            {email: 1, password: 1},
            {lean: true}
        );
        console.log("User object:", user);
        if (!user) {
            console.error('Invalid email or password');
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Compare the provided password with the stored hashed password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            console.error('Invalid email or password');
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Login successful
        res.status(200).json({ message: 'Login successful!', });
    } catch (error) {
        console.error('Error logging in user', error);
        res.status(500).json({ message: 'An error occurred. Please try again later' });
    }
});

module.exports = router;