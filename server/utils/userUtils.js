const User = require('../models/User');
const bcrypt = require('bcrypt');

const createUser = async (username, plainTextPassword) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hash = await bcrypt.hash(plainTextPassword, salt);
        const user = new User({ username, password: hash });
        await user.save();
        console.log('User created successfully:', username, plainTextPassword);
    } catch (err) {
        console.error('Error creating user:', err);
    }
};

const createRandomUsers = async (numUsers) => {
    try {
        const userNamePrefixes = ['admin', 'user', 'guest', 'agent'];

        for (let i = 0; i < numUsers; i++) {
            const usernamePrefix = userNamePrefixes[
                Math.floor(
                    Math.random() * userNamePrefixes.length
                )
                ];
            // 8-character username
            const randomString = Math.random().toString(36).slice(-8);
            const username = `${usernamePrefix}${randomString}`;
            // 8-character password
            const plainTextPassword = Math.random().toString(36).slice(-8);
            await createUser(username, plainTextPassword);
        }
        console.log(`${numUsers} users created successfully`);
    } catch (err) {
        console.error('Error creating random users:', err);
    }
};

async function initializeUserFunctions() {
    try {
        await createRandomUsers(5);
        console.log('Users created successfully!');
    } catch (err) {
        console.error('Error creating users:', err);
    }
}

module.exports = {
    createUser,
    createRandomUsers,
    initializeUserFunctions,
};
