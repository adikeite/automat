import Ember from 'ember';

export default Ember.Route.extend({

	model() {
		return {imported: []};
	},

	actions: {

		import(importedData) {
			importedData = importedData.split('---');

			let records = importedData.map((test => {
				let testSplit = test.split(/\n/).map(item => item.trim());
				let stepsRow = testSplit.indexOf('#### Steps');
				let steps = testSplit.slice(stepsRow + 1);
				steps = steps.slice(0, steps.indexOf(''));

				let prereqRow = testSplit.indexOf('#### Prerequisities');
				let prereq = testSplit.slice(prereqRow + 1);
				prereq = prereq.slice(0, prereq.indexOf(''));

				return {
					project: test.match('# (.*)')[1],
					suiteName: test.match('## (.*)')[1],
					name: test.match('### (.*)')[1],
					steps: steps.join('\n'),
					prerequisities: prereq.join('\n'),
					createdDate: new Date()
				};
			}));
			let model = this.modelFor('test/import');

			records.forEach(record => {
				let imported = this.store.createRecord('test', record).save();
				model.imported.pushObject(imported);
			});
		}
	}
});
