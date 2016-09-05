import Ember from 'ember';

export default Ember.Route.extend({

	model() {
		return Ember.RSVP.hash({
			tests: this.store.findAll('test'),
			projects: this.store.findAll('test').then(data => {
				return data.map(item => item.get('project')).uniq();
			}),
			selectedProject: this.store.findAll('test').then(data => {
				return data.map(item => item.get('project')).uniq()[0];
			}),
			showDetails: false
		});
	},


	actions: {
		select(item) {
			this.transitionTo('test.edit', item.id);
		},
		delete(record) {
			record.destroyRecord();
		}

	}
});
