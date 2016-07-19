import Model from 'ember-data/model';
import { attr, hasMany } from 'ember-computed-decorators/ember-data';

export default Model.extend({

	@attr('string')
	name,

	@attr('string')
	project,

	@attr('string')
	suiteName,

	@attr('string', {defaultValue: ''})
	prerequisities,

	@attr('string', {defaultValue: ''})
	steps,

	@attr('date')
	createdDate,

	@hasMany('test-run')
	runs
});
