const express = require('express');
const router = express.Router();
const { loginHandler, registerHandler } = require('../controllers/authController')
// Define your authentication routes here
router.post('/login', loginHandler);
router.post('/register', registerHandler);

module.exports = router;
