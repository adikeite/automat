import Ember from 'ember';

export default Ember.Route.extend({

	model() {
		return {
			tests: this.store.findAll('test'),
			showDetails: false
		};
	},

	actions: {
		select(item) {
			console.log(item);
			this.transitionTo('test.edit', item.id);
		},
		delete(record) {
			record.destroyRecord();
		}
	}
});
