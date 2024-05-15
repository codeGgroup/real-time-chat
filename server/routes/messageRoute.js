const express = require('express');

const ChatMessage = require('../models/ChatMessage');

const router = express.Router();

// Fetch chat messages
router.get('/', async (req, res) => {
    // fetch message logic
});

//send a chat message
router.post('/', async (req, res) => {
    // send message logic
});

module.exports = router;