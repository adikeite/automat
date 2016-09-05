import Ember from 'ember';
import computed, { oneWay, observes, alias } from 'ember-computed-decorators';

export default Ember.Controller.extend({
	@computed('model.tests', 'model.selectedProject')
	filtered(tests, selected) {
		return tests.filterBy('project', selected);
	},

	actions: {
		projectSelect(x, project) {
			this.set('model.selectedProject', project);
		}
	}

});
