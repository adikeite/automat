import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('test')
  },

  actions: {
    cancel() {
      console.log('cancel');
      this.modelFor('test/create').deleteRecord();
      this.transitionTo('test');
    },
    save() {
      console.log('save');
      this.transitionTo('test');
    }
  }
});
