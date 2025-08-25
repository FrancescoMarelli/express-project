const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');

/**
 * @swagger
 * /users/new:
 *   post:
 *     summary: Create a new user
 *     consumes:
 *      - application/json
 *     parameters:
 *       - in: body
 *         name: user
 *         description: The user to create.
 *         schema:
 *           type: object
 *           required:
 *             - name
 *           properties:
 *             name:
 *               type: string
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
 *  put:
 *     summary: Update a user by ID
 *     consumes:
 *      - application/json
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the user to update.
 *         schema:
 *           type: string
 *       - in: body
 *         name: user
 *         description: The user data to update.
 *         schema:
 *           type: object
 *           properties:
 *             name:
 *               type: string
 *     responses:
 *       200:
 *         description: The updated user.
 *         schema:
 *           $ref: '#/definitions/User'
 *       400:
 *         description: Bad request.
 *       404:
 *         description: User not found.
 *       500:
 *         description: Server error.
 */
router.put('/:id', usersController.updateUser);

/**
 * @swagger
 * /users/{id}:
 *   delete:
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
