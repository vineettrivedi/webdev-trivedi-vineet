const mongoose = require('mongoose');
var connectionString = 'mongodb://localhost/project'; // for local
if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
  var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
  var password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += '@ds129374.mlab.com:29374/heroku_xzrh2kf3'; // use yours
}
const db = mongoose.connect(connectionString, { useMongoClient: true });
module.exports = db;
