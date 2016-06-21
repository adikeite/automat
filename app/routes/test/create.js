import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.createRecord('test');
	},

	actions: {
		cancel() {
			console.log('cancel');
			this.modelFor('test/create').deleteRecord();
			this.transitionTo('test');
		},
		save() {
			console.log('save');
			Ember.set(this.modelFor('test/create'), 'createdDate', new Date());
			this.modelFor('test/create').save();
			this.transitionTo('test');
		}
	}
});
