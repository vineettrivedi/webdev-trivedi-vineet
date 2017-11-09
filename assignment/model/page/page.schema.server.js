const mongoose = require('mongoose');
const widgetSchema = require('../widget/widget.schema.server.js');
const PageSchema = mongoose.Schema({
  _website: {type: mongoose.Schema.Types.ObjectId, ref: 'WebsiteModel'},
  name: String,
  title: String,
  description: String,
  widgets: [widgetSchema],
  dateCreated: Date
}, {collection: 'page'});

module.exports = PageSchema;
