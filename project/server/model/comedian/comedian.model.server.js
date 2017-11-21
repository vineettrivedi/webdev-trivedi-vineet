const mongoose = require('mongoose');
const ComedianSchema = require("./comedian.schema.server.js");
const ComedianModel = mongoose.model("ComedianModel", ComedianSchema);
ComedianModel.createComedian = createComedian;
ComedianModel.findComedianByCredentials = findComedianByCredentials;
ComedianModel.findComedianById = findComedianById;
ComedianModel.findComedianByUsername = findComedianByUsername;
ComedianModel.updateComedian = updateComedian;
ComedianModel.deleteComedian = deleteComedian;
module.exports = ComedianModel;

function createComedian(comedian) {
  return ComedianModel.create(comedian);
}

function findComedianByCredentials(username, password) {
  return  ComedianModel.findOne({username: username, password: password});
}

function findComedianById(comedianId) {
  return ComedianModel.findById(comedianId);
}

function findComedianByUsername(username) {
  return ComedianModel.findOne({username: username});
}

function updateComedian(comedianId, comedian) {
  return ComedianModel.update({_id: comedianId}, comedian);
}

function deleteComedian(comedianId) {
  return ComedianModel.remove({_id: comedianId});
}
