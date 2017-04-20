import Ember from 'ember';

export default Ember.Service.extend ({
  favoriteBooksList: [],
  addBook(favoritedBook) {
    var copyFavoriteBooksList = this.get("favoriteBooksList").slice();
    if (copyFavoriteBooksList.contains(favoritedBook)) {
      alert("This book is already in your favorites list!");
    } else {
      this.get("favoriteBooksList").pushObject(favoritedBook);
    }
  },
  removeBook(favoritedBook) {
    if (confirm("Are you sure you want to delete this book from your favorites list?")) {
      var duplicateFavoriteBooksList = this.get("favoriteBooksList").slice();
      var indexOfFavoritedBook = duplicateFavoriteBooksList.indexOf(favoritedBook);
      duplicateFavoriteBooksList.splice(indexOfFavoritedBook, 1);
      this.set("favoriteBooksList", duplicateFavoriteBooksList);
    }
  }
});
