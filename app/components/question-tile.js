import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestion: Ember.inject.service(),
  
  actions: {
    addToFavorites(item) {
      alert("Successfully added to your favorites!");
      this.get('favoriteQuestion').add(item);
    },
  }
});
