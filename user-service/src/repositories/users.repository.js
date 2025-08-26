const User = require('../models/users.model');

const findAll = () => User.find();
const findById = (id) => User.findById(id);
const create = (user) => User.create(user);
const update = (id, data) => User.findByIdAndUpdate(id, data, { new: true });
const remove = (id) => User.findByIdAndDelete(id);

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove
};
