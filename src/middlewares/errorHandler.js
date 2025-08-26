function errorHandler(err, req, res, next) {
  console.error(err.stack);
  if (err.message === 'UserNotFound') {
    return res.status(404).json({ message: 'User not found' });
  }
  if (err.message === 'InvalidInput') {
    return res.status(400).json({ message: 'Invalid input data' });
  }
  if (err.message === 'SubscriptionNotFound') {
    return res.status(404).json({ message: 'Subscription not found' });
  }
  if (err.message === 'PaymentFailed') {
    return res.status(402).json({ message: 'Payment required' });
  }
  res.status(500).json({ message: 'Internal Server Error' });
}

module.exports = errorHandler;