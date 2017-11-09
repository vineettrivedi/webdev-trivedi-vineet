module.exports = function (app) {

  const websiteModel = require("../model/website/website.model.server.js");

  websites = [
    { '_id': '123', 'name': 'Facebook',    'developerId': '456', 'description': 'Lorem' },
    { '_id': '234', 'name': 'Tweeter',     'developerId': '456', 'description': 'Lorem' },
    { '_id': '456', 'name': 'Gizmodo',     'developerId': '456', 'description': 'Lorem' },
    { '_id': '890', 'name': 'Go',          'developerId': '123', 'description': 'Lorem' },
    { '_id': '567', 'name': 'Tic Tac Toe', 'developerId': '123', 'description': 'Lorem' },
    { '_id': '678', 'name': 'Checkers',    'developerId': '123', 'description': 'Lorem' },
    { '_id': '789', 'name': 'Chess',       'developerId': '234', 'description': 'Lorem' }
  ];

  app.get("/api/user/website/:wid", findWebsiteById);
  app.post("/api/user/:uid/website", createWebsite);
  app.get("/api/user/:uid/website", findAllWebsitesForUser);
  app.put("/api/user/website/:wid", updateWebsite);
  app.delete("/api/user/website/:wid", deleteWebsite);

  function createWebsite(req, res) {
    const userId = req.params['uid'];
    const website = req.body;
    website._user = userId;
    delete website._id;
    websiteModel
      .createWebsite(userId, website)
      .then(function (website) {
        res.json(website);
      });
    // website._id = Math.random();
    // website.developerId = userId;
    // this.websites.push(website);
    // res.json(website);
  }

  function updateWebsite(req, res) {
    const websiteId = req.params['wid'];
    const website = req.body;
    websiteModel
      .updateWebsite(websiteId)
      .then(function (website) {
        res.json(website);
      });
    // for (let x = 0; x < this.websites.length; x++) {
    //   if (this.websites[x]._id === websiteId) {
    //     this.websites[x]._id = website.id;
    //     this.websites[x].name = website.name;
    //     this.websites[x].developerId = website.developerId;
    //     this.websites[x].description = website.description;
    //     res.json(this.websites[x]);
    //   }
    // }
  }

  function deleteWebsite(req, res) {
    const websiteId = req.params['wid'];
    websiteModel
      .deleteWebsite(websiteId)
      .then(function () {
        res.json();
      });
    // for (let x = 0; x < this.websites.length; x++) {
    //   if (this.websites[x]._id === websiteId) {
    //     this.websites.splice(x, 1);
    //     res.json();
    //   }
    // }
  }

  function findWebsiteById(req, res) {
    const websiteId = req.params['wid'];
    websiteModel
      .findWebsiteById(websiteId)
      .then(function (website) {
        res.json(website);
      });
    // for (let x = 0; x < this.websites.length; x++) {
    //   if (this.websites[x]._id === websiteId) {
    //     console.log(this.websites[x]);
    //     res.json(this.websites[x]);
    //   }
    // }
  }

  function findAllWebsitesForUser(req, res) {
    const userId = req.params['uid'];
    websiteModel
      .findAllWebsitesForUser(userId)
      .then(function (websites) {
        res.json(websites);
      });
  //   const result = [];
  //   let count = 0;
  //   for (let x = 0; x < this.websites.length; x++) {
  //     if (this.websites[x].developerId === userId) {
  //       result[count++] = this.websites[x];
  //     }
  //   }
  //   res.json(result);
  }
};
