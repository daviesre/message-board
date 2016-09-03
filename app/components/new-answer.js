import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },

    save1() {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
      };
      this.set('addNewAnswer', false);
      this.sendAction('save2', params);
    }
  }
});
