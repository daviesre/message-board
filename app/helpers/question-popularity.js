import Ember from 'ember';

export function questionPopularity(params) {
  var question = params[0];

  if(question.get('answers').get('length') === 1) {
    return " answer";
  } else {
    return " answers";
  }
}

export default Ember.Helper.helper(questionPopularity);
