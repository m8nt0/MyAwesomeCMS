const mongoose = require('mongoose');
const appConfig = require('./appConfig');

mongoose.connect(appConfig.dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose;
