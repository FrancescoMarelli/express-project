function errorHandler(err, req, res, next) {
  console.error(err);

  if (err.message === 'InvalidInput') {
    return res.status(400).json({ message: 'Invalid input data' });
  }
  if (err.message === 'SubscriptionNotFound') {
    return res.status(404).json({ message: 'Subscription not found' });
  }
  res.status(500).json({ message: 'Internal Server Error' });
}

module.exports = errorHandler;