import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return Ember.RSVP.hash({
			tests: this.store.findAll('test'),
			testRun: this.store.findAll('test-run')
		}).then((data) => {
			let ids = data.testRun.toArray().map(item => item.get('test.id')).uniq().map((id) => {
				return this.store.peekRecord('test', id);
			});
			return ids;
		});
	}
});
