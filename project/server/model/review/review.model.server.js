const mongoose = require('mongoose');
const ReviewSchema = require('./review.schema.server.js');
const ReviewModel = mongoose.model("ReviewModel", ReviewSchema);
ReviewModel.createReviewForCritic = createReviewForCritic;
ReviewModel.findAllReviewsForCritic = findAllReviewsForCritic;
ReviewModel.findReviewById = findReviewById;
ReviewModel.updateReview = updateReview;
ReviewModel.deleteReview = deleteReview;
module.exports = ReviewModel;

function createReviewForCritic(review) {
  return ReviewModel.create(review);
}

function findAllReviewsForCritic(criticId) {
  return ReviewModel
    .find({_critic: criticId})
    .populate('_critic', 'username')
    .exec();
}

function findReviewById(reviewId) {
  return ReviewModel.findById(reviewId);
}

function updateReview(reviewId, review) {
  return ReviewModel.update({_id: reviewId}, review);
}

function deleteReview(reviewId) {
  return ReviewModel.remove({_id: reviewId});
}
