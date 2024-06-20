const express = require('express');
const router = express.Router();
const {sendMessageHandler, getMessagesHandler} = require('../controllers/messageController')

// Define your message-related routes here
router.post('/', sendMessageHandler);
router.get('/', getMessagesHandler);

module.exports = router;
