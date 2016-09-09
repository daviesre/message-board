import Ember from 'ember';

export default Ember.Component.extend  ({
  actions: {
    addToFavorites(question) {
      console.log(question);
      this.get('favorite').add(question);
    }
  }
});
