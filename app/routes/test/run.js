import Ember from 'ember';

export default Ember.Route.extend({


	model() {
		return Ember.RSVP.hash({
			selectedProject: undefined,
			tests: [],
			suites: [],
			projects: this.store.findAll('test').then(tests => {
				return tests.map(test => test.get('project')).uniq().compact();
			})
		});
	},

	afterModel() {
		this.selectProject(this.modelFor('test/run').projects.objectAt(0));
	},

	selectProject(project) {
		let model = this.modelFor('test/run');

		Ember.set(model, 'selectedProject', project);

		this.store.findAll('test').then(tests => {
			Ember.set(model, 'suites', tests
				.filter(item => item.get('project') === project)
				.map(test => test.get('suiteName')).uniq().compact());
		});
	},

	actions: {

		selectProject(project) {
			this.selectProject(project);
		},

		selectSuite(el) {
			let suites = jQuery.makeArray($(':selected', el)).map((index, item) => {
				return item.value;
			});

			let model = this.modelFor('test/run');
			let project = model.selectedProject;


			this.store.findAll('test').then(tests => {
				Ember.set(model, 'tests', tests
					.filter(item => (item.get('project') === project) && suites.indexOf(item.suite) > -1)
					.map(test => test.get('name')).uniq().compact());
			});

			console.log('suite', suites);
		},

		run() {}
	}
});
