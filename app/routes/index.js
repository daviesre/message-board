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
      var newQuestion = this.store.createRecord('question', params);
      newQuestion.save();
      this.transitionTo('index');
    },
    saveCity(params) {
      var newAnswer = this.store.createRecord('answers', params);
      newAnswer.save();
      this.transitionTo('index');
    }
  }
});
