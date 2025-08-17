const express = require('express');
const router = express.Router();

// Importar controlador
const usersController = require('../controllers/users.controller');

// Definir rutas
router.get('/', usersController.getAllUsers);
router.post('/new', usersController.createUser);
router.get('/:id', usersController.getUserById);
router.put('/:id', usersController.updateUser);
router.delete('/:id', usersController.deleteUser);

module.exports = router;
