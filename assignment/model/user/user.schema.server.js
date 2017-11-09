const mongoose = require('mongoose');
const websiteSchema = require('../website/website.schema.server.js');
const UserSchema = mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  websites: [websiteSchema],
  dateCreated: Date
}, {collection: 'user'});

module.exports = UserSchema;
