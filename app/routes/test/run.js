import Ember from 'ember';

export default Ember.Route.extend({


	model() {
		return {
			projects: this.store.findAll('test').then(tests => {
				return tests.map(test => test.get('project')).uniq().compact();
			}),
			suites: this.store.findAll('test').then(tests => {
				return tests.map(test => test.get('suiteName')).uniq().compact();
			})
		};
	},

	actions: {


	}
});
