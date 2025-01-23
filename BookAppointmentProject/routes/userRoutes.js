// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/users', userController.createUser); // Route to create a user
router.get('/users', userController.getUsers);   // Route to fetch all users
router.delete('/users/:id', userController.deleteUser); // Route to delete a user

module.exports = router;
