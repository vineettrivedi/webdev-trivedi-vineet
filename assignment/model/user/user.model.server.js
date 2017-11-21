const mongoose = require('mongoose');
const UserSchema = require("./user.schema.server.js");
const UserModel = mongoose.model("UserModel", UserSchema);
UserModel.createUser = createUser;
UserModel.findUserByCredentials = findUserByCredentials;
UserModel.findUserById = findUserById;
UserModel.findUserByUsername = findUserByUsername;
UserModel.updateUser = updateUser;
UserModel.deleteUser = deleteUser;
module.exports = UserModel;

function createUser(user) {
  return UserModel.create(user);
}

function findUserByCredentials(username, password) {
  return  UserModel.findOne({username: username, password: password});
}

function findUserById(userId) {
  return UserModel.findById(userId);
}

function findUserByUsername(username) {
  return UserModel.findOne({username: username});
}

function updateUser(userId, user) {
  return UserModel.update({_id: userId}, user);
}

function deleteUser(userId) {
  return UserModel.remove({_id: userId});
}
