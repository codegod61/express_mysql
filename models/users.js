const dbPool = require('../config/database.js');

const getAllUsers = () => {
    return dbPool.execute('SELECT * FROM users');
}

const createNewUser = async (userData) => {
    const { name, email, address } = userData;

    const [result] = await dbPool.execute(
        'INSERT INTO users (name, email, address) VALUES (?, ?, ?)',
        [name, email, address]
    );

    const newUser = {
        id: result.insertId,
        name: name,
        email: email,
        address: address
    };

    return newUser;
}

module.exports = {
    getAllUsers,
    createNewUser
};