module.exports = function (app) {

  const criticModel = require("../model/critic/critic.model.server.js");

  app.get("/api/critic/", findCritic);
  app.post("/api/critic", createCritic);
  app.get("/api/critic/:crid", findCriticById);
  app.put("/api/critic/:crid", updateCritic);
  app.delete("/api/critic/:crid", deleteCritic);

  function findCriticById(req, res) {
    const criticId = req.params['crid'];
    criticModel
      .findCriticById(criticId)
      .then(function (critic){
        res.json(critic);
      });
  }

  function findCritic(req, res) {
    const username = req.query['username'];
    const password = req.query['password'];
    if(username && password) {
      criticModel
        .findCriticByCredentials(username, password)
        .then(function (critic) {
          res.json(critic);
        });
    } else if(username) {
      criticModel
        .findCriticByUsername(username)
        .then(function (critic) {
          res.json(critic);
        });
    }
  }

  function createCritic(req, res) {
    const critic = req.body;
    criticModel
      .createCritic(critic)
      .then(function (critic) {
        res.json(critic);
      });
  }

  function updateCritic(req, res) {
    const criticId = req.params['crid'];
    const critic = req.body;
    criticModel
      .updateCritic(criticId, critic)
      .then(function (critic) {
        res.json(critic);
      });
  }

  function deleteCritic(req, res) {
    const criticId = req.params['crid'];
    criticModel
      .deleteCritic(criticId)
      .then(function () {
        res.json();
      });
  }

};
