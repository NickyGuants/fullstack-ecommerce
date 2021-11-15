const express = require('express');
const router = express.Router();
const { addUser, getSingleUser, getUsers, login, updateUser, deleteUser } = require('../controllers/users')
const protect = require('../middleware/authMiddleware');

//get users
router.route('/').get(getUsers);
router.route('/:id').get(protect, getSingleUser);
//login and signup
router.route('/signup').post(addUser);
router.route('/login').post(login);
//update and delete users
router.route('/:id').put(updateUser);
router.route('/:id').delete(deleteUser);

module.exports = router;