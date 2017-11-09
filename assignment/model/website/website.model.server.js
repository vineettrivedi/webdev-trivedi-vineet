const mongoose = require('mongoose');
const WebsiteSchema = require('./website.schema.server.js');
const WebsiteModel = mongoose.model("WebsiteModel", WebsiteSchema);
const userModel = require('../user/user.model.server.js');
WebsiteModel.createWebsiteForUser = createWebsiteForUser;
WebsiteModel.findAllWebsitesForUser = findAllWebsitesForUser;
WebsiteModel.findWebsiteById = findWebsiteById;
WebsiteModel.updateWebsite = updateWebsite;
WebsiteModel.deleteWebsite = deleteWebsite;
module.exports = WebsiteModel;

function createWebsiteForUser(userId, website) {
  let newWebsite = null;
  return WebsiteModel
    .create(website)
    .then(function (website) {
      newWebsite = website;
      userModel
        .findUserById(userId)
        .then(function (user) {
          user.websites.push(newWebsite);
          return user.save();
        });
    });
}

function findAllWebsitesForUser(userId) {
  return WebsiteModel
    .find({_user: userId})
    .populate('_user', 'username')
    .exec();
}

function findWebsiteById(websiteId) {
  return WebsiteModel.findById(websiteId);
}

function updateWebsite(websiteId, website) {
  return WebsiteModel.update({_id: websiteId}, website);
}

function deleteWebsite(websiteId) {
  return WebsiteModel.delete({_id: websiteId});
}
