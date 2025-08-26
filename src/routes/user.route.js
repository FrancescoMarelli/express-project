const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: User management and retrieval
 * definitions:
 *   User:
 *     type: object
 *     properties:
 *       name:
 *         type: string
 *       email:
 *         type: string
 *       password:
 *         type: string
 *
 * /users/new:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     consumes:
 *      - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/User'
 *     responses:
 *       201:
 *         description: The created user.
 *         schema:
 *           User:
 *            id : string
 *            name: string
 *       400:
 *         description: Bad request.
 *       500:
 *         description: Server error.
 */
router.post('/new', usersController.createUser);

/**
 * @swagger
 * /users/{id}:
 *  get:
 *     tags: [Users]
 *     summary: Get a user by ID
 *     produces:
 *      - application/json
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A single user.
 *         schema:
 *          User:
 *           id : string
 *           name: string
 *       404:
 *         description: User not found.
 *       500:
 *         description: Server error.
 */
router.get('/:id', usersController.getUserById);

/**
 * @swagger
 * /users:
 *   get:
 *     tags: [Users]
 *     summary: Get all users
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 User:
 *                  id : string
 *                  name: string
 *       404:
 *         description: No users found.
 *       500:
 *         description: Server error
 */
router.get('/', usersController.getAllUsers);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Update the User by the id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The User id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/User'
 *     responses:
 *       200:
 *         description: The user was updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/User'
 *       404:
 *         description: The user was not found
 *       500:
 *         description: Some error happened
 */
router.put('/:id', usersController.updateUser);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     tags: [Users]
 *     summary: Delete a user by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to delete.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: User deleted successfully.
 *       404:
 *         description: User not found.
 *       500:
 *         description: Server error.
 */
router.delete('/:id', usersController.deleteUser);



module.exports = router;
