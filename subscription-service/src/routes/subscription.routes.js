const express = require('express')
const router = express.Router()
const subscriptionsController = require('../controllers/subscription.controller')

/**
 * @swagger
 * tags:
 *   name: Subscriptions
 *   description: Subscription management and retrieval
 * definitions:
 *   Subscription:
 *     type: object
 *     properties:
 *       userId:
 *         type: string
 *       plan:
 *         type: string
 *       startDate:
 *         type: string
 *         format: date
 *       endDate:
 *         type: string
 *         format: date
 *
 * /subscriptions:
 *   get:
 *     tags: [Subscriptions]
 *     summary: Retrieve a list of subscriptions
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: A list of subscriptions.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/definitions/Subscription'
 *       500:
 *         description: Server error.
 */
router.get('/', subscriptionsController.getSubscriptions)

/**
 * @swagger
 * /subscriptions/new:
 *   post:
 *     summary: Create a new subscription
 *     tags: [Subscriptions]
 *     consumes:
 *      - application/json
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/Subscription'
 *     responses:
 *       201:
 *         description: The created subscription.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Subscription'
 *       400:
 *         description: Bad request.
 *       500:
 *         description: Server error.
 */
router.post('/new', subscriptionsController.createSubscription)

/**
 * @swagger
 * /subscriptions/{id}:
 *  get:
 *     tags: [Subscriptions]
 *     summary: Get a subscription by ID
 *     produces:
 *      - application/json
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the subscription to retrieve.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A subscription object.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Subscription'
 *       404:
 *         description: Subscription not found.
 *       500:
 *         description: Server error.
 */
router.get('/:id', subscriptionsController.getSubscriptionById)

/**
 * @swagger
 * /subscriptions/{id}:
 *   put:
 *     summary: Update a subscription by ID
 *     tags: [Subscriptions]
 *     consumes:
 *      - application/json
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the subscription to update.
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/Subscription'
 *     responses:
 *       200:
 *         description: The updated subscription.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/definitions/Subscription'
 *       400:
 *         description: Bad request.
 *       404:
 *         description: Subscription not found.
 *       500:
 *         description: Server error.
 */
router.put('/:id', subscriptionsController.updateSubscription)

/**
 * @swagger
 * /subscriptions/{id}:
 *   delete:
 *     summary: Delete a subscription by ID
 *     tags: [Subscriptions]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the subscription to delete.
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Subscription deleted successfully.
 *       404:
 *         description: Subscription not found.
 *       500:
 *         description: Server error.
 */
router.delete('/:id', subscriptionsController.deleteSubscription)


module.exports = router