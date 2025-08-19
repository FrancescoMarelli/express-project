const userRepository = require('../repositories/users.repository');

const getAllUsers = async () => {
  return await userRepository.findAll();
};

const getUserById = async (id) => {
  const user = await userRepository.findById(id);
  if (!user) throw new Error('UserNotFound');
  return user;
};

const createUser = async (data) => {
  return await userRepository.create(data);
};

const updateUser = async (id, data) => {
  const user = await userRepository.update(id, data);
  if (!user) throw new Error('UserNotFound');
  return user;
};

const deleteUser = async (id) => {
  const user = await userRepository.remove(id);
  if (!user) throw new Error('UserNotFound');
  return user;
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
};
