const express = require('express');
const appConfig = require('./config/appConfig');
const app = require('./app');

const port = appConfig.port;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
