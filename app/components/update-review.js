import Ember from 'ember';

export default Ember.Component.extend ({
  updateReviewForm: false,
  actions: {
    showUpdateReviewForm() {
      this.set("updateReviewForm", true);
    },
    updateReview(review) {
      review.save();
      this.set("updateReviewForm", false);
    }
  }
});
