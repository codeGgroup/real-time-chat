// userController.js
const User = require('../models/User');

const fetchUsers = async (req, res) => {
    try {
        const users = await User.find(
            {},
            { username: 1 },
            {lean: true}
        );
        res.json({ users });
    } catch (err) {
        console.error('Error fetching users:', err);
        res.status(500).send('Server error');
    }
};

module.exports = {
    fetchUsers,
};
