const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const authRoutes = require('./routes/authRoutes');
const messageRoutes = require('./routes/messageRoute');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/chat-app', {
    socketTimeoutMS: 30000,
    serverSelectionTimeoutMS: 5000,
})
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(3002, () => {
            console.log('Server started on port 3001')
        })
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    });

// Use the routes
app.use('/auth', authRoutes);
app.use('/message', messageRoutes);

// start the server
app.listen(3001, ()=> {
    console.log('Server started at port 3001');
});

// testing if db is connected
app.get('/health', (req, res) => {
    if (mongoose.connection.readyState === 1){
        res.status(200).json({ message: 'DB connected'});
    } else {
        res.status(503).json({ message: 'DB is not connected'});
    }
});