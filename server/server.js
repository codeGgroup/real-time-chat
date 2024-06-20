const express = require('express');
const cors = require('cors');
const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
const authRoutes = require('./routes/authRoutes');
const messageRoutes = require('./routes/messageRoute');
const userRoutes = require('./routes/userRoutes');

// endpoint to fetch all users
app.get('/api/users', async (req, res) => {
    try {
        const users = await User.find({}, { username: 1 });
        res.json({ users });
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).send('Server error');
    }
});

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRoutes);

// Connect to the database
const { connectToDatabase } = require('./utils/db');
const {initializeUserFunctions} = require("./utils/userUtils");
connectToDatabase()
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(3001, () => {
            console.log('Server started on port 3001');
        });
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    });

// Testing if the DB is connected
app.get('/health', (req, res) => {
    if (mongoose.connection.readyState === 1) {
        res.status(200).json({ message: 'DB connected' });
    } else {
        res.status(503).json({ message: 'DB is not connected' });
    }
});

// ***** Uncomment this if you need to create random users *************
// initializeUserFunctions();

module.exports = app;
