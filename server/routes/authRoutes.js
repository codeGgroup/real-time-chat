const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const router = express.Router();

router.post('/register', async (req, res) => {
    // user registration logic
});

router.post('/login', async (req, res) => {
    // user logic logic
});

module.exports = router;