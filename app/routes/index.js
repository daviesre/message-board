import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      anwers: this.store.findAll('answer')
    });
  },
  actions: {
    save3(params) {
      var newAnswer = this.store.createRecord('answer', params);
      newAnswer.save();
      this.transitionTo('index');
    },
    saveQuestion(params) {
      var newQuestoin = this.store.createRecord('question', params);
      newQuestoin.save();
      this.transitionTo('index');
    }
  }
});
