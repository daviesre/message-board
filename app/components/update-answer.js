import Ember from 'ember';

export default Ember.Component.extend({
  updateAnswerForm: false,
  actions: {
    updateAnswerForm() {
      this.set('updateAnswerForm', true);
    },
    update(answer) {
      var params = {
        content: this.get('content'),
        author: this.get('author'),
      };
      this.set('updateAnswerForm', false);
      this.sendAction('update', answer, params);
    }
  }
});
