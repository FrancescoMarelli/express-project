const subscriptionService = require('../services/subscription.service');

const createSubscription = async (req, res, next) => {
  try {
    const subscription = await subscriptionService.createSubscription(req.body);
    res.status(201).json(subscription);
  } catch (error) {
    next(error);    
  }
};

const getSubscriptions = async (req, res, next) => {
  try {
    const subscriptions = await subscriptionService.getAllSubscriptions();
    res.status(200).json(subscriptions);
  } catch (error) {
    next(error);
  }
};

const getSubscriptionById = async (req, res, next) => {
  try {
    const subscription = await subscriptionService.getSubscriptionById(req.params.id);
    if (!subscription) {
      return res.status(404).json({ message: 'Subscription not found' });
    }
    res.status(200).json(subscription);
  } catch (error) {
    next(error);  }
};

const updateSubscription = async (req, res, next) => {
  try {
    const subscription = await subscriptionService.updateSubscription(req.params.id, req.body);
    if (!subscription) {
      return res.status(404).json({ message: 'Subscription not found' });
    }
    res.status(200).json(subscription);
  } catch (error) {
    next(error);  }
};

const deleteSubscription = async (req, res, next) => {
  try {
    const subscription = await subscriptionService.deleteSubscription(req.params.id);
    if (!subscription) {
      return res.status(404).json({ message: 'Subscription not found' });
    }
    res.status(200).json({ message: 'Subscription deleted' });
  } catch (error) {
    next(error);  }
};

module.exports = {
    createSubscription,
    getSubscriptions,
    getSubscriptionById,
    updateSubscription,
    deleteSubscription
};