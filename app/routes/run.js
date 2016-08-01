import Ember from 'ember';

export default Ember.Route.extend({

	runner: Ember.inject.service(),

	title: 'Run tests',

	queryParams: {
		project: {
			as: 'project',
			refreshModel: true
		},
		suites: {
			as: 'suites',
			refreshModel: true
		},
		tests: {
			as: 'tests',
			refreshModel: true
		}
	},

	model(params) {
		let suites = (params.suites || '').split(',');

		return new Promise((resolve, reject) => {

			this.store.findAll('test').then(allTests => {
				let selectedProject = params.project || allTests.map(test => test.get('project')).uniq().compact().objectAt(0),
					suites = allTests.filter(item => item.get('project') === selectedProject).map(test => test.get('suiteName')).uniq().compact(),
					selectedSuites = params.suites ? params.suites.split(',') : suites,
					tests = allTests.filter(item => (item.get('project') === selectedProject && selectedSuites.includes(item.get('suiteName')))),
					selectedTests = params.tests ? params.tests.split(',') : [];

				selectedTests = selectedTests.length > 0 ? selectedTests.map(id => {
					return this.store.peekRecord('test', id);
				}) : tests;

				resolve({
					selectedProject: selectedProject,
					selectedSuites: selectedSuites,
					selectedTests: selectedTests,
					projects: allTests.map(test => test.get('project')).uniq().compact(),
					suites: suites,
					tests: tests
				});
			});
		});
	},

	actions: {
		run() {
			this.get('runner').set('tests', this.modelFor('run').tests);
			this.transitionTo('runner', {queryParams: {step: 1}});
		}
	}
});
