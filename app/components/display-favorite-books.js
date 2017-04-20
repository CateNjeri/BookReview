import Ember from 'ember';

export default Ember.Component.extend ({
  favoriteBooks: Ember.inject.service(),
  actions: {
    removeBookFromFavorites(book) {
      this.get("favoriteBooks").removeBook(book);
    }
  }
});
