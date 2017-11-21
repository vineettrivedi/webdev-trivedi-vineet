const mongoose = require('mongoose');
const BitSchema = mongoose.Schema({
  _comedian: {type: mongoose.Schema.Types.ObjectId, ref: 'ComedianModel'},
//  _review: {type: mongoose.Schema.Types.ObjectId, ref: 'ReviewModel'},
  type: String,
  name: String,
  description: String,
  text: String,
  url: String,
  width: String,
  height: String,
}, {collection: 'bit'});

module.exports = BitSchema;
