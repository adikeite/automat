import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  name: attr('string'),
  suiteName: attr('string'),
  prerequisities: attr('string'),
  steps: attr('string')

});
