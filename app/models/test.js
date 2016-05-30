import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  testCaseName: attr('string'),
  testSuiteName: attr('string'),
  prerequisities: attr('string'),
  steps: attr('string')

});
