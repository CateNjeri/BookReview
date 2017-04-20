import Ember from 'ember';

export default Ember.Route.extend ({
  model() {
    return Ember.RSVP.hash ({
      books: this.store.findAll("book"),
      reviews: this.store.findAll("review")
    });
  },
  actions: {
    saveNewBook(params) {
      var newBook = this.store.createRecord("book", params);
      newBook.save();
      this.transitionTo("admin");
    },
    deleteBook(book) {
      if (confirm("Are you sure you want to delete this book?")) {
        book.destroyRecord(); //No need for .store Firebase reference when destroying
      }
    },
    deleteReview(review) {
      if (confirm("Are you sure you want to delete this review?")) {
        review.destroyRecord();
      }
    }
  }
});
