const mongoose = require('mongoose');
const URI = 'mongodb://127.0.0.1:27017/BookStore'

const mongoConnect = () => {
    mongoose.connect(URI);
}

module.exports = mongoConnect;