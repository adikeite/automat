import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    this.store.createRecord('test', {
      id: 1,
      testSuiteName: 'suite name1',
      testCaseName: 'test case name'
    });
    this.store.createRecord('test', {
      id: 2,
      testSuiteName: 'suite name2',
      testCaseName: 'test case name'
    });
  },
  model() {
    return this.store.peekAll('test')
  }
});
