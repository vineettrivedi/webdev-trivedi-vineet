module.exports = function (app) {

  const bitModel = require("../model/bit/bit.model.server.js");

  app.post("/api/comedian/:cid/bit", createBit);
  app.get("/api/comedian/:cid/bit", findAllBitsForComedian);
  app.get("/api/bit/:bid", findBitById);
  app.put("/api/bit/:bid", updateBit);
  app.delete("/api/bit/:bid", deleteBit);

  function createBit(req, res) {
    const comedianId = req.params['cid'];
    const bit = req.body;
    bit._comedian = comedianId;
    bitModel
      .createBit(bit)
      .then(function (bit) {
        res.json(bit);
      });
  }

  function updateBit(req, res) {
    const bitId = req.params['bid'];
    const bit = req.body;
    bitModel
      .updateBit(bitId, bit)
      .then(function (bit) {
        res.json(bit);
      });
  }

  function deleteBit(req, res) {
    const bitId = req.params['bid'];
    bitModel
      .deleteBit(bitId)
      .then(function () {
        res.json();
      });
  }

  function findAllBitsForComedian(req, res) {
    const comedianId = req.params['cid'];
    bitModel
      .findAllBitsForComedian(comedianId)
      .then(function (bits) {
        res.json(bits);
      });
  }

  function findBitById(req, res) {
    const bitId = req.params['bid'];
    bitModel
      .findBitById(bitId)
      .then(function (bit) {
        res.json(bit);
      });
  }

};
