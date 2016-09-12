import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  author: DS.attr(),
  note: DS.attr(),
  answers: DS.hasMany('answer', {async: true}),
  allAnswers: Ember.computed('answers.length', function() {
      return this.get('answers.length');
    }),
});
