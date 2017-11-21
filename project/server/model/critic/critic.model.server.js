const mongoose = require('mongoose');
const CriticSchema = require("./critic.schema.server.js");
const CriticModel = mongoose.model("CriticModel", CriticSchema);
CriticModel.createCritic = createCritic;
CriticModel.findCriticByCredentials = findCriticByCredentials;
CriticModel.findCriticById = findCriticById;
CriticModel.findCriticByUsername = findCriticByUsername;
CriticModel.updateCritic = updateCritic;
CriticModel.deleteCritic = deleteCritic;
module.exports = CriticModel;

function createCritic(critic) {
  return CriticModel.create(critic);
}

function findCriticByCredentials(username, password) {
  return  CriticModel.findOne({username: username, password: password});
}

function findCriticById(criticId) {
  return CriticModel.findById(criticId);
}

function findCriticByUsername(username) {
  return CriticModel.findOne({username: username});
}

function updateCritic(criticId, critic) {
  return CriticModel.update({_id: criticId}, critic);
}

function deleteCritic(criticId) {
  return CriticModel.remove({_id: criticId});
}
