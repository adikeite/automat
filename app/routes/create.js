import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return this.store.createRecord('test');
	},

	actions: {
		cancel() {
			this.modelFor('create').deleteRecord();
			this.transitionTo('test');
		},
		save() {
			Ember.set(this.modelFor('create'), 'createdDate', new Date());
			this.modelFor('create').save();
			this.transitionTo('test');
		}
	}
});
