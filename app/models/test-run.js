import Model from 'ember-data/model';
import { attr, belongsTo } from 'ember-computed-decorators/ember-data';

export default Model.extend({

	@belongsTo('test')
	test,

	@attr('string')
	result,

	@attr('date')
	date
});
