import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		cancel() {
			this.modelFor('test/edit').rollbackAttributes();
			this.transitionTo('test');
		},
		save() {
			this.modelFor('test/edit').save();
			this.transitionTo('test');
		}
	}

});
