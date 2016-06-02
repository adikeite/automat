import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    this.store.createRecord('test', {
      id: 1,
      suiteName: 'suite name1',
      name: 'test case 1'
    });
    this.store.createRecord('test', {
      id: 2,
      suiteName: 'suite name2',
      name: 'test case 2'
    });
  },
  model() {
    return this.store.peekAll('test')
  }
});
