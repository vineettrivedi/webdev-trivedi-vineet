const mongoose = require('mongoose');
const db = mongoose.connect('mongodb://localhost/cs5610', { useMongoClient: true });
module.exports = db;
