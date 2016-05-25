import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('test', function() {
    this.route('create');
    this.route('run');
    this.route('dashboard');
  });
  this.route('user');
});

export default Router;
