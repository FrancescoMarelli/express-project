function errorHandler(err, req, res, next) {
  console.error(err);

  if (err.message === 'UserNotFound') {
    return res.status(404).json({ error: 'User not found' });
  }

  res.status(500).json({ error: 'Internal Server Error' });
}

module.exports = errorHandler;
