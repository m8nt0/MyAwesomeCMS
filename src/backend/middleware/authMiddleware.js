const jwt = require('jsonwebtoken');
const appConfig = require('../config/appConfig');

module.exports = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  if (!token) {
    return res.status(401).send({ error: 'Access denied, no token provided.' });
  }

  try {
    const decoded = jwt.verify(token, appConfig.jwtSecret);
    req.user = decoded;
    next();
  } catch (ex) {
    res.status(400).send({ error: 'Invalid token.' });
  }
};
