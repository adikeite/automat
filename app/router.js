import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {
  this.route('test', function() {
    this.route('create');
    this.route('run');
    this.route('edit', {path: 'edit/:test_id'});
    this.route('import');
  });
  this.route('user');
  this.route('dashboard');
  this.route('loading');

  this.route('tests', function() {});
});

export default Router;
