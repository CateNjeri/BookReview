import Ember from 'ember';

export default Ember.Route.extend ({
  model(params) {
    return this.store.findRecord("book", params.book_id);
  },
  actions: {
    saveNewReview(params) {
      var newReview = this.store.createRecord("review", params);
      var book = params.book;
      book.get("reviews").addObject(newReview);
      newReview.save().then(function() {
        return book.save();
      });
      this.transitionTo("book", params.book);
    }
  }
});
