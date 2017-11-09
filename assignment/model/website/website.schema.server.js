const mongoose = require('mongoose');
const pageSchema = require('../page/page.schema.server.js');
const WebsiteSchema = mongoose.Schema({
  _user: {type: mongoose.Schema.Types.ObjectId, ref: 'UserModel'},
  name: String,
  description: String,
  pages: [pageSchema],
  dateCreated: Date
}, {collection: 'website'});

module.exports = WebsiteSchema;
