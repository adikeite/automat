import Ember from 'ember';

export default Ember.Route.extend({

	runner: Ember.inject.service(),

	model(params) {
		let step = parseInt(params.step, 10) || 1;

		return {
			tests: this.get('runner').tests,
			step: step,
			test: this.get('runner').tests[step - 1]
		};
	},

	nextStep(result, test) {

		let record = this.store.createRecord('test-run', {
			result: result,
			date: new Date()
		});

		record.save().then(() => {
			test.get('runs').pushObject(record).save();
		});
	},

	actions: {
		ok(test) {
			this.nextStep('OK', test);
		},
		fail(test) {
			this.nextStep('FAIL', test);
		},
		unable(test) {
			this.nextStep('UNABLE', test);
		}
	}
});
