import Ember from 'ember';

export default Ember.Component.extend ({
  addNewReviewForm: false,
  actions: {
    showNewReviewForm() {
      this.set("addNewReviewForm", true);
    },
    saveNewReview() {
      var params = {
        username: this.get("username"),
        date: this.get("date"),
        profilePicture: this.get("profilePicture"),
        rating: parseInt(this.get("rating")),
        reviewContent: this.get("reviewContent"),
        book: this.get("book") //Don't foget to connect review to book
      };
      this.set("addNewReviewForm", false);
      this.sendAction("saveNewReview", params);
      //Empty form values
      this.set("username", "");
      this.set("date", "");
      this.set("profilePicture", "");
      this.set("rating", "");
      this.set("reviewContent", "");
    }
  }
});
