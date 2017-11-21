module.exports = function (app) {

  const reviewModel = require("../model/review/review.model.server.js");

  app.post("/api/critic/:crid/review", createReview);
  app.get("/api/critic/:crid/review", findAllReviewsForCritic);
  app.get("/api/review/:rid", findReviewById);
  app.put("/api/review/:rid", updateReview);
  app.delete("/api/review/:rid", deleteReview);

  function createReview(req, res) {
    const criticId = req.params['crid'];
    const review = req.body;
    review._critic = criticId;
    reviewModel
      .createReview(review)
      .then(function (review) {
        res.json(review);
      });
  }

  function updateReview(req, res) {
    const reviewId = req.params['rid'];
    const review = req.body;
    reviewModel
      .updateReview(reviewId, review)
      .then(function (review) {
        res.json(review);
      });
  }

  function deleteReview(req, res) {
    const reviewId = req.params['rid'];
    reviewModel
      .deleteReview(reviewId)
      .then(function () {
        res.json();
      });
  }

  function findAllReviewsForCritic(req, res) {
    const criticId = req.params['crid'];
    reviewModel
      .findAllReviewsForCritic(criticId)
      .then(function (reviews) {
        res.json(reviews);
      });
  }

  function findReviewById(req, res) {
    const reviewId = req.params['rid'];
    reviewModel
      .findReviewById(reviewId)
      .then(function (review) {
        res.json(review);
      });
  }

};
