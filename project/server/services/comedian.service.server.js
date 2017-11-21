module.exports = function (app) {

  const comedianModel = require("../model/comedian/comedian.model.server.js");

  app.get("/api/comedian/", findComedian);
  app.post("/api/comedian", createComedian);
  app.get("/api/comedian/:cid", findComedianById);
  app.put("/api/comedian/:cid", updateComedian);
  app.delete("/api/comedian/:cid", deleteComedian);

  function findComedianById(req, res) {
    const comedianId = req.params['cid'];
    comedianModel
      .findComedianById(comedianId)
      .then(function (comedian){
        res.json(comedian);
      });
  }

  function findComedian(req, res) {
    const username = req.query['username'];
    const password = req.query['password'];
    if(username && password) {
      comedianModel
        .findComedianByCredentials(username, password)
        .then(function (comedian) {
          res.json(comedian);
        });
    } else if(username) {
      comedianModel
        .findComedianByUsername(username)
        .then(function (comedian) {
          res.json(comedian);
        });
    }
  }

  function createComedian(req, res) {
    const comedian = req.body;
    comedianModel
      .createComedian(comedian)
      .then(function (comedian) {
        res.json(comedian);
      });
  }

  function updateComedian(req, res) {
    const comedianId = req.params['cid'];
    const comedian = req.body;
    comedianModel
      .updateComedian(comedianId, comedian)
      .then(function (comedian) {
        res.json(comedian);
      });
  }

  function deleteComedian(req, res) {
    const comedianId = req.params['cid'];
    comedianModel
      .deleteComedian(comedianId)
      .then(function () {
        res.json();
      });
  }

};
