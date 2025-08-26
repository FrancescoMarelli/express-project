const subscriptionRepository = require('../repositories/subscription.repository');

const createSubscription = async (data) => {
    return await subscriptionRepository.createSubscription(data);
};

const getAllSubscriptions = async () => {
    return await subscriptionRepository.getSubscriptions();
};

const getSubscriptionById = async (id) => {
    const subscription = await subscriptionRepository.getSubscriptionById(id);
    if (!subscription) throw new Error('SubscriptionNotFound');
    return subscription;
};

const updateSubscription = async (id, data) => {
    const subscription = await subscriptionRepository.updateSubscription(id, data);
    if (!subscription) throw new Error('SubscriptionNotFound');
    return subscription;
};

const deleteSubscription = async (id) => {
    const subscription = await subscriptionRepository.deleteSubscription(id);
    if (!subscription) throw new Error('SubscriptionNotFound');
    return subscription;
};


module.exports = {
    createSubscription,
    getAllSubscriptions,
    getSubscriptionById,
    updateSubscription,
    deleteSubscription
};