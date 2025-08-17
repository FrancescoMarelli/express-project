const User = require('../models/user.model');

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching users' });
  }
};


const createUser = async (req, res) => {
    try {
        const newUser = new User({
            name: req.body.name
        });
        await newUser. save()
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'Error creating user' });
    }
};

module.exports = {
  getAllUsers,
  createUser
};
