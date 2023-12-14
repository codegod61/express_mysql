const UsersModel = require('../models/users.js');

const getAllUsers = async (req, res) => {
    try {
        const [data] = await UsersModel.getAllUsers();
        res.json({
            message: 'Get All User Success',
            data: data
        });
        console.log(data);
    } catch (error) {
        console.error('Error fetching users:', error);
        res.status(500).json({
            message: 'Internal Server Error',
            error: error.message || error
        });
    }
}

const createNewUser = async (req, res) => {
    const { body } = req;
  const {name, email, address} = req.body;
  console.log(req.body);

  if (!(email && name && address)) {
    return res.status(400).json({
      message: 'You have submitted incorrect data.',
      data: null,
    });
  }

  try {
    await UsersModel.createNewUser(body);
    res.status(201).json({
      message: 'CREATE new user success',
      data: body,
    });
  } catch (error) {
    res.status(500).json({
      message: 'Server Error',
      serverMessage: error,
    });
  }
}



const updateUser = (req, res) => {
    const { idUser } = req.params;
    console.log('idUser : ', idUser);
    res.json({
        message: 'update user success',
        data: req.body
    })
}

const deleteUser = (req, res) => {
    const { idUser } = req.params;
    res.json({
        message: 'DELETE user success',
        data: {
            id: idUser,
            name:  'taufiq',
            email: 'taufiq@gmail.com',
            alamat: 'kota bma'
        }
    })
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser
}