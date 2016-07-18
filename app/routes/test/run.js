import Ember from 'ember';

export default Ember.Route.extend({

	queryParams: {
		selectedProject: {
			as: 'project',
			refreshModel: true
		},
		selectedSuites: {
			as: 'suites',
			refreshModel: true
		},
		selectedTests: {
			as: 'tests',
			refreshModel: true
		}
	},

	model(params) {
		let suites = (params.suites || '').split(',');

		return new Promise((resolve, reject) => {
			this.store.findAll('test').then(allTests => {
				let selectedProject = params.selectedProject || allTests.map(test => test.get('project')).uniq().compact().objectAt(0),
					suites = allTests.filter(item => item.get('project') === selectedProject).map(test => test.get('suiteName')).uniq().compact(),
					selectedSuites = params.selectedSuites ? params.selectedSuites.split(',') : suites,
					tests = allTests.filter(item => (item.get('project') === selectedProject && selectedSuites.includes(item.get('suiteName')))).map(test => test.get('name')).uniq().compact();

				resolve({
					selectedProject: selectedProject,
					selectedSuites: selectedSuites,
					selectedTests: params.selectedTests ? params.selectedTests.split(',') : tests,
					projects: allTests.map(test => test.get('project')).uniq().compact(),
					suites: suites,
					tests: tests
				});
			});
		});
	},

	actions: {
		run() {}
	}
});
