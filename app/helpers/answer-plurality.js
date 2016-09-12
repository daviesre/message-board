import Ember from 'ember';

export function answerPlurality(params) {
  var question = params[0];

  if(question.get('answers').get('length') === 1) {
    return " answer";
  } else {
    return " answers";
  }
}

export default Ember.Helper.helper(answerPlurality);
