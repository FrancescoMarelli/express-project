// Controladores de usuarios
const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Doe' },
  { id: 3, name: 'Foo Bar' },
];

const getAllUsers = (req, res) => {
  res.json(users);
};

const getUserById = (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
};

const createUser = (req, res) => {
    const newUser = {
        id: users.length + 1,
        name: req.body.name,
    };
    users.push(newUser);
    res.status(201).json(newUser);
    }


const updateUser = (req, res) => {
    const user = users.find(u => u.id === parseInt(req.params.id));
    if (user) {
        user.name = req.body.name;
        res.json(user);
    } else {
        res.status(404).send('User not found');
    }
}

const deleteUser = (req, res) => {
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));
    if (userIndex !== -1) {
        users.splice(userIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send('User not found');
    }
};

module.exports = {
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  createUser,
};
