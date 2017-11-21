const mongoose = require('mongoose');
const BitSchema = require('./bit.schema.server.js');
const BitModel = mongoose.model("BitModel", BitSchema);
BitModel.createBitForComedian = createBitForComedian;
BitModel.findAllBitsForComedian = findAllBitsForComedian;
BitModel.findBitById = findBitById;
BitModel.updateBit = updateBit;
BitModel.deleteBit = deleteBit;
module.exports = BitModel;

function createBitForComedian(bit) {
  return BitModel.create(bit);
}

function findAllBitsForComedian(comedianId) {
  return BitModel
    .find({_comedian: comedianId})
    .populate('_comedian', 'username')
    .exec();
}

function findBitById(bitId) {
  return BitModel.findById(bitId);
}

function updateBit(bitId, bit) {
  return BitModel.update({_id: bitId}, bit);
}

function deleteBit(bitId) {
  return BitModel.remove({_id: bitId});
}
