import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('question', params.question_id);
  },

  actions: {
    save3(params) {
      var newQuestion = this.store.createRecord('answer', params);
      var question = params.question;
      question.get('answers').addObject(newQuestion);
      newQuestion.save().then(function() {
        return question.save();
      });
      this.transitionTo('question', params.question);
    },
    destroyCity(question) {
      var answer_deletions = question.get('answers').map(function(answer) {
        return answer.destroyRecord();
      });
      Ember.RSVP.all(answer_deletions).then(function() {
        return question.destroyRecord();
      });
      this.transitionTo('index');
    }
  }
});
