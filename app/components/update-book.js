import Ember from 'ember';

export default Ember.Component.extend ({
  updateBookForm: false,
  actions: {
    showUpdateBookForm() {
      this.set("updateBookForm", true);
    },
    updateBook(book) {
      book.save();
      this.set("updateBookForm", false);
    }
  }
});
