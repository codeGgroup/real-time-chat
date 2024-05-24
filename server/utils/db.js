const mongoose = require("mongoose");

const connectToDatabase = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/chat-app', {
            socketTimeoutMS: 30000,
            serverSelectionTimeoutMS: 5000,
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

module.exports = { connectToDatabase };
