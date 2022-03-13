const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
  } = require('../../controllers/user-controller');
  
// /api/users
router
  .route('/')
  .get(getAllUsers)
  .post(createUser)