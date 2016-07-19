import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
  this.route('test', function() {
      this.route('edit', {path: 'edit/:test_id'});
  });
  this.route('create');
  this.route('run');
  this.route('import');
  this.route('user');
  this.route('loading');
  this.route('tests', function() {});
  this.route('runner');
});

export default Router;
