const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const userRepository = require('../repositories/userRepository');
const appConfig = require('../config/appConfig');

exports.login = async ({ email, password }) => {
  const user = await userRepository.findUserByEmail(email);
  if (!user || !await bcrypt.compare(password, user.password)) {
    throw new Error('Invalid email or password');
  }

  const token = jwt.sign({ id: user._id }, appConfig.jwtSecret, { expiresIn: '1h' });
  return token;
};
