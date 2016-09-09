import Ember from 'ember';

export function questionPopularity(params) {
  var question = params[0];

  if(question.get('answers').get('length') >= 2) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-fire">Hot!</span>')
  } else if(question.get('answers').get('length') === 0) {
    return Ember.String.htmlSafe('<span class="glyphicon glyphicon-remove">No</span>')
  }
}

export default Ember.Helper.helper(questionPopularity);
