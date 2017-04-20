import DS from 'ember-data';

export default DS.Model.extend ({
  title: DS.attr(),
  author: DS.attr(),
  tagLine: DS.attr(),
  description: DS.attr(),
  image: DS.attr(),
  totalBookRating: DS.attr("number"),
  reviews: DS.hasMany("review", {async: true})
});
