import Ember from 'ember';

export function reviewRating(rating) {
  var reviewRating = rating; //Had to change from params b/c params gave weird object

  var starIcon = "<span class='glyphicon glyphicon-star'></span>";
  var emptyStarIcon = "<span class='glyphicon glyphicon-star-empty'></span>";
  var filledStars = starIcon.repeat(reviewRating);
  var emptyStars = emptyStarIcon.repeat(5 - reviewRating);

  return Ember.String.htmlSafe(filledStars + emptyStars);
}

export default Ember.Helper.helper(reviewRating);
