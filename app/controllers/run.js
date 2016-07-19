import Ember from 'ember';
import computed, { oneWay, observes, alias } from 'ember-computed-decorators';

export default Ember.Controller.extend({

	queryParams: ['project', 'suites', 'tests'],

	project: null,
	suites: null,
	tests: null,

	actions: {
		selectProject(project) {
			this.set('project', project);
			this.set('suites', null);
			this.set('tests', null);
		},

		selectSuite(el) {
			this.set('suites', jQuery.makeArray($(':selected', el)).map((item) => {
				return item.value;
			}));
			this.set('tests', null);
		},

		selectTest(el) {
			this.set('tests', jQuery.makeArray($(':selected', el)).map((item) => {
				return item.value;
			}));
		}
	}
});
