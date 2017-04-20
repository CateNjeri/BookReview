import DS from 'ember-data';

export default DS.Model.extend ({
  username: DS.attr(),
  date: DS.attr(),
  profilePicture: DS.attr(),
  rating: DS.attr("number"),
  reviewContent: DS.attr(),
  book: DS.belongsTo("book", {async: true})
});
