import Ember from 'ember';

export function questionPopularity(params) {
  var question = params[0];

  if(question.get('answers').get('length') === 1) {
    return question.get('answers').get('length') + " answer";
  } else {
    return question.get('answers').get('length') + " answers";
  }
}

export default Ember.Helper.helper(questionPopularity);
