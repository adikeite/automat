import Ember from 'ember';
import computed, { oneWay, observes, alias } from 'ember-computed-decorators';

export default Ember.Controller.extend({

	queryParams: ['selectedProject', 'selectedSuites', 'selectedTests'],

	selectedProject: null,
	selectedSuites: null,
	selectedTests: null,

	actions: {
		selectProject(project) {
			this.set('selectedProject', project);
			this.set('selectedSuites', null);
			this.set('selectedTests', null);
		},

		selectSuite(el) {
			this.set('selectedSuites', jQuery.makeArray($(':selected', el)).map((item) => {
				return item.value;
			}));
			this.set('selectedTests', null);

		},

		selectTest(el) {
			this.set('selectedTests', jQuery.makeArray($(':selected', el)).map((item) => {
				return item.value;
			}));
		}
	}
});
