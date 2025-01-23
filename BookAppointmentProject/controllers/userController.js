// controllers/userController.js
const { User } = require('../models/user'); // Correctly import the User model

// Insert user
exports.createUser = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    const newUser = await User.create({ name, email, phone }); // Use the User model
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(400).json({ error: error.message });
  }
};

// Get all users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.findAll(); // Retrieve all users
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(400).json({ error: error.message });
  }
};

// Delete user
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findByPk(id); // Find user by primary key
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    await user.destroy(); // Delete user
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error('Error deleting user:', error);
    res.status(400).json({ error: error.message });
  }
};
