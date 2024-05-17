const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

const authRoutes = require('./routes/authRoutes');
const messageRoutes = require('./routes/messageRoute');

const app = express();
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
    onPreflightRequest: (req, res) => {
        console.log('Received CORS prelight request: ', req.method, req.url);
    },
    onOrigin: (origin, callback) => {
        console.log('Checking origin:', origin);
        callback(null, true);
    }
}));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/chat-app', {
    socketTimeoutMS: 30000,
    serverSelectionTimeoutMS: 5000,
})
    .then(() => {
        console.log('Connected to MongoDB');
        startServer();
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    });

function startServer() {
    // Serve the API routes
    app.use('/api/auth', authRoutes);
    app.use('/api/messages', messageRoutes);
    app.use('/api/health', (req, res) => {
        if (mongoose.connection.readyState === 1) {
            res.status(200).json({ message: 'DB connected' });
        } else {
            res.status(503).json({ message: 'DB is not connected' });
        }
    });

    // Serve the React frontend
    app.use(express.static(path.join(__dirname, '../chat-app-frontend/build')));

    app.get('/*', (req, res) => {
        if (req.path.startsWith('/api/')) {
            // Serve the API routes
            return;
        } else {
            // Serve the React frontend
            res.sendFile(path.join(__dirname, '../chat-app-frontend', 'build', 'index.html'));
        }
    });

    app.use((req, res) => {
        console.error('Unknown route:', req.url);
        res.status(404).json({ message: 'Not found' });
    });

    app.listen(3002, () => {
        console.log('Server started on port 3002');
    });
}
