import Ember from 'ember';

export default Ember.Component.extend ({
  addNewBookForm: false,
  actions: {
    showNewBookForm() {
      this.set("addNewBookForm", true);
    },
    saveNewBook() {
      var params = {
        title: this.get("title"),
        author: this.get("author"),
        tagLine: this.get("tagLine"),
        description: this.get("description"),
        image: this.get("image")
      };
      this.set("addNewBookForm", false);
      this.sendAction("saveNewBook", params);
      //Empty form values
      this.set("title", "");
      this.set("author", "");
      this.set("tagLine", "");
      this.set("description", "");
      this.set("image", "");
    }
  }
});
