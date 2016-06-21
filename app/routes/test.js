import Ember from 'ember';

export default Ember.Route.extend({

	model() {
		return this.store.findAll('test');
	},

	actions: {
		select() {
			console.debug('select', ...arguments);
		},
		delete(record) {
			record.destroyRecord();
		}
	}
});
