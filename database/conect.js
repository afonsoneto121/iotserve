const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/iot', {useNewUrlParser: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;
