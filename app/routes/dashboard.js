import Ember from 'ember';

export default Ember.Route.extend({
	model() {
		return Ember.RSVP.hash({
			tests: this.store.findAll('test', {reload: true}),
			testRun: this.store.findAll('test-run', {reload: true})
		}).then((data) => {
			console.log(data.testRun);

			let ids = data.testRun.toArray().map(item => item.get('test.id')).uniq().map((id) => {
				return this.store.peekRecord('test', id);
			});
			return ids;
		});
	}
});
