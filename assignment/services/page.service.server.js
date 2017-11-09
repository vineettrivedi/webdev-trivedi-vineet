module.exports = function (app) {

  const pageModel = require("../model/page/page.model.server.js");

  pages = [
    { '_id': '321', 'name': 'Post 1', 'websiteId': '456', 'description': 'Lorem' },
    { '_id': '432', 'name': 'Post 2', 'websiteId': '456', 'description': 'Lorem' },
    { '_id': '543', 'name': 'Post 3', 'websiteId': '456', 'description': 'Lorem' }
  ];

  app.post("/api/website/:wid/page", createPage);
  app.get("/api/website/:wid/page", findAllPagesForWebsite);
  app.get("/api/page/:pid", findPageById);
  app.put("/api/page/:pid", updatePage);
  app.delete("/api/page/:pid", deletePage);

  function createPage(req, res) {
    const websiteId = req.params['wid'];
    const page = req.body;
    page._website = websiteId;
    delete page._id;
    pageModel
      .createPage(websiteId, page)
      .then(function (page) {
        res.json(page);
      });
    // page._id = Math.random();
    // page.websiteId = websiteId;
    // this.pages.push(page);
    // res.json(page);
  }

  function updatePage(req, res) {
    const pageId = req.params['pid'];
    const page = req.body;
    pageModel
      .updatePage(page)
      .then(function (page) {
        res.json(page);
      });
    // for (let x = 0; x < this.pages.length; x++) {
    //   if (this.pages[x]._id === pageId) {
    //     this.pages[x]._id = page.id;
    //     this.pages[x].name = page.name;
    //     this.pages[x].websiteId = page.websiteId;
    //     this.pages[x].description = page.description;
    //     res.json(this.pages[x]);
    //   }
    // }
  }

  function deletePage(req, res) {
    const pageId = req.params['pid'];
    pageModel
      .deletePage(pageId)
      .then(function () {
        res.json();
      });
    // for (let x = 0; x < this.pages.length; x++) {
    //   if (this.pages[x]._id === pageId) {
    //     this.pages.splice(x, 1);
    //   }
    // }
  }

  function findPageById(req, res) {
    const pageId = req.params['pid'];
    pageModel
      .findPageById(pageId)
      .then(function (page) {
        res.json(page);
      });
    // for (let x = 0; x < this.pages.length; x++) {
    //   if (this.pages[x]._id === pageId) {
    //     res.json(this.pages[x]);
    //   }
    // }
  }

  function findAllPagesForWebsite(req, res) {
    const websiteId = req.params['wid'];
    pageModel
      .findAllPagesForWebsite(websiteId)
      .then(function (pages) {
        res.json(pages);
      });
    // const result = [];
    // let count = 0;
    // for (let x = 0; x < this.pages.length; x++) {
    //   if (this.pages[x].websiteId === websiteId) {
    //     result[count++] = this.pages[x];
    //   }
    // }
    // res.json(result);
  }
};
