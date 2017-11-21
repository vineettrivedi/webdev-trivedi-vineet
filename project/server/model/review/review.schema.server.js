const mongoose = require('mongoose');
const ReviewSchema = mongoose.Schema({
  _critic: {type: mongoose.Schema.Types.ObjectId, ref: 'CriticModel'},
  _bit: {type: mongoose.Schema.Types.ObjectId, ref: 'BitModel'},
  text: String,
}, {collection: 'review'});

module.exports = ReviewSchema;
