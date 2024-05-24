const express = require('express');
const authController = require('./controllers/authController');
const errorHandler = require('./middleware/errorHandler');
const authMiddleware = require('./middleware/authMiddleware');

const app = express();
app.use(express.json());

app.post('/api/auth/login', authController.login);

app.use(errorHandler);

module.exports = app;
