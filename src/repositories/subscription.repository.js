const Subscription = require('../models/subscription.model');

const createSubscription = (subscription) => Subscription.create(subscription);
const getSubscriptions = () => Subscription.find();
const getSubscriptionById = (id) => Subscription.findById(id);
const updateSubscription = (id, data) => Subscription.findByIdAndUpdate(id, data, { new: true });
const deleteSubscription = (id) => Subscription.findByIdAndDelete(id);

module.exports = {
    createSubscription,
    getSubscriptions,
    getSubscriptionById,
    updateSubscription,
    deleteSubscription
};