import Ember from 'ember';

export default Ember.Component.extend ({
  favoriteBooks: Ember.inject.service(),
  actions: {
    addBookToFavorites(book) {
      this.get("favoriteBooks").addBook(book);
    }
  }
});
