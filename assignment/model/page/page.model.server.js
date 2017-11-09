const mongoose = require('mongoose');
const PageSchema = require('./page.schema.server.js');
const PageModel = mongoose.model("PageModel", PageSchema);
const websiteModel = require('../website/website.model.server.js');
PageModel.createPage = createPage;
PageModel.findAllPagesForWebsite = findAllPagesForWebsite;
PageModel.findPageById = findPageById;
PageModel.updatePage = updatePage;
PageModel.deletePage = deletePage;
module.exports = PageModel;

function createPage(websiteId, page) {
  let newPage = null;
  return PageModel
    .create(page)
    .then(function (page) {
      newPage = page;
      websiteModel
        .findWebsiteById(websiteId)
        .then(function (website) {
          website.pages.push(newPage);
          return website.save();
        });
    });
}

function findAllPagesForWebsite(websiteId) {
  return PageModel
    .find({_website: websiteId})
    .populate('_website', 'name')
    .exec();
}

function findPageById(pageId) {
  return PageModel.findById(pageId);
}

function updatePage(pageId, page) {
  return PageModel.update({_id: pageId}, page);
}

function deletePage(pageId) {
  return PageModel.delete({_id: pageId});
}
