// userRoutes.js
const express = require('express');
const router = express.Router();
const { fetchUsers } = require('../controllers/userController');

// Fetch all users
router.get('/', fetchUsers);

module.exports = router;
