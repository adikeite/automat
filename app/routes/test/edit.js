import Ember from 'ember';

export default Ember.Route.extend({
	actions: {
		cancel() {
			console.log('cancel');
			this.modelFor('test/edit').rollbackAttributes();
			this.transitionTo('test');
		},
		save() {
			console.log('save');
			this.modelFor('test/edit').save();
			this.transitionTo('test');
		}
	}

});
